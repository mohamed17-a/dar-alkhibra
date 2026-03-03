import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'خدماتنا | Our Services',
  description:
    'خدمات دار الخبرة: محاسبة وضرائب وتدقيق مالي وتقييم شركات وخدمات قانونية واستشارات متكاملة ودراسات جدوى. Dar Al-Khibra services: accounting, tax, audit, valuation, legal, and consulting.',
  alternates: { canonical: 'https://dar-alkhibra.vercel.app/services' },
  openGraph: {
    title: 'خدماتنا | Dar Al-Khibra',
    description: 'خدمات مالية وقانونية متكاملة — محاسبة، ضرائب، تدقيق، استشارات قانونية.',
    url: 'https://dar-alkhibra.vercel.app/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
