'use client'

import { useState } from 'react'
import { ChevronDown, Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'

const faqCategories = [
    {
        name: 'Static Ads',
        items: [
            { q: 'Hvad er static ads og hvorfor skal jeg bruge dem?', a: 'Static ads er simple billedannoncer uden animation eller video. De er effektive fordi de loader hurtigt, fungerer på alle enheder, og når de designes rigtigt, kan de stoppe scroll og drive konverteringer. De er også billigere at producere end video og nemmere at teste i større mængder.' },
            { q: 'Hvor mange static ads har jeg brug for?', a: 'Det afhænger af din budget og test-strategi. Jeg anbefaler mindst 5 forskellige creatives for at teste hvad der virker. Med Pakke 2 får du 10 creatives med forskellige pain points og vinkler, hvilket giver bedre data at arbejde med.' },
            { q: 'Hvilke sociale medier kan jeg bruge static ads på?', a: 'Static ads fungerer på alle platforme: Facebook, Instagram, LinkedIn, Pinterest, TikTok (som billeder), og Snapchat. Jeg designer dem i de korrekte formater til hver platform.' },
            { q: 'Hvad er forskellen på static ads og video ads?', a: 'Static ads er hurtigere at producere, billigere, og nemmere at teste. Video ads kan være mere engagerende men kræver mere produktion. I min erfaring kan well-designed static ads ofte matche eller overgå video i ROAS, især i test-fasen.' },
            { q: 'Hvad koster static ads?', a: 'Jeg tilbyder flere pakker: 5 ads for 1.495 kr., 10 ads for 2.795 kr., 20 ads for 4.995 kr., og 40 ads for 9.000 kr. Ingen skjulte gebyrer.' },
            { q: 'Hvor lang tid tager det at få leveret static ads?', a: '5 creatives leveres inden for 5 hverdage. 10 creatives inden for 7 hverdage. Ved større batches aftales leveringstid individuelt.' },
        ],
    },
    {
        name: 'Shopify & E-commerce',
        items: [
            { q: 'Hvor meget koster det at få bygget en Shopify webshop?', a: 'Prisen afhænger af kompleksiteten. En simpel webshop kan bygges for 8.000-15.000 kr., mens en mere avanceret med custom funktioner kan koste 20.000-40.000 kr. Jeg giver altid en fast pris inden vi starter.' },
            { q: 'Hvor lang tid tager det at bygge en webshop?', a: 'En standard Shopify webshop tager typisk 2-4 uger afhængigt af kompleksiteten og hvor meget indhold du allerede har klar.' },
            { q: 'Kan du optimere min eksisterende Shopify webshop?', a: 'Ja, absolut. Jeg tilbyder CRO-audit og optimering af eksisterende webshops – fra hastighedsoptimering og design til checkout-optimering og app-opsætning.' },
            { q: 'Hvad er CRO og hvorfor er det vigtigt?', a: 'CRO (Conversion Rate Optimization) handler om at få flere af dine besøgende til at handle. Med CRO kan du fordoble dine salg uden at bruge mere på markedsføring.' },
        ],
    },
    {
        name: 'Priser & Samarbejde',
        items: [
            { q: 'Hvordan foregår betalingen?', a: 'For static ads pakkerne betales 50% ved bestilling og 50% ved levering. For større projekter aftaler vi en betalingsplan med milepæle.' },
            { q: 'Tilbyder du abonnementsløsninger?', a: 'Ja, månedlige abonnementer til virksomheder der løbende har brug for friske creatives.' },
            { q: 'Hvad hvis jeg ikke er tilfreds?', a: 'Jeg stopper ikke før du er tilfreds. Hvis du ikke er glad for resultatet, arbejder vi videre indtil du er.' },
            { q: 'Tilbyder du bureausamarbejder?', a: 'Ja, jeg samarbejder med bureauer som underleverandør. Kontakt mig for at høre om mulighederne.' },
        ],
    },
    {
        name: 'Facebook & Instagram Ads',
        items: [
            { q: 'Kan du hjælpe med at opsætte Facebook Ads?', a: 'Ja, jeg tilbyder opsætning og administration af Facebook og Instagram Ads inkl. strategi, kampagneopsætning, løbende optimering og rapportering.' },
            { q: 'Hvad koster det at køre Facebook Ads?', a: 'Jeg anbefaler mindst 5.000-10.000 kr. om måneden i ad spend for at få nok data til at optimere. Dit ad spend er separat fra mit honorar.' },
            { q: 'Hvad er forskellen på Advantage+ og manuelle kampagner?', a: 'Advantage+ er Metas AI-drevne kampagner. Manuelle kampagner giver mere kontrol. Jeg bruger begge – Advantage+ til skalering og manuelle til test.' },
        ],
    },
    {
        name: 'CRO & Konvertering',
        items: [
            { q: 'Hvad er en god konverteringsrate?', a: 'For e-commerce ligger gennemsnittet typisk på 1-3%. Men det vigtigste er at forbedre DIN konverteringsrate kontinuerligt.' },
            { q: 'Hvad er de vigtigste CRO quick wins?', a: '1) Forbedr produktbilleder, 2) Tilføj trust badges, 3) Reducer checkout-felter, 4) Tilføj urgency, 5) Forbedr CTA-knapper.' },
            { q: 'Hvordan måler jeg min konverteringsrate?', a: 'I Shopify under Analytics, i Google Analytics 4 under Engagement > Conversions, eller med tools som Hotjar til heatmaps og session recordings.' },
        ],
    },
    {
        name: 'Om Konvertio',
        items: [
            { q: 'Hvem er du?', a: 'Jeg er Frederik, bosat i Viborg, og hjælper danske virksomheder med at vækste online via CRO, Shopify og static ads.' },
            { q: 'Arbejder du kun med danske virksomheder?', a: 'Primært ja, men jeg arbejder også med internationale virksomheder der vil ind på det danske marked.' },
            { q: 'Hvad gør dig forskellig fra andre?', a: 'Jeg kombinerer teknisk Shopify-viden, kreativ ekspertise i static ads og CRO. Jeg ser helheden og stopper ikke før du er tilfreds.' },
        ],
    },
]

export default function FAQPage() {
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
        <div className="pt-20 md:pt-28">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />

            <section className="py-10 md:py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <AnimateSection className="text-center mb-12">
                        <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
                            FAQ
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
                            Ofte stillede spørgsmål –{' '}
                            <span className="gradient-text-brand">ærlige svar.</span>
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-left md:text-center">
                            Find svar på de mest almindelige spørgsmål om static ads, Shopify, CRO og samarbejdet med mig.
                        </p>
                    </AnimateSection>

                    <AnimateSection className="relative mb-12">
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

            <section className="py-10 px-6">
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
                                                    <ChevronDown
                                                        className={"w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 " + (isOpen ? 'rotate-180 text-brand-500' : '')}
                                                    />
                                                </button>
                                                <div
                                                    className={"overflow-hidden transition-all duration-300 " + (isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}
                                                >
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

                    <AnimateSection className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">Har du ikke fundet svar?</h3>
                        <p className="text-brand-100/80 mb-8">
                            Jeg er altid klar til at hjælpe. Send mig en besked og jeg vender tilbage inden for 24 timer.
                        </p>
                        <Link href="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 font-semibold hover:bg-brand-50 px-7 py-3.5 text-sm transition-all duration-300 hover:scale-[1.02]">
                            Kontakt mig
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimateSection>
                </div>
            </section>
        </div>
    )
}
