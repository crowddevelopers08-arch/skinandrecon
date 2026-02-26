import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Skin & Recon Dermatology and Plastic Surgery Clinic",
  description:
    "At Skin & Recon, we offer personalized, high-quality care with a strong focus on your safety and comfort. Our team ensures a smooth, reassuring experience, making our clinic a warm and trusted place you'll be happy to recommend.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favda2.png", sizes: "16x16", type: "image/png" },
      { url: "/favda2.png", sizes: "32x32", type: "image/png" },
      { url: "/favda2.png", sizes: "48x48", type: "image/png" },
      { url: "/favda2.png", sizes: "192x192", type: "image/png" },
      { url: "/favda2.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favda2.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favda2.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17776361413"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17776361413');
            `,
          }}
        />
        
        {/* Microsoft Clarity Script */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v0p4b740zz");
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}