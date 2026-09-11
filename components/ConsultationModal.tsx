'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Building2, User, Mail, Phone, Calendar, ArrowRight, Shield, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '@/lib/siteData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultService = '' }: ConsultationModalProps) {
  const [fullName, setFullName] = useState('');
  const [practiceName, setPracticeName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'revenue-cycle-management');
  const [specialty, setSpecialty] = useState('');
  const [billingVolume, setBillingVolume] = useState('Under $100k / mo');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setRefCode(`UR-RCM-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setPracticeName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] px-3.5 sm:px-6 py-3.5 sm:py-5 text-white flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>Confidential & Compliant Assessment</span>
            </div>
            <h2 id="modal-title" className="text-base sm:text-2xl font-bold tracking-tight text-white mt-1 truncate">
              Schedule an RCM Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            id="close-consultation-modal-btn"
            className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3.5 sm:p-8">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#00A859] flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Consultation Request Received</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. Your request has been logged under Reference ID <span className="font-mono font-bold text-[#0066CC]">{refCode}</span>.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0066CC]" /> Next Steps
                </div>
                <p>1. An RCM practice specialist from our Austin, TX office will review your details.</p>
                <p>2. We will contact you at <span className="font-medium text-slate-900">{email}</span> within 1 business day.</p>
                <p>3. We will prepare an initial workflow discussion tailored to <span className="font-medium text-slate-900">{practiceName || 'your healthcare organization'}</span>.</p>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-medium text-sm transition-colors shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-slate-600">
                Let&apos;s discuss your practice&apos;s billing workflows, denial challenges, and opportunities for revenue cycle optimization.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="consult-name">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="consult-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Dr. Jane Smith / Practice Admin"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC]"
                    />
                  </div>
                </div>

                {/* Practice / Org */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="consult-practice">
                    Practice / Organization *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="consult-practice"
                      type="text"
                      required
                      value={practiceName}
                      onChange={(e) => setPracticeName(e.target.value)}
                      placeholder="Austin Medical Specialists"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="consult-email">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="consult-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@practice.com"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="consult-phone">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="consult-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(512) 555-0192"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC]"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="consult-service">
                    Primary Service of Interest
                  </label>
                  <select
                    id="consult-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC] bg-white text-slate-800"
                  >
                    <option value="all-rcm">Complete Revenue Cycle Management</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="consult-volume">
                    Estimated Monthly Billing Volume
                  </label>
                  <select
                    id="consult-volume"
                    value={billingVolume}
                    onChange={(e) => setBillingVolume(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC] bg-white text-slate-800"
                  >
                    <option>Under $100k / mo</option>
                    <option>$100k – $300k / mo</option>
                    <option>$300k – $750k / mo</option>
                    <option>$750k – $1.5M / mo</option>
                    <option>$1.5M+ / mo</option>
                    <option>Starting a New Practice</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="consult-message">
                  Current Billing Challenges or Goals (Optional)
                </label>
                <textarea
                  id="consult-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us briefly about your specialty, EHR software (e.g. Athena, eCW, Tebra), or specific challenges like aging A/R or denial spikes..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#00A859]" />
                  100% Confidential. No obligation.
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="submit-consultation-form-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Request Consultation
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
