'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StatsBar from '@/components/StatsBar'
import ServiceCard from '@/components/ServiceCard'
import ValuesSection from '@/components/ValuesSection'
import MapEmbed from '@/components/MapEmbed'
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

export default function HomePage() {
  const { t, lang } = useLang()

  return (
    <>
      <Header />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201,168,76,0.4) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(201,168,76,0.2) 0%, transparent 40%),
                              radial-gradient(circle at 70% 80%, rgba(209,236,81,0.15) 0%, transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t('hero.badge')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero.title1')}
              <span className="block text-gold mt-2">{t('hero.title2')}</span>
            </h1>

            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-lime text-navy font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-lime/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                {t('hero.cta1')}
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-lime/10 border border-white/20 hover:border-lime/50 text-white hover:text-lime font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
              >
                {t('hero.cta2')}
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-14 pt-10 border-t border-white/10">
              <a href="tel:01002951051" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                01002951051
              </a>
              <a href="mailto:iselnady@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                iselnady@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <StatsBar />

      {/* ── Services ──────────────────────────────────────── */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('nav.services')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">{t('services.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{t('services.sub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              href="/services/financial"
              title={t('services.financial.title')}
              description={t('services.financial.desc')}
              icon={financialIcon}
              highlights={lang === 'ar'
                ? ['إمساك الدفاتر المحاسبية', 'التخطيط الضريبي', 'تقييم الشركات والأصول']
                : ['Bookkeeping & accounting', 'Tax planning & compliance', 'Company & asset valuation']}
            />
            <ServiceCard
              href="/services/legal"
              title={t('services.legal.title')}
              description={t('services.legal.desc')}
              icon={legalIcon}
              highlights={lang === 'ar'
                ? ['تأسيس الشركات بجميع أشكالها', 'صياغة العقود التجارية', 'التحكيم وتسوية المنازعات']
                : ['Company incorporation', 'Contract drafting', 'Arbitration & dispute resolution']}
            />
            <ServiceCard
              href="/services/consulting"
              title={t('services.consulting.title')}
              description={t('services.consulting.desc')}
              icon={consultingIcon}
              highlights={lang === 'ar'
                ? ['دراسات الجدوى المالية والقانونية', 'استشارات الاندماج والاستحواذ', 'هيكلة الصفقات الضريبية']
                : ['Financial & legal feasibility studies', 'M&A advisory', 'Tax deal structuring']}
            />
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <ValuesSection />

      {/* ── Location ──────────────────────────────────────── */}
      <MapEmbed />

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* lime glow blob */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(209,236,81,0.12) 0%, transparent 65%)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            {lang === 'ar' ? 'هل تحتاج إلى استشارة؟' : 'Need a Consultation?'}
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            {lang === 'ar'
              ? 'فريقنا من الخبراء المحاسبين والمحامين المعتمدين جاهز لمساعدتك'
              : 'Our team of certified accountants and legal experts is ready to assist you'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-navy font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-lime/30 hover:glow-lime"
            >
              {t('common.contactus')}
            </Link>
            <a
              href="https://wa.me/201002951051"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
