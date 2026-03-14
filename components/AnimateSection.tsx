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

export default function AnimateSection({
    children,
    className = '',
    delay = 0,
    animation = 'fade-up',
    as: Tag = 'div',
}: AnimateSectionProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        // Elements already in viewport on load: show immediately, no animation
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.95) {
            el.style.opacity = '1'
            el.style.transform = 'none'
            return
        }

        // Below fold: hide and animate in when scrolled into view
        el.style.opacity = '0'
        el.style.transform = animation === 'fade-in' ? 'none'
            : animation === 'slide-left' ? 'translateX(-24px)'
            : animation === 'slide-right' ? 'translateX(24px)'
            : animation === 'scale' ? 'scale(0.96)'
            : 'translateY(20px)'

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const t = setTimeout(() => {
                        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
                        el.style.opacity = '1'
                        el.style.transform = 'none'
                    }, Math.min(delay, 200))
                    observer.unobserve(el)
                    return () => clearTimeout(t)
                }
            },
            { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [delay, animation])

    return (
        <Tag
            ref={ref as React.RefObject<HTMLDivElement>}
            className={className}
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </Tag>
    )
}
