'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Calculator,
  Phone,
  Layers,
  Sparkles,
  FileCheck2,
  TrendingUp,
  RefreshCw,
  Award,
} from 'lucide-react';
import { useConsultation } from '../ConsultationContext';
import { COMPANY_INFO } from '@/lib/siteData';

interface MetricPreset {
  specialty: string;
  cleanRate: string;
  daysAR: string;
  netCollection: string;
  denialsOverturned: string;
  monthlyVolume: string;
}

const METRIC_PRESETS: MetricPreset[] = [
  {
    specialty: 'Primary Care & Internal',
    cleanRate: '99.1%',
    daysAR: '22 Days',
    netCollection: '98.6%',
    denialsOverturned: '95.2%',
    monthlyVolume: '2,400+ Claims',
  },
  {
    specialty: 'Cardiology & Surgery',
    cleanRate: '98.5%',
    daysAR: '26 Days',
    netCollection: '97.9%',
    denialsOverturned: '93.8%',
    monthlyVolume: '1,150+ Claims',
  },
  {
    specialty: 'Behavioral & Mental Health',
    cleanRate: '99.4%',
    daysAR: '19 Days',
    netCollection: '99.1%',
    denialsOverturned: '96.5%',
    monthlyVolume: '3,800+ Claims',
  },
];

export function HeroSection() {
  const { openConsultation } = useConsultation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentPreset = METRIC_PRESETS[activeTab];

  return (
    <section
      id="hero-section"
      className="w-full relative overflow-hidden bg-gradient-to-b from-[#060A14] via-[#080E1E] to-[#0A1226] text-white pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 border-b border-slate-800"
    >
      {/* Background Ambience: Subtle Tech Grid & Radial Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute -top-32 right-0 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-gradient-to-br from-[#0066CC]/20 via-[#00A859]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#0066CC]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative top accent hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0066CC]/50 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Status & Verification Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A859] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A859]" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-300">
              UR RCM CONSULTANCY LLC • AUSTIN, TEXAS
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              100% HIPAA Compliant
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              AAPC & AHIMA Certified Specialists
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[#00A859] text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00A859]" />
              <span>Modern Revenue Cycle Management</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-black tracking-tight leading-[1.12] text-white break-words">
              Transform Healthcare Complexity Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                Predictable Revenue.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              End-to-end medical billing, certified specialty coding, and disciplined denial elimination designed specifically for private practices, clinics, and surgical centers nationwide.
            </p>

            {/* Proof Checkpoints Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>98.4% First-Pass Clean Claims</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Under 25 Days Average in A/R</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Zero Disruptive Software Changes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Dedicated US Account Leadership</span>
              </div>
            </div>

            {/* Responsive Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                id="hero-schedule-audit-btn"
                onClick={() => openConsultation('medical-billing')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#00A859] hover:bg-[#00924d] text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all duration-200 group text-center"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Schedule Free Practice Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </button>

              <a
                href="#revenue-calculator"
                id="hero-calculate-roi-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all duration-200 backdrop-blur-xs text-center"
              >
                <Calculator className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Calculate Your Revenue Lift</span>
              </a>
            </div>

            {/* Micro-Contact Line */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00A859]" />
                <span>Call Austin Team: <strong className="text-white">{COMPANY_INFO.phone}</strong></span>
              </a>
              <span className="text-slate-600">•</span>
              <span>Mon–Fri 8:00 AM – 6:00 PM CST</span>
            </div>

          </div>

          {/* RIGHT: Live Interactive Practice Performance Deck */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl p-4 sm:p-6 backdrop-blur-md relative overflow-hidden">
              
              {/* Subtle top light bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0066CC] via-[#00A859] to-blue-400" />

              {/* Console Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00A859]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Live Performance Benchmarks
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10.5px] font-bold text-emerald-400 uppercase tracking-wide">
                  Active Sync
                </span>
              </div>

              {/* Specialty Selector Tabs */}
              <div className="space-y-1.5 mb-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Select Practice Benchmark Profile:
                </div>
                <div className="grid grid-cols-3 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  {METRIC_PRESETS.map((preset, idx) => (
                    <button
                      key={preset.specialty}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all truncate text-center ${
                        activeTab === idx
                          ? 'bg-[#0066CC] text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {idx === 0 ? 'Primary' : idx === 1 ? 'Surgical' : 'Behavioral'}
                    </button>
                  ))}
                </div>
                <div className="text-xs font-semibold text-emerald-400 pt-1">
                  Profile: {currentPreset.specialty}
                </div>
              </div>

              {/* Metric Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#00A859]" />
                    <span>Clean Claim Pass</span>
                  </div>
                  <div className="text-2xl font-black text-white">
                    {currentPreset.cleanRate}
                  </div>
                  <div className="text-[10px] text-emerald-400">
                    vs 78% industry average
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                    <span>Avg Days in A/R</span>
                  </div>
                  <div className="text-2xl font-black text-white">
                    {currentPreset.daysAR}
                  </div>
                  <div className="text-[10px] text-blue-300">
                    Accelerated collection speed
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                    <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
                    <span>Denials Overturned</span>
                  </div>
                  <div className="text-2xl font-black text-white">
                    {currentPreset.denialsOverturned}
                  </div>
                  <div className="text-[10px] text-purple-300">
                    Appeals won & recovered
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Net Collection Rate</span>
                  </div>
                  <div className="text-2xl font-black text-white">
                    {currentPreset.netCollection}
                  </div>
                  <div className="text-[10px] text-amber-300">
                    Recognized reimbursement
                  </div>
                </div>

              </div>

              {/* Status footer with Image of Specialist */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-emerald-400/40">
                  <Image
                    src="/images/rcm-hero-admin.jpg"
                    alt="Austin RCM director reviewing claim audits"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 text-xs">
                  <div className="font-bold text-white truncate">
                    Daily Clearinghouse Scrubber
                  </div>
                  <div className="text-slate-400 text-[11px] truncate">
                    Continuous pre-submission validation & CARC audit
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A859] animate-pulse" />
                  Live
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
