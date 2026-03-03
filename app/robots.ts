import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://dar-alkhibra.vercel.app/sitemap.xml',
    host: 'https://dar-alkhibra.vercel.app',
  }
}
