'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                href={`/ydelser/${service.slug}`}
                                className="group flex flex-col p-6 rounded-2xl bg-[#0d1829] border border-white/5 hover:border-white/15 hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 h-full hover:-translate-y-1.5"
                            >
                                <motion.div
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}
                                    whileHover={{ scale: 1.12, rotate: 6 }}
                                    transition={{ type: 'spring', stiffness: 380, damping: 14 }}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </motion.div>

                                <motion.h3
                                    className="text-lg font-bold text-white mb-2 leading-tight"
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                                >
                                    {service.shortTitle}
                                </motion.h3>

                                <motion.p
                                    className="text-neutral-400 text-sm leading-relaxed flex-1 mb-5"
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 + 0.22 }}
                                >
                                    {service.shortDescription}
                                </motion.p>

                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                                    Se ydelse
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Link>
                        </motion.div>
                    )
                })}
            </div>

            {/* Mobile: light card grid */}
            <div className="grid grid-cols-2 gap-4 lg:hidden mb-12">
                {services.map((service, i) => {
                    const Icon = iconMap[service.icon] || Target
                    return (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <Link
                                href={`/ydelser/${service.slug}`}
                                className="group flex flex-col p-5 rounded-2xl bg-white border border-neutral-200/80 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-500 h-full relative overflow-hidden hover:-translate-y-1"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700" />
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
                        </motion.div>
                    )
                })}
            </div>
        </>
    )
}
