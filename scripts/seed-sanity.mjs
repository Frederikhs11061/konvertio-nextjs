// Seed script – uploader statisk data til Sanity
// Kør med: node scripts/seed-sanity.mjs

import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'x4du0gcn',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_TOKEN, // brug write-token fra miljøvariabel
})

// ─── Testimonials ────────────────────────────────────────────────────────────

const testimonials = [
    {
        _type: 'testimonial',
        quote: 'Tusind tak for det! Det ser rigtigt godt ud, og der er meget brugbart CRO til vores webshop. Det sætter vi kæmpe pris på — det er sådan noget der løfter vores virksomhed! Kæmpe anbefaling.',
        name: 'ByMøller',
        company: 'bymoller.com',
        initial: 'B',
        order: 1,
    },
    {
        _type: 'testimonial',
        quote: 'Vi fandt mange værdifulde indsigter. Pointerne omkring at skelne tydeligere mellem homepage og produktsider gav rigtig god mening. Vi planlægger allerede, hvordan vi fanger forbrugeren tidligere.',
        name: 'Frederik Møller',
        company: 'Corelabs · corelabs.dk',
        initial: 'F',
        order: 2,
    },
    {
        _type: 'testimonial',
        quote: 'Super god oplevelse. Vi fik en meget grundig og professionel gennemgang med konkrete anbefalinger. Det er tydeligt at der er tænkt over både design, brugeroplevelse og konvertering. Kan klart anbefales.',
        name: 'Rambergbrand.dk',
        company: 'E-commerce',
        initial: 'R',
        order: 3,
    },
    {
        _type: 'testimonial',
        quote: 'Super seriøs og hjælpsom. Stoppede ikke før jeg var tilfreds. Kan kun anbefale hvis i søger en dedikeret person. Det er ikke sidste gang jeg søger hjælp her.',
        name: 'Dennis Thøgersen',
        company: 'Ejer · grisekongen.dk',
        initial: 'D',
        order: 4,
    },
]

// ─── FAQ Kategorier ───────────────────────────────────────────────────────────

