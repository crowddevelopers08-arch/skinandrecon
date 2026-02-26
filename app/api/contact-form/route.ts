import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface ContactFormData {
  name: string
  mobile: string
  email?: string
  concern: string
  source?: string
  formName?: string
  message?: string
  pageUrl?: string      // NEW: Full URL where form was submitted
  pageTitle?: string    // NEW: Page title
  referrer?: string     // NEW: Referrer URL
  userAgent?: string    // NEW: Browser/device info
}

/**
 * Send contact form data to TeleCRM with enhanced source tracking
 */
async function sendToTeleCRM(formData: ContactFormData, pageUrl: string) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  const endpoint = process.env.TELECRM_API_URL
  const apiKey = process.env.TELECRM_API_KEY

  if (!endpoint) {
    throw new Error("TELECRM_API_URL environment variable is not set")
  }
  if (!apiKey) {
    throw new Error("TELECRM_API_KEY environment variable is not set")
  }

  try {
    // Extract domain from URL for better categorization
    let domain = "unknown"
    try {
      if (pageUrl && pageUrl !== "unknown") {
        const urlObj = new URL(pageUrl)
        domain = urlObj.hostname
      }
    } catch {
      domain = pageUrl?.substring(0, 50) || "unknown"
    }

    const telecrmPayload = {
      fields: {
        Id: "",
        name: formData.name,
        email: formData.email || "",
        phone: (formData.mobile || "").replace(/\D/g, ""),
        city_1: "",
        preferredtime: "",
        preferreddate: "",
        message: `Concern: ${formData.concern}${
          formData.message ? ` | Message: ${formData.message}` : ""
        }`,
        select_the_procedure: formData.concern || "",
        Country: "",
        LeadID: "",
        CreatedOn: new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        "Lead Stage": "",
        "Lead Status": "new",
        "Lead Request Type": "consultation",
        PageName: domain, // Store domain in PageName
        State: "",
        Age: "",
      },
      actions: [
        {
          type: "SYSTEM_NOTE",
          text: `Form Name: ${formData.formName || "contact-form"}`,
        },
        {
          type: "SYSTEM_NOTE",
          text: `Live URL: ${pageUrl}`,
        },
        {
          type: "SYSTEM_NOTE",
          text: `Domain: ${domain}`,
        },
        {
          type: "SYSTEM_NOTE",
          text: `Page Title: ${formData.pageTitle || "Not available"}`,
        },
        {
          type: "SYSTEM_NOTE",
          text: `Referrer: ${formData.referrer || "direct"}`,
        },
        {
          type: "SYSTEM_NOTE",
          text: `Concern: ${formData.concern || "Not specified"}`,
        },
        {
          type: "SYSTEM_NOTE",
          text: `User Agent: ${formData.userAgent?.substring(0, 100) || "Not available"}`,
        },
      ],
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-Client-ID": "nextjs-website-integration",
        Accept: "application/json",
      },
      body: JSON.stringify(telecrmPayload),
      signal: controller.signal,
    })

    const status = response.status
    const rawText = await response.text()

    let parsed: any = null
    try {
      parsed = rawText ? JSON.parse(rawText) : null
    } catch {
      parsed = null
    }

    console.log("TeleCRM response:", {
      status,
      ok: response.ok,
      url: pageUrl,
      domain,
      rawPreview: rawText.slice(0, 300),
    })

    if (!response.ok) {
      const msg =
        parsed?.message ||
        `TeleCRM HTTP ${status}: ${rawText.slice(0, 200)}`
      throw new Error(msg)
    }

    const result =
      parsed ||
      ({
        status: "success",
        raw: rawText.slice(0, 300),
        httpStatus: status,
      } as any)

    clearTimeout(timeout)
    return result
  } catch (error) {
    clearTimeout(timeout)
    console.error("TeleCRM error:", error)
    throw error instanceof Error ? error : new Error(String(error))
  }
}

/**
 * Save lead to database using Prisma with enhanced source tracking
 */
async function saveLeadToDatabase(formData: ContactFormData) {
  try {
    // Use pageUrl as primary source, fallback to source field
    const liveUrl = formData.pageUrl || formData.source || "unknown"
    
    const lead = await prisma.lead.create({
      data: {
        name: formData.name,
        phone: formData.mobile,
        email: formData.email || "",
        concern: formData.concern,
        treatment: formData.concern,
        procedure: formData.concern,
        message: formData.message || "",
        formName: formData.formName || formData.source || "contact-form",
        source: formData.source || "website",
        // New source tracking fields
        pageUrl: liveUrl,
        pageTitle: formData.pageTitle || null,
        referrer: formData.referrer || null,
        userAgent: formData.userAgent || null,
        consent: true,
        status: "NEW",
        telecrmSynced: false,
      },
    })
    
    console.log(`Lead saved with pageUrl: ${liveUrl}`)
    return lead
  } catch (error) {
    console.error("Error saving lead to database:", error)
    throw new Error("Failed to save lead to database")
  }
}

/**
 * Update lead with TeleCRM sync status
 */
async function updateLeadTeleCRMSync(
  leadId: string,
  telecrmId?: string,
  error?: string,
) {
  try {
    await prisma.lead.update({
      where: { id: leadId },
      data: {
        telecrmSynced: !error,
        telecrmId: telecrmId || null,
        syncedAt: !error ? new Date() : null,
        error: error || null,
      },
    })
  } catch (err) {
    console.error("Error updating lead TeleCRM sync status:", err)
  }
}

