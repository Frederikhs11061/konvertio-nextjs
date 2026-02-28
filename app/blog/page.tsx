import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, User } from 'lucide-react'
import type { Metadata } from 'next'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { blogPosts } from '@/lib/data'

export const metadata: Metadata = {
    title: 'Blog – Guides til CRO, Shopify & Static Ads',
    description: 'Praktiske guides, tips og strategier til dig der vil have mere ud af din webshop og sociale medier markedsføring.',
    alternates: { canonical: 'https://konvertio.dk/blog' },
}

const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

export default function BlogPage() {
    return (
        <div className="pt-20">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />

            <section className="py-10 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateSection className="text-center mb-12 md:mb-16">
                        <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-wider mb-4">
                            Blog & Viden
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                            Seneste indsigter
                        </h1>
                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-left md:text-center">
                            Praktiske guides, tips og strategier til dig der vil have mere ud af din webshop og sociale medier markedsføring.
                        </p>
                    </AnimateSection>

                    <AnimateSection className="flex flex-wrap gap-2 justify-center mb-12">
                        <span className="px-4 py-2 rounded-full bg-brand-600 text-white text-sm font-medium">
                            Alle
                        </span>
                        {categories.map((cat) => (
                            <span
                                key={cat}
                                className="px-4 py-2 rounded-full border border-neutral-800 text-neutral-400 text-sm hover:bg-neutral-800 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                {cat}
                            </span>
                        ))}
                    </AnimateSection>

                    {/* Featured Post */}
                    <AnimateSection className="mb-12">
                        <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
                            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 hover:border-neutral-700/50 transition-all duration-500">
                                <div className="aspect-video overflow-hidden bg-neutral-800">
                                    <Image
                                        src={blogPosts[0].image}
                                        alt={blogPosts[0].title}
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-brand-600/10 border border-brand-600/20 text-xs font-semibold text-brand-400 rounded-full">
                                            {blogPosts[0].category}
                                        </span>
                                        <span className="text-xs text-neutral-500 flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {blogPosts[0].readTime} læsning
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors duration-300">
                                        {blogPosts[0].title}
                                    </h2>
                                    <p className="text-neutral-400 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 group-hover:text-brand-400 transition-colors">
                                        Læs artiklen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </AnimateSection>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.slice(1).map((post, i) => (
                            <AnimateSection key={post.slug} delay={i * 80}>
                                <article>
                                    <Link href={`/blog/${post.slug}`} className="group block">
                                        <div className="aspect-video rounded-xl overflow-hidden bg-neutral-800 mb-4 border border-neutral-800/50">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={600}
                                                height={338}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-2.5 py-1 bg-brand-600/10 border border-brand-600/20 text-xs font-medium text-brand-400 rounded-full">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-neutral-600 flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h2 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-neutral-500 line-clamp-2 mb-4">{post.excerpt}</p>
                                        <div className="flex items-center gap-2 text-xs text-neutral-600">
                                            <User className="w-3.5 h-3.5" />
                                            <span>{post.author}</span>
                                            <span>·</span>
                                            <time dateTime={post.date}>
                                                {new Date(post.date).toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' })}
                                            </time>
                                        </div>
                                    </Link>
                                </article>
                            </AnimateSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
