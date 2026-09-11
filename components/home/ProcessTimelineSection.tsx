'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, BarChart3, Settings2, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useConsultation } from '../ConsultationContext';

export function ProcessTimelineSection() {
  const { openConsultation } = useConsultation();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      name: 'DISCOVER',
      tagline: 'Practice & Workflow Intake',
      desc: 'We conduct a thorough discovery audit of your current billing setup, EHR/PM workflows, clearinghouse connections, and specialty fee schedules.',
      icon: Search,
      deliverables: ['EHR/PM Workflow Review', 'Fee Schedule & Payer Contract Review', 'Staff Intake Checklist'],
    },
    {
      num: '02',
      name: 'ANALYZE',
      tagline: 'Root-Cause Leakage Audit',
      desc: 'Our certified RCM auditors evaluate historical claims, denial trends (CARC/RARC codes), unbilled encounters, and current A/R aging buckets.',
      icon: BarChart3,
      deliverables: ['Denial Trend Mapping', 'Aging A/R Recovery Assessment', 'Clean-Claim Benchmark Plan'],
    },
    {
      num: '03',
      name: 'OPTIMIZE',
      tagline: 'Transition & Clean Claim Launch',
      desc: 'We deploy structured scrub rules, establish electronic clearinghouse routes, align charge capture routines, and test 837/835 electronic transactions.',
      icon: Settings2,
      deliverables: ['Clearinghouse Connection Test', 'Scrubbing Rule Configuration', 'Bilingual Patient Billing Protocol'],
    },
    {
      num: '04',
      name: 'SUPPORT',
      tagline: 'Continuous Operational Oversight',
      desc: 'Daily charge submission, real-time remittance posting, persistent aging follow-up, and executive monthly KPI reviews to ensure long-term health.',
      icon: Headphones,
      deliverables: ['Daily Claim Validation', 'Proactive A/R Aging Recovery', 'Executive Monthly Financial Reports'],
    },
  ];

  return (
    <section id="process-timeline-section" className="w-full py-16 sm:py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-40 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066CC] text-xs font-bold uppercase tracking-wider">
            Structured Partnership Framework
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug break-words">
            How We Onboard and Optimize Your Revenue Cycle
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A disciplined four-step deployment designed to minimize practice disruption, eliminate revenue leaks, and deliver immediate financial clarity.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL TIMELINE WITH CONNECTING GRADIENT LINE */}
        <div className="hidden lg:block relative mb-12">
          
          {/* Connecting Glowing Gradient Line */}
          <div className="absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#0066CC] via-[#00A859] to-[#0066CC] rounded-full z-0 opacity-80" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-3xl transition-all duration-300 relative flex flex-col justify-between ${
                    isActive
                      ? 'bg-white shadow-xl border-2 border-[#0066CC] -translate-y-1'
                      : 'bg-white/80 hover:bg-white border border-slate-200/90 shadow-xs hover:shadow-md'
                  }`}
                >
                  {/* Top Node with Icon and Step */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black transition-all ${
                        isActive
                          ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-500/30'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      PHASE {step.num}
                    </span>
                  </div>

                  {/* Step Title & Tagline */}
                  <div>
                    <div className="text-[11px] font-bold text-[#00A859] tracking-wider uppercase mb-1">
                      {step.tagline}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">
                      {step.num} {step.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {step.desc}
                    </p>
                  </div>

                  {/* Deliverable Checkpoints */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
                    {step.deliverables.slice(0, 2).map((d) => (
                      <div key={d} className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3 h-3 text-[#00A859] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE */}
        <div className="lg:hidden space-y-4 mb-8 sm:mb-10">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xs relative"
              >
                <div className="flex items-start gap-3.5 sm:gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded-md">
                      PHASE {step.num}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {step.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#00A859]">
                      {step.tagline}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.desc}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  {step.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            type="button"
            id="timeline-start-step1-btn"
            onClick={() => openConsultation()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all text-center max-w-full"
          >
            <span className="leading-snug hidden sm:inline">Start with Phase 01: Request Discovery Consultation</span>
            <span className="leading-snug sm:hidden">Request Discovery Consultation</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
}
