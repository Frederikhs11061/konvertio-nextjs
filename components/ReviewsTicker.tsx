'use client'

const reviews = [
    { quote: 'Kæmpe anbefaling – løftede vores virksomhed!', name: 'ByMøller', initials: 'BM', role: 'E-commerce' },
    { quote: 'Konkrete anbefalinger der gav mening fra dag 1.', name: 'Corelabs', initials: 'CL', role: 'Tech' },
    { quote: 'Grundig og professionel med fokus på konvertering.', name: 'Rambergbrand', initials: 'RB', role: 'Brand' },
    { quote: 'Stoppede ikke før jeg var tilfreds. Kan kun anbefale.', name: 'Dennis T.', initials: 'DT', role: 'Shopify' },
    { quote: 'Meget brugbart CRO til vores webshop.', name: 'ByMøller', initials: 'BM', role: 'CRO' },
    { quote: 'Vi planlægger allerede forbedringer fra gennemgangen.', name: 'Frederik M.', initials: 'FM', role: 'Marketing' },
]

const row2 = [
    { quote: 'Hurtig levering og super høj kvalitet på ads.', name: 'Kasper H.', initials: 'KH', role: 'Ads' },
    { quote: 'Static ads der faktisk konverterer – imponeret!', name: 'LivingRoom', initials: 'LR', role: 'Retail' },
    { quote: 'Professionel fra start til slut. Stærkt arbejde.', name: 'Maria S.', initials: 'MS', role: 'E-commerce' },
    { quote: 'Øgede vores ROAS markant på bare 2 uger.', name: 'NordicShop', initials: 'NS', role: 'Facebook Ads' },
    { quote: 'Bedste investering vi har gjort i lang tid.', name: 'Thomas K.', initials: 'TK', role: 'Shopify' },
]

function ReviewCard({ r }: { r: typeof reviews[0] }) {
    return (
        <div className="group flex flex-col gap-3 bg-white/80 backdrop-blur-sm border border-neutral-200/80 hover:border-brand-200 rounded-2xl px-5 py-4 w-72 flex-shrink-0 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-amber-400 text-sm leading-none">★</span>
                    ))}
                </div>
                <span className="text-[10px] font-medium text-brand-600 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-full">{r.role}</span>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed flex-1">
                &ldquo;{r.quote}&rdquo;
            </p>
            <div className="flex items-center gap-2.5 pt-1 border-t border-neutral-100">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[10px] font-bold">{r.initials}</span>
                </div>
                <p className="text-xs font-semibold text-neutral-600">{r.name}</p>
            </div>
        </div>
    )
}

export default function ReviewsTicker() {
    return (
        <div className="py-10 border-y border-blue-200/50 overflow-hidden relative bg-gradient-to-b from-blue-100/80 to-blue-50/80 space-y-4">
            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-100 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-100 to-transparent z-10 pointer-events-none" />

            {/* Row 1 – left */}
            <div className="flex gap-4 animate-marquee w-max" style={{ animationDuration: '55s' }}>
                {[...reviews, ...reviews].map((r, i) => (
                    <ReviewCard key={i} r={r} />
                ))}
            </div>

            {/* Row 2 – right (reverse) */}
            <div className="flex gap-4 animate-marquee-reverse w-max" style={{ animationDuration: '65s' }}>
                {[...row2, ...row2].map((r, i) => (
                    <ReviewCard key={i} r={r} />
                ))}
            </div>
        </div>
    )
}