const faqCategories = [
    {
        _type: 'faqCategory',
        name: 'Static Ads',
        order: 1,
        items: [
            { _key: 'sa1', q: 'Hvad er static ads og hvorfor skal jeg bruge dem?', a: 'Static ads er simple billedannoncer uden animation eller video. De er effektive fordi de loader hurtigt, fungerer på alle enheder, og når de designes rigtigt, kan de stoppe scroll og drive konverteringer. De er også billigere at producere end video og nemmere at teste i større mængder.' },
            { _key: 'sa2', q: 'Hvor mange static ads har jeg brug for?', a: 'Det afhænger af din budget og test-strategi. Jeg anbefaler mindst 5 forskellige creatives for at teste hvad der virker. Med Growth-pakken får du 10 creatives med forskellige pain points og vinkler, hvilket giver bedre data at arbejde med.' },
            { _key: 'sa3', q: 'Hvilke sociale medier kan jeg bruge static ads på?', a: 'Static ads fungerer på alle platforme: Facebook, Instagram, LinkedIn, Pinterest, TikTok (som billeder), og Snapchat. Jeg designer dem i de korrekte formater til hver platform.' },
            { _key: 'sa4', q: 'Hvad er forskellen på static ads og video ads?', a: 'Static ads er hurtigere at producere, billigere, og nemmere at teste. Video ads kan være mere engagerende men kræver mere produktion. I min erfaring kan well-designed static ads ofte matche eller overgå video i ROAS, især i test-fasen.' },
            { _key: 'sa5', q: 'Hvad koster det at få lavet static ads?', a: 'Jeg tilbyder tre pakker: Starter (5 ads) for 1.495 kr., Growth (10 ads) for 2.795 kr., og Scale (20 ads) for 4.995 kr. Der er ingen skjulte gebyrer – prisen inkluderer research, design og revisioner.' },
            { _key: 'sa6', q: 'Hvor lang tid tager det at få leveret static ads?', a: 'Starter (5 ads) leveres inden for 5 hverdage. Growth (10 ads) leveres inden for 7 hverdage. Hvis du har brug for det hurtigere, så spørg – jeg kan ofte finde en løsning.' },
        ],
    },
    {
        _type: 'faqCategory',
        name: 'Shopify & E-commerce',
        order: 2,
        items: [
            { _key: 'sh1', q: 'Hvor meget koster det at få bygget en Shopify webshop?', a: 'Prisen afhænger af kompleksiteten. En simpel webshop kan bygges for 8.000-15.000 kr., mens en mere avanceret med custom funktioner kan koste 20.000-40.000 kr. Jeg giver altid en fast pris inden vi starter.' },
            { _key: 'sh2', q: 'Hvor lang tid tager det at bygge en webshop?', a: 'En standard Shopify webshop tager typisk 2-4 uger afhængigt af kompleksiteten og hvor meget indhold du allerede har klar (tekster, billeder, produkter).' },
            { _key: 'sh3', q: 'Kan du optimere min eksisterende Shopify webshop?', a: 'Ja, absolut. Jeg tilbyder CRO-audit og optimering af eksisterende webshops. Det kan være alt fra hastighedsoptimering og design-forbedringer til checkout-optimering og app-opsætning.' },
            { _key: 'sh4', q: 'Hvad er CRO og hvorfor er det vigtigt?', a: 'CRO (Conversion Rate Optimization) handler om at få flere af dine besøgende til at handle. Hvis du har 100 besøgende og 1 køber, er din konverteringsrate 1%. Med CRO arbejder vi på at få det tal op – måske til 2% eller 3%. Det betyder dobbelt så mange salg uden at bruge mere på markedsføring.' },
            { _key: 'sh5', q: 'Skal jeg vælge Shopify eller WooCommerce?', a: 'Shopify er bedst hvis du vil hurtigt i gang uden teknisk viden. WooCommerce er bedst hvis du vil have fuld kontrol og har teknisk kompetencer. Jeg hjælper med begge platforme og kan rådgive dig om hvad der passer bedst til dit projekt.' },
        ],
    },
    {
        _type: 'faqCategory',
        name: 'Priser & Samarbejde',
        order: 3,
        items: [
            { _key: 'pr1', q: 'Hvad koster static ads?', a: 'Jeg tilbyder tre pakker: Starter (5 ads) for 1.495 kr., Growth (10 ads) for 2.795 kr., og Scale (20 ads) for 4.995 kr. Der er ingen skjulte gebyrer.' },
            { _key: 'pr2', q: 'Hvordan foregår betalingen?', a: 'For static ads pakkerne betales 50% ved bestilling og 50% ved levering. For større projekter som webshops aftaler vi en betalingsplan med milepæle.' },
            { _key: 'pr3', q: 'Tilbyder du abonnementsløsninger?', a: 'Ja, jeg tilbyder månedlige abonnementsløsninger for virksomheder der har brug for løbende levering af creatives. Det er ideelt for dig der kører ads kontinuerligt og har brug for friske creatives hver måned.' },
            { _key: 'pr4', q: 'Hvad hvis jeg ikke er tilfreds?', a: 'Jeg stopper ikke før du er tilfreds. Hvis du ikke er glad for resultatet, arbejder vi videre indtil du er. Det er en del af mit løfte til alle kunder.' },
        ],
    },
    {
        _type: 'faqCategory',
        name: 'Facebook & Instagram Ads',
        order: 4,
        items: [
            { _key: 'fb1', q: 'Hvad koster det at køre Facebook Ads?', a: 'Det afhænger af din målgruppe og konkurrence. Jeg anbefaler mindst 5.000-10.000 kr. om måneden for at få nok data til at optimere. Dit ad spend er separat fra mit honorar for at oprette og administrere kampagner.' },
            { _key: 'fb2', q: 'Hvor lang tid tager det før Facebook Ads virker?', a: 'Det varierer, men regn med 2-4 uger i test-fasen hvor vi finder ud af hvad der virker. Herefter kan vi skalere det der virker. Tålmodighed er vigtigt – Facebooks algoritme har brug for tid og data.' },
            { _key: 'fb3', q: 'Kan du hjælpe med at opsætte Facebook Ads?', a: 'Ja, jeg tilbyder opsætning og administration af Facebook og Instagram Ads. Det inkluderer strategi, opsætning af kampagner, løbende optimering, og månedlig rapportering.' },
            { _key: 'fb4', q: 'Hvad er forskellen på Advantage+ og manuelle kampagner?', a: 'Advantage+ er Metas AI-drevne kampagner der automatisk optimerer for konverteringer. Manuelle kampagner giver dig mere kontrol. Jeg bruger ofte en kombination – Advantage+ til skalering og manuelle kampagner til test.' },
        ],
    },
    {
        _type: 'faqCategory',
        name: 'CRO & Konvertering',
        order: 5,
        items: [
            { _key: 'cr1', q: 'Hvad er en god konverteringsrate?', a: 'Det afhænger af branchen. For e-commerce ligger gennemsnittet typisk mellem 1-3%. Men det vigtigste er at forbedre DIN konverteringsrate – ikke at sammenligne med andre.' },
            { _key: 'cr2', q: 'Hvordan måler jeg min konverteringsrate?', a: 'I Shopify finder du det under Analytics > Live View eller Reports. I Google Analytics 4 er det under Engagement > Conversions. Du kan også bruge tools som Hotjar til at se hvordan brugere interagerer med din side.' },
            { _key: 'cr3', q: 'Hvad er de vigtigste CRO quick wins?', a: '1) Forbedr dine produktbilleder, 2) Tilføj trust badges, 3) Reducer checkout felter, 4) Tilføj urgency (f.eks. "kun 3 tilbage"), 5) Forbedr dine CTA-knapper.' },
        ],
    },
    {
        _type: 'faqCategory',
        name: 'Om Konvertio',
        order: 6,
        items: [
            { _key: 'om1', q: 'Hvem er du?', a: 'Jeg hedder Frederik Høgh Simonsen, er bosat i Viborg, og har passion for e-commerce og digital markedsføring. Jeg hjælper danske virksomheder med at vækste online gennem effektive static ads, CRO-optimering og Shopify-webshops.' },
            { _key: 'om2', q: 'Arbejder du kun med danske virksomheder?', a: 'Primært ja, men jeg arbejder også med internationale virksomheder der vil ind på det danske marked. Min ekspertise er i dansk e-commerce og forbrugeradfærd.' },
            { _key: 'om3', q: 'Hvordan kommer jeg i gang?', a: 'Send mig en besked via kontaktformularen eller på frederik@konvertio.dk. Så tager vi en uforpligtende snak om dine behov og mål, og jeg kommer med en anbefaling.' },
            { _key: 'om4', q: 'Hvad gør dig forskellig fra andre?', a: 'Jeg kombinerer teknisk viden om Shopify med kreativ ekspertise i static ads og CRO. Det betyder at jeg ser helheden – ikke bare isolerede dele. Jeg er også dedikeret til resultater og stopper ikke før du er tilfreds.' },
        ],
    },
]

