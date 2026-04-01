'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'

export default function Header() {
  const { lang, toggle, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const desktopServicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const serviceLinks = [
    { href: '/services/financial', label: t('nav.services.audit') },
    { href: '/services/consulting', label: t('nav.services.consulting') },
    { href: '/contact', label: t('nav.services.private') },
    { href: '/services/financial', label: t('nav.services.advisory') },
    { href: '/services/legal', label: t('nav.services.legal') },
    { href: '/services/financial', label: t('nav.services.tax') },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-[0_4px_40px_rgba(0,5,32,0.25)]' : ''
      }`}
      style={{
        background: scrolled ? 'rgba(26, 58, 107, 0.95)' : 'rgba(26, 58, 107, 0.80)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 relative">
              <Image src="/logo.png" alt="دار الخبرة" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-base leading-tight">
                {lang === 'ar' ? 'دار الخبرة' : 'Dar Al-Khibra'}
              </p>
              <p className="text-gold text-xs leading-tight opacity-80">
                {lang === 'ar' ? 'المالية • القانونية • الضريبية' : 'Financial • Legal • Tax'}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link href="/" className="text-white/70 hover:text-white px-4 py-2 text-base transition-colors">
              {t('nav.home')}
            </Link>

            {/* Services dropdown */}
            <div ref={desktopServicesRef} className="relative">
              <button
                onClick={() => setDesktopServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-white/70 hover:text-white px-4 py-2 text-base transition-colors"
              >
                {t('nav.services')}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${desktopServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {desktopServicesOpen && (
                <div
                  className="absolute top-full mt-2 w-60 rounded-md overflow-hidden"
                  style={{ background: '#fbfbe2', boxShadow: '0 10px 40px rgba(0,5,32,0.14)' }}
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDesktopServicesOpen(false)}
                      className="block px-5 py-3 text-sm text-navy/70 hover:text-navy hover:bg-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-white/70 hover:text-white px-4 py-2 text-base transition-colors">
              {t('nav.about')}
            </Link>
            <Link
              href="/contact"
              className="ms-3 bg-gold hover:bg-gold-light text-navy text-sm font-bold px-5 py-2 rounded-md transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Right side: lang toggle + hamburger */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center rounded-md overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => lang !== 'ar' && toggle()}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${
                  lang === 'ar' ? 'bg-gold text-navy' : 'text-white/60 hover:text-white'
                }`}
              >
                <span className="hidden sm:inline">العربية</span>
                <span className="sm:hidden">ع</span>
              </button>
              <button
                onClick={() => lang !== 'en' && toggle()}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${
                  lang === 'en' ? 'bg-gold text-navy' : 'text-white/60 hover:text-white'
                }`}
              >
                <span className="hidden sm:inline">English</span>
                <span className="sm:hidden">EN</span>
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden text-white/80 hover:text-white p-1.5"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="px-4 py-4 space-y-0.5"
          style={{
            background: 'rgba(0, 5, 32, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-white/70 hover:text-white py-2.5 text-sm"
          >
            {t('nav.home')}
          </Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between text-white/70 hover:text-white py-2.5 text-sm"
            >
              {t('nav.services')}
              <svg
                className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="ps-4 pb-1 space-y-0.5">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/50 hover:text-gold py-2 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white/70 hover:text-white py-2.5 text-sm">
            {t('nav.about')}
          </Link>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-gold text-navy font-bold py-2.5 px-4 rounded-md text-sm text-center"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
