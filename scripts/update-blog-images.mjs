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
  console.log(`  Henter: ${url}`)
  const { buffer, contentType } = await fetchUrl(url)
  if (buffer.length < 5000) throw new Error(`Billede for lille (${buffer.length} bytes) – sandsynligvis ugyldig URL`)
  console.log(`  Uploader ${filename} (${buffer.length} bytes)...`)
  const asset = await client.assets.upload('image', buffer, { filename, contentType: contentType || 'image/jpeg' })
  console.log(`  Uploadet: ${asset._id}`)
  return asset._id
}

// Alle billeder er fra Unsplash (gratis kommerciel licens).
// Valgt specifikt som abstrakte/konceptuelle billeder UDEN mennesker:
// grafer, skærme, ikoner, objekter.
const posts = [
  {
    slug: 'hvad-koster-static-ads',
    // Laptop med marketinggrafer på skærm – ingen mennesker
    imageId: '1460925895917-afdab827c52f',
    filename: 'static-ads-pris-danmark-2026.jpg',
    alt: 'Laptop med marketing-data og prisoversigt – static ads pris Danmark 2026',
    update: false, // allerede OK
  },
  {
    slug: 'cro-analyse-hvad-er-det',
    // Analytics dashboard med grafer og metrics – ingen mennesker
    imageId: '1551288049-bebda4e38f71',
    filename: 'cro-analyse-konverteringsdata-dashboard.jpg',
    alt: 'CRO analyse dashboard med konverteringsrate og websitestatistik på skærm',
    update: false,
  },
  {
    slug: 'hvad-er-en-statisk-annonce',
    // Smartphone med sociale medier app-ikoner – ingen ansigter
    imageId: '1611162618071-b39a2ec055fb',
    filename: 'statisk-annonce-facebook-instagram-ads-eksempel.jpg',
    alt: 'Smartphone med Facebook og Instagram app-ikoner – eksempel på statisk annonce til sociale medier',
    update: true, // manglede billede
  },
  {
    slug: 'ab-test-shopify-guide',
    // Søjlediagram og vækstgraf på mørk baggrund – ingen mennesker
    imageId: '1533750349-506e8a46d508',
    filename: 'ab-test-shopify-konverteringstest-guide.jpg',
    alt: 'Vækstgraf og konverteringsdata – A/B test guide til Shopify webshop optimering',
    update: true, // havde folk i kontor
  },
  {
    slug: 'facebook-ads-foerste-kunde',
    // Facebook og sociale medier ikoner på telefon – ingen ansigter
    imageId: '1611162618071-b39a2ec055fb',
    filename: 'facebook-ads-strategi-foerste-kunde-guide.jpg',
    alt: 'Facebook app på smartphone – guide til at få første kunde via Facebook Ads',
    update: true, // havde folk
  },
  {
    slug: 'shopify-webshop-pris-2026',
    // E-commerce checkout skærm med indkøbsvogn – ingen mennesker
    imageId: '1556742049-0cfed4f6a45d',
    filename: 'shopify-webshop-pris-oprettelse-2026.jpg',
    alt: 'Shopify webshop checkout skærm med produkter – priser på oprettelse af webshop i 2026',
    update: false,
  },
  {
    slug: 'landingsside-vs-hjemmeside',
    // Laptop med website design/kode på skærm – ingen mennesker
    imageId: '1547658719-da2b51169166',
    filename: 'landingsside-vs-hjemmeside-webdesign-sammenligning.jpg',
    alt: 'Laptop med webdesign skærm – sammenligning af landingsside og hjemmeside til konvertering',
    update: false,
  },
  {
    slug: 'shopify-vs-wordpress',
    // Tablet med e-commerce platform dashboard – ingen mennesker
    imageId: '1523474253-8f19cd67e400',
    filename: 'shopify-vs-wordpress-webshop-platform-sammenligning.jpg',
    alt: 'E-commerce platform dashboard på tablet – Shopify vs WordPress sammenligning til webshop 2026',
    update: true, // duplikat billede, bytter til noget unikt
  },
  {
    slug: 'static-ads-vs-video-ads',
    // Marketinggrafer og ROI kurver – ingen mennesker
    imageId: '1533750349-506e8a46d508',
    filename: 'static-ads-vs-video-ads-annoncestrategi-roi.jpg',
    alt: 'Marketinggraf der viser ROI – sammenligning af static ads og video ads annoncestrategi',
    update: true, // potentielt folk
  },
  {
    slug: 'cro-vs-mere-trafik',
    // Søjlediagram med vækstdata på skærm – ingen mennesker
    imageId: '1504868584819-f8e8b4b6d7e3',
    filename: 'cro-optimering-vs-trafik-roi-webshop.jpg',
    alt: 'Søjlediagram med konverteringsrate og vækst – CRO optimering vs. mere trafik ROI for webshop',
    update: false,
  },
]

async function run() {
  for (const post of posts) {
    console.log(`\n--- ${post.slug} ---`)

    // Find dokumentet i Sanity
    const doc = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]{_id, mainImage}`, { slug: post.slug })
    if (!doc) { console.log('  ⚠️ Dokument ikke fundet'); continue }

    if (post.update) {
      // Upload nyt billede
      try {
        const url = `https://images.unsplash.com/photo-${post.imageId}?w=1344&h=768&fit=crop&auto=format&q=80`
        const assetId = await uploadImage(url, post.filename)
        await client.patch(doc._id).set({
          mainImage: {
            _type: 'image',
            asset: { _type: 'reference', _ref: assetId },
            alt: post.alt,
          }
        }).commit()
        console.log(`  ✅ Billede + alt tekst opdateret`)
      } catch (err) {
        console.log(`  ❌ Fejl: ${err.message}`)
      }
    } else {
      // Behold eksisterende billede, tilføj kun alt tekst
      await client.patch(doc._id).set({ 'mainImage.alt': post.alt }).commit()
      console.log(`  ✅ Alt tekst tilføjet: "${post.alt}"`)
    }
  }
  console.log('\n✅ Færdig!')
}

run().catch(console.error)
