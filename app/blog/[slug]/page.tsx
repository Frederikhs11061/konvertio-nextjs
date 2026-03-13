import Image from 'next/image'
import Link from 'next/link'
import { Clock, User, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import AnimateSection from '@/components/AnimateSection'
import BlogContent from '@/components/BlogContent'
import { blogPosts } from '@/lib/data'
import { SITE_URL } from '@/lib/site'

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
        alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630 }],
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
        image: `${SITE_URL}${post.image}`,
        author: { '@type': 'Person', name: post.author },
        publisher: { '@type': 'Organization', name: 'Konvertio' },
        datePublished: post.date,
        dateModified: post.date,
    }

    return (
        <div className="pt-20 md:pt-28">
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
                            <span className="px-3 py-1 bg-brand-600/10 border border-brand-600/20 text-sm font-medium text-brand-400 rounded-full">
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
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                            {post.title}
                        </h1>
                    </AnimateSection>

                    <AnimateSection delay={150}>
                        <p className="text-xl text-neutral-400 leading-relaxed mb-8 pb-8 border-b border-neutral-800/50">
                            {post.excerpt}
                        </p>
                    </AnimateSection>

                    <AnimateSection delay={200} className="mb-8">
                        <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-800/50">
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

                    {/* Grafisk afbryder mellem billede og indhold */}
                    <AnimateSection delay={220} className="my-8">
                        <div className="flex items-center gap-4" aria-hidden>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
                            <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center">
                                <span className="text-brand-500 font-bold text-lg">K</span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-600/30 to-transparent" />
                        </div>
                    </AnimateSection>

                    <AnimateSection delay={250}>
                        <BlogContent content={post.content} />
                    </AnimateSection>

                    {/* Author box */}
                    <AnimateSection className="mt-12 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">F</span>
                        </div>
                        <div>
                            <p className="font-bold text-white">{post.author}</p>
                            <p className="text-sm text-neutral-500">
                                Freelance ekspert i static ads, CRO og Shopify. Baseret i Viborg, Danmark.
                            </p>
                            <Link href="/om-mig" className="text-sm text-brand-500 hover:text-brand-400 mt-1 inline-flex items-center gap-1 transition-colors">
                                Læs mere om mig <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </AnimateSection>

                    {/* Læs også – andre blogindlæg */}
                    <AnimateSection className="mt-10 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
                        <h3 className="text-lg font-bold text-white mb-3">Læs også</h3>
                        <ul className="flex flex-wrap gap-3 text-sm">
                            {blogPosts
                                .filter((p) => p.slug !== post.slug)
                                .slice(0, 6)
                                .map((other) => (
                                    <li key={other.slug}>
                                        <Link href={`/blog/${other.slug}`} className="text-brand-400 hover:text-brand-300 transition-colors">
                                            {other.title}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </AnimateSection>

                    {/* CTA */}
                    <AnimateSection className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-brand-950/50 to-neutral-900/50 border border-brand-600/20 text-center">
                        <h3 className="text-xl font-bold text-white mb-3">Klar til at øge din konvertering?</h3>
                        <p className="text-neutral-400 mb-6 text-sm">Tag en gratis og uforpligtende snak om dit projekt.</p>
                        <Link href="/kontakt" className="btn-primary">
                            Kontakt mig
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimateSection>
                </div>
            </article>

            {relatedPosts.length > 0 && (
                <section className="py-12 px-6 border-t border-neutral-800/30">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-8">Relaterede artikler</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {relatedPosts.map((rp, i) => (
                                <AnimateSection key={rp.slug} delay={i * 100}>
                                    <Link href={`/blog/${rp.slug}`} className="group block">
                                        <div className="aspect-video rounded-xl overflow-hidden bg-neutral-800 mb-4 border border-neutral-800/50">
                                            <Image
                                                src={rp.image}
                                                alt={rp.title}
                                                width={600}
                                                height={338}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-xs text-brand-500 uppercase tracking-wider">{rp.category}</span>
                                        <h3 className="font-bold text-white group-hover:text-brand-400 transition-colors duration-300 line-clamp-2 mt-1">
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
