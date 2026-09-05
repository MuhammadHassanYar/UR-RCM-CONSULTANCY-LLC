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
  ArrowRight,
  Check,
  Calendar,
} from 'lucide-react';
import { SERVICES_LIST } from '@/lib/siteData';
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

export default function ServicesMasterPage() {
  const { openConsultation } = useConsultation();
  const [filter, setFilter] = useState<'all' | 'core' | 'specialized' | 'support'>('all');

  const filteredServices = SERVICES_LIST.filter((s) => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
            End-to-End Practice Support
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Revenue Cycle Services{' '}
            <span className="text-[#0066CC]">Built Around Your Practice</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From charge entry and clinical coding to forensic denial appeals and credentialing, we provide specialized modules or complete RCM integration.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All 10 Services' },
              { id: 'core', label: 'Core Billing & Claims' },
              { id: 'specialized', label: 'Specialized & Approvals' },
              { id: 'support', label: 'Patient & Front-Desk Support' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === tab.id
                    ? 'bg-[#0066CC] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 lg:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = ICON_MAP[service.iconName] || ReceiptText;
              const isCompleteRCM = service.slug === 'revenue-cycle-management';

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                    isCompleteRCM
                      ? 'bg-gradient-to-br from-blue-50/60 via-white to-emerald-50/30 border-[#0066CC]/50 shadow-md ring-1 ring-[#0066CC]/20'
                      : 'bg-white hover:bg-slate-50/70 border-slate-200 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-1">
                      {service.title}
                    </h2>
                    <div className="text-xs font-semibold text-[#00A859] mb-3">
                      {service.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    {/* What we do highlights */}
                    <div className="space-y-1.5 pt-4 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Included Workflows:
                      </div>
                      {service.whatWeDo.slice(0, 3).map((w) => (
                        <div key={w} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-[#00A859] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{w}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openConsultation(service.slug)}
                      className="text-xs font-semibold text-slate-500 hover:text-[#0066CC]"
                    >
                      Request Info
                    </button>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      View Service Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Consultation Strip */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                Not sure whether you need individual modules or complete RCM?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                We conduct an initial review of your specialty, billing volume, and current bottlenecks to recommend the most cost-effective path.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openConsultation()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white text-sm font-bold shadow-md shadow-blue-900/40 shrink-0"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Workflow Review
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
