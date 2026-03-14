import AnimateSection from './AnimateSection'
import { getAllTestimonials } from '@/lib/sanity/fetchTestimonials'

const avatarColors = [
    'from-orange-400 to-orange-600',
    'from-violet-500 to-violet-700',
    'from-pink-500 to-pink-700',
    'from-blue-500 to-blue-700',
    'from-emerald-500 to-emerald-700',
    'from-amber-400 to-amber-600',
]

export default async function Testimonials() {
    const testimonials = await getAllTestimonials()

    return (
        <section id="anbefalinger" className="py-24 px-6 relative overflow-hidden bg-[#0d1829]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <AnimateSection>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                            Anbefalinger
                        </h2>
                    </AnimateSection>
                    <AnimateSection delay={80}>
                        <p className="text-lg font-medium text-white/60 mb-3">Hvad kunderne siger</p>
                    </AnimateSection>
                    <AnimateSection delay={140}>
                        <p className="text-neutral-400 max-w-xl mx-auto">
                            Jeg stopper ikke før du er tilfreds. Her er hvad mine kunder siger.
                        </p>
                    </AnimateSection>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {testimonials.map((t: { name: string; quote: string; company: string; initial: string }, i: number) => (
                        <AnimateSection key={t.name} delay={i * 100} animation="scale">
                            <article className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex flex-col">
                                {/* Stars */}
                                <div className="flex gap-1 mb-4" aria-label="5 ud af 5 stjerner">
                                    {[...Array(5)].map((_, j) => (
                                        <span key={j} className="text-amber-400 text-lg">★</span>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-white/75 text-sm leading-relaxed flex-1 mb-6">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center flex-shrink-0`}>
                                        <span className="text-white text-sm font-bold">{t.initial}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white">{t.name}</p>
                                        <p className="text-xs text-white/40">{t.company}</p>
                                    </div>
                                </div>
                            </article>
                        </AnimateSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
