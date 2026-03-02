# دار الخبرة للاستشارات المالية والقانونية
## Dar Al-Khebra for Financial and Legal Consultancy — Official Website

A professional bilingual (Arabic / English) corporate website for **Dar Al-Khebra**, an Egyptian joint stock company providing financial, accounting, tax, and legal consulting services since 2000.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Getting Started](#3-getting-started)
4. [Project Structure](#4-project-structure)
5. [Architecture Decisions](#5-architecture-decisions)
6. [Internationalization (AR / EN)](#6-internationalization-ar--en)
7. [Design System](#7-design-system)
8. [Pages Reference](#8-pages-reference)
9. [Components Reference](#9-components-reference)
10. [Adding / Editing Content](#10-adding--editing-content)
11. [Company Data](#11-company-data)
12. [Deployment](#12-deployment)

---

## 1. Project Overview

This is a **multi-page** corporate website built with Next.js 16 App Router. It presents the company profile, full list of services, client track record, location, and a contact form — all in both Arabic (RTL, default) and English (LTR).

The site is fully static (all pages are pre-rendered at build time) and requires no backend or database.

---

## 2. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | Framework (App Router) |
| [React](https://react.dev) | 19 | UI library |
| TypeScript | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Styling |
| `next/font` | — | Cairo (Arabic) + Inter (English) fonts |

> **Tailwind v4 note:** This project uses Tailwind CSS v4, which is configured entirely inside `app/globals.css` using the `@theme` directive — there is **no** `tailwind.config.js` file.

---

## 3. Getting Started

### Prerequisites
- Node.js 18 or later
- npm (or yarn / pnpm)

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

---

## 4. Project Structure

```
dar-alkhibra/
│
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout — fonts, metadata, LanguageProvider
│   ├── globals.css               # Global styles + Tailwind v4 theme (colors, fonts)
│   ├── page.tsx                  # Home page (/)
│   ├── about/
│   │   └── page.tsx              # About page (/about)
│   ├── services/
│   │   ├── page.tsx              # Services overview (/services)
│   │   ├── financial/
│   │   │   └── page.tsx          # Financial & Accounting (/services/financial)
│   │   ├── legal/
│   │   │   └── page.tsx          # Legal Services (/services/legal)
│   │   └── consulting/
│   │       └── page.tsx          # Integrated Consulting (/services/consulting)
│   └── contact/
│       └── page.tsx              # Contact page (/contact)
│
├── components/                   # Shared React components
│   ├── Header.tsx                # Sticky nav bar with dropdown + language toggle
│   ├── Footer.tsx                # 3-column footer
│   ├── StatsBar.tsx              # 4-stat bar (years, clients, services, founded)
│   ├── MapEmbed.tsx              # Google Maps iframe section
│   ├── ServiceCard.tsx           # Reusable service card with highlights + link
│   └── ValuesSection.tsx         # 5 core values displayed on navy background
│
├── context/
│   └── LanguageContext.tsx       # Global AR/EN state + t() translation function
│
├── lib/
│   └── translations.ts           # All website text in Arabic and English
│
├── public/
│   └── logo.png                  # Company logo (copied from client assets)
│
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts            # Not used — Tailwind v4 is configured in globals.css
└── tsconfig.json
```

---

## 5. Architecture Decisions

### Multi-page routing (not single-page scroll)
Each section is a separate Next.js route. Navigation links go to distinct URLs. This improves SEO and allows deep-linking to any service page.

### Client components for all pages
All pages are marked `'use client'` because they use the `useLang()` hook which reads React context. If you need server-side rendering with i18n in the future, consider migrating to a library like `next-intl`.

### No external i18n library
A simple custom context (`LanguageContext`) + flat translation map (`translations.ts`) was chosen deliberately to keep the project dependency-free and easy to maintain. All text lives in one file.

### Static generation
All 7 pages are pre-rendered as static HTML at build time (`○` in build output). No API calls, no database.

---

## 6. Internationalization (AR / EN)

### How it works

The language state lives in `context/LanguageContext.tsx`:

```tsx
const { lang, toggle, t } = useLang()
```

| Value | Type | Description |
|---|---|---|
| `lang` | `'ar' \| 'en'` | Current active language |
| `toggle()` | `() => void` | Switches between AR and EN, persists to `localStorage` |
| `t(key)` | `(key: string) => string` | Returns translated string for the current language |

When the language changes, the context automatically sets:
- `document.documentElement.lang` → `'ar'` or `'en'`
- `document.documentElement.dir` → `'rtl'` or `'ltr'`

Arabic is the **default language**. The HTML is initially rendered with `lang="ar" dir="rtl"`.

### Adding a translation key

Open `lib/translations.ts` and add the key to **both** the `ar` and `en` objects:

```ts
// lib/translations.ts

const ar: Record<string, string> = {
  // ... existing keys
  'my.new.key': 'النص العربي هنا',
}

const en: Record<string, string> = {
  // ... existing keys
  'my.new.key': 'English text here',
}
```

Then use it in any component:
```tsx
const { t } = useLang()
// ...
<p>{t('my.new.key')}</p>
```

### Array values (service lists)
Some translation values store JSON arrays (used for service bullet-point lists). Parse them like this:

```tsx
const items = JSON.parse(t('financial.accounting.items')) as string[]
```

---

## 7. Design System

All design tokens are defined in `app/globals.css` under `@theme`:

```css
@theme inline {
  --color-navy:        #1B2B5E;   /* Primary brand color */
  --color-navy-dark:   #111d42;
  --color-navy-light:  #2a3f7e;
  --color-gold:        #C9A84C;   /* Accent / highlight color */
  --color-gold-light:  #e0c270;
  --color-gold-dark:   #a88730;
  --color-warm-white:  #FAFAF8;   /* Default page background */
  --color-cream:       #F5F0E8;   /* Alternate section background */
}
```

Use them in Tailwind classes as:
```html
<div class="bg-navy text-gold border-cream">
```

### Typography
- **Arabic** → `Cairo` (Google Fonts, subsets: arabic + latin)
- **English** → `Inter` (Google Fonts, subset: latin)
- Font variables are set as `--font-cairo` and `--font-inter` via `next/font/google` in `app/layout.tsx`
- The body automatically uses Cairo in RTL mode and Inter in LTR mode (see `globals.css`)

### Section patterns used
| Pattern | Usage |
|---|---|
| `bg-navy` dark section | Stats bar, values, page heroes, CTA banners |
| `bg-warm-white` light section | Main content sections |
| `bg-cream` slightly tinted | Map section, card backgrounds |
| Gold `#C9A84C` accent | Headings highlight, icons, borders, CTAs |

---

## 8. Pages Reference

### `/` — Home
Sections in order:
1. **Hero** — Full-height dark section with tagline, phones, email, 2 CTA buttons
2. **Stats Bar** — 25+ years / 700+ clients / 3 service areas / Est. 2000
3. **Services Preview** — 3 `ServiceCard` components linking to sub-pages
4. **Values** — 5 core values (Quality, Credibility, Professionalism, Innovation, Sustainability)
5. **Location** — Google Maps embed (Nasr City)
6. **CTA Banner** — Contact Us + WhatsApp buttons

### `/about` — من نحن
1. Page header banner
2. 4 info cards (year, experience, reg. number, company type)
3. Overview text (3 paragraphs) + Vision card + Mission card
4. **Values** section (reused component)
5. **Track Record** — industrial clients grid + commercial clients grid
6. Commitment statement on navy background

### `/services` — خدماتنا
Overview with 3 `ServiceCard` components + CTA block.

### `/services/financial` — الخدمات المالية
4 service blocks: Accounting / Taxation / Financial Audit / Valuation

### `/services/legal` — الخدمات القانونية
- Company Incorporation section with **5 company type cards**
  1. شركة المساهمة (Joint Stock)
  2. ذات مسؤولية محدودة (LLC)
  3. شركة التضامن (General Partnership)
  4. شركة التوصية بالأسهم (Limited Partnership)
  5. المنشأة الفردية (Sole Proprietorship)
- Other legal services list (8 items)

### `/services/consulting` — الاستشارات المتكاملة
4 blocks: Feasibility Studies / M&A Advisory / Company Valuation / Tax Planning

### `/contact` — تواصل معنا
- Left panel: contact info (address, phones, email, hours, reg. number) + WhatsApp button
- Right panel: contact form (name, phone, email, service dropdown, message, submit)
- Success state shown after form submission (currently client-side only — no backend)
- Google Maps embed below

> **Note:** The contact form does NOT currently send emails. To make it functional, connect it to a service like Resend, EmailJS, or a Next.js API route.

---

## 9. Components Reference

### `Header.tsx`
- Fixed/sticky at top, `z-50`
- Logo (image + text) on the left
- Desktop nav: Home, Services (dropdown), About, Contact
- Language toggle button (🇬🇧 EN / 🇪🇬 عربي) — always visible
- Mobile: hamburger menu with collapsible services sub-list
- Dropdown aligns to `right-0` in RTL and `left-0` in LTR

### `Footer.tsx`
- 3 columns: Brand + social icons | Quick links | Contact details
- Bottom bar: copyright + commercial registration number

### `StatsBar.tsx`
- 4 cards on navy background
- Values pulled from translations (`stats.*` keys)
- Fully bilingual

### `MapEmbed.tsx`
- Google Maps `<iframe>` embed using address query string (no API key required)
- Shows address, phone, and email below the map
- Embedded URL: `https://maps.google.com/maps?q=27+Abdel+Hamid+Awad,+Makram+Ebeid,+Nasr+City,+Cairo,+Egypt&z=15&output=embed`

### `ServiceCard.tsx`
Props:
```tsx
interface ServiceCardProps {
  href: string          // Link to service page
  title: string         // Card title
  description: string   // Short description
  icon: React.ReactNode // SVG icon element
  highlights?: string[] // Up to 3 bullet points shown
}
```

### `ValuesSection.tsx`
Displays 5 values in a grid on navy background. Values and icons are hardcoded in the component; text is pulled from translations (`values.*` keys).

---

## 10. Adding / Editing Content

### Change company info (phone, address, email)
All contact details appear in two places:
1. **`lib/translations.ts`** — keys starting with `contact.*` and `footer.*`
2. **Hardcoded `href` attributes** in `Header.tsx`, `Footer.tsx`, `MapEmbed.tsx`, `contact/page.tsx`

Search for `01005001624` to find all hardcoded phone occurrences.

### Add a new service page
1. Create `app/services/[new-service]/page.tsx`
2. Add translation keys for the new service in `lib/translations.ts`
3. Add a link to the new page in:
   - `components/Header.tsx` → `serviceLinks` array
   - `components/Footer.tsx` → quick links list
   - `app/services/page.tsx` → add a new `ServiceCard`

### Add a new language
1. Add a new entry to the `translations` object in `lib/translations.ts`
2. Update `LanguageContext.tsx` to support the new `Lang` type
3. Update the toggle button in `Header.tsx`

### Replace the logo
Replace `public/logo.png` with the new logo file (keep the same filename, or update the `src` in `Header.tsx` and `Footer.tsx`).

### Make the contact form functional
The form in `app/contact/page.tsx` currently shows a success message client-side only. To send actual emails:

**Option A — EmailJS (no backend needed):**
```bash
npm install @emailjs/browser
```
Then call `emailjs.send(...)` in the `handleSubmit` function.

**Option B — Next.js API route:**
Create `app/api/contact/route.ts` and use a service like [Resend](https://resend.com) or [Nodemailer](https://nodemailer.com).

---

## 11. Company Data

| Field | Value |
|---|---|
| Company Name (AR) | دار الخبرة للاستشارات المالية والقانونية |
| Company Name (EN) | Dar Al-Khebra for Financial and Legal Consultancy |
| Company Type | Egyptian Joint Stock Company / شركة مساهمة مصرية |
| Founded | 2000 |
| Experience | 25+ years |
| Commercial Registration | 115350 |
| Phone 1 | 01005001624 |
| Phone 2 | 01002951051 |
| Email | EELNADY@gmail.com |
| Address (AR) | 27 شارع عبد الحميد عوض – مكرم عبيد – مدينة نصر – القاهرة |
| Address (EN) | 27 Abdel Hamid Awad St. – Makram Ebeid – Nasr City – Cairo |

### Services Offered
**Financial & Accounting:** Bookkeeping, financial statements, internal/external auditing, budgets, tax returns, tax planning, tax dispute resolution, financial audit, M&A financial analysis, risk assessment, company & asset valuation, feasibility studies.

**Legal:** Company incorporation (Joint Stock, LLC, Partnership, Limited Partnership, Sole Proprietorship), contract amendments, capital restructuring, liquidation, contract drafting, arbitration, legal representation, trademark registration, banking facilities, general assembly procedures.

**Integrated Consulting:** Feasibility studies, M&A advisory, company/asset valuation, strategic tax planning.

---

## 12. Deployment

### Vercel (recommended)
The easiest deployment — connect the GitHub repo to [Vercel](https://vercel.com):
```bash
npm run build   # verify build passes locally first
```
Then push to GitHub and import the project in Vercel. Zero configuration needed.

### Other platforms
Since all pages are statically generated, you can export to plain HTML:
```bash
# In next.config.ts, add: output: 'export'
npm run build
# Output will be in the /out directory
```
Then host on any static hosting (Netlify, GitHub Pages, AWS S3, etc.)

### Environment Variables
No environment variables are currently required. If you add the contact form backend or Google Maps API key in the future, create a `.env.local` file:
```
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here
RESEND_API_KEY=your_key_here
```

---

## Build Output

```
Route (app)          Size
○ /                  Home
○ /about             About Us
○ /contact           Contact
○ /services          Services Overview
○ /services/consulting
○ /services/financial
○ /services/legal

○  (Static) prerendered as static content
```

---

*Built with Next.js 16 · Tailwind CSS v4 · React 19*
