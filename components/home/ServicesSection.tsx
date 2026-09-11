'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShieldAlert,
  FileCode2,
  SendHorizontal,
  TrendingUp,
  Award,
  UserCheck,
  CheckCheck,
  CreditCard,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '@/lib/siteData';
import { useConsultation } from '../ConsultationContext';

const ICON_MAP: Record<string, React.ElementType> = {
  ReceiptText: SendHorizontal,
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

export function ServicesSection() {
  const { openConsultation } = useConsultation();
  const [filter, setFilter] = useState<'all' | 'billing' | 'denials' | 'admin'>('all');

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (filter === 'all') return true;
    if (filter === 'billing') {
      return ['medical-billing', 'medical-coding', 'claims-management'].includes(service.slug);
    }
    if (filter === 'denials') {
      return ['denial-management', 'accounts-receivable', 'revenue-cycle-management'].includes(service.slug);
    }
    if (filter === 'admin') {
      return ['credentialing', 'eligibility-verification', 'prior-authorization', 'patient-billing'].includes(service.slug);
    }
    return true;
  });

  return (
    <section
      id="services-section"
      className="w-full py-16 sm:py-20 lg:py-28 bg-[#090E1A] text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#0066CC]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00A859]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00A859] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#00A859]" />
              <span>SPECIALIZED CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight break-words">
              Comprehensive Solutions for Every Stage of the{' '}
              <span className="text-[#00A859]">Revenue Cycle.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tailored services designed to reduce administrative friction, overturn denied claims, and accelerate cash flow across your practice.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-[#0066CC] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({SERVICES_LIST.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('billing')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'billing'
                  ? 'bg-[#0066CC] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Billing & Coding
            </button>
            <button
              type="button"
              onClick={() => setFilter('denials')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'denials'
                  ? 'bg-[#0066CC] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Denials & A/R
            </button>
            <button
              type="button"
              onClick={() => setFilter('admin')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'admin'
                  ? 'bg-[#0066CC] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Credentialing & Front-End
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const Icon = ICON_MAP[service.iconName] || Layers;
            return (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-slate-900/70 border border-slate-800 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/50 min-w-0"
              >
                {/* Top Glowing Accent Line on Hover */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#0066CC] to-[#00A859] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Service Header: Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#00A859] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables Checkpoints */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80 mb-5">
                    {service.whatWeDo.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openConsultation(service.slug)}
                    className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#00A859] text-slate-300 hover:text-white border border-white/10 hover:border-transparent text-xs font-semibold transition-all flex items-center gap-1 shrink-0"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Inquire</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-emerald-950/30 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Need a Custom Multi-Specialty Billing Setup?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We design specialized workflows tailored to your specific EHR, payer contracts, and patient volume.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openConsultation('revenue-cycle-management')}
            className="px-6 py-3 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all shrink-0 text-center"
          >
            Request Custom Practice Scope
          </button>
        </div>

      </div>
    </section>
  );
}
