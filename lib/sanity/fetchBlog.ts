import { getClient } from './getClient'
import { allBlogPostsQuery, blogPostBySlugQuery, allBlogSlugsQuery } from './queries'
import { blogPosts as staticPosts } from '@/lib/data'

const isConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export async function getAllBlogPosts() {
    if (!isConfigured) return staticPosts
    try {
        const posts = await getClient().fetch(allBlogPostsQuery)
        if (posts && posts.length > 0) {
            const sanitySlugs = new Set(posts.map((p: { slug: string }) => p.slug))
            const remaining = staticPosts.filter((p) => !sanitySlugs.has(p.slug))
            return [...posts, ...remaining]
        }
        return staticPosts
    } catch {
        return staticPosts
    }
}

export async function getBlogPostBySlug(slug: string) {
    if (!isConfigured) return staticPosts.find((p) => p.slug === slug) ?? null
    try {
        const post = await getClient().fetch(blogPostBySlugQuery, { slug })
        if (post) return post
        return staticPosts.find((p) => p.slug === slug) ?? null
    } catch {
        return staticPosts.find((p) => p.slug === slug) ?? null
    }
}

export async function getAllBlogSlugs() {
    if (!isConfigured) return staticPosts.map((p) => ({ slug: p.slug }))
    try {
        const sanitySlugs: { slug: string }[] = await getClient().fetch(allBlogSlugsQuery)
        const staticSlugs = staticPosts.map((p) => ({ slug: p.slug }))
        const allSlugs = [...sanitySlugs, ...staticSlugs]
        const seen = new Set<string>()
        return allSlugs.filter(({ slug }) => {
            if (seen.has(slug)) return false
            seen.add(slug)
            return true
        })
    } catch {
        return staticPosts.map((p) => ({ slug: p.slug }))
    }
}
