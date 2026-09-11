'use client';

import React from 'react';
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
} from 'lucide-react';
import { SPECIALTIES_LIST } from '@/lib/siteData';
import { useConsultation } from '../ConsultationContext';

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

export function SpecialtiesSection() {
  const { openConsultation } = useConsultation();

  return (
    <section className="w-full py-16 lg:py-20 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden" id="specialties">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-[#0066CC] mb-2">
              Clinical Coverage Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug break-words">
              Supporting Healthcare Organizations Across Specialties
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Revenue cycle nuances vary dramatically between specialties. We align our workflows with your specific coding guidelines, modifier rules, and payer medical policies.
          </p>
        </div>

        {/* Specialties Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {SPECIALTIES_LIST.map((spec) => {
            const Icon = SPECIALTY_ICONS[spec.iconName] || Stethoscope;

            return (
              <div
                key={spec.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#0066CC]/40 transition-all duration-200 flex flex-col justify-between group min-w-0 max-w-full"
              >
                <div className="min-w-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066CC] group-hover:bg-[#0066CC] group-hover:text-white flex items-center justify-center transition-colors shadow-xs shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      {spec.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0066CC] transition-colors leading-snug mb-1">
                    {spec.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {spec.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold">Specialized</span>
                  <button
                    type="button"
                    onClick={() => openConsultation(spec.id)}
                    className="text-xs font-bold text-[#0066CC] hover:text-[#0052A3] transition-colors"
                  >
                    Inquire →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bento Bar */}
        <div className="mt-10 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs min-w-0 max-w-full">
          <div className="space-y-1 text-center sm:text-left min-w-0 flex-1">
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
              Custom Clinical Scope
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Don’t see your specific sub-specialty listed?
            </h4>
            <p className="text-xs text-slate-600">
              We frequently design custom billing protocols for sub-specialties, ambulatory surgical centers, and multi-disciplinary clinics.
            </p>
          </div>
          <div className="w-full sm:w-auto flex items-center justify-center shrink-0">
            <button
              type="button"
              id="specialties-discuss-btn"
              onClick={() => openConsultation()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors text-center shrink-0"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Discuss Your Practice With Us</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
