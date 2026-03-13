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
        <div className="py-8 border-y border-neutral-200/60 overflow-hidden relative bg-neutral-50/60">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 animate-marquee w-max items-stretch" style={{ animationDuration: '60s' }}>
                {[...reviews, ...reviews].map((r, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-between gap-3 bg-white border border-neutral-200/80 rounded-xl px-5 py-4 w-64 flex-shrink-0 shadow-sm"
                    >
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                                <span key={j} className="text-amber-400 text-xs">★</span>
                            ))}
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed italic flex-1">
                            &ldquo;{r.quote}&rdquo;
                        </p>
                        <p className="text-xs font-medium text-neutral-500">— {r.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
