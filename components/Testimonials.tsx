import AnimateSection from './AnimateSection'

const testimonials = [
    {
        quote: 'Tusind tak for det! Det ser rigtigt godt ud, og der er meget brugbart CRO til vores webshop. Det sætter vi kæmpe pris på — det er sådan noget der løfter vores virksomhed! Kæmpe anbefaling.',
        name: 'ByMøller',
        company: 'bymoller.com',
        initial: 'B',
    },
    {
        quote: 'Vi fandt mange værdifulde indsigter. Pointerne omkring at skelne tydeligere mellem homepage og produktsider gav rigtig god mening. Vi planlægger allerede, hvordan vi fanger forbrugeren tidligere.',
        name: 'Frederik Møller',
        company: 'Corelabs · corelabs.dk',
        initial: 'F',
    },
    {
        quote: 'Super god oplevelse. Vi fik en meget grundig og professionel gennemgang med konkrete anbefalinger. Det er tydeligt at der er tænkt over både design, brugeroplevelse og konvertering. Kan klart anbefales.',
        name: 'Rambergbrand.dk',
        company: 'E-commerce',
        initial: 'R',
    },
    {
        quote: 'Super seriøs og hjælpsom. Stoppede ikke før jeg var tilfreds. Kan kun anbefale hvis i søger en dedikeret person. Det er ikke sidste gang jeg søger hjælp her.',
        name: 'Dennis Thøgersen',
        company: 'Ejer · grisekongen.dk',
        initial: 'D',
    },
]

export default function Testimonials() {
    return (
        <section id="anbefalinger" className="py-24 px-6 relative overflow-hidden">
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
                    {testimonials.map((t, i) => (
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
