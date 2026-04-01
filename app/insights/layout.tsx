import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'رؤى وتحليلات | Insights — Dar Al-Khibra',
  description:
    'تحليلات متعمقة وتحديثات قانونية ومالية من خبراء دار الخبرة. In-depth financial and legal insights from Dar Al-Khibra experts.',
  alternates: { canonical: 'https://dar-alkhibra.vercel.app/insights' },
  openGraph: {
    title: 'رؤى وتحليلات | Dar Al-Khibra Insights',
    description: 'تحليلات متعمقة في القانون والمال والأعمال من دار الخبرة.',
    url: 'https://dar-alkhibra.vercel.app/insights',
  },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
