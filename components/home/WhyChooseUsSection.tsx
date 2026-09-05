'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { useConsultation } from '../ConsultationContext';

export function WhyChooseUsSection() {
  const { openConsultation } = useConsultation();

  const principles = [
    {
      num: '01',
      name: 'Accuracy',
      desc: 'Clinical coding precision, verified modifier usage, and exhaustive pre-submission claim scrubbing to maximize first-pass resolution.',
    },
    {
      num: '02',
      name: 'Transparency',
      desc: 'Zero obscurity in practice performance. Complete monthly visibility into claims submitted, cash posted, unbilled encounters, and aging buckets.',
    },
    {
      num: '03',
      name: 'Efficiency',
      desc: 'Automated 837P transmission, rapid 835 electronic remittance posting, and immediate denial triage that shorten payment turnaround.',
    },
    {
      num: '04',
      name: 'Technology',
      desc: 'Seamless compatibility with modern EHR/PM systems, electronic clearinghouses, and continuous workflow telemetry.',
    },
    {
      num: '05',
      name: 'Partnership',
      desc: 'A dedicated, responsive team of revenue cycle professionals who treat your clinical reputation and financial stability as our own.',
    },
  ];

  return (
    <section id="why-choose-us-section" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle tech background */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial 2-Column Split: Statement on Left, Principles on Right */}
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Large Statement */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00A859] text-xs font-bold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5 text-[#00A859]" />
              <span>CORE PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Built Around{' '}
              <span className="text-[#0066CC]">Your Practice.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Healthcare Revenue Cycle Management is not an off-the-shelf software download. It is an exacting operational discipline that balances medical necessity, shifting payer guidelines, and steady cash flow.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed">
              We structure our services to adapt to your EHR, your clinical specialty, and your practice goals—providing executive confidence through every billing cycle.
            </p>

            {/* Quality Seal */}
            <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-[#00A859]" />
                Austin, Texas Headquarters
              </div>
              <p className="text-xs text-slate-500">
                Direct accountability with U.S.-based client service leadership and certified medical billing directors.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                id="why-choose-us-consult-btn"
                onClick={() => openConsultation()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/why-choose-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Five Principles with Large Numbers */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            {principles.map((p) => (
              <div
                key={p.num}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#fbfcfd] hover:bg-white border border-slate-200/90 hover:border-[#0066CC]/50 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  {/* Large Number */}
                  <div className="text-3xl sm:text-4xl font-black font-mono text-slate-300 group-hover:text-[#0066CC] transition-colors shrink-0 leading-none mt-1">
                    {p.num}
                  </div>

                  {/* Content */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0066CC] transition-colors">
                        {p.name}
                      </h3>
                      <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#00A859] transition-colors" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
