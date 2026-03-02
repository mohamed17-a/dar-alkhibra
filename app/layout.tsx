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
  title: 'دار الخبرة للاستشارات المالية والقانونية | Dar Al-Khebra',
  description:
    'دار الخبرة للاستشارات المالية والقانونية — شركة مساهمة مصرية متخصصة في المحاسبة والمراجعة والضرائب والاستشارات القانونية وتأسيس الشركات منذ عام 2000.',
  keywords:
    'استشارات مالية, استشارات قانونية, محاسبة, مراجعة, ضرائب, تأسيس شركات, مدينة نصر, القاهرة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <body className="antialiased bg-warm-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
