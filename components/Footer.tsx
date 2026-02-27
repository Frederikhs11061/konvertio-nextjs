import Link from 'next/link'
import { Mail, Linkedin } from 'lucide-react'

const footerLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Om mig', href: '/om-mig' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontakt', href: '/kontakt' },
]

export default function Footer() {
    return (
        <footer className="py-14 px-6 bg-neutral-50 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">K</span>
                            </div>
                            <span className="font-semibold text-neutral-900">Konvertio</span>
                        </Link>
                        <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                            Freelance ekspert i static ads, CRO og Shopify webshops. Baseret i Viborg, Danmark.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">
                            Kontakt
                        </h3>
                        <div className="space-y-3">
                            <a
                                href="mailto:kontakt@konvertio.dk"
                                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                kontakt@konvertio.dk
                            </a>
                            <a
                                href="https://www.linkedin.com/in/frederik-høgh-simonsen/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500">
                        © {new Date().getFullYear()} Konvertio · Viborg, Danmark
                    </p>
                    <p className="text-xs text-neutral-500">
                        CVR: Konvertio
                    </p>
                </div>
            </div>
        </footer>
    )
}
