/**
 * Migrationsscript – pusher statisk indhold til Sanity.
 *
 * Krav: SANITY_API_TOKEN skal være sat som env-variabel (skriveadgang).
 *
 * Kør med:
 *   SANITY_API_TOKEN=<dit-token> node scripts/push-to-sanity.mjs
 *
 * Find dit token på: https://www.sanity.io/manage → projekt x4du0gcn → API → Tokens
 * Opret et token med "Editor" eller "Write"-adgang.
 */

import { createClient } from '@sanity/client'

const PROJECT_ID = 'x4du0gcn'
const DATASET = 'production'
const API_VERSION = '2024-01-01'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('❌  Sæt SANITY_API_TOKEN miljøvariabel og kør igen.')
  process.exit(1)
}

const client = createClient({ projectId: PROJECT_ID, dataset: DATASET, apiVersion: API_VERSION, token, useCdn: false })

// ─── HTML → Portable Text (simpel konverter) ───────────────────────────────
let keyCounter = 0
const genKey = () => 'k' + (keyCounter++).toString()

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&apos;/g, "'").replace(/&quot;/g, '"').trim()
}

function parseInline(html) {
  const children = []
  const markDefs = []

  // Matcher: <strong>, <em>, <a href="...">, eller plain tekst
  const re = /(<strong[^>]*>[\s\S]*?<\/strong>|<em[^>]*>[\s\S]*?<\/em>|<a [^>]*>[\s\S]*?<\/a>|[^<]+)/g
  let m
  while ((m = re.exec(html)) !== null) {
    const seg = m[0]
    if (!seg.trim() && !seg.includes(' ')) continue

    if (seg.startsWith('<strong')) {
      const text = stripHtml(seg)
      if (text) children.push({ _type: 'span', _key: genKey(), text, marks: ['strong'] })
    } else if (seg.startsWith('<em')) {
      const text = stripHtml(seg)
      if (text) children.push({ _type: 'span', _key: genKey(), text, marks: ['em'] })
    } else if (seg.startsWith('<a ')) {
      const hrefM = seg.match(/href="([^"]+)"/)
      const href = hrefM ? hrefM[1] : '#'
      const text = stripHtml(seg)
      if (text) {
        const mk = genKey()
        markDefs.push({ _type: 'link', _key: mk, href })
        children.push({ _type: 'span', _key: genKey(), text, marks: [mk] })
      }
    } else if (!seg.startsWith('<')) {
      const text = seg.replace(/\n\s*/g, ' ').replace(/  +/g, ' ')
      if (text.trim()) children.push({ _type: 'span', _key: genKey(), text, marks: [] })
    }
  }

  return { children, markDefs }
}

function htmlToPortableText(html) {
  keyCounter = 0
  const blocks = []
  const blockRe = /<(h2|h3|p|ul)(?:[^>]*)>([\s\S]*?)<\/\1>/g
  let m
  while ((m = blockRe.exec(html)) !== null) {
    const [, tag, inner] = m
    if (tag === 'h2') {
      const text = stripHtml(inner)
      blocks.push({ _type: 'block', _key: genKey(), style: 'h2', children: [{ _type: 'span', _key: genKey(), text, marks: [] }], markDefs: [] })
    } else if (tag === 'h3') {
      const text = stripHtml(inner)
      blocks.push({ _type: 'block', _key: genKey(), style: 'h3', children: [{ _type: 'span', _key: genKey(), text, marks: [] }], markDefs: [] })
    } else if (tag === 'p') {
      const { children, markDefs } = parseInline(inner)
      if (children.length > 0) {
        blocks.push({ _type: 'block', _key: genKey(), style: 'normal', children, markDefs })
      }
    } else if (tag === 'ul') {
      const liRe = /<li(?:[^>]*)>([\s\S]*?)<\/li>/g
      let li
      while ((li = liRe.exec(inner)) !== null) {
        const { children, markDefs } = parseInline(li[1])
        if (children.length > 0) {
          blocks.push({ _type: 'block', _key: genKey(), style: 'normal', listItem: 'bullet', level: 1, children, markDefs })
        }
      }
    }
  }
  return blocks
}

