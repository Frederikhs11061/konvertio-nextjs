import { getAllFaqCategories } from '@/lib/sanity/fetchFaq'
import FaqClient from '@/components/FaqClient'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const revalidate = 60

export const metadata: Metadata = {
    title: 'FAQ – Ofte stillede spørgsmål | Konvertio',
    description: 'Find svar på de mest almindelige spørgsmål om static ads, Shopify, CRO og samarbejdet med mig.',
    alternates: { canonical: `${SITE_URL}/faq` },
}

export default async function FAQPage() {
    const faqCategories = await getAllFaqCategories()
    return <FaqClient faqCategories={faqCategories} />
}
