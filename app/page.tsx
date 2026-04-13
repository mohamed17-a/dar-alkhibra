'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StatsBar from '@/components/StatsBar'
import ServiceCard from '@/components/ServiceCard'
import ValuesSection from '@/components/ValuesSection'
import MapEmbed from '@/components/MapEmbed'
import { useLang } from '@/context/LanguageContext'

const heroSlides = [
  '/hero/building-1.jpg',
  '/hero/building-2.jpg',
  '/hero/office-1.jpg',
  '/hero/office-2.jpg',
  '/hero/office-3.jpg',
]

const financialIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)
const legalIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
)
const consultingIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

export default function HomePage() {
  const { t, lang } = useLang()
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Header />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        {/* Slide images */}
        {heroSlides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={src} alt="" fill className="object-cover object-center" priority={i === 0} sizes="100vw" />
          </div>
        ))}

        {/* 135° gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.96) 0%, rgba(20,20,20,0.84) 55%, rgba(20,20,20,0.48) 100%)' }}
        />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

            {/* Primary content */}
            <div className="lg:col-span-3">
              <p className="text-gold/70 text-xs font-medium uppercase tracking-[0.2em] mb-3">
                {lang === 'ar' ? 'مستشاريون ماليون وقانونيون ومراقبو حسابات' : 'Financial · Legal · Tax Consultants & Auditors'}
              </p>
              <p className="text-white/40 text-xs mb-7">
                {t('hero.badge')}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1]">
                {t('hero.title1')}
                <span className="block text-gold mt-2">{t('hero.title2')}</span>
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-navy font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 text-sm"
                >
                  {t('hero.cta1')}
                  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-full text-sm text-white/75 hover:text-white border border-white/20 hover:border-white/40 transition-all"
                >
                  {t('hero.cta2')}
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
                <a href="tel:01002951051" className="flex items-center gap-2 text-white/40 hover:text-gold transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01002951051
                </a>
                <a href="mailto:iselnady@gmail.com" className="flex items-center gap-2 text-white/40 hover:text-gold transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  iselnady@gmail.com
                </a>
              </div>
            </div>

            {/* Glassmorphism stats card */}
            <div className="hidden lg:block lg:col-span-2">
              <div
                className="rounded-3xl p-8 space-y-6"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {[
                  { value: '+25', labelAr: 'سنة خبرة', labelEn: 'Years of Practice' },
                  { value: '+700', labelAr: 'عميل وشركة', labelEn: 'Clients Served' },
                  { value: '2000', labelAr: 'سنة التأسيس', labelEn: 'Year Established' },
                  { value: '3', labelAr: 'مجالات خدمية', labelEn: 'Service Pillars' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between pb-6"
                    style={{ borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none', paddingBottom: i < 3 ? '1.5rem' : '0' }}
                  >
                    <p className="text-white/40 text-sm">{lang === 'ar' ? item.labelAr : item.labelEn}</p>
                    <p className="text-3xl font-bold text-gold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === slide ? 'w-8 h-1.5 bg-lime' : 'w-1.5 h-1.5 hover:opacity-70'
              }`}
              style={{ background: i === slide ? undefined : 'rgba(255,255,255,0.3)' }}
            />
          ))}
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <StatsBar />

      {/* ── Services ──────────────────────────────────────── */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">{t('services.heading')}</h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">{t('services.sub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              href="/services/financial"
              title={t('services.audit.title')}
              description={t('services.audit.desc')}
              icon={financialIcon}
              highlights={
                lang === 'ar'
                  ? ['مراجعة القوائم المالية', 'تقارير للبنوك والمستثمرين', 'تدقيق شركات المساهمة']
                  : ['Financial statement review', 'Reports for banks & investors', 'Joint stock company auditing']
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
              href="/services/financial"
              title={t('services.tax.title')}
              description={t('services.tax.desc')}
              icon={consultingIcon}
              highlights={
                lang === 'ar'
                  ? ['إعداد الإقرارات الضريبية', 'تسوية المنازعات الضريبية', 'التخطيط الضريبي للشركات']
                  : ['Tax return preparation', 'Dispute resolution with authorities', 'Corporate tax planning']
              }
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-lime transition-colors"
            >
              {t('services.all')}
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">{t('why.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{t('why.sub')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚖️', titleKey: 'why.1.title', descKey: 'why.1.desc' },
              { icon: '🔗', titleKey: 'why.2.title', descKey: 'why.2.desc' },
              { icon: '📋', titleKey: 'why.3.title', descKey: 'why.3.desc' },
              { icon: '💡', titleKey: 'why.4.title', descKey: 'why.4.desc' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-lime/30 shadow-sm hover:shadow-xl hover:shadow-lime/10 transition-all duration-300 text-center">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-base font-bold text-navy mb-3">{t(item.titleKey)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <ValuesSection />

      {/* ── Location ──────────────────────────────────────── */}
      <MapEmbed />

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            {lang === 'ar' ? 'هل تحتاج إلى استشارة؟' : 'Ready for Expert Advice?'}
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            {lang === 'ar'
              ? 'فريقنا من الخبراء المحاسبين والمحامين المعتمدين جاهز لمساعدتك'
              : 'Our certified accountants and legal experts are ready to assist you'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-navy font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 text-sm"
            >
              {t('common.contactus')}
            </Link>
            <a
              href="https://wa.me/201002951051"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
