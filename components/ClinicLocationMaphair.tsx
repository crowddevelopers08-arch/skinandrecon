"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Phone, MapPin } from "lucide-react"

export default function Contact() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [pageInfo, setPageInfo] = useState({
    url: "",
    title: "",
    referrer: "",
  })
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "Baldness",
  })

  // Capture page information when component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageInfo({
        url: window.location.href,
        title: document.title,
        referrer: document.referrer || "direct",
      })
      
      console.log("Contact Form - Page URL captured:", window.location.href)
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   if (submitting) return
  //   setSubmitting(true)

  //   try {
  //     const response = await fetch("/api/contact-form", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         name: formData.name,
  //         mobile: formData.phone,
  //         email: formData.email,
  //         concern: formData.concern,
  //         source: "Website leads",
  //         formName: "Website leads",
  //         pageUrl: pageInfo.url,
  //         pageTitle: pageInfo.title,
  //         referrer: pageInfo.referrer,
  //         userAgent: navigator.userAgent,
  //         timestamp: new Date().toISOString(),
  //       }),
  //     })

  //     const data = await response.json()
  //     console.log("Form submission response:", data)
      
  //   } catch (error) {
  //     console.error("Error submitting hair form:", error)
  //   } finally {
  //     router.push("/thankyou-hairtreatments")
  //     setFormData({ name: "", phone: "", email: "", concern: "Baldness" })
  //     setSubmitting(false)
  //   }
  // }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.phone,
          email: formData.email,
          concern: formData.concern,
          source: "Website leads",
          formName: "Website leads",
          pageUrl: pageInfo.url,
          pageTitle: pageInfo.title,
          referrer: pageInfo.referrer,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }),
      })

      const data = await response.json()
      console.log("Form submission response:", data)
      
      // Add delay before redirect on success
      setTimeout(() => {
        router.push("/thankyou-hairtreatments")
        setFormData({ name: "", phone: "", email: "", concern: "Baldness" })
        setSubmitting(false)
      }, 500) // 2 second delay
      
    } catch (error) {
      console.error("Error submitting hair form:", error)
      
      // Add delay before redirect on error
      setTimeout(() => {
        router.push("/thankyou-hairtreatments")
        setFormData({ name: "", phone: "", email: "", concern: "Baldness" })
        setSubmitting(false)
      }, 500) // 2 second delay
    }
  }

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>
      <section
        id="contact"
        className="w-full py-8 md:py-12 lg:py-12 bg-gradient-to-b from-muted/20 to-background"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Form */}
            <section id="hairform">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-balance">
                  Get Your Free Consultation Today
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7b5f43] focus:border-[#7b5f43] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7b5f43] focus:border-[#7b5f43] transition-colors"
                      placeholder="+91 (000) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7b5f43] focus:border-[#7b5f43] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Your Concern
                    </label>
                    <select
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#7b5f43] focus:border-[#7b5f43] transition-colors"
                    >
                      <option>Baldness</option>
                      <option>Hair Thinning</option>
                      <option>Receding Hairline</option>
                      <option>Patchy Beard</option>
                      <option>Hair Loss</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-6 py-4 cursor-pointer bg-[#7b5f43] text-white rounded-full hover:bg-[#6a5138] transition-all duration-300 font-medium shadow-md hover:shadow-lg text-base md:text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Book Free Consultation"}
                  </button>
                </form>
              </div>
            </section>

            {/* Map & Info */}
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div className="bg-muted rounded-xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29570.728957579213!2d77.580856!3d12.923565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b8f80f6699%3A0x8a119c3740835b17!2sSkin%20And%20Recon!5e1!3m2!1sen!2sin!4v1764050312371!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location in Bangalore - Satellite View"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                  <a
                    href="https://maps.app.goo.gl/RBFZKJ8QVCyRJXUA7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  >
                    <div className="p-3 bg-[#7b5f43]/10 rounded-lg flex-shrink-0">
                      <MapPin size={24} className="text-[#7b5f43]" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm md:text-base">
                        Clinic Address
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        Bangalore, India
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+916361417399"
                    className="flex items-center gap-4 flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  >
                    <div className="p-3 bg-[#7b5f43]/10 rounded-lg flex-shrink-0">
                      <Phone size={24} className="text-[#7b5f43]" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm md:text-base">
                        Phone
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        +91 6361417399
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}