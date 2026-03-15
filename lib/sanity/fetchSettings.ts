import { client } from './client'
import { siteSettingsQuery, pageHomeQuery, pageAboutQuery, pageContactQuery } from './queries'

const isConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export async function getSiteSettings() {
    if (!isConfigured) return null
    try {
        return await client.fetch(siteSettingsQuery)
    } catch {
        return null
    }
}

export async function getPageHome() {
    if (!isConfigured) return null
    try {
        return await client.fetch(pageHomeQuery)
    } catch {
        return null
    }
}

export async function getPageAbout() {
    if (!isConfigured) return null
    try {
        return await client.fetch(pageAboutQuery)
    } catch {
        return null
    }
}

export async function getPageContact() {
    if (!isConfigured) return null
    try {
        return await client.fetch(pageContactQuery)
    } catch {
        return null
    }
}
