'use client';

import React from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
} from 'lucide-react';

export function TrustValueStrip() {
  const kpis = [
    {
      value: '98.4%',
      label: 'First-Pass Clean Claim Rate',
      subtext: 'vs 78% national benchmark',
      icon: CheckCircle2,
      accentColor: 'text-[#00A859]',
    },
    {
      value: '< 25 Days',
      label: 'Average Days in A/R',
      subtext: '35% faster provider payout',
      icon: TrendingUp,
      accentColor: 'text-[#0066CC]',
    },
    {
      value: '95%+',
      label: 'Denial Overturn Success',
      subtext: 'Substantiated CARC appeals',
      icon: Zap,
      accentColor: 'text-amber-500',
    },
    {
      value: '100%',
      label: 'HIPAA & SOC-2 Compliant',
      subtext: 'AAPC / AHIMA certified coders',
      icon: ShieldCheck,
      accentColor: 'text-purple-600',
    },
  ];

  const ehrs = [
    'AthenaHealth',
    'Epic Systems',
    'eClinicalWorks',
    'Kareo / Tebra',
    'AdvancedMD',
    'NextGen',
    'Practice Fusion',
    'Availity',
  ];

  return (
    <section className="w-full bg-white border-b border-slate-200 py-8 sm:py-10 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: 4-Column Responsive KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pb-8 border-b border-slate-100">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.label}
                className="flex flex-col items-center sm:items-start text-center sm:text-left p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${kpi.accentColor}`} />
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {kpi.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  {kpi.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {kpi.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom: EHR & Platform Compatibility Ticker */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#00A859]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Direct In-EHR Integration:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-2.5">
            {ehrs.map((ehr) => (
              <span
                key={ehr}
                className="px-3 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-200/60 transition-colors"
              >
                {ehr}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
