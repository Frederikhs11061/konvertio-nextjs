import Image from 'next/image'
import Link from 'next/link'
import { Clock, User, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import AnimateSection from '@/components/AnimateSection'
import BlogContent from '@/components/BlogContent'
import SanityContent from '@/components/SanityContent'
import { getAllBlogPosts, getBlogPostBySlug, getAllBlogSlugs } from '@/lib/sanity/fetchBlog'
import { SITE_URL } from '@/lib/site'

interface PageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    const slugs = await getAllBlogSlugs()
    return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const post = await getBlogPostBySlug(params.slug)
    if (!post) return {}
    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.image ? [{ url: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`, width: 1200, height: 630 }] : [],
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const post = await getBlogPostBySlug(params.slug)
    if (!post) notFound()

    const allPosts = await getAllBlogPosts()
    const related = allPosts.filter((p: { slug: string; category: string }) => p.slug !== post.slug && p.category === post.category).slice(0, 2)
    const others = allPosts.filter((p: { slug: string }) => p.slug !== post.slug).slice(0, 2)
    const relatedPosts = related.length > 0 ? related : others

    // Content can be Portable Text array (Sanity) or HTML string (static)
    const isSanityContent = Array.isArray(post.content)

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: post.image ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`) : '',
        author: { '@type': 'Person', name: post.author },
        publisher: { '@type': 'Organization', name: 'Konvertio' },
        datePublished: post.date,
        dateModified: post.date,
    }

    return (
        <div className="pt-20 md:pt-28 bg-blue-100">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Breadcrumbs
                items={[
                    { label: 'Blog', href: '/blog' },
                    { label: post.title },
                ]}
            />

            <article className="py-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <AnimateSection delay={0}>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-brand-50 border border-brand-200/60 text-sm font-medium text-brand-600 rounded-full">
                                {post.category}
                            </span>
                            <span className="text-sm text-neutral-500 flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readTime} læsning
                            </span>
                            <span className="text-sm text-neutral-500 flex items-center gap-1">
                                <User className="w-3.5 h-3.5" />
                                {post.author}
                            </span>
                        </div>
                    </AnimateSection>

                    <AnimateSection delay={100}>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-6 leading-tight">
                            {post.title}
                        </h1>
                    </AnimateSection>

                    <AnimateSection delay={150}>
                        <p className="text-xl text-neutral-600 leading-relaxed mb-8 pb-8 border-b border-neutral-200/60">
                            {post.excerpt}
                        </p>
                    </AnimateSection>

                    {post.image && (
                        <AnimateSection delay={200} className="mb-8">
                            <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={1200}
                                    height={675}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </AnimateSection>
                    )}

                    <AnimateSection delay={220} className="my-8">
                        <div className="flex items-center gap-4" aria-hidden>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-300/40 to-transparent" />
                            <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200/60 flex items-center justify-center">
                                <span className="text-brand-600 font-bold text-lg">K</span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-300/40 to-transparent" />
                        </div>
                    </AnimateSection>

                    <AnimateSection delay={250}>
                        {isSanityContent
                            ? <SanityContent content={post.content} />
                            : <BlogContent content={post.content} />
                        }
                    </AnimateSection>

                    {/* Author box */}
                    <AnimateSection className="mt-12 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">F</span>
                        </div>
                        <div>
                            <p className="font-bold text-neutral-900">{post.author}</p>
                            <p className="text-sm text-neutral-500">
                                Freelance ekspert i static ads, CRO og Shopify. Baseret i Viborg, Danmark.
                            </p>
                            <Link href="/om-mig" className="text-sm text-brand-600 hover:text-brand-500 mt-1 inline-flex items-center gap-1 transition-colors">
                                Læs mere om mig <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </AnimateSection>

                    {/* Læs også */}
                    <AnimateSection className="mt-10 p-6 rounded-2xl bg-blue-50/50 border border-brand-200/40">
                        <h3 className="text-lg font-bold text-neutral-900 mb-3">Læs også</h3>
                        <ul className="flex flex-wrap gap-3 text-sm">
                            {allPosts
                                .filter((p: { slug: string }) => p.slug !== post.slug)
                                .slice(0, 6)
                                .map((other: { slug: string; title: string }) => (
                                    <li key={other.slug}>
                                        <Link href={`/blog/${other.slug}`} className="text-brand-600 hover:text-brand-500 transition-colors">
                                            {other.title}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </AnimateSection>

                    {/* CTA */}
                    <AnimateSection className="mt-10 p-8 rounded-2xl bg-gradient-to-b from-blue-100 to-blue-50 border border-blue-200/60 text-center">
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Klar til at øge din konvertering?</h3>
                        <p className="text-neutral-600 mb-6 text-sm">Tag en gratis og uforpligtende snak om dit projekt.</p>
                        <Link href="/kontakt" className="btn-primary text-sm px-7 py-3.5">
                            Kontakt mig
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimateSection>
                </div>
            </article>

            {relatedPosts.length > 0 && (
                <section className="py-12 px-6 border-t border-neutral-200/60 bg-neutral-50/50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-8">Relaterede artikler</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {relatedPosts.map((rp: { slug: string; image: string; title: string; category: string }, i: number) => (
                                <AnimateSection key={rp.slug} delay={i * 100}>
                                    <Link href={`/blog/${rp.slug}`} className="group block bg-white rounded-2xl border border-neutral-200/80 overflow-hidden hover:border-brand-200 hover:shadow-md transition-all duration-300">
                                        <div className="aspect-video overflow-hidden bg-neutral-100">
                                            <Image
                                                src={rp.image}
                                                alt={rp.title}
                                                width={600}
                                                height={338}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <span className="text-xs text-brand-600 uppercase tracking-wider font-medium">{rp.category}</span>
                                            <h3 className="font-bold text-neutral-900 group-hover:text-brand-600 transition-colors duration-300 line-clamp-2 mt-1">
                                                {rp.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </AnimateSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
