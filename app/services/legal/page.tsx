'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useLang } from '@/context/LanguageContext'

export default function LegalPage() {
  const { t, lang } = useLang()

  const companyTypes = [
    { key: 'type1', icon: '🏢' },
    { key: 'type2', icon: '🤝' },
    { key: 'type3', icon: '👥' },
    { key: 'type4', icon: '📊' },
    { key: 'type5', icon: '👤' },
  ]

  const otherItems = JSON.parse(t('legal.other.items')) as string[]

  return (
    <>
      <Header />

      <PageHero
        image="law"
        keywordAr="قانون"
        keywordEn="Law"
        headingAr={t('legal.heading')}
        headingEn={t('legal.heading')}
        subtitleAr={t('legal.sub')}
        subtitleEn={t('legal.sub')}
        backHref="/services"
        backLabelAr={t('services.all')}
        backLabelEn={t('services.all')}
        lang={lang}
      />

      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Company Incorporation */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy">{t('legal.incorporation.title')}</h2>
                <p className="text-gray-500 text-sm mt-1">{t('legal.incorporation.desc')}</p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-8" />

            <h3 className="text-lg font-semibold text-navy mb-6">{t('legal.types.title')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {companyTypes.map(({ key, icon }) => (
                <div
                  key={key}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-gold/30 hover:shadow-md transition-all group"
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <h4 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {t(`legal.${key}.title`)}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{t(`legal.${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Legal Services */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-navy">{t('legal.other.title')}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                  <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-navy rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {lang === 'ar' ? 'هل تريد تأسيس شركتك؟' : 'Ready to Incorporate Your Company?'}
            </h2>
            <p className="text-white/60 mb-8">
              {lang === 'ar'
                ? 'فريقنا القانوني جاهز لإرشادك في كل خطوة'
                : 'Our legal team is ready to guide you through every step'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-navy font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
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
