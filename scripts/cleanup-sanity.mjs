// Sletter duplikerede testimonials og faqCategories fra Sanity
// Kør med: SANITY_TOKEN=<token> node scripts/cleanup-sanity.mjs

import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'x4du0gcn',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_TOKEN,
})

if (!process.env.SANITY_TOKEN) {
    console.error('❌ Mangler SANITY_TOKEN')
    process.exit(1)
}

async function cleanup() {
    console.log('🧹 Rydder op i Sanity...\n')

    // Slet ALLE testimonials
    const testimonials = await client.fetch(`*[_type == "testimonial"]{ _id, name }`)
    console.log(`Fandt ${testimonials.length} anmeldelser – sletter alle...`)
    for (const doc of testimonials) {
        await client.delete(doc._id)
        console.log(`   🗑️  Slettet: ${doc.name}`)
    }

    // Slet ALLE faqCategories
    const faqs = await client.fetch(`*[_type == "faqCategory"]{ _id, name }`)
    console.log(`\nFandt ${faqs.length} FAQ kategorier – sletter alle...`)
    for (const doc of faqs) {
        await client.delete(doc._id)
        console.log(`   🗑️  Slettet: ${doc.name}`)
    }

    console.log('\n✅ Oprydning færdig! Kør nu seed-scriptet igen.')
}

cleanup().catch((err) => {
    console.error('❌ Fejl:', err.message)
    process.exit(1)
})
