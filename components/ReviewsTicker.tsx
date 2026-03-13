'use client'

const reviews = [
    { quote: 'Kæmpe anbefaling – løftede vores virksomhed!', name: 'ByMøller' },
    { quote: 'Konkrete anbefalinger der gav mening fra dag 1.', name: 'Corelabs' },
    { quote: 'Grundig og professionel med fokus på konvertering.', name: 'Rambergbrand' },
    { quote: 'Stoppede ikke før jeg var tilfreds. Kan kun anbefale.', name: 'Dennis T.' },
    { quote: 'Meget brugbart CRO – vi planlægger allerede forbedringer.', name: 'Frederik M.' },
    { quote: 'Super seriøs og hjælpsom fra første kontakt.', name: 'Dennis T.' },
]

export default function ReviewsTicker() {
    return (
        <div className="py-6 border-y border-neutral-800/30 overflow-hidden relative bg-neutral-950/50">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee gap-10 w-max" style={{ animationDuration: '35s' }}>
                {[...reviews, ...reviews].map((r, i) => (
                    <div key={i} className="flex items-center gap-3 whitespace-nowrap">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                                <span key={j} className="text-brand-500 text-xs">★</span>
                            ))}
                        </div>
                        <span className="text-sm text-neutral-400 italic">&ldquo;{r.quote}&rdquo;</span>
                        <span className="text-xs font-medium text-neutral-600">— {r.name}</span>
                        <span className="text-neutral-800 text-lg ml-4">·</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
