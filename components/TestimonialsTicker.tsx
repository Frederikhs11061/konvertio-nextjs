'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

type Testimonial = { name: string; quote: string; company: string; initial: string }

const avatarColors = [
    'from-orange-400 to-orange-600',
    'from-violet-500 to-violet-700',
    'from-pink-500 to-pink-700',
    'from-blue-500 to-blue-700',
    'from-emerald-500 to-emerald-700',
    'from-amber-400 to-amber-600',
]

export default function TestimonialsTicker({ testimonials }: { testimonials: Testimonial[] }) {
    const items = [...testimonials, ...testimonials, ...testimonials]
    const duration = Math.max(testimonials.length * 7, 35)

    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="flex gap-5"
                animate={{ x: [0, -(390) * testimonials.length] }}
                transition={{
                    x: { repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' },
                }}
            >
                {items.map((t, i) => (
                    <div key={i} className="flex-shrink-0 w-[370px] flex flex-col p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm">
                        <div className="flex gap-0.5 mb-4">
                            {[...Array(5)].map((_, j) => (
                                <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <blockquote className="text-neutral-600 text-sm leading-relaxed flex-1 mb-5 min-h-[72px]">
                            &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                            <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center flex-shrink-0`}>
                                <span className="text-white text-xs font-bold">{t.initial}</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-neutral-900">{t.name}</p>
                                <p className="text-xs text-neutral-400">{t.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
        </div>
    )
}
