'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Calendar,
  ArrowRight,
  ReceiptText,
  FileCode2,
  SendHorizontal,
  ShieldAlert,
  TrendingUp,
  Award,
  UserCheck,
  CheckCheck,
  CreditCard,
  Layers,
  MapPin,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_LIST } from '@/lib/siteData';
import { useConsultation } from './ConsultationContext';

const ICON_MAP: Record<string, React.ElementType> = {
  ReceiptText,
  FileCode2,
  SendHorizontal,
  ShieldAlert,
  TrendingUp,
  Award,
  UserCheck,
  CheckCheck,
  CreditCard,
  Layers,
};

export function Navbar() {
  const pathname = usePathname();
  const { openConsultation } = useConsultation();
  
  // Mobile-responsive boolean state triggered by hamburger menu icon
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handlePopState = () => {
      setIsOpen(false);
      setIsServicesDropdownOpen(false);
      setIsMobileServicesOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Determine if dark navbar state applies (when at top of homepage and menu closed, or retain dark background when menu open)
  const isDarkNav = pathname === '/' && (!isScrolled || isOpen);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Why Us', href: '/why-choose-us' },
    { label: 'Specialties', href: '/specialties' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isDarkNav
          ? 'bg-slate-950 border-b border-white/10 text-white py-3'
          : isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5 text-slate-900'
          : 'bg-white border-b border-slate-100 py-3 text-slate-900'
      }`}
    >
      {/* Top micro-bar for quick contact on large screens */}
      <div
        className={`hidden lg:block border-b pb-2 mb-2 text-xs transition-colors duration-300 ${
          isDarkNav
            ? 'border-white/10 text-slate-400'
            : 'border-slate-100 text-slate-500'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00A859]" />
              Austin, TX · 5900 Balcones Drive Ste 11101
            </span>
            <span className={isDarkNav ? 'text-slate-700' : 'text-slate-300'}>|</span>
            <span className="font-medium">
              Enterprise Revenue Cycle Management & Medical Billing Solutions
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className={`flex items-center gap-1.5 font-semibold transition-colors ${
                isDarkNav ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-[#0066CC]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#00A859]" />
              {COMPANY_INFO.phone}
            </a>
            <span className={isDarkNav ? 'text-slate-700' : 'text-slate-300'}>|</span>
            <span className="text-[#00A859] bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider border border-emerald-500/20">
              Confidential Consultations
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center justify-between min-w-0">
          {/* Company Logo */}
          <div className="flex items-center">
            <Logo theme={isDarkNav ? 'dark' : 'light'} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                        isDarkNav
                          ? isActive
                            ? 'text-white bg-white/15'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                          : isActive
                          ? 'text-[#0066CC] bg-blue-50/70'
                          : 'text-slate-700 hover:text-[#0066CC] hover:bg-slate-50'
                      }`}
                      aria-expanded={isServicesDropdownOpen}
                      id="services-menu-button"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesDropdownOpen
                            ? `rotate-180 ${isDarkNav ? 'text-white' : 'text-[#0066CC]'}`
                            : isDarkNav
                            ? 'text-slate-400'
                            : 'text-slate-400'
                        }`}
                      />
                    </Link>

                    {/* Services Mega Dropdown */}
                    {isServicesDropdownOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-full max-w-3xl animate-in fade-in zoom-in-95 duration-150"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="services-menu-button"
                      >
                        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 text-slate-900 w-full">
                          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                            <div>
                              <div className="text-[10px] uppercase tracking-widest font-bold text-[#0066CC] mb-0.5">
                                Solutions Architecture
                              </div>
                              <h3 className="text-sm font-bold text-slate-900">End-to-End Revenue Cycle Capabilities</h3>
                            </div>
                            <Link
                              href="/services"
                              className="text-xs font-bold text-[#0066CC] hover:text-[#0052A3] flex items-center gap-1 transition-colors"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              All 9 Service Workflows <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2.5">
                            {SERVICES_LIST.map((service) => {
                              const IconComponent = ICON_MAP[service.iconName] || ReceiptText;
                              return (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.slug}`}
                                  className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200/70"
                                  onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#0066CC] transition-colors">
                                      {service.title}
                                    </div>
                                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 leading-snug">
                                      {service.shortDesc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-3xl">
                            <div className="text-xs text-slate-600">
                              Seeking a practice-specific revenue review?
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setIsServicesDropdownOpen(false);
                                openConsultation();
                              }}
                              className="text-xs font-bold text-[#0066CC] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              Request Discovery Consultation <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isDarkNav
                      ? isActive
                        ? 'text-white bg-white/15'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                      : isActive
                      ? 'text-[#0066CC] bg-blue-50/70'
                      : 'text-slate-700 hover:text-[#0066CC] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              type="button"
              id="nav-schedule-consultation-btn"
              onClick={() => openConsultation()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0066CC] hover:bg-[#0052A3] text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Consultation
            </button>
          </div>

          {/* Mobile Actions: Quick Consult Button & Hamburger Menu Icon */}
          <div className="flex xl:hidden items-center gap-2 relative z-50 shrink-0">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openConsultation();
              }}
              className="px-3 py-1.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer shrink-0 whitespace-nowrap"
            >
              Consult
            </button>

            {/* Hamburger Menu Toggle Button */}
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`h-10 w-10 sm:h-11 sm:w-11 p-2 rounded-xl flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                isDarkNav
                  ? 'text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-xs'
                  : 'text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200'
              }`}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#0066CC]" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile-responsive navigation container with conditional CSS class 'flex flex-col' when isOpen */}
        <div
          id="mobile-navigation-menu"
          className={`xl:hidden w-full transition-all duration-300 overflow-y-auto max-h-[calc(100dvh-5.5rem)] ${
            isOpen ? 'flex flex-col' : 'hidden'
          } ${
            isDarkNav
              ? 'border-t border-slate-800/90 pt-4 pb-6 mt-3 text-white'
              : 'border-t border-slate-200 pt-4 pb-6 mt-3 text-slate-900'
          }`}
        >
          {/* Vertical Menu Items */}
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                        pathname.startsWith('/services')
                          ? isDarkNav
                            ? 'bg-white/15 text-white'
                            : 'bg-blue-50 text-[#0066CC]'
                          : isDarkNav
                          ? 'text-slate-200 hover:bg-white/10'
                          : 'text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileServicesOpen
                            ? `rotate-180 ${isDarkNav ? 'text-white' : 'text-[#0066CC]'}`
                            : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {isMobileServicesOpen && (
                      <div
                        className={`pl-3 pr-2 py-2 space-y-1 rounded-2xl my-1 border animate-in fade-in duration-150 ${
                          isDarkNav
                            ? 'bg-slate-900 border-slate-800'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <Link
                          href="/services"
                          className={`block px-3 py-2 text-xs font-bold ${
                            isDarkNav ? 'text-blue-400 hover:underline' : 'text-[#0066CC] hover:underline'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          All 9 Service Workflows →
                        </Link>
                        {SERVICES_LIST.map((srv) => (
                          <Link
                            key={srv.id}
                            href={`/services/${srv.slug}`}
                            className={`block px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                              pathname === `/services/${srv.slug}`
                                ? isDarkNav
                                  ? 'text-white font-bold bg-white/10'
                                  : 'text-[#0066CC] font-bold bg-white'
                                : isDarkNav
                                ? 'text-slate-300 hover:text-white hover:bg-white/5'
                                : 'text-slate-700 hover:text-[#0066CC] hover:bg-white'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {srv.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? isDarkNav
                        ? 'bg-white/15 text-white'
                        : 'bg-blue-50 text-[#0066CC]'
                      : isDarkNav
                      ? 'text-slate-200 hover:bg-white/10'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Action Button */}
          <div className="pt-4 pb-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Schedule Practice Consultation</span>
            </button>
          </div>

          {/* Mobile Headquarters Contact Strip */}
          <div
            className={`pt-4 mt-2 border-t text-xs space-y-2.5 ${
              isDarkNav ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-600'
            }`}
          >
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#00A859] shrink-0 mt-0.5" />
              <span>5900 Balcones Drive Ste 11101, Austin, TX 78731</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className={`flex items-center gap-1.5 font-semibold transition-colors ${
                  isDarkNav ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-[#0066CC]'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#0066CC]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className={`flex items-center gap-1.5 hover:underline transition-colors ${
                  isDarkNav ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#0066CC]'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-[#0066CC]" />
                <span className="break-all">{COMPANY_INFO.email}</span>
              </a>
            </div>

            <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#00A859] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A859]" />
              <span>HIPAA Compliant Practice Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
