import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الخدمات المالية والمحاسبية | Financial Services',
  description:
    'خدمات المحاسبة والضرائب والتدقيق المالي وتقييم الشركات من دار الخبرة — محاسبون قانونيون معتمدون في مصر. Accounting, tax planning, financial auditing, and company valuation by certified accountants in Egypt.',
  keywords: [
    'محاسبة مصر', 'ضرائب مصر', 'تدقيق مالي', 'تقييم شركات', 'إمساك الدفاتر',
    'accounting Egypt', 'tax advisory Egypt', 'financial audit Cairo', 'company valuation Egypt',
  ],
  alternates: { canonical: 'https://dar-alkhibra.vercel.app/services/financial' },
  openGraph: {
    title: 'الخدمات المالية والمحاسبية | Dar Al-Khibra',
    description: 'محاسبة، ضرائب، تدقيق مالي، تقييم شركات — من محاسبين قانونيين معتمدين.',
    url: 'https://dar-alkhibra.vercel.app/services/financial',
  },
}

export default function FinancialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
