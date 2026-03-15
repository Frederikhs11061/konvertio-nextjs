import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import GTMProvider from '@/components/GTMProvider'
import { organizationSchema, websiteSchema, localBusinessSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Konvertio | Static Ads, CRO & Shopify Ekspert',
    template: '%s | Konvertio',
  },
  description: 'Jeg hjælper danske e-commerce virksomheder med at vækste online gennem static ads der konverterer, CRO-analyser og Shopify-webshops.',
  keywords: ['static ads', 'CRO', 'konverteringsoptimering', 'Shopify', 'e-commerce', 'Facebook ads', 'Instagram ads', 'Viborg'],
  authors: [{ name: 'Frederik – Konvertio' }],
  creator: 'Konvertio',
  publisher: 'Konvertio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: SITE_URL,
    siteName: 'Konvertio',
    title: 'Konvertio | Static Ads, CRO & Shopify Ekspert',
    description: 'Jeg hjælper danske e-commerce virksomheder med at vækste online gennem static ads der konverterer, CRO-analyser og Shopify-webshops.',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Konvertio - Static Ads, CRO & Shopify Ekspert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konvertio | Static Ads, CRO & Shopify Ekspert',
    description: 'Jeg hjælper danske e-commerce virksomheder med at vækste online.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${poppins.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col text-neutral-900">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <GTMProvider />
      </body>
    </html>
  )
}
