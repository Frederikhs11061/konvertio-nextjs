import { getClient } from './getClient'
import { allTestimonialsQuery } from './queries'
import { testimonials as staticTestimonials } from '@/lib/data'

const isConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export async function getAllTestimonials() {
    if (!isConfigured) return staticTestimonials
    try {
        const items = await getClient().fetch(allTestimonialsQuery)
        return items && items.length > 0 ? items : staticTestimonials
    } catch {
        return staticTestimonials
    }
}
