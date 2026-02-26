"use client";
import HeroSectioncosmetic from "@/components/hero-sectioncosmetic";
import { TransformationSectioncosmetic } from "@/components/TransformationSectioncosmetic";
import Cosmeticdoctor from "@/components/cosmeticdoctor-section";
import CosmeticWhyPatientsTrustUs from "@/components/CosmeticWhyPatientsTrustUs";
import CosmeticTestimonials from "@/components/CosmeticTestimonials";
import CosmeticFAQ from "@/components/faq-section";
import CosmeticNavbar from "@/components/cosmeticheader";
import CosmeticFooter from "@/components/CosmeticFooter";
import CosmeticBeforeAfterGallery from "@/components/cosmeticBeforeAfterGallery";
import CosmeticContact from "@/components/CosmeticContact";
import CosmeticTreatments from "@/components/cosmetictreatment";
import Head from 'next/head';
import Script from 'next/script';

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <CosmeticNavbar />
        <HeroSectioncosmetic />
        {/* <section id="cosbeforeafter">
          <CosmeticBeforeAfterGallery />
        </section> */}

        <TransformationSectioncosmetic />
        <section id="procedures">
          <CosmeticTreatments />
        </section>
        <section id="cosdoctor">
          <Cosmeticdoctor />
        </section>
        <CosmeticWhyPatientsTrustUs />
        <CosmeticTestimonials />

        <CosmeticFAQ />
        <CosmeticContact />
        <CosmeticFooter />
      </main>
    </>
  );
}