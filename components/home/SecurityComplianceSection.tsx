'use client';

import React from 'react';
import {
  ShieldCheck,
  Lock,
  FileKey2,
  Database,
  FileCheck2,
  ReceiptText,
  UserCheck,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

export function SecurityComplianceSection() {
  const securityNodes = [
    {
      title: 'Healthcare Data',
      desc: 'Encrypted PHI at rest and in transit adhering to HIPAA Security Rule guidelines.',
      icon: Database,
      pos: 'top-left',
    },
    {
      title: 'Claims',
      desc: 'Secure 837P/835 EDI clearinghouse pipelines with cryptographic validation.',
      icon: FileCheck2,
      pos: 'top-right',
    },
    {
      title: 'Billing',
      desc: 'Role-based charge entry and financial segregation preventing unauthorized edits.',
      icon: ReceiptText,
      pos: 'bottom-left',
    },
    {
      title: 'Provider Information',
      desc: 'Guarded credentialing vaults for NPI, CAQH, state licenses, and DEA records.',
      icon: UserCheck,
      pos: 'bottom-right',
    },
    {
      title: 'Reporting',
      desc: 'Confidential executive financial analytics with audit logging and permission gates.',
      icon: BarChart3,
      pos: 'bottom-center',
    },
  ];

  return (
    <section
      id="compliance-section"
      className="py-20 lg:py-28 bg-[#0a0f1d] text-white border-y border-slate-800 relative overflow-hidden"
    >
      {/* Background Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00A859] text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#00A859]" />
            <span>CONFIDENTIALITY & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Built With Privacy and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Security in Mind.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Healthcare financial management requires strict confidentiality. We engineer our operational pipelines to safeguard Protected Health Information (PHI) at every touchpoint.
          </p>
        </div>

        {/* Central Connected Security Hub Diagram */}
        <div className="relative max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden mb-12">
          
          {/* Connecting SVG Network Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#00A859" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#00A859" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="50%" y1="85%" x2="50%" y2="50%" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>

          {/* Center Hub: Shield & Security Symbol */}
          <div className="relative z-10 flex flex-col items-center justify-center my-6">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-24 w-24 rounded-full bg-[#00A859] opacity-20" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#0066CC] to-[#00A859] p-0.5 shadow-xl shadow-emerald-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-[#00A859]" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="font-mono text-xs font-bold text-white tracking-wider uppercase px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                CENTRAL SAFEGUARD MATRIX
              </span>
              <p className="text-[11px] text-slate-400 mt-1">HIPAA / BAA Enforced Protocols</p>
            </div>
          </div>

          {/* 5 Connected Perimeter Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 relative z-10">
            {securityNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.title}
                  className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 hover:border-[#00A859]/50 transition-all flex items-start gap-3.5 group shadow-xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-[#00A859] group-hover:bg-[#00A859] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {node.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 4 Compliance Credentials Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-sm font-bold text-white">HIPAA Standard</div>
            <div className="text-xs text-slate-400 mt-0.5">Privacy & Security Rule Alignment</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-sm font-bold text-white">HITECH Safeguards</div>
            <div className="text-xs text-slate-400 mt-0.5">Encrypted Transmission Channels</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-sm font-bold text-white">BAA Execution</div>
            <div className="text-xs text-slate-400 mt-0.5">Business Associate Agreements</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-sm font-bold text-white">Role-Based Access</div>
            <div className="text-xs text-slate-400 mt-0.5">Strict Need-to-Know Authorization</div>
          </div>
        </div>

      </div>
    </section>
  );
}
