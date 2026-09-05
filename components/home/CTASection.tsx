'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, PhoneCall, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { useConsultation } from '../ConsultationContext';
import { COMPANY_INFO } from '@/lib/siteData';

export function CTASection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="cta-section" className="py-20 lg:py-28 bg-[#070b14] text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle Abstract Data-Flow Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      
      {/* Flowing Gradient Beams */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#0066CC]/20 via-[#00A859]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[250px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hairline geometric flow lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M -100 200 C 300 100, 700 300, 1400 150" fill="none" stroke="#0066CC" strokeWidth="1" strokeDasharray="6 6" />
        <path d="M -100 280 C 400 380, 800 180, 1500 250" fill="none" stroke="#00A859" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card Frame */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-white/10 p-8 sm:p-14 lg:p-16 shadow-2xl backdrop-blur-md text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#00A859] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00A859]" />
            <span>CONFIDENTIAL PRACTICE CONSULTATION</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Let’s Make Your Revenue Cycle{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#0066CC] to-emerald-400">
              Work Smarter.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us where your current billing or revenue cycle process needs support. Our team will review your specialty requirements, workflow bottlenecks, and unbilled claims to outline a clear path forward.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              id="cta-schedule-consultation-btn"
              onClick={() => openConsultation()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 transition-all group"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              href="/contact"
              id="cta-contact-us-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-colors backdrop-blur-xs"
            >
              <PhoneCall className="w-4 h-4 text-slate-400" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Practice Trust Guarantees */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00A859]" />
              <span>Strict Non-Disclosure & PHI Protection</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div>Austin, Texas HQ · Serving Nationwide</div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div>No Commitment Required</div>
          </div>

        </div>

      </div>
    </section>
  );
}
