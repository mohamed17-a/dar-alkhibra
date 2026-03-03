import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الخدمات القانونية | Legal Services',
  description:
    'تأسيس الشركات وصياغة العقود والتحكيم وتسوية المنازعات وتسجيل العلامات التجارية — فريق قانوني متخصص في مصر. Company incorporation, contract drafting, arbitration, and trademark registration in Egypt.',
  keywords: [
    'تأسيس شركات مصر', 'صياغة عقود', 'تحكيم تجاري', 'علامات تجارية مصر',
    'company incorporation Egypt', 'legal consulting Cairo', 'commercial arbitration Egypt',
  ],
  alternates: { canonical: 'https://dar-alkhibra.vercel.app/services/legal' },
  openGraph: {
    title: 'الخدمات القانونية | Dar Al-Khibra',
    description: 'تأسيس شركات، صياغة عقود، تحكيم، وتسوية نزاعات — محامون متخصصون في مصر.',
    url: 'https://dar-alkhibra.vercel.app/services/legal',
  },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