// ─── Ydelser ──────────────────────────────────────────────────────────────────

const services = [
    {
        _type: 'service',
        slug: { _type: 'slug', current: 'static-ads' },
        title: 'Static Ads til Sociale Medier',
        shortTitle: 'Static Ads',
        description: 'Analysebaserede static ads der dekonstruerer dine winners og skaber variationer baseret på CRO-principper, beslutningspsykologi og konverteringsmønstre – ikke kreativt gætteri.',
        shortDescription: 'Analysebaserede static ads der stopper scroll og driver konverteringer.',
        icon: 'Target',
        features: [
            'Meta-arkivgennemgang og CRO-vurdering',
            'Dekonstruktion af eksisterende winners',
            'Benefit-hooks & emotionelle angles',
            'Visuelle beslutningssignaler',
            'Long-form copy varianter inkluderet',
        ],
        benefits: [
            'Højere ROAS baseret på data, ikke gætteri',
            'Systematisk iteration af vindende koncepter',
            'Lavere CPC med CRO-baserede creatives',
            'Skalerbar test-strategi',
        ],
        packages: [
            {
                _key: 'pkg1',
                name: 'Starter – 5 ads',
                price: '1.495 kr.',
                description: 'Perfekt til at komme i gang med static ads og teste hvad der virker for din målgruppe.',
                features: ['5 static creatives', 'Meta-arkiv research + CRO-vurdering', 'Dekonstruktion af eksisterende winners', 'Long-form copy varianter inkluderet', 'Levering inden for 5 hverdage'],
                popular: false,
            },
            {
                _key: 'pkg2',
                name: 'Growth – 10 ads',
                price: '2.795 kr.',
                description: 'Ideel når du vil teste flere pain points og vinkler for at finde de vindende koncepter.',
                features: ['10 static creatives', 'Dybdegående research + flere pain-vinkler', 'Benefit-hooks & emotionelle angles', 'A/B test anbefalinger', 'Levering inden for 7 hverdage'],
                popular: true,
            },
            {
                _key: 'pkg3',
                name: 'Scale – 20 ads',
                price: '4.995 kr.',
                description: 'Til dig der vil skale test og have mange creatives klar til kampagner.',
                features: ['20 static creatives', 'Fuld research og flere vinkler', 'Long-form copy varianter', 'Prioriteret levering', 'Leveringstid aftales'],
                popular: false,
            },
        ],
        packageNote: 'Ved større batches (fx 40 ads) aftales pris og levering individuelt.',
        process: [
            { _key: 'p1', step: 1, title: 'Research', description: 'Jeg dykker ned i din målgruppe, konkurrenter og pain points.' },
            { _key: 'p2', step: 2, title: 'Konceptudvikling', description: 'Jeg udvikler flere kreative koncepter med forskellige vinkler.' },
            { _key: 'p3', step: 3, title: 'Design', description: 'Jeg designer dine static ads i de korrekte formater.' },
            { _key: 'p4', step: 4, title: 'Revision', description: 'Du får mulighed for at give feedback og få justeringer lavet.' },
            { _key: 'p5', step: 5, title: 'Levering', description: 'Du modtager alle filer klar til upload i Ads Manager.' },
        ],
        metaTitle: 'Static Ads til Sociale Medier | Konvertio',
        metaDescription: 'Få professionelle static ads der stopper scroll og driver konverteringer. Pakker fra 1.495 kr. Hurtig levering.',
    },
    {
        _type: 'service',
        slug: { _type: 'slug', current: 'cro-analyse' },
        title: 'CRO Analyse & Audit',
        shortTitle: 'CRO Analyse',
        description: 'Dybdegående gennemgang af din webshop med konkrete anbefalinger til at øge din konverteringsrate.',
        shortDescription: 'Få flere af dine besøgende til at handle med CRO-optimering.',
        icon: 'TrendingUp',
        features: ['Komplet webshop gennemgang', 'Data-analyse', 'Konkrete anbefalinger', 'Prioriteret handlingsplan', 'Implementeringsguide'],
        benefits: ['Højere konverteringsrate', 'Mere omsætning uden mere trafik', 'Bedre brugeroplevelse', 'Lavere customer acquisition cost'],
        packages: [
            {
                _key: 'pkg1',
                name: 'CRO Audit',
                price: '4.995 kr.',
                description: 'Komplet gennemgang af din webshop med konkrete anbefalinger.',
                features: ['Gennemgang af hele købsflowet', 'Data-analyse (hvis tilgængelig)', '10-15 konkrete anbefalinger', 'Prioriteret handlingsplan', 'PDF rapport'],
                popular: false,
            },
            {
                _key: 'pkg2',
                name: 'CRO Audit + Implementering',
                price: '9.995 kr.',
                description: 'Audit plus jeg implementerer de vigtigste ændringer for dig.',
                features: ['Alt fra CRO Audit', 'Implementering af top 5 ændringer', 'A/B test opsætning', 'Opfølgning efter 30 dage'],
                popular: true,
            },
        ],
        metaTitle: 'CRO Analyse & Audit | Konvertio',
        metaDescription: 'Få en dybdegående CRO-analyse af din webshop. Konkrete anbefalinger der øger din konverteringsrate.',
    },
    {
        _type: 'service',
        slug: { _type: 'slug', current: 'shopify-webshop' },
        title: 'Shopify Webshop',
        shortTitle: 'Shopify',
        description: 'Professionel opsætning og optimering af Shopify-webshops der konverterer besøgende til kunder.',
        shortDescription: 'Få en Shopify webshop der konverterer besøgende til kunder.',
        icon: 'ShoppingBag',
        features: ['Professionel opsætning', 'Tema-tilpasning', 'App integration', 'Checkout-optimering', 'Mobil-optimering'],
        benefits: ['Hurtigere time-to-market', 'Professionelt design', 'Optimeret for konvertering', 'Skalerbar løsning'],
        packages: [
            {
                _key: 'pkg1',
                name: 'Shopify Basis',
                price: '8.995 kr.',
                description: 'Perfekt til nye webshops der vil hurtigt i gang.',
                features: ['Shopify opsætning', 'Tema installation og tilpasning', 'Op til 20 produkter', 'Betaling og fragt opsætning', 'Grundlæggende SEO'],
                popular: false,
            },
            {
                _key: 'pkg2',
                name: 'Shopify Pro',
                price: '19.995 kr.',
                description: 'Komplet løsning med custom design og avancerede funktioner.',
                features: ['Alt fra Basis', 'Custom tema-tilpasning', 'Avancerede apps', 'CRO-optimering', 'Ubegrænsede produkter', '3 måneders support'],
                popular: true,
            },
        ],
        metaTitle: 'Shopify Webshop Udvikling | Konvertio',
        metaDescription: 'Få en professionel Shopify webshop der konverterer. Opsætning, design og optimering.',
    },
    {
        _type: 'service',
        slug: { _type: 'slug', current: 'wordpress-website' },
        title: 'WordPress & Websites',
        shortTitle: 'Websites',
        description: 'Skræddersyede websites med høj performance og unikt design til din virksomhed.',
        shortDescription: 'Professionelle websites med høj performance og unikt design.',
        icon: 'Globe',
        features: ['Unikt design', 'Høj performance', 'SEO-optimeret', 'Mobil-venligt', 'Nemt at vedligeholde'],
        benefits: ['Professionelt udtryk', 'Hurtig loading tid', 'Bedre SEO-rankinger', 'Fuld kontrol over indhold'],
        packages: [
            {
                _key: 'pkg1',
                name: 'Website Basis',
                price: '7.995 kr.',
                description: 'Perfekt til mindre virksomheder der skal have en professionel hjemmeside.',
                features: ['Op til 5 sider', 'Responsivt design', 'Kontaktformular', 'Grundlæggende SEO', 'Google Analytics opsætning'],
                popular: false,
            },
            {
                _key: 'pkg2',
                name: 'Website Pro',
                price: '14.995 kr.',
                description: 'Komplet løsning med avancerede funktioner og custom design.',
                features: ['Op til 10 sider', 'Custom design', 'Blog opsætning', 'Avanceret SEO', 'Speed optimering', '3 måneders support'],
                popular: true,
            },
        ],
        metaTitle: 'WordPress & Website Udvikling | Konvertio',
        metaDescription: 'Få et professionelt website med høj performance og unikt design. WordPress og custom løsninger.',
    },
]

