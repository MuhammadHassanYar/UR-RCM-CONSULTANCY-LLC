'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Building2,
  Calendar,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Compass,
} from 'lucide-react';
import { useConsultation } from '@/components/ConsultationContext';
import { COMPANY_INFO, PROCESS_STEPS } from '@/lib/siteData';

export default function AboutPage() {
  const { openConsultation } = useConsultation();

  const values = [
    { name: 'Integrity', desc: 'Operating with unwavering ethical standards and complete respect for patient privacy and regulatory frameworks.' },
    { name: 'Accuracy', desc: 'Pursuing precision in every charge entered, code assigned, and appeal filed to ensure clean adjudication.' },
    { name: 'Transparency', desc: 'Delivering clear, unvarnished reporting so practice leadership always understands their financial performance.' },
    { name: 'Accountability', desc: 'Taking full ownership of workflow timelines, payer follow-ups, and proactive resolution of billing hurdles.' },
    { name: 'Innovation', desc: 'Applying structured technology, automated scrubbing, and modern clearinghouse protocols to eliminate manual delays.' },
    { name: 'Partnership', desc: 'Structuring our services as a true operational extension of your clinical practice, aligned with your long-term goals.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 border-b border-slate-200/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
              About UR RCM CONSULTANCY LLC
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Helping Healthcare Providers Navigate the{' '}
              <span className="text-[#0066CC]">Business of Healthcare</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We are a specialized Revenue Cycle Management and healthcare billing consultancy focused on reducing administrative friction, resolving claim hurdles, and helping medical practices protect their bottom line.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 lg:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A859]">Who We Are</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                A Dedicated RCM Partner for Independent & Group Practices
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="font-semibold text-slate-900">{COMPANY_INFO.legalName}</strong> is headquartered in Austin, Texas. We were founded on the belief that healthcare professionals should not have to sacrifice clinical focus or patient well-being to battle administrative complexity and confusing billing systems.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our consultancy brings together seasoned medical billing specialists, certified coding professionals, and experienced denial managers who understand the nuances of commercial, Medicare, and Medicaid payer behavior. We provide scalable support that adapts smoothly to your existing EHR and practice management workflows.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <MapPin className="w-4 h-4 text-[#00A859]" />
                  <span>Austin, Texas HQ</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Shield className="w-4 h-4 text-[#0066CC]" />
                  <span>Confidentiality Focused</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="UR RCM healthcare consulting team collaborating in conference room"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Our Purpose</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                &ldquo;To help healthcare providers simplify revenue cycle operations so they can focus more of their time and resources on patient care.&rdquo;
              </p>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                By removing administrative bottlenecks, verifying coverage upstream, and chasing down rightful claims, we help practices maintain healthy cash flows.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00A859] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A859]">Our Future</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                &ldquo;To become a trusted strategic RCM partner known for accuracy, transparency, innovation, and client-focused service.&rdquo;
              </p>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                We aspire to set the standard for healthcare financial consulting, where integrity and modern technology combine to make practice operations seamless.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-16 lg:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Core Principles</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Values</h2>
            <p className="text-sm text-slate-600">The guiding commitments that shape every client relationship and claim follow-up.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.name} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0066CC]/50 transition-colors">
                <div className="text-xs font-bold text-[#0066CC] uppercase tracking-wider mb-1">Principle 0{i + 1}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/doctor-consultation.jpg"
                  alt="Doctor and business consultant reviewing medical practice performance"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Disciplined Execution</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Approach</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Rather than treating medical billing as isolated data entry, we operate through a structured 4-stage continuum that addresses operational friction at the source:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs font-bold text-[#0066CC]">STEP {step.step}</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{step.title}</div>
                    <p className="text-xs text-slate-600 mt-1 leading-snug">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openConsultation()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-sm transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Consultation with Our Team
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
