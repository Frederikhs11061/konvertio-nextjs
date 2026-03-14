import AnimateSection from './AnimateSection'
import { getAllTestimonials } from '@/lib/sanity/fetchTestimonials'

export default async function Testimonials() {
    const testimonials = await getAllTestimonials()

    return (
        <section id="anbefalinger" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-100/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative max-w-7xl mx-auto">
                <AnimateSection className="text-center mb-16">
                    <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
                        Anbefalinger
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                        Hvad kunderne siger
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-xl mx-auto">
                        Jeg stopper ikke før du er tilfreds. Her er hvad mine kunder siger.
                    </p>
                </AnimateSection>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {testimonials.map((t: { name: string; quote: string; company: string; initial: string }, i: number) => (
                        <AnimateSection key={t.name} delay={i * 100} animation={i % 2 === 0 ? 'slide-left' : 'slide-right'}>
                            <article className="group p-5 md:p-7 rounded-2xl bg-white border border-neutral-200/80 hover:border-brand-200 transition-all duration-500 hover:shadow-lg hover:shadow-brand-100/50 h-full">
                                <div className="flex gap-0.5 mb-4" aria-label="5 ud af 5 stjerner">
                                    {[...Array(5)].map((_, j) => (
                                        <span key={j} className="text-amber-400 text-sm md:text-lg">★</span>
                                    ))}
                                </div>
                                <blockquote className="text-neutral-700 leading-relaxed mb-5 text-xs sm:text-sm md:text-[15px]">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <div className="flex items-center gap-2 md:gap-3 pt-4 border-t border-neutral-100">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xs md:text-sm font-bold">{t.initial}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs md:text-sm font-semibold text-neutral-900">{t.name}</p>
                                        <p className="text-xs text-neutral-500">{t.company}</p>
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
