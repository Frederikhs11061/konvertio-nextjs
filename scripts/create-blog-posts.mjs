import { createClient } from '@sanity/client'
import https from 'https'
import http from 'http'

const TOKEN = process.env.SANITY_SEED_TOKEN
const PROJECT_ID = 'x4du0gcn'
const DATASET = 'production'

const client = createClient({ projectId: PROJECT_ID, dataset: DATASET, apiVersion: '2024-01-01', useCdn: false, token: TOKEN })

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject)
      }
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve({ buffer: Buffer.concat(chunks), contentType: res.headers['content-type'] }))
      res.on('error', reject)
    }).on('error', reject)
  })
}

async function uploadImage(url, filename) {
  console.log(`  Downloading image: ${url}`)
  const { buffer, contentType } = await fetchUrl(url)
  console.log(`  Uploading ${filename} (${buffer.length} bytes)...`)
  const asset = await client.assets.upload('image', buffer, { filename, contentType: contentType || 'image/jpeg' })
  console.log(`  Uploaded: ${asset._id}`)
  return asset._id
}

function block(text, style = 'normal') {
  return { _type: 'block', _key: `b_${Math.random().toString(36).slice(2)}`, style, markDefs: [], children: [{ _type: 'span', _key: `s_${Math.random().toString(36).slice(2)}`, marks: [], text }] }
}

function h2(text) { return block(text, 'h2') }
function h3(text) { return block(text, 'h3') }
function p(text) { return block(text, 'normal') }

function bullet(text, strong = '') {
  if (strong) {
    const key = `m_${Math.random().toString(36).slice(2)}`
    return { _type: 'block', _key: `b_${Math.random().toString(36).slice(2)}`, style: 'normal', level: 1, listItem: 'bullet', markDefs: [], children: [{ _type: 'span', _key: `s_${Math.random().toString(36).slice(2)}`, marks: ['strong'], text: strong }, { _type: 'span', _key: `s_${Math.random().toString(36).slice(2)}`, marks: [], text }] }
  }
  return { _type: 'block', _key: `b_${Math.random().toString(36).slice(2)}`, style: 'normal', level: 1, listItem: 'bullet', markDefs: [], children: [{ _type: 'span', _key: `s_${Math.random().toString(36).slice(2)}`, marks: [], text }] }
}

function pWithLink(beforeText, linkText, href, afterText = '') {
  const linkKey = `l_${Math.random().toString(36).slice(2)}`
  return {
    _type: 'block', _key: `b_${Math.random().toString(36).slice(2)}`, style: 'normal',
    markDefs: [{ _key: linkKey, _type: 'link', href }],
    children: [
      { _type: 'span', _key: `s_${Math.random().toString(36).slice(2)}`, marks: [], text: beforeText },
      { _type: 'span', _key: `s_${Math.random().toString(36).slice(2)}`, marks: [linkKey], text: linkText },
      { _type: 'span', _key: `s_${Math.random().toString(36).slice(2)}`, marks: [], text: afterText },
    ]
  }
}

