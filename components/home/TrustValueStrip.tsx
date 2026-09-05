'use client';

import React from 'react';
import { ReceiptText, Layers, ShieldAlert, FileCode2, UserCheck } from 'lucide-react';

export function TrustValueStrip() {
  const items = [
    { title: 'Medical Billing', desc: 'Precision charge entry & claim flow', icon: ReceiptText, tag: 'INTAKE' },
    { title: 'Revenue Cycle Management', desc: 'End-to-end financial lifecycle', icon: Layers, tag: 'END-TO-END' },
    { title: 'Claims & Denials', desc: 'Root-cause tracking & recovery', icon: ShieldAlert, tag: 'OVERSIGHT' },
    { title: 'Coding & Compliance', desc: 'ICD-10, CPT & modifier accuracy', icon: FileCode2, tag: 'ACCURACY' },
    { title: 'Provider Support', desc: 'Credentialing & enrollment care', icon: UserCheck, tag: 'CREDENTIALS' },
  ];

  return (
    <section className="bg-[#f8fafc] border-b border-slate-200 py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#0066CC]/40 transition-all duration-200 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066CC] group-hover:bg-[#0066CC] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0066CC] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

