'use client'

const reviews = [
    { quote: 'Kæmpe anbefaling – løftede vores virksomhed!', name: 'ByMøller' },
    { quote: 'Konkrete anbefalinger der gav mening fra dag 1.', name: 'Corelabs' },
    { quote: 'Grundig og professionel med fokus på konvertering.', name: 'Rambergbrand' },
    { quote: 'Stoppede ikke før jeg var tilfreds. Kan kun anbefale.', name: 'Dennis T.' },
    { quote: 'Meget brugbart CRO til vores webshop.', name: 'ByMøller' },
    { quote: 'Vi planlægger allerede forbedringer fra gennemgangen.', name: 'Frederik M.' },
]

export default function ReviewsTicker() {
    return (
        <div className="py-8 border-y border-neutral-800/30 overflow-hidden relative bg-neutral-950/50">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 animate-marquee w-max items-stretch" style={{ animationDuration: '60s' }}>
                {[...reviews, ...reviews].map((r, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-between gap-3 bg-neutral-900/50 border border-neutral-800/50 rounded-xl px-5 py-4 w-64 flex-shrink-0"
                    >
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                                <span key={j} className="text-brand-500 text-xs">★</span>
                            ))}
                        </div>
                        <p className="text-sm text-neutral-300 leading-relaxed italic flex-1">
                            &ldquo;{r.quote}&rdquo;
                        </p>
                        <p className="text-xs font-medium text-neutral-500">— {r.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
