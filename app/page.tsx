import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustValueStrip } from '@/components/home/TrustValueStrip';
import { IntroductionSection } from '@/components/home/IntroductionSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { ProcessTimelineSection } from '@/components/home/ProcessTimelineSection';
import { SpecialtiesSection } from '@/components/home/SpecialtiesSection';
import { TechnologyDashboardSection } from '@/components/home/TechnologyDashboardSection';
import { SecurityComplianceSection } from '@/components/home/SecurityComplianceSection';
import { CTASection } from '@/components/home/CTASection';
import { FAQSection } from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: 'UR RCM CONSULTANCY LLC | Medical Billing & Revenue Cycle Management',
  description: 'UR RCM CONSULTANCY LLC provides professional medical billing and revenue cycle management solutions designed to help healthcare providers streamline operations and improve financial performance.',
  openGraph: {
    title: 'UR RCM CONSULTANCY LLC | Medical Billing & Revenue Cycle Management',
    description: 'Professional medical billing, coding, and RCM consultancy for healthcare providers. Headquartered in Austin, Texas.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: TRUST / VALUE STRIP */}
      <TrustValueStrip />

      {/* SECTION 3: INTRODUCTION */}
      <IntroductionSection />

      {/* SECTION 4: SERVICES */}
      <ServicesSection />

      {/* SECTION 5: WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* SECTION 6: OUR PROCESS TIMELINE */}
      <ProcessTimelineSection />

      {/* SECTION 8: TECHNOLOGY / MODERN RCM */}
      <TechnologyDashboardSection />

      {/* SECTION 9: WHO WE SERVE */}
      <SpecialtiesSection />

      {/* SECTION 10: SECURITY & COMPLIANCE */}
      <SecurityComplianceSection />

      {/* SECTION 11: FAQ */}
      <FAQSection />

      {/* SECTION 12: HIGH CONVERSION DARK CTA */}
      <CTASection />
    </div>
  );
}
