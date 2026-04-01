import type { Metadata } from 'next'
import { Cairo, Inter } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://dar-alkhibra.vercel.app'),
  title: {
    default: 'دار الخبرة للاستشارات المالية والقانونية | Dar Al-Khibra',
    template: '%s | دار الخبرة',
  },
  description:
    'دار الخبرة للاستشارات المالية والقانونية — شركة مساهمة مصرية متخصصة في المحاسبة والمراجعة والضرائب والاستشارات القانونية وتأسيس الشركات منذ عام 2000. Dar Al-Khibra: Egypt\'s trusted partner for accounting, tax, legal, and business consulting.',
  keywords: [
    'استشارات مالية', 'استشارات قانونية', 'محاسبة', 'مراجعة', 'ضرائب',
    'تأسيس شركات', 'مدينة نصر', 'القاهرة', 'دار الخبرة',
    'Dar Al-Khibra', 'financial consulting Egypt', 'legal consulting Cairo',
    'accounting firm Egypt', 'tax advisory Egypt', 'company incorporation Egypt',
    'Nasr City accountant', 'auditing Egypt',
  ],
  authors: [{ name: 'Dar Al-Khibra', url: 'https://dar-alkhibra.vercel.app' }],
  creator: 'Dar Al-Khibra for Financial and Legal Consultancy',
  publisher: 'Dar Al-Khibra for Financial and Legal Consultancy',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://dar-alkhibra.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: 'en_US',
    url: 'https://dar-alkhibra.vercel.app',
    siteName: 'دار الخبرة | Dar Al-Khibra',
    title: 'دار الخبرة للاستشارات المالية والقانونية | Dar Al-Khibra',
    description:
      'شركة مصرية رائدة في الاستشارات المالية والقانونية منذ 2000 — محاسبة، ضرائب، مراجعة، تأسيس شركات، وخدمات قانونية متكاملة.',
    images: [{ url: '/logo.png', width: 400, height: 500, alt: 'دار الخبرة للاستشارات المالية والقانونية' }],
  },
  twitter: {
    card: 'summary',
    title: 'دار الخبرة للاستشارات المالية والقانونية | Dar Al-Khibra',
    description: 'شركة مصرية رائدة في الاستشارات المالية والقانونية منذ 2000.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'دار الخبرة للاستشارات المالية والقانونية',
  alternateName: 'Dar Al-Khibra for Financial and Legal Consultancy',
  url: 'https://dar-alkhibra.vercel.app',
  logo: 'https://dar-alkhibra.vercel.app/logo.png',
  image: 'https://dar-alkhibra.vercel.app/logo.png',
  foundingDate: '2000',
  description:
    'Egyptian joint stock company specializing in accounting, auditing, taxation, legal consulting, and company incorporation since 2000.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27 Abdel Hamid Awad St., Makram Ebeid',
    addressLocality: 'Nasr City',
    addressRegion: 'Cairo',
    addressCountry: 'EG',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+201002951051',
      contactType: 'customer service',
      availableLanguage: ['Arabic', 'English'],
    },
  ],
  email: 'iselnady@gmail.com',
  sameAs: ['https://dar-alkhibra.vercel.app'],
  areaServed: { '@type': 'Country', name: 'Egypt' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Financial & Legal Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accounting & Bookkeeping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Advisory & Compliance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Financial Auditing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company Incorporation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Legal Consulting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Feasibility Studies' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mergers & Acquisitions' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-warm-white" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
