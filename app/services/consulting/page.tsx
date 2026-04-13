'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useLang } from '@/context/LanguageContext'

function ConsultBlock({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
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

export default function ConsultingPage() {
  const { t, lang } = useLang()

  const blocks = [
    {
      key: 'feasibility',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      key: 'ma',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
    {
      key: 'tax',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
        </svg>
      ),
    },
  ]

  const governancePrinciples = JSON.parse(t('consulting.governance.principles')) as { title: string; desc: string }[]
  const governanceBenefits = JSON.parse(t('consulting.governance.benefits')) as string[]
  const maSteps = JSON.parse(t('consulting.ma.steps')) as { num: string; title: string; desc: string }[]

  return (
    <>
      <Header />

      <PageHero
        image="office3"
        keywordAr="استشارة"
        keywordEn="Consulting"
        headingAr={t('consulting.heading')}
        headingEn={t('consulting.heading')}
        subtitleAr={t('consulting.sub')}
        subtitleEn={t('consulting.sub')}
        backHref="/services"
        backLabelAr={t('services.all')}
        backLabelEn={t('services.all')}
        lang={lang}
      />

      {/* Main Service Blocks */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blocks.map(({ key, icon }) => {
              const items = JSON.parse(t(`consulting.${key}.items`)) as string[]
              return (
                <ConsultBlock
                  key={key}
                  title={t(`consulting.${key}.title`)}
                  items={items}
                  icon={icon}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* ── M&A Process Steps ─────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">{t('consulting.ma.process.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('consulting.ma.process.sub')}</p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 inset-x-16 h-0.5 bg-gold/20" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {maSteps.map((step, i) => (
                <div key={i} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gold/30 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-navy group-hover:bg-gold rounded-xl flex items-center justify-center text-white group-hover:text-navy font-bold text-sm transition-colors shrink-0">
                      {step.num}
                    </span>
                    <h3 className="font-bold text-navy text-base leading-snug">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Corporate Governance ──────────────────────────── */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {t('consulting.governance.title')}
            </div>
            <h2 className="text-3xl font-bold text-navy mb-3">{t('consulting.governance.what')}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('consulting.governance.def')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Principles */}
            <div className="bg-navy rounded-3xl p-8">
              <h3 className="text-gold font-bold text-lg mb-6">{t('consulting.governance.principles.title')}</h3>
              <div className="space-y-4">
                {governancePrinciples.map((p, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{p.title}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-navy font-bold text-lg mb-6">{t('consulting.governance.benefits.title')}</h3>
              <ul className="space-y-4">
                {governanceBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {lang === 'ar' ? 'هل تحتاج إلى استشارة متكاملة؟' : 'Need Integrated Consulting?'}
          </h2>
          <p className="text-white/60 mb-8">
            {lang === 'ar' ? 'خبراؤنا الماليون والقانونيون في خدمتك' : 'Our financial and legal experts are at your service'}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-navy font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
          >
            {t('common.contactus')}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
