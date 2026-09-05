'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Shield, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_LIST } from '@/lib/siteData';
import { useConsultation } from './ConsultationContext';

export function Footer() {
  const { openConsultation } = useConsultation();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Top Banner inside footer */}
      <div className="border-b border-slate-800/80 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Shield className="w-6 h-6 text-[#00A859]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Austin, Texas Revenue Cycle Specialists</h3>
              <p className="text-xs text-slate-400">Supporting independent practices, multi-specialty clinics, and healthcare systems across the U.S.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              id="footer-schedule-consultation-btn"
              onClick={() => openConsultation()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/30 transition-all"
            >
              Schedule a Consultation <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white/5 p-3.5 rounded-2xl inline-block border border-white/10 backdrop-blur-sm">
              <Logo theme="dark" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              UR RCM CONSULTANCY LLC provides professional medical billing, coding, and comprehensive revenue cycle management solutions designed to reduce administrative friction and strengthen financial health for healthcare practices.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse" />
              <span>Processes designed with healthcare privacy & security standards</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-slate-400 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/specialties" className="text-slate-400 hover:text-white transition-colors">
                  Specialties Served
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-400 hover:text-white transition-colors">
                  Resources & Insights
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Key Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES_LIST.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[#0066CC] hover:text-blue-400 font-semibold transition-colors">
                  View All 10 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Austin, TX Headquarters (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Headquarters</h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="font-semibold text-white">
                {COMPANY_INFO.legalName}
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A859] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  <br />
                  {COMPANY_INFO.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0066CC] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0066CC] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {COMPANY_INFO.copyrightYear} {COMPANY_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">Austin, Texas, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
