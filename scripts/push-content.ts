import { createClient } from '@sanity/client'
import { blogPosts } from '../lib/data'

const token = process.env.SANITY_API_TOKEN
if (!token) { console.error('❌ Mangler SANITY_API_TOKEN'); process.exit(1) }

const client = createClient({
  projectId: 'x4du0gcn',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// ─── HTML → Portable Text ────────────────────────────────────────────────────
let keyCounter = 0
const genKey = () => 'k' + (keyCounter++).toString()

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&apos;/g, "'").replace(/&quot;/g, '"').trim()
}

function parseInline(html: string) {
  const children: object[] = []
  const markDefs: object[] = []
  const re = /(<strong[^>]*>[\s\S]*?<\/strong>|<em[^>]*>[\s\S]*?<\/em>|<a [^>]*>[\s\S]*?<\/a>|[^<]+)/g
  let m
  while ((m = re.exec(html)) !== null) {
    const seg = m[0]
    if (!seg.trim()) continue
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

function htmlToPortableText(html: string) {
  keyCounter = 0
  const blocks: object[] = []
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
      if (children.length > 0) blocks.push({ _type: 'block', _key: genKey(), style: 'normal', children, markDefs })
    } else if (tag === 'ul') {
      const liRe = /<li(?:[^>]*)>([\s\S]*?)<\/li>/g
      let li
      while ((li = liRe.exec(inner)) !== null) {
        const { children, markDefs } = parseInline(li[1])
        if (children.length > 0) blocks.push({ _type: 'block', _key: genKey(), style: 'normal', listItem: 'bullet', level: 1, children, markDefs })
      }
    }
  }
  return blocks
}

// ─── Push blogindlæg ─────────────────────────────────────────────────────────
async function main() {
  console.log('🚀 Uploader blogindlæg med indhold til Sanity...\n')

  for (const post of blogPosts) {
    const portableContent = htmlToPortableText(post.content)
    try {
      const existing = await client.fetch<{ _id: string } | null>(
        `*[_type == "blogPost" && slug.current == $slug][0]{ _id }`,
        { slug: post.slug }
      )

      if (existing) {
        await client.patch(existing._id).set({
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          publishedAt: post.date,
          readTime: post.readTime,
          category: post.category,
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
          content: portableContent,
        }).commit()
        console.log(`  ✅ Opdateret med indhold: ${post.slug} (${portableContent.length} blokke)`)
      } else {
        await client.create({
          _type: 'blogPost',
          title: post.title,
          slug: { _type: 'slug', current: post.slug },
          excerpt: post.excerpt,
          author: post.author,
          publishedAt: post.date,
          readTime: post.readTime,
          category: post.category,
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
          content: portableContent,
        })
        console.log(`  ✅ Oprettet ny: ${post.slug} (${portableContent.length} blokke)`)
      }
    } catch (err: unknown) {
      console.error(`  ❌ Fejl på ${post.slug}:`, (err as Error).message)
    }
  }

  console.log('\n🎉 Færdig! Alle blogindlæg har nu indhold i Sanity.')
}

main().catch(console.error)
