import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, MapPin, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/siteData';

export const metadata: Metadata = {
  title: 'Privacy Policy | UR RCM CONSULTANCY LLC',
  description: 'Privacy Policy and healthcare data protection commitments of UR RCM CONSULTANCY LLC.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-3 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
            Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Last Updated: January 2026 · {COMPANY_INFO.legalName}
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Commitment to Privacy & Confidentiality</h2>
            <p>
              {COMPANY_INFO.legalName} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy, confidentiality, and security of information entrusted to us by healthcare providers, medical practices, clinical organizations, and visitors to our website.
            </p>
            <p>
              Our operations are designed with strict healthcare privacy, administrative safeguards, and regulatory considerations in mind.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p>
              We collect information that you directly provide to us when submitting inquiries, scheduling consultations, or entering into consulting service agreements. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
              <li>Contact names, professional roles, practice or clinic names, and physical addresses.</li>
              <li>Practice contact details including business telephone numbers and corporate email addresses.</li>
              <li>Operational details regarding your EHR systems, clearinghouses, specialties, and billing volumes.</li>
              <li>Website telemetry data collected automatically for diagnostic, analytics, and security purposes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Protected Health Information (PHI) & Business Associate Relationships</h2>
            <p>
              In performing Revenue Cycle Management, medical billing, clinical coding, and accounts receivable follow-up services for covered entities, {COMPANY_INFO.legalName} operates as a Business Associate. All handling of Protected Health Information (PHI) is governed by formal Business Associate Agreements (BAAs), executing physical, technical, and administrative safeguards designed to maintain confidentiality, integrity, and availability of electronic PHI.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Use and Disclosure of Information</h2>
            <p>
              We use collected information solely to provide, manage, and optimize our consulting and billing services, process claims, communicate with practice leadership, and fulfill our contractual and legal obligations. We do not sell, rent, or trade client information to third-party marketers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Data Security Measures</h2>
            <p>
              We implement industry-recognized technical and administrative security controls, including encrypted data transmission (SSL/TLS), role-based access restrictions, multi-factor authentication, audit logging, and secure infrastructure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our data management practices, please contact our administrative office:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2">
              <div className="font-bold text-slate-900">{COMPANY_INFO.legalName}</div>
              <div>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</div>
              <div>Phone: {COMPANY_INFO.phone}</div>
              <div>Email: {COMPANY_INFO.email}</div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
