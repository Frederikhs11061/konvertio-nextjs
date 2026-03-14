import Link from 'next/link'
import { ArrowRight, Check, ShoppingBag, TrendingUp, Target, Globe, Search, Lightbulb, Palette, RotateCcw, Send } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import Testimonials from '@/components/Testimonials'
import { services } from '@/lib/data'
import { SITE_URL } from '@/lib/site'

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
        alternates: { canonical: `${SITE_URL}/ydelser/${service.slug}` },
    }
}

export default function YdelsePage({ params }: PageProps) {
    const service = services.find((s) => s.slug === params.slug)
    if (!service) notFound()

    const Icon = iconMap[service.icon] || Target
    const otherServices = services.filter((s) => s.slug !== service.slug)

    return (
        <div className="pt-20 md:pt-28 bg-blue-100">
            <Breadcrumbs
                items={[
                    { label: 'Ydelser', href: '/ydelser' },
                    { label: service.shortTitle },
                ]}
            />

            {/* Hero */}
            <section className="py-10 md:py-16 px-6 relative overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-transparent pointer-events-none" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <AnimateSection delay={0}>
                            <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-200/60 flex items-center justify-center mb-6">
                                <Icon className="w-7 h-7 text-brand-600" />
                            </div>
                        </AnimateSection>
                        <AnimateSection delay={100}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
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
                                <Link href="/kontakt" className="btn-primary">
                                    Kontakt mig
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="/ydelser" className="btn-secondary">
                                    Alle ydelser
                                </Link>
                            </div>
                        </AnimateSection>
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-10 md:py-16 px-6 relative">
                <div className="relative max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimateSection>
                            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/60">
                                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Hvad er inkluderet</h2>
                                <ul className="space-y-4">
                                    {service.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-neutral-700">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimateSection>
                        <AnimateSection delay={100}>
                            <div className="p-8 rounded-2xl bg-brand-50/60 border border-brand-200/40">
                                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Dine fordele</h2>
                                <ul className="space-y-4">
                                    {service.benefits.map((b) => (
                                        <li key={b} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-brand-500" />
                                            </div>
                                            <span className="text-neutral-700">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimateSection>
                    </div>
                </div>
            </section>

            {/* Packages */}
            {service.packages && (
                <section className="py-10 md:py-16 px-6 bg-gradient-to-b from-blue-50/30 to-white">
                    <div className="max-w-7xl mx-auto">
                        <AnimateSection className="text-center mb-8">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Priser & pakker</h2>
                            <p className="text-neutral-600 text-left md:text-center">Fast pris – ingen skjulte gebyrer</p>
                        </AnimateSection>
                        <div className={"grid gap-6 mx-auto " + (service.packages.length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3 max-w-6xl' : 'md:grid-cols-2 max-w-4xl')}>
                            {service.packages.map((pkg, i) => (
                                <AnimateSection key={pkg.name} delay={i * 100}>
                                    <div
                                        className={"relative p-8 rounded-2xl border transition-all duration-500 " + (
                                            pkg.popular
                                                ? 'border-brand-300 bg-gradient-to-br from-brand-50 to-white shadow-xl shadow-brand-100/50 scale-[1.02]'
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
                                        <p className="text-4xl font-bold text-neutral-900 mb-8">{pkg.price}</p>
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
                <section className="py-10 md:py-16 px-6 relative overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
                    <div className="relative max-w-7xl mx-auto">
                        <AnimateSection className="text-center mb-8 md:mb-12">
                            <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-3">Processen</span>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-3">Sådan foregår det</h2>
                            <p className="text-neutral-500 text-left md:text-center text-sm">Transparent og effektiv fra start til slut</p>
                        </AnimateSection>

                        <div className="relative">
                            <div className="hidden md:block absolute top-7 left-0 right-0 h-px pointer-events-none bg-neutral-200/60" />

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-3">
                                {service.process.map((step, i) => {
                                    const stepIcons = [Search, Lightbulb, Palette, RotateCcw, Send]
                                    const StepIcon = stepIcons[i] || Target
                                    const isLast = i === service.process!.length - 1
                                    return (
                                        <AnimateSection
                                            key={step.step}
                                            delay={i * 80}
                                            animation="scale"
                                            className={isLast && service.process!.length % 2 !== 0 ? 'col-span-2 md:col-span-1' : ''}
                                        >
                                            <div className="group h-full rounded-xl bg-neutral-50 border border-neutral-200/60 hover:border-brand-200 hover:bg-white hover:shadow-md transition-all duration-300 p-4 md:p-0 md:bg-transparent md:border-transparent md:hover:bg-transparent md:hover:border-transparent md:hover:shadow-none flex flex-col md:items-center md:text-center gap-3 md:gap-0">
                                                <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-brand-50 border border-brand-200/60 flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4 group-hover:bg-brand-100 group-hover:border-brand-300 transition-all duration-300 z-10">
                                                    <StepIcon className="w-4 h-4 md:w-5 md:h-5 text-brand-600" />
                                                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-600 text-white text-[9px] font-bold flex items-center justify-center shadow-sm">
                                                        {step.step}
                                                    </span>
                                                </div>
                                                <div className="md:px-1">
                                                    <p className="font-semibold text-neutral-900 text-xs md:text-sm mb-1 leading-tight">{step.title}</p>
                                                    <p className="text-xs text-neutral-500 leading-relaxed hidden sm:block md:block">{step.description}</p>
                                                </div>
                                            </div>
                                        </AnimateSection>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <Testimonials />

            {/* Other Services */}
            <section className="py-10 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateSection className="mb-8">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Andre ydelser</h2>
                        <p className="text-neutral-500">Se hvad jeg ellers kan hjælpe med</p>
                    </AnimateSection>
                    <div className="grid md:grid-cols-3 gap-6">
                        {otherServices.map((s, i) => {
                            const OtherIcon = iconMap[s.icon] || Target
                            return (
                                <AnimateSection key={s.slug} delay={i * 100}>
                                    <Link
                                        href={`/ydelser/${s.slug}`}
                                        className="group p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-brand-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200/60 group-hover:bg-brand-100 flex items-center justify-center mb-4 transition-colors duration-300">
                                            <OtherIcon className="w-5 h-5 text-brand-600" />
                                        </div>
                                        <h3 className="font-bold text-neutral-900 mb-2">{s.shortTitle}</h3>
                                        <p className="text-sm text-neutral-500 mb-4">{s.shortDescription}</p>
                                        <span className="inline-flex items-center gap-1 text-sm text-brand-600 group-hover:text-brand-500 transition-colors">
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
            <section className="py-12 md:py-20 px-6 relative overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
                <div className="relative max-w-4xl mx-auto text-center">
                    <AnimateSection>
                        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Klar til at komme i gang?</h2>
                        <p className="text-neutral-600 mb-8 max-w-xl mx-auto text-left md:text-center">
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
