import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, User } from 'lucide-react'
import type { Metadata } from 'next'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { blogPosts } from '@/lib/data'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Blog – Guides til CRO, Shopify & Static Ads',
    description: 'Praktiske guides, tips og strategier til dig der vil have mere ud af din webshop og sociale medier markedsføring.',
    alternates: { canonical: `${SITE_URL}/blog` },
}

const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

interface BlogPageProps {
    searchParams?: { category?: string }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
    const activeCategory = searchParams?.category ?? null
    const filteredPosts = activeCategory
        ? blogPosts.filter((p) => p.category === activeCategory)
        : blogPosts
    const featuredPost = filteredPosts[0]
    const restPosts = filteredPosts.slice(1)

    return (
        <div className="pt-20 md:pt-28">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />

            <section className="py-10 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateSection className="text-center mb-12 md:mb-16">
                        <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
                            Blog & Viden
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
                            Seneste indsigter
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-left md:text-center">
                            Praktiske guides, tips og strategier til dig der vil have mere ud af din webshop og sociale medier markedsføring.
                        </p>
                    </AnimateSection>

                    <AnimateSection className="flex flex-wrap gap-2 justify-center mb-12">
                        <Link
                            href="/blog"
                            className={"px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 " + (
                                !activeCategory
                                    ? 'bg-brand-600 text-white'
                                    : 'border border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                            )}
                        >
                            Alle
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                key={cat}
                                href={`/blog?category=${encodeURIComponent(cat)}`}
                                className={"px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 " + (
                                    activeCategory === cat
                                        ? 'bg-brand-600 text-white'
                                        : 'border border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                                )}
                            >
                                {cat}
                            </Link>
                        ))}
                    </AnimateSection>
                </div>
            </section>

            <section className="py-10 px-6">
                <div className="max-w-7xl mx-auto">
                    {filteredPosts.length === 0 ? (
                        <AnimateSection className="text-center py-12 text-neutral-500">
                            <p>Ingen indlæg i denne kategori endnu.</p>
                            <Link href="/blog" className="text-brand-600 hover:text-brand-500 mt-2 inline-block">Vis alle</Link>
                        </AnimateSection>
                    ) : (
                        <>
                        {/* Featured Post */}
                        <AnimateSection className="mb-12">
                            <Link href={`/blog/${featuredPost.slug}`} className="group block">
                                <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-neutral-200/80 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/40 transition-all duration-500">
                                    <div className="aspect-video overflow-hidden bg-neutral-100">
                                        <Image
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            width={800}
                                            height={450}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            priority
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-brand-50 border border-brand-200/60 text-xs font-semibold text-brand-600 rounded-full">
                                                {featuredPost.category}
                                            </span>
                                            <span className="text-xs text-neutral-500 flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {featuredPost.readTime} læsning
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-brand-600 transition-colors duration-300">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-neutral-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                                        <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 group-hover:text-brand-500 transition-colors">
                                            Læs artiklen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </AnimateSection>

                        {/* Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {restPosts.map((post, i) => (
                                <AnimateSection key={post.slug} delay={i * 80}>
                                    <article className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden hover:border-brand-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                        <Link href={`/blog/${post.slug}`} className="block">
                                            <div className="aspect-video overflow-hidden bg-neutral-100">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    width={600}
                                                    height={338}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="p-5">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="px-2.5 py-1 bg-brand-50 border border-brand-200/60 text-xs font-medium text-brand-600 rounded-full">
                                                        {post.category}
                                                    </span>
                                                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                                <h2 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors duration-300 line-clamp-2">
                                                    {post.title}
                                                </h2>
                                                <p className="text-sm text-neutral-500 line-clamp-2 mb-4">{post.excerpt}</p>
                                                <div className="flex items-center gap-2 text-xs text-neutral-400">
                                                    <User className="w-3.5 h-3.5" />
                                                    <span>{post.author}</span>
                                                    <span>·</span>
                                                    <time dateTime={post.date}>
                                                        {new Date(post.date).toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                    </time>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                </AnimateSection>
                            ))}
                        </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    )
}