// ─── Statiske blogindlæg ──────────────────────────────────────────────────
const staticPosts = [
  {
    slug: '5-cro-tips',
    title: '5 CRO-tips der øger din konvertering med 30%',
    excerpt: 'Lær de mest effektive teknikker til at optimere din webshop og øge salget uden at øge din marketingbudget.',
    author: 'Frederik Høgh Simonsen',
    date: '2026-02-15',
    readTime: '5 min',
    category: 'CRO',
    metaTitle: '5 CRO-tips der øger konverteringen med 30% | Konvertio',
    metaDescription: 'Lær 5 effektive CRO-teknikker til at optimere din webshop og øge salget. Konkrete tips du kan implementere i dag.',
  },
  {
    slug: 'shopify-checkout-optimering',
    title: 'Sådan optimerer du din Shopify checkout',
    excerpt: 'En komplet guide til at reducere abandoned carts og øge din gennemførelsesrate i checkout-flowet.',
    author: 'Frederik Høgh Simonsen',
    date: '2026-01-20',
    readTime: '7 min',
    category: 'Shopify',
    metaTitle: 'Shopify checkout optimering – reducer abandoned carts | Konvertio',
    metaDescription: 'Lær hvordan du optimerer din Shopify checkout for at reducere abandoned carts og øge konverteringsraten.',
  },
  {
    slug: 'static-ads-guide',
    title: 'Static Ads: Den komplette guide til 2024',
    excerpt: 'Alt du behøver at vide om at skabe effektive static ads der stopper scrollet og skaber salg.',
    author: 'Frederik Høgh Simonsen',
    date: '2025-12-10',
    readTime: '8 min',
    category: 'Static Ads',
    metaTitle: 'Static Ads guide 2024 – skab annoncer der konverterer | Konvertio',
    metaDescription: 'Komplet guide til static ads: format, design principper, tekst og strategi. Lær at lave annoncer der stopper scrollet.',
  },
  {
    slug: 'hastighedsoptimering-webshop',
    title: 'Hastighedsoptimering: Sådan gør du din webshop lynhurtig',
    excerpt: 'En langsom webshop koster dig kunder og konverteringer. Lær de vigtigste teknikker til at optimere hastighed.',
    author: 'Frederik Høgh Simonsen',
    date: '2025-11-05',
    readTime: '6 min',
    category: 'CRO',
    metaTitle: 'Hastighedsoptimering af webshop – øg hastighed og konvertering | Konvertio',
    metaDescription: 'Lær de vigtigste teknikker til at gøre din webshop hurtigere. Bedre hastighed = flere salg.',
  },
]

// ─── siteSettings standardværdier ────────────────────────────────────────
const defaultSiteSettings = {
  _type: 'siteSettings',
  _id: 'siteSettings',
  hero: {
    socialProofText: 'Hurtig levering · Professionelt resultat',
    availabilityText: 'Klar til nye opgaver',
    title1: 'Løft dit brand med',
    titleHighlight: 'stærke',
    title2: 'kreative løsninger',
    subtitle: 'Jeg hjælper danske e-commerce virksomheder med at skabe static ads der konverterer, Shopify-webshops der sælger, og CRO-analyser der giver resultater.',
    ctaPrimary: 'Se mine ydelser',
    ctaSecondary: 'Kontakt mig',
  },
  homePage: {
    problemsSectionLabel: 'Kender du det?',
    problemsSectionH2: 'Fra problem til løsning',
    problemsCardTitle: 'Kender du problemerne?',
    solutionsCardTitle: 'Sådan løser jeg det',
    solutionsCtaText: 'Start din gratis samtale',
    problems: [
      { title: 'Ads der ikke konverterer', desc: 'Du bruger penge på annoncer, men får ikke salg tilbage' },
      { title: 'Svage creatives', desc: 'Dine annoncer bliver scrollet forbi uden engagement' },
      { title: 'Webshop drop-off', desc: 'Besøgende forlader din shop før de når til checkout' },
      { title: 'Uklar strategi', desc: 'Du ved ikke præcis hvor problemerne ligger' },
    ],
    solutions: [
      { title: 'Datadrevet tilgang', desc: 'Jeg finder præcis hvor du taber kunder og laver konkrete løsninger' },
      { title: 'Testede koncepter', desc: 'Static ads og designs der er bevist at stoppe scrollet og skabe salg' },
      { title: 'Hurtig eksekvering', desc: 'Fra analyse til implementation – jeg sætter det i værk med det samme' },
      { title: 'Løbende optimering', desc: 'Kontinuerlige forbedringer baseret på performance-data' },
    ],
    servicesH2part1: 'Alt hvad du skal bruge for at',
    servicesH2highlight: 'accelerere',
    servicesH2part2: 'dit brand',
    servicesSubtitle: 'Fra static ads der stopper scroll til webshops der konverterer – her er mine ydelser.',
    aboutH2: 'Indhold der føles ægte – fordi det er det',
    aboutPara1: 'Jeg er Frederik – ekspert i udvikling af shops til SMV\'er til ecommerce, med dyb erfaring i CRO-gennemgange og static ads der konverterer.',
    aboutPara2: 'Baseret i Viborg og arbejder med kunder over hele Danmark. Mit mål er simpelt: konkrete, brugbare løsninger – ikke lange rapporter der samler støv.',
    blogSectionH2: 'Seneste indsigter',
    blogSectionSubtitle: 'Praktiske guides til dig der vil have mere ud af din webshop og markedsføring.',
    ctaH2part1: 'Klar til at skabe indhold du er',
    ctaH2highlight: 'stolt',
    ctaH2part2: 'af at dele?',
    ctaSubtitle: 'Tag en uforpligtende snak om hvordan jeg kan hjælpe din virksomhed med at vækste online.',
    ctaPrimaryText: 'Kontakt mig i dag',
    ctaSecondaryText: 'Se ydelser & priser',
  },
  about: {
    badge: 'Om mig',
    title: 'Static Ads, CRO & Shopify',
    intro: 'Jeg er bosat i Viborg og har en passion for e-commerce og digital markedsføring. Jeg hjælper danske virksomheder med at vækste online gennem effektive static ads, CRO-optimering og Shopify-webshops der konverterer.',
    body: 'Min tilgang er enkel: Jeg fokuserer på resultater, ikke lange rapporter der samler støv. Jeg tror på at teste, måle og optimere kontinuerligt.',
    closing: 'Jeg stopper ikke før du er tilfreds. Det er ikke bare noget jeg siger – det er hvad mine kunder siger om at arbejde med mig.',
    skills: ['Static Ads', 'Facebook Ads', 'Instagram Ads', 'Shopify', 'CRO', 'WordPress', 'Webudvikling', 'UX Design', 'Konverteringsoptimering'],
    benefits: ['Gratis indledende samtale', 'Konkrete anbefalinger fra dag 1', 'Stopper ikke før du er tilfreds', 'Fast pris – ingen skjulte gebyrer'],
    availabilityText: 'Klar til nye projekter',
    ctaH2: 'Klar til at samarbejde?',
    ctaSubtitle: 'Lad os tage en uforpligtende snak om hvordan jeg kan hjælpe din virksomhed med at vækste online.',
    ctaButtonText: 'Start samtalen',
  },
  contact: {
    badge: 'Kontakt',
    h1: 'Lad os tale om dit projekt',
    subtitle: 'Ræk ud for en gratis og uforpligtende snak om, hvordan jeg kan hjælpe din virksomhed med at vækste online. Jeg vender tilbage inden for 24 timer.',
    benefits: ['Gratis og uforpligtende snak', 'Svar inden for 24 timer', 'Ingen binding, ingen skjulte gebyrer'],
    email: 'frederik@konvertio.dk',
    linkedin: 'https://www.linkedin.com/in/frederik-høgh-simonsen/',
    location: 'Viborg, Danmark',
    responseTime: 'Inden for 24 timer',
    availabilityText: 'Tilgængelig for nye projekter',
  },
}

