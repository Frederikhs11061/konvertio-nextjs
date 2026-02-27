'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Hjem', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Om mig', href: '/om-mig' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
]

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-lg font-semibold text-neutral-900 hover:opacity-70 transition-opacity"
                    >
                        Konvertio
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm transition-colors ${pathname === link.href
                                        ? 'text-neutral-900 font-medium'
                                        : 'text-neutral-600 hover:text-neutral-900'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center rounded-full bg-neutral-900 text-white hover:bg-neutral-700 px-5 py-2 text-sm font-medium transition-all hover:scale-[1.02]"
                        >
                            Kontakt mig
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-neutral-900"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Åbn menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-neutral-200 shadow-lg">
                    <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-lg transition-colors ${pathname === link.href
                                        ? 'text-neutral-900 font-semibold'
                                        : 'text-neutral-600 hover:text-neutral-900'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/kontakt"
                            className="inline-flex justify-center items-center rounded-full bg-neutral-900 text-white py-3 text-sm font-medium mt-2"
                        >
                            Kontakt mig
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