// ─── Blogindlæg ───────────────────────────────────────────────────────────────

const blogPosts = [
    {
        _type: 'blogPost',
        slug: { _type: 'slug', current: '5-cro-tips' },
        title: '5 CRO-tips der øger din konvertering med 30%',
        excerpt: 'Lær de mest effektive teknikker til at optimere din webshop og øge salget uden at øge din marketingbudget.',
        author: 'Frederik Høgh Simonsen',
        publishedAt: '2026-02-15',
        readTime: '5 min',
        category: 'CRO',
        metaTitle: '5 CRO-tips der øger konverteringen med 30% | Konvertio',
        metaDescription: 'Lær 5 effektive CRO-teknikker til at optimere din webshop og øge salget. Konkrete tips du kan implementere i dag.',
    },
    {
        _type: 'blogPost',
        slug: { _type: 'slug', current: 'shopify-checkout-optimering' },
        title: 'Sådan optimerer du din Shopify checkout',
        excerpt: 'En komplet guide til at reducere abandoned carts og øge din gennemførelsesrate i checkout-flowet.',
        author: 'Frederik Høgh Simonsen',
        publishedAt: '2026-02-10',
        readTime: '7 min',
        category: 'Shopify',
        metaTitle: 'Shopify Checkout Optimering Guide | Konvertio',
        metaDescription: 'Komplet guide til at reducere abandoned carts og øge gennemførelsesraten i din Shopify checkout.',
    },
    {
        _type: 'blogPost',
        slug: { _type: 'slug', current: 'hastighedsoptimering-webshop' },
        title: 'Hvorfor din webshop har brug for hastighedsoptimering',
        excerpt: 'Hastighed påvirker både SEO og konvertering. Her er hvorfor og hvordan du optimerer din webshops performance.',
        author: 'Frederik Høgh Simonsen',
        publishedAt: '2026-02-05',
        readTime: '6 min',
        category: 'Performance',
        metaTitle: 'Hastighedsoptimering for Webshops | Konvertio',
        metaDescription: 'Lær hvorfor hastighed påvirker SEO og konvertering, og hvordan du optimerer din webshops performance.',
    },
    {
        _type: 'blogPost',
        slug: { _type: 'slug', current: 'static-ads-der-virker' },
        title: 'Sådan laver du static ads der faktisk konverterer',
        excerpt: 'Static ads er ikke døde – de er stadig en af de mest effektive annonceformater. Lær hvordan du laver nogle der virker.',
        author: 'Frederik Høgh Simonsen',
        publishedAt: '2026-02-01',
        readTime: '8 min',
        category: 'Static Ads',
        metaTitle: 'Static Ads der Konverterer: Komplet Guide | Konvertio',
        metaDescription: 'Lær hvordan du laver static ads der stopper scroll og driver konverteringer. Komplet guide med praktiske tips.',
    },
    {
        _type: 'blogPost',
        slug: { _type: 'slug', current: 'facebook-ads-strategi-2026' },
        title: 'Facebook Ads strategi for e-commerce i 2026',
        excerpt: 'Facebook Ads har ændret sig. Her er den strategi der virker lige nu for danske webshops.',
        author: 'Frederik Høgh Simonsen',
        publishedAt: '2026-01-25',
        readTime: '10 min',
        category: 'Facebook Ads',
        metaTitle: 'Facebook Ads Strategi 2026 for E-commerce | Konvertio',
        metaDescription: 'Den Facebook Ads strategi der virker i 2026. Lær hvordan du skalerer dine kampagner for danske webshops.',
    },
    {
        _type: 'blogPost',
        slug: { _type: 'slug', current: 'ugc-ads-guide' },
        title: 'UGC Ads: Sådan bruger du brugergenereret indhold i din markedsføring',
        excerpt: 'User Generated Content er guld værd. Lær hvordan du får og bruger UGC i dine annoncer.',
        author: 'Frederik Høgh Simonsen',
        publishedAt: '2026-01-20',
        readTime: '6 min',
        category: 'UGC',
        metaTitle: 'UGC Ads Guide: Brugergenereret Indhold | Konvertio',
        metaDescription: 'Lær hvordan du bruger UGC (User Generated Content) i dine annoncer for at øge konverteringen med 15-30%.',
    },
    {
        _type: 'blogPost',
        slug: { _type: 'slug', current: 'hvad-er-cro' },
        title: 'Hvad er CRO? Komplet guide til konverteringsoptimering',
        excerpt: 'CRO (Conversion Rate Optimization) kan øge din omsætning uden at øge dit marketingbudget. Lær hvordan her.',
        author: 'Frederik Høgh Simonsen',
        publishedAt: '2026-01-15',
        readTime: '8 min',
        category: 'CRO',
        metaTitle: 'Hvad er CRO? Guide til Konverteringsoptimering | Konvertio',
        metaDescription: 'Komplet guide til CRO (Conversion Rate Optimization). Lær hvordan du øger din konverteringsrate og får mere ud af din trafik.',
    },
    {
        _type: 'blogPost',
        slug: { _type: 'slug', current: 'shopify-vs-woocommerce' },
        title: 'Shopify vs WooCommerce: Hvilken platform skal du vælge?',
        excerpt: 'Skal du vælge Shopify eller WooCommerce til din webshop? Her er en sammenligning af de to populære platforme.',
        author: 'Frederik Høgh Simonsen',
        publishedAt: '2026-01-10',
        readTime: '7 min',
        category: 'Shopify',
        metaTitle: 'Shopify vs WooCommerce: Sammenligning | Konvertio',
        metaDescription: 'Sammenligning af Shopify og WooCommerce. Lær fordele og ulemper ved begge platforme og find den rette til din webshop.',
    },
]

