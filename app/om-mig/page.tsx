import Link from 'next/link'
import { ArrowRight, Linkedin, Mail, Check, Zap, MapPin } from 'lucide-react'
import type { Metadata } from 'next'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
    title: 'Om mig – Frederik Høgh Simonsen',
    description: 'Freelance ekspert i static ads, CRO og Shopify. Baseret i Viborg med passion for e-commerce og digital markedsføring.',
    alternates: { canonical: 'https://konvertio.dk/om-mig' },
}

const skills = [
    'Static Ads', 'Facebook Ads', 'Instagram Ads', 'Shopify',
    'CRO', 'WordPress', 'Webudvikling', 'UX Design', 'Konverteringsoptimering',
]

const benefits = [
    'Gratis indledende samtale',
    'Konkrete anbefalinger fra dag 1',
    'Stopper ikke før du er tilfreds',
    'Fast pris – ingen skjulte gebyrer',
]

export default function AboutPage() {
    return (
        <div className="pt-20">
            <Breadcrumbs items={[{ label: 'Om mig', href: '/om-mig' }]} />

            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimateSection animation="slide-left">
                            <div className="relative max-w-md mx-auto lg:mx-0">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800/50 flex items-center justify-center">
                                    <div className="text-center px-10">
                                        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand-600/20">
                                            <span className="text-white text-5xl font-bold">F</span>
                                        </div>
                                        <p className="text-white text-lg font-bold mb-1">Frederik Høgh Simonsen</p>
                                        <p className="text-neutral-500 text-sm flex items-center justify-center gap-1">
                                            <MapPin className="w-3.5 h-3.5" />
                                            Viborg, Danmark
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800/50 shadow-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">K</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">Konvertio</p>
                                            <p className="text-xs text-neutral-500">Viborg, Danmark</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateSection>

                        <div>
                            <AnimateSection delay={100}>
                                <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-wider mb-4">
                                    Om mig
                                </span>
                                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                                    Hej, jeg hedder Frederik
                                </h1>
                            </AnimateSection>

                            <AnimateSection delay={200}>
                                <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                                    Jeg er bosat i Viborg og har en passion for e-commerce og digital markedsføring.
                                    Jeg hjælper danske virksomheder med at vækste online gennem effektive static ads,
                                    CRO-optimering og Shopify-webshops der konverterer.
                                </p>
                            </AnimateSection>

                            <AnimateSection delay={300}>
                                <p className="text-neutral-500 leading-relaxed mb-4">
                                    Min tilgang er enkel: Jeg fokuserer på resultater, ikke lange rapporter der samler støv.
                                    Jeg tror på at teste, måle og optimere kontinuerligt.
                                </p>
                            </AnimateSection>

                            <AnimateSection delay={350}>
                                <p className="text-neutral-500 leading-relaxed mb-8">
                                    Jeg stopper ikke før du er tilfreds. Det er ikke bare noget jeg siger – det er hvad
                                    mine kunder siger om at arbejde med mig.
                                </p>
                            </AnimateSection>

                            <AnimateSection delay={400}>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 rounded-full bg-neutral-800/50 border border-neutral-700/50 text-neutral-300 text-sm hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </AnimateSection>

                            <AnimateSection delay={500}>
                                <div className="space-y-3 mb-8">
                                    {benefits.map((b) => (
                                        <div key={b} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-neutral-300">{b}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-amber-500" />
                                        <span className="text-neutral-300">Klar til nye projekter</span>
                                    </div>
                                </div>
                            </AnimateSection>

                            <AnimateSection delay={600}>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://www.linkedin.com/in/frederik-høgh-simonsen/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        Connect på LinkedIn
                                    </a>
                                    <Link href="/kontakt" className="btn-secondary">
                                        <Mail className="w-4 h-4" />
                                        Send en besked
                                    </Link>
                                </div>
                            </AnimateSection>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-950/50 via-neutral-950 to-neutral-950" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-600/10 blur-[100px] pointer-events-none" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <AnimateSection>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Klar til at samarbejde?</h2>
                        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                            Lad os tage en uforpligtende snak om hvordan jeg kan hjælpe din virksomhed med at vækste online.
                        </p>
                        <Link href="/kontakt" className="btn-primary text-base px-10 py-4">
                            Start samtalen
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </AnimateSection>
                </div>
            </section>
        </div>
    )
}
