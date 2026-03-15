'use client'

import { useState } from 'react'
import { ChevronDown, Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'

interface FaqItem { q: string; a: string }
interface FaqCategory { name: string; items: FaqItem[] }

export default function FaqClient({ faqCategories }: { faqCategories: FaqCategory[] }) {
    const [search, setSearch] = useState('')
    const [open, setOpen] = useState<Record<string, boolean>>({})
    const toggle = (key: string) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }))

    const filtered = faqCategories.map((cat) => ({
        ...cat,
        items: cat.items.filter(
            (item) =>
                item.q.toLowerCase().includes(search.toLowerCase()) ||
                item.a.toLowerCase().includes(search.toLowerCase())
        ),
    })).filter((cat) => cat.items.length > 0)

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqCategories.flatMap((cat) =>
            cat.items.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
            }))
        ),
    }

    return (
        <div className="pt-20 md:pt-28 bg-blue-100">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />

            <section className="py-10 md:py-16 px-6 bg-gradient-to-b from-blue-100 to-blue-50">
                <div className="max-w-4xl mx-auto">
                    <AnimateSection className="text-center mb-12">
                        <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">FAQ</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
                            Ofte stillede spørgsmål –{' '}
                            <span className="gradient-text-brand">Få svaret her.</span>
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-left md:text-center">
                            Find svar på de mest almindelige spørgsmål om static ads, Shopify, CRO og samarbejdet med mig.
                        </p>
                    </AnimateSection>
                    <AnimateSection className="relative mb-2">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                            type="search"
                            placeholder="Søg efter spørgsmål..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-neutral-200/80 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all text-sm shadow-sm"
                        />
                    </AnimateSection>
                </div>
            </section>

            <section className="py-10 px-6 bg-blue-50">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {filtered.map((cat, catIdx) => (
                            <AnimateSection key={cat.name} delay={catIdx * 50}>
                                <h2 className="text-xl font-bold text-neutral-900 mb-4">{cat.name}</h2>
                                <div className="space-y-3">
                                    {cat.items.map((item, qIdx) => {
                                        const key = `${catIdx}-${qIdx}`
                                        const isOpen = open[key]
                                        return (
                                            <div key={key} className="border border-neutral-200/80 rounded-xl overflow-hidden hover:border-brand-200 transition-colors duration-300 bg-white shadow-sm">
                                                <button
                                                    onClick={() => toggle(key)}
                                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors duration-300"
                                                    aria-expanded={isOpen}
                                                >
                                                    <span className="font-medium text-neutral-900 pr-4 text-sm sm:text-base">{item.q}</span>
                                                    <ChevronDown className={"w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 " + (isOpen ? 'rotate-180 text-brand-500' : '')} />
                                                </button>
                                                <div className={"overflow-hidden transition-all duration-300 " + (isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
                                                    <div className="px-5 pb-5 border-t border-neutral-100">
                                                        <p className="text-neutral-600 leading-relaxed text-sm sm:text-base pt-4">{item.a}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </AnimateSection>
                        ))}
                        {filtered.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-neutral-500">Ingen spørgsmål fundet for &ldquo;{search}&rdquo;</p>
                            </div>
                        )}
                    </div>
                    <AnimateSection className="mt-16 p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm text-center">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-3">Har du ikke fundet svar?</h3>
                        <p className="text-neutral-600 mb-8">Jeg er altid klar til at hjælpe. Send mig en besked og jeg vender tilbage inden for 24 timer.</p>
                        <Link href="/kontakt" className="btn-primary text-sm px-7 py-3.5">
                            Kontakt mig
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimateSection>
                </div>
            </section>
        </div>
    )
}
