import Link from 'next/link'
import { ArrowRight, ShoppingBag, TrendingUp, Target, Globe, Check } from 'lucide-react'
import type { Metadata } from 'next'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { services } from '@/lib/data'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Ydelser der skaber resultater',
    description: 'Static Ads, CRO Analyse, Shopify Webshop og WordPress websites. Se alle ydelser og priser.',
    alternates: { canonical: `${SITE_URL}/ydelser` },
}

const iconMap: Record<string, React.ElementType> = {
    Target, TrendingUp, ShoppingBag, Globe,
}

export default function YdelserPage() {
    return (
        <div className="pt-20 md:pt-28 bg-gradient-to-b from-slate-900 via-blue-950/60 to-transparent">
            <Breadcrumbs items={[{ label: 'Ydelser', href: '/ydelser' }]} />

            <section className="py-10 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateSection className="text-center mb-8 md:mb-12">
                        <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
                            Mine ydelser
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
                            Services der skaber{' '}
                            <span className="gradient-text-brand">resultater</span>
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-left md:text-center">
                            Uanset om du har brug for static ads der stopper scroll, en webshop der konverterer,
                            eller en komplet CRO-analyse – her er mine ydelser og priser.
                        </p>
                    </AnimateSection>

                    {/* Quick-access */}
                    <AnimateSection className="mb-10 md:mb-14">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {services.map((s) => {
                                const Icon = iconMap[s.icon] || Target
                                return (
                                    <Link
                                        key={s.slug}
                                        href={`/ydelser/${s.slug}`}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-200/80 hover:border-brand-200 hover:shadow-sm transition-all duration-300 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-200/60 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                                            <Icon className="w-5 h-5 text-brand-600" />
                                        </div>
                                        <span className="text-sm font-medium text-neutral-800 group-hover:text-brand-600 transition-colors">
                                            {s.shortTitle}
                                        </span>
                                    </Link>
                                )
                            })}
                        </div>
                    </AnimateSection>
                </div>
            </section>

            <section className="py-10 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-16 md:space-y-20">
                        {services.map((service, si) => {
                            const Icon = iconMap[service.icon] || Target
                            return (
                                <article key={service.slug} id={service.slug}>
                                    <AnimateSection className="mb-6">
                                        <div className="mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-200/60 flex items-center justify-center mb-4">
                                                <Icon className="w-7 h-7 text-brand-600" />
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">{service.title}</h2>
                                            <p className="text-neutral-600 max-w-2xl text-left">{service.description}</p>
                                        </div>
                                    </AnimateSection>

                                    {service.packages && (
                                        <div className={"grid gap-6 mb-8 " + (service.packages.length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2')}>
                                            {service.packages.map((pkg, i) => (
                                                <AnimateSection key={pkg.name} delay={i * 100}>
                                                    <div
                                                        className={"relative p-8 rounded-2xl border transition-all duration-500 " + (
                                                            pkg.popular
                                                                ? 'border-brand-300 bg-gradient-to-br from-brand-50 to-white shadow-xl shadow-brand-100/50'
                                                                : 'border-neutral-200/80 bg-white hover:border-brand-200 hover:shadow-md'
                                                        )}
                                                    >
                                                        {pkg.popular && (
                                                            <span className="absolute top-4 right-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                                Mest populær
                                                            </span>
                                                        )}
                                                        <h3 className="text-xl font-bold text-neutral-900 mb-2">{pkg.name}</h3>
                                                        <p className="text-sm text-neutral-500 mb-6">{pkg.description}</p>
                                                        <p className="text-3xl font-bold text-neutral-900 mb-6">{pkg.price}</p>
                                                        <ul className="space-y-3 mb-8">
                                                            {pkg.features.map((f) => (
                                                                <li key={f} className="flex items-start gap-3">
                                                                    <Check className={"w-5 h-5 mt-0.5 flex-shrink-0 " + (pkg.popular ? 'text-brand-500' : 'text-green-500')} />
                                                                    <span className="text-sm text-neutral-700">{f}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <Link
                                                            href="/kontakt"
                                                            className={"w-full flex justify-center items-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] " + (
                                                                pkg.popular
                                                                    ? 'bg-brand-600 text-white hover:bg-brand-500 shadow-md shadow-brand-200'
                                                                    : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-200'
                                                            )}
                                                        >
                                                            Bestil nu
                                                            <ArrowRight className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                </AnimateSection>
                                            ))}
                                        </div>
                                    )}
                                    {service.packageNote && (
                                        <p className="text-sm text-neutral-500 mb-8 mt-2">{service.packageNote}</p>
                                    )}

                                    {service.process && (
                                        <AnimateSection className="mb-8">
                                            <h3 className="text-xl font-bold text-neutral-900 mb-6">Sådan foregår det</h3>
                                            <div className="grid sm:grid-cols-5 gap-4">
                                                {service.process.map((step) => (
                                                    <div key={step.step} className="text-center">
                                                        <div className="w-10 h-10 rounded-full bg-brand-100 border border-brand-300/40 text-brand-700 flex items-center justify-center text-sm font-bold mx-auto mb-3">
                                                            {step.step}
                                                        </div>
                                                        <p className="text-sm font-semibold text-neutral-900 mb-1">{step.title}</p>
                                                        <p className="text-xs text-neutral-500 leading-relaxed">{step.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </AnimateSection>
                                    )}

                                    <AnimateSection>
                                        <div className="flex flex-col sm:flex-row gap-6 items-start justify-between p-6 rounded-xl bg-neutral-50 border border-neutral-200/60">
                                            <div>
                                                <p className="text-sm font-semibold text-neutral-900 mb-3">Hvad du får:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.benefits.map((b) => (
                                                        <span key={b} className="px-3 py-1.5 bg-white rounded-full border border-neutral-200/80 text-sm text-neutral-700">
                                                            {b}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <Link
                                                href={`/ydelser/${service.slug}`}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-500 whitespace-nowrap transition-colors"
                                            >
                                                Se detaljer
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </AnimateSection>

                                    {si < services.length - 1 && (
                                        <div className="border-b border-neutral-200/60 mt-10 md:mt-12" />
                                    )}
                                </article>
                            )
                        })}
                    </div>

                    <AnimateSection className="mt-12 md:mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-200/40 text-center">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-3">Har du brug for noget andet?</h3>
                        <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
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
