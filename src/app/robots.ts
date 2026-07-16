import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: '/pay-slips' },
      { userAgent: '*', allow: '/', disallow: '/pay-slips' },
    ],
    sitemap: 'https://www.axismeter.com/sitemap.xml',
  }
}
