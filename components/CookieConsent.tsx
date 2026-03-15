'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'cookie_consent'

export type ConsentStatus = 'accepted' | 'rejected' | null

export function getConsentStatus(): ConsentStatus {
    if (typeof window === 'undefined') return null
    return (localStorage.getItem(STORAGE_KEY) as ConsentStatus) ?? null
}

export default function CookieConsent({ onConsent }: { onConsent?: (accepted: boolean) => void }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const status = getConsentStatus()
        if (!status) setVisible(true)
    }, [])

    const respond = (accepted: boolean) => {
        localStorage.setItem(STORAGE_KEY, accepted ? 'accepted' : 'rejected')
        setVisible(false)
        onConsent?.(accepted)
    }

    if (!visible) return null

    return (
        <div
            role="dialog"
            aria-label="Cookie samtykke"
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-5"
        >
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                Vi bruger cookies til at analysere trafikken på sitet (Google Analytics via GTM), så vi kan forbedre oplevelsen.
                Læs mere i vores{' '}
                <Link href="/cookiepolitik" className="underline text-brand-400 hover:text-brand-300 transition-colors">
                    cookiepolitik
                </Link>
                .
            </p>
            <div className="flex gap-3">
                <button
                    onClick={() => respond(true)}
                    className="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium py-2.5 rounded-xl transition-colors duration-200"
                >
                    Accepter
                </button>
                <button
                    onClick={() => respond(false)}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-neutral-300 text-sm font-medium py-2.5 rounded-xl transition-colors duration-200"
                >
                    Afvis
                </button>
            </div>
        </div>
    )
}
