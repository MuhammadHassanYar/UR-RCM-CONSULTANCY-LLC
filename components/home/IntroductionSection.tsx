'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  FileSpreadsheet,
  ReceiptText,
  ShieldAlert,
  Clock,
  UserCheck,
} from 'lucide-react';
import { useConsultation } from '../ConsultationContext';

export function IntroductionSection() {
  const { openConsultation } = useConsultation();

  const supportCapabilities = [
    { title: 'Medical Billing', desc: 'Precision charge capture & clean submission', icon: ReceiptText },
    { title: 'Claims Management', desc: 'Real-time electronic validation & tracking', icon: FileSpreadsheet },
    { title: 'Denial Resolution', desc: 'Root-cause analysis and timely appeals', icon: ShieldAlert },
    { title: 'Accounts Receivable', desc: 'Diligent aging follow-up & cash acceleration', icon: Clock },
    { title: 'Provider Credentialing', desc: 'Enrollment & payer network maintenance', icon: UserCheck },
  ];

  return (
    <section id="introduction-section" className="py-20 lg:py-28 bg-[#fbfcfd] border-b border-slate-200 relative overflow-hidden">
      {/* Subtle background tech accents */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Layout: Left Text & Right Photo + Floating Card */}
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Editorial Statement & Narrative */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0066CC] text-xs font-bold tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5 text-[#0066CC]" />
              <span>REVENUE CYCLE PARTNER</span>
            </div>

            {/* Large Statement */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Your Practice Deserves More Than a{' '}
              <span className="text-[#0066CC]">Billing Vendor.</span>
            </h2>

            {/* Large Paragraph Explaining Partnership Approach */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Most billing vendors simply pass claims through a queue and react when denials happen. At <strong className="font-semibold text-slate-900">UR RCM CONSULTANCY LLC</strong>, we operate as a dedicated strategic partner embedded into your practice workflow. We combine healthcare administrative expertise with rigorous financial oversight to diagnose bottlenecks, accelerate cash flow, and ensure every service delivered is accurately recognized and reimbursed.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are an independent specialty clinic, a growing multi-provider group, or a medical facility facing mounting regulatory complexity, our team delivers the operational clarity and transparency your leadership needs to plan ahead.
            </p>

            {/* Core Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A859] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm text-slate-800 font-medium">
                  <strong>Dedicated Account Leadership:</strong> Direct communication with experienced RCM specialists who know your clinical specialty.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A859] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm text-slate-800 font-medium">
                  <strong>Zero Obscurity Policy:</strong> Real-time visibility into claim statuses, aging buckets, and reconciliation reports.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A859] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm text-slate-800 font-medium">
                  <strong>Continuous Process Optimization:</strong> Regular feedback loops with your front-desk and clinical staff to eliminate denial causes at intake.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                id="intro-consultation-btn"
                onClick={() => openConsultation()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all"
              >
                Schedule an Practice Review
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/about"
                id="intro-about-link-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm transition-colors"
              >
                Learn About Our Firm
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: High-End Photography with Overlapping Info Card */}
          <div className="col-span-12 lg:col-span-6 relative">
            
            {/* Background Decorative Accent */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/60 to-emerald-100/40 rounded-3xl blur-xl pointer-events-none" />

            {/* Main Editorial Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/rcm-executive-team.jpg"
                  alt="UR RCM revenue cycle consultant discussing financial workflow with medical practice manager in a modern healthcare corporate facility"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                
                <div className="absolute bottom-4 left-5 right-5 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold tracking-wide">
                      UR RCM Executive Advisory
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Collaborative Healthcare Revenue Strategy
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#00A859] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                    Austin, TX
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Information Card */}
            <div className="relative lg:absolute -bottom-10 sm:-bottom-12 -left-4 sm:-left-8 right-auto w-full sm:w-[340px] md:w-[360px] bg-white border border-slate-200 rounded-2xl p-5 shadow-2xl backdrop-blur-xs mt-6 lg:mt-0">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00A859]" />
                  <span className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                    Revenue Cycle Support
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded-md">
                  CORE SUITE
                </span>
              </div>

              <div className="space-y-2.5">
                {supportCapabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div key={cap.title} className="flex items-center justify-between p-2 rounded-xl bg-slate-50/90 hover:bg-blue-50/50 transition-colors border border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-[#0066CC] flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{cap.title}</div>
                          <div className="text-[10px] text-slate-500 line-clamp-1">{cap.desc}</div>
                        </div>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
