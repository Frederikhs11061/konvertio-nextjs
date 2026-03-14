'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale'

interface AnimateSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    animation?: AnimationType
    as?: 'div' | 'section' | 'article'
}

const variants: Record<AnimationType, Variants> = {
    'fade-up': {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-in': {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    'slide-left': {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    'slide-right': {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    'scale': {
        hidden: { opacity: 0, scale: 0.93 },
        visible: { opacity: 1, scale: 1 },
    },
}

export default function AnimateSection({
    children,
    className = '',
    delay = 0,
    animation = 'fade-up',
    as: Tag = 'div',
}: AnimateSectionProps) {
    const MotionTag = motion[Tag] as typeof motion.div

    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            variants={variants[animation]}
            transition={{
                duration: 0.65,
                delay: delay / 1000,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </MotionTag>
    )
}
