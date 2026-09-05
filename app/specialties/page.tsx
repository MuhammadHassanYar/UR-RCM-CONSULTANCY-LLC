'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  Activity,
  Brain,
  HeartPulse,
  Bone,
  Sparkles,
  Baby,
  Scan,
  Accessibility,
  FlaskConical,
  Scissors,
  Building2,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import { SPECIALTIES_LIST } from '@/lib/siteData';
import { useConsultation } from '@/components/ConsultationContext';

const SPECIALTY_ICONS: Record<string, React.ElementType> = {
  Stethoscope,
  Activity,
  Brain,
  HeartPulse,
  Bone,
  Sparkles,
  Baby,
  Scan,
  Accessibility,
  FlaskConical,
  Scissors,
  Building2,
};

export default function SpecialtiesPage() {
  const { openConsultation } = useConsultation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Primary Care', 'Specialty Medicine', 'Mental Health', 'Diagnostic & Therapy', 'Surgical'];

  const filteredSpecialties = SPECIALTIES_LIST.filter((spec) => {
    if (selectedCategory === 'All') return true;
    return spec.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
            Clinical Domain Precision
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Specialized Billing Protocols for{' '}
            <span className="text-[#0066CC]">Every Healthcare Discipline</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Revenue cycle management is not one-size-fits-all. Payer guidelines, global surgery periods, behavioral health carve-outs, and modifier rules require domain-specific billing expertise.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0066CC] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES GRID */}
      <section className="py-16 lg:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecialties.map((spec) => {
              const Icon = SPECIALTY_ICONS[spec.iconName] || Stethoscope;

              return (
                <div
                  key={spec.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#0066CC]/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-900 leading-snug">
                          {spec.name}
                        </h2>
                        <span className="text-[10px] font-bold text-[#00A859] uppercase tracking-wider">
                          {spec.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {spec.description}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
                      <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859]" />
                        Key Workflow Nuances:
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Pre-scrubbing for modifier accuracy, LCD medical necessity cross-checks, and proactive prior authorizations.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">UR RCM Specialty Team</span>
                    <button
                      type="button"
                      onClick={() => openConsultation(spec.id)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0066CC] hover:underline"
                    >
                      Inquire for {spec.name} →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Custom Practice Section */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                Operate a Multi-Specialty Clinic or Ambulatory Center?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                We configure partitioned billing queues across providers, facilities, and unique NPI billing relationships.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openConsultation()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white text-sm font-bold shadow-md shadow-blue-900/40 shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss Your Specialty Requirements
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
