'use client'

import Image from 'next/image'
import Link from 'next/link'

interface PageHeroProps {
  image?: 'building1' | 'building2' | 'law' | 'business' | 'office1' | 'office2' | 'office3'
  keywordAr: string
  keywordEn: string
  badgeAr?: string
  badgeEn?: string
  headingAr: string
  headingEn: string
  subtitleAr?: string
  subtitleEn?: string
  extraAr?: string
  extraEn?: string
  backHref?: string
  backLabelAr?: string
  backLabelEn?: string
  lang: 'ar' | 'en'
}

export default function PageHero({
  image = 'building1',
  keywordAr,
  keywordEn,
  badgeAr,
  badgeEn,
  headingAr,
  headingEn,
  subtitleAr,
  subtitleEn,
  extraAr,
  extraEn,
  backHref,
  backLabelAr,
  backLabelEn,
  lang,
}: PageHeroProps) {
  const imageMap = {
    building1: '/hero/building-1.jpg',
    building2: '/hero/building-2.jpg',
    law: '/hero/hero-law.jpg',
    business: '/hero/hero-business.jpg',
    office1: '/hero/office-1.jpg',
    office2: '/hero/office-2.jpg',
    office3: '/hero/office-3.jpg',
  }
  const src = imageMap[image ?? 'building1']

  return (
    <section className="relative pt-36 pb-20 overflow-hidden min-h-[340px] flex items-end bg-navy">
      {/* Background image */}
      <Image src={src} alt="" fill className="object-cover object-center" priority />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10" style={{ background: 'rgba(10,10,10,0.82)' }} />

      {/* Watermark keyword */}
      <div className="absolute inset-0 z-10 flex items-center overflow-hidden pointer-events-none pe-6 ps-6">
        <p
          className="font-bold leading-none select-none ms-auto"
          style={{ fontSize: 'clamp(5rem, 16vw, 12rem)', color: 'rgba(255,255,255,0.04)' }}
        >
          {lang === 'ar' ? keywordAr : keywordEn}
        </p>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {lang === 'ar' ? backLabelAr : backLabelEn}
          </Link>
        )}
        {(badgeAr || badgeEn) && (
          <p className="text-gold/60 text-xs font-medium uppercase tracking-[0.2em] mb-5">
            {lang === 'ar' ? badgeAr : badgeEn}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
          {lang === 'ar' ? headingAr : headingEn}
        </h1>
        {(subtitleAr || subtitleEn) && (
          <p className="text-white/55 text-xl">
            {lang === 'ar' ? subtitleAr : subtitleEn}
          </p>
        )}
        {(extraAr || extraEn) && (
          <p className="text-gold/50 mt-2 text-sm">
            {lang === 'ar' ? extraAr : extraEn}
          </p>
        )}
      </div>
    </section>
  )
}
