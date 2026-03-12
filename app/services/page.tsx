import Link from 'next/link'
import { ArrowRight, ShoppingBag, TrendingUp, Target, Globe, Check } from 'lucide-react'
import type { Metadata } from 'next'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { services } from '@/lib/data'

export const metadata: Metadata = {
    title: 'Services der skaber resultater',
    description: 'Static Ads, CRO Analyse, Shopify Webshop og WordPress websites. Se alle ydelser og priser.',
    alternates: { canonical: 'https://konvertio.dk/services' },
}

const iconMap: Record<string, React.ElementType> = {
    Target, TrendingUp, ShoppingBag, Globe,
}

export default function ServicesPage() {
    return (
        <div className="pt-16">
            <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />

            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <AnimateSection className="text-center mb-20">
                        <span className="inline-block text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                            Mine ydelser
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight mb-6">
                            Services der skaber resultater
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Uanset om du har brug for static ads der stopper scroll, en webshop der konverterer,
                            eller en komplet CRO-analyse – her er mine ydelser og priser.
                        </p>
                    </AnimateSection>

                    {/* All Services */}
                    <div className="space-y-32">
                        {services.map((service, si) => {
                            const Icon = iconMap[service.icon] || Target
                            return (
                                <article key={service.slug} id={service.slug}>
                                    <AnimateSection className="mb-10">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-14 h-14 rounded-xl bg-neutral-100 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-7 h-7 text-neutral-700" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-2">{service.title}</h2>
                                                <p className="text-neutral-600 max-w-2xl">{service.description}</p>
                                            </div>
                                        </div>
                                    </AnimateSection>

                                    {/* Packages */}
                                    {service.packages && (
                                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                                            {service.packages.map((pkg, i) => (
                                                <AnimateSection key={pkg.name} delay={i * 100}>
                                                    <div
                                                        className={`relative p-8 rounded-2xl border transition-shadow ${pkg.popular
                                                                ? 'border-neutral-900 bg-neutral-900 text-white shadow-xl'
                                                                : 'border-neutral-200 bg-white hover:shadow-md'
                                                            }`}
                                                    >
                                                        {pkg.popular && (
                                                            <span className="absolute top-4 right-4 bg-white text-neutral-900 text-xs font-semibold px-3 py-1 rounded-full">
                                                                Mest populær
                                                            </span>
                                                        )}
                                                        <h3 className={`text-xl font-semibold mb-2 ${pkg.popular ? 'text-white' : 'text-neutral-900'}`}>
                                                            {pkg.name}
                                                        </h3>
                                                        <p className={`text-sm mb-6 ${pkg.popular ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                                            {pkg.description}
                                                        </p>
                                                        <p className={`text-3xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-neutral-900'}`}>
                                                            {pkg.price}
                                                        </p>
                                                        <ul className="space-y-3 mb-8">
                                                            {pkg.features.map((f) => (
                                                                <li key={f} className="flex items-start gap-3">
                                                                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-green-400' : 'text-green-600'}`} />
                                                                    <span className={`text-sm ${pkg.popular ? 'text-neutral-300' : 'text-neutral-700'}`}>{f}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <Link
                                                            href="/kontakt"
                                                            className={`w-full flex justify-center items-center gap-2 rounded-full py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${pkg.popular
                                                                    ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                                                                    : 'bg-neutral-900 text-white hover:bg-neutral-700'
                                                                }`}
                                                        >
                                                            Bestil nu
                                                            <ArrowRight className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                </AnimateSection>
                                            ))}
                                        </div>
                                    )}

                                    {/* Process */}
                                    {service.process && (
                                        <AnimateSection className="mb-8">
                                            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Sådan foregår det</h3>
                                            <div className="grid sm:grid-cols-5 gap-4">
                                                {service.process.map((step) => (
                                                    <div key={step.step} className="text-center">
                                                        <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-bold mx-auto mb-3">
                                                            {step.step}
                                                        </div>
                                                        <p className="text-sm font-semibold text-neutral-900 mb-1">{step.title}</p>
                                                        <p className="text-xs text-neutral-500 leading-relaxed">{step.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </AnimateSection>
                                    )}

                                    {/* Benefits & Read More */}
                                    <AnimateSection>
                                        <div className="flex flex-col sm:flex-row gap-6 items-start justify-between p-6 rounded-xl bg-neutral-50 border border-neutral-100">
                                            <div>
                                                <p className="text-sm font-semibold text-neutral-900 mb-3">Hvad du får:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.benefits.map((b) => (
                                                        <span key={b} className="px-3 py-1.5 bg-white rounded-full border border-neutral-200 text-sm text-neutral-700">
                                                            {b}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 whitespace-nowrap transition-colors"
                                            >
                                                Se detaljer
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </AnimateSection>

                                    {si < services.length - 1 && (
                                        <div className="border-b border-neutral-100 mt-16" />
                                    )}
                                </article>
                            )
                        })}
                    </div>

                    {/* Custom solutions */}
                    <AnimateSection className="mt-20 p-8 rounded-2xl bg-neutral-50 border border-neutral-100 text-center">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Har du brug for noget andet?</h3>
                        <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
                            Jeg tilbyder også skræddersyede løsninger til større kampagner, abonnementsløsninger med løbende levering,
                            og samarbejder med bureauer.
                        </p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02]"
                        >
                            Kontakt mig
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimateSection>
                </div>
            </section>
        </div>
    )
}
