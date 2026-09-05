'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Layers,
  ArrowUpRight,
  TrendingUp,
  FileCheck2,
  RefreshCw,
} from 'lucide-react';
import { useConsultation } from '../ConsultationContext';

export function HeroSection() {
  const { openConsultation } = useConsultation();

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-[#070b14] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800/80"
    >
      {/* Background Ambience: Subtle Radial Glows & Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-40 right-10 w-[640px] h-[640px] bg-gradient-to-br from-[#0066CC]/20 via-[#00A859]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#0066CC]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative hairline architectural lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Eyebrow Bar */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10 text-xs"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A859] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A859]" />
            </span>
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-300">
              UR RCM CONSULTANCY LLC · Austin, Texas
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A859]" />
              HIPAA Compliant Infrastructure
            </span>
            <span className="text-slate-700">|</span>
            <span>Serving Providers Nationwide</span>
          </div>
        </motion.div>

        {/* Asymmetric 2-Column Hero Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Editorial Headline & Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="col-span-12 lg:col-span-6 xl:col-span-7 space-y-6"
          >
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs text-[#00A859] text-xs font-bold tracking-wider uppercase">
              <Activity className="w-3.5 h-3.5 text-[#00A859]" />
              <span>REVENUE CYCLE MANAGEMENT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[72px] font-black tracking-tight leading-[1.06] text-white">
              Turn Healthcare Complexity Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#0066CC] to-emerald-400">
                Revenue Clarity.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              <strong className="font-semibold text-white">UR RCM CONSULTANCY LLC</strong> provides professional revenue cycle and medical billing solutions designed to help healthcare organizations streamline operations, manage claims, and navigate the financial side of care with greater confidence.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Clean Claims & Denial Reduction</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Proactive A/R Recovery Workflow</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Certified AAPC / AHIMA Specialists</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Transparent Monthly Financial Reporting</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                id="hero-schedule-consultation-btn"
                onClick={() => openConsultation()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 transition-all duration-200 group"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="/services"
                id="hero-explore-services-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all duration-200 backdrop-blur-xs"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Client Confidence Micro-Footnote */}
            <div className="pt-3 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00A859]" />
              <span>Compliant with U.S. billing statutes & HIPAA Privacy Rules</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Asymmetric Image & Conceptual UI Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="col-span-12 lg:col-span-6 xl:col-span-5 relative"
          >
            {/* Soft backdrop glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-emerald-500/15 rounded-3xl blur-2xl pointer-events-none" />

            {/* Main Editorial Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/rcm-hero-admin.jpg"
                  alt="UR RCM revenue cycle director reviewing practice billing performance on a laptop in a modern medical office"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/30 to-transparent" />
              </div>

              {/* Integrated Bottom Status Bar */}
              <div className="p-4 bg-slate-950/90 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00A859] animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200">
                    Continuous RCM Telemetry
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Austin Operations Hub
                </div>
              </div>
            </div>

            {/* Floating Conceptual Dashboard Overlay Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="relative lg:absolute -bottom-8 -left-4 sm:-left-8 right-auto lg:w-[320px] xl:w-[340px] bg-slate-900/95 border border-white/15 rounded-2xl p-4 shadow-2xl backdrop-blur-md mt-4 lg:mt-0"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0066CC]" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    WORKFLOW CONSOLE
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#00A859]/15 border border-[#00A859]/30 text-[10px] font-bold text-[#00A859] uppercase tracking-wider">
                  Live Sync
                </span>
              </div>

              {/* Abstract Workflow Matrix: No fake stats, purely illustrative status */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-slate-300 font-medium">CLAIMS</span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Processing
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-slate-300 font-medium">PAYMENTS</span>
                  </div>
                  <span className="font-mono text-[11px] text-blue-300 font-semibold">
                    Posted & Balanced
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-300 font-medium">A/R AGING</span>
                  </div>
                  <span className="font-mono text-[11px] text-amber-300 font-semibold">
                    Active Follow-up
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-slate-300 font-medium">DENIALS</span>
                  </div>
                  <span className="font-mono text-[11px] text-purple-300 font-semibold">
                    Root-Cause Resolved
                  </span>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
