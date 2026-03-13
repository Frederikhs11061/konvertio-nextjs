'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight, Mail } from 'lucide-react'

const navLinks = [
    { label: 'Hjem', href: '/' },
    { label: 'Ydelser', href: '/ydelser' },
    { label: 'Om mig', href: '/om-mig' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
]

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 4)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const headerBg = isScrolled
        ? 'bg-white/95 backdrop-blur-2xl shadow-sm'
        : 'bg-white/80 backdrop-blur-xl'
    const headerBorder = isScrolled ? 'border-neutral-200/80' : 'border-neutral-200/30'
    const headerTransition = mounted ? 'transition-all duration-500' : 'transition-none'

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 border-b ${headerTransition} ${headerBg} ${headerBorder}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <nav className={`relative z-[60] flex items-center justify-between transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
                        <Link
                            href="/"
                            className={`relative z-10 flex items-center gap-2.5 group shrink-0 transition-all duration-500 ${isScrolled ? 'w-20 h-20' : 'w-32 h-32'}`}
                            aria-label="Konvertio – forsiden"
                        >
                            <Image
                                src="/logo.png"
                                alt=""
                                width={128}
                                height={128}
                                className={`object-contain transition-all duration-500 ${isScrolled ? 'h-20 w-20' : 'h-32 w-32'}`}
                                priority
                            />
                        </Link>

                        <div className="hidden lg:flex items-center">
                            <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-neutral-100/80 backdrop-blur-xl border border-neutral-200/60">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`relative px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                                                isActive
                                                    ? 'text-neutral-900 bg-white shadow-sm font-medium'
                                                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/70'
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <Link href="/kontakt" className="btn-primary text-sm px-6 py-2.5">
                                Kontakt mig
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <button
                            className="lg:hidden relative z-10 p-2 text-neutral-700"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? 'Luk menu' : 'Åbn menu'}
                        >
                            <Menu className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} />
                            <X className={`w-6 h-6 absolute top-2 left-2 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Backdrop */}
            <div
                className={`lg:hidden fixed inset-0 z-40 bg-neutral-900/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <div
                className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[82%] max-w-xs bg-white border-l border-neutral-200/60 flex flex-col transition-transform duration-300 ease-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200/60">
                    <Link href="/" onClick={() => setIsOpen(false)} aria-label="Forside">
                        <Image src="/logo.png" alt="Konvertio" width={80} height={80} className="h-10 w-auto object-contain" />
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-neutral-500 hover:text-neutral-900 transition-colors rounded-lg">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                    <ul className="space-y-1">
                        {navLinks.map((link, i) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'bg-brand-50 text-brand-700 border border-brand-200/60'
                                                : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                                        }`}
                                        style={{
                                            transitionDelay: isOpen ? `${60 + i * 35}ms` : '0ms',
                                            transform: isOpen ? 'translateX(0)' : 'translateX(16px)',
                                            opacity: isOpen ? 1 : 0,
                                        }}
                                    >
                                        {link.label}
                                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Bottom CTA */}
                <div className="px-4 pb-8 pt-4 border-t border-neutral-200/60 space-y-3">
                    <Link
                        href="/kontakt"
                        className="btn-primary w-full justify-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Kontakt mig
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="mailto:frederik@konvertio.dk"
                        className="flex items-center justify-center gap-2 text-sm text-neutral-500 hover:text-neutral-700 transition-colors py-1"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        frederik@konvertio.dk
                    </a>
                </div>
            </div>
        </>
    )
}
