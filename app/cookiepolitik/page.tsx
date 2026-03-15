import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Cookiepolitik',
    description: 'Læs om hvilke cookies Konvertio bruger og hvordan du administrerer dit samtykke.',
    alternates: { canonical: `${SITE_URL}/cookiepolitik` },
    robots: { index: false, follow: false },
}

export default function CookiePolicyPage() {
    return (
        <div className="pt-20 md:pt-28 bg-blue-100 min-h-screen">
            <Breadcrumbs items={[{ label: 'Cookiepolitik', href: '/cookiepolitik' }]} />
            <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-blue-100 to-white">
                <div className="max-w-3xl mx-auto prose prose-neutral prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-a:text-brand-600 hover:prose-a:text-brand-700">
                    <h1>Cookiepolitik</h1>
                    <p><strong>Sidst opdateret:</strong> marts 2025</p>

                    <h2>Hvad er cookies?</h2>
                    <p>
                        Cookies er små tekstfiler, der gemmes på din enhed, når du besøger et website.
                        De bruges til at huske dine præferencer og analysere brugeradfærd.
                    </p>

                    <h2>Hvilke cookies bruger vi?</h2>

                    <h3>Nødvendige cookies</h3>
                    <p>
                        Disse cookies er nødvendige for at sitet fungerer korrekt og kræver ikke dit samtykke.
                    </p>
                    <table>
                        <thead>
                            <tr><th>Navn</th><th>Formål</th><th>Varighed</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>cookie_consent</td><td>Husker dit cookievalg (localStorage)</td><td>Indtil du rydder browser-data</td></tr>
                        </tbody>
                    </table>

                    <h3>Analytiske cookies (kræver samtykke)</h3>
                    <p>
                        Disse cookies indsamles via Google Analytics (Google Tag Manager) og hjælper os med at forstå,
                        hvordan besøgende bruger sitet. Cookies sættes kun, hvis du accepterer.
                    </p>
                    <table>
                        <thead>
                            <tr><th>Navn</th><th>Formål</th><th>Varighed</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>_ga</td><td>Skelner mellem besøgende</td><td>2 år</td></tr>
                            <tr><td>_ga_*</td><td>Gemmer og tæller sidevisninger</td><td>2 år</td></tr>
                            <tr><td>_gid</td><td>Skelner mellem besøgende</td><td>24 timer</td></tr>
                        </tbody>
                    </table>

                    <h2>Administrer dit samtykke</h2>
                    <p>
                        Du kan til enhver tid trække dit samtykke tilbage ved at rydde dine browser-cookies og
                        afvise ved næste besøg. Du kan også administrere cookies direkte i din browsers indstillinger.
                    </p>

                    <h2>Tredjeparts-links</h2>
                    <p>
                        Google Analytics er underlagt Googles egne privatlivs- og cookiepolitikker.
                        Læs mere på <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com</a>.
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        Har du spørgsmål til vores brug af cookies, kan du skrive til{' '}
                        <a href="mailto:frederik@konvertio.dk">frederik@konvertio.dk</a>.
                    </p>
                </div>
            </section>
        </div>
    )
}
