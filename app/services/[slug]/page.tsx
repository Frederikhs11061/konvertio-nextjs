import Link from 'next/link'
import { ArrowRight, Check, ShoppingBag, TrendingUp, Target, Globe } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import Testimonials from '@/components/Testimonials'
import { services } from '@/lib/data'

interface PageProps {
    params: { slug: string }
}

const iconMap: Record<string, React.ElementType> = {
    Target, TrendingUp, ShoppingBag, Globe,
}

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const service = services.find((s) => s.slug === params.slug)
    if (!service) return {}
    return {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: { canonical: `https://konvertio.dk/services/${service.slug}` },
    }
}

export default function ServicePage({ params }: PageProps) {
    const service = services.find((s) => s.slug === params.slug)
    if (!service) notFound()

    const Icon = iconMap[service.icon] || Target
    const otherServices = services.filter((s) => s.slug !== service.slug)

    return (
        <div className="pt-20">
            <Breadcrumbs
                items={[
                    { label: 'Ydelser', href: '/services' },
                    { label: service.shortTitle },
                ]}
            />

            {/* Hero */}
            <section className="py-12 md:py-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <AnimateSection delay={0}>
                            <div className="w-14 h-14 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center mb-6">
                                <Icon className="w-7 h-7 text-brand-500" />
                            </div>
                        </AnimateSection>
                        <AnimateSection delay={100}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                                {service.title}
                            </h1>
                        </AnimateSection>
                        <AnimateSection delay={200}>
                            <p className="text-xl text-neutral-400 leading-relaxed mb-8">
                                {service.description}
                            </p>
                        </AnimateSection>
                        <AnimateSection delay={300}>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/kontakt" className="btn-primary">
                                    Kontakt mig
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="/services" className="btn-secondary">
                                    Alle ydelser
                                </Link>
                            </div>
                        </AnimateSection>
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-12 md:py-20 px-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/30 to-transparent pointer-events-none" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <AnimateSection>
                            <h2 className="text-2xl font-bold text-white mb-6">Hvad er inkluderet</h2>
                            <ul className="space-y-4">
                                {service.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-neutral-300">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimateSection>
                        <AnimateSection delay={100}>
                            <h2 className="text-2xl font-bold text-white mb-6">Dine fordele</h2>
                            <ul className="space-y-4">
                                {service.benefits.map((b) => (
                                    <li key={b} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-brand-500" />
                                        </div>
                                        <span className="text-neutral-300">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimateSection>
                    </div>
                </div>
            </section>

            {/* Packages */}
            {service.packages && (
                <section className="py-12 md:py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <AnimateSection className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Priser & pakker</h2>
                            <p className="text-neutral-400 text-left md:text-center">Fast pris – ingen skjulte gebyrer</p>
                        </AnimateSection>
                        <div className={`grid gap-6 mx-auto ${service.packages.length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3 max-w-6xl' : 'md:grid-cols-2 max-w-4xl'}`}>
                            {service.packages.map((pkg, i) => (
                                <AnimateSection key={pkg.name} delay={i * 100}>
                                    <div
                                        className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                                            pkg.popular
                                                ? 'border-brand-600/50 bg-gradient-to-br from-brand-950/50 to-neutral-900/50 shadow-xl shadow-brand-600/5 scale-[1.02]'
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
                                        <p className="text-4xl font-bold text-white mb-8">{pkg.price}</p>
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
                                            Kom i gang
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </AnimateSection>
                            ))}
                        </div>
                        {service.packageNote && (
                            <p className="text-center text-sm text-neutral-500 mt-6">{service.packageNote}</p>
                        )}
                    </div>
                </section>
            )}

            {/* Process */}
            {service.process && (
                <section className="py-12 md:py-20 px-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-transparent pointer-events-none" />
                    <div className="relative max-w-7xl mx-auto">
                        <AnimateSection className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Sådan foregår det</h2>
                            <p className="text-neutral-400 text-left md:text-center">En transparent proces fra start til slut</p>
                        </AnimateSection>
                        <div className="relative">
                            <div className="hidden md:block absolute top-5 left-10 right-10 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
                            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
                                {service.process.map((step, i) => (
                                    <AnimateSection key={step.step} delay={i * 100} className="text-center relative">
                                        <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-brand-600/20">
                                            {step.step}
                                        </div>
                                        <p className="font-semibold text-white mb-2">{step.title}</p>
                                        <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                                    </AnimateSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <Testimonials />

            {/* Other Services */}
            <section className="py-12 md:py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateSection className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-2">Andre ydelser</h2>
                        <p className="text-neutral-400">Se hvad jeg ellers kan hjælpe med</p>
                    </AnimateSection>
                    <div className="grid md:grid-cols-3 gap-6">
                        {otherServices.map((s, i) => {
                            const OtherIcon = iconMap[s.icon] || Target
                            return (
                                <AnimateSection key={s.slug} delay={i * 100}>
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className="group p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 card-hover block"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-brand-600/10 border border-brand-600/20 group-hover:bg-brand-600/20 flex items-center justify-center mb-4 transition-colors duration-300">
                                            <OtherIcon className="w-5 h-5 text-brand-500" />
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{s.shortTitle}</h3>
                                        <p className="text-sm text-neutral-500 mb-4">{s.shortDescription}</p>
                                        <span className="inline-flex items-center gap-1 text-sm text-brand-500 group-hover:text-brand-400 transition-colors">
                                            Se ydelse <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </Link>
                                </AnimateSection>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-950/50 via-neutral-950 to-neutral-950" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-600/10 blur-[100px] pointer-events-none" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <AnimateSection>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Klar til at komme i gang?</h2>
                        <p className="text-neutral-400 mb-8 max-w-xl mx-auto text-left md:text-center">
                            Tag en gratis og uforpligtende snak om {service.shortTitle.toLowerCase()}.
                        </p>
                        <Link href="/kontakt" className="btn-primary text-base px-10 py-4">
                            Kontakt mig i dag
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </AnimateSection>
                </div>
            </section>
        </div>
    )
}
