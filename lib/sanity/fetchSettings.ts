import { client } from './client'
import { siteSettingsQuery } from './queries'

const isConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export async function getSiteSettings() {
    if (!isConfigured) return null
    try {
        return await client.fetch(siteSettingsQuery)
    } catch {
        return null
    }
}
