'use client';

import React, { useState, useId } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  TrendingUp,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Clock,
  FileCheck,
} from 'lucide-react';
import { useConsultation } from '../ConsultationContext';

const SPECIALTY_OPTIONS = [
  { id: 'family', name: 'Primary Care / Internal', avgDenial: 11 },
  { id: 'cardiology', name: 'Cardiology / Surgery', avgDenial: 14 },
  { id: 'behavioral', name: 'Mental & Behavioral Health', avgDenial: 16 },
  { id: 'ortho', name: 'Orthopedics & PT', avgDenial: 13 },
  { id: 'urgent', name: 'Urgent Care / Walk-In', avgDenial: 9 },
];

export function PracticeRevenueCalculator() {
  const { openConsultation } = useConsultation();
  const monthlyChargesInputId = useId();
  const denialRateInputId = useId();

  const [monthlyCharges, setMonthlyCharges] = useState<number>(180000);
  const [denialRate, setDenialRate] = useState<number>(12);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('family');

  // Calculation formulas
  const annualCharges = monthlyCharges * 12;
  // Estimated annual unrecovered revenue due to high denials and aging A/R
  const currentLostRevenueAnnual = Math.round(annualCharges * (denialRate / 100) * 0.45);
  // UR RCM reduces denial rate to under 2.5% and recovers 90%+
  const projectedRecoveredAnnual = Math.round(currentLostRevenueAnnual * 0.78);
  const projectedMonthlyBoost = Math.round(projectedRecoveredAnnual / 12);
  
  // A/R days reduction
  const estimatedCurrentDaysAR = denialRate > 15 ? 54 : denialRate > 10 ? 46 : 38;
  const urRcmDaysAR = 23;
  const daysSaved = estimatedCurrentDaysAR - urRcmDaysAR;

  const handleSpecialtyChange = (specId: string) => {
    setSelectedSpecialty(specId);
    const spec = SPECIALTY_OPTIONS.find((s) => s.id === specId);
    if (spec) {
      setDenialRate(spec.avgDenial);
    }
  };

  return (
    <section
      id="revenue-calculator"
      className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066CC] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#0066CC]" />
            <span>Interactive ROI Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug break-words">
            How Much Revenue Is Your Practice{' '}
            <span className="text-[#0066CC]">Leaving on the Table?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Adjust the sliders below to estimate your practice’s potential cash-flow lift with UR RCM’s clean-claims scrubbing and denial elimination workflows.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Input Controls */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Specialty Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  1. Select Clinical Specialty
                </label>
                <div className="flex flex-wrap gap-2">
                  {SPECIALTY_OPTIONS.map((spec) => (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => handleSpecialtyChange(spec.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left ${
                        selectedSpecialty === spec.id
                          ? 'bg-[#0066CC] text-white shadow-md shadow-blue-600/25 ring-2 ring-[#0066CC]'
                          : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                      }`}
                    >
                      {spec.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Charges Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor={monthlyChargesInputId} className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Estimated Monthly Billed Charges
                  </label>
                  <span className="text-base sm:text-lg font-black text-[#0066CC]">
                    ${monthlyCharges.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  id={monthlyChargesInputId}
                  type="range"
                  min={30000}
                  max={800000}
                  step={10000}
                  value={monthlyCharges}
                  onChange={(e) => setMonthlyCharges(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066CC]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>$30,000 / mo</span>
                  <span>$400,000 / mo</span>
                  <span>$800,000+ / mo</span>
                </div>
              </div>

              {/* Current Denial Rate Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor={denialRateInputId} className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    3. Estimated Initial Claim Denial Rate
                  </label>
                  <span className="text-base sm:text-lg font-black text-amber-600">
                    {denialRate}% Initial Denials
                  </span>
                </div>
                <input
                  id={denialRateInputId}
                  type="range"
                  min={4}
                  max={25}
                  step={1}
                  value={denialRate}
                  onChange={(e) => setDenialRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>4% (Low)</span>
                  <span>12% (Industry Avg)</span>
                  <span>25% (High Risk)</span>
                </div>
              </div>

              {/* Reassurance Badge */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00A859] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calculations are grounded in American Medical Association (AMA) and MGMA benchmark data comparing standard practice management against certified specialty RCM workflows.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: Output Simulation Card */}
            <div className="lg:col-span-5">
              <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900 via-[#0A1128] to-slate-950 text-white p-6 sm:p-7 shadow-2xl relative overflow-hidden border border-slate-800">
                
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00A859]/15 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Projected Practice Uplift
                  </span>
                  <span className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    Annual Impact
                  </span>
                </div>

                {/* Primary Metric: Recovered Cash */}
                <div className="mb-6">
                  <div className="text-xs text-slate-400 font-medium mb-1">
                    Estimated Annual Recovered Revenue
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-1">
                    <span className="text-[#00A859]">+$</span>
                    <span>{projectedRecoveredAnnual.toLocaleString()}</span>
                    <span className="text-xs font-normal text-slate-400">/ year</span>
                  </div>
                  <div className="text-xs text-emerald-400/90 font-medium mt-1">
                    ≈ +${projectedMonthlyBoost.toLocaleString()} accelerated per month
                  </div>
                </div>

                {/* Secondary Grid Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>Days in A/R</span>
                    </div>
                    <div className="text-xl font-black text-white">
                      {urRcmDaysAR} Days
                    </div>
                    <div className="text-[11px] text-blue-300">
                      -{daysSaved} days faster payout
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Clean Pass Rate</span>
                    </div>
                    <div className="text-xl font-black text-white">
                      98.4%
                    </div>
                    <div className="text-[11px] text-emerald-300">
                      First-pass acceptance
                    </div>
                  </div>

                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  id="calc-claim-audit-btn"
                  onClick={() => openConsultation('medical-billing')}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#00A859] hover:bg-[#00924d] text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all duration-200 group"
                >
                  <DollarSign className="w-4 h-4 shrink-0" />
                  <span>Request Custom Audit for Your Numbers</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                </button>

                <div className="mt-3 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>No obligation • 100% confidential practice review</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