// ─── Siteindstillinger (singleton) ────────────────────────────────────────────

const siteSettings = {
    _type: 'siteSettings',
    _id: 'siteSettings',
    hero: {
        badge: 'Hurtig levering · Professionelt resultat',
        title1: 'Mere salg.',
        titleHighlight: 'Bedre ads.',
        title2: 'Højere konvertering.',
        subtitle: 'Jeg hjælper danske e-commerce virksomheder med at skaffe flere kunder gennem analysebaserede static ads, CRO-optimering og konverterende Shopify-webshops.',
        ctaPrimary: 'Se mine ydelser',
        ctaSecondary: 'Kontakt mig',
    },
    contact: {
        email: 'frederik@konvertio.dk',
        linkedin: 'https://www.linkedin.com/in/frederikhs/',
        location: 'Viborg, Danmark',
    },
    about: {
        title: 'Om mig',
        intro: 'Jeg hedder Frederik Høgh Simonsen og hjælper danske e-commerce virksomheder med at vækste online.',
        body: 'Mit fokus er på det der virker: analysebaserede static ads der stopper scroll, CRO-optimeringer der øger konverteringen, og Shopify-webshops der er bygget til at konvertere.',
        closing: 'Jeg stopper ikke før du er tilfreds – det er mit løfte til alle kunder.',
    },
}

