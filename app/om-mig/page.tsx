import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Linkedin, Mail, Check, Zap, MapPin } from 'lucide-react'
import type { Metadata } from 'next'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE_URL } from '@/lib/site'
import { getSiteSettings } from '@/lib/sanity/fetchSettings'

export const revalidate = 60

export const metadata: Metadata = {
    title: 'Om mig – Freelance Ekspert i Static Ads, CRO & Webudvikling',
    description: 'Mød Frederik – freelance ekspert der hjælper danske virksomheder med static ads, CRO-optimeringer og konverterende webshops. Baseret i Viborg.',
    alternates: { canonical: `${SITE_URL}/om-mig` },
}

const defaultSkills = [
    'Static Ads', 'Facebook Ads', 'Instagram Ads', 'Shopify',
    'CRO', 'WordPress', 'Webudvikling', 'UX Design', 'Konverteringsoptimering',
]

const defaultBenefits = [
    'Dybdegående analyse før projektet påbegyndes',
    'Konkrete anbefalinger fra dag 1',
    'Stopper ikke før du er tilfreds',
]

const defaultAbout = {
    badge: 'Om mig',
    title: 'Freelance Ekspert i Static Ads, CRO & Webudvikling',
    intro: 'Jeg er bosat i Viborg og har en passion for e-commerce og digital markedsføring. Jeg hjælper danske virksomheder med at vækste online gennem effektive static ads, CRO-optimering og Shopify-webshops der konverterer.',
    body: 'Min tilgang er enkel: Jeg fokuserer på resultater, ikke lange rapporter der samler støv. Jeg tror på at teste, måle og optimere kontinuerligt.',
    closing: 'Jeg stopper ikke før du er tilfreds. Det er ikke bare noget jeg siger – det er hvad mine kunder siger om at arbejde med mig.',
    availabilityText: 'Klar til nye projekter',
    ctaH2: 'Klar til at samarbejde?',
    ctaSubtitle: 'Lad os tage en uforpligtende snak om hvordan jeg kan hjælpe din virksomhed med at vækste online.',
    ctaButtonText: 'Start samtalen',
}

export default async function AboutPage() {
    const settings = await getSiteSettings()
    const about = { ...defaultAbout, ...(settings?.about ?? {}) }
    const skills = (settings?.about?.skills && settings.about.skills.length > 0)
        ? settings.about.skills
        : defaultSkills
    const benefits = (settings?.about?.benefits && settings.about.benefits.length > 0)
        ? settings.about.benefits
        : defaultBenefits

    const contactLinkedin = settings?.contact?.linkedin ?? 'https://www.linkedin.com/in/frederik-h%C3%B8gh-simonsen/'

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Frederik',
        jobTitle: 'Freelance Ekspert i Static Ads, CRO & Webudvikling',
        worksFor: { '@type': 'Organization', name: 'Konvertio', url: SITE_URL },
        url: `${SITE_URL}/om-mig`,
        email: 'frederik@konvertio.dk',
        address: { '@type': 'PostalAddress', addressLocality: 'Viborg', addressCountry: 'DK' },
        knowsAbout: ['Static Ads', 'CRO', 'Shopify', 'Webudvikling', 'Facebook Ads', 'Konverteringsoptimering'],
        sameAs: [contactLinkedin],
    }

    return (
        <div className="pt-20 md:pt-28 bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            <Breadcrumbs items={[{ label: 'Om mig', href: '/om-mig' }]} />

            {/* Hero – to kolonner */}
            <section className="py-12 md:py-20 px-6 relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white">
                {/* Baggrunds-blob */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/30 rounded-full blur-[130px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Venstre – tekst */}
                        <div className="order-2 lg:order-1">
                            <AnimateSection delay={100}>
                                <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
                                    {about.badge}
                                </span>
                                <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight mb-6 leading-[1.1]">
                                    {about.title}
                                </h1>
                            </AnimateSection>

                            <AnimateSection delay={200}>
                                <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                                    {about.intro}
                                </p>
                            </AnimateSection>

                            <AnimateSection delay={300}>
                                <p className="text-neutral-500 leading-relaxed mb-4">
                                    {about.body}
                                </p>
                            </AnimateSection>

                            {about.closing && (
                                <AnimateSection delay={350}>
                                    <p className="text-neutral-500 leading-relaxed mb-8">
                                        {about.closing}
                                    </p>
                                </AnimateSection>
                            )}

                            {/* Skills */}
                            <AnimateSection delay={400}>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {skills.map((skill: string) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-700 text-sm hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </AnimateSection>

                            {/* Fordele */}
                            <AnimateSection delay={500}>
                                <div className="space-y-3 mb-8">
                                    {benefits.map((b: string) => (
                                        <div key={b} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-50 border border-green-200/60 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-neutral-700">{b}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-3 h-3 text-amber-500" />
                                        </div>
                                        <span className="text-neutral-700">{about.availabilityText}</span>
                                    </div>
                                </div>
                            </AnimateSection>

                            {/* CTA knapper */}
                            <AnimateSection delay={600}>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={contactLinkedin}
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

                        {/* Højre – billede */}
                        <AnimateSection delay={200} animation="slide-right" className="order-1 lg:order-2">
                            <div className="relative mx-auto max-w-xs lg:max-w-xs xl:max-w-sm">
                                {/* Baggrundsdekoration */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-brand-100/40 to-blue-100/40 rounded-3xl blur-xl" />
                                <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-brand-200/40" />

                                {/* Billede */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/60 aspect-[3/4]">
                                    <Image
                                        src="/images/frederik.png"
                                        alt="Frederik – Konvertio"
                                        fill
                                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                                        sizes="(max-width: 1024px) 70vw, 35vw"
                                        priority
                                    />
                                    {/* Gradient overlay i bunden */}
                                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-neutral-900/70 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-white text-sm font-medium">{about.availabilityText}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badge – lokation (højre side, ingen overlap) */}
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-3 py-2.5 shadow-lg border border-neutral-200/80 flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-lg bg-brand-50 border border-brand-200/60 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-3.5 h-3.5 text-brand-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 leading-none mb-0.5">Baseret i</p>
                                        <p className="text-xs font-semibold text-neutral-900">Viborg, Danmark</p>
                                    </div>
                                </div>

                                {/* Floating badge – stjerner */}
                                <div className="absolute -top-4 -right-4 bg-white rounded-xl px-3 py-2.5 shadow-lg border border-neutral-200/80">
                                    <div className="flex items-center gap-0.5 mb-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-amber-400 text-xs leading-none">★</span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-neutral-500">Baseret på glade kunder</p>
                                </div>
                            </div>
                        </AnimateSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 md:py-24 px-6 bg-white">
                <AnimateSection>
                    <div className="relative max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-50 to-brand-50/40 border border-blue-200/60 rounded-3xl px-8 py-14 shadow-sm">
                        <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-6">
                            Lad os arbejde sammen
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                            {about.ctaH2}
                        </h2>
                        <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-left md:text-center">
                            {about.ctaSubtitle}
                        </p>
                        <Link href="/kontakt" className="btn-primary text-base px-10 py-4">
                            {about.ctaButtonText}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </AnimateSection>
            </section>
        </div>
    )
}
