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
        <div className="pt-16">
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/services' },
                    { label: service.shortTitle },
                ]}
            />

            {/* Hero */}
            <section className="py-20 px-6 bg-white border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl">
                        <AnimateSection delay={0}>
                            <div className="w-14 h-14 rounded-xl bg-neutral-100 flex items-center justify-center mb-6">
                                <Icon className="w-7 h-7 text-neutral-700" />
                            </div>
                        </AnimateSection>
                        <AnimateSection delay={100}>
                            <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight mb-6">
                                {service.title}
                            </h1>
                        </AnimateSection>
                        <AnimateSection delay={200}>
                            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                                {service.description}
                            </p>
                        </AnimateSection>
                        <AnimateSection delay={300}>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]"
                                >
                                    Kontakt mig
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100 px-7 py-3.5 text-sm font-medium transition-all"
                                >
                                    Alle services
                                </Link>
                            </div>
                        </AnimateSection>
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-20 px-6 bg-neutral-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <AnimateSection>
                            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Hvad er inkluderet</h2>
                            <ul className="space-y-4">
                                {service.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-neutral-700">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimateSection>
                        <AnimateSection delay={100}>
                            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Dine fordele</h2>
                            <ul className="space-y-4">
                                {service.benefits.map((b) => (
                                    <li key={b} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        <span className="text-neutral-700">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimateSection>
                    </div>
                </div>
            </section>

            {/* Packages */}
            {service.packages && (
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <AnimateSection className="text-center mb-12">
                            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">Priser & pakker</h2>
                            <p className="text-neutral-600">Fast pris – ingen skjulte gebyrer</p>
                        </AnimateSection>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {service.packages.map((pkg, i) => (
                                <AnimateSection key={pkg.name} delay={i * 100}>
                                    <div
                                        className={`relative p-8 rounded-2xl border transition-all ${pkg.popular
                                                ? 'border-neutral-900 bg-neutral-900 text-white shadow-xl scale-[1.02]'
                                                : 'border-neutral-200 bg-white hover:shadow-md'
                                            }`}
                                    >
                                        {pkg.popular && (
                                            <span className="absolute top-4 right-4 bg-white text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">
                                                Mest populær
                                            </span>
                                        )}
                                        <h3 className={`text-xl font-semibold mb-2 ${pkg.popular ? 'text-white' : 'text-neutral-900'}`}>
                                            {pkg.name}
                                        </h3>
                                        <p className={`text-sm mb-6 ${pkg.popular ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                            {pkg.description}
                                        </p>
                                        <p className={`text-4xl font-bold mb-8 ${pkg.popular ? 'text-white' : 'text-neutral-900'}`}>
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
                                            className={`w-full flex justify-center items-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all hover:scale-[1.02] ${pkg.popular
                                                    ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                                                    : 'bg-neutral-900 text-white hover:bg-neutral-700'
                                                }`}
                                        >
                                            Kom i gang
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </AnimateSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Process */}
            {service.process && (
                <section className="py-20 px-6 bg-neutral-50">
                    <div className="max-w-6xl mx-auto">
                        <AnimateSection className="text-center mb-12">
                            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">Sådan foregår det</h2>
                            <p className="text-neutral-600">En transparent proces fra start til slut</p>
                        </AnimateSection>
                        <div className="relative">
                            <div className="hidden md:block absolute top-5 left-10 right-10 h-0.5 bg-neutral-200" />
                            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
                                {service.process.map((step, i) => (
                                    <AnimateSection key={step.step} delay={i * 100} className="text-center relative">
                                        <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-bold mx-auto mb-4 relative z-10">
                                            {step.step}
                                        </div>
                                        <p className="font-semibold text-neutral-900 mb-2">{step.title}</p>
                                        <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                                    </AnimateSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonials */}
            <Testimonials />

            {/* Other Services */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <AnimateSection className="mb-10">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Andre ydelser</h2>
                        <p className="text-neutral-600">Se hvad jeg ellers kan hjælpe med</p>
                    </AnimateSection>
                    <div className="grid md:grid-cols-3 gap-6">
                        {otherServices.map((s, i) => {
                            const OtherIcon = iconMap[s.icon] || Target
                            return (
                                <AnimateSection key={s.slug} delay={i * 100}>
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className="group p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all block"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center mb-4 transition-colors">
                                            <OtherIcon className="w-5 h-5 text-neutral-700" />
                                        </div>
                                        <h3 className="font-semibold text-neutral-900 mb-2">{s.shortTitle}</h3>
                                        <p className="text-sm text-neutral-600 mb-4">{s.shortDescription}</p>
                                        <span className="inline-flex items-center gap-1 text-sm text-neutral-900 group-hover:text-neutral-600 transition-colors">
                                            Se ydelse <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </Link>
                                </AnimateSection>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-neutral-900">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimateSection>
                        <h2 className="text-3xl font-semibold text-white mb-4">Klar til at komme i gang?</h2>
                        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                            Tag en gratis og uforpligtende snak om {service.shortTitle.toLowerCase()}.
                        </p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.02]"
                        >
                            Kontakt mig i dag
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimateSection>
                </div>
            </section>
        </div>
    )
}
