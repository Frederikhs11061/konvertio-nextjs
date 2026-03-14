import { client } from './client'
import { allFaqCategoriesQuery } from './queries'

// Static fallback – matches the shape used in faq/page.tsx
const staticFaq = [
    { name: 'Static Ads', items: [
        { q: 'Hvad er static ads og hvorfor skal jeg bruge dem?', a: 'Static ads er simple billedannoncer uden animation eller video. De er effektive fordi de loader hurtigt, fungerer på alle enheder, og når de designes rigtigt, kan de stoppe scroll og drive konverteringer.' },
        { q: 'Hvad koster static ads?', a: 'Jeg tilbyder flere pakker: 5 ads for 1.495 kr., 10 ads for 2.795 kr., 20 ads for 4.995 kr. Ingen skjulte gebyrer.' },
        { q: 'Hvor lang tid tager det at få leveret static ads?', a: '5 creatives leveres inden for 5 hverdage. 10 creatives inden for 7 hverdage.' },
    ]},
    { name: 'Shopify & E-commerce', items: [
        { q: 'Hvor meget koster det at få bygget en Shopify webshop?', a: 'Prisen afhænger af kompleksiteten. En simpel webshop kan bygges for 8.000-15.000 kr., mens en mere avanceret med custom funktioner kan koste 20.000-40.000 kr.' },
        { q: 'Hvad er CRO og hvorfor er det vigtigt?', a: 'CRO (Conversion Rate Optimization) handler om at få flere af dine besøgende til at handle. Med CRO kan du fordoble dine salg uden at bruge mere på markedsføring.' },
    ]},
    { name: 'Priser & Samarbejde', items: [
        { q: 'Hvad hvis jeg ikke er tilfreds?', a: 'Jeg stopper ikke før du er tilfreds. Det er en del af mit løfte til alle kunder.' },
        { q: 'Tilbyder du abonnementsløsninger?', a: 'Ja, månedlige abonnementer til virksomheder der løbende har brug for friske creatives.' },
    ]},
]

const isConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export async function getAllFaqCategories() {
    if (!isConfigured) return staticFaq
    try {
        const items = await client.fetch(allFaqCategoriesQuery)
        return items && items.length > 0 ? items : staticFaq
    } catch {
        return staticFaq
    }
}
