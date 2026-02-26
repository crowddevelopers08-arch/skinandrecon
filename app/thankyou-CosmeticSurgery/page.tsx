import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Thankheader from "@/components/thankheader"

export const metadata: Metadata = {
  title: "Thank You - Skin & Recon Cosmetic Surgery Clinic",
  description:
    "Thank you for booking your consultation with Skin & Recon Cosmetic Surgery Clinic. We will contact you soon.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Google Ads Conversion Tracking */}
      <Script id="google-ads-conversion-cosmetic-surgery" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-11327193954/WGxYCNmB96kbEOKGnZkq'});
        `}
      </Script>
      
      {/* Submit lead form conversion tracking */}
      <Script id="google-ads-conversion-submit-lead" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-11327193954/TzWMCLuE88IbEOKGnZkq'});
        `}
      </Script>
      
      {/* Submit lead form Hair conversion page */}
      <Script id="google-ads-conversion-hair-lead" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17776361413/3k7pCLqul-IbEMX_tpxC',
            'value': 1.0,
            'currency': 'INR'
          });
        `}
      </Script>
      
      <Thankheader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#7b5f43]/20 rounded-full blur-xl animate-pulse"></div>
              <CheckCircle className="relative w-24 h-24 text-[#7b5f43] animate-bounce" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#7b5f43] to-[#7b5f43]/70 bg-clip-text text-transparent">
              Thank You!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your cosmetic surgery consultation request has been successfully submitted.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our team at Skin & Recon Cosmetic Surgery Clinic will review your request and contact you within 24 hours to
              schedule your personalized consultation with our dual-specialist team.
            </p>
          </div>

          {/* What's Next Section */}
          <div className="bg-gray-900/50 rounded-2xl p-8 mb-12 border border-[#7b5f43]/20">
            <h2 className="text-2xl font-bold text-[#7b5f43] mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#7b5f43]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#7b5f43] font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Expert Review</h3>
                <p className="text-gray-400 text-sm">Our dual-specialist team reviews your requirements and medical history</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#7b5f43]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#7b5f43] font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Personalized Contact</h3>
                <p className="text-gray-400 text-sm">We'll call you within 24 hours to discuss procedure options and schedule</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#7b5f43]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#7b5f43] font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Comprehensive Consultation</h3>
                <p className="text-gray-400 text-sm">Meet with Dr. Rakesh & Dr. Shruthi for your personalized treatment plan</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-[#7b5f43]/10 to-transparent rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#7b5f43] mb-6">Need Immediate Assistance?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-[#7b5f43]" />
                <span>+91 6361417399</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-[#7b5f43]" />
                <span>contact@skinandrecon.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-4">
              <MapPin className="w-5 h-5 text-[#7b5f43]" />
              <span>Skin & Recon Cosmetic Surgery Clinic, Bangalore, Karnataka, India</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Cosmetic-Surgery-treatment">
              <Button className="bg-[#7b5f43] text-black hover:bg-[#7b5f43]/90 px-8 py-3">Return to Homepage</Button>
            </Link>
            <Link href="/privacypolicy-CosmeticSurgery">
              <Button
                variant="outline"
                className="border-[#7b5f43] text-[#7b5f43] hover:bg-[#7b5f43] hover:text-black px-8 py-3 bg-transparent"
              >
                Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#7b5f43]/20 bg-gray-900/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Skin & Recon Cosmetic Surgery Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}