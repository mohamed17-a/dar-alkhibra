'use client'

import { useLang } from '@/context/LanguageContext'

export default function MapEmbed() {
  const { t } = useLang()

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy mb-3">{t('contact.location.heading')}</h2>
          <p className="text-gray-600">{t('contact.address.value')}</p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-96">
          <iframe
            src="https://maps.google.com/maps?q=30.0564399,31.3468053&z=18&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dar Al-Khibra Location"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:01002951051" className="hover:text-navy transition-colors">01002951051</a>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:iselnady@gmail.com" className="hover:text-navy transition-colors">iselnady@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}
