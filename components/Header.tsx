'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'

export default function Header() {
  const { lang, toggle, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const serviceLinks = [
    { href: '/services/financial', label: t('nav.services.financial') },
    { href: '/services/legal', label: t('nav.services.legal') },
    { href: '/services/consulting', label: t('nav.services.consulting') },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy shadow-lg shadow-navy/20'
          : 'bg-navy/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-14 h-14 relative">
              <Image
                src="/logo.png"
                alt="دار الخبرة"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-base leading-tight">
                {lang === 'ar' ? 'دار الخبرة' : 'Dar Al-Khibra'}
              </p>
              <p className="text-gold text-xs leading-tight">
                {lang === 'ar' ? 'للاستشارات المالية والقانونية' : 'Financial & Legal Consulting'}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="text-white/90 hover:text-gold px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
            >
              {t('nav.home')}
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/90 hover:text-gold px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5">
                {t('nav.services')}
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div
                  className={`absolute top-full mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 ${
                    lang === 'ar' ? 'right-0' : 'left-0'
                  }`}
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-navy hover:bg-cream hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/services"
                      className="block px-4 py-3 text-sm font-semibold text-gold hover:bg-cream transition-colors"
                    >
                      {t('services.all')} →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-white/90 hover:text-gold px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/glossary"
              className="text-white/90 hover:text-gold px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
            >
              {lang === 'ar' ? 'المصطلحات' : 'Glossary'}
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-gold px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Right side: Language toggle + mobile menu */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 border border-white/20 rounded-full p-1">
              <button
                onClick={() => lang !== 'ar' && toggle()}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  lang === 'ar'
                    ? 'bg-gold text-navy shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => lang !== 'en' && toggle()}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-gold text-navy shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                English
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10 px-4 py-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-white/90 hover:text-gold py-3 text-base font-medium border-b border-white/10"
          >
            {t('nav.home')}
          </Link>

          <div className="border-b border-white/10">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-white/90 hover:text-gold py-3 text-base font-medium"
            >
              {t('nav.services')}
              <svg
                className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pb-2 ps-4">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/70 hover:text-gold py-2 text-sm"
                  >
                    — {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block text-white/90 hover:text-gold py-3 text-base font-medium border-b border-white/10"
          >
            {t('nav.about')}
          </Link>
          <Link
            href="/glossary"
            onClick={() => setMobileOpen(false)}
            className="block text-white/90 hover:text-gold py-3 text-base font-medium border-b border-white/10"
          >
            {lang === 'ar' ? 'المصطلحات' : 'Glossary'}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-white/90 hover:text-gold py-3 text-base font-medium"
          >
            {t('nav.contact')}
          </Link>
        </div>
      )}
    </header>
  )
}