const posts = [
  {
    slug: 'hvad-koster-static-ads',
    title: 'Hvad koster static ads i Danmark? [2026 priser]',
    metaTitle: 'Hvad koster static ads i Danmark? Priser 2026 | Konvertio',
    metaDescription: 'Se reelle priser på static ads i Danmark 2026. Hvad påvirker prisen? Og hvornår er det en god investering for din virksomhed?',
    excerpt: 'Overvejer du at investere i static ads men er usikker på hvad det koster? Her får du et realistisk billede af priserne i Danmark i 2026.',
    category: 'Static Ads',
    readTime: '5 min',
    publishedAt: '2026-03-10T00:00:00.000Z',
    imageQuery: 'advertising,marketing,creative',
    imageId: '1460925895917-afdab827c52f',
    content: [
      p('Prisen på static ads varierer meget – og det er svært at få et ærligt svar på nettet, fordi bureauer sjældent lægger priser frem. Denne artikel giver dig et realistisk billede af hvad du kan forvente at betale i Danmark i 2026, og hvad der påvirker prisen.'),
      h2('Hvad er static ads egentlig?'),
      p('Static ads er stillbilledannoncer – typisk i JPG eller PNG-format – der bruges på Facebook, Instagram og andre platforme. De er hurtige at producere, lave at teste og har vist sig at konvertere overraskende godt sammenlignet med video og animation. Nøglen er det rigtige design, headline og CTA.'),
      h2('Hvad påvirker prisen på static ads?'),
      p('Prisen afhænger primært af disse faktorer:'),
      bullet('Antal annoncer – en enkelt annonce er billigere end en fuld kreativ pakke'),
      bullet('Kompleksitet – simple produktbilleder med tekst er billigere end detaljerede layouts med multiple varianter'),
      bullet('Leverandør – freelancer vs. bureau har meget forskellig prisstruktur'),
      bullet('Revision og iterationer – hvor mange runder feedback er inkluderet?'),
      bullet('Strategi og tekstforfatning – er konceptet og copy inkluderet, eller leverer du det selv?'),
      h2('Typiske prisniveauer i Danmark 2026'),
      p('Her er et realistisk overblik over hvad du kan forvente:'),
      bullet('Simpel statisk annonce (et format, én variant): 500–1.500 kr.'),
      bullet('Annoncepakke (3–5 varianter, forskellige formater): 3.000–8.000 kr.'),
      bullet('Løbende samarbejde (månedlig leverance af kreatives): 5.000–15.000 kr./md.'),
      bullet('Bureauer med stort team og overhead: 15.000–40.000+ kr./md.'),
      p('Som freelancer leverer Konvertio fuld kreativ produktion til en pris der er markant lavere end bureaumarkedet – uden at gå på kompromis med kvaliteten.'),
      h2('Hvornår er det en god investering?'),
      p('Static ads giver bedst ROI når du:'),
      bullet('Allerede kører betalte annoncer og vil forbedre din click-through rate (CTR)'),
      bullet('Tester nye produkter eller tilbud og har brug for hurtigt at komme på markedet'),
      bullet('Har forsøgt video men synes det er dyrt og tidskrævende at producere'),
      bullet('Vil have konsistent visuel identitet på tværs af dine kampagner'),
      h2('Hvad indgår i en god static ad pakke?'),
      p('Udover selve designet bør en professionel leverance inkludere:'),
      bullet('Strategisk koncept baseret på din målgruppe og dit tilbud'),
      bullet('Konverterende copy (headline + primærtekst)'),
      bullet('Multiple formater til feed, stories og evt. display'),
      bullet('A/B varianter til test'),
      bullet('Leverance i korrekte størrelser og filformater'),
      pWithLink('Hos Konvertio er alt dette inkluderet. ', 'Se vores static ads pakker her', '/ydelser/static-ads', ' og find den løsning der passer til din virksomhed.'),
    ],
  },
  {
    slug: 'cro-analyse-hvad-er-det',
    title: 'CRO analyse: Hvad er det, hvad indgår, og hvad koster det?',
    metaTitle: 'CRO Analyse: Hvad er det og hvad koster det? | Konvertio',
    metaDescription: 'Hvad indgår i en CRO analyse? Se konkret hvad du får, hvad det typisk koster, og hvornår du bør investere i konverteringsoptimering.',
    excerpt: 'En CRO analyse kan afsløre præcis hvor din webshop mister kunder – og hvad du skal ændre. Her er hvad du kan forvente.',
    category: 'CRO',
    readTime: '6 min',
    publishedAt: '2026-03-08T00:00:00.000Z',
    imageQuery: 'analytics,dashboard,data',
    imageId: '1551288049-bebda4e38f71',
    content: [
      p('En CRO analyse (Conversion Rate Optimization analyse) er en systematisk gennemgang af din webshop eller hjemmeside med ét formål: at finde ud af præcis hvor du mister kunder – og hvad der skal til for at fikse det. Men hvad indgår egentlig i en analyse, og hvad koster det?'),
      h2('Hvad er en CRO analyse?'),
      p('CRO analyse er processen, hvor man systematisk kortlægger en webshops brugeroplevelse, tekniske performance og konverteringsflow for at identificere flaskehalse. Det er databaseret arbejde – ikke mavefornemmelser.'),
      p('En god analyse ser på: brugeradfærd via heatmaps og session recordings, teknisk performance (hastighed, mobiloplevelse), checkout-flow og drop-off punkter, tillid og troværdighed på siden, og tekstens evne til at konvertere.'),
      h2('Hvad indgår typisk i en CRO analyse?'),
      bullet('Teknisk audit – hastighed, Core Web Vitals, mobilvenlighed'),
      bullet('Heuristic evaluation – ekspert-gennemgang af UX og konverteringsbarrierer'),
      bullet('Analyse af Google Analytics / GA4 data – drop-off, bounce rate, brugerflow'),
      bullet('Heatmap- og session recording-analyse – hvor klikker brugerne, og hvornår forlader de siden?'),
      bullet('Checkout- og formularanalyse – præcis hvor i flowet sker drop-off?'),
      bullet('Konkurrentanalyse – hvad gør de bedste i din branche anderledes?'),
      bullet('Prioriteret handlingsplan – konkrete tiltag sorteret efter forventet effekt'),
      h2('Hvad koster en CRO analyse i Danmark?'),
      p('Priserne varierer meget afhængig af omfang og leverandør:'),
      bullet('Grundlæggende CRO rapport (freelancer): 3.000–8.000 kr.'),
      bullet('Fuld CRO analyse inkl. data + handlingsplan: 8.000–20.000 kr.'),
      bullet('Bureauanalyse med stort team: 20.000–60.000+ kr.'),
      p('Hos Konvertio leveres en komplet CRO analyse til en pris der matcher freelancer-markedet – men med den samme metodiske tilgang som de store bureauer.'),
      h2('Hvornår giver en CRO analyse mening?'),
      p('Det giver mening at investere i en CRO analyse når:'),
      bullet('Du bruger penge på trafik men ser lav konverteringsrate (under 1,5%)'),
      bullet('Du har lanceret en ny webshop og vil optimere fra start'),
      bullet('Du har for mange abandoned carts i din Shopify webshop'),
      bullet('Du ved at noget er galt, men kan ikke pinpointe problemet'),
      h2('Hvad kan du forvente af resultater?'),
      p('En gennemsnitlig e-commerce webshop i Danmark konverterer 1–2%. Med systematisk CRO-arbejde er det realistisk at løfte dette til 2,5–4% over 3–6 måneder. Det er ren ekstra omsætning uden at øge dit annoncebudget.'),
      pWithLink('Læs mere om ', 'vores CRO analyse pakke', '/ydelser/cro-analyse', ' og se præcis hvad du får inkluderet.'),
    ],
  },
  {
    slug: 'hvad-er-en-statisk-annonce',
    title: 'Hvad er en statisk annonce? Eksempler og hvornår du skal bruge dem',
    metaTitle: 'Hvad er en statisk annonce? Eksempler + guide 2026 | Konvertio',
    metaDescription: 'Hvad er en statisk annonce, og hvornår virker de bedst? Se eksempler, fordele og konkrete tips til at lave static ads der konverterer.',
    excerpt: 'Static ads er stillbilledannoncer der er overraskende effektive – hvis de er lavet rigtigt. Her er hvad du skal vide.',
    category: 'Static Ads',
    readTime: '5 min',
    publishedAt: '2026-03-06T00:00:00.000Z',
    imageQuery: 'social-media,advertising,design',
    imageId: '1611162616305-c69b3037c431',
    content: [
      p('Mange annoncører springer direkte til video og UGC, men overser dermed et af de mest effektive annonceformater: den statiske annonce – eller static ad. I denne guide forklarer vi præcis hvad det er, hvornår det virker, og hvad der adskiller en god static ad fra en middelmådig.'),
      h2('Hvad er en statisk annonce?'),
      p('En statisk annonce (static ad) er en stillbilledannonce – typisk i JPG eller PNG-format – der vises på Meta (Facebook og Instagram), Google Display, TikTok og andre platforme. I modsætning til video og GIFs bevæger den sig ikke.'),
      p('Det lyder simpelt – og det er det til dels. Men det er netop styrken. En veldesignet static ad stopper scrollet, kommunikerer budskabet på under 2 sekunder, og sender kunden direkte til en beslutning.'),
      h2('Eksempler på static ads der virker'),
      p('De bedst konverterende static ads har typisk disse elementer tilfælles:'),
      bullet('Et stærkt produktbillede eller menneskebillede der fanger blikket'),
      bullet('En kort, klar headline der kommunikerer den primære fordel'),
      bullet('Et synligt tilbud eller CTA (f.eks. "Få 20% rabat i dag")'),
      bullet('Tydelig branding uden at det dominerer hele annoncen'),
      bullet('Minimalt med tekst – budskabet skal gå hjem på 1–2 sekunder'),
      h2('Hvornår virker static ads bedre end video?'),
      p('Static ads er særligt effektive i disse situationer:'),
      bullet('Produktannoncer med enkelt, klart tilbud'),
      bullet('Retargeting – kunder der allerede kender dit brand'),
      bullet('Test af nye budskaber og tilbud (hurtig og billig produktion)'),
      bullet('Brancher hvor produktet "siger sig selv" visuelt'),
      bullet('Kampagner med begrænset produktionsbudget'),
      p('Video og UGC er stærke formater – men de koster mere at producere og kan drukne i feedet hvis indholdet ikke er rigtig godt. En veludført static ad kan i mange tilfælde overperforme video til en brøkdel af prisen.'),
      h2('Hvad koster det at lave static ads?'),
      p('En professionel static ad pakke fra en freelancer koster typisk 3.000–8.000 kr. for 3–5 varianter. Det inkluderer typisk strategi, copy og design i alle relevante formater.'),
      pWithLink('Se vores ', 'static ads pakker og priser', '/ydelser/static-ads', ' – og find den løsning der passer til din kampagne.'),
    ],
  },
  {
    slug: 'ab-test-shopify-guide',
    title: 'A/B test guide til din Shopify webshop: Kom i gang i dag',
    metaTitle: 'A/B test Shopify: Komplet guide til begyndere 2026 | Konvertio',
    metaDescription: 'Lær hvordan du sætter A/B tests op på din Shopify webshop. Hvad skal du teste, hvilke værktøjer skal du bruge, og hvad kan du forvente af resultater?',
    excerpt: 'A/B test er det vigtigste CRO-værktøj du har. Her er en praktisk guide til at komme i gang med test på din Shopify webshop.',
    category: 'CRO',
    readTime: '7 min',
    publishedAt: '2026-03-04T00:00:00.000Z',
    imageQuery: 'split-testing,analytics,computer',
    imageId: '1551434678-e076c223a692',
    content: [
      p('A/B test er fundamentet i enhver seriøs CRO-strategi. I stedet for at gætte hvad der virker bedre, lader du data bestemme. Men mange Shopify-ejere ved ikke hvordan de kommer i gang. Denne guide ændrer det.'),
      h2('Hvad er A/B test?'),
      p('A/B test (også kaldet split test) er en metode, hvor du viser to versioner af en side til dine besøgende – version A (den nuværende) og version B (din ændring) – og måler hvilken der konverterer bedst. Det er videnskabelig metode anvendt på e-commerce.'),
      h2('Hvad skal du A/B teste på din Shopify webshop?'),
      p('Start med det der har størst trafikvolumen og konverteringspotentiale:'),
      bullet('Produktside headline – fordel vs. produktnavn'),
      bullet('"Køb nu"-knappens farve og tekst'),
      bullet('Produktbillede – lifestyle vs. produktfoto'),
      bullet('Prisvising – med eller uden rabat-strik'),
      bullet('Trust badges placering – over eller under knappen?'),
      bullet('Antal produktbilleder – 3 billeder vs. 6 billeder'),
      bullet('Checkout knap placering – sticky vs. statisk'),
      h2('Hvilke værktøjer kan du bruge?'),
      p('Her er de mest populære A/B test-tools til Shopify:'),
      bullet('Google Optimize – gratis men begrænset (lukker ned)'),
      bullet('VWO (Visual Website Optimizer) – professionelt og prissat derefter'),
      bullet('Optimizely – enterprise niveau'),
      bullet('Shopify egne apps: Neat A/B Testing, Theme Scientist'),
      p('For de fleste Shopify-ejere er en kombination af GA4 og et simpelt split-test-app det bedste udgangspunkt.'),
      h2('Sådan sætter du din første A/B test op'),
      p('Følg disse trin:'),
      bullet('Identificér siden med mest trafik og lavest konverteringsrate'),
      bullet('Formulér én hypotese: "Hvis vi ændrer X, vil konverteringen stige fordi Y"'),
      bullet('Lav version B med kun ÉN ændring'),
      bullet('Sæt testen op i dit valgte tool og aktivér den'),
      bullet('Vent til du har mindst 500–1.000 besøgende per variant'),
      bullet('Vurder resultatet og implementer vinderen'),
      h2('Hvornår har du statistisk signifikans?'),
      p('En A/B test er kun valid når den har nok data. Som tommelfingerregel: du har brug for minimum 1.000 besøgende per variant og et konfidensniveau på mindst 95% før du tager en beslutning.'),
      p('For webshops med lav trafik (under 5.000 besøgende/mnd.) kan en CRO analyse være mere effektiv end direkte A/B test – fordi det tager for lang tid at samle nok data.'),
      pWithLink('Har du brug for hjælp til at sætte CRO-strategi op? ', 'Se vores CRO analyse pakke', '/ydelser/cro-analyse', '.'),
    ],
  },
  {
    slug: 'facebook-ads-foerste-kunde',
    title: 'Sådan får du din første kunde via Facebook Ads – trin for trin',
    metaTitle: 'Første kunde via Facebook Ads: Trin-for-trin guide 2026 | Konvertio',
    metaDescription: 'Lær præcis hvordan du sætter din første Facebook Ads kampagne op og finder din første betalende kunde. Praktisk guide til begyndere 2026.',
    excerpt: 'Mange starter med Facebook Ads og giver op for tidligt. Her er en klar guide til at få din første kunde gennem Meta-annoncering.',
    category: 'Facebook Ads',
    readTime: '8 min',
    publishedAt: '2026-03-02T00:00:00.000Z',
    imageQuery: 'social-media,facebook,marketing',
    imageId: '1563986768494-4dee2763ff3f',
    content: [
      p('Facebook Ads kan virke overvældende når du starter. Hvad skal du annoncere? Til hvem? Og med hvilket budget? Denne guide guider dig trin for trin gennem alt det du skal vide for at få din første kunde via Meta-annoncering.'),
      h2('Trin 1: Sæt Facebook Business Manager op'),
      p('Før du kan annoncere, skal du have en Business Manager-konto. Gå til business.facebook.com, opret en konto, og tilknyt din Facebook-side og Instagram-profil. Tilføj også dit betalingskort.'),
      h2('Trin 2: Installér Facebook Pixel'),
      p('Facebook Pixel er det stykke kode der sporer dine kunders handlinger på din hjemmeside. Det er afgørende for at optimere kampagner og retarget besøgende. Til Shopify er installationen et klik.'),
      h2('Trin 3: Definér din målgruppe'),
      p('Start simpelt. Definér din ideelle kunde:'),
      bullet('Alder og køn – hvem køber typisk dit produkt?'),
      bullet('Interesser – hvad er de interesserede i?'),
      bullet('Geografi – Danmark, eller specifike byer?'),
      bullet('Adfærd – online shoppere, betalingskortbrugere'),
      p('For begyndere anbefaler vi en bred målgruppe (Danmark, 25–54 år, relevant interesse) kombineret med Advantage+ audience til at lade Meta selv optimere.'),
      h2('Trin 4: Vælg det rigtige kampagnemål'),
      p('Til din første kampagne anbefaler vi Salg (Sales) som kampagnemål – og aktivér Advantage+ Shopping Campaign (ASC) hvis du kører Shopify. Det giver Meta mest frihed til at optimere mod konverteringer.'),
      h2('Trin 5: Lav din første annonce'),
      p('Her er det vigtigste: din kreative. En dårlig annonce med et godt tilbud vil underperforme. En stærk static ad med:'),
      bullet('Et enkelt, klart produktbillede der stopper scrollet'),
      bullet('En headline der kommunikerer den primære fordel på 5 ord'),
      bullet('Et konkret tilbud (rabat, gratis fragt, bonus)'),
      bullet('En klar CTA: "Shop nu", "Få 20% rabat i dag"'),
      p('Static ads er det billigste og hurtigste format at teste med som begynder.'),
      h2('Trin 6: Sæt et realistisk budget'),
      p('Som begynder anbefales et dagligt budget på 100–200 kr. i læringsperioden (de første 7–14 dage). Forvent ikke profit i starten – du betaler for data om hvad der virker for dit produkt og din målgruppe.'),
      h2('Hvornår ser du resultater?'),
      p('Meta Ads algoritmen bruger de første 50 konverteringer til at "lære". Forvent 2–4 uger og minimum 3.000–5.000 kr. i adspend inden du har nok data til at vurdere kampagnens potentiale.'),
      pWithLink('Vil du have professionel hjælp til dine static ad creatives? ', 'Se vores static ads pakke', '/ydelser/static-ads', ' og kom hurtigere i gang med annoncer der konverterer.'),
    ],
  },
  {
    slug: 'shopify-webshop-pris-2026',
    title: 'Shopify webshop pris: Hvad koster det at lave en webshop i 2026?',
    metaTitle: 'Shopify webshop pris 2026: Hvad koster det? | Konvertio',
    metaDescription: 'Se reelle priser på Shopify webshops i Danmark 2026. Hvad koster Shopify abonnement, design og udvikling? Komplet prisoversigt.',
    excerpt: 'Hvad koster det egentlig at få lavet en professionel Shopify webshop? Her er en ærlig gennemgang af alle omkostninger i 2026.',
    category: 'Shopify',
    readTime: '6 min',
    publishedAt: '2026-02-28T00:00:00.000Z',
    imageQuery: 'ecommerce,shopping,online-store',
    imageId: '1556742049-0cfed4f6a45d',
    content: [
      p('At få lavet en Shopify webshop kan koste alt fra 5.000 kr. til over 200.000 kr. Den store forskel skyldes ikke kvaliteten alene – det handler om scope, tilpasning og hvem du hyrer. Her er en ærlig gennemgang af hvad du rent faktisk kommer til at betale.'),
      h2('Shopify abonnementsomkostninger (løbende)'),
      p('Shopify opkræver et månedligt abonnement:'),
      bullet('Basic Shopify: ca. 270 kr./md. (1 bruger)'),
      bullet('Shopify: ca. 780 kr./md. (5 brugere, lavere transaktionsgebyr)'),
      bullet('Advanced Shopify: ca. 2.800 kr./md. (store webshops)'),
      p('Hertil kommer transaktionsgebyrer på 0,5–2% af omsætningen (medmindre du bruger Shopify Payments). For dansk e-commerce er Shopify Payments ikke tilgængeligt, så du vil typisk betale 0,5–1% i transaktionsgebyr oveni dit betalingsgateways gebyr.'),
      h2('Engangsomkostninger til design og udvikling'),
      p('Her er priserne der varierer mest:'),
      bullet('Shopify-tema fra theme store: 2.500–5.000 kr. (engangs)'),
      bullet('Simpel custom webshop via freelancer: 10.000–30.000 kr.'),
      bullet('Professionel Shopify webshop med fuld tilpasning: 30.000–80.000 kr.'),
      bullet('Kompleks webshop via bureau (B2B, integration, ERP): 80.000–300.000+ kr.'),
      h2('Løbende omkostninger du skal budgettere med'),
      p('Udover abonnementet skal du typisk betale for:'),
      bullet('Apps: 500–3.000 kr./md. afhængig af hvilke funktioner du har brug for'),
      bullet('Betalingsgateway: Quickpay, Stripe eller Nets – typisk 99–299 kr./md. + transaktioner'),
      bullet('E-mail marketing (Klaviyo, Omnisend): 200–2.000 kr./md.'),
      bullet('Løbende vedligeholdelse og optimering: 2.000–10.000 kr./md.'),
      h2('Hvad får du hos Konvertio?'),
      p('Hos Konvertio bygger vi Shopify webshops der er optimeret til konvertering fra dag ét. Vi bruger gennemtestede temaer tilpasset til din virksomhed – ingen unødvendig custom-kode der skaber vedligeholdelsesproblemer.'),
      pWithLink('Se vores ', 'Shopify webshop pakker og priser', '/ydelser/shopify-webshop', ' og find den løsning der matcher dit budget og dine behov.'),
    ],
  },
  {
    slug: 'landingsside-vs-hjemmeside',
    title: 'Landingsside vs hjemmeside: Hvornår skal du bruge hvad?',
    metaTitle: 'Landingsside vs hjemmeside: Hvad er forskellen? | Konvertio',
    metaDescription: 'Hvad er forskellen på en landingsside og en hjemmeside? Og hvornår skal du vælge hvad? Komplet guide til at træffe det rigtige valg.',
    excerpt: 'Mange virksomheder blander landingssider og hjemmesider sammen. Her er den præcise forskel – og hvornår du skal bruge hvad.',
    category: 'Webudvikling',
    readTime: '5 min',
    publishedAt: '2026-02-26T00:00:00.000Z',
    imageQuery: 'website,landing-page,design',
    imageId: '1547658719-da2b51169166',
    content: [
      p('Mange virksomheder investerer i en hjemmeside, men glemmer at spørge sig selv: er en hjemmeside egentlig det rigtige til det her formål? I mange tilfælde vil en dedikeret landingsside give markant bedre resultater.'),
      h2('Hvad er en hjemmeside?'),
      p('En hjemmeside er et komplet digitalt hjem for din virksomhed. Den har typisk: forside, om os, services/produkter, blog, kontakt. Formålet er at præsentere alt om virksomheden og tilfredsstille besøgende med mange forskellige intentioner.'),
      h2('Hvad er en landingsside?'),
      p('En landingsside er en enkeltsidet side designet med ét specifikt formål og ét specifikt call-to-action. Der er ingen navigationsmenu, ingen links til andre sider. Alt fokus er rettet mod ét mål: at få den besøgende til at gøre præcis det du vil have dem til.'),
      h2('Hvornår skal du bruge en landingsside?'),
      p('Landingssider er det rigtige valg når du:'),
      bullet('Kører betalte annoncer (Facebook Ads, Google Ads) – send aldrig annoncetrafik til din forside'),
      bullet('Promoterer et specifikt tilbud eller kampagne'),
      bullet('Vil have folk til at tilmelde sig en e-mail liste'),
      bullet('Lancerer et nyt produkt og vil teste interessen'),
      bullet('Afholder et webinar eller event'),
      h2('Hvornår skal du bruge en hjemmeside?'),
      p('En hjemmeside er det rigtige når:'),
      bullet('Du vil etablere en professionel online tilstedeværelse'),
      bullet('Kunderne googler din virksomhed og vil lære mere om dig'),
      bullet('Du har brug for at præsentere multiple services og produktkategorier'),
      bullet('Du ønsker en blog og SEO-strategi på sigt'),
      h2('Kan man have begge?'),
      p('Ja – og det er faktisk den bedste strategi. En stærk hjemmeside kombineret med dedikerede landingssider til dine betalte kampagner giver dig det bedste fra begge verdener. Din hjemmeside opbygger troværdighed. Dine landingssider konverterer annoncetrafikken.'),
      pWithLink('Hos Konvertio bygger vi begge dele. ', 'Se vores website og landingsside pakker', '/ydelser/websites', '.'),
    ],
  },
  {
    slug: 'shopify-vs-wordpress',
    title: 'Shopify vs WordPress: Hvad er bedst til din webshop i 2026?',
    metaTitle: 'Shopify vs WordPress 2026: Hvad er bedst til webshop? | Konvertio',
    metaDescription: 'Shopify eller WordPress/WooCommerce? Se den ærlige sammenligning af pris, fleksibilitet, SEO og skalerbarhed for danske webshops i 2026.',
    excerpt: 'Shopify vs WordPress er et af de mest stillede spørgsmål inden for e-commerce. Her er den ærlige sammenligning for 2026.',
    category: 'Shopify',
    readTime: '7 min',
    publishedAt: '2026-02-24T00:00:00.000Z',
    imageQuery: 'web-development,coding,laptop',
    imageId: '1547658719-da2b51169166',
    content: [
      p('Shopify eller WordPress med WooCommerce? Det er et af de spørgsmål jeg oftest får fra kunder der vil starte en webshop. Der er ikke et universelt rigtigt svar – men der er klare situationer, hvor det ene klart slår det andet.'),
      h2('Shopify: Fordele og ulemper'),
      p('Shopify er en dedikeret e-commerce platform bygget til at sælge produkter online. Det er en SaaS-løsning (Software as a Service), hvilket betyder at hosting, sikkerhed og opdateringer håndteres af Shopify.'),
      p('Fordele ved Shopify:'),
      bullet('Hurtig opsætning – du kan have en fungerende webshop på få dage'),
      bullet('Ingen teknisk vedligeholdelse – Shopify håndterer hosting og sikkerhed'),
      bullet('Stærkt checkout og betalingsflow out-of-the-box'),
      bullet('Stort app-bibliotek til udvidelse af funktioner'),
      bullet('Skalerer nemt fra 0 til millioner i omsætning'),
      p('Ulemper ved Shopify:'),
      bullet('Månedlig abonnementsomkostning (270–2.800 kr./md.)'),
      bullet('Transaktionsgebyrer ved tredjeparts betalingsgateways'),
      bullet('Begrænset fleksibilitet i design uden at røre kode'),
      bullet('Content-del og blog er ikke stærk nok til seriøs SEO'),
      h2('WordPress + WooCommerce: Fordele og ulemper'),
      p('WordPress er verdens mest brugte CMS, og WooCommerce er en gratis plugin der gør det til en e-commerce platform. Det er en open source-løsning du selv hoster.'),
      p('Fordele ved WordPress/WooCommerce:'),
      bullet('Fuld kontrol over kode og design'),
      bullet('Stærk SEO og blogging platform'),
      bullet('Ingen månedlig platform-abonnement (men hosting koster)'),
      bullet('Ubegrænset tilpasning'),
      p('Ulemper ved WordPress/WooCommerce:'),
      bullet('Kræver teknisk viden eller en udvikler til vedligeholdelse'),
      bullet('Sikkerhedsopdateringer er dit eget ansvar'),
      bullet('Checkout er ikke nær så poleret som Shopify out-of-the-box'),
      bullet('Plugins kan konflikte og skabe problemer'),
      h2('Hvem skal vælge hvad?'),
      p('Vælg Shopify hvis du vil fokusere på at sælge – ikke på at vedligeholde en hjemmeside. Det er det rigtige for de fleste e-commerce virksomheder i Danmark.'),
      p('Vælg WordPress/WooCommerce hvis du har en udvikler til rådighed og vil have fuld kontrol, eller hvis din primære forretning er content/affiliate og webshoppen er sekundær.'),
      pWithLink('Hos Konvertio anbefaler vi primært Shopify til vores kunder. ', 'Se vores Shopify webshop pakker', '/ydelser/shopify-webshop', '.'),
    ],
  },
  {
    slug: 'static-ads-vs-video-ads',
    title: 'Static ads vs video ads: Hvad virker bedst i 2026?',
    metaTitle: 'Static ads vs video ads 2026: Hvad virker bedst? | Konvertio',
    metaDescription: 'Static ads eller video ads – hvad giver bedst resultater i 2026? Se den ærlige sammenligning af CTR, pris og konvertering for danske annoncører.',
    excerpt: 'Det store spørgsmål i annonceverdenen: skal du bruge static ads eller video ads? Her er den datadrevne sammenligning for 2026.',
    category: 'Static Ads',
    readTime: '6 min',
    publishedAt: '2026-02-22T00:00:00.000Z',
    imageQuery: 'video,camera,production',
    imageId: '1492619375914-88005aa9e8fb',
    content: [
      p('Video ads er blevet fremhævet som "fremtiden" i mange år. Men tallene fortæller en mere nuanceret historie. I 2026 er static ads stadig et af de mest effektive annonceformater – i mange tilfælde bedre end video. Her er hvad data siger.'),
      h2('Hvad siger tallene om static ads vs video?'),
      p('Undersøgelser fra Meta, AdEspresso og Databox viser konsistent at:'),
      bullet('Static ads har generelt lavere CPM (cost per 1.000 visninger) end video'),
      bullet('Static ads loader hurtigere og vises fuldt ud – video stoppes når lyden er slukket'),
      bullet('I e-commerce er static ads ofte top-performende på retargeting'),
      bullet('Video vinder på brand awareness og top-of-funnel reach'),
      h2('Hvornår virker static ads bedst?'),
      p('Static ads performer bedst i disse situationer:'),
      bullet('Produktannoncer med enkelt budskab og stærkt visuelt produkt'),
      bullet('Retargeting af varme målgrupper der allerede kender dit brand'),
      bullet('Tidsbegrænsede tilbud og kampagner med klar CTA'),
      bullet('Testing af nye budskaber – hurtigt og billigt at producere'),
      bullet('Konverteringskampagner (salg, tilmeldinger, leads)'),
      h2('Hvornår virker video ads bedst?'),
      p('Video er stærkere i disse scenarier:'),
      bullet('Komplekse produkter der kræver demonstration (tech, SaaS, coaching)'),
      bullet('Brand awareness-kampagner til kolde målgrupper'),
      bullet('UGC og testimonial-annoncer fra rigtige kunder'),
      bullet('Produkter hvor bevægelse er en kernedel af oplevelsen (mode, sport)'),
      h2('Pris: Hvad koster hvad?'),
      p('Her er den reelle prisforskel:'),
      bullet('Professionel static ad pakke (3–5 varianter): 3.000–8.000 kr.'),
      bullet('Simpel produceret video (15–30 sek.): 5.000–20.000 kr.'),
      bullet('UGC-video med skaber: 2.000–8.000 kr. per video'),
      p('Static ads giver typisk bedre ROI på produksionskroner for de fleste SMV\'er – fordi du kan lave mange varianter til test for samme budget som én video.'),
      h2('Den bedste strategi: kombiner begge'),
      p('De dygtigste annoncører bruger ikke enten/eller – de bruger en kreativ mix. Static ads til konvertering og retargeting, video til brand awareness og nye målgrupper. Test begge formater og lad data guide dig.'),
      pWithLink('Har du brug for professionelle static ads til dine kampagner? ', 'Se vores pakker her', '/ydelser/static-ads', '.'),
    ],
  },
  {
    slug: 'cro-vs-mere-trafik',
    title: 'CRO vs mere trafik: Hvad giver bedst ROI for din webshop?',
    metaTitle: 'CRO vs mere trafik: Hvad giver bedst ROI 2026? | Konvertio',
    metaDescription: 'Skal du bruge penge på mere trafik eller CRO? Sammenlign ROI og find ud af hvilken strategi der giver mest omsætning for pengene.',
    excerpt: 'Mere trafik eller bedre konvertering? Det er den vigtigste strategiske beslutning for webshops. Her er det ærlige regnestykke.',
    category: 'CRO',
    readTime: '6 min',
    publishedAt: '2026-02-20T00:00:00.000Z',
    imageQuery: 'analytics,growth,chart',
    imageId: '1504868584819-f8e8b4b6d7e3',
    content: [
      p('De fleste webshops har to muligheder for at øge omsætningen: sende mere trafik til siden, eller konvertere den eksisterende trafik bedre. Men hvilken strategi giver mest for pengene? Det ærlige svar overrasker mange.'),
      h2('Regnestykket: trafik vs. CRO'),
      p('Lad os tage et konkret eksempel. Du har en webshop med 10.000 besøgende/måned og en konverteringsrate på 1,5%. Det giver 150 salg/måned.'),
      p('Strategi A – fordobl trafik:'),
      bullet('20.000 besøgende/måned × 1,5% = 300 salg/måned'),
      bullet('Typisk annoncekost: 15.000–30.000 kr./md. ekstra i adspend'),
      p('Strategi B – fordobl konverteringsrate:'),
      bullet('10.000 besøgende/måned × 3% = 300 salg/måned'),
      bullet('Typisk CRO-investering: 8.000–20.000 kr. (engangs eller kortere periode)'),
      p('Samme resultat – men CRO-strategien koster markant mindre og forbedringer er permanente. Mere trafik er en løbende omkostning.'),
      h2('Hvornår skal du prioritere CRO?'),
      p('CRO giver bedst afkast når:'),
      bullet('Din konverteringsrate er under 1,5% (branchemiddel for e-commerce er 2–3%)'),
      bullet('Du allerede bruger penge på trafik men ser lavt ROAS'),
      bullet('Du har identificeret høj bounce rate på specifikke sider'),
      bullet('Din checkout-abandoned cart rate er over 70%'),
      h2('Hvornår skal du prioritere mere trafik?'),
      p('Mere trafik giver bedst afkast når:'),
      bullet('Din konverteringsrate allerede er stærk (over 3%)'),
      bullet('Du er ved at lancere et nyt produkt og har brug for data'),
      bullet('Din organiske SEO og CRO er optimeret og du vil skalere'),
      h2('Den bedste strategi: CRO først, trafik bagefter'),
      p('Investér i CRO som det første. Når din webshop konverterer effektivt, er hver krone i annoncering mere værd. At sende dyr trafik til en leaky bucket (en webshop med lavt konvertering) er en garanti for dårligt ROAS.'),
      p('Praktisk tilgang: start med en CRO analyse, identificér de 3–5 vigtigste forbedringer, implementér dem, og skru derefter op for trafikken.'),
      pWithLink('Klar til at starte med CRO? ', 'Se vores CRO analyse pakke', '/ydelser/cro-analyse', ' og find ud af præcis hvad der holder din webshop tilbage.'),
    ],
  },
]

