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
                    <p><strong>Sidst opdateret:</strong> marts 2026</p>

                    <h2>Hvad er cookies?</h2>
                    <p>
                        Cookies er små tekstfiler, der gemmes i din browser af de websites du besøger.
                        De bruges typisk til at huske præferencer eller indsamle anonym statistik om brugeradfærd.
                    </p>

                    <h2>Cookies vi bruger</h2>
                    <p>
                        Vi bruger udelukkende analytiske cookies via Google Analytics, aktiveret gennem
                        Google Tag Manager. Disse cookies sættes <strong>kun</strong>, hvis du aktivt
                        accepterer via vores cookiebanner.
                    </p>
                    <table>
                        <thead>
                            <tr><th>Cookie</th><th>Formål</th><th>Varighed</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>_ga</td>
                                <td>Skelner mellem besøgende</td>
                                <td>2 år</td>
                            </tr>
                            <tr>
                                <td>_ga_*</td>
                                <td>Gemmer og tæller sidevisninger</td>
                                <td>2 år</td>
                            </tr>
                            <tr>
                                <td>_gid</td>
                                <td>Skelner mellem besøgende (dag-basis)</td>
                                <td>24 timer</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Hukommelse af dit cookievalg</h2>
                    <p>
                        Dit valg i cookiebanneret (accepter / afvis) gemmes i browserens{' '}
                        <strong>localStorage</strong> – ikke som en cookie. Denne oplysning sendes
                        ikke til vores server og bruges udelukkende til at undgå, at banneret vises
                        igen ved hvert besøg. Den forsvinder, hvis du rydder dine browserdata.
                    </p>

                    <h2>Administrer og tilbagetræk samtykke</h2>
                    <p>
                        Du kan til enhver tid trække dit samtykke tilbage ved at:
                    </p>
                    <ol>
                        <li>
                            Slette cookies i din browsers indstillinger (søg efter &quot;Administrer cookies&quot;
                            eller &quot;Ryd browserdata&quot; i din browser). Sørg for at slette cookies
                            fra dette site.
                        </li>
                        <li>
                            Rydde localStorage for dette site – dette nulstiller dit cookievalg, så
                            banneret vises igen ved næste besøg.
                        </li>
                    </ol>
                    <p>
                        Når banneret vises igen, kan du vælge at afvise cookies. Google Analytics vil
                        herefter ikke sættes.
                    </p>
                    <p>
                        Bemærk: Selv efter tilbagetrækning kan data allerede sendt til Google ikke
                        tilbagekaldes. For yderligere oplysninger, se{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            Googles privatlivspolitik
                        </a>.
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
