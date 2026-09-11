import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustValueStrip } from '@/components/home/TrustValueStrip';
import { PracticeRevenueCalculator } from '@/components/home/PracticeRevenueCalculator';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProcessTimelineSection } from '@/components/home/ProcessTimelineSection';
import { TechnologyDashboardSection } from '@/components/home/TechnologyDashboardSection';
import { SpecialtiesSection } from '@/components/home/SpecialtiesSection';
import { SecurityComplianceSection } from '@/components/home/SecurityComplianceSection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'UR RCM CONSULTANCY LLC | Medical Billing & Revenue Cycle Management',
  description: 'UR RCM CONSULTANCY LLC provides professional medical billing, certified coding, and revenue cycle management solutions designed to help healthcare providers streamline operations, overturn denials, and improve financial performance.',
  openGraph: {
    title: 'UR RCM CONSULTANCY LLC | Medical Billing & Revenue Cycle Management',
    description: 'Professional medical billing, coding, and RCM consultancy for healthcare providers. Headquartered in Austin, Texas.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden">
      {/* 1. HERO SECTION WITH BENCHMARK CONTROLLER */}
      <HeroSection />

      {/* 2. EXECUTIVE TRUST & KPI STRIP */}
      <TrustValueStrip />

      {/* 3. INTERACTIVE PRACTICE REVENUE & DENIAL CALCULATOR */}
      <PracticeRevenueCalculator />

      {/* 4. INTERACTIVE BENTO GRID SERVICES */}
      <ServicesSection />

      {/* 5. 4-PHASE ONBOARDING TIMELINE */}
      <ProcessTimelineSection />

      {/* 8. LIVE WORKFLOW TELEMETRY DASHBOARD */}
      <TechnologyDashboardSection />

      {/* 9. CLINICAL SPECIALTIES MATRIX */}
      <SpecialtiesSection />

      {/* 10. SECURITY, HIPAA & COMPLIANCE */}
      <SecurityComplianceSection />

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* 12. HIGH-CONVERTING CLOSING CTA */}
      <CTASection />
    </div>
  );
}
