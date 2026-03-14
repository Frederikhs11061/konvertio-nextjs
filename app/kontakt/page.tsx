'use client'

import { useState } from 'react'
import { Mail, Linkedin, MapPin, Clock, ArrowRight, Check, Send } from 'lucide-react'
import AnimateSection from '@/components/AnimateSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { contactFormSchema } from '@/lib/validations/contact'

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
    const [error, setError] = useState<string | null>(null)
    const [form, setForm] = useState({
        name: '', email: '', company: '', service: '', message: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        const parsed = contactFormSchema.safeParse(form)
        if (!parsed.success) {
            const first = parsed.error.flatten().fieldErrors
            const msg = Object.values(first).flat().find(Boolean) ?? 'Tjek felterne og prøv igen.'
            setError(msg)
            return
        }
        setLoading(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(parsed.data),
            })
            const data = await res.json().catch(() => ({}))
            if (!res.ok) {
                setError(data?.error ?? (res.status === 429 ? 'For mange forsøg – prøv igen om et øjeblik.' : 'Noget gik galt. Prøv igen.'))
                return
            }
            setSent(true)
        } catch {
            setError('Kunne ikke sende. Tjek forbindelsen og prøv igen.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="pt-20 md:pt-28">
            <Breadcrumbs items={[{ label: 'Kontakt', href: '/kontakt' }]} />

            <section className="py-10 md:py-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-100/40 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-transparent pointer-events-none" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <AnimateSection delay={0}>
                                <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
                                    Kontakt
                                </span>
                                <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
                                    Lad os tale om dit projekt
                                </h1>
                            </AnimateSection>

                            <AnimateSection delay={100}>
                                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                                    Ræk ud for en gratis og uforpligtende snak om, hvordan jeg kan hjælpe din virksomhed med at vækste online.
                                    Jeg vender tilbage inden for 24 timer.
                                </p>
                            </AnimateSection>

                            <AnimateSection delay={200} className="space-y-3 mb-10">
                                {benefits.map((b) => (
                                    <div key={b} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-neutral-700">{b}</span>
                                    </div>
                                ))}
                            </AnimateSection>

                            <AnimateSection delay={300} className="space-y-4 mb-10">
                                <a
                                    href="mailto:frederik@konvertio.dk"
                                    className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200/80 bg-white hover:border-brand-200 hover:shadow-sm transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-200/60 group-hover:bg-brand-100 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                        <Mail className="w-5 h-5 text-brand-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 mb-0.5">Email</p>
                                        <p className="font-medium text-neutral-900">frederik@konvertio.dk</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/frederik-høgh-simonsen/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200/80 bg-white hover:border-brand-200 hover:shadow-sm transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-200/60 group-hover:bg-brand-100 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                        <Linkedin className="w-5 h-5 text-brand-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 mb-0.5">LinkedIn</p>
                                        <p className="font-medium text-neutral-900 flex items-center gap-1">
                                            Connect på LinkedIn
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200/80 bg-white">
                                    <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200/60 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-neutral-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 mb-0.5">Lokation</p>
                                        <p className="font-medium text-neutral-900">Viborg, Danmark</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200/80 bg-white">
                                    <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200/60 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-neutral-500" />
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

                        <AnimateSection delay={200} animation="slide-right">
                            <div className="bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-sm">
                                {sent ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200/60 flex items-center justify-center mx-auto mb-4">
                                            <Check className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-900 mb-2">Besked sendt!</h3>
                                        <p className="text-neutral-500 mb-6">Jeg vender tilbage inden for 24 timer. Tak for din henvendelse.</p>
                                        <button
                                            onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', service: '', message: '' }) }}
                                            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
                                        >
                                            Send en ny besked
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-xl font-bold text-neutral-900 mb-2">Send en besked</h2>
                                        <p className="text-neutral-500 text-sm mb-6">Udfyld formularen og jeg vender tilbage hurtigst muligt.</p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {error && (
                                                <div className="p-3 rounded-lg bg-red-50 border border-red-200/60 text-red-600 text-sm">
                                                    {error}
                                                </div>
                                            )}
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="name">
                                                        Navn <span className="text-brand-600">*</span>
                                                    </label>
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        required
                                                        value={form.name}
                                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                        placeholder="Dit navn"
                                                        className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="email">
                                                        Email <span className="text-brand-600">*</span>
                                                    </label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        required
                                                        value={form.email}
                                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                        placeholder="din@email.dk"
                                                        className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all text-sm"
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
                                                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all text-sm"
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
                                                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200/80 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all text-sm"
                                                >
                                                    <option value="">Vælg en ydelse</option>
                                                    {services.map((s) => (
                                                        <option key={s.value} value={s.value}>{s.label}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="message">
                                                    Besked <span className="text-brand-600">*</span>
                                                </label>
                                                <textarea
                                                    id="message"
                                                    required
                                                    rows={5}
                                                    value={form.message}
                                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                    placeholder="Fortæl mig om dit projekt, dine mål, og hvad du gerne vil opnå..."
                                                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all resize-none text-sm"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-600/25 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
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
