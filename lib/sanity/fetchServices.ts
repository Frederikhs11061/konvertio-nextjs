import { getClient } from './getClient'
import { allServicesQuery, serviceBySlugQuery, allServiceSlugsQuery } from './queries'
import { services as staticServices } from '@/lib/data'

const isConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

type StaticService = typeof staticServices[number]

// Slug aliases: maps old Sanity slugs to new static slugs
const SLUG_ALIASES: Record<string, string> = {
    'wordpress-website': 'websites',
}

// Only fix the slug — let Sanity be source of truth for all content
function mergeWithStatic(sanityItem: Record<string, unknown>): StaticService {
    const rawSlug = typeof sanityItem.slug === 'object' && sanityItem.slug !== null
        ? (sanityItem.slug as { current: string }).current
        : sanityItem.slug as string
    const newSlug = SLUG_ALIASES[rawSlug] ?? rawSlug
    return {
        ...(sanityItem as unknown as StaticService),
        slug: newSlug,
    }
}

export async function getAllServices() {
    if (!isConfigured) return staticServices
    try {
        const items = await getClient().fetch(allServicesQuery)
        if (items && items.length > 0) return items.map(mergeWithStatic)
        return staticServices
    } catch {
        return staticServices
    }
}

export async function getServiceBySlug(slug: string) {
    if (!isConfigured) return staticServices.find((s) => s.slug === slug) ?? null
    try {
        const item = await getClient().fetch(serviceBySlugQuery, { slug })
        if (item) return mergeWithStatic(item)
        return staticServices.find((s) => s.slug === slug) ?? null
    } catch {
        return staticServices.find((s) => s.slug === slug) ?? null
    }
}

export async function getAllServiceSlugs() {
    if (!isConfigured) return staticServices.map((s) => ({ slug: s.slug }))
    try {
        const sanitySlugs: { slug: string }[] = await getClient().fetch(allServiceSlugsQuery)
        const staticSlugs = staticServices.map((s) => ({ slug: s.slug }))
        const all = [...sanitySlugs, ...staticSlugs]
        const seen = new Set<string>()
        return all.filter(({ slug }) => { if (seen.has(slug)) return false; seen.add(slug); return true })
    } catch {
        return staticServices.map((s) => ({ slug: s.slug }))
    }
}
