import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'من نحن | About Dar Al-Khibra',
  description:
    'تعرف على دار الخبرة للاستشارات المالية والقانونية — شركة مساهمة مصرية تأسست عام 2000، تضم فريقاً من المحاسبين القانونيين والمحامين المتخصصين. Learn about Dar Al-Khibra, Egypt\'s trusted financial and legal consulting firm since 2000.',
  alternates: { canonical: 'https://dar-alkhibra.vercel.app/about' },
  openGraph: {
    title: 'من نحن | Dar Al-Khibra',
    description: 'شركة مساهمة مصرية تأسست عام 2000 في مجال الاستشارات المالية والقانونية.',
    url: 'https://dar-alkhibra.vercel.app/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
