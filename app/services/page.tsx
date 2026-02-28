import Link from 'next/link'
import { ArrowRight, ShoppingBag, TrendingUp, Target, Globe, Check } from 'lucide-react'
import type { Metadata } from 'next'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { services } from '@/lib/data'

export const metadata: Metadata = {
    title: 'Ydelser der skaber resultater',
    description: 'Static Ads, CRO Analyse, Shopify Webshop og WordPress websites. Se alle ydelser og priser.',
    alternates: { canonical: 'https://konvertio.dk/services' },
}

const iconMap: Record<string, React.ElementType> = {
    Target, TrendingUp, ShoppingBag, Globe,
}

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <Breadcrumbs items={[{ label: 'Ydelser', href: '/services' }]} />

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateSection className="text-center mb-20">
                        <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-wider mb-4">
                            Mine ydelser
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                            Services der skaber{' '}
                            <span className="gradient-text-brand">resultater</span>
                        </h1>
                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                            Uanset om du har brug for static ads der stopper scroll, en webshop der konverterer,
                            eller en komplet CRO-analyse – her er mine ydelser og priser.
                        </p>
                    </AnimateSection>

                    <div className="space-y-32">
                        {services.map((service, si) => {
                            const Icon = iconMap[service.icon] || Target
                            return (
                                <article key={service.slug} id={service.slug}>
                                    <AnimateSection className="mb-10">
                                        <div className="flex items-start gap-5 mb-6">
                                            <div className="w-14 h-14 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-7 h-7 text-brand-500" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{service.title}</h2>
                                                <p className="text-neutral-400 max-w-2xl">{service.description}</p>
                                            </div>
                                        </div>
                                    </AnimateSection>

                                    {service.packages && (
                                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                                            {service.packages.map((pkg, i) => (
                                                <AnimateSection key={pkg.name} delay={i * 100}>
                                                    <div
                                                        className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                                                            pkg.popular
                                                                ? 'border-brand-600/50 bg-gradient-to-br from-brand-950/50 to-neutral-900/50 shadow-xl shadow-brand-600/5'
                                                                : 'border-neutral-800/50 bg-neutral-900/30 hover:border-neutral-700/50'
                                                        }`}
                                                    >
                                                        {pkg.popular && (
                                                            <span className="absolute top-4 right-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                                Mest populær
                                                            </span>
                                                        )}
                                                        <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                                                        <p className="text-sm text-neutral-500 mb-6">{pkg.description}</p>
                                                        <p className="text-3xl font-bold text-white mb-6">{pkg.price}</p>
                                                        <ul className="space-y-3 mb-8">
                                                            {pkg.features.map((f) => (
                                                                <li key={f} className="flex items-start gap-3">
                                                                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-brand-500' : 'text-green-500'}`} />
                                                                    <span className="text-sm text-neutral-300">{f}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <Link
                                                            href="/kontakt"
                                                            className={`w-full flex justify-center items-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${
                                                                pkg.popular
                                                                    ? 'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/20'
                                                                    : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
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

                                    {service.process && (
                                        <AnimateSection className="mb-8">
                                            <h3 className="text-xl font-bold text-white mb-6">Sådan foregår det</h3>
                                            <div className="grid sm:grid-cols-5 gap-4">
                                                {service.process.map((step) => (
                                                    <div key={step.step} className="text-center">
                                                        <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold mx-auto mb-3">
                                                            {step.step}
                                                        </div>
                                                        <p className="text-sm font-semibold text-white mb-1">{step.title}</p>
                                                        <p className="text-xs text-neutral-500 leading-relaxed">{step.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </AnimateSection>
                                    )}

                                    <AnimateSection>
                                        <div className="flex flex-col sm:flex-row gap-6 items-start justify-between p-6 rounded-xl bg-neutral-900/30 border border-neutral-800/50">
                                            <div>
                                                <p className="text-sm font-semibold text-white mb-3">Hvad du får:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.benefits.map((b) => (
                                                        <span key={b} className="px-3 py-1.5 bg-neutral-800/50 rounded-full border border-neutral-700/50 text-sm text-neutral-300">
                                                            {b}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-400 whitespace-nowrap transition-colors"
                                            >
                                                Se detaljer
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </AnimateSection>

                                    {si < services.length - 1 && (
                                        <div className="border-b border-neutral-800/30 mt-16" />
                                    )}
                                </article>
                            )
                        })}
                    </div>

                    <AnimateSection className="mt-20 p-10 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">Har du brug for noget andet?</h3>
                        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                            Jeg tilbyder også skræddersyede løsninger til større kampagner, abonnementsløsninger med løbende levering,
                            og samarbejder med bureauer.
                        </p>
                        <Link href="/kontakt" className="btn-primary">
                            Kontakt mig
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimateSection>
                </div>
            </section>
        </div>
    )
}
