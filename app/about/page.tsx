'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ValuesSection from '@/components/ValuesSection'
import { useLang } from '@/context/LanguageContext'

const industrialClients = [
  'المدينة لصناعة الجبس', 'دار الآء الرحمن للطباعة', 'فالكون سيلنت لتصنيع السيلكون',
  'سيلكوبلاست لتصنيع السيلكون', 'بريطانيا للدهانات', 'فرست بايب لصناعة المواسير',
  'الاتحاد لمنتجات الألبان', 'العبود لتصنيع الملابس', 'الابتكار للصناعات المتطورة',
  'نيو كارمن للصناعة', 'مسيو للمشغولات المعدنية', 'بروفيسور للمنظفات الصناعية',
]

const industrialClientsEn = [
  'Al-Madina for Gypsum Manufacturing', 'Dar Alaa Al-Rahman for Printing', 'Falcon Sealant (Silicone)',
  'Silcoplast (Silicone Manufacturing)', 'Britannia Paints', 'First Pipe (Pipes Manufacturing)',
  'Al-Ettehad Dairy Products', 'Al-Aboud Garments', 'Innovation for Advanced Industries',
  'New Carmen Garments', 'Messio Metal Works', 'Professor Industrial Detergents',
]

const commercialClients = [
  'أنوفيتورز لحلول الاتصالات', 'سيسكوم للاتصالات', 'دوور لايف للمصاعد',
  'فازت للخدمات البترولية', 'نت لوجيك لتصميم البرمجيات', 'سدرة للتسويق السياحي',
  'المسوقون العقاريون', 'جورجيان كلينيك', 'نوبل ميديكا', 'اسينس فارما',
  'ميجا ستورز', 'بيورهارموني لاستشارات الطاقة',
]

const commercialClientsEn = [
  'Innovators Communication Solutions', 'Syscom Communications', 'Door Life Elevators',
  'Fazet Petroleum Services', 'Net Logic (Software Design)', 'Sidra Tourism Marketing',
  'Real Estate Marketers', 'Georgian Clinic', 'Nobel Medica', 'Essence Pharma',
  'Mega Stores', 'Pure Harmony Energy Consultancy',
]

export default function AboutPage() {
  const { t, lang } = useLang()

  const industrial = lang === 'ar' ? industrialClients : industrialClientsEn
  const commercial = lang === 'ar' ? commercialClients : commercialClientsEn

  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="bg-navy pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">{t('common.founded')} 2000</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">{t('about.heading')}</h1>
          <p className="text-white/70 text-xl">{t('about.sub')}</p>
          <p className="text-gold/80 mt-2">{t('about.company.type')}</p>
        </div>
      </section>

      {/* Company Info Cards */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { label: lang === 'ar' ? 'سنة التأسيس' : 'Established', value: '2000' },
              { label: lang === 'ar' ? 'سنوات الخبرة' : 'Years of Experience', value: '+25' },
              { label: lang === 'ar' ? 'نوع الشركة' : 'Company Type', value: lang === 'ar' ? 'مساهمة مصرية' : 'Joint Stock' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <p className="text-2xl font-bold text-navy mb-1">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">{t('about.overview.heading')}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.overview.p1')}</p>
                <p>{t('about.overview.p2')}</p>
                <p>{t('about.overview.p3')}</p>
              </div>
            </div>
            <div className="space-y-8">
              {/* Vision */}
              <div className="bg-navy rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">{t('about.vision.heading')}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{t('about.vision.text')}</p>
              </div>
              {/* Mission */}
              <div className="bg-cream rounded-2xl p-8 border border-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-navy font-bold text-lg">{t('about.mission.heading')}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{t('about.mission.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <ValuesSection />

      {/* Leadership Team */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">{t('team.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('team.sub')}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-10">
            {[
              {
                nameAr: 'عصام النادي',
                nameEn: 'Essam Elnady',
                titleAr: 'المستشار',
                titleEn: 'Consultant',
                credentialsAr: [
                  'مستشار تحكيم دولي',
                  'محاسب قانوني وخبير ضرائب',
                  'مراقب حسابات الشركات المساهمة',
                  'وكيل براءات الاختراع والعلامات التجارية',
                ],
                credentialsEn: [
                  'International Arbitration Consultant',
                  'Certified Accountant & Tax Expert',
                  'Joint Stock Companies Auditor',
                  'Patents & Trademarks Agent',
                ],
                img: '/team/essam.jpg',
              },
              {
                nameAr: 'إسلام عصام النادي',
                nameEn: 'Islam Essam Elnady',
                titleAr: 'المستشار',
                titleEn: 'Consultant',
                credentialsAr: [],
                credentialsEn: [],
                img: null,
              },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full sm:max-w-xs">
                {/* Avatar */}
                <div className="w-36 h-36 rounded-full bg-gray-100 border-4 border-gold/20 flex items-center justify-center mb-5 overflow-hidden shrink-0">
                  {member.img ? (
                    <img src={member.img} alt={lang === 'ar' ? member.nameAr : member.nameEn} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  )}
                </div>
                {/* Title */}
                <p className="text-gold text-sm font-medium mb-1">
                  {lang === 'ar' ? member.titleAr : member.titleEn}
                </p>
                {/* Name */}
                <h3 className="text-xl font-bold text-navy mb-3">
                  {lang === 'ar' ? member.nameAr : member.nameEn}
                </h3>
                {/* Credentials */}
                {(lang === 'ar' ? member.credentialsAr : member.credentialsEn).length > 0 && (
                  <ul className="text-gray-500 text-xs space-y-1.5 text-start w-full">
                    {(lang === 'ar' ? member.credentialsAr : member.credentialsEn).map((c, ci) => (
                      <li key={ci} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Image placeholder note */}
                {!member.img && (
                  <span className="mt-4 text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    {t('team.image.placeholder')}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">{t('about.track.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.track.sub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Industrial */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-navy font-bold text-lg mb-5 flex items-center gap-3">
                <span className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                {t('about.track.industrial')}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {industrial.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-navy font-bold text-lg mb-5 flex items-center gap-3">
                <span className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </span>
                {t('about.track.commercial')}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {commercial.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Commitment */}
          <div className="mt-12 bg-navy rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{t('about.commitment.heading')}</h3>
            <p className="text-white/70 leading-relaxed max-w-3xl mx-auto">{t('about.commitment.text')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
