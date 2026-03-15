import { getAllFaqCategories } from '@/lib/sanity/fetchFaq'
import FaqClient from '@/components/FaqClient'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const revalidate = 60

export const metadata: Metadata = {
    title: 'FAQ – Ofte stillede spørgsmål | Konvertio',
    description: 'Find svar på de mest stillede spørgsmål om static ads, Shopify, CRO og samarbejdet med mig.',
    alternates: { canonical: `${SITE_URL}/faq` },
}

export default async function FAQPage() {
    const faqCategories = await getAllFaqCategories()

    // FAQPage schema for Google rich results
    const faqs = (faqCategories as { questions: { question: string; answer: string }[] }[])
        .flatMap((cat) => cat.questions ?? [])
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: { '@type': 'Answer', text: q.answer },
        })),
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <FaqClient faqCategories={faqCategories} />
        </>
    )
}
