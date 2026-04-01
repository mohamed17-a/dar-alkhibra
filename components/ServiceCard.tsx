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
    <div className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-lime/30 shadow-sm hover:shadow-xl hover:shadow-lime/10 transition-all duration-300 flex flex-col h-full">
      <div className="w-14 h-14 bg-navy/5 group-hover:bg-navy rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
        <div className="text-navy group-hover:text-lime transition-colors duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-bold text-navy mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">{description}</p>

      {highlights && highlights.length > 0 && (
        <ul className="space-y-2.5 mb-6">
          {highlights.slice(0, 3).map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-lime mt-1.5 shrink-0" />
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
          className="w-4 h-4 rtl:rotate-180 transition-transform group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1"
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
