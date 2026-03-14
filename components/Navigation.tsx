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

    // Home: desktop transparent (dark hero below). Sub-pages: always dark.
    const isHome = pathname === '/'
    const headerBg = isScrolled
        ? 'bg-slate-900/95 backdrop-blur-2xl shadow-lg shadow-black/30'
        : isHome
            ? 'bg-slate-900/80 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none'
            : 'bg-slate-900/90 backdrop-blur-xl'
    const headerBorder = isScrolled ? 'border-white/10' : 'border-transparent'
    const headerTransition = mounted ? 'transition-all duration-500' : 'transition-none'

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 border-b ${headerTransition} ${headerBg} ${headerBorder}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <nav className={`relative z-[60] flex items-center justify-between transition-all duration-500 ${isScrolled ? 'py-2 lg:py-2' : 'py-3 lg:py-4'}`}>
                        <Link
                            href="/"
                            className={`relative z-10 flex items-center gap-2.5 group shrink-0 transition-all duration-500 ${isScrolled ? 'w-14 h-14 lg:w-20 lg:h-20' : 'w-[60px] h-[60px] lg:w-24 lg:h-24'}`}
                            aria-label="Konvertio – forsiden"
                        >
                            <Image
                                src="/logo.png"
                                alt=""
                                width={128}
                                height={128}
                                className={`object-contain transition-all duration-500 ${isScrolled ? 'h-14 w-14 lg:h-20 lg:w-20' : 'h-[60px] w-[60px] lg:h-24 lg:w-24'}`}
                                priority
                            />
                        </Link>

                        <div className="hidden lg:flex items-center">
                            <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`relative px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                                                isActive
                                                    ? 'text-white bg-white/20 shadow-sm font-medium'
                                                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
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
                                Kom i gang
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <button
                            className="lg:hidden relative z-10 p-2 text-white"
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
                className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[82%] max-w-xs bg-slate-900 border-l border-white/10 flex flex-col transition-transform duration-300 ease-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <Link href="/" onClick={() => setIsOpen(false)} aria-label="Forside">
                        <Image src="/logo.png" alt="Konvertio" width={80} height={80} className="h-10 w-auto object-contain" />
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-neutral-400 hover:text-white transition-colors rounded-lg">
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
                                                ? 'bg-brand-600/20 text-white border border-brand-400/30'
                                                : 'text-neutral-300 hover:bg-white/10 hover:text-white'
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
                <div className="px-4 pb-8 pt-4 border-t border-white/10 space-y-3">
                    <Link
                        href="/kontakt"
                        className="btn-primary w-full justify-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Kom i gang
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="mailto:frederik@konvertio.dk"
                        className="flex items-center justify-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors py-1"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        frederik@konvertio.dk
                    </a>
                </div>
            </div>
        </>
    )
}
