'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '@/context/LanguageContext'

function ServiceBlock({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center text-gold shrink-0">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-navy">{title}</h2>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
            <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function FinancialPage() {
  const { t, lang } = useLang()

  const blocks = [
    {
      key: 'accounting',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      key: 'tax',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
        </svg>
      ),
    },
    {
      key: 'audit',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      key: 'valuation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <Header />

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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-sm mb-8 transition-colors rtl:flex-row-reverse">
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('services.all')}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">{t('financial.heading')}</h1>
          <p className="text-white/70 text-xl leading-relaxed">{t('financial.sub')}</p>
        </div>
      </section>

      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blocks.map(({ key, icon }) => {
              const items = JSON.parse(t(`financial.${key}.items`)) as string[]
              return (
                <ServiceBlock
                  key={key}
                  title={t(`financial.${key}.title`)}
                  items={items}
                  icon={icon}
                />
              )
            })}
          </div>

          <div className="mt-14 bg-navy rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {lang === 'ar' ? 'هل تحتاج إلى استشارة مالية؟' : 'Need Financial Advice?'}
            </h2>
            <p className="text-white/60 mb-8">
              {lang === 'ar'
                ? 'فريقنا من المحاسبين المعتمدين جاهز لمساعدتك'
                : 'Our team of certified accountants is ready to help'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
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
