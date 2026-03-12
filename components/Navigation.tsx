'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'

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
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
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

    // På mobil: når menuen er åben skal det altid se ud som i toppen – solid sort, ingen forsinket overgang
    const headerBg = isOpen
        ? 'bg-black border-b border-neutral-800/50'
        : isScrolled
            ? 'bg-neutral-950/80 backdrop-blur-2xl border-b border-neutral-800/50 shadow-2xl shadow-black/20'
            : 'bg-transparent'
    const headerTransition = isOpen ? 'transition-none' : mounted ? 'transition-all duration-500' : 'transition-none'

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 ${headerTransition} ${headerBg}`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <nav className="relative z-[60] flex items-center justify-between h-18 py-4">
                    <Link
                        href="/"
                        className="relative z-10 flex items-center gap-2.5 group w-10 h-10 shrink-0"
                        aria-label="Konvertio – forsiden"
                    >
                        <Image
                            src="/logo.png"
                            alt=""
                            width={40}
                            height={40}
                            className="h-10 w-10 object-contain"
                            priority
                        />
                    </Link>

                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/50">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                                            isActive
                                                ? 'text-white bg-neutral-800 font-medium'
                                                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
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
                        className="lg:hidden relative z-10 p-2 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Luk menu' : 'Åbn menu'}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </div>

            {/* Mobile overlay – solid sort med det samme, ingen langsom fade */}
            <div
                className={`lg:hidden fixed inset-0 bg-black ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                } ${isOpen ? 'transition-none' : 'transition-opacity duration-300'}`}
                style={{ top: 0, zIndex: 40 }}
            >
                <div className="flex flex-col justify-center items-center min-h-screen gap-2 px-6">
                    {navLinks.map((link, i) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-3xl font-semibold transition-all duration-300 py-3 ${
                                    isActive ? 'text-brand-500' : 'text-neutral-300 hover:text-white'
                                }`}
                                style={{
                                    transitionDelay: isOpen ? `${i * 60}ms` : '0ms',
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                }}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                    <Link
                        href="/kontakt"
                        className="btn-primary mt-8 text-base px-10 py-4"
                        style={{
                            transitionDelay: isOpen ? `${navLinks.length * 60}ms` : '0ms',
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                        }}
                    >
                        Kontakt mig
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
