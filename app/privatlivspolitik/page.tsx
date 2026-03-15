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
                    <p><strong>Sidst opdateret:</strong> marts 2026</p>

                    <h2>1. Dataansvarlig</h2>
                    <p>
                        Frederik Høgh Simonsen<br />
                        Konvertio<br />
                        Viborg, Danmark<br />
                        <a href="mailto:frederik@konvertio.dk">frederik@konvertio.dk</a>
                    </p>

                    <h2>2. Hvilke oplysninger indsamles?</h2>

                    <h3>Kontaktformular</h3>
                    <p>Når du kontakter os via kontaktformularen, indsamler vi:</p>
                    <ul>
                        <li>Navn</li>
                        <li>E-mailadresse</li>
                        <li>Virksomhedsnavn (valgfrit)</li>
                        <li>Din besked</li>
                    </ul>

                    <h3>Besøgsstatistik</h3>
                    <p>
                        Hvis du accepterer cookies, indsamler vi statistik om din brug af sitet via Google Analytics,
                        aktiveret gennem Google Tag Manager. Dette kan inkludere sidevisninger, sessionslængde,
                        enhedstype, browsertype og omtrentlig geografisk placering baseret på IP-adresse.
                        Google behandler disse data som beskrevet i{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            Googles privatlivspolitik
                        </a>.
                    </p>

                    <h2>3. Formål og retsgrundlag</h2>
                    <table>
                        <thead>
                            <tr><th>Behandling</th><th>Formål</th><th>Retsgrundlag</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kontaktformular</td>
                                <td>Besvare din henvendelse</td>
                                <td>Legitim interesse (GDPR art. 6(1)(f))</td>
                            </tr>
                            <tr>
                                <td>Besøgsstatistik</td>
                                <td>Forbedre sitet</td>
                                <td>Samtykke (GDPR art. 6(1)(a))</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>4. Opbevaring</h2>
                    <p>
                        Henvendelser via kontaktformularen opbevares i op til 2 år, medmindre et aktivt
                        samarbejde giver anledning til længere opbevaring. Analytics-data opbevares i
                        henhold til Googles gældende standardindstillinger.
                    </p>

                    <h2>5. Deling med tredjeparter</h2>
                    <p>Vi deler kun personoplysninger med:</p>
                    <ul>
                        <li>
                            <strong>Resend</strong> – formidler e-mails fra kontaktformularen
                            (databehandleraftale er indgået)
                        </li>
                        <li>
                            <strong>Google LLC</strong> – analytics ved samtykke
                            (Google er certificeret under EU-US Data Privacy Framework)
                        </li>
                    </ul>
                    <p>Vi sælger ikke personoplysninger til tredjeparter.</p>

                    <h2>6. Dine rettigheder</h2>
                    <p>Du har ret til at:</p>
                    <ul>
                        <li>Få indsigt i de oplysninger vi behandler om dig</li>
                        <li>Få urigtige oplysninger berigtiget</li>
                        <li>Få oplysninger slettet</li>
                        <li>Gøre indsigelse mod behandlingen</li>
                        <li>Trække et samtykke tilbage (fx cookiesamtykke)</li>
                    </ul>
                    <p>
                        Skriv til <a href="mailto:frederik@konvertio.dk">frederik@konvertio.dk</a> for
                        at udøve dine rettigheder. Du kan også klage til{' '}
                        <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">
                            Datatilsynet
                        </a>.
                    </p>

                    <h2>7. Cookies</h2>
                    <p>
                        Læs vores <a href="/cookiepolitik">cookiepolitik</a> for information om
                        cookies og samtykke.
                    </p>
                </div>
            </section>
        </div>
    )
}
