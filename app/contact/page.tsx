'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MapEmbed from '@/components/MapEmbed'
import PageHero from '@/components/PageHero'
import { useLang } from '@/context/LanguageContext'

export default function ContactPage() {
  const { t, lang } = useLang()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactItems = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('contact.address.label'),
      value: t('contact.address.value'),
      href: 'https://maps.google.com/?q=30.0564399,31.3468053',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t('contact.phone.label'),
      value: '01002951051',
      href: 'tel:01002951051',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t('contact.email.label'),
      value: 'iselnady@gmail.com',
      href: 'mailto:iselnady@gmail.com',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: t('contact.hours.label'),
      value: t('contact.hours.value'),
      href: null,
    },
  ]

  const serviceOptions = lang === 'ar'
    ? ['الخدمات المحاسبية', 'الخدمات الضريبية', 'التدقيق المالي', 'تقييم الشركات', 'تأسيس الشركات', 'الخدمات القانونية', 'الاستشارات المتكاملة', 'دراسات الجدوى', 'الاندماج والاستحواذ']
    : ['Accounting Services', 'Taxation Services', 'Financial Audit', 'Company Valuation', 'Company Incorporation', 'Legal Services', 'Integrated Consulting', 'Feasibility Studies', 'M&A Advisory']

  return (
    <>
      <Header />

      <PageHero
        image="office2"
        keywordAr="تواصل"
        keywordEn="Contact"
        headingAr={t('contact.heading')}
        headingEn={t('contact.heading')}
        subtitleAr={t('contact.sub')}
        subtitleEn={t('contact.sub')}
        lang={lang}
      />

      {/* Contact Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-navy rounded-md p-8 text-white">
                <p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-6">
                  {lang === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                </p>
                <ul className="space-y-5">
                  {contactItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center text-gold shrink-0 mt-0.5" style={{ background: 'rgba(201,168,76,0.12)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/35 text-xs mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white/80 hover:text-gold transition-colors text-sm leading-relaxed">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white/80 text-sm leading-relaxed">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201002951051"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-md transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('contact.form.whatsapp')}
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-md p-12 shadow-ambient text-center h-full flex flex-col items-center justify-center gap-4 min-h-[400px]">
                  <div className="w-14 h-14 bg-green-50 rounded-md flex items-center justify-center mx-auto">
                    <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">
                    {lang === 'ar' ? 'تم إرسال رسالتك!' : 'Message Sent!'}
                  </h3>
                  <p className="text-navy/45 text-sm">
                    {lang === 'ar' ? 'سيتواصل معك فريقنا في أقرب وقت ممكن' : 'Our team will get back to you as soon as possible'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-md p-8 shadow-ambient space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-navy/60 uppercase tracking-[0.1em] mb-2">{t('contact.form.name')}</label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-md px-4 py-3 text-sm focus:outline-none transition-colors text-navy"
                        style={{ background: '#f5f5dc', border: 'none' }}
                        placeholder={lang === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-navy/60 uppercase tracking-[0.1em] mb-2">{t('contact.form.phone')}</label>
                      <input
                        type="tel"
                        className="w-full rounded-md px-4 py-3 text-sm focus:outline-none transition-colors text-navy"
                        style={{ background: '#f5f5dc', border: 'none' }}
                        placeholder="01xxxxxxxxx"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-navy/60 uppercase tracking-[0.1em] mb-2">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      className="w-full rounded-md px-4 py-3 text-sm focus:outline-none transition-colors text-navy"
                      style={{ background: '#f5f5dc', border: 'none' }}
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-navy/60 uppercase tracking-[0.1em] mb-2">{t('contact.form.service')}</label>
                    <select
                      className="w-full rounded-md px-4 py-3 text-sm focus:outline-none transition-colors text-navy"
                      style={{ background: '#f5f5dc', border: 'none' }}
                    >
                      <option value="">{lang === 'ar' ? '— اختر الخدمة —' : '— Select a service —'}</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-navy/60 uppercase tracking-[0.1em] mb-2">{t('contact.form.message')}</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full rounded-md px-4 py-3 text-sm focus:outline-none transition-colors text-navy resize-none"
                      style={{ background: '#f5f5dc', border: 'none' }}
                      placeholder={lang === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy-light text-white font-bold py-4 px-8 rounded-md transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    {t('contact.form.submit')}
                    <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <MapEmbed />
      <Footer />
    </>
  )
}
