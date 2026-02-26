// app/api/leads/[id]/route.ts
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

interface UpdateLeadData {
  status?: string
  notes?: string
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params
    const data: UpdateLeadData = await request.json()

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Lead ID is required" },
        { status: 400 },
      )
    }

    if (
      data.status &&
      !["new", "contacted", "scheduled", "converted", "lost"].includes(
        data.status,
      )
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid status value" },
        { status: 400 },
      )
    }

    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        ...(data.status && { status: data.status.toUpperCase() as any }),
        ...(data.notes && { message: data.notes }),
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Lead updated successfully",
        lead: {
          ...updatedLead,
          status: updatedLead.status.toLowerCase(),
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error updating lead:", error)

    if (
      error instanceof Error &&
      error.message.includes("Record to update not found")
    ) {
      return NextResponse.json(
        { success: false, error: "Lead not found" },
        { status: 404 },
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to update lead",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Lead ID is required" },
        { status: 400 },
      )
    }

    const lead = await prisma.lead.findUnique({
      where: { id },
    })

    if (!lead) {
      return NextResponse.json(
        { success: false, error: "Lead not found" },
        { status: 404 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        lead: {
          ...lead,
          status: lead.status.toLowerCase(),
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching lead:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch lead",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
