'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '@/context/LanguageContext'

const articles = [
  {
    id: 1,
    categoryAr: 'ضريبي', categoryEn: 'Tax',
    titleAr: 'تعديلات ضريبة القيمة المضافة في مصر لعام 2024: ما يجب أن تعرفه',
    titleEn: 'Egypt VAT Amendments 2024: What Every Business Must Know',
    excerptAr: 'استعراض شامل لآخر التعديلات على قانون ضريبة القيمة المضافة في مصر وتأثيرها على الشركات والمنشآت التجارية، مع توضيح الالتزامات الجديدة والفرص الضريبية المتاحة.',
    excerptEn: 'A comprehensive review of Egypt\'s latest VAT law amendments, their impact on businesses, new compliance obligations, and emerging tax opportunities for the fiscal year.',
    dateAr: 'مارس 2024', dateEn: 'March 2024',
    readTime: '5',
    featured: true,
  },
  {
    id: 2,
    categoryAr: 'قانوني', categoryEn: 'Legal',
    titleAr: 'دليل تأسيس الشركات في مصر: الأنواع والمتطلبات',
    titleEn: 'Company Incorporation in Egypt: Types & Requirements Guide',
    excerptAr: 'كل ما تحتاج معرفته عن أنواع الشركات المتاحة في مصر وإجراءات التأسيس والمستندات المطلوبة وفق أحدث اللوائح.',
    excerptEn: 'Everything you need to know about company types in Egypt, registration procedures, required documents, and latest regulatory updates.',
    dateAr: 'فبراير 2024', dateEn: 'February 2024',
    readTime: '7',
    featured: false,
  },
  {
    id: 3,
    categoryAr: 'استثمار', categoryEn: 'Investment',
    titleAr: 'الاندماج والاستحواذ: الفرص والمخاطر في السوق المصري',
    titleEn: 'M&A in Egypt: Opportunities and Risks in a Growing Market',
    excerptAr: 'تحليل معمق لسوق الاندماج والاستحواذ في مصر، أبرز الصفقات الأخيرة وكيفية تهيئة شركتك لعملية استحواذ ناجحة.',
    excerptEn: 'An in-depth analysis of Egypt\'s M&A market, landmark recent deals, and how to prepare your company for a successful transaction.',
    dateAr: 'يناير 2024', dateEn: 'January 2024',
    readTime: '8',
    featured: false,
  },
  {
    id: 4,
    categoryAr: 'محاسبة', categoryEn: 'Accounting',
    titleAr: 'معايير المحاسبة المصرية: التحديثات الأخيرة وأثرها على القوائم المالية',
    titleEn: 'Egyptian Accounting Standards: Recent Updates & Impact on Financial Statements',
    excerptAr: 'نظرة على أحدث تحديثات معايير المحاسبة المصرية وكيفية تطبيقها بشكل صحيح في القوائم المالية للحفاظ على الامتثال.',
    excerptEn: 'An overview of the latest Egyptian accounting standards updates and how to correctly implement them to maintain full compliance.',
    dateAr: 'يناير 2024', dateEn: 'January 2024',
    readTime: '6',
    featured: false,
  },
  {
    id: 5,
    categoryAr: 'قانوني', categoryEn: 'Legal',
    titleAr: 'الحوكمة المؤسسية: ضرورة استراتيجية للشركات المصرية',
    titleEn: 'Corporate Governance: A Strategic Imperative for Egyptian Companies',
    excerptAr: 'كيف يمكن لتطبيق معايير الحوكمة المؤسسية الجيدة أن يعزز من قيمة الشركة ويقلل المخاطر القانونية ويجذب المستثمرين.',
    excerptEn: 'How strong corporate governance standards enhance company value, reduce legal risk, and attract institutional investors.',
    dateAr: 'ديسمبر 2023', dateEn: 'December 2023',
    readTime: '5',
    featured: false,
  },
  {
    id: 6,
    categoryAr: 'ضريبي', categoryEn: 'Tax',
    titleAr: 'التخطيط الضريبي الفعّال: استراتيجيات قانونية للحد من العبء الضريبي',
    titleEn: 'Effective Tax Planning: Legal Strategies to Reduce Your Tax Burden',
    excerptAr: 'استراتيجيات قانونية للتخطيط الضريبي تساعد الشركات على تحسين التزاماتها الضريبية ضمن الإطار القانوني المتاح.',
    excerptEn: 'Legal tax planning strategies that help companies optimize their tax obligations within the applicable regulatory framework.',
    dateAr: 'نوفمبر 2023', dateEn: 'November 2023',
    readTime: '6',
    featured: false,
  },
]

const ALL = 'all'
const categories = [
  { key: ALL, labelAr: 'الكل', labelEn: 'All' },
  { key: 'Tax', labelAr: 'ضريبي', labelEn: 'Tax' },
  { key: 'Legal', labelAr: 'قانوني', labelEn: 'Legal' },
  { key: 'Accounting', labelAr: 'محاسبة', labelEn: 'Accounting' },
  { key: 'Investment', labelAr: 'استثمار', labelEn: 'Investment' },
]

