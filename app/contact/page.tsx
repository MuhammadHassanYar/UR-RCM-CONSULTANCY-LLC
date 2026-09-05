'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Shield,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST, SPECIALTIES_LIST } from '@/lib/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    practiceName: '',
    email: '',
    phone: '',
    specialty: '',
    serviceInterest: '',
    practiceSize: '1-3 Providers',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
            Austin, Texas Headquarters
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Connect with{' '}
            <span className="text-[#0066CC]">UR RCM CONSULTANCY LLC</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ready to explore how our medical billing and revenue cycle consulting can support your healthcare practice? Reach out directly or complete the inquiry form below.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM SECTION */}
      <section className="py-16 lg:py-24 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Official Austin Information (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A859]">Direct Details</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Our Corporate Office
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are based in Austin, Texas, serving independent practices, medical groups, and healthcare providers across the United States.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#00A859]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters Address</div>
                    <div className="text-sm font-bold text-slate-900">{COMPANY_INFO.legalName}</div>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {COMPANY_INFO.address.street}
                      <br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                      <br />
                      {COMPANY_INFO.address.country}
                    </div>
                    <a
                      href="https://maps.google.com/?q=5900+BALCONES+DRIVE+STE+11101+AUSTIN+TX+78731"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0066CC] hover:underline pt-2"
                    >
                      Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Phone</div>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-base font-bold text-slate-900 hover:text-[#0066CC] transition-colors block"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-xs text-slate-500">Dedicated Practice Support Line</div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Electronic Mail</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#0066CC] transition-colors block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <div className="text-xs text-slate-500">Practice Inquiries & Requests</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Operational Hours</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">{COMPANY_INFO.hours}</div>
                    <div className="text-xs text-slate-500">Central Standard Time (Austin, TX)</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 text-xs text-slate-700 flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
                <span>
                  <strong>Confidentiality Notice:</strong> All consultations and preliminary practice reviews are conducted under strict confidentiality and privacy safeguards.
                </span>
              </div>

            </div>

            {/* Right Column: Interactive Consultation & Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A859] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Thank You for Reaching Out</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have received your practice inquiry for <strong>{formData.practiceName || formData.name}</strong>. An advisor from UR RCM CONSULTANCY LLC will review your requirements and reach out within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          practiceName: '',
                          email: '',
                          phone: '',
                          specialty: '',
                          serviceInterest: '',
                          practiceSize: '1-3 Providers',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      Send an Inquiry or Schedule a Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill in your practice details to connect directly with our revenue cycle management advisors.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-bold text-slate-700">
                        Contact Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Jane Smith or Office Manager"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-practice" className="text-xs font-bold text-slate-700">
                        Practice / Facility Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-practice"
                        required
                        value={formData.practiceName}
                        onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                        placeholder="Austin Family Medicine"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-700">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@practice.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(512) 555-0199"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-specialty" className="text-xs font-bold text-slate-700">
                        Medical Specialty
                      </label>
                      <select
                        id="contact-specialty"
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] bg-white"
                      >
                        <option value="">Select Specialty...</option>
                        {SPECIALTIES_LIST.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-service" className="text-xs font-bold text-slate-700">
                        Primary Interest
                      </label>
                      <select
                        id="contact-service"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] bg-white"
                      >
                        <option value="">Select Service...</option>
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-size" className="text-xs font-bold text-slate-700">
                        Practice Size
                      </label>
                      <select
                        id="contact-size"
                        value={formData.practiceSize}
                        onChange={(e) => setFormData({ ...formData, practiceSize: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] bg-white"
                      >
                        <option value="Solo Provider">Solo Provider</option>
                        <option value="1-3 Providers">1-3 Providers</option>
                        <option value="4-10 Providers">4-10 Providers</option>
                        <option value="11+ Providers">11+ Providers / Multi-Site</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-700">
                      Billing Challenges or Questions
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your current billing workflow, EHR system, denial hurdles, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Practice Consultation Request
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
