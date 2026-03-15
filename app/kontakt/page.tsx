import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import KontaktClient from '@/components/KontaktClient'
import { getSiteSettings } from '@/lib/sanity/fetchSettings'
import { SITE_URL } from '@/lib/site'

export const revalidate = 60

export const metadata: Metadata = {
    title: 'Kontakt – Konvertio',
    description: 'Tag kontakt for en gratis og uforpligtende snak om dit projekt. Svar inden for 24 timer.',
    alternates: { canonical: `${SITE_URL}/kontakt` },
}

const defaultContact = {
    badge: 'Kontakt',
    h1: 'Lad os tale om dit projekt',
    subtitle: 'Ræk ud for en gratis og uforpligtende dialog om, hvordan jeg kan hjælpe din virksomhed med at vækste. Jeg vender tilbage inden for 24 timer.',
    benefits: [
        'Gratis og uforpligtende snak',
        'Svar inden for 24 timer',
        'Ingen binding, ingen skjulte gebyrer',
    ],
    email: 'frederik@konvertio.dk',
    linkedin: 'https://www.linkedin.com/in/frederik-h%C3%B8gh-simonsen/',
    location: 'Viborg, Danmark',
    responseTime: 'Inden for 24 timer',
    availabilityText: 'Tilgængelig for nye projekter',
}

export default async function KontaktPage() {
    const settings = await getSiteSettings()
    const c = settings?.contact ?? {}

    const props = {
        badge: c.badge ?? defaultContact.badge,
        h1: c.h1 ?? defaultContact.h1,
        subtitle: c.subtitle ?? defaultContact.subtitle,
        benefits: (c.benefits && c.benefits.length > 0) ? c.benefits : defaultContact.benefits,
        email: c.email ?? defaultContact.email,
        linkedin: c.linkedin ?? defaultContact.linkedin,
        location: c.location ?? defaultContact.location,
        responseTime: c.responseTime ?? defaultContact.responseTime,
        availabilityText: c.availabilityText ?? defaultContact.availabilityText,
    }

    return (
        <div className="pt-20 md:pt-28 bg-blue-100">
            <Breadcrumbs items={[{ label: 'Kontakt', href: '/kontakt' }]} />
            <KontaktClient {...props} />
        </div>
    )
}
