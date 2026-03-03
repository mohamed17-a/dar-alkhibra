import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'المصطلحات المالية والقانونية | Financial & Legal Glossary',
  description:
    'مرجع شامل للمصطلحات المالية والقانونية بالعربية والإنجليزية — تأسيس شركات، حوكمة، تقييم، اندماج، تصفية وأكثر. Bilingual Arabic-English glossary of financial and legal terms.',
  alternates: { canonical: 'https://dar-alkhibra.vercel.app/glossary' },
  openGraph: {
    title: 'المصطلحات المالية والقانونية | Dar Al-Khibra',
    description: 'مرجع ثنائي اللغة للمصطلحات المالية والقانونية.',
    url: 'https://dar-alkhibra.vercel.app/glossary',
  },
}

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
