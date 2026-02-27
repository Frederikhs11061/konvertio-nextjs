'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Linkedin, MapPin, Clock, ArrowRight, Check, Send } from 'lucide-react'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'

const benefits = [
    'Gratis og uforpligtende snak',
    'Svar inden for 24 timer',
    'Ingen binding, ingen skjulte gebyrer',
]

const services = [
    { value: 'static-ads', label: 'Static Ads' },
    { value: 'cro', label: 'CRO Analyse' },
    { value: 'shopify', label: 'Shopify Webshop' },
    { value: 'website', label: 'WordPress/Website' },
    { value: 'facebook-ads', label: 'Facebook/Instagram Ads' },
    { value: 'andet', label: 'Andet' },
]

export default function KontaktPage() {
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '', email: '', company: '', service: '', message: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        await new Promise((r) => setTimeout(r, 800))
        setLoading(false)
        setSent(true)
    }

    return (
        <div className="pt-16">
            <Breadcrumbs items={[{ label: 'Kontakt', href: '/kontakt' }]} />

            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left – Contact info */}
                        <div>
                            <AnimateSection delay={0}>
                                <span className="inline-block text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                                    Kontakt
                                </span>
                                <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight mb-6">
                                    Lad os tale om dit projekt
                                </h1>
                            </AnimateSection>

                            <AnimateSection delay={100}>
                                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                                    Ræk ud for en gratis og uforpligtende snak om, hvordan jeg kan hjælpe din virksomhed med at vækste online.
                                    Jeg vender tilbage inden for 24 timer.
                                </p>
                            </AnimateSection>

                            {/* Benefits */}
                            <AnimateSection delay={200} className="space-y-3 mb-10">
                                {benefits.map((b) => (
                                    <div key={b} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-neutral-700">{b}</span>
                                    </div>
                                ))}
                            </AnimateSection>

                            {/* Contact methods */}
                            <AnimateSection delay={300} className="space-y-4 mb-10">
                                <a
                                    href="mailto:kontakt@konvertio.dk"
                                    className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center flex-shrink-0 transition-colors">
                                        <Mail className="w-5 h-5 text-neutral-700" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 mb-0.5">Email</p>
                                        <p className="font-medium text-neutral-900">kontakt@konvertio.dk</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/frederik-høgh-simonsen/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center flex-shrink-0 transition-colors">
                                        <Linkedin className="w-5 h-5 text-neutral-700" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 mb-0.5">LinkedIn</p>
                                        <p className="font-medium text-neutral-900 flex items-center gap-1">
                                            Connect på LinkedIn
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200">
                                    <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-neutral-700" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 mb-0.5">Lokation</p>
                                        <p className="font-medium text-neutral-900">Viborg, Danmark</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200">
                                    <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-neutral-700" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 mb-0.5">Svartid</p>
                                        <p className="font-medium text-neutral-900">Inden for 24 timer</p>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs text-neutral-500">Tilgængelig for nye projekter</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimateSection>
                        </div>

                        {/* Right – Contact form */}
                        <AnimateSection delay={200}>
                            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                                {sent ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                            <Check className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-neutral-900 mb-2">Besked sendt!</h3>
                                        <p className="text-neutral-600 mb-6">Jeg vender tilbage inden for 24 timer. Tak for din henvendelse.</p>
                                        <button
                                            onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', service: '', message: '' }) }}
                                            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                                        >
                                            Send en ny besked
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-xl font-semibold text-neutral-900 mb-2">Send en besked</h2>
                                        <p className="text-neutral-600 text-sm mb-6">Udfyld formularen og jeg vender tilbage hurtigst muligt.</p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="name">
                                                        Navn <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        required
                                                        value={form.name}
                                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                        placeholder="Dit navn"
                                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="email">
                                                        Email <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        required
                                                        value={form.email}
                                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                        placeholder="din@email.dk"
                                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="company">
                                                    Virksomhed (valgfrit)
                                                </label>
                                                <input
                                                    id="company"
                                                    type="text"
                                                    value={form.company}
                                                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                                                    placeholder="Din virksomhed"
                                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all text-sm"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="service">
                                                    Hvad har du brug for hjælp til?
                                                </label>
                                                <select
                                                    id="service"
                                                    value={form.service}
                                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all text-sm"
                                                >
                                                    <option value="">Vælg en ydelse</option>
                                                    {services.map((s) => (
                                                        <option key={s.value} value={s.value}>{s.label}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="message">
                                                    Besked <span className="text-red-500">*</span>
                                                </label>
                                                <textarea
                                                    id="message"
                                                    required
                                                    rows={5}
                                                    value={form.message}
                                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                    placeholder="Fortæl mig om dit projekt, dine mål, og hvad du gerne vil opnå..."
                                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none text-sm"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-700 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                                            >
                                                {loading ? (
                                                    'Sender...'
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Send besked
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-xs text-neutral-400 text-center">
                                                Ingen spam. Dine oplysninger behandles fortroligt.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </AnimateSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
