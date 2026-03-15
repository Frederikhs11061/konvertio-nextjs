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

// Blogindlæg → lokal billedfil
const assignments = [
  { slug: '5-cro-tips',                  image: 'public/images/blog-1.jpg', alt: '5 CRO-tips der øger konverteringen' },
  { slug: 'shopify-checkout-optimering', image: 'public/images/blog-2.jpg', alt: 'Shopify checkout optimering' },
  { slug: 'hastighedsoptimering-webshop',image: 'public/images/blog-3.jpg', alt: 'Hastighedsoptimering af webshop' },
  { slug: 'static-ads-der-virker',       image: 'public/images/blog-4.jpg', alt: 'Static ads der virker' },
  { slug: 'facebook-ads-strategi-2026',  image: 'public/images/blog-5.jpg', alt: 'Facebook Ads strategi 2026' },
  { slug: 'ugc-ads-guide',               image: 'public/images/blog-6.jpg', alt: 'UGC ads guide' },
  { slug: 'hvad-er-cro',                 image: 'public/images/blog-2.jpg', alt: 'Hvad er CRO – konverteringsoptimering forklaret' },
  { slug: 'shopify-vs-woocommerce',      image: 'public/images/blog-3.jpg', alt: 'Shopify vs WooCommerce sammenligning' },
]

async function main() {
  console.log('🖼️  Uploader blogbilleder til Sanity...\n')

  for (const { slug, image, alt } of assignments) {
    const imagePath = resolve(root, image)
    try {
      // Upload billedet som Sanity asset
      const asset = await client.assets.upload('image', createReadStream(imagePath), {
        filename: image.split('/').pop(),
        contentType: 'image/jpeg',
      })
      console.log(`  📤 Uploadet: ${image} → ${asset._id}`)

      // Find blogindlægget i Sanity
      const post = await client.fetch(
        `*[_type == "blogPost" && slug.current == $slug][0]{ _id }`,
        { slug }
      )

      if (!post) {
        console.log(`  ⚠️  Post ikke fundet i Sanity: ${slug}`)
        continue
      }

      // Sæt billedet på indlægget
      await client.patch(post._id).set({
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id },
          alt,
        },
      }).commit()

      console.log(`  ✅ Billede sat på: ${slug}\n`)
    } catch (err) {
      console.error(`  ❌ Fejl på ${slug}:`, err.message)
    }
  }

  console.log('🎉 Alle billeder er uploadet og tilknyttet blogindlæggene!')
}

main().catch(console.error)
