'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import { useLang } from '@/context/LanguageContext'

const financialIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)
const legalIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
)
const consultingIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

export default function ServicesPage() {
  const { t, lang } = useLang()

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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">{t('services.heading')}</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">{t('services.sub')}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              href="/services/financial"
              title={t('services.financial.title')}
              description={t('services.financial.desc')}
              icon={financialIcon}
              highlights={
                lang === 'ar'
                  ? ['إمساك الدفاتر المحاسبية', 'التخطيط الضريبي', 'تقييم الشركات والأصول']
                  : ['Bookkeeping & accounting', 'Tax planning & compliance', 'Company & asset valuation']
              }
            />
            <ServiceCard
              href="/services/legal"
              title={t('services.legal.title')}
              description={t('services.legal.desc')}
              icon={legalIcon}
              highlights={
                lang === 'ar'
                  ? ['تأسيس الشركات بجميع أشكالها', 'صياغة العقود التجارية', 'التحكيم وتسوية المنازعات']
                  : ['Company incorporation', 'Contract drafting', 'Arbitration & dispute resolution']
              }
            />
            <ServiceCard
              href="/services/consulting"
              title={t('services.consulting.title')}
              description={t('services.consulting.desc')}
              icon={consultingIcon}
              highlights={
                lang === 'ar'
                  ? ['دراسات الجدوى المالية والقانونية', 'استشارات الاندماج والاستحواذ', 'هيكلة الصفقات الضريبية']
                  : ['Financial & legal feasibility studies', 'M&A advisory', 'Tax deal structuring']
              }
            />
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-navy rounded-3xl p-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              {lang === 'ar' ? 'هل أنت بحاجة إلى خدمة محددة؟' : 'Need a specific service?'}
            </h2>
            <p className="text-white/60 mb-8">
              {lang === 'ar'
                ? 'تواصل معنا وسيساعدك فريقنا في تحديد الخدمة الأنسب لاحتياجاتك'
                : 'Contact us and our team will help identify the right service for your needs'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              {t('common.contactus')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