export default function InsightsPage() {
  const { lang, t } = useLang()
  const [activeCategory, setActiveCategory] = useState(ALL)

  const featured = articles.find((a) => a.featured)!
  const filtered = articles.filter((a) => {
    if (activeCategory === ALL) return true
    return a.categoryEn === activeCategory
  })
  const gridArticles = filtered.filter((a) => !a.featured || activeCategory !== ALL)

  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="bg-navy pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(5,5,5,1) 0%, rgba(20,20,20,0.85) 100%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold/60 text-xs font-medium uppercase tracking-[0.2em] mb-5">
            {t('insights.featured')}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">{t('insights.heading')}</h1>
          <p className="text-white/50 text-lg">{t('insights.sub')}</p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="bg-cream sticky top-16 z-30" style={{ borderBottom: '1px solid rgba(198,198,207,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.key
                    ? 'bg-navy text-white'
                    : 'text-navy/50 hover:text-navy'
                }`}
              >
                {lang === 'ar' ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {activeCategory === ALL && (
        <section className="py-16 bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold/70 text-xs font-medium uppercase tracking-[0.2em] mb-6">
              {t('insights.featured')}
            </p>
            <div className="bg-white rounded-md shadow-ambient overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Content */}
                <div className="lg:col-span-3 p-10 flex flex-col justify-between">
                  <div>
                    <span
                      className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-gold px-3 py-1 rounded-md mb-6"
                      style={{ background: 'rgba(201,168,76,0.1)' }}
                    >
                      {lang === 'ar' ? featured.categoryAr : featured.categoryEn}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 leading-tight">
                      {lang === 'ar' ? featured.titleAr : featured.titleEn}
                    </h2>
                    <p className="text-navy/55 text-sm leading-relaxed">
                      {lang === 'ar' ? featured.excerptAr : featured.excerptEn}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: '1px solid rgba(198,198,207,0.15)' }}>
                    <div className="flex items-center gap-3 text-xs text-navy/35">
                      <span>{lang === 'ar' ? featured.dateAr : featured.dateEn}</span>
                      <span>·</span>
                      <span>{featured.readTime} {lang === 'ar' ? 'دقائق للقراءة' : 'min read'}</span>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors"
                    >
                      {t('insights.read')}
                      <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Decorative panel */}
                <div
                  className="hidden lg:flex lg:col-span-2 items-center justify-center p-10"
                  style={{ background: 'rgba(195,212,0,0.04)' }}
                >
                  <div className="text-center">
                    <p className="text-[8rem] font-bold leading-none" style={{ color: 'rgba(195,212,0,0.10)' }}>
                      {lang === 'ar' ? '١' : '01'}
                    </p>
                    <div className="w-12 h-0.5 bg-lime mx-auto mt-2" />
                    <p className="text-navy/25 text-xs font-medium uppercase tracking-[0.2em] mt-3">
                      {lang === 'ar' ? 'المقال المميز' : 'Featured'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <p className="text-gold/70 text-xs font-medium uppercase tracking-[0.2em]">
              {activeCategory === ALL ? t('insights.latest') : (lang === 'ar' ? categories.find(c => c.key === activeCategory)?.labelAr : activeCategory)}
            </p>
            <p className="text-navy/35 text-xs">
              {gridArticles.length} {lang === 'ar' ? 'مقال' : 'articles'}
            </p>
          </div>

          {gridArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-navy/40 text-sm">
                {lang === 'ar' ? 'لا توجد مقالات في هذه الفئة حالياً' : 'No articles in this category yet'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridArticles.map((article) => (
                <div key={article.id} className="group bg-white rounded-md p-8 shadow-ambient hover:shadow-[0_10px_40px_rgba(0,0,0,0.10)] transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-gold px-3 py-1 rounded-md"
                      style={{ background: 'rgba(201,168,76,0.1)' }}
                    >
                      {lang === 'ar' ? article.categoryAr : article.categoryEn}
                    </span>
                    <span className="text-xs text-navy/30">
                      {article.readTime} {lang === 'ar' ? 'د' : 'min'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-navy mb-3 group-hover:text-navy/75 transition-colors leading-snug flex-grow">
                    {lang === 'ar' ? article.titleAr : article.titleEn}
                  </h3>

                  <p className="text-navy/45 text-xs leading-relaxed mb-6">
                    {(lang === 'ar' ? article.excerptAr : article.excerptEn).slice(0, 120)}...
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-5" style={{ borderTop: '1px solid rgba(198,198,207,0.15)' }}>
                    <span className="text-xs text-navy/30">
                      {lang === 'ar' ? article.dateAr : article.dateEn}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-navy/50 hover:text-navy transition-colors"
                    >
                      {t('insights.read')}
                      <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(212,239,84,0.06) 0%, transparent 60%)' }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-2xl font-bold text-white mb-4">
            {lang === 'ar' ? 'هل لديك استفسار قانوني أو مالي؟' : 'Have a Legal or Financial Question?'}
          </h2>
          <p className="text-white/45 mb-8 text-sm">
            {lang === 'ar'
              ? 'تواصل مع خبرائنا للحصول على استشارة مهنية متخصصة'
              : 'Reach out to our experts for professional, specialized consultation'}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-navy font-bold px-7 py-3.5 rounded-md text-sm transition-colors"
          >
            {lang === 'ar' ? 'احجز استشارة' : 'Book a Consultation'}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
