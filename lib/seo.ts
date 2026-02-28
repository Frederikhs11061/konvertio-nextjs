// SEO schema data for JSON-LD
export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Konvertio',
    url: 'https://konvertio.dk',
    logo: 'https://konvertio.dk/logo.svg',
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'kontakt@konvertio.dk',
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
        'https://www.linkedin.com/in/frederik-høgh-simonsen/',
    ],
}

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Konvertio',
    url: 'https://konvertio.dk',
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://konvertio.dk/search?q={search_term_string}',
        query: 'required name=search_term_string',
    },
}

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Konvertio',
    description: 'Freelance ekspert i static ads, CRO og Shopify webshops til danske e-commerce virksomheder.',
    url: 'https://konvertio.dk',
    telephone: '',
    email: 'kontakt@konvertio.dk',
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