// ─── Seed ─────────────────────────────────────────────────────────────────────

async function seed() {
    if (!process.env.SANITY_TOKEN) {
        console.error('❌ Mangler SANITY_TOKEN miljøvariabel')
        console.error('   Hent dit write-token fra: https://www.sanity.io/manage/personal/project/x4du0gcn/api')
        console.error('   Kør derefter: SANITY_TOKEN=<dit-token> node scripts/seed-sanity.mjs')
        process.exit(1)
    }

    console.log('🌱 Starter seed...\n')

    // Anmeldelser
    console.log('📝 Uploader anmeldelser...')
    for (const t of testimonials) {
        const id = `testimonial-${t.order}`
        const doc = await client.createOrReplace({ ...t, _id: id })
        console.log(`   ✅ ${doc.name}`)
    }

    // FAQ
    console.log('\n📝 Uploader FAQ kategorier...')
    for (const cat of faqCategories) {
        const id = `faqCategory-${cat.order}`
        const doc = await client.createOrReplace({ ...cat, _id: id })
        console.log(`   ✅ ${doc.name}`)
    }

    // Ydelser
    console.log('\n📝 Uploader ydelser...')
    for (const s of services) {
        const doc = await client.createOrReplace({ ...s, _id: `service-${s.slug.current}` })
        console.log(`   ✅ ${doc.title}`)
    }

    // Blogindlæg
    console.log('\n📝 Uploader blogindlæg...')
    for (const post of blogPosts) {
        const doc = await client.createOrReplace({ ...post, _id: `blog-${post.slug.current}` })
        console.log(`   ✅ ${doc.title}`)
    }

    // Siteindstillinger
    console.log('\n📝 Uploader siteindstillinger...')
    await client.createOrReplace(siteSettings)
    console.log('   ✅ Siteindstillinger')

    console.log('\n🎉 Seed færdig! Åbn https://konvertio.sanity.studio for at se indholdet.')
}

seed().catch((err) => {
    console.error('❌ Seed fejlede:', err.message)
    process.exit(1)
})
