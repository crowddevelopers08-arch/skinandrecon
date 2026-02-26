"use client";
import HairBeforeAfterGallery from '@/components/beforeafternew';
import BeforeAfterGalleryhair from '@/components/beforeafternew';
import { TransformationSectionhair } from '@/components/hairtrans';
import ClinicLocationMaphair from '@/components/ClinicLocationMaphair';
import { ComparisonSectionhair } from '@/components/ComparisonSection.tsxComparisonSectionhair';
import Hairdoctor from '@/components/ExpertSectionhair';
import HairFAQ from '@/components/FAQSectionhair';
import HairFooter from '@/components/Footerhair';
import HairResults from '@/components/hairvideo';
import HeroSection from '@/components/HeroSectionhair';
import HairNavbar from '@/components/IntroductionSectionhair';
import IntroductionSection from '@/components/IntroductionSectionhair';
import HairTestimonials from '@/components/TestimonialsSectionhair';
import HairWhyPatientsTrustUs from '@/components/TrustSectionhair';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Hair() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <HairNavbar />
        <HeroSection />
        <section id='gallery'>
          <HairBeforeAfterGallery />
        </section>
        <section id='procedures'>
          <TransformationSectionhair />
        </section>
        <section id='doctors'>
          <Hairdoctor />
        </section>
        <HairWhyPatientsTrustUs />
        <HairTestimonials />
        
        <HairFAQ />
        <ClinicLocationMaphair />
        <HairFooter />
      </div>
    </>
  );
}