import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الاستشارات المتكاملة | Business Consulting',
  description:
    'دراسات الجدوى المالية والقانونية، استشارات الاندماج والاستحواذ، وتقييم الشركات من دار الخبرة. Feasibility studies, M&A advisory, and company valuation consulting in Egypt.',
  keywords: [
    'دراسات جدوى مصر', 'اندماج واستحواذ', 'تقييم شركات', 'استشارات أعمال مصر',
    'feasibility studies Egypt', 'M&A advisory Egypt', 'business consulting Cairo',
  ],
  alternates: { canonical: 'https://dar-alkhibra.vercel.app/services/consulting' },
  openGraph: {
    title: 'الاستشارات المتكاملة | Dar Al-Khibra',
    description: 'دراسات جدوى، اندماج واستحواذ، تقييم شركات — استشارات أعمال متكاملة في مصر.',
    url: 'https://dar-alkhibra.vercel.app/services/consulting',
  },
}

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
