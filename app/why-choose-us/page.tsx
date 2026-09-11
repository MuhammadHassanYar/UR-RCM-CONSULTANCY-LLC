'use client';

import React from 'react';
import Link from 'next/link';
import {
  Crosshair,
  LineChart,
  Zap,
  ShieldCheck,
  Handshake,
  Check,
  X,
  Calendar,
  ArrowRight,
  Sparkles,
  Shield,
  Building2,
} from 'lucide-react';
import { useConsultation } from '@/components/ConsultationContext';
import { WHY_CHOOSE_US_PILLARS, COMPANY_INFO } from '@/lib/siteData';

const PILLAR_ICONS: Record<string, React.ElementType> = {
  Crosshair,
  LineChart,
  Zap,
  ShieldCheck,
  Handshake,
};

export default function WhyChooseUsPage() {
  const { openConsultation } = useConsultation();

  const comparisonRows = [
    {
      metric: 'Claim Scrubbing & Validation',
      traditional: 'Basic clearinghouse pass/fail with minimal manual pre-check',
      urrcm: 'Multi-layer validation including CCI, LCD/NCD, and clinical modifier rules prior to submission',
    },
    {
      metric: 'Denial Management',
      traditional: 'Passive response; claims often written off if initial appeal is rejected',
      urrcm: 'Root-cause forensic analysis (CARC/RARC), timely filing alerts, and structured escalation protocols',
    },
    {
      metric: 'A/R Follow-Up Discipline',
      traditional: 'Occasional bulk follow-ups focused only on high-dollar recent accounts',
      urrcm: 'Systematic aging buckets (30/60/90+) with dedicated follow-up rhythms for commercial and government payers',
    },
    {
      metric: 'Financial Reporting & Transparency',
      traditional: 'Opaque monthly summary statements lacking actionable operational insight',
      urrcm: 'Clear executive summaries, clean collection ratios, and ongoing performance reviews',
    },
    {
      metric: 'Provider Credentialing & Upstream Verification',
      traditional: 'Handled as an afterthought when claims begin to reject',
      urrcm: 'Proactive re-credentialing alerts and 72-hour upstream eligibility verification safeguards',
    },
    {
      metric: 'Client Communication & Support',
      traditional: 'Generic call-center tickets with high staff turnover',
      urrcm: 'Dedicated Austin, Texas-led consulting team with accessible communication lines',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00A859] text-xs font-bold uppercase tracking-wider border border-emerald-200">
            The UR RCM Advantage
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            The RCM Partner Healthcare Providers{' '}
            <span className="text-[#0066CC]">Rely On</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Revenue cycle management is not just data entry—it is the financial engine that fuels patient care. We deliver the accuracy, transparency, and operational rigor your practice deserves.
          </p>
        </div>
      </section>

      {/* 5 CORE PILLARS DEEP DIVE */}
      <section className="py-16 lg:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Foundational Commitments</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Five Operational Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Each engagement is anchored in measurable standards of quality and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[pillar.iconName] || ShieldCheck;
              return (
                <div
                  key={pillar.title}
                  className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-[#0066CC]/50 transition-colors flex flex-col justify-between min-w-0 max-w-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-slate-400">Pillar 0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
                    <div className="text-xs font-semibold text-[#00A859] mb-3">{pillar.subtitle}</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-[#0066CC] font-semibold">
                    Rigorous standards applied daily
                  </div>
                </div>
              );
            })}

            {/* Austin HQ Highlight */}
            <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-md flex flex-col justify-between min-w-0 max-w-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Austin, Texas Roots</h3>
                <div className="text-xs font-semibold text-emerald-400 mb-3">5900 Balcones Drive Ste 11101</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Headquartered in the heart of Texas, we combine accessible US-based consulting management with dependable nationwide practice coverage.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Direct phone: {COMPANY_INFO.phone}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A859]">Side-by-Side Comparison</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Traditional Billing vs. UR RCM Structured Model
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              See why healthcare organizations transition from fragmented billing to our disciplined consulting methodology.
            </p>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <th className="p-4 sm:p-5 w-1/4">Operational Dimension</th>
                  <th className="p-4 sm:p-5 w-3/8 text-slate-500">Traditional Billing Vendor</th>
                  <th className="p-4 sm:p-5 w-3/8 text-[#0066CC] bg-blue-50/50">UR RCM CONSULTANCY LLC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row) => (
                  <tr key={row.metric} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      {row.metric}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-900 bg-blue-50/20 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#00A859] shrink-0 mt-0.5" />
                        <span>{row.urrcm}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Cards - 100% Screen Fit with No Side Scrolling */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div
                key={row.metric}
                className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3 min-w-0 max-w-full"
              >
                <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                  {row.metric}
                </h3>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Traditional Billing Vendor
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span className="min-w-0 flex-1">{row.traditional}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                    <div className="text-[10px] font-bold text-[#0066CC] uppercase tracking-wider">
                      UR RCM Structured Model
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-900 font-medium leading-relaxed">
                      <Check className="w-4 h-4 text-[#00A859] shrink-0 mt-0.5" />
                      <span className="min-w-0 flex-1">{row.urrcm}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA under table */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => openConsultation()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-md transition-all text-center"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Practice Evaluation
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
