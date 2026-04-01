'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ValuesSection from '@/components/ValuesSection'
import PageHero from '@/components/PageHero'
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

      <PageHero
        image="office1"
        keywordAr="خبرة"
        keywordEn="Expertise"
        badgeAr={`${t('common.founded')} 2000`}
        badgeEn={`${t('common.founded')} 2000`}
        headingAr={t('about.heading')}
        headingEn={t('about.heading')}
        subtitleAr={t('about.sub')}
        subtitleEn={t('about.sub')}
        extraAr={t('about.company.type')}
        extraEn={t('about.company.type')}
        lang={lang}
      />

      {/* Company Overview */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stat tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-20">
            {[
              { label: lang === 'ar' ? 'سنة التأسيس' : 'Established', value: '2000' },
              { label: lang === 'ar' ? 'سنوات الخبرة' : 'Years of Experience', value: '+25' },
              { label: lang === 'ar' ? 'نوع الشركة' : 'Company Type', value: lang === 'ar' ? 'مساهمة مصرية' : 'Joint Stock' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-md p-6 text-center shadow-ambient">
                <p className="text-2xl font-bold text-navy mb-1">{item.value}</p>
                <p className="text-navy/45 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Overview + Vision/Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-5">
                {t('about.overview.heading')}
              </p>
              <div className="space-y-4 text-navy/60 leading-relaxed text-sm">
                <p>{t('about.overview.p1')}</p>
                <p>{t('about.overview.p2')}</p>
                <p>{t('about.overview.p3')}</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Vision */}
              <div className="bg-navy rounded-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.15)' }}>
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold">{t('about.vision.heading')}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{t('about.vision.text')}</p>
              </div>

              {/* Mission */}
              <div className="bg-cream rounded-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.15)' }}>
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-navy font-bold">{t('about.mission.heading')}</h3>
                </div>
                <p className="text-navy/55 text-sm leading-relaxed">{t('about.mission.text')}</p>
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
          <div className="mb-14">
            <p className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-3">{t('team.heading')}</p>
            <p className="text-navy/50 max-w-xl text-sm">{t('team.sub')}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {[
              {
                nameAr: 'عصام النادي', nameEn: 'Essam Elnady',
                titleAr: 'المستشار', titleEn: 'Consultant',
                credentialsAr: ['مستشار تحكيم دولي', 'محاسب قانوني وخبير ضرائب', 'مراقب حسابات الشركات المساهمة', 'وكيل براءات الاختراع والعلامات التجارية'],
                credentialsEn: ['International Arbitration Consultant', 'Certified Accountant & Tax Expert', 'Joint Stock Companies Auditor', 'Patents & Trademarks Agent'],
                img: '/team/essam.jpg',
              },
              {
                nameAr: 'إسلام عصام النادي', nameEn: 'Islam Essam Elnady',
                titleAr: 'المستشار', titleEn: 'Consultant',
                credentialsAr: [], credentialsEn: [],
                img: null,
              },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white rounded-md p-8 shadow-ambient w-full sm:max-w-xs">
                <div className="w-32 h-32 rounded-md bg-cream flex items-center justify-center mb-5 overflow-hidden shrink-0" style={{ outline: '2px solid rgba(201,168,76,0.15)' }}>
                  {member.img ? (
                    <img src={member.img} alt={lang === 'ar' ? member.nameAr : member.nameEn} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-14 h-14 text-navy/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  )}
                </div>
                <p className="text-gold text-xs font-medium uppercase tracking-[0.12em] mb-1">
                  {lang === 'ar' ? member.titleAr : member.titleEn}
                </p>
                <h3 className="text-lg font-bold text-navy mb-4">
                  {lang === 'ar' ? member.nameAr : member.nameEn}
                </h3>
                {(lang === 'ar' ? member.credentialsAr : member.credentialsEn).length > 0 && (
                  <ul className="text-navy/45 text-xs space-y-2 text-start w-full">
                    {(lang === 'ar' ? member.credentialsAr : member.credentialsEn).map((c, ci) => (
                      <li key={ci} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                {!member.img && (
                  <span className="mt-4 text-xs text-navy/30">
                    {t('team.image.placeholder')}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}
