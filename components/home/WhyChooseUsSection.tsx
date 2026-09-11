'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Award,
  ShieldCheck,
  Zap,
  Users,
  Eye,
  TrendingUp,
} from 'lucide-react';
import { useConsultation } from '../ConsultationContext';

export function WhyChooseUsSection() {
  const { openConsultation } = useConsultation();

  const comparisonPoints = [
    {
      feature: 'First-Pass Clean Claim Yield',
      traditional: '75% – 82% (Frequent rework)',
      urRcm: '98.4% (Multi-level daily scrubbing)',
    },
    {
      feature: 'Denial Management & Appeals',
      traditional: 'Passive; up to 60% of denials unworked',
      urRcm: 'Forensic CARC analysis & timely clinical appeals',
    },
    {
      feature: 'EHR & Practice Management',
      traditional: 'Forces provider to buy proprietary software',
      urRcm: 'Works directly inside your existing EHR/PM',
    },
    {
      feature: 'Staff Turnover & Overhead',
      traditional: 'Constant hiring, training, and billing sick leave',
      urRcm: 'Dedicated team of certified AAPC/AHIMA specialists',
    },
    {
      feature: 'Reporting & Financial Transparency',
      traditional: 'Generic quarterly PDFs with opaque numbers',
      urRcm: 'Transparent monthly reviews & real-time dashboard',
    },
  ];

  const pillars = [
    {
      title: 'Dedicated Specialty Leadership',
      desc: 'You work directly with an assigned RCM account manager who understands your exact clinical specialty and local payer contracts.',
      icon: Users,
    },
    {
      title: 'Forensic Denial Root-Cause Eradication',
      desc: 'We do not just rebill; we diagnose upstream front-desk and documentation issues to eliminate recurring denial patterns permanently.',
      icon: Zap,
    },
    {
      title: 'Zero Obscurity Financial Policy',
      desc: 'Real-time visibility into claims queued, payments reconciled, and aging buckets directly inside your existing EHR records.',
      icon: Eye,
    },
    {
      title: 'Aligned Performance Model',
      desc: 'Our success is tied directly to your practice’s realized collections. We only grow when your cash flow expands.',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="why-choose-us-section"
      className="w-full py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00A859] text-xs font-bold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-[#00A859]" />
            <span>The UR RCM Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight break-words">
            Why Healthcare Providers Choose{' '}
            <span className="text-[#0066CC]">UR RCM.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Comparing the traditional fragmented billing approach with our dedicated, certified revenue cycle partnership.
          </p>
        </div>

        {/* 1. Comparison Matrix Card */}
        <div className="w-full rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm overflow-hidden mb-14">
          <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                Operational Comparison
              </h3>
              <p className="text-xs text-slate-400">
                How our embedded partnership protects your practice bottom line.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#00A859] text-white text-[11px] font-bold tracking-wider uppercase shrink-0 text-center">
              AAPC / AHIMA Standards
            </span>
          </div>

          <div className="divide-y divide-slate-200 overflow-x-auto">
            <div className="min-w-[580px]">
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-slate-100/90 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                <div className="col-span-4">Metric / Workflow</div>
                <div className="col-span-4 text-slate-600">Traditional In-House / Generic</div>
                <div className="col-span-4 text-[#0066CC]">UR RCM Partnership</div>
              </div>

              {/* Rows */}
              {comparisonPoints.map((row, idx) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-12 px-5 py-4 text-xs sm:text-sm items-center gap-2 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                  }`}
                >
                  <div className="col-span-4 font-bold text-slate-900 pr-2">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-slate-500 flex items-start gap-1.5 pr-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="col-span-4 text-slate-900 font-semibold flex items-start gap-1.5 bg-blue-50/50 p-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0 mt-0.5" />
                    <span className="text-[#0066CC]">{row.urRcm}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Four Core Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section Call to Action */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => openConsultation()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all text-center"
          >
            <span>Discuss Your Practice Needs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            href="/why-choose-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors text-center"
          >
            <span>Read Detailed Case Profiles</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
