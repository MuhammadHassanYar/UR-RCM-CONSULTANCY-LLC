'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ReceiptText,
  FileCode2,
  SendHorizontal,
  ShieldAlert,
  TrendingUp,
  Award,
  UserCheck,
  CheckCheck,
  CreditCard,
  Layers,
  Check,
  ArrowRight,
  ChevronRight,
  Shield,
  Calendar,
  ChevronDown,
  HelpCircle,
  FileCheck,
} from 'lucide-react';
import { ServiceItem } from '@/lib/siteData';
import { useConsultation } from '@/components/ConsultationContext';

const ICON_MAP: Record<string, React.ElementType> = {
  ReceiptText,
  FileCode2,
  SendHorizontal,
  ShieldAlert,
  TrendingUp,
  Award,
  UserCheck,
  CheckCheck,
  CreditCard,
  Layers,
};

interface ServiceDetailClientProps {
  service: ServiceItem;
  otherServices: ServiceItem[];
}

export function ServiceDetailClient({ service, otherServices }: ServiceDetailClientProps) {
  const { openConsultation } = useConsultation();
  const Icon = ICON_MAP[service.iconName] || ReceiptText;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO SECTION & BREADCRUMB */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-12 lg:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
                <Icon className="w-3.5 h-3.5" />
                {service.category.toUpperCase()} RCM MODULE
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>

              <div className="text-base sm:text-xl font-medium text-[#00A859]">
                {service.tagline}
              </div>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {service.shortDesc}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openConsultation(service.slug)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all text-center"
                  aria-label={`Schedule a Consultation for ${service.title}`}
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Schedule a Consultation</span>
                </button>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm transition-colors text-center"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            {/* Right Card: Quick Spec */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{service.title}</div>
                  <div className="text-[11px] text-slate-500">UR RCM Consultancy LLC</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Execution Cadence:</span>
                  <span className="font-semibold text-slate-900">Daily Rhythms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">EHR Compatibility:</span>
                  <span className="font-semibold text-slate-900">Universal Interface</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Confidentiality:</span>
                  <span className="font-semibold text-emerald-700">Strict Standards</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                Tailored for independent practices, specialty clinics, and medical groups.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICE INTRODUCTION & OVERVIEW */}
      <section className="py-16 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Operational Scope</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Service Overview
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A859]">Scope of Responsibilities</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              What We Do
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our specialists take hands-on operational responsibility across each specific task in the workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whatWeDo.map((item, idx) => (
              <div
                key={item}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#00A859] border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (WORKFLOW STEPS) */}
      <section className="py-16 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Structured Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              How It Works
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Step-by-step execution designed to integrate smoothly with your existing practice routines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#0066CC]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-[#0066CC] mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY BENEFITS */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A859]">Provider Advantages</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Key Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.keyBenefits.map((b) => (
              <div key={b.title} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY IT MATTERS & DELIVERABLES */}
      <section className="py-16 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Clinical & Financial Impact</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Why It Matters for Your Practice
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {service.whyItMatters}
              </p>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs text-slate-700 leading-relaxed">
                <strong className="font-semibold text-[#0066CC]">UR RCM Philosophy:</strong> Clean billing operations prevent cash flow volatility, protect provider time, and ensure every legitimate clinical service is recognized.
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white p-7 rounded-2xl shadow-xl space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Reporting & Deliverables
              </div>
              <h3 className="text-xl font-bold text-white">What You Receive</h3>
              <ul className="space-y-2.5 pt-2">
                {service.deliverables.map((deliv) => (
                  <li key={deliv} className="flex items-start gap-2 text-xs text-slate-300">
                    <FileCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SERVICE SPECIFIC FAQS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-slate-50/60 border-b border-slate-200/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Common Questions</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Frequently Asked Regarding {service.title}
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.question} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8. DIRECT CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Strengthen Your {service.title} Operations
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Contact UR RCM CONSULTANCY LLC today for a confidential review of your current workflow and billing requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openConsultation(service.slug)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#0066CC] font-bold text-sm shadow-md hover:bg-blue-50 transition-colors text-center"
            >
              Schedule a Consultation
            </button>
            <Link
              href="/services"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-colors text-center"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>

      {/* 9. RELATED SERVICES */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Related RCM Services</h3>
            <Link href="/services" className="text-xs font-semibold text-[#0066CC] hover:underline flex items-center gap-1">
              View All 10 Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.slug}`}
                className="p-4 rounded-xl border border-slate-200 hover:border-[#0066CC]/50 hover:bg-slate-50 transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{other.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{other.shortDesc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#0066CC] shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
