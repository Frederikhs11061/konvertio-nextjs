import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import AnimateSection from './AnimateSection'

const footerLinks = [
    { label: 'Ydelser', href: '/ydelser' },
    { label: 'Om mig', href: '/om-mig' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontakt', href: '/kontakt' },
]

const serviceLinks = [
    { label: 'Static Ads', href: '/ydelser/static-ads' },
    { label: 'CRO Analyse', href: '/ydelser/cro-analyse' },
    { label: 'Shopify Webshop', href: '/ydelser/shopify-webshop' },
    { label: 'Websites', href: '/ydelser/wordpress-website' },
]

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-slate-900">
            <AnimateSection animation="fade-in" className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-5">
                            <Image
                                src="/logo.png"
                                alt="Konvertio"
                                width={128}
                                height={128}
                                className="h-32 w-32 object-contain"
                            />
                        </Link>
                        <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-6">
                            Freelance ekspert i static ads, CRO og Shopify webshops. Baseret i Viborg, Danmark.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="mailto:frederik@konvertio.dk"
                                className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/20 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/frederik-h%C3%B8gh-simonsen/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/20 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="min-w-[7.5rem]">
                        <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="min-w-[7.5rem]">
                        <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                            Ydelser
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                            Kontakt
                        </h3>
                        <div className="space-y-3 text-sm text-neutral-400">
                            <a href="mailto:frederik@konvertio.dk" className="block hover:text-white transition-colors duration-300">
                                frederik@konvertio.dk
                            </a>
                            <p>Viborg, Danmark</p>
                            <p>Man–Fre 09:00–17:00</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500">
                        © {new Date().getFullYear()} Konvertio · Viborg, Danmark
                    </p>
                    <div className="flex gap-4">
                        <Link href="/privatlivspolitik" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-300">
                            Privatlivspolitik
                        </Link>
                        <Link href="/cookiepolitik" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-300">
                            Cookiepolitik
                        </Link>
                    </div>
                </div>
            </AnimateSection>
        </footer>
    )
}
