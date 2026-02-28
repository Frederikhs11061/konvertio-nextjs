'use client'

import { useEffect, useRef, ReactNode } from 'react'

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale'

interface AnimateSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    animation?: AnimationType
    as?: 'div' | 'section' | 'article'
}

const animationStyles: Record<AnimationType, { initial: string; final: string }> = {
    'fade-up': {
        initial: 'opacity:0;transform:translateY(32px)',
        final: 'opacity:1;transform:translateY(0)',
    },
    'fade-in': {
        initial: 'opacity:0',
        final: 'opacity:1',
    },
    'slide-left': {
        initial: 'opacity:0;transform:translateX(-40px)',
        final: 'opacity:1;transform:translateX(0)',
    },
    'slide-right': {
        initial: 'opacity:0;transform:translateX(40px)',
        final: 'opacity:1;transform:translateX(0)',
    },
    'scale': {
        initial: 'opacity:0;transform:scale(0.92)',
        final: 'opacity:1;transform:scale(1)',
    },
}

export default function AnimateSection({
    children,
    className = '',
    delay = 0,
    animation = 'fade-up',
    as: Tag = 'div',
}: AnimateSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const anim = animationStyles[animation]

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const vh = window.innerHeight
        const rect = el.getBoundingClientRect()
        // Alt i den første skærm er allerede synligt (vi renderer med opacity 1). Ingen ændring.
        if (rect.top < vh * 1.05) return

        // Længere nede: behold synlig. Animation kun når bruger scroller ned og elementet kommer i view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.style.cssText = `${anim.final};transition:opacity 0.35s cubic-bezier(0.16,1,0.3,1),transform 0.35s cubic-bezier(0.16,1,0.3,1);`
                    }, Math.min(delay, 80))
                    observer.unobserve(el)
                }
            },
            { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [delay, anim])

    return (
        <Tag
            ref={ref as React.RefObject<HTMLDivElement>}
            className={className}
            style={{
                opacity: 1,
                transform: 'none',
                transition: 'opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </Tag>
    )
}
