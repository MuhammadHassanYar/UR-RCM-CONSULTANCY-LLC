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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }

  // Determine if dark navbar state applies (only when at the very top of the homepage)
  const isDarkNav = pathname === '/' && !isScrolled;

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
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 text-white py-3'
          : isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5 text-slate-900'
          : 'bg-white border-b border-slate-100 py-3 text-slate-900'
      }`}
    >
      {/* Top micro-bar for quick contact */}
      <div
        className={`hidden lg:block border-b pb-2 mb-2 text-xs transition-colors duration-300 ${
          isDarkNav
            ? 'border-white/10 text-slate-400'
            : 'border-slate-100 text-slate-500'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
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
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[740px] animate-in fade-in zoom-in-95 duration-150"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="services-menu-button"
                      >
                        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 text-slate-900">
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
                              className="text-xs font-bold text-[#0066CC] hover:underline flex items-center gap-1"
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
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all ${
                isDarkNav
                  ? 'bg-[#0066CC] hover:bg-[#0052A3] text-white shadow-blue-500/25'
                  : 'bg-[#0066CC] hover:bg-[#0052A3] text-white shadow-blue-500/20'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Schedule a Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => openConsultation()}
              className="px-3 py-1.5 rounded-lg bg-[#0066CC] text-white text-xs font-bold"
            >
              Consult
            </button>
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isDarkNav
                  ? 'text-slate-200 hover:bg-white/10'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[73px] bottom-0 bg-slate-900/40 backdrop-blur-sm z-50">
          <div className="bg-white h-full max-w-sm w-full ml-auto shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-200">
            {/* Header info */}
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="text-xs text-slate-600 font-medium">
                UR RCM CONSULTANCY LLC
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md text-slate-500 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="p-4 space-y-1 divide-y divide-slate-100 flex-1">
              <div className="space-y-1 pb-3">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isMobileServicesOpen ? 'rotate-180 text-[#0066CC]' : ''
                      }`}
                    />
                  </button>

                  {isMobileServicesOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-100">
                      <Link
                        href="/services"
                        className="block px-2.5 py-1.5 text-xs font-bold text-[#0066CC] hover:underline"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        All Services Overview →
                      </Link>
                      {SERVICES_LIST.map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.slug}`}
                          className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-[#0066CC] font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {srv.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/why-choose-us"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why Choose Us
                </Link>
                <Link
                  href="/specialties"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Specialties
                </Link>
                <Link
                  href="/resources"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resources & Insights
                </Link>
                <Link
                  href="/faq"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>

              {/* Office Contact Info */}
              <div className="pt-4 space-y-3 text-xs text-slate-600">
                <div className="font-semibold text-slate-900">Austin, Texas Office</div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00A859] shrink-0 mt-0.5" />
                  <span>5900 Balcones Drive Ste 11101<br />Austin, TX 78731</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0066CC] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-medium text-slate-800">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom CTA in Drawer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0066CC] text-white text-sm font-bold shadow-md shadow-blue-500/20"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
