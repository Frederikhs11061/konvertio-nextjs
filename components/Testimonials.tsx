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
        <section id="anbefalinger" className="py-24 px-6 bg-neutral-50">
            <div className="max-w-6xl mx-auto">
                <AnimateSection className="text-center mb-16">
                    <span className="inline-block text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                        Anbefalinger
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
                        Hvad kunderne siger
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-xl mx-auto">
                        Jeg stopper ikke før du er tilfreds. Her er hvad mine kunder siger.
                    </p>
                </AnimateSection>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <AnimateSection key={t.name} delay={i * 100}>
                            <article className="p-6 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all duration-300">
                                <div className="flex gap-1 mb-4" aria-label="5 ud af 5 stjerner">
                                    {[...Array(5)].map((_, j) => (
                                        <span key={j} className="text-neutral-900 text-lg">★</span>
                                    ))}
                                </div>
                                <blockquote className="text-neutral-700 leading-relaxed mb-6">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-sm font-semibold">{t.initial}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                                        <p className="text-sm text-neutral-500">{t.company}</p>
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
