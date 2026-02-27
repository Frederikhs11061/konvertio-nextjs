import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, User, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import AnimateSection from '@/components/AnimateSection'
import { blogPosts } from '@/lib/data'

interface PageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug)
    if (!post) return {}
    return {
        title: post.metaTitle,
        description: post.metaDescription,
        alternates: { canonical: `https://konvertio.dk/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: `https://konvertio.dk${post.image}`, width: 1200, height: 630 }],
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    }
}

export default function BlogPostPage({ params }: PageProps) {
    const post = blogPosts.find((p) => p.slug === params.slug)
    if (!post) notFound()

    const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)
    const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)
    const relatedPosts = related.length > 0 ? related : others

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: `https://konvertio.dk${post.image}`,
        author: { '@type': 'Person', name: post.author },
        publisher: { '@type': 'Organization', name: 'Konvertio' },
        datePublished: post.date,
        dateModified: post.date,
    }

    return (
        <div className="pt-16">
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
                    {/* Meta */}
                    <AnimateSection delay={0}>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-neutral-100 text-sm font-medium text-neutral-700 rounded-full">
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

                    {/* Title */}
                    <AnimateSection delay={100}>
                        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-6 leading-tight">
                            {post.title}
                        </h1>
                    </AnimateSection>

                    {/* Excerpt */}
                    <AnimateSection delay={150}>
                        <p className="text-xl text-neutral-600 leading-relaxed mb-8 pb-8 border-b border-neutral-100">
                            {post.excerpt}
                        </p>
                    </AnimateSection>

                    {/* Hero image */}
                    <AnimateSection delay={200} className="mb-10">
                        <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-100">
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

                    {/* Content */}
                    <AnimateSection delay={250}>
                        <div
                            className="prose prose-neutral max-w-none
                prose-headings:font-semibold prose-headings:text-neutral-900 prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-li:text-neutral-700 prose-li:mb-1
                prose-strong:text-neutral-900 prose-strong:font-semibold"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </AnimateSection>

                    {/* Author box */}
                    <AnimateSection className="mt-12 p-6 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-semibold text-lg">F</span>
                        </div>
                        <div>
                            <p className="font-semibold text-neutral-900">{post.author}</p>
                            <p className="text-sm text-neutral-600">
                                Freelance ekspert i static ads, CRO og Shopify. Baseret i Viborg, Danmark.
                            </p>
                            <Link href="/om-mig" className="text-sm text-neutral-900 hover:text-neutral-600 mt-1 inline-flex items-center gap-1 transition-colors">
                                Læs mere om mig <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </AnimateSection>

                    {/* CTA */}
                    <AnimateSection className="mt-10 p-8 rounded-2xl bg-neutral-900 text-center">
                        <h3 className="text-xl font-semibold text-white mb-3">Klar til at øge din konvertering?</h3>
                        <p className="text-neutral-400 mb-6 text-sm">Tag en gratis og uforpligtende snak om dit projekt.</p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02]"
                        >
                            Kontakt mig
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimateSection>
                </div>
            </article>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 px-6 bg-neutral-50 border-t border-neutral-100">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Relaterede artikler</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPosts.map((rp, i) => (
                                <AnimateSection key={rp.slug} delay={i * 100}>
                                    <Link href={`/blog/${rp.slug}`} className="group block">
                                        <div className="aspect-video rounded-xl overflow-hidden bg-neutral-200 mb-4">
                                            <Image
                                                src={rp.image}
                                                alt={rp.title}
                                                width={600}
                                                height={338}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-xs text-neutral-500 uppercase tracking-wider">{rp.category}</span>
                                        <h3 className="font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors line-clamp-2 mt-1">
                                            {rp.title}
                                        </h3>
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
