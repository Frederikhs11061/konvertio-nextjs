'use client'

import Link from 'next/link'
import { ArrowRight, Target, TrendingUp, ShoppingBag, Globe } from 'lucide-react'

type Service = {
    slug: string
    icon: string
    shortTitle: string
    shortDescription: string
}

const iconMap: Record<string, React.ElementType> = {
    Target, TrendingUp, ShoppingBag, Globe,
}

const iconGradients = [
    'from-blue-500 to-blue-700',
    'from-green-400 to-emerald-600',
    'from-violet-500 to-purple-700',
    'from-orange-400 to-orange-600',
]

export default function ServiceCardsGrid({ services }: { services: Service[] }) {
    return (
        <>
            {/* Desktop: dark cards with colorful gradient icons */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-12">
                {services.map((service, i) => {
                    const Icon = iconMap[service.icon] || Target
                    const gradient = iconGradients[i % iconGradients.length]
                    return (
                        <Link
                            key={service.slug}
                            href={`/ydelser/${service.slug}`}
                            className="group flex flex-col p-6 rounded-2xl bg-[#0d1829] border border-white/5 hover:border-white/15 hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1.5"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                <Icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 leading-tight">{service.shortTitle}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed flex-1 mb-5">{service.shortDescription}</p>
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                                Se ydelse
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Link>
                    )
                })}
            </div>

            {/* Mobile: light card grid */}
            <div className="grid grid-cols-2 gap-4 lg:hidden mb-12">
                {services.map((service, i) => {
                    const Icon = iconMap[service.icon] || Target
                    return (
                        <Link
                            key={service.slug}
                            href={`/ydelser/${service.slug}`}
                            className="group flex flex-col p-5 rounded-2xl bg-white border border-neutral-200/80 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 h-full relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500" />
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200/60 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors duration-300">
                                    <Icon className="w-5 h-5 text-brand-600" />
                                </div>
                                <h3 className="text-base font-bold text-neutral-900 mb-2 leading-tight">{service.shortTitle}</h3>
                                <p className="text-neutral-600 leading-relaxed mb-4 flex-1 text-sm hidden sm:block">{service.shortDescription}</p>
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 group-hover:text-brand-500 transition-colors">
                                    Se ydelse
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