/**
 * POST /api/contact-form
 * Used ONLY by the 2 forms (Hair + Cosmetic)
 */
export async function POST(request: NextRequest) {
  let leadId: string | null = null

  try {
    const data = (await request.json()) as Partial<ContactFormData> & {
      phone?: string
    }

    // support both mobile & phone fields from frontend
    const mobile = data.mobile || data.phone

    if (!data.name || !mobile || !data.concern) {
      return NextResponse.json(
        { error: "Missing required fields: name, mobile/phone, concern" },
        { status: 400 },
      )
    }

    // Get the live URL from the request data
    const liveUrl = data.pageUrl || "unknown"
    
    console.log(`Processing form submission from URL: ${liveUrl}`)

    const formData: ContactFormData = {
      name: data.name,
      mobile,
      email: data.email || "",
      concern: data.concern,
      source: data.source || "contact-form",
      formName: data.formName || data.source || "contact-form",
      message: data.message || "",
      pageUrl: liveUrl,
      pageTitle: data.pageTitle,
      referrer: data.referrer,
      userAgent: data.userAgent,
    }

    // 1) Save to DB with enhanced source tracking
    const lead = await saveLeadToDatabase(formData)
    leadId = lead.id

    // 2) TeleCRM best-effort
    let telecrmResponse: any
    let telecrmError: any

    try {
      telecrmResponse = await sendToTeleCRM(formData, liveUrl)
      await updateLeadTeleCRMSync(
        lead.id,
        telecrmResponse?.id || telecrmResponse?.leadId,
        undefined,
      )
    } catch (err) {
      console.error("TeleCRM submission failed:", err)
      telecrmError = err
      await updateLeadTeleCRMSync(
        lead.id,
        undefined,
        err instanceof Error ? err.message : String(err),
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        leadId: lead.id,
        pageUrl: liveUrl, // Return the captured URL in response
        telecrmResponse,
        telecrmError: telecrmError
          ? telecrmError instanceof Error
            ? telecrmError.message
            : String(telecrmError)
          : undefined,
        timestamp: new Date().toISOString(),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form submission error:", {
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    })

    if (leadId) {
      try {
        await prisma.lead.update({
          where: { id: leadId },
          data: {
            status: "LOST",
            error:
              error instanceof Error
                ? error.message
                : "Unknown submission error",
          },
        })
      } catch (updateError) {
        console.error("Error updating failed lead:", updateError)
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit form",
        details: error instanceof Error ? error.message : "Unknown error",
        referenceId: `ERR-${Date.now()}`,
      },
      { status: 500 },
    )
  }
}

/**
 * GET /api/contact-form
 * Used by LeadsTable for dashboard - Enhanced with URL tracking
 */
export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    })

    // Log URL statistics for debugging
    const urlStats = leads.reduce((acc: any, lead) => {
      const url = lead.pageUrl || lead.source || "unknown"
      acc[url] = (acc[url] || 0) + 1
      return acc
    }, {})
    
    console.log("Lead source URL statistics:", urlStats)

    const totalLeads = await prisma.lead.count()
    const syncedLeads = await prisma.lead.count({
      where: { telecrmSynced: true },
    })
    const newLeads = await prisma.lead.count({ where: { status: "NEW" } })

    return NextResponse.json(
      {
        success: true,
        message: "Leads fetched successfully",
        leads: leads.map((lead) => ({
          id: lead.id,
          name: lead.name || "Unknown",
          phone: lead.phone || "",
          email: lead.email || "",
          treatment: lead.treatment || lead.concern || "Not specified",
          procedure: lead.procedure || lead.concern || "Not specified",
          message: lead.message || "",
          city: lead.city || "",
          age: lead.age || "",
          consent: lead.consent || false,
          source: lead.source || "website",
          // Enhanced source fields
          pageUrl: lead.pageUrl || lead.source || "Not specified",
          pageTitle: lead.pageTitle || null,
          referrer: lead.referrer || null,
          userAgent: lead.userAgent || null,
          formName: lead.formName || "contact-form",
          status: lead.status.toLowerCase() as
            | "new"
            | "contacted"
            | "scheduled"
            | "converted"
            | "lost",
          telecrmSynced: lead.telecrmSynced || false,
          telecrmId: lead.telecrmId || undefined,
          createdAt: lead.createdAt.toISOString(),
          updatedAt: lead.updatedAt.toISOString(),
        })),
        statistics: {
          totalLeads,
          syncedLeads,
          newLeads,
          contactedLeads: await prisma.lead.count({
            where: { status: "CONTACTED" },
          }),
          scheduledLeads: await prisma.lead.count({
            where: { status: "SCHEDULED" },
          }),
          convertedLeads: await prisma.lead.count({
            where: { status: "CONVERTED" },
          }),
          lostLeads: await prisma.lead.count({ where: { status: "LOST" } }),
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch leads",
        details: error instanceof Error ? error.message : "Unknown error",
        leads: [],
        statistics: {
          totalLeads: 0,
          syncedLeads: 0,
          newLeads: 0,
          contactedLeads: 0,
          scheduledLeads: 0,
          convertedLeads: 0,
          lostLeads: 0,
        },
      },
      { status: 500 },
    )
  }
}