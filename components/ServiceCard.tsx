'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'

interface ServiceCardProps {
  href: string
  title: string
  description: string
  icon: React.ReactNode
  highlights?: string[]
}

export default function ServiceCard({ href, title, description, icon, highlights }: ServiceCardProps) {
  const { t } = useLang()

  return (
    <div className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-xl hover:shadow-navy/10 transition-all duration-300 flex flex-col">
      <div className="w-14 h-14 bg-navy/5 group-hover:bg-navy rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
        <div className="text-navy group-hover:text-gold transition-colors duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-navy">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">{description}</p>

      {highlights && highlights.length > 0 && (
        <ul className="space-y-2 mb-6">
          {highlights.slice(0, 3).map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-navy transition-colors group/link mt-auto"
      >
        {t('services.more')}
        <svg
          className="w-4 h-4 transition-transform group-hover/link:translate-x-1 rtl:rotate-180 rtl:group-hover/link:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
