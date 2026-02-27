'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface AnimateSectionProps {
    children: ReactNode
    className?: string
    delay?: number
}

export default function AnimateSection({ children, className = '', delay = 0 }: AnimateSectionProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.style.opacity = '1'
                        el.style.transform = 'translateY(0)'
                    }, delay)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s cubic-bezier(0.165, 0.840, 0.440, 1), transform 0.7s cubic-bezier(0.165, 0.840, 0.440, 1)',
            }}
        >
            {children}
        </div>
    )
}
