import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تواصل معنا | Contact Dar Al-Khibra',
  description:
    'تواصل مع دار الخبرة للاستشارات المالية والقانونية — مدينة نصر، القاهرة. هاتف: 01002951051. Contact Dar Al-Khibra in Nasr City, Cairo for financial and legal consulting.',
  alternates: { canonical: 'https://dar-alkhibra.vercel.app/contact' },
  openGraph: {
    title: 'تواصل معنا | Dar Al-Khibra',
    description: 'تواصل مع فريق دار الخبرة في مدينة نصر، القاهرة.',
    url: 'https://dar-alkhibra.vercel.app/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
