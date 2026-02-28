'use client'

import { useMemo } from 'react'
import { BookOpen, Zap, Target, TrendingUp } from 'lucide-react'

const sectionIcons = [BookOpen, Zap, Target, TrendingUp]

const proseClass = `
  prose prose-lg prose-dark max-w-none text-left
  prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
  prose-h2:text-2xl prose-h2:mt-0 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-neutral-800/50
  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
  prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-4
  prose-ul:my-4 prose-li:text-neutral-300 prose-li:mb-1
  prose-strong:text-white prose-strong:font-semibold
  prose-a:text-brand-400 prose-a:no-underline hover:prose-a:text-brand-300
`.replace(/\n\s+/g, ' ').trim()

function SectionDivider({ index }: { index: number }) {
    const Icon = sectionIcons[index % sectionIcons.length]
    return (
        <div className="flex items-center gap-4 my-10 md:my-12" aria-hidden>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />
            <div className="w-10 h-10 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-brand-500" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-600/40 to-transparent" />
        </div>
    )
}

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
        <div className="space-y-2">
            {sections.map((block, i) => (
                <div key={i}>
                    {block.type === 'section' && i > 0 && <SectionDivider index={i} />}
                    <section className={block.type === 'section' ? 'scroll-mt-6' : undefined}>
                        <div
                            className={proseClass}
                            dangerouslySetInnerHTML={{ __html: block.html }}
                        />
                    </section>
                </div>
            ))}
        </div>
    )
}
