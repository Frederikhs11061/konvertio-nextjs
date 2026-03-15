import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Sitemap er baseret på kendte, statiske URLs – ikke Sanity-data.
// Dette sikrer at sitemappet altid er korrekt uanset Sanity-indhold.
const SERVICE_SLUGS = ['static-ads', 'cro-analyse', 'shopify-webshop', 'websites']

const BLOG_SLUGS = [
    '5-cro-tips',
    'shopify-checkout-optimering',
    'hastighedsoptimering-webshop',
    'static-ads-der-virker',
    'facebook-ads-strategi-2026',
    'ugc-ads-guide',
    'hvad-er-cro',
    'shopify-vs-woocommerce',
    'static-ads-guide',
]

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        { url: SITE_URL,                         lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
        { url: `${SITE_URL}/ydelser`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
        { url: `${SITE_URL}/om-mig`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}/blog`,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
        { url: `${SITE_URL}/faq`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${SITE_URL}/kontakt`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ]

    const ydelserPages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
        url: `${SITE_URL}/ydelser/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
    }))

    const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
        url: `${SITE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.7,
    }))

    return [...staticPages, ...ydelserPages, ...blogPages]
}
