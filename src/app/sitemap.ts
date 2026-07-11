import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.axismeter.com'

  const staticPages = [
    '', '/about', '/contact', '/how-it-works', '/property-owners', '/residents',
    '/case-studies', '/resources', '/resources/submetering-101',
    '/faq', '/solutions', '/solutions/electricity-submetering', '/solutions/water-submetering',
    '/solutions/thermal-submetering', '/solutions/gas-submetering', '/solutions/common-area-metering',
    '/solutions/leak-detection',
    '/features/multifamily-utility-billing', '/features/thermal-metering',
    '/features/revenue-grade-submeters', '/features/lease-to-bill-utility-metering',
    '/features/utility-metering-installation-maintenance',
    '/utilities/thermal-energy-metering',
    '/markets/residential-rentals', '/markets/condos', '/markets/commercial',
    '/markets/mixed-use', '/markets/student-housing', '/markets/affordable-housing',
    '/blog', '/privacy-policy', '/terms', '/terms-and-conditions', '/customer-services-agreement',
  ]

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : path.startsWith('/blog') ? 0.7 : 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...pages, ...blogPages]
}