async function main() {
  // Fix om-mig meta description
  console.log('\n--- Updating om-mig meta description ---')
  await client.patch('siteSettings')
    .set({ 'about.metaDescription': 'Mød Frederik – ekspert i static ads, CRO og Shopify webshops. Baseret i Viborg, hjælper virksomheder i hele Danmark.' })
    .commit()
  console.log('Done')

  // Fix /ydelser metadata overlap (make more transactional)
  // This is done in code, not Sanity

  // Create blog posts
  for (const post of posts) {
    console.log(`\n--- Creating: ${post.title} ---`)
    const imgUrl = `https://images.unsplash.com/photo-${post.imageId}?w=1344&h=768&fit=crop&auto=format&q=80`
    let imageAssetRef = null
    try {
      const assetId = await uploadImage(imgUrl, `${post.slug}.jpg`)
      imageAssetRef = assetId
    } catch (e) {
      console.warn(`  Image upload failed: ${e.message}, creating post without image`)
    }

    const doc = {
      _type: 'blogPost',
      _id: `blog-${post.slug}`,
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      publishedAt: post.publishedAt,
      author: 'Frederik',
      category: post.category,
      excerpt: post.excerpt,
      readTime: post.readTime,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      content: post.content,
      ...(imageAssetRef && {
        mainImage: {
          _type: 'image',
          alt: post.title,
          asset: { _type: 'reference', _ref: imageAssetRef },
        }
      }),
    }

    await client.createOrReplace(doc)
    console.log(`  ✅ Created: ${post.slug}`)
  }

  console.log('\n✅ All done!')
}

main().catch(console.error)
