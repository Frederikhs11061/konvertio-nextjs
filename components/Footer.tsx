import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin } from 'lucide-react'

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
        <footer className="relative border-t border-zinc-800/60 bg-zinc-950">
            <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-5">
                            <Image
                                src="/logo.png"
                                alt="Konvertio"
                                width={128}
                                height={128}
                                className="h-20 w-20 object-contain opacity-90"
                            />
                        </Link>
                        <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-6">
                            Freelance ekspert i static ads, CRO og Shopify webshops. Baseret i Viborg, Danmark.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="mailto:frederik@konvertio.dk"
                                className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-700 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/frederik-høgh-simonsen/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-700 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="min-w-[7.5rem]">
                        <h3 className="text-xs font-semibold text-zinc-400 mb-5 uppercase tracking-widest">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-500 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="min-w-[7.5rem]">
                        <h3 className="text-xs font-semibold text-zinc-400 mb-5 uppercase tracking-widest">
                            Ydelser
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-500 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold text-zinc-400 mb-5 uppercase tracking-widest">
                            Kontakt
                        </h3>
                        <div className="space-y-3 text-sm text-zinc-500">
                            <a href="mailto:frederik@konvertio.dk" className="block hover:text-white transition-colors duration-300">
                                frederik@konvertio.dk
                            </a>
                            <p>Viborg, Danmark</p>
                            <p>Man–Fre 09:00–17:00</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-600">
                        © {new Date().getFullYear()} Konvertio · Viborg, Danmark
                    </p>
                    <p className="text-xs text-zinc-600">
                        CVR: Konvertio
                    </p>
                </div>
            </div>
        </footer>
    )
}
