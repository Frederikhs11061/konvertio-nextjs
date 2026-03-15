import { SITE_URL } from '@/lib/site'

// SEO schema data for JSON-LD
export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Konvertio',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'frederik@konvertio.dk',
        contactType: 'customer service',
        areaServed: 'DK',
        availableLanguage: 'Danish',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Viborg',
        addressCountry: 'DK',
    },
    sameAs: [
        'https://www.linkedin.com/in/frederik-h%C3%B8gh-simonsen/',
    ],
}

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Konvertio',
    url: SITE_URL,
    potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/search?q={search_term_string}`,
        query: 'required name=search_term_string',
    },
}

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Konvertio',
    description: 'Specialist i static ads, CRO og Shopify webshops til danske e-commerce virksomheder.',
    url: SITE_URL,
    email: 'frederik@konvertio.dk',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Viborg',
        addressRegion: 'Midtjylland',
        addressCountry: 'DK',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 56.4534,
        longitude: 9.4027,
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    priceRange: '$$',
    currenciesAccepted: 'DKK',
    paymentAccepted: 'Bank transfer',
    areaServed: {
        '@type': 'Country',
        name: 'Denmark',
    },
}
