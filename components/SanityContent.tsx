'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/client'

const components: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) return null
            return (
                <figure className="my-8">
                    <div className="rounded-xl overflow-hidden border border-neutral-200/60">
                        <Image
                            src={urlFor(value).width(800).url()}
                            alt={value.caption || ''}
                            width={800}
                            height={450}
                            className="w-full h-auto"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="text-sm text-neutral-500 text-center mt-2">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            )
        },
    },
    block: {
        h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-3">{children}</h3>
        ),
        normal: ({ children }) => (
            <p className="text-neutral-700 leading-relaxed mb-5">{children}</p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-brand-400 pl-5 py-2 my-6 italic text-neutral-600 bg-brand-50/40 rounded-r-lg">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-outside ml-5 space-y-2 mb-5 text-neutral-700">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-outside ml-5 space-y-2 mb-5 text-neutral-700">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
        number: ({ children }) => <li className="leading-relaxed">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-semibold text-neutral-900">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        link: ({ value, children }) => {
            const target = value?.blank ? '_blank' : undefined
            const rel = value?.blank ? 'noopener noreferrer' : undefined
            return (
                <a
                    href={value?.href}
                    target={target}
                    rel={rel}
                    className="text-brand-600 hover:text-brand-500 underline underline-offset-2 transition-colors"
                >
                    {children}
                </a>
            )
        },
    },
}

interface SanityContentProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any[]
}

export default function SanityContent({ content }: SanityContentProps) {
    return (
        <div className="prose-blog">
            <PortableText value={content} components={components} />
        </div>
    )
}
