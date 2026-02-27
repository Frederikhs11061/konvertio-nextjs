import { MetadataRoute } from 'next'
import { blogPosts, services } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://konvertio.dk'

    const staticPages = [
        { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
        { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: `${base}/om-mig`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    ]

    const servicePages = services.map((service) => ({
        url: `${base}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }))

    const blogPages = blogPosts.map((post) => ({
        url: `${base}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...servicePages, ...blogPages]
}
