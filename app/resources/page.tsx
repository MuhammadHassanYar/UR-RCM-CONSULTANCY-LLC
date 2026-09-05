'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  FileText,
  Share2,
  Download,
} from 'lucide-react';
import { ARTICLES_LIST, ArticleItem } from '@/lib/siteData';
import { useConsultation } from '@/components/ConsultationContext';

export default function ResourcesPage() {
  const { openConsultation } = useConsultation();
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Medical Billing', 'A/R Management', 'Compliance', 'Operations'];

  const filteredArticles = ARTICLES_LIST.filter((a) => {
    if (selectedCategory === 'All') return true;
    return a.category === selectedCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
            Practice Intelligence
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Revenue Cycle Insights &{' '}
            <span className="text-[#0066CC]">Operational Guides</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical strategies, regulatory updates, and workflow frameworks written for medical practice administrators, physicians, and billing managers.
          </p>

          {/* Category Filter */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0066CC] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-16 lg:py-20 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#0066CC]/40 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066CC] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-2 hover:text-[#0066CC] transition-colors">
                    {art.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {art.excerpt}
                  </p>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Published {art.date}</span>
                  </div>
                </div>

                <div className="px-6 py-4 sm:px-7 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Practice Guide</span>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(art)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066CC] hover:text-[#0052A3]"
                  >
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Practice RCM Assessment Checklist Tool */}
          <div className="mt-16 bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A859]">Practice Checklist</span>
                <h3 className="text-2xl font-black text-slate-900">
                  Are Your Revenue Cycle Fundamentals in Order?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Key checkpoints medical practices should review quarterly to avoid unnoticed revenue leakage:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    '95%+ Clean claims rate on initial submission',
                    'A/R days kept below 40 across commercial payers',
                    'Zero claims written off for timely filing deadlines',
                    '100% of encounters reconciled against provider schedules',
                    'Front-desk active eligibility checks 48–72h prior to visit',
                    'Denial root-cause categorization by CARC codes',
                  ].map((check) => (
                    <div key={check} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right">
                <button
                  type="button"
                  onClick={() => openConsultation()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm shadow-md transition-all"
                >
                  Request a Practice Assessment
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066CC] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedArticle.readTime} · {selectedArticle.date}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 italic">
                {selectedArticle.excerpt}
              </div>
              <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
                {selectedArticle.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {selectedArticle.keyTakeaways && (
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Key Practice Takeaways
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedArticle.keyTakeaways.map((takeaway) => (
                      <li key={takeaway} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Author: UR RCM Advisory Group · Austin, Texas
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedArticle(null);
                    openConsultation();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  Discuss this Topic with an Advisor
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
