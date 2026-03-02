'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '@/context/LanguageContext'

const glossaryData = [
  {
    catAr: 'التأسيس والتعديلات',
    catEn: 'Incorporation & Amendments',
    terms: [
      { en: 'Articles of Association', ar: 'النظام الأساسي' },
      { en: 'Memorandum of Association', ar: 'عقد التأسيس' },
      { en: 'Share Capital', ar: 'رأس المال المصدر / المدفوع' },
      { en: 'Authorized Capital', ar: 'رأس المال المرخص به' },
      { en: 'Issued Capital', ar: 'رأس المال المصدر' },
      { en: 'Paid-up Capital', ar: 'رأس المال المدفوع' },
      { en: 'Board of Directors', ar: 'مجلس الإدارة' },
      { en: 'Shareholders', ar: 'المساهمون / الشركاء' },
      { en: 'Ordinary Resolution', ar: 'قرار عادي' },
      { en: 'Special Resolution', ar: 'قرار خاص' },
      { en: 'Amendment of Articles', ar: 'تعديل النظام الأساسي' },
      { en: 'Sole Proprietorship', ar: 'منشأة فردية' },
      { en: 'Partnership', ar: 'شركة أشخاص' },
      { en: 'Limited Liability Company (LLC)', ar: 'شركة ذات مسؤولية محدودة' },
      { en: 'Joint Stock Company', ar: 'شركة مساهمة' },
      { en: 'Holding Company', ar: 'شركة قابضة' },
      { en: 'Subsidiary', ar: 'شركة تابعة' },
    ],
  },
  {
    catAr: 'الحوكمة',
    catEn: 'Corporate Governance',
    terms: [
      { en: 'Corporate Governance', ar: 'حوكمة الشركات' },
      { en: 'Transparency', ar: 'الشفافية' },
      { en: 'Accountability', ar: 'المساءلة' },
      { en: 'Conflict of Interest', ar: 'تعارض المصالح' },
      { en: 'Internal Audit', ar: 'المراجعة الداخلية' },
      { en: 'Compliance', ar: 'الالتزام' },
      { en: 'Stakeholders', ar: 'أصحاب المصلحة' },
      { en: 'AGM – Annual General Meeting', ar: 'الجمعية العمومية العادية السنوية' },
      { en: 'EGM – Extraordinary General Meeting', ar: 'الجمعية العمومية غير العادية' },
      { en: 'Quorum', ar: 'النصاب القانوني' },
      { en: 'Voting Rights', ar: 'حقوق التصويت' },
      { en: 'Audit Committee', ar: 'لجنة المراجعة' },
      { en: 'Risk Management', ar: 'إدارة المخاطر' },
      { en: 'Corporate Social Responsibility (CSR)', ar: 'المسؤولية الاجتماعية للشركات' },
    ],
  },
  {
    catAr: 'التقييم',
    catEn: 'Valuation',
    terms: [
      { en: 'Valuation', ar: 'التقييم' },
      { en: 'Book Value', ar: 'القيمة الدفترية' },
      { en: 'Market Value', ar: 'القيمة السوقية' },
      { en: 'Discounted Cash Flow (DCF)', ar: 'التدفقات النقدية المخصومة' },
      { en: 'EBITDA', ar: 'الأرباح قبل الفوائد والضرائب والإهلاك والاستهلاك' },
      { en: 'P/E Ratio', ar: 'مضاعف الربحية' },
      { en: 'Net Assets', ar: 'صافي الأصول' },
      { en: 'Goodwill', ar: 'الشهرة التجارية' },
    ],
  },
  {
    catAr: 'الدمج والاستحواذ',
    catEn: 'Mergers & Acquisitions',
    terms: [
      { en: 'Merger', ar: 'اندماج' },
      { en: 'Acquisition', ar: 'استحواذ' },
      { en: 'Due Diligence', ar: 'الفحص النافي للجهالة' },
      { en: 'Letter of Intent (LOI)', ar: 'خطاب النوايا' },
      { en: 'Share Purchase Agreement (SPA)', ar: 'اتفاقية شراء الأسهم' },
      { en: 'Asset Purchase Agreement', ar: 'اتفاقية شراء الأصول' },
      { en: 'Non-Disclosure Agreement (NDA)', ar: 'اتفاقية سرية' },
      { en: 'Earn-out', ar: 'دفعات مشروطة بالأداء' },
      { en: 'Anti-dilution', ar: 'مكافحة تخفيف الملكية' },
    ],
  },
  {
    catAr: 'التصفية والحل',
    catEn: 'Dissolution & Liquidation',
    terms: [
      { en: 'Dissolution', ar: 'حل الشركة' },
      { en: 'Liquidation', ar: 'تصفية الشركة' },
      { en: 'Insolvency', ar: 'الإعسار' },
      { en: 'Receiver', ar: 'الحارس القضائي' },
      { en: 'Liquidator', ar: 'المصفي' },
      { en: 'Distribution of Assets', ar: 'توزيع الأصول' },
    ],
  },
  {
    catAr: 'التمويل والهيكلة المالية',
    catEn: 'Finance & Structure',
    terms: [
      { en: 'Equity', ar: 'حقوق الملكية' },
      { en: 'Debt Financing', ar: 'التمويل بالدين' },
      { en: 'Leverage', ar: 'الرفع المالي' },
      { en: 'Convertible Notes', ar: 'سندات قابلة للتحويل' },
      { en: 'IPO – Initial Public Offering', ar: 'الطرح العام الأولي' },
      { en: 'Private Equity', ar: 'الملكية الخاصة' },
      { en: 'Venture Capital', ar: 'رأس المال المخاطر' },
    ],
  },
]

export default function GlossaryPage() {
  const { t, lang } = useLang()
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState(-1) // -1 = all

  const query = search.toLowerCase().trim()

  const filtered = glossaryData
    .map((cat, i) => ({
      ...cat,
      index: i,
      terms: cat.terms.filter(
        (term) =>
          (activeTab === -1 || activeTab === i) &&
          (!query || term.en.toLowerCase().includes(query) || term.ar.includes(query))
      ),
    }))
    .filter((cat) => cat.terms.length > 0)

  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="bg-navy pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">{t('glossary.heading')}</h1>
          <p className="text-white/70 text-xl mb-10">{t('glossary.sub')}</p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <svg className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('glossary.search')}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full py-3 ps-12 pe-5 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
              dir="auto"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveTab(-1)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${
                activeTab === -1 ? 'bg-navy text-white' : 'text-gray-500 hover:text-navy hover:bg-gray-50'
              }`}
            >
              {lang === 'ar' ? 'الكل' : 'All'}
            </button>
            {glossaryData.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${
                  activeTab === i ? 'bg-gold text-navy' : 'text-gray-500 hover:text-navy hover:bg-gray-50'
                }`}
              >
                {lang === 'ar' ? cat.catAr : cat.catEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Terms */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              {lang === 'ar' ? 'لا توجد نتائج لبحثك' : 'No results found'}
            </div>
          ) : (
            filtered.map((cat) => (
              <div key={cat.index}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-navy">
                    {lang === 'ar' ? cat.catAr : cat.catEn}
                  </h2>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    {cat.terms.length} {lang === 'ar' ? 'مصطلح' : 'terms'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.terms.map((term, j) => (
                    <div
                      key={j}
                      className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gold/30 hover:shadow-sm transition-all"
                    >
                      <p className="font-semibold text-navy text-sm">{term.ar}</p>
                      <p className="text-gold text-sm mt-1 font-medium" dir="ltr">{term.en}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
