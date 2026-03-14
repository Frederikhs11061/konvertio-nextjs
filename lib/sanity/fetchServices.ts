import { client } from './client'
import { allServicesQuery, serviceBySlugQuery, allServiceSlugsQuery } from './queries'
import { services as staticServices } from '@/lib/data'

const isConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export async function getAllServices() {
    if (!isConfigured) return staticServices
    try {
        const items = await client.fetch(allServicesQuery)
        return items && items.length > 0 ? items : staticServices
    } catch {
        return staticServices
    }
}

export async function getServiceBySlug(slug: string) {
    if (!isConfigured) return staticServices.find((s) => s.slug === slug) ?? null
    try {
        const item = await client.fetch(serviceBySlugQuery, { slug })
        if (item) return item
        return staticServices.find((s) => s.slug === slug) ?? null
    } catch {
        return staticServices.find((s) => s.slug === slug) ?? null
    }
}

export async function getAllServiceSlugs() {
    if (!isConfigured) return staticServices.map((s) => ({ slug: s.slug }))
    try {
        const sanitySlugs: { slug: string }[] = await client.fetch(allServiceSlugsQuery)
        const staticSlugs = staticServices.map((s) => ({ slug: s.slug }))
        const all = [...sanitySlugs, ...staticSlugs]
        const seen = new Set<string>()
        return all.filter(({ slug }) => { if (seen.has(slug)) return false; seen.add(slug); return true })
    } catch {
        return staticServices.map((s) => ({ slug: s.slug }))
    }
}
