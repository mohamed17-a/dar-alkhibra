import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://dar-alkhibra.vercel.app'
  const lastModified = new Date()

  return [
    { url: base, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/financial`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/legal`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/consulting`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/glossary`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ]
}
