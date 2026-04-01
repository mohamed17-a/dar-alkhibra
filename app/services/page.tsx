'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useLang } from '@/context/LanguageContext'

const auditIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
)
const consultingIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)
const privateIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)
const advisoryIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)
const legalIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
)
const taxIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
  </svg>
)

export default function ServicesPage() {
  const { t, lang } = useLang()

  const services = [
    {
      href: '/services/financial',
      title: t('services.audit.title'),
      desc: t('services.audit.desc'),
      icon: auditIcon,
      highlights: lang === 'ar'
        ? ['مراجعة القوائم المالية', 'تقارير البنوك والمستثمرين', 'تدقيق شركات المساهمة']
        : ['Financial statement review', 'Reports for banks & investors', 'Joint stock company auditing'],
    },
    {
      href: '/services/consulting',
      title: t('services.consulting.title'),
      desc: t('services.consulting.desc'),
      icon: consultingIcon,
      highlights: lang === 'ar'
        ? ['دراسات الجدوى المالية', 'استشارات الاندماج والاستحواذ', 'حوكمة الشركات']
        : ['Feasibility studies', 'M&A advisory', 'Corporate governance'],
    },
    {
      href: '/contact',
      title: t('services.private.title'),
      desc: t('services.private.desc'),
      icon: privateIcon,
      highlights: lang === 'ar'
        ? ['إدارة الأصول الشخصية', 'تخطيط التركات والميراث', 'الاستشارات الضريبية الشخصية']
        : ['Personal asset management', 'Estate & succession planning', 'Personal tax advisory'],
    },
    {
      href: '/services/financial',
      title: t('services.advisory.title'),
      desc: t('services.advisory.desc'),
      icon: advisoryIcon,
      highlights: lang === 'ar'
        ? ['تقييم الشركات والأصول', 'دراسات الجدوى الاستثمارية', 'التخطيط المالي الاستراتيجي']
        : ['Company & asset valuation', 'Investment feasibility studies', 'Strategic financial planning'],
    },
    {
      href: '/services/legal',
      title: t('services.legal.title'),
      desc: t('services.legal.desc'),
      icon: legalIcon,
      highlights: lang === 'ar'
        ? ['تأسيس الشركات بجميع أشكالها', 'صياغة العقود التجارية', 'التحكيم وتسوية المنازعات']
        : ['Company incorporation', 'Contract drafting', 'Arbitration & dispute resolution'],
    },
    {
      href: '/services/financial',
      title: t('services.tax.title'),
      desc: t('services.tax.desc'),
      icon: taxIcon,
      highlights: lang === 'ar'
        ? ['إعداد الإقرارات الضريبية', 'تسوية المنازعات الضريبية', 'التخطيط الضريبي للشركات']
        : ['Tax return preparation', 'Dispute resolution with tax authorities', 'Corporate tax planning'],
    },
  ]

  return (
    <>
      <Header />

      <PageHero
        image="building2"
        keywordAr="خدمات"
        keywordEn="Services"
        badgeAr={t('nav.services')}
        badgeEn={t('nav.services')}
        headingAr={t('services.heading')}
        headingEn={t('services.heading')}
        subtitleAr={t('services.sub')}
        subtitleEn={t('services.sub')}
        lang={lang}
      />

      {/* Services Grid */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-lime/30 shadow-sm hover:shadow-xl hover:shadow-lime/10 transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 bg-navy/5 group-hover:bg-navy rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <div className="text-navy group-hover:text-lime transition-colors">{svc.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">{svc.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {svc.highlights.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={svc.href} className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-navy transition-colors mt-auto">
                  {t('services.more')}
                  <svg className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-navy rounded-3xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {lang === 'ar' ? 'هل أنت بحاجة إلى خدمة محددة؟' : 'Need a specific service?'}
            </h2>
            <p className="text-white/60 mb-8 text-sm">
              {lang === 'ar'
                ? 'تواصل معنا وسيساعدك فريقنا في تحديد الخدمة الأنسب لاحتياجاتك'
                : 'Contact us and our team will help identify the right service for your needs'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 text-sm"
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
