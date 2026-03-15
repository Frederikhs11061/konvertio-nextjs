import Link from 'next/link'
import { ArrowRight, ShoppingBag, TrendingUp, Target, Globe, Check, ChevronDown } from 'lucide-react'
import type { Metadata } from 'next'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceCardsGrid from '@/components/ServiceCardsGrid'
import { getAllServices } from '@/lib/sanity/fetchServices'
import { SITE_URL } from '@/lib/site'

export const revalidate = 60

export const metadata: Metadata = {
    title: 'Ydelser & Priser – Static Ads, CRO & Webudvikling',
    description: 'Static Ads, CRO Analyse, Shopify Webshop og websites der konverterer. Se alle ydelser og priser fra Konvertio.',
    alternates: { canonical: `${SITE_URL}/ydelser` },
}

const iconMap: Record<string, React.ElementType> = {
    Target, TrendingUp, ShoppingBag, Globe,
}

export default async function YdelserPage() {
    const services = await getAllServices()
    return (
        <div className="pt-20 md:pt-28 bg-blue-100">
            <Breadcrumbs items={[{ label: 'Ydelser', href: '/ydelser' }]} />

            <section className="py-10 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateSection className="text-center mb-8 md:mb-12">
                        <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
                            Mine ydelser
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
                            Ydelser der skaber{' '}
                            <span className="gradient-text-brand">resultater</span>
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-left md:text-center">
                            Uanset om du har brug for static ads der stopper scroll, en webshop der konverterer,
                            eller en komplet CRO-analyse – her er mine ydelser og priser.
                        </p>
                    </AnimateSection>

                    {/* Quick-access service nav */}
                    <AnimateSection className="mb-10">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {(services as { slug: string; icon: string; title: string }[]).map((s) => {
                                const Icon = iconMap[s.icon] || Target
                                return (
                                    <a
                                        key={s.slug}
                                        href={`#${s.slug}`}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-200/80 hover:border-brand-300 hover:shadow-md hover:shadow-brand-100/30 transition-all duration-300 group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-200/60 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                                            <Icon className="w-4.5 h-4.5 text-brand-600" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-neutral-900 leading-tight line-clamp-2">{s.title}</p>
                                        </div>
                                        <ChevronDown className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0 ml-auto group-hover:text-brand-500 transition-colors" />
                                    </a>
                                )
                            })}
                        </div>
                    </AnimateSection>

                    {/* Overview cards */}
                    <ServiceCardsGrid services={services as { slug: string; icon: string; shortTitle: string; shortDescription: string }[]} />
                </div>
            </section>

            {(services as { slug: string; icon: string; title: string; description: string; benefits: string[]; packageNote?: string; packages?: { name: string; price: string; description: string; features: string[]; popular?: boolean }[]; process?: { step: number; title: string; description: string }[] }[]).map((service, si) => {
                const Icon = iconMap[service.icon] || Target
                const isEven = si % 2 === 0
                const sectionBg = isEven ? 'bg-white' : 'bg-blue-50'
                const benefitsBg = isEven ? 'bg-neutral-50' : 'bg-white/80'
                return (
                    <section key={service.slug} id={service.slug} className={`py-12 md:py-16 px-6 ${sectionBg}`}>
                        <div className="max-w-7xl mx-auto">
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
                                <AnimateSection className="mb-8" animation="scale">
                                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300">
                                        <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0 text-lg">
                                            🚀
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-amber-900 mb-0.5">Større batch? Bedre pris.</p>
                                            <p className="text-sm text-amber-800/80 leading-relaxed">{service.packageNote}</p>
                                            <Link href="/kontakt" className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors">
                                                Få et tilbud <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </AnimateSection>
                            )}

                            {service.process && (
                                <AnimateSection className="mb-8">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-8">Sådan foregår det</h3>
                                    <div className="flex flex-col gap-4 lg:hidden">
                                        {service.process.map((step) => (
                                            <div key={step.step} className="flex gap-4 items-start">
                                                <div className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                    {step.step}
                                                </div>
                                                <div className="pt-1">
                                                    <p className="text-sm font-semibold text-neutral-900 mb-0.5">{step.title}</p>
                                                    <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="hidden lg:grid gap-0" style={{ gridTemplateColumns: `repeat(${service.process.length}, 1fr)` }}>
                                        {service.process.map((step, idx) => (
                                            <div key={step.step} className="relative flex flex-col items-center text-center px-3">
                                                {idx < service.process!.length - 1 && (
                                                    <div className="absolute top-[18px] left-1/2 right-0 h-px bg-gradient-to-r from-brand-300 to-brand-100 z-0" />
                                                )}
                                                {idx > 0 && (
                                                    <div className="absolute top-[18px] right-1/2 left-0 h-px bg-gradient-to-r from-brand-100 to-brand-300 z-0" />
                                                )}
                                                <div className="relative z-10 w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold mb-4 shadow-md shadow-brand-200/60">
                                                    {step.step}
                                                </div>
                                                <p className="text-sm font-bold text-neutral-900 mb-1.5 leading-tight">{step.title}</p>
                                                <p className="text-xs text-neutral-500 leading-relaxed">{step.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </AnimateSection>
                            )}

                            <AnimateSection>
                                <div className={`flex flex-col sm:flex-row gap-6 items-start justify-between p-6 rounded-xl border border-neutral-200/60 ${benefitsBg}`}>
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
                        </div>
                    </section>
                )
            })}

            <section className="py-14 md:py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <AnimateSection className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-blue-50 to-brand-50/40 border border-blue-200/60 text-center">
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
