import { MetadataRoute } from 'next'
import { getAllServices, getAllServiceSlugs } from '@/lib/sanity/fetchServices'
import { getAllBlogPosts } from '@/lib/sanity/fetchBlog'
import { SITE_URL } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages: MetadataRoute.Sitemap = [
        { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${SITE_URL}/ydelser`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${SITE_URL}/om-mig`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${SITE_URL}/kontakt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ]

    const [serviceSlugs, blogPosts] = await Promise.all([
        getAllServiceSlugs(),
        getAllBlogPosts(),
    ])

    const ydelserPages: MetadataRoute.Sitemap = serviceSlugs.map(({ slug }) => ({
        url: `${SITE_URL}/ydelser/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
    }))

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post: { slug: string; date?: string }) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'yearly',
        priority: 0.7,
    }))

    return [...staticPages, ...ydelserPages, ...blogPages]
}
