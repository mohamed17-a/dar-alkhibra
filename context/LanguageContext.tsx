'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from '@/lib/translations'

export type Lang = 'ar' | 'en'

interface LanguageContextType {
  lang: Lang
  toggle: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ar',
  toggle: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang
    if (saved === 'ar' || saved === 'en') setLang(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggle = useCallback(() => {
    setLang((l) => (l === 'ar' ? 'en' : 'ar'))
  }, [])

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] ?? key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
