import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/siteData';

export const metadata: Metadata = {
  title: 'Terms & Conditions | UR RCM CONSULTANCY LLC',
  description: 'Terms and Conditions of service for UR RCM CONSULTANCY LLC.',
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-3 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
            Terms of Use
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Effective Date: January 2026 · {COMPANY_INFO.legalName}
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing our website or utilizing the consulting, medical billing, or revenue cycle advisory services of {COMPANY_INFO.legalName}, you agree to be bound by these Terms and Conditions, as well as any Master Service Agreement (MSA) or Business Associate Agreement (BAA) executed between your practice and our firm.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Professional Services & Scope</h2>
            <p>
              {COMPANY_INFO.legalName} provides administrative, revenue cycle management, medical billing, clinical coding, and accounts receivable consultancy. We assist healthcare providers in navigating billing rules and payer interactions based on documentation provided by the practice.
            </p>
            <p>
              The client medical practice remains ultimately responsible for clinical care delivery, clinical charting accuracy, and physician medical decision-making.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property</h2>
            <p>
              All proprietary materials, workflows, documentation templates, website text, brand marks, and software layouts displayed on this website are the intellectual property of {COMPANY_INFO.legalName} and are protected by United States and international copyright laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Limitation of Liability</h2>
            <p>
              While {COMPANY_INFO.legalName} applies the highest degree of care and diligence to billing, claim scrubbing, and appeal workflows, reimbursement outcomes remain dependent upon third-party payer medical policies, patient plan deductibles, and timely filing rules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Governing Law & Jurisdiction</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of law principles. Any legal proceeding arising out of these terms shall be brought in Travis County, Texas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Contact Information</h2>
            <p>
              For legal notices or questions regarding these terms, please contact:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
              <div className="font-bold text-slate-900">{COMPANY_INFO.legalName}</div>
              <div>{COMPANY_INFO.address.street}</div>
              <div>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</div>
              <div>Email: {COMPANY_INFO.email}</div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
