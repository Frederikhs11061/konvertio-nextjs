import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Privatlivspolitik',
    description: 'Læs hvordan Konvertio behandler dine personoplysninger i overensstemmelse med GDPR.',
    alternates: { canonical: `${SITE_URL}/privatlivspolitik` },
    robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
    return (
        <div className="pt-20 md:pt-28 bg-blue-100 min-h-screen">
            <Breadcrumbs items={[{ label: 'Privatlivspolitik', href: '/privatlivspolitik' }]} />
            <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-blue-100 to-white">
                <div className="max-w-3xl mx-auto prose prose-neutral prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-a:text-brand-600 hover:prose-a:text-brand-700">
                    <h1>Privatlivspolitik</h1>
                    <p><strong>Sidst opdateret:</strong> marts 2025</p>

                    <h2>1. Dataansvarlig</h2>
                    <p>
                        Konvertio<br />
                        Viborg, Danmark<br />
                        E-mail: <a href="mailto:frederik@konvertio.dk">frederik@konvertio.dk</a>
                    </p>

                    <h2>2. Hvilke oplysninger indsamler vi?</h2>
                    <p>Vi indsamler følgende personoplysninger, når du kontakter os via kontaktformularen:</p>
                    <ul>
                        <li>Navn</li>
                        <li>E-mailadresse</li>
                        <li>Virksomhedsnavn (valgfrit)</li>
                        <li>Besked</li>
                    </ul>
                    <p>
                        Derudover indsamler vi anonymiserede brugsdata via Google Analytics (Google Tag Manager),
                        hvis du har accepteret cookies. Dette inkluderer sidevisninger, sessionslængde og enheder,
                        men ingen personhenførbare oplysninger.
                    </p>

                    <h2>3. Formål og retsgrundlag</h2>
                    <p>Vi behandler dine oplysninger til følgende formål:</p>
                    <ul>
                        <li><strong>Kontaktformular:</strong> For at besvare din henvendelse (legitim interesse, jf. GDPR art. 6(1)(f)).</li>
                        <li><strong>Analytics:</strong> For at forbedre indholdet på sitet (samtykke, jf. GDPR art. 6(1)(a)).</li>
                    </ul>

                    <h2>4. Opbevaring</h2>
                    <p>
                        Henvendelser via kontaktformularen opbevares i vores e-mailsystem i op til 2 år,
                        medmindre et aktivt samarbejde giver anledning til længere opbevaring.
                        Analytics-data opbevares i henhold til Googles standardindstillinger (26 måneder).
                    </p>

                    <h2>5. Deling med tredjeparter</h2>
                    <p>Vi deler ikke dine personoplysninger med tredjeparter med undtagelse af:</p>
                    <ul>
                        <li><strong>Resend</strong> – e-mailformidling af kontakthenvendelser (databehandleraftale er indgået).</li>
                        <li><strong>Google LLC</strong> – analytics ved samtykke (Google er certificeret under EU-US Data Privacy Framework).</li>
                    </ul>

                    <h2>6. Dine rettigheder</h2>
                    <p>Du har ret til at:</p>
                    <ul>
                        <li>Anmode om indsigt i de oplysninger vi har om dig</li>
                        <li>Få urigtige oplysninger berigtiget</li>
                        <li>Få oplysninger slettet</li>
                        <li>Gøre indsigelse mod behandlingen</li>
                        <li>Trække et samtykke tilbage (fx cookiesamtykke)</li>
                    </ul>
                    <p>
                        Send en e-mail til <a href="mailto:frederik@konvertio.dk">frederik@konvertio.dk</a> for at udøve dine rettigheder.
                        Du kan også klage til <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">Datatilsynet</a>.
                    </p>

                    <h2>7. Cookies</h2>
                    <p>
                        Læs vores <a href="/cookiepolitik">cookiepolitik</a> for detaljeret information om cookies og tracking.
                    </p>
                </div>
            </section>
        </div>
    )
}
