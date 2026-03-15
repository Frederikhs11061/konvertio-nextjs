import { createClient } from '@sanity/client'
import { createReadStream } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const token = process.env.SANITY_API_TOKEN
if (!token) { console.error('❌ Mangler SANITY_API_TOKEN'); process.exit(1) }

const client = createClient({
  projectId: 'x4du0gcn',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const NEW_AUTHOR = 'Frederik / Ejer af Konvertio'

// Korrekte datoer i 2026 for alle indlæg
const dateFixes = {
  'static-ads-guide':          '2026-01-05T00:00:00.000Z',
  'shopify-vs-woocommerce':    '2026-01-10T00:00:00.000Z',
  'hvad-er-cro':               '2026-01-15T00:00:00.000Z',
  'ugc-ads-guide':             '2026-01-20T00:00:00.000Z',
  'facebook-ads-strategi-2026':'2026-01-25T00:00:00.000Z',
  'static-ads-der-virker':     '2026-02-01T00:00:00.000Z',
  'hastighedsoptimering-webshop':'2026-02-05T00:00:00.000Z',
  'shopify-checkout-optimering':'2026-02-10T00:00:00.000Z',
  '5-cro-tips':                '2026-02-15T00:00:00.000Z',
}

async function main() {
  console.log('🔧 Retter forfatter, datoer og manglende billede...\n')

  // 1. Upload billede til static-ads-guide
  console.log('🖼️  Uploader billede til static-ads-guide...')
  const asset = await client.assets.upload('image',
    createReadStream(resolve(root, 'public/images/blog-4.jpg')),
    { filename: 'blog-4.jpg', contentType: 'image/jpeg' }
  )

  const guidePost = await client.fetch(
    `*[_type == "blogPost" && slug.current == "static-ads-guide"][0]{ _id }`,
  )
  if (guidePost) {
    await client.patch(guidePost._id).set({
      mainImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
        alt: 'Static Ads – den komplette guide',
      },
    }).commit()
    console.log('  ✅ Billede sat på static-ads-guide\n')
  }

  // 2. Opdater alle posts: forfatter + dato
  console.log('✏️  Opdaterer forfatter og datoer på alle indlæg...')
  const allPosts = await client.fetch(
    `*[_type == "blogPost"]{ _id, "slug": slug.current }`
  )

  for (const post of allPosts) {
    const patch = client.patch(post._id).set({ author: NEW_AUTHOR })
    if (dateFixes[post.slug]) {
      patch.set({ publishedAt: dateFixes[post.slug] })
    } else {
      // Sæt dato til 2026 hvis den ikke er det
      const currentDate = await client.fetch(
        `*[_type == "blogPost" && _id == $id][0].publishedAt`, { id: post._id }
      )
      if (currentDate && !currentDate.startsWith('2026')) {
        const fixed = currentDate.replace(/^\d{4}/, '2026')
        patch.set({ publishedAt: fixed })
      }
    }
    await patch.commit()
    console.log(`  ✅ ${post.slug}`)
  }

  console.log('\n🎉 Færdig! Alle indlæg har nu:')
  console.log('   • Forfatter: ' + NEW_AUTHOR)
  console.log('   • Dato: 2026')
  console.log('   • static-ads-guide: billede tilføjet')
}

main().catch(console.error)
