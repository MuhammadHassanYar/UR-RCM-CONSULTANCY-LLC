'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, HelpCircle, Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import { MASTER_FAQS } from '@/lib/siteData';
import { useConsultation } from '@/components/ConsultationContext';

export default function FAQPage() {
  const { openConsultation } = useConsultation();
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'RCM Fundamentals', 'Billing & Claims', 'Denials & A/R', 'Onboarding & Support'];

  const filteredFaqs = MASTER_FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const expandAll = () => {
    setOpenIndices(filteredFaqs.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
            Answers & Clarity
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions &{' '}
            <span className="text-[#0066CC]">Practice Guidance</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Find immediate answers regarding our revenue cycle management, billing workflows, EHR integration, denials recovery, and onboarding protocols.
          </p>

          {/* Search Input */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g., denials, onboarding, EHR, A/R)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066CC] shadow-xs"
            />
          </div>

          {/* Category Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0066CC] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS ACCORDION SECTION */}
      <section className="py-16 lg:py-20 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 text-xs text-slate-500">
            <span>Showing {filteredFaqs.length} questions</span>
            <div className="flex items-center gap-3">
              <button type="button" onClick={expandAll} className="hover:text-[#0066CC] font-semibold">
                Expand All
              </button>
              <span>•</span>
              <button type="button" onClick={collapseAll} className="hover:text-[#0066CC] font-semibold">
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndices.includes(index);

              return (
                <div
                  key={faq.question}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-slate-50/70 transition-colors gap-3"
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A859] block">
                        {faq.category}
                      </span>
                      <h2 className="text-sm sm:text-lg font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h2>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#0066CC] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-slate-900">No questions found matching &ldquo;{searchQuery}&rdquo;</h3>
                <p className="text-xs text-slate-500 mt-1">Try searching with a broader keyword or browse by category.</p>
              </div>
            )}
          </div>

          {/* Bottom Card */}
          <div className="mt-14 bg-slate-900 text-white rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Have a specific question about your practice?</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Our Austin consulting team is ready to discuss your specific specialty, payer mix, or EHR workflow.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openConsultation()}
              className="w-full md:w-auto inline-flex items-center justify-center text-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white text-sm font-bold shadow-md shrink-0"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Consultation
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
