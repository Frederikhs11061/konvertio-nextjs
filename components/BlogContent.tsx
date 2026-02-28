'use client'

import { useMemo } from 'react'

const proseClass = `
  prose prose-lg prose-dark max-w-none text-left
  prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-neutral-800/50 prose-h2:first:mt-0
  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
  prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-5
  prose-ul:my-5 prose-ul:pl-6 prose-li:text-neutral-300 prose-li:mb-2 prose-li:leading-relaxed
  prose-ol:my-5 prose-ol:pl-6 prose-ol:list-decimal prose-li:marker:font-bold prose-li:marker:text-brand-400
  prose-strong:text-white prose-strong:font-semibold
  prose-a:text-brand-400 prose-a:no-underline hover:prose-a:text-brand-300 prose-a:font-medium
`.replace(/\n\s+/g, ' ').trim()

export default function BlogContent({ content }: { content: string }) {
    const sections = useMemo(() => {
        const trimmed = content.trim()
        if (!trimmed) return [{ type: 'intro' as const, html: '' }]
        const parts = trimmed.split(/(?=<h2>)/i).map((p) => p.trim()).filter(Boolean)
        const result: { type: 'intro' | 'section'; html: string }[] = []
        parts.forEach((html, i) => {
            if (i === 0 && !/^<h2>/i.test(html)) {
                result.push({ type: 'intro', html })
            } else {
                result.push({ type: 'section', html })
            }
        })
        return result
    }, [content])

    return (
        <div className="space-y-0">
            {sections.map((block, i) => (
                <section key={i} className={block.type === 'section' ? 'scroll-mt-6' : undefined}>
                    <div
                        className={proseClass}
                        dangerouslySetInnerHTML={{ __html: block.html }}
                    />
                </section>
            ))}
        </div>
    )
}
