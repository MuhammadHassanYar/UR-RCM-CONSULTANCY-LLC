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
      className="py-20 lg:py-28 bg-[#070b14] text-white border-y border-slate-800 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00A859] text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-[#00A859]" />
            <span>OPERATIONAL CLARITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Visibility Changes the Way You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#0066CC] to-emerald-400">
              Manage Revenue.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Experience an interface designed for clarity—turning high-volume claim flows and payer communications into structured, manageable operational insight.
          </p>
        </div>

        {/* Conceptual RCM Dashboard Frame */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-8 backdrop-blur-xs relative overflow-hidden">
          
          {/* Top Console Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            
            {/* Left Status */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="h-4 w-px bg-slate-800" />
              <div className="text-xs font-bold text-slate-200 flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse" />
                <span>UR RCM · WORKFLOW TELEMETRY CONSOLE</span>
              </div>
            </div>

            {/* Conceptual Dashboard Tabs */}
            <div className="flex flex-wrap gap-1 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('claims')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
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
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
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
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
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
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
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
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
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
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400">CLEAN CLAIM PROGRESSION PIPELINE</span>
                  <span className="text-slate-500">Live Stage Indicators</span>
                </div>

                <div className="relative pt-2 pb-2">
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
            </div>
          )}

          {/* TAB 2: A/R WORKFLOW */}
          {activeTab === 'ar' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">BUCKET 01</div>
                  <div className="text-sm font-bold text-white mt-1">0 - 30 Days</div>
                  <div className="text-xs font-mono text-emerald-400 mt-3 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Normal Turnaround
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">BUCKET 02</div>
                  <div className="text-sm font-bold text-white mt-1">31 - 60 Days</div>
                  <div className="text-xs font-mono text-blue-400 mt-3 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Payer Follow-up Active
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">BUCKET 03</div>
                  <div className="text-sm font-bold text-white mt-1">61 - 90 Days</div>
                  <div className="text-xs font-mono text-amber-400 mt-3 flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" /> Escalated Triage
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">BUCKET 04</div>
                  <div className="text-sm font-bold text-white mt-1">90+ Days</div>
                  <div className="text-xs font-mono text-purple-400 mt-3 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Supervisor Appeals
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Aging Methodology: Zero Write-Off without Documentation & Payer Exhaustion</span>
                <span className="font-mono text-[#00A859] font-bold">Continuous Reprioritization</span>
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

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Denial Management Core: Root-cause identification feeds continuous scrubbing rules to prevent recurrence.</span>
                <span className="font-mono text-[#0066CC] font-bold">Root-Cause Feedback Loop</span>
              </div>
            </div>
          )}

          {/* TAB 4: PAYMENT ACTIVITY */}
          {activeTab === 'payments' && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold">
                    835
                  </div>
                  <div>
                    <div className="font-bold text-white">ERA Electronic Remittance #49102</div>
                    <div className="text-slate-400">Commercial Payer Direct Deposit Reconciled</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-bold">
                  Balanced
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center font-bold">
                    EFT
                  </div>
                  <div>
                    <div className="font-bold text-white">Medicare Part B Electronic Deposit</div>
                    <div className="text-slate-400">Contractual Adjustments & Patient Copay Segregated</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-bold">
                  Posted to Ledger
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold">
                    POS
                  </div>
                  <div>
                    <div className="font-bold text-white">Patient Portal Credit Payment</div>
                    <div className="text-slate-400">Direct Merchant Settlement & Auto Receipt</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-bold">
                  Reconciled
                </span>
              </div>
            </div>
          )}

          {/* TAB 5: TASK QUEUE */}
          {activeTab === 'queue' && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <div>
                    <div className="font-bold text-white">Pre-Service Prior Auth Clearance</div>
                    <div className="text-slate-400">Specialty Encounter #1904 · Clinical Notes Submitted</div>
                  </div>
                </div>
                <span className="font-mono text-amber-300 font-bold">In Progress</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <div>
                    <div className="font-bold text-white">Secondary Payer Filing Release</div>
                    <div className="text-slate-400">Primary EOB Attached · EDI 837 Secondary Ready</div>
                  </div>
                </div>
                <span className="font-mono text-blue-300 font-bold">Queued</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div>
                    <div className="font-bold text-white">Provider CAQH Re-Attestation</div>
                    <div className="text-slate-400">Quarterly License Verification Complete</div>
                  </div>
                </div>
                <span className="font-mono text-emerald-300 font-bold">Completed</span>
              </div>
            </div>
          )}

          {/* Console Footer */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00A859]" />
              HIPAA & HITECH Encrypted Endpoints · Seamless EHR/PM Integration
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
