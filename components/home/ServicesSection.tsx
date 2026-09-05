'use client';

import React from 'react';
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
  UserCheck,
  CheckCheck,
  CreditCard,
  FileCheck2,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_LIST } from '@/lib/siteData';

export function ServicesSection() {
  const medicalBilling = SERVICES_LIST.find((s) => s.slug === 'medical-billing') || SERVICES_LIST[0];

  const subServices = [
    {
      slug: 'medical-coding-and-compliance',
      title: 'Medical Coding',
      desc: 'Accurate ICD-10-CM, CPT®, HCPCS & modifier assignment compliant with AMA/CMS standards.',
      tag: 'CODING / AUDIT',
      uiType: 'coding',
    },
    {
      slug: 'claims-management',
      title: 'Claims Management',
      desc: 'Automated electronic clearinghouse scrubbing, 837P transmission, and daily rejections triage.',
      tag: 'SCRUBBER / 837P',
      uiType: 'claims',
    },
    {
      slug: 'denial-management',
      title: 'Denial Management',
      desc: 'Root-cause tracking, CARC/RARC categorization, and timely clinical appeals to overturn payer denials.',
      tag: 'CARC / APPEALS',
      uiType: 'denials',
    },
    {
      slug: 'accounts-receivable-management',
      title: 'A/R Management',
      desc: 'Persistent follow-up across 30, 60, 90+ aging buckets to prevent write-offs and recover stuck revenue.',
      tag: 'AGING / RECOVERY',
      uiType: 'aging',
    },
    {
      slug: 'provider-credentialing',
      title: 'Credentialing',
      desc: 'CAQH maintenance, NPI management, and Commercial/Medicare/Medicaid payer enrollment.',
      tag: 'CAQH / PAYERS',
      uiType: 'credentialing',
    },
    {
      slug: 'eligibility-verification',
      title: 'Eligibility Verification',
      desc: 'Real-time 270/271 insurance coverage, copay, deductible, and network status checks prior to care.',
      tag: 'EDI 270 / 271',
      uiType: 'eligibility',
    },
    {
      slug: 'prior-authorization',
      title: 'Prior Authorization',
      desc: 'Pre-service documentation, clinical criteria coordination, and tracking to eliminate care delays.',
      tag: 'PRE-SERVICE / AUTH',
      uiType: 'auth',
    },
    {
      slug: 'patient-billing-support',
      title: 'Patient Billing',
      desc: 'Clear, patient-friendly statements, respectful bilingual telephone support, and balanced bookkeeping.',
      tag: 'STATEMENTS / BALANCE',
      uiType: 'patient',
    },
  ];

  return (
    <section
      id="services-section"
      className="py-20 lg:py-28 bg-[#0a0f1d] text-white border-y border-slate-800 relative overflow-hidden"
    >
      {/* Background Subtle Tech Accents */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00A859] text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00A859]" />
              <span>END-TO-END CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Everything Behind a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#0066CC] to-emerald-400">
                Healthier Revenue Cycle.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
            Structured support across the billing and revenue cycle workflow designed to eliminate leakage, accelerate cash flow, and ensure compliance.
          </p>
        </div>

        {/* Bento Grid: Featured Flagship Medical Billing (Col 12) */}
        <div className="mb-6">
          <Link
            href={`/services/${medicalBilling.slug}`}
            className="group relative block rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 overflow-hidden"
          >
            {/* Hover Top Gradient Line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0066CC] via-blue-400 to-[#00A859] opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Big Flagship Headline & Narrative */}
              <div className="col-span-12 lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-[#0066CC] text-[11px] font-bold tracking-widest uppercase">
                    FEATURED FLAGSHIP SERVICE
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    CORE WORKFLOW
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-blue-400 transition-colors">
                  MEDICAL BILLING
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  {medicalBilling.shortDesc} We manage the complete cycle from fee schedule setup and accurate charge capture to electronic clearinghouse transmission, remittance posting, and payer follow-up.
                </p>

                {/* Sub-capabilities */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A859]" />
                    <span>Daily Charge Scrubbing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A859]" />
                    <span>835 ERA Electronic Auto-Post</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A859]" />
                    <span>Clean Claim Rate Focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A859]" />
                    <span>Payer Fee Schedule Auditing</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-sm font-bold text-[#00A859] group-hover:text-emerald-300">
                  <span>Explore Medical Billing Architecture</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </div>

              {/* Right Column: Custom Mini Claims / Workflow Console UI */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl bg-slate-950 border border-slate-800/90 p-5 shadow-xl font-mono text-xs">
                  
                  {/* Console Title Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] text-slate-400 font-sans font-semibold ml-2">
                        BATCH CLAIMS PIPELINE · EDI-837P
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-[#00A859] text-[10px] font-bold font-sans">
                      ACTIVE QUEUE
                    </span>
                  </div>

                  {/* Simulated Claims Table */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <div>
                          <div className="font-semibold text-slate-200">CLAIM #8491-TX</div>
                          <div className="text-[10px] text-slate-400 font-sans">Encounter: Office Visit 99214</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-400 text-[10px] font-bold">
                          Scrubbed Clean
                        </span>
                        <div className="text-[10px] text-slate-400 font-sans mt-0.5">Clearinghouse Accept</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <div>
                          <div className="font-semibold text-slate-200">CLAIM #8492-BCBS</div>
                          <div className="text-[10px] text-slate-400 font-sans">Encounter: Preventive Care 99395</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-bold">
                          Transmitted
                        </span>
                        <div className="text-[10px] text-slate-400 font-sans mt-0.5">Payer Adjudication</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <div>
                          <div className="font-semibold text-slate-200">REMITTANCE 835</div>
                          <div className="text-[10px] text-slate-400 font-sans">ERA Payment Reconciliation</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-400 text-[10px] font-bold">
                          Auto-Posted
                        </span>
                        <div className="text-[10px] text-slate-400 font-sans mt-0.5">EHR Ledger Synced</div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                    <span>Validation Engine: Level-1/2/3 Clearinghouse Checks</span>
                    <span className="text-[#00A859] font-bold">Zero Data Leakage</span>
                  </div>

                </div>
              </div>

            </div>
          </Link>
        </div>

        {/* 8 Smaller Services Grid (4 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subServices.map((service) => {
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col justify-between rounded-3xl bg-slate-900/80 border border-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/40 overflow-hidden"
              >
                {/* Top Accent Line on hover */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#0066CC] to-[#00A859] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar: Tag & Mini UI Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                      {service.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
                  </div>

                  {/* Custom Mini Software UI Illustration */}
                  <div className="mb-4 rounded-xl bg-slate-950 border border-slate-800/80 p-3 font-mono text-[10px] text-slate-400">
                    {service.uiType === 'coding' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-slate-300">
                          <span>[DX] M54.50</span>
                          <span className="text-emerald-400">VALID</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>[CPT] 99214-25</span>
                          <span className="text-blue-400">MODIFIER</span>
                        </div>
                        <div className="text-[9px] text-slate-500 font-sans truncate">ICD-10-CM / CCI Edit Pass</div>
                      </div>
                    )}

                    {service.uiType === 'claims' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-slate-300">
                          <span>837P BATCH #402</span>
                          <span className="text-emerald-400">ACK-999</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#0066CC] h-full w-4/5 rounded-full" />
                        </div>
                        <div className="text-[9px] text-slate-500 font-sans truncate">Payer Gateway: 0 Errors</div>
                      </div>
                    )}

                    {service.uiType === 'denials' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-slate-300">
                          <span>CARC CO-16 / N56</span>
                          <span className="text-amber-400">TRIAGED</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>APPEAL PACKET</span>
                          <span className="text-emerald-400">READY</span>
                        </div>
                        <div className="text-[9px] text-slate-500 font-sans truncate">Documentation Attached</div>
                      </div>
                    )}

                    {service.uiType === 'aging' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-slate-300">
                          <span>0-30d · 31-60d</span>
                          <span className="text-emerald-400">NORMAL</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>61-90+d BUCKET</span>
                          <span className="text-amber-400">ACTION</span>
                        </div>
                        <div className="text-[9px] text-slate-500 font-sans truncate">Daily Rep Reprioritization</div>
                      </div>
                    )}

                    {service.uiType === 'credentialing' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-slate-300">
                          <span>CAQH ATTEST</span>
                          <span className="text-emerald-400">CURRENT</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>MEDICARE ENROLL</span>
                          <span className="text-blue-400">ACTIVE</span>
                        </div>
                        <div className="text-[9px] text-slate-500 font-sans truncate">NPI & State License Synced</div>
                      </div>
                    )}

                    {service.uiType === 'eligibility' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-slate-300">
                          <span>EDI 270 QUERY</span>
                          <span className="text-emerald-400">271 RESP</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>ACTIVE COVERAGE</span>
                          <span className="text-blue-400">$30 COPAY</span>
                        </div>
                        <div className="text-[9px] text-slate-500 font-sans truncate">Deductible Met Verified</div>
                      </div>
                    )}

                    {service.uiType === 'auth' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-slate-300">
                          <span>PA TRACKER #182</span>
                          <span className="text-blue-400">APPROVED</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>AUTH CODE: 92831</span>
                          <span className="text-emerald-400">VALID</span>
                        </div>
                        <div className="text-[9px] text-slate-500 font-sans truncate">Linked to Scheduled Visit</div>
                      </div>
                    )}

                    {service.uiType === 'patient' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-slate-300">
                          <span>STATEMENT #772</span>
                          <span className="text-blue-400">DELIVERED</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>PATIENT PORTAL</span>
                          <span className="text-emerald-400">ONLINE</span>
                        </div>
                        <div className="text-[9px] text-slate-500 font-sans truncate">Compliant Plain-Language Bill</div>
                      </div>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#00A859] group-hover:text-emerald-300">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs transition-colors"
          >
            <span>Explore All 9 Comprehensive Services in Detail</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