// ─── Kør migrationen ──────────────────────────────────────────────────────
async function main() {
  console.log('🚀  Starter migration til Sanity...\n')

  // 1. Push siteSettings – opret hvis ikke eksisterer, ellers udfyld kun tomme felter
  console.log('📝  Uploader siteSettings...')
  try {
    await client
      .transaction()
      .createIfNotExists({ _type: 'siteSettings', _id: 'siteSettings' })
      .commit()
    await client
      .patch('siteSettings')
      .setIfMissing(defaultSiteSettings)
      .commit()
    console.log('✅  siteSettings gemt (eksisterende felter blev ikke ændret)\n')
  } catch (err) {
    console.error('❌  Fejl ved siteSettings:', err.message)
  }

  // 2. Push blog posts (kun metadata + tom content – brugeren skriver indhold i Sanity)
  console.log('📝  Uploader blogindlæg (metadata)...')
  for (const post of staticPosts) {
    const docId = `blogPost-${post.slug.replace(/[^a-z0-9]/gi, '-')}`
    try {
      // Check om posten allerede eksisterer i Sanity
      const existing = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]{ _id, content }`, { slug: post.slug })

      if (existing) {
        // Eksisterer – patch kun metadata, rør ikke indholdet
        await client.patch(existing._id).setIfMissing({
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          publishedAt: post.date,
          readTime: post.readTime,
          category: post.category,
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
        }).commit()
        console.log(`  ✅  Opdaterede eksisterende: ${post.slug}`)
      } else {
        // Ny post
        await client.createOrReplace({
          _type: 'blogPost',
          _id: docId,
          title: post.title,
          slug: { _type: 'slug', current: post.slug },
          excerpt: post.excerpt,
          author: post.author,
          publishedAt: post.date,
          readTime: post.readTime,
          category: post.category,
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
          content: [], // Tom – udfyldes i Sanity Studio
        })
        console.log(`  ✅  Oprettede ny: ${post.slug}`)
      }
    } catch (err) {
      console.error(`  ❌  Fejl på ${post.slug}:`, err.message)
    }
  }

  console.log('\n🎉  Migration færdig!')
  console.log('\nNæste skridt:')
  console.log('  1. Gå til https://konvertio.sanity.studio')
  console.log('  2. Åbn "Siteindstillinger" og kontrollér at tekster er rigtigt')
  console.log('  3. Åbn hvert blogindlæg og udfyld "Indhold"-feltet')
  console.log('  4. Tilføj alt-tekster til billeder under "Forsidebillede"')
}

main().catch(console.error)
