'use client';

import React, { useState } from 'react';
import {
  Layers,
  Activity,
  FileCheck2,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  Filter,
  BarChart3,
  Sliders,
  Check,
} from 'lucide-react';
import { useConsultation } from '../ConsultationContext';

export function TechnologyDashboardSection() {
  const { openConsultation } = useConsultation();
  const [activeTab, setActiveTab] = useState<'claims' | 'ar' | 'denials' | 'payments' | 'queue'>('claims');

  return (
    <section
      id="technology-section"
      className="w-full py-16 sm:py-20 lg:py-28 bg-[#070b14] text-white border-y border-slate-800 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-72 sm:w-96 lg:w-[32rem] h-72 sm:h-96 lg:h-[32rem] max-w-full bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-72 sm:w-96 lg:w-[32rem] h-72 sm:h-96 lg:h-[32rem] max-w-full bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00A859] text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-[#00A859]" />
            <span>OPERATIONAL CLARITY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug break-words">
            Visibility Changes the Way You{' '}
            <span className="text-[#00A859]">
              Manage Revenue.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Experience an interface designed for clarity—turning high-volume claim flows and payer communications into structured, manageable operational insight.
          </p>
        </div>

        {/* Conceptual RCM Dashboard Frame */}
        <div className="w-full rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-3.5 sm:p-6 lg:p-8 backdrop-blur-xs relative overflow-hidden min-w-0 max-w-full">
          
          {/* Top Console Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            
            {/* Left Status */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="h-4 w-px bg-slate-800 shrink-0" />
              <div className="text-xs font-bold text-slate-200 flex items-center gap-2 font-mono truncate">
                <span className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse shrink-0" />
                <span className="truncate">UR RCM · WORKFLOW CONSOLE</span>
              </div>
            </div>

            {/* Conceptual Dashboard Tabs - Responsive Grid on Mobile, Flex on Tablet/Desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('claims')}
                className={`px-2.5 py-1.5 rounded-xl font-bold transition-all text-center text-[11px] sm:text-xs ${
                  activeTab === 'claims'
                    ? 'bg-[#0066CC] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Claims Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ar')}
                className={`px-2.5 py-1.5 rounded-xl font-bold transition-all text-center text-[11px] sm:text-xs ${
                  activeTab === 'ar'
                    ? 'bg-[#0066CC] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                A/R Workflow
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('denials')}
                className={`px-2.5 py-1.5 rounded-xl font-bold transition-all text-center text-[11px] sm:text-xs ${
                  activeTab === 'denials'
                    ? 'bg-[#0066CC] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Denial Categories
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('payments')}
                className={`px-2.5 py-1.5 rounded-xl font-bold transition-all text-center text-[11px] sm:text-xs ${
                  activeTab === 'payments'
                    ? 'bg-[#0066CC] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Payment Activity
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('queue')}
                className={`col-span-2 sm:col-span-1 px-2.5 py-1.5 rounded-xl font-bold transition-all text-center text-[11px] sm:text-xs ${
                  activeTab === 'queue'
                    ? 'bg-[#0066CC] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Task Queue
              </button>
            </div>

          </div>

          {/* TAB 1: CLAIMS OVERVIEW */}
          {activeTab === 'claims' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">INTAKE & CODING</div>
                  <div className="text-base font-bold text-white mt-1">Charge Scrubbing</div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Status</span>
                    <span className="font-mono text-[#00A859] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
                      Processing
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">EDI GATEWAY</div>
                  <div className="text-base font-bold text-white mt-1">837P Transmission</div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Status</span>
                    <span className="font-mono text-blue-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Validated Clean
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">PAYER ADJUDICATION</div>
                  <div className="text-base font-bold text-white mt-1">Payer Routing</div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Status</span>
                    <span className="font-mono text-amber-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      In Review
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">RECONCILIATION</div>
                  <div className="text-base font-bold text-white mt-1">835 Auto-Post</div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Status</span>
                    <span className="font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Resolved
                    </span>
                  </div>
                </div>
              </div>

              {/* Conceptual Claims Pipeline Chart with Thin Lines */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-slate-400">CLEAN CLAIM PROGRESSION PIPELINE</span>
                  <span className="text-slate-500">Live Stage Indicators</span>
                </div>

                {/* Desktop & Tablet: Clean Horizontal Pipeline */}
                <div className="hidden sm:block relative pt-2 pb-2">
                  <div className="w-full">
                    <div className="h-1 bg-slate-800 rounded-full w-full relative">
                      <div className="h-1 bg-gradient-to-r from-[#0066CC] via-blue-400 to-[#00A859] rounded-full w-4/5" />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-3">
                      <span>Encounter Registered</span>
                      <span>Coding Review</span>
                      <span>Scrubber Passed</span>
                      <span>EDI 837 Sent</span>
                      <span className="text-emerald-400 font-bold">Adjudication Complete</span>
                    </div>
                  </div>
                </div>

                {/* Mobile View: Vertical Step Breakdown with 100% Screen Fit */}
                <div className="sm:hidden grid grid-cols-1 gap-2 pt-1">
                  {[
                    { step: '01', title: 'Encounter Registered' },
                    { step: '02', title: 'Coding Review' },
                    { step: '03', title: 'Scrubber Passed' },
                    { step: '04', title: 'EDI 837 Sent' },
                    { step: '05', title: 'Adjudication Complete', highlight: true },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-xs min-w-0 max-w-full gap-2"
                    >
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <span className="font-mono text-[10px] text-slate-500 font-bold shrink-0">{s.step}</span>
                        <span className={`${s.highlight ? 'text-emerald-400 font-bold' : 'text-slate-300'} truncate`}>
                          {s.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-[#00A859] shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859]" />
                        <span>Verified</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: A/R WORKFLOW */}
          {activeTab === 'ar' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">BUCKET 01</div>
                  <div className="text-sm font-bold text-white mt-1">0 - 30 Days</div>
                  <div className="text-xs font-mono text-emerald-400 mt-3 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Normal Turnaround
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">BUCKET 02</div>
                  <div className="text-sm font-bold text-white mt-1">31 - 60 Days</div>
                  <div className="text-xs font-mono text-blue-400 mt-3 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 shrink-0" /> Payer Follow-up Active
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">BUCKET 03</div>
                  <div className="text-sm font-bold text-white mt-1">61 - 90 Days</div>
                  <div className="text-xs font-mono text-amber-400 mt-3 flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 shrink-0" /> Escalated Triage
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">BUCKET 04</div>
                  <div className="text-sm font-bold text-white mt-1">90+ Days</div>
                  <div className="text-xs font-mono text-purple-400 mt-3 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" /> Supervisor Appeals
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Aging Methodology: Zero Write-Off without Documentation & Payer Exhaustion</span>
                <span className="font-mono text-[#00A859] font-bold shrink-0">Continuous Reprioritization</span>
              </div>
            </div>
          )}

          {/* TAB 3: DENIAL CATEGORIES */}
          {activeTab === 'denials' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">CARC / RARC GROUP A</div>
                  <div className="text-sm font-bold text-white mt-1">Eligibility & Inactive Policy</div>
                  <div className="mt-3 flex justify-between text-xs">
                    <span className="text-slate-400">Status</span>
                    <span className="text-emerald-400 font-mono font-semibold">Front-Desk Resolved</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">CARC / RARC GROUP B</div>
                  <div className="text-sm font-bold text-white mt-1">Prior Authorization Missing</div>
                  <div className="mt-3 flex justify-between text-xs">
                    <span className="text-slate-400">Status</span>
                    <span className="text-blue-400 font-mono font-semibold">Retro-Auth Appealed</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">CARC / RARC GROUP C</div>
                  <div className="text-sm font-bold text-white mt-1">Medical Necessity / LCD</div>
                  <div className="mt-3 flex justify-between text-xs">
                    <span className="text-slate-400">Status</span>
                    <span className="text-amber-400 font-mono font-semibold">Clinical Review</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">CARC / RARC GROUP D</div>
                  <div className="text-sm font-bold text-white mt-1">Coding / Modifier Conflict</div>
                  <div className="mt-3 flex justify-between text-xs">
                    <span className="text-slate-400">Status</span>
                    <span className="text-purple-400 font-mono font-semibold">Corrected & Resubmitted</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Denial Management Core: Root-cause identification feeds continuous scrubbing rules to prevent recurrence.</span>
                <span className="font-mono text-[#0066CC] font-bold shrink-0">Root-Cause Feedback Loop</span>
              </div>
            </div>
          )}

          {/* TAB 4: PAYMENT ACTIVITY */}
          {activeTab === 'payments' && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs min-w-0 max-w-full">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold shrink-0">
                    835
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-white truncate">ERA Electronic Remittance #49102</div>
                    <div className="text-slate-400 text-[11px] sm:text-xs">Commercial Payer Direct Deposit Reconciled</div>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-bold shrink-0">
                  Balanced
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs min-w-0 max-w-full">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center font-bold shrink-0">
                    EFT
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-white truncate">Medicare Part B Electronic Deposit</div>
                    <div className="text-slate-400 text-[11px] sm:text-xs">Contractual Adjustments & Patient Copay Segregated</div>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-bold shrink-0">
                  Posted to Ledger
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs min-w-0 max-w-full">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                    POS
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-white truncate">Patient Portal Credit Payment</div>
                    <div className="text-slate-400 text-[11px] sm:text-xs">Direct Merchant Settlement & Auto Receipt</div>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-bold shrink-0">
                  Reconciled
                </span>
              </div>
            </div>
          )}

          {/* TAB 5: TASK QUEUE */}
          {activeTab === 'queue' && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs min-w-0 max-w-full">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-white truncate">Pre-Service Prior Auth Clearance</div>
                    <div className="text-slate-400 text-[11px] sm:text-xs">Specialty Encounter #1904 · Clinical Notes Submitted</div>
                  </div>
                </div>
                <span className="self-start sm:self-auto font-mono text-amber-300 font-bold shrink-0">In Progress</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs min-w-0 max-w-full">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-white truncate">Secondary Payer Filing Release</div>
                    <div className="text-slate-400 text-[11px] sm:text-xs">Primary EOB Attached · EDI 837 Secondary Ready</div>
                  </div>
                </div>
                <span className="self-start sm:self-auto font-mono text-blue-300 font-bold shrink-0">Queued</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs min-w-0 max-w-full">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-white truncate">Provider CAQH Re-Attestation</div>
                    <div className="text-slate-400 text-[11px] sm:text-xs">Quarterly License Verification Complete</div>
                  </div>
                </div>
                <span className="self-start sm:self-auto font-mono text-emerald-300 font-bold shrink-0">Completed</span>
              </div>
            </div>
          )}

          {/* Console Footer */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-start sm:items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00A859] shrink-0 mt-0.5 sm:mt-0" />
              <span>HIPAA & HITECH Encrypted Endpoints · Seamless EHR/PM Integration</span>
            </span>
            <button
              type="button"
              onClick={() => openConsultation()}
              className="font-bold text-[#0066CC] hover:text-blue-400 flex items-center gap-1 self-start sm:self-auto transition-colors"
            >
              Request Practice Dashboard Demo <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
