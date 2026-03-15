// Blog Posts Data
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: '5-cro-tips',
    title: '5 CRO-tips der øger din konvertering med 30%',
    excerpt: 'Lær de mest effektive teknikker til at optimere din webshop og øge salget uden at øge din marketingbudget.',
    content: `
      <p>De fleste webshops bruger tusindvis af kroner på at hente trafik — og glemmer helt at optimere hvad der sker bagefter. Konverteringsoptimering, eller CRO, handler om præcist det: at gøre mere ud af den trafik du allerede har. Ifølge analyser fra Baymard Institute forlader over 70% af alle besøgende en webshop uden at købe. Selv en beskeden forbedring af konverteringsraten kan have massiv effekt på bundlinjen. Her er 5 CRO-tips der faktisk virker — og som du kan begynde at implementere i dag.</p>

      <h2>1. Optimer dine produktsider fra top til bund</h2>
      <p>Produktsiden er beslutningsstedet. Det er her kunden afgør om de køber — eller klikker væk. Mange webshops undervurderer, hvor meget produktsidens udformning påvirker konverteringen.</p>
      <p>En stærk produktside har:</p>
      <ul>
        <li><strong>Højkvalitets billeder fra mindst 4–6 vinkler</strong> — inkl. close-ups, lifestyle-billeder og eventuelt video</li>
        <li><strong>En headline der sælger fordelen</strong>, ikke bare produktets navn</li>
        <li><strong>En klar og specifik produktbeskrivelse</strong> der adresserer køberens spørgsmål og bekymringer</li>
        <li><strong>Synlig pris, fragtinformation og leveringstid</strong> — ingen skal gætte sig til disse</li>
        <li><strong>Sociale beviser</strong> i form af anmeldelser, antal solgte eller "bestselger"-badges</li>
        <li><strong>En fremtrædende og tydelig "Køb nu"-knap</strong> i en farve der skiller sig ud</li>
      </ul>
      <p>Test om din produktside besvarer de tre spørgsmål kunden stiller sig selv: Hvad er det? Hvorfor skal jeg have det? Og hvorfor skal jeg købe det her?</p>

      <h2>2. Skær ned på checkout-friktionen</h2>
      <p>Jo mere friktion der er i checkout-flowet, jo flere kunder mister du. Hvert ekstra felt, hvert ekstra klik og enhver overraskelse (som uventede fragtomkostninger) øger sandsynligheden for at kunden fortryder.</p>
      <p>Konkrete tiltag der gør en forskel:</p>
      <ul>
        <li>Tilbyd gæste-checkout — ikke alle vil oprette en konto</li>
        <li>Reducer antal formularfelter til et minimum</li>
        <li>Vis en progress-indikator så kunden ved hvor langt de er</li>
        <li>Vis fragtpris og leveringstid allerede i kurven — ikke først på betalingssiden</li>
        <li>Aktiver hurtige betalingsmetoder som MobilePay, Apple Pay og Shop Pay</li>
      </ul>
      <p>Vil du dykke dybere ned i dette, har vi skrevet en dedikeret guide til <a href="/blog/shopify-checkout-optimering">Shopify checkout-optimering</a>.</p>

      <h2>3. Brug urgency og scarcity — men gør det troværdigt</h2>
      <p>Urgency og scarcity er to af de mest effektive psykologiske drivere i e-commerce. "Kun 3 tilbage på lager" eller "Tilbud slutter om 2 timer" aktiverer FOMO (fear of missing out) og får kunden til at handle nu frem for at udskyde beslutningen.</p>
      <p>Det vigtige er at det er ægte. Falsk urgency (en countdown-timer der nulstilles ved hvert besøg) skader troværdigheden, når kunden gennemskuer det. Men rigtig lagerstand-information og tidsbegrænsede tilbud virker — og virker godt.</p>
      <p>Konkrete metoder:</p>
      <ul>
        <li>Vis faktisk lagerstand når der er under 5–10 enheder tilbage</li>
        <li>Brug tidsbegrænsede kampagner med en ægte slutdato</li>
        <li>Marker bestsellers og populære produkter som "sælger hurtigt"</li>
      </ul>

      <h2>4. Styrk dine trust signals på alle sider</h2>
      <p>Tillid er fundamentet for konvertering — og det er særligt vigtigt i Danmark, hvor forbrugerne er skeptiske over for ukendte webshops. En besøgende der ikke stoler på din webshop, køber ikke, uanset hvor godt dit produkt er.</p>
      <p>De vigtigste trust signals er:</p>
      <ul>
        <li><strong>Trustpilot-anmeldelser</strong> — vis din samlede score og antal anmeldelser tydeligt</li>
        <li><strong>SSL-certifikat og sikre betalingsbadges</strong> (Visa, Mastercard, MobilePay)</li>
        <li><strong>Klar returpolitik</strong> — "30 dages gratis retur" fjerner en stor barriere</li>
        <li><strong>Kontaktoplysninger der er lette at finde</strong> — telefonnummer og email signalerer troværdighed</li>
        <li><strong>Reelle kundeanmeldelser på produktsiderne</strong> — ikke bare en samlet score</li>
      </ul>
      <p>En <a href="/ydelser/cro-analyse">professionel CRO-analyse</a> kan identificere præcis hvilke trust-elementer der mangler på din webshop og rangere dem efter potentiel effekt.</p>

      <h2>5. Implementer A/B test som en løbende praksis</h2>
      <p>CRO er ikke et engangsprojekt — det er en løbende proces. Det der virker for én webshop virker ikke nødvendigvis for din. Den eneste måde at finde ud af hvad der virker er at teste det systematisk med A/B tests.</p>
      <p>Sådan kommer du i gang:</p>
      <ul>
        <li>Start med de sider der har mest trafik (typisk forsiden, kategoriside og produktside)</li>
        <li>Test én ting ad gangen — skift ikke headline og knap-farve på samme tid</li>
        <li>Kør testen til du har statistisk signifikans — typisk 1.000–2.000 besøgende pr. variant</li>
        <li>Dokumentér resultater og byg videre på det der virker</li>
      </ul>
      <p>Gratis værktøjer som Google Optimize (eller alternativet VWO) gør det muligt at sætte A/B tests op uden at ændre kode direkte. For e-commerce specifik optimering bør du også kigge på <a href="/blog/hastighedsoptimering-webshop">hastighedsoptimering</a> — en langsom webshop sætter en naturlig grænse for, hvad CRO kan opnå.</p>

      <h2>Hvad kan du forvente af CRO-arbejde?</h2>
      <p>En gennemsnitlig e-commerce konverteringsrate i Danmark ligger på 1–2%. Med systematisk CRO-arbejde over 3–6 måneder er det realistisk at komme op på 2,5–4% — en fordobling der ikke kræver mere trafik eller et større annoncebudget. Det er ren bundlinje.</p>
      <p>Er du klar til at begynde? <a href="/kontakt">Kontakt os i dag</a> og få en uforpligtende snak om hvad CRO kan gøre for din webshop.</p>
    `,
    image: '/images/blog-1.jpg',
    author: 'Frederik Høgh Simonsen',
    date: '2026-02-15',
    readTime: '5 min',
    category: 'CRO',
    metaTitle: '5 CRO-tips der øger konverteringen med 30% | Konvertio',
    metaDescription: 'Lær 5 effektive CRO-teknikker til at optimere din webshop og øge salget. Konkrete tips du kan implementere i dag.',
  },
  {
    slug: 'shopify-checkout-optimering',
    title: 'Sådan optimerer du din Shopify checkout',
    excerpt: 'En komplet guide til at reducere abandoned carts og øge din gennemførelsesrate i checkout-flowet.',
    content: `
      <p>Ifølge Baymard Institute er den gennemsnitlige abandoned cart-rate på tværs af e-commerce 70,19%. Det betyder at syv ud af ti kunder, der lægger noget i kurven, aldrig fuldfører købet. For Shopify-webshops er checkout-flowet det sted hvor de fleste af disse tab sker — og det er også det sted hvor optimeringen giver størst afkast. Uanset om du netop har lanceret en <a href="/ydelser/shopify-webshop">Shopify webshop</a> eller har kørt i årevis, er der næsten altid lavthængende frugter at plukke i checkout.</p>

      <h2>Forstå hvorfor kunder forlader kurven</h2>
      <p>Før du optimerer, er det vigtigt at forstå årsagerne. De mest hyppige grunde til at kunder forlader checkout er:</p>
      <ul>
        <li><strong>Uventede fragtomkostninger</strong> — den nummer ét årsag ifølge Baymard</li>
        <li><strong>Tvungen kontooprettelse</strong> — kunder vil helst undgå at oprette en konto</li>
        <li><strong>For lang eller kompliceret checkout</strong></li>
        <li><strong>Manglende tillid til betalingssikkerheden</strong></li>
        <li><strong>Utilstrækkelige betalingsmuligheder</strong></li>
        <li><strong>Kunden var bare ved at sammenligne priser</strong> (svært at undgå, men du kan bekæmpe det)</li>
      </ul>
      <p>Når du ved hvad der driver abandon, ved du også hvor du skal sætte ind.</p>

      <h2>Aktivér Shop Pay og hurtige betalingsmetoder</h2>
      <p>Shop Pay er Shopifys native betalingsaccelerator og en af de mest effektive måder at øge Shopify webshop konvertering på. Kunder der tidligere har brugt Shop Pay et sted, kan gennemføre køb med et enkelt klik — uden at taste adresse og kortoplysninger igen. Shopify selv rapporterer at Shop Pay øger checkout-gennemførelsesraten med op til 35% sammenlignet med gæste-checkout.</p>
      <p>Ud over Shop Pay bør du aktivere:</p>
      <ul>
        <li><strong>MobilePay</strong> — essentielt for det danske marked</li>
        <li><strong>Apple Pay og Google Pay</strong> — til mobilkøb på iOS og Android</li>
        <li><strong>Klarna eller ViaBill</strong> — "køb nu, betal senere" reducerer betalingsbarrierer, særligt for højere ordrebeløb</li>
      </ul>
      <p>Jo færre klik og jo mere velkendte betalingsformer, jo lavere er friktionen — og jo højere er checkout gennemførelsesraten.</p>

      <h2>Vis fragtpris og leveringstid så tidligt som muligt</h2>
      <p>Den største årsag til abandoned cart er overraskende fragtomkostninger der dukker op sent i flowet. Kunden er mentalt klar til at købe — og så opdager de 49 kr. i fragt i det sidste trin. Det føles som et svigt, og mange klikker væk.</p>
      <p>Løsningen er enkel: vis fragtprisen allerede på produktsiden eller i miniaturekurven. Hvis du tilbyder gratis fragt over en vis beløbsgrænse, så gør det tydeligt overalt — "Gratis fragt ved køb over 499 kr." er et stærkt incitament der også øger den gennemsnitlige ordreværdi.</p>

      <h2>Indfør gæste-checkout og reducer formularfelter</h2>
      <p>Tvungen kontooprettelse er en af de mest konverteringsdræbende funktioner du kan have i din checkout. Tilbyd altid gæste-checkout som standardmulighed. Du kan stadig opfordre til kontooprettelse — men gør det efter købet, ikke som forudsætning for det.</p>
      <p>Reducer desuden antal formularfelter til et minimum. Shopify's standard checkout er allerede relativt optimeret, men tjek at du ikke har unødvendige felter aktiveret. Hvert ekstra felt er endnu en mulighed for at kunden dropper flowet.</p>

      <h2>Brug trust badges og sikkerhedssignaler</h2>
      <p>Mange kunder er nervøse for at afgive betalingsoplysninger på webshops de ikke kender. Trust badges — ikoner for SSL, Visa, Mastercard, MobilePay og Trustpilot — signalerer sikkerhed og seriøsitet. Placér dem synligt i checkout, gerne nær betalingsknappen.</p>
      <p>En klar og synlig returpolitik i checkout hjælper også. "30 dages gratis retur" ved siden af "Gennemfør køb"-knappen fjerner den resterende tøven for mange kunder. Det er et klassisk CRO-tiltag der understøtter alt dit øvrige <a href="/blog/5-cro-tips">CRO-arbejde</a>.</p>

      <h2>Opsæt abandoned cart-flows og reducer kurv-abandon</h2>
      <p>Selv med en perfekt optimeret checkout vil en del kunder forlade kurven. Det er her automatiserede abandoned cart emails og SMS-beskeder kommer ind. Shopify har et indbygget abandoned checkout email, men du kan gøre det meget bedre med Klaviyo eller Omnisend.</p>
      <p>Et effektivt abandoned cart-flow ser typisk sådan ud:</p>
      <ul>
        <li><strong>Email 1 (1 time efter abandon):</strong> Simpel påmindelse — "Du glemte noget"</li>
        <li><strong>Email 2 (24 timer efter abandon):</strong> Social proof + svar på mulige indvendinger</li>
        <li><strong>Email 3 (72 timer efter abandon):</strong> Et lille incitament — gratis fragt eller 10% rabat</li>
      </ul>
      <p>Et velopsæt abandoned cart-flow kan genvinde 10–20% af de tabte salg. Det er automatiserede indtægter der arbejder for dig i baggrunden.</p>

      <h2>Mål og test løbende</h2>
      <p>Checkout-optimering er ikke et engangsprojekt. Brug Shopify Analytics til at overvåge checkout gennemførelsesraten og identificer hvilke trin i flowet der har den højeste frafaldsprocent. Test derpå konkrete ændringer — én ad gangen — og se hvad der flytte nålen.</p>
      <p>Vil du have en professionel gennemgang af dit checkout-flow og konkrete anbefalinger? <a href="/kontakt">Tag fat i os</a>, og lad os kigge på din Shopify webshop sammen.</p>
    `,
    image: '/images/blog-2.jpg',
    author: 'Frederik Høgh Simonsen',
    date: '2026-02-10',
    readTime: '7 min',
    category: 'Shopify',
    metaTitle: 'Shopify Checkout Optimering Guide | Konvertio',
    metaDescription: 'Komplet guide til at reducere abandoned carts og øge gennemførelsesraten i din Shopify checkout.',
  },
  {
    slug: 'hastighedsoptimering-webshop',
    title: 'Hvorfor din webshop har brug for hastighedsoptimering',
    excerpt: 'Hastighed påvirker både SEO og konvertering. Her er hvorfor og hvordan du optimerer din webshops performance.',
    content: `
      <p>Du kan have det bedste produkt, de skarpeste annoncer og et perfekt checkout-flow — men hvis din webshop loader langsomt, mister du kunderne inden de overhovedet ser hvad du tilbyder. Hastighedsoptimering er en af de mest undervurderede discipliner i e-commerce. Det påvirker ikke bare brugeroplevelsen, men direkte din Google-ranking og din konverteringsrate. Her er alt du behøver at vide om hastighedsoptimering for webshops.</p>

      <h2>Hvad siger tallene om loading tid og konvertering?</h2>
      <p>Tallene er klare og konsistente på tværs af branchen:</p>
      <ul>
        <li>Google har dokumenteret at 53% af mobilbesøgende forlader en side der tager over 3 sekunder at loade</li>
        <li>Amazon estimerede at 100ms ekstra loading tid kostede dem 1% i omsætning</li>
        <li>Walmart fandt at for hver 1 sekunds forbedring i loading tid steg konverteringen med 2%</li>
        <li>Portent-studier viser at sider der loader på 1 sekund har tre gange højere konverteringsrate end sider der loader på 5 sekunder</li>
      </ul>
      <p>For en webshop med 50.000 månedlige besøgende og en gennemsnitlig ordreværdi på 500 kr. kan blot én sekunds forbedring betyde hundredtusindvis af kroner på bundlinjen på et år.</p>

      <h2>Core Web Vitals: Googles målestok for hastighedsoptimering</h2>
      <p>Google bruger Core Web Vitals som en direkte ranking-faktor. Det er tre specifikke metrikker der måler brugeroplevelsen:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> Hvor lang tid tager det for det primære indhold at loade? Mål: under 2,5 sekunder.</li>
        <li><strong>INP (Interaction to Next Paint):</strong> Hvor hurtigt reagerer siden på brugerhandlinger? Mål: under 200 millisekunder.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Hopper indholdet rundt mens siden loader? Mål: under 0,1.</li>
      </ul>
      <p>En webshop med dårlige Core Web Vitals rangerer lavere i Googles søgeresultater — uanset hvor god din øvrige SEO er. Det betyder færre organiske besøgende og et dyrere betalt trafikregnskab. En <a href="/ydelser/cro-analyse">CRO-analyse</a> inkluderer altid en gennemgang af din sides performance-score.</p>

      <h2>De vigtigste årsager til en langsom webshop</h2>
      <p>Inden du kan rette problemet, skal du vide hvad der forårsager det. De mest hyppige syndere er:</p>
      <ul>
        <li><strong>Ukomprimerede billeder</strong> — det er den absolut hyppigste årsag. Et produktbillede på 3 MB i stedet for 150 KB sluger båndbredde og tid</li>
        <li><strong>For mange apps og plugins</strong> — hvert ekstra app tilføjer JavaScript der skal loades</li>
        <li><strong>Tunge temaer</strong> — mange Shopify-temaer er fyldt med unødvendige funktioner</li>
        <li><strong>Ikke-optimeret JavaScript og CSS</strong> — kode der ikke er minificeret eller bundlet korrekt</li>
        <li><strong>Ingen CDN (Content Delivery Network)</strong> — indhold der serves fra én server i stedet for fra en server tæt på brugeren</li>
        <li><strong>For mange tracking-scripts og pixels</strong> — Facebook Pixel, Google Tag Manager, heatmap-scripts m.fl. lægger alle til loading-tid</li>
      </ul>

      <h2>Sådan optimerer du hastigheden — konkrete tiltag</h2>
      <h3>Billedkomprimering og moderne formater</h3>
      <p>Skift til WebP-format for alle billeder — det giver typisk 25–35% mindre filstørrelse end JPEG ved samme billedkvalitet. Brug lazy loading så billeder kun loades når de er synlige på skærmen. For Shopify-brugere håndterer platformen WebP automatisk, men du skal stadig uploade optimerede billeder fra start. Værktøjer som Squoosh.app eller TinyPNG komprimerer billeder effektivt inden upload.</p>

      <h3>Reducer og ryd op i apps</h3>
      <p>Gennemgå alle installerede apps på din webshop og stil spørgsmålet: bruger jeg faktisk denne app? Ubrugte apps der stadig loader JavaScript koster dig hastighed — og penge. En gennemgang af 20 Shopify-webshops viste at gennemsnitligt 30–40% af de installerede apps var unødvendige eller duplikerede.</p>

      <h3>Minificering og bundling af kode</h3>
      <p>JavaScript og CSS-filer bør minificeres (fjernelse af mellemrum og kommentarer) og gerne bundtes. Shopify håndterer noget af dette automatisk, men custom kode og app-injektioner kan stadig skabe problemer. Brug Google PageSpeed Insights til at se konkrete anbefalinger til din specifikke side.</p>

      <h3>CDN og server-lokation</h3>
      <p>Shopify bruger Fastly som CDN som standard, hvilket er godt. For WordPress og WooCommerce er CDN ikke inkluderet — her bør du konfigurere Cloudflare eller en lignende service. Det sikrer at dine filer serves fra en server tæt på den besøgende, uanset om de sidder i Odense, Oslo eller Amsterdam.</p>

      <h2>Sådan måler du din webshops hastighed</h2>
      <p>Du behøver ikke gætte — der er gratis værktøjer der giver dig konkrete tal:</p>
      <ul>
        <li><strong>Google PageSpeed Insights</strong> (pagespeed.web.dev) — giver en score fra 0–100 og konkrete anbefalinger opdelt på mobil og desktop</li>
        <li><strong>GTmetrix</strong> — mere detaljeret analyse med waterfall-diagram der viser præcis hvilke filer der tager lang tid</li>
        <li><strong>WebPageTest.org</strong> — avanceret test med mulighed for at simulere 3G-forbindelser og test fra danske servere</li>
      </ul>
      <p>Start med Google PageSpeed Insights. Skriv ned hvad din score er på mobil (det er den vigtigste) og fokuser på de anbefalinger der er markeret som "høj prioritet".</p>

      <h2>Hastighed og CRO hænger uløseligt sammen</h2>
      <p>Hastighedsoptimering er ikke en isoleret teknisk øvelse — det er en integreret del af CRO. Du kan optimere dine produktsider, <a href="/blog/shopify-checkout-optimering">checkout-flow</a> og trust signals så meget du vil, men en langsom webshop sætter et loft for hvad du kan opnå. Kombiner hastighedsoptimering med de øvrige <a href="/blog/5-cro-tips">CRO-tips</a> for at få det fulde udbytte.</p>
      <p>Vil du have en professionel gennemgang af din webshops performance og konkrete anbefalinger til forbedringer? <a href="/kontakt">Kontakt os</a> og kom i gang i dag.</p>
    `,
    image: '/images/blog-3.jpg',
    author: 'Frederik Høgh Simonsen',
    date: '2026-02-05',
    readTime: '6 min',
    category: 'Performance',
    metaTitle: 'Hastighedsoptimering for Webshops | Konvertio',
    metaDescription: 'Lær hvorfor hastighed påvirker SEO og konvertering, og hvordan du optimerer din webshops performance.',
  },
  {
    slug: 'static-ads-der-virker',
    title: 'Sådan laver du static ads der faktisk konverterer',
    excerpt: 'Static ads er ikke døde – de er stadig en af de mest effektive annonceformater. Lær hvordan du laver nogle der virker.',
    content: `
      <p>I en verden fyldt med video-content og fancy motion graphics er der en annonceformat der stadig holder: static ads. Enkle, hurtige og skalerbare. Og når de laves rigtigt, kan de konkurrere med — og ofte slå — langt dyrere videoformater på ROAS. Men de fleste static ads konverterer ikke. Ikke fordi formatet er forkert, men fordi eksekveringen mangler strategi. Her er hvad der faktisk adskiller <a href="/ydelser/static-ads">static ads der konverterer</a> fra dem der drukner i feedet.</p>

      <h2>Hvorfor static ads stadig virker i 2026</h2>
      <p>Mange markedsførere har skrevet static ads af til fordel for video og UGC. Det er en fejltagelse. Static ads har afgørende fordele:</p>
      <ul>
        <li><strong>Hurtig produktion:</strong> Du kan teste 10 vinkler på den tid det tager at producere én video</li>
        <li><strong>Ingen lyd nødvendig:</strong> De fleste scroller med lyden slået fra — static ads mister intet ved det</li>
        <li><strong>Øjeblikkelig kommunikation:</strong> Budskabet kan kommunikeres på under ét sekund</li>
        <li><strong>Lav produktionsomkostning:</strong> Du kan skalere test drastisk uden at øge budgettet tilsvarende</li>
        <li><strong>Fungerer på alle platforme:</strong> Facebook, Instagram, Pinterest, LinkedIn, Snapchat</li>
      </ul>
      <p>Det er ikke static ads vs. video ads — de bedste annoncestrategier bruger begge dele. Men static ads er fundamentet for effektiv test, og de bør altid være i dit creative-mix.</p>

      <h2>Det første sekund er alt — lær at stoppe scroll</h2>
      <p>Den gennemsnitlige bruger scroller med en hastighed der svarer til at kaste et blik på hvert element i under 0,3 sekunder. Dine static ads konkurrerer med venners opslag, nyheder og kattebilleder. Du har ét job i det første sekund: stop scrollet.</p>
      <p>Det gør du ikke med et pænt produktbillede — det gør du med kontrast. Kontrast i farve, kontrast i budskab, eller kontrast i form. De mest effektive scroll-stoppers er:</p>
      <ul>
        <li>En bold, uventet headline der skaber kognitiv dissonans</li>
        <li>Et billede der ikke ligner en reklame (mørkt baggrund, rå æstetik eller et virkelighedsnært setup)</li>
        <li>Et stærkt tal eller statistik der kommunikerer noget konkret ("Spar 2 timer om dagen")</li>
        <li>En direkte appel til et specifikt smertepunkt ("Træt af at betale for meget for [kategori]?")</li>
      </ul>

      <h2>Headline-formler der virker</h2>
      <p>Din headline er det vigtigste element på dit static ad. Den skal enten tale til et problem, love en fordel, eller skabe nysgerrighed. Her er formler der konsistent performer:</p>
      <ul>
        <li><strong>Problem-agitation:</strong> "Træt af [smertepunkt]? Det behøver du ikke være."</li>
        <li><strong>Konkret fordel:</strong> "Spar 347 kr. om måneden med [produkt]"</li>
        <li><strong>Social proof:</strong> "Over 4.200 danskere bruger allerede [produkt]"</li>
        <li><strong>Nysgerrighed:</strong> "De fleste [målgruppe] ved ikke at [overraskende påstand]"</li>
        <li><strong>Direkte CTA:</strong> "Gratis fragt i dag — men ikke i morgen"</li>
      </ul>
      <p>Undgå generiske headlines som "Køb vores produkt nu" eller "Fantastisk kvalitet". De siger ingenting der stopper nogen.</p>

      <h2>Design for mobil, ikke for din skærm</h2>
      <p>Over 85% af alle Facebook og Instagram annoncevisninger sker på mobil. Alligevel designer mange annoncør på en 27-tommer skærm og sender det direkte til mobilen — uden at teste. Det er en kostbar fejl.</p>
      <p>Design-principper for mobil-first static ads:</p>
      <ul>
        <li>Brug 1:1 eller 4:5 format — det fylder mere i feedet end 16:9</li>
        <li>Skrift skal være læselig på en 6-tommer skærm med dårlig belysning</li>
        <li>Minimum fontsize på 16–20px for brødtekst, 28–36px for headlines</li>
        <li>Prioritér ét dominerende visuelt element — ikke tre halvstore</li>
        <li>Hold tekst-til-billede-ratio under 20% for at undgå klip i reach</li>
      </ul>

      <h2>Creative strategi: Test systematisk, ikke tilfældigt</h2>
      <p>Den største fejl i Facebook static ads er at teste tilfældigt. Du laver tre ads, kører dem i en uge, og konkluderer hvad der "virker". Det er ikke test — det er gætteri med et lille dataudvalg.</p>
      <p>En rigtig creative strategi ser sådan ud:</p>
      <ul>
        <li>Identificér mindst 3–5 forskellige pain points eller angles for din målgruppe</li>
        <li>Lav mindst 2 ads pr. angle med variation i headline eller visuelt</li>
        <li>Kør alle ads med ens budget og ens tid (minimum 7 dage og 50+ visninger pr. ad)</li>
        <li>Kig på CTR, hook rate (3-sekunders view rate) og konverteringsrate separat</li>
        <li>Tag vinnerne og lav nye variationer baseret på hvad der virkede</li>
      </ul>
      <p>Den tilgang kombinerer godt med en bredere <a href="/blog/facebook-ads-strategi-2026">Facebook Ads-strategi</a> og kan suppleres med <a href="/blog/ugc-ads-guide">UGC-indhold</a> til de angles der performer bedst.</p>

      <h2>Annonce-copy: Mere end bare headline</h2>
      <p>Udover billedet og den visuelle headline er primary text-feltet i Meta Ads Manager din chance for at uddybe budskabet. De første to linjer vises altid — resten kræver "Læs mere". Gør de første to linjer til dit stærkeste argument eller dit bedste social proof.</p>
      <p>Long-form copy kan fungere overraskende godt for produkter der kræver mere forklaring — supplements, dyrere produkter, B2B. Kort copy fungerer bedst for impulskøb og velkendte produktkategorier.</p>

      <h2>Næste skridt</h2>
      <p>Vil du have professionelt designede static ads baseret på systematisk research og CRO-principper? Se vores <a href="/ydelser/static-ads">pakker til static ads</a> — eller <a href="/kontakt">kontakt os</a> for at høre hvad vi kan gøre for din specifikke situation.</p>
    `,
    image: '/images/blog-4.jpg',
    author: 'Frederik Høgh Simonsen',
    date: '2026-02-01',
    readTime: '8 min',
    category: 'Static Ads',
    metaTitle: 'Static Ads der Konverterer: Komplet Guide | Konvertio',
    metaDescription: 'Lær hvordan du laver static ads der stopper scroll og driver konverteringer. Komplet guide med praktiske tips.',
  },
  {
    slug: 'facebook-ads-strategi-2026',
    title: 'Facebook Ads strategi for e-commerce i 2026',
    excerpt: 'Facebook Ads har ændret sig. Her er den strategi der virker lige nu for danske webshops.',
    content: `
      <p>Meta Ads-landskabet er fundamentalt anderledes i 2026 end det var for bare to år siden. Privacy-ændringer, algoritmeopdateringer og stigende konkurrence har ændret hvad der virker. Mange danske e-commerce-virksomheder kæmper med faldende ROAS og stigende CPM — ikke fordi Facebook Ads ikke virker, men fordi de bruger strategier der var optimale i 2022. Her er en opdateret Facebook Ads strategi for e-commerce der er bygget til virkeligheden i 2026.</p>

      <h2>Forstå det nye Meta Ads-landskab</h2>
      <p>Tre fundamentale ændringer har reshapet Meta Ads de seneste år:</p>
      <ul>
        <li><strong>Privacy-begrænsninger:</strong> iOS 14+ og cookierestriktioner har reduceret tilgængeligheden af tredjeparts-data, hvilket gør targeting og attribuering sværere</li>
        <li><strong>Automatisering:</strong> Meta skubber aggressivt på Advantage+-produkter — AI-drevne kampagner der overtager dele af targeting og budget-allokering</li>
        <li><strong>Creatives som primær differentiator:</strong> Da præcis targetering er sværere, er indholdet af dine ads den vigtigste variabel du kontrollerer</li>
      </ul>
      <p>Den vigtigste konklusion: i 2026 vinder de annoncører der har de bedste creatives og den stærkeste first-party data — ikke dem med de mest avancerede targeting-tricks.</p>

      <h2>First-party data er din vigtigste asset</h2>
      <p>Med tredjepartsdata under pres er din egen kundeliste guld værd. Jo mere data du har om dine eksisterende kunder, jo bedre kan Meta finde lignende profiler.</p>
      <p>Konkrete tiltag til at bygge first-party data:</p>
      <ul>
        <li>Opbyg en email-liste aktivt — via lead magnets, konkurrencer og post-purchase opt-ins</li>
        <li>Upload din kundeliste til Meta Ads Manager som Custom Audience (minimum 1.000 kontakter for god kvalitet)</li>
        <li>Opret Lookalike Audiences baseret på dine bedste kunder (ikke alle kunder — brug de 10–20% der har højest LTV)</li>
        <li>Implementer Meta Conversions API (CAPI) for at supplere Pixel-data med serverside-events</li>
      </ul>
      <p>CAPI er særligt vigtigt: det sender konverteringsdata direkte fra din server til Meta, uafhængigt af browser-begrænsninger. For en Shopify-webshop kan det opsættes via Shopifys native Meta-integration.</p>

      <h2>Advantage+ Shopping Campaigns — hvornår og hvordan</h2>
      <p>Metas Advantage+ Shopping Campaigns (ASC) er AI-drevne kampagner der automatisk optimerer targeting, placering og budget-allokering. De virker — men ikke for alle og ikke på alle tidspunkter.</p>
      <p>ASC er bedst egnet til:</p>
      <ul>
        <li>Webshops med minimum 50 konverteringer om måneden (algoritmen har brug for data)</li>
        <li>Skalering af veldokumenterede koncepter der allerede virker i manuelle kampagner</li>
        <li>Retargeting kombineret med prospecting i ét samlet flow</li>
      </ul>
      <p>Hvis du er ny på Meta Ads eller har et lille budget (under 5.000 kr./måned), vil manuelle kampagner med kontrolleret targeting give dig bedre indsigt i hvad der virker. Brug ASC til at skalere, ikke til at teste.</p>

      <h2>Creative er den nye targeting — sæt alle kræfter her</h2>
      <p>Dette er det vigtigste skift i Facebook Ads strategi i 2026: dine creatives udfører nu en del af targeting-arbejdet. Et ad med det rigtige budskab tiltrækker de rigtige brugere — selv i en bred audience — fordi Meta's algoritme viser det til dem der reagerer på det.</p>
      <p>Det betyder at du bør bruge langt mere tid og ressourcer på creatives end på targeting-opsætning. En vellykket creative-strategi har:</p>
      <ul>
        <li>Mindst 5–10 aktive creative-variationer kørende til enhver tid</li>
        <li>Systematisk test af angles (pain points, fordele, social proof, urgency)</li>
        <li>En løbende pipeline af nye creatives der erstatter træthed i eksisterende ads</li>
        <li>Mix af <a href="/blog/static-ads-der-virker">static ads</a>, <a href="/blog/ugc-ads-guide">UGC-indhold</a> og grafiske annoncer</li>
      </ul>
      <p>Ad fatigue er en reel udfordring — de fleste ads begynder at miste effektivitet efter 3–6 uger. Planlæg for det fra starten.</p>

      <h2>Kampagnestruktur der virker i 2026</h2>
      <p>Den optimale kampagnestruktur i 2026 er enklere end mange tror. Over-segmentering af audiences og for mange ad sets giver algoritmen for lidt data pr. enhed til at optimere effektivt.</p>
      <p>En anbefalet struktur:</p>
      <ul>
        <li><strong>Prospecting-kampagne:</strong> 1–2 ad sets med bred audience (Advantage+ audience eller bred interessetargeting), 5–10 creatives</li>
        <li><strong>Retargeting-kampagne:</strong> 1 ad set med website-visitors de seneste 30–60 dage, 3–5 creatives med anderledes vinkel (social proof, urgency)</li>
        <li><strong>Loyalty/upsell-kampagne:</strong> Custom Audience af eksisterende kunder, relevant cross-sell eller second-purchase budskab</li>
      </ul>
      <p>Giv hvert ad set minimum 5–7 dage og et dagligt budget der svarer til mindst 5–10 gange din målpris per konvertering inden du vurderer performance.</p>

      <h2>ROAS forbedring: Se ud over den direkte metric</h2>
      <p>ROAS (Return on Ad Spend) er den mest brugte metric — og en af de mest misforståede. En ROAS på 3x ser godt ud i rapporterne, men hvis din Customer Acquisition Cost er for høj i forhold til LTV, er forretningen stadig i minus på sigt.</p>
      <p>Supplér ROAS med disse metrikker for et retvisende billede:</p>
      <ul>
        <li><strong>Cost per acquisition (CPA):</strong> Hvad koster det at skaffe én kunde?</li>
        <li><strong>Customer Lifetime Value (LTV):</strong> Hvad er en kunde gennemsnitligt værd over 12 måneder?</li>
        <li><strong>New Customer Rate:</strong> Hvor mange af dine konverteringer er nye kunder vs. eksisterende?</li>
        <li><strong>Break-even ROAS:</strong> Hvad er minimum ROAS for at kampagnen er profitabel efter COGS og fragt?</li>
      </ul>
      <p>En strategi der fokuserer på at sænke CPA og øge LTV giver bedre resultater på langt sigt end en der jagter høj kortsigtet ROAS.</p>

      <h2>Kom i gang med en stærk strategi</h2>
      <p>Facebook Ads Denmark er et kompetitivt marked — men for de virksomheder der mestrer kombinationen af stærke creatives, solid first-party data og en struktureret test-tilgang, er potentialet enormt. <a href="/kontakt">Kontakt os</a> og lad os gennemgå din nuværende Meta Ads-strategi og identificere de hurtigste veje til forbedret ROAS.</p>
    `,
    image: '/images/blog-5.jpg',
    author: 'Frederik Høgh Simonsen',
    date: '2026-01-25',
    readTime: '10 min',
    category: 'Facebook Ads',
    metaTitle: 'Facebook Ads Strategi 2026 for E-commerce | Konvertio',
    metaDescription: 'Den Facebook Ads strategi der virker i 2026. Lær hvordan du skalerer dine kampagner for danske webshops.',
  },
  {
    slug: 'ugc-ads-guide',
    title: 'UGC Ads: Sådan bruger du brugergenereret indhold i din markedsføring',
    excerpt: 'User Generated Content er guld værd. Lær hvordan du får og bruger UGC i dine annoncer.',
    content: `
      <p>Der er en grund til at "UGC" er gået fra nichebegreb til buzzword i annonceverdenen på få år: det virker. Brugergenereret indhold — anmeldelser, kundebilleder, uboxing-videoer, testimonials — performer konsistent bedre end poleret brand-produktion i sociale medier-annoncer. Men strategien bag er mere nuanceret end mange tror. Her er en komplet guide til hvad UGC ads er, hvorfor de virker, og hvordan du bygger en UGC-strategi der reelt driver resultater.</p>

      <h2>Hvad er UGC ads, og hvad er de ikke?</h2>
      <p>UGC (User Generated Content) er i sin rene form indhold skabt af rigtige brugere og kunder — uden betaling eller retning fra brandet. Det kan være et Instagram-opslag fra en kunde der er begejstret for dit produkt, en TikTok-video eller en Trustpilot-anmeldelse.</p>
      <p>I annoncekontekst bruges "UGC ads" i dag dog om en bredere kategori, der inkluderer:</p>
      <ul>
        <li><strong>Ægte UGC:</strong> Indhold skabt organisk af kunder — du har fundet det og bedt om tilladelse til at bruge det</li>
        <li><strong>Creator UGC:</strong> Indhold bestilt fra UGC-creators der laver autentisk-seeende indhold mod betaling</li>
        <li><strong>Hybrid UGC:</strong> Redigerede anmeldelser og testimonials brugt i statiske annoncer</li>
      </ul>
      <p>Fælles for dem alle er æstetikken: rå, upoleret, menneskelig. Det er præcis det der gør UGC effektivt i modsætning til professionelle ads.</p>

      <h2>Hvorfor UGC ads virker bedre end professionelle annoncer</h2>
      <p>Forklaringen er psykologisk og social. Vi stoler mere på andre forbrugere end på brands. Nielsen-studier viser at 92% af forbrugere stoler mere på anbefalinger fra andre mennesker end på traditionel reklame. UGC-indhold udsender signaler der siger "dette er en rigtig persons mening" — og det reducerer den naturlige skepsis vi har over for reklamer.</p>
      <p>Konkret kan UGC ads:</p>
      <ul>
        <li>Øge CTR med 20–40% sammenlignet med klassiske brandannoncer</li>
        <li>Sænke CPA fordi konverteringsraten på landing-pages er højere</li>
        <li>Fungere som social proof der fjerner tvivl sent i købsprocessen</li>
        <li>Loade og vises hurtigere fordi produktionskvaliteten ikke kræver tunge filer</li>
      </ul>

      <h2>Sådan skaffer du UGC til dine annoncer</h2>
      <h3>Indsaml organisk UGC fra eksisterende kunder</h3>
      <p>Start med det du allerede har. Søg på dit brand-navn og produkt-hashtags på Instagram og TikTok. Kig i dine Trustpilot- og Google-anmeldelser. Tjek kommentarerne på dine egne opslag — folk deler ofte erfaringer der. Gennemgå alle Messenger- og email-henvendelser fra glade kunder der spontant har fortalt om en god oplevelse.</p>
      <p>Når du finder noget godt, kontakt personen direkte, giv dem et kompliment, og spørg om du må bruge det i din markedsføring. De fleste siger ja med glæde — særligt hvis du tilbyder en lille tak som rabat eller gratis produkt.</p>

      <h3>Opfordr aktivt til UGC-creation</h3>
      <p>Byg systemer der genererer UGC løbende:</p>
      <ul>
        <li>Send en post-purchase email 7–14 dage efter levering med en opfordring til at dele et billede og tagge jer</li>
        <li>Lav et branded hashtag og promovér det i emballage, på webshoppen og i sociale medier</li>
        <li>Tilbyd et lille incitament — 10% rabat på næste køb for et verificeret billede med dit produkt</li>
        <li>Kør en konkurrence med præmie for det bedste billede eller den bedste review</li>
      </ul>

      <h3>Arbejd med UGC-creators</h3>
      <p>UGC-creators er et voksende segment af creators der specialiserer sig i at lave autentisk-seeende indhold mod betaling — uden at have et stort følger-antal. De sælger filen, ikke reach. Det er anderledes end influencer-marketing.</p>
      <p>En UGC-creator kan typisk levere 3–5 videoer eller billeder for 500–2.000 kr. pr. styk afhængigt af erfaring og format. Det er en effektiv måde at skaffe UGC-lignende indhold på, selv om du er en ny webshop uden mange kunder endnu.</p>

      <h2>Sådan bruger du UGC strategisk i dine annoncer</h2>
      <p>UGC indhold skal bruges strategisk i dit annonce-mix — ikke bare kastes ind som enkelt-ad. Overvej disse anvendelser:</p>
      <ul>
        <li><strong>Anmeldelse-baserede static ads:</strong> Tag de stærkeste sætninger fra dine bedste anmeldelser og lav dem til <a href="/ydelser/static-ads">static ads</a> med et kundebillede i baggrunden</li>
        <li><strong>Before/after-formater:</strong> Kunder der viser resultat af at bruge dit produkt performer særligt godt for transformations-produkter</li>
        <li><strong>Social proof-angle i retargeting:</strong> Brug UGC i retargeting-kampagner til dem der har besøgt din side men ikke købt</li>
        <li><strong>Testimonial-carousels:</strong> Kombiner 3–5 korte citater i en carousel med kundebilleder</li>
      </ul>
      <p>Kombiner UGC-angles med din bredere <a href="/blog/facebook-ads-strategi-2026">Facebook Ads-strategi</a> og brug dem som supplement til <a href="/blog/static-ads-der-virker">designede static ads</a>.</p>

      <h2>Jura og etik: altid lov, altid transparent</h2>
      <p>Inden du bruger andres indhold i kommercielle annoncer, skal du have eksplicit tilladelse. En kommentar-reaktion er ikke nok — bed om skriftlig tilladelse via DM eller email. Gem den tilladelse. For creator-UGC skal du have en klar kontrakt der specificerer dine rettigheder til at bruge indholdet i betalte annoncer og i hvilken periode.</p>
      <p>Transparens handler også om ikke at skjule at det er reklame — Forbrugerombudsmandens regler kræver tydelig mærkning når betalte relationer er involveret.</p>

      <h2>Mål resultater og optimer løbende</h2>
      <p>UGC ads skal måles som alle andre creatives. Kig på CTR, hook rate, konverteringsrate og CPA. Test UGC mod dine bedste designede static ads og lad data afgøre hvad der virker i din specifikke kontekst. Kombinationen er næsten altid stærkere end ét format alene.</p>
      <p>Vil du have hjælp til at bygge en annoncestrategi der kombinerer UGC og designede creatives? <a href="/kontakt">Tag kontakt til os</a> og lad os se på hvad der giver mest mening for din webshop.</p>
    `,
    image: '/images/blog-6.jpg',
    author: 'Frederik Høgh Simonsen',
    date: '2026-01-20',
    readTime: '6 min',
    category: 'UGC',
    metaTitle: 'UGC Ads Guide: Brugergenereret Indhold | Konvertio',
    metaDescription: 'Lær hvordan du bruger UGC (User Generated Content) i dine annoncer for at øge konverteringen med 15-30%.',
  },
  {
    slug: 'hvad-er-cro',
    title: 'Hvad er CRO? Komplet guide til konverteringsoptimering',
    excerpt: 'CRO (Conversion Rate Optimization) kan øge din omsætning uden at øge dit marketingbudget. Lær hvordan her.',
    content: `
      <p>Hvad er CRO? Spørger du ti marketingfolk, får du ti svar — fra "A/B testing" til "UX-optimering" til "data-drevet markedsføring". Sandheden er at CRO er alt dette og mere til. Conversion Rate Optimization er disciplinen der handler om systematisk at forbedre andelen af besøgende der udfører en ønsket handling på din webshop. Og det er formentlig det mest oversete vækstværktøj i dansk e-commerce i dag.</p>

      <h2>Hvad er konverteringsrate — og hvordan beregner du den?</h2>
      <p>Konverteringsraten er den procentdel af dine besøgende der gennemfører en specifik handling. Formlen er simpel:</p>
      <p><strong>Konverteringsrate = (Antal konverteringer / Antal besøgende) × 100</strong></p>
      <p>Har du 10.000 besøgende om måneden og 150 køb, er din konverteringsrate 1,5%.</p>
      <p>En "konvertering" behøver ikke være et køb. Det kan være:</p>
      <ul>
        <li>Et køb (primær konvertering for webshops)</li>
        <li>Tilmelding til nyhedsbrev</li>
        <li>Udfyldelse af kontaktformular</li>
        <li>Download af et lead magnet</li>
        <li>Klik på en specifik CTA-knap</li>
      </ul>
      <p>CRO-arbejde for e-commerce fokuserer primært på købs-konverteringen, men mikro-konverteringer (som nyhedsbrevstilmelding) er også relevante at optimere.</p>

      <h2>Hvorfor er CRO vigtigt — den matematiske case</h2>
      <p>Lad os gøre regnestykket konkret. Du har en webshop med:</p>
      <ul>
        <li>10.000 månedlige besøgende</li>
        <li>En konverteringsrate på 1,5%</li>
        <li>En gennemsnitlig ordreværdi på 600 kr.</li>
      </ul>
      <p>Det giver 150 køb × 600 kr. = <strong>90.000 kr. om måneden</strong>.</p>
      <p>Hvis du øger konverteringsraten til 2,5% — stadig under branche-gennemsnittet for mange kategorier — får du:</p>
      <p>250 køb × 600 kr. = <strong>150.000 kr. om måneden</strong>.</p>
      <p>Det er 60.000 kr. ekstra hver måned uden én krone mere i annonceforbrug og uden at skaffe én ekstra besøgende. Det er kraften i konverteringsoptimering.</p>
      <p>Alternativet — at skaffe 67% mere trafik for at opnå det samme resultat — vil koste langt mere i annoncebudget og er meget sværere at skalere.</p>

      <h2>CRO vs. mere trafik: hvad giver mest mening?</h2>
      <p>De fleste e-commerce-virksomheder bruger langt mere på at skaffe trafik end på at konvertere den trafik de allerede har. Det er forståeligt — annoncering giver hurtige resultater og er let at måle. Men det er sjældent den mest effektive allokering af marketingbudgettet.</p>
      <p>Overvej: Hvis din konverteringsrate er 1%, betyder det at du sender 99% af din trafik hjem med tomme hænder. At bruge 20% mere på annoncer øger din omsætning med 20%. At øge din konverteringsrate fra 1% til 2% dobler din omsætning — med den samme trafik.</p>
      <p>CRO og trafikskabelse er ikke konkurrenter — de supplerer hinanden. Men for de fleste webshops er der et uudnyttet potentiale i CRO der er billigere og hurtigere at realisere end mere trafik.</p>

      <h2>Hvad er en god konverteringsrate?</h2>
      <p>Det korte svar: det afhænger af din branche og produktkategori. Gennemsnit for e-commerce:</p>
      <ul>
        <li><strong>Mode og beklædning:</strong> 1,5–2,5%</li>
        <li><strong>Elektronik:</strong> 0,5–1,5% (høj pris og lang research-fase)</li>
        <li><strong>Hjem og indretning:</strong> 1–2%</li>
        <li><strong>Skønhed og kosmetik:</strong> 2–4%</li>
        <li><strong>Mad og dagligvarer:</strong> 3–5%</li>
      </ul>
      <p>Men det vigtigste benchmark er ikke branche-gennemsnittet — det er din egen historiske konverteringsrate. Fokuser på at forbedre dit eget tal, ikke på at matche et gennemsnit.</p>

      <h2>Sådan fungerer CRO i praksis: den strukturerede proces</h2>
      <p>CRO er ikke at gætte hvilken knap-farve der virker bedst. Det er en struktureret, datadrevet proces:</p>
      <ul>
        <li><strong>Trin 1 — Analyse:</strong> Saml data fra Google Analytics, Shopify Analytics, heatmaps (Hotjar, Microsoft Clarity) og session recordings. Find ud af præcis hvor i flowet brugere falder fra.</li>
        <li><strong>Trin 2 — Identificér problemer:</strong> Høj bounce rate på produktsider? Stor frafaldsprocent i checkout? Lav add-to-cart rate? Hvert problem er en mulighed.</li>
        <li><strong>Trin 3 — Formulér hypoteser:</strong> "Hvis vi viser fragtomkostninger tidligere i flowet, falder checkout-abandon med X%." Hypotesen skal have en forklaring bag sig.</li>
        <li><strong>Trin 4 — Test:</strong> A/B test hypotesen. Kør testen til du har statistisk signifikans. Ikke én uge — til du har nok data.</li>
        <li><strong>Trin 5 — Implementér og iterer:</strong> Implementer vinnerne. Byg videre. Lav den næste test.</li>
      </ul>
      <p>En <a href="/ydelser/cro-analyse">professionel CRO-analyse</a> accelererer denne proces ved at identificere de vigtigste problemer og prioritere dem efter potentiel effekt.</p>

      <h2>De vigtigste CRO-elementer at optimere</h2>
      <p>Typisk starter CRO-arbejde med de elementer der har størst indflydelse på konvertering:</p>
      <ul>
        <li>Produktsider (billeder, beskrivelser, CTA, social proof)</li>
        <li>Checkout-flow (felter, betalingsmuligheder, transparens)</li>
        <li>Forsiden og kategorisiderne (navigation, filtrering)</li>
        <li>Loading-hastighed (direkte sammenhæng med konvertering)</li>
        <li>Trust-signaler (anmeldelser, certifikater, returpolitik)</li>
      </ul>
      <p>Læs vores dybdegående guide til <a href="/blog/5-cro-tips">de 5 vigtigste CRO-tips</a> og specifik guide til <a href="/blog/shopify-checkout-optimering">Shopify checkout-optimering</a> for konkrete implementeringssteps.</p>

      <h2>Kom i gang med CRO-optimering af din webshop</h2>
      <p>CRO-arbejde betaler sig — og det begynder med at forstå din nuværende konverteringsrate og identificere de vigtigste lækager i dit konverteringsflow. Vil du have en professionel gennemgang? <a href="/kontakt">Kontakt os</a> og få en uforpligtende snak om hvad CRO kan gøre for din specifikke webshop.</p>
    `,
    image: '/images/blog-1.jpg', // TODO: add blog-7.jpg when available
    author: 'Frederik Høgh Simonsen',
    date: '2026-01-15',
    readTime: '8 min',
    category: 'CRO',
    metaTitle: 'Hvad er CRO? Guide til Konverteringsoptimering | Konvertio',
    metaDescription: 'Komplet guide til CRO (Conversion Rate Optimization). Lær hvordan du øger din konverteringsrate og får mere ud af din trafik.',
  },
  {
    slug: 'shopify-vs-woocommerce',
    title: 'Shopify vs WooCommerce: Hvilken platform skal du vælge?',
    excerpt: 'Skal du vælge Shopify eller WooCommerce til din webshop? Her er en sammenligning af de to populære platforme.',
    content: `
      <p>Valget af e-commerce platform er en af de vigtigste beslutninger du tager for din webshop — og det er en beslutning der er svær at fortryde uden betydelige omkostninger. <a href="/ydelser/shopify-webshop">Shopify</a> og <a href="/ydelser/wordpress-website">WordPress med WooCommerce</a> er de to mest populære platforme i Danmark og globalt, og begge har stærke argumenter for sig. Men de er fundamentalt forskellige — og den rigtige valg afhænger fuldstændig af din situation. Her er en grundig og ærlig sammenligning.</p>

      <h2>Shopify: hvad er det og hvem er det til?</h2>
      <p>Shopify er en fuldt hostet SaaS e-commerce platform. Det betyder at Shopify håndterer alt det tekniske: hosting, sikkerhed, servere, opdateringer. Du betaler et månedligt abonnement og fokuserer på at drive din forretning.</p>
      <p>Shopify pris Danmark: Planerne starter fra 239 kr./måned (Basic), 639 kr./måned (Shopify) og 1.699 kr./måned (Advanced). Hertil kommer transaktionsgebyrer på 0,5–2% pr. ordre, medmindre du bruger Shopify Payments.</p>
      <p><strong>Shopify er designet til:</strong></p>
      <ul>
        <li>Iværksættere der vil hurtigt i gang uden teknisk viden</li>
        <li>Webshops der vil skalere og have en stabil, sikker platform</li>
        <li>Virksomheder der sætter pris på 24/7 support og en "det bare virker"-løsning</li>
        <li>Brands der har brug for et professionelt design-fundament fra dag ét</li>
      </ul>

      <h2>WooCommerce: hvad er det og hvem er det til?</h2>
      <p>WooCommerce er et gratis open-source plugin til WordPress. Det er teknisk set gratis at bruge — men du betaler for hosting, domæne, SSL-certifikat og eventuelle premium-plugins. En realistisk WooCommerce-webshop koster 150–500 kr./måned i hosting og plugins afhængigt af kompleksitet.</p>
      <p>WooCommerce giver dig fuld kontrol: du ejer og kontrollerer alle data, kan ændre alt i koden, og betaler ingen transaktionsgebyrer til platformen. Men det kræver teknisk viden — eller budget til en udvikler — at opsætte og vedligeholde.</p>
      <p><strong>WooCommerce er designet til:</strong></p>
      <ul>
        <li>Virksomheder med tekniske kompetencer in-house eller adgang til en udvikler</li>
        <li>Webshops med komplekse produktkonfigurationer der kræver custom-kode</li>
        <li>Virksomheder der allerede har et WordPress-site og vil udvide med e-commerce</li>
        <li>Forretninger der ønsker fuld datakontrol og undgå platformsafhængighed</li>
      </ul>

      <h2>Direkte sammenligning: Shopify vs WooCommerce 2026</h2>
      <h3>Opsætning og brugervenlighed</h3>
      <p>Shopify vinder klart. Du kan have en fungerende webshop live på under 24 timer uden teknisk viden. WooCommerce kræver WordPress-opsætning, hosting-konfiguration, SSL, plugin-installation og sikkerhedsopsætning — selv om du bruger en managed WordPress-host som Kinsta eller SiteGround, er den tekniske barriere betydeligt højere.</p>

      <h3>Pris og totalomkostning</h3>
      <p>Det er mere komplekst end det ser ud. Shopify er dyrere i månedligt abonnement, men inkluderer hosting, sikkerhed og support. WooCommerce's samlede pris afhænger af hosting-kvalitet, premium-plugins og om du har brug for en udvikler. For en simpel webshop kan WooCommerce være billigere over tid — for en kompleks webshop kan det hurtigt blive det modsatte.</p>

      <h3>Skalerbarhed</h3>
      <p>Shopify er designet til at skalere. Din hosting skalerer automatisk med trafikken — du behøver ikke tænke på det. WooCommerce kræver at du tænker på serverkapacitet, caching og optimering som din webshop vokser. Shopify Plus (enterprise-planen) bruges af store globale brands som Gymshark og Allbirds.</p>

      <h3>Apps og plugins</h3>
      <p>Shopify App Store har 8.000+ apps. WordPress Plugin Directory har 60.000+ plugins. Begge platforme har dækning til stort set alle behov. Shopify-apps er typisk bedre kuraterede og testet specifikt til e-commerce. WordPress-plugins er mere varierede i kvalitet.</p>

      <h3>SEO-muligheder</h3>
      <p>WooCommerce/WordPress har historisk set haft en lille fordel i SEO-fleksibilitet — Yoast SEO og RankMath giver granulær kontrol. Shopify har forbedret sine SEO-muligheder markant og er nu fuldt konkurrencedygtigt for de fleste webshops. Begge platforme kan nå topplaceringer i Google med den rigtige indsats.</p>

      <h3>Checkout og betalinger</h3>
      <p>Shopify's checkout er gennemoptimeret og konverterer godt out of the box. Shop Pay, MobilePay, Apple Pay og Klarna er nemme at aktivere. WooCommerce kræver mere opsætning men er fleksibel. Læs mere om <a href="/blog/shopify-checkout-optimering">Shopify checkout-optimering</a> for at forstå hvad du kan gøre med platformen.</p>

      <h2>Hvem skal vælge hvad? Den ærlige anbefaling</h2>
      <p><strong>Vælg Shopify hvis:</strong></p>
      <ul>
        <li>Du vil hurtigt i gang og have en stabil, vedligeholdelsesfri løsning</li>
        <li>Du ikke har teknisk baggrund og ikke vil bruge tid på servervedligeholdelse</li>
        <li>Din webshop primært sælger fysiske produkter i et standardformat</li>
        <li>Du vil have adgang til 24/7 support og en platform der tager sikkerhed seriøst</li>
      </ul>
      <p><strong>Vælg WooCommerce hvis:</strong></p>
      <ul>
        <li>Du allerede har et WordPress-site og vil udvide med e-commerce</li>
        <li>Du har (eller har adgang til) tekniske kompetencer og ønsker fuld kontrol</li>
        <li>Du sælger produkter med meget komplekse konfigurationsmuligheder der kræver custom-kode</li>
        <li>Du vil undgå månedlige abonnementer og transaktionsgebyrer og foretrækker at eje din platform fuldt ud</li>
      </ul>

      <h2>Hvad med konverteringsoptimering på de to platforme?</h2>
      <p>Uanset hvilken platform du vælger, er CRO-principperne de samme. Produktsider, checkout-flow, trust-signaler og hastighed er afgørende på begge. En <a href="/ydelser/cro-analyse">CRO-analyse</a> er relevant uanset om du bruger Shopify eller WooCommerce — og effekten er den samme.</p>
      <p>Er du i tvivl om hvilken platform der passer bedst til din situation? <a href="/kontakt">Kontakt os</a> for en uforpligtende snak — vi har erfaring med begge platforme og kan hjælpe dig med at træffe det rigtige valg.</p>
    `,
    image: '/images/blog-1.jpg', // TODO: add blog-8.jpg when available
    author: 'Frederik Høgh Simonsen',
    date: '2026-01-10',
    readTime: '7 min',
    category: 'Shopify',
    metaTitle: 'Shopify vs WooCommerce: Sammenligning | Konvertio',
    metaDescription: 'Sammenligning af Shopify og WooCommerce. Lær fordele og ulemper ved begge platforme og find den rette til din webshop.',
  },
]

// FAQ Data
export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  name: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    name: 'Static Ads',
    items: [
      {
        q: 'Hvad er static ads og hvorfor skal jeg bruge dem?',
        a: 'Static ads er simple billedannoncer uden animation eller video. De er effektive fordi de loader hurtigt, fungerer på alle enheder, og når de designes rigtigt, kan de stoppe scroll og drive konverteringer. De er også billigere at producere end video og nemmere at teste i større mængder.',
      },
      {
        q: 'Hvor mange static ads har jeg brug for?',
        a: 'Det afhænger af din budget og test-strategi. Jeg anbefaler mindst 5 forskellige creatives for at teste hvad der virker. Med Pakke 2 får du 10 creatives med forskellige pain points og vinkler, hvilket giver bedre data at arbejde med.',
      },
      {
        q: 'Hvilke sociale medier kan jeg bruge static ads på?',
        a: 'Static ads fungerer på alle platforme: Facebook, Instagram, LinkedIn, Pinterest, TikTok (som billeder), og Snapchat. Jeg designer dem i de korrekte formater til hver platform.',
      },
      {
        q: 'Hvad er forskellen på static ads og video ads?',
        a: 'Static ads er hurtigere at producere, billigere, og nemmere at teste. Video ads kan være mere engagerende men kræver mere produktion. I min erfaring kan well-designed static ads ofte matche eller overgå video i ROAS, især i test-fasen.',
      },
      {
        q: 'Hvad koster det at få lavet static ads?',
        a: 'Jeg tilbyder to pakker: Pakke 1 med 5 creatives for 1.995 kr., og Pakke 2 med 10 creatives for 3.495 kr. Der er ingen skjulte gebyrer – prisen inkluderer research, design og revisioner.',
      },
      {
        q: 'Hvor lang tid tager det at få leveret static ads?',
        a: 'Pakke 1 (5 creatives) leveres inden for 5 hverdage. Pakke 2 (10 creatives) leveres inden for 7 hverdage. Hvis du har brug for det hurtigere, så spørg – jeg kan ofte finde en løsning.',
      },
    ],
  },
  {
    name: 'Shopify & E-commerce',
    items: [
      {
        q: 'Hvor meget koster det at få bygget en Shopify webshop?',
        a: 'Prisen afhænger af kompleksiteten. En simpel webshop kan bygges for 8.000-15.000 kr., mens en mere avanceret med custom funktioner kan koste 20.000-40.000 kr. Jeg giver altid en fast pris inden vi starter.',
      },
      {
        q: 'Hvor lang tid tager det at bygge en webshop?',
        a: 'En standard Shopify webshop tager typisk 2-4 uger afhængigt af kompleksiteten og hvor meget indhold du allerede har klar (tekster, billeder, produkter).',
      },
      {
        q: 'Kan du optimere min eksisterende Shopify webshop?',
        a: 'Ja, absolut. Jeg tilbyder CRO-audit og optimering af eksisterende webshops. Det kan være alt fra hastighedsoptimering og design-forbedringer til checkout-optimering og app-opsætning.',
      },
      {
        q: 'Hvad er CRO og hvorfor er det vigtigt?',
        a: 'CRO (Conversion Rate Optimization) handler om at få flere af dine besøgende til at handle. Hvis du har 100 besøgende og 1 køber, er din konverteringsrate 1%. Med CRO arbejder vi på at få det tal op – måske til 2% eller 3%. Det betyder dobbelt så mange salg uden at bruge mere på markedsføring.',
      },
      {
        q: 'Skal jeg vælge Shopify eller WooCommerce?',
        a: 'Shopify er bedst hvis du vil hurtigt i gang uden teknisk viden. WooCommerce er bedst hvis du vil have fuld kontrol og har teknisk kompetencer. Jeg hjælper med begge platforme og kan rådgive dig om hvad der passer bedst til dit projekt.',
      },
    ],
  },
  {
    name: 'Priser & Samarbejde',
    items: [
      {
        q: 'Hvad koster static ads?',
        a: 'Jeg tilbyder to pakker: Pakke 1 med 5 creatives for 1.995 kr., og Pakke 2 med 10 creatives for 3.495 kr. Der er ingen skjulte gebyrer – prisen inkluderer research, design og revisioner.',
      },
      {
        q: 'Hvordan foregår betalingen?',
        a: 'For static ads pakkerne betales 50% ved bestilling og 50% ved levering. For større projekter som webshops aftaler vi en betalingsplan med milepæle.',
      },
      {
        q: 'Tilbyder du abonnementsløsninger?',
        a: 'Ja, jeg tilbyder månedlige abonnementsløsninger for virksomheder der har brug for løbende levering af creatives. Det er ideelt for dig der kører ads kontinuerligt og har brug for friske creatives hver måned.',
      },
      {
        q: 'Hvad hvis jeg ikke er tilfreds?',
        a: 'Jeg stopper ikke før du er tilfreds. Hvis du ikke er glad for resultatet, arbejder vi videre indtil du er. Det er en del af mit løfte til alle kunder.',
      },
    ],
  },
  {
    name: 'Facebook & Instagram Ads',
    items: [
      {
        q: 'Hvad koster det at køre Facebook Ads?',
        a: 'Det afhænger af din målgruppe og konkurrence. Jeg anbefaler mindst 5.000-10.000 kr. om måneden for at få nok data til at optimere. Dit ad spend er separat fra mit honorar for at oprette og administrere kampagner.',
      },
      {
        q: 'Hvor lang tid tager det før Facebook Ads virker?',
        a: 'Det varierer, men regn med 2-4 uger i test-fasen hvor vi finder ud af hvad der virker. Herefter kan vi skalere det der virker. Tålmodighed er vigtigt – Facebooks algoritme har brug for tid og data.',
      },
      {
        q: 'Kan du hjælpe med at opsætte Facebook Ads?',
        a: 'Ja, jeg tilbyder opsætning og administration af Facebook og Instagram Ads. Det inkluderer strategi, opsætning af kampagner, løbende optimering, og månedlig rapportering.',
      },
      {
        q: 'Hvad er forskellen på Advantage+ og manuelle kampagner?',
        a: 'Advantage+ er Metas AI-drevne kampagner der automatisk optimerer for konverteringer. Manuelle kampagner giver dig mere kontrol. Jeg bruger ofte en kombination – Advantage+ til skalering og manuelle kampagner til test.',
      },
    ],
  },
  {
    name: 'CRO & Konvertering',
    items: [
      {
        q: 'Hvad er en god konverteringsrate?',
        a: 'Det afhænger af branchen. For e-commerce ligger gennemsnittet typisk mellem 1-3%. Men det vigtigste er at forbedre DIN konverteringsrate – ikke at sammenligne med andre.',
      },
      {
        q: 'Hvordan måler jeg min konverteringsrate?',
        a: 'I Shopify finder du det under Analytics > Live View eller Reports. I Google Analytics 4 er det under Engagement > Conversions. Du kan også bruge tools som Hotjar til at se hvordan brugere interagerer med din side.',
      },
      {
        q: 'Hvad er de vigtigste CRO quick wins?',
        a: '1) Forbedr dine produktbilleder, 2) Tilføj trust badges, 3) Reducer checkout felter, 4) Tilføj urgency (f.eks. "kun 3 tilbage"), 5) Forbedr din CTA-knapper.',
      },
    ],
  },
  {
    name: 'Om Konvertio',
    items: [
      {
        q: 'Hvem er du?',
        a: 'Jeg hedder Frederik Høgh Simonsen, er bosat i Viborg, og har passion for e-commerce og digital markedsføring. Jeg hjælper danske virksomheder med at vækste online gennem effektive static ads, CRO-optimering og Shopify-webshops.',
      },
      {
        q: 'Arbejder du kun med danske virksomheder?',
        a: 'Primært ja, men jeg arbejder også med internationale virksomheder der vil ind på det danske marked. Min ekspertise er i dansk e-commerce og forbrugeradfærd.',
      },
      {
        q: 'Hvordan kommer jeg i gang?',
        a: 'Send mig en besked via kontaktformularen eller på frederik@konvertio.dk. Så tager vi en uforpligtende snak om dine behov og mål, og jeg kommer med en anbefaling.',
      },
      {
        q: 'Hvad gør dig forskellig fra andre?',
        a: 'Jeg kombinerer teknisk viden om Shopify med kreativ ekspertise i static ads og CRO. Det betyder at jeg ser helheden – ikke bare isolerede dele. Jeg er også dedikeret til resultater og stopper ikke før du er tilfreds.',
      },
    ],
  },
]

// Services Data
export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  packages?: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  }[];
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  metaTitle: string;
  metaDescription: string;
  packageNote?: string;
}

export const services: Service[] = [
  {
    slug: 'static-ads',
    title: 'Static Ads til Sociale Medier',
    shortTitle: 'Static Ads',
    description: 'Analysebaserede static ads der dekonstruerer dine winners og skaber variationer baseret på CRO-principper, beslutningspsykologi og konverteringsmønstre – ikke kreativt gætteri.',
    shortDescription: 'Analysebaserede static ads der stopper scroll og driver konverteringer.',
    icon: 'Target',
    features: [
      'Meta-arkivgennemgang og CRO-vurdering',
      'Dekonstruktion af eksisterende winners',
      'Benefit-hooks & emotionelle angles',
      'Visuelle beslutningssignaler',
      'Long-form copy varianter inkluderet',
    ],
    benefits: [
      'Højere ROAS baseret på data, ikke gætteri',
      'Systematisk iteration af vindende koncepter',
      'Lavere CPC med CRO-baserede creatives',
      'Skalerbar test-strategi',
    ],
    packages: [
      {
        name: 'Starter – 5 ads',
        price: '1.495 kr.',
        description: 'Perfekt til at komme i gang med static ads og teste hvad der virker for din målgruppe.',
        features: [
          '5 static creatives',
          'Meta-arkiv research + CRO-vurdering',
          'Dekonstruktion af eksisterende winners',
          'Long-form copy varianter inkluderet',
          'Levering inden for 5 hverdage',
        ],
      },
      {
        name: 'Growth – 10 ads',
        price: '2.795 kr.',
        description: 'Ideel når du vil teste flere pain points og vinkler for at finde de vindende koncepter.',
        features: [
          '10 static creatives',
          'Dybdegående research + flere pain-vinkler',
          'Benefit-hooks & emotionelle angles',
          'A/B test anbefalinger',
          'Levering inden for 7 hverdage',
        ],
        popular: true,
      },
      {
        name: 'Scale – 20 ads',
        price: '4.995 kr.',
        description: 'Til dig der vil skale test og have mange creatives klar til kampagner.',
        features: [
          '20 static creatives',
          'Fuld research og flere vinkler',
          'Long-form copy varianter',
          'Prioriteret levering',
          'Leveringstid aftales',
        ],
      },
    ],
    packageNote: 'Ved større batches (fx 40 ads) aftales pris og levering individuelt.',
    process: [
      {
        step: 1,
        title: 'Research',
        description: 'Jeg dykker ned i din målgruppe, konkurrenter og pain points.',
      },
      {
        step: 2,
        title: 'Konceptudvikling',
        description: 'Jeg udvikler flere kreative koncepter med forskellige vinkler.',
      },
      {
        step: 3,
        title: 'Design',
        description: 'Jeg designer dine static ads i de korrekte formater.',
      },
      {
        step: 4,
        title: 'Revision',
        description: 'Du får mulighed for at give feedback og få justeringer lavet.',
      },
      {
        step: 5,
        title: 'Levering',
        description: 'Du modtager alle filer klar til upload i Ads Manager.',
      },
    ],
    metaTitle: 'Static Ads til Sociale Medier | Konvertio',
    metaDescription: 'Få professionelle static ads der stopper scroll og driver konverteringer. Pakker fra 1.995 kr. Hurtig levering.',
  },
  {
    slug: 'cro-analyse',
    title: 'CRO Analyse & Audit',
    shortTitle: 'CRO Analyse',
    description: 'Dybdegående gennemgang af din webshop med konkrete anbefalinger til at øge din konverteringsrate.',
    shortDescription: 'Få flere af dine besøgende til at handle med CRO-optimering.',
    icon: 'TrendingUp',
    features: [
      'Komplet webshop gennemgang',
      'Data-analyse',
      'Konkrete anbefalinger',
      'Prioriteret handlingsplan',
      'Implementeringsguide',
    ],
    benefits: [
      'Højere konverteringsrate',
      'Mere omsætning uden mere trafik',
      'Bedre brugeroplevelse',
      'Lavere customer acquisition cost',
    ],
    packages: [
      {
        name: 'CRO Audit',
        price: '4.995 kr.',
        description: 'Komplet gennemgang af din webshop med konkrete anbefalinger.',
        features: [
          'Gennemgang af hele købsflowet',
          'Data-analyse (hvis tilgængelig)',
          '10-15 konkrete anbefalinger',
          'Prioriteret handlingsplan',
          'PDF rapport',
        ],
      },
      {
        name: 'CRO Audit + Implementering',
        price: '9.995 kr.',
        description: 'Audit plus jeg implementerer de vigtigste ændringer for dig.',
        features: [
          'Alt fra CRO Audit',
          'Implementering af top 5 ændringer',
          'A/B test opsætning',
          'Opfølgning efter 30 dage',
        ],
        popular: true,
      },
    ],
    metaTitle: 'CRO Analyse & Audit | Konvertio',
    metaDescription: 'Få en dybdegående CRO-analyse af din webshop. Konkrete anbefalinger der øger din konverteringsrate.',
  },
  {
    slug: 'shopify-webshop',
    title: 'Shopify Webshop',
    shortTitle: 'Shopify',
    description: 'Professionel opsætning og optimering af Shopify-webshops der konverterer besøgende til kunder.',
    shortDescription: 'Få en Shopify webshop der konverterer besøgende til kunder.',
    icon: 'ShoppingBag',
    features: [
      'Professionel opsætning',
      'Tema-tilpasning',
      'App integration',
      'Checkout-optimering',
      'Mobil-optimering',
    ],
    benefits: [
      'Hurtigere time-to-market',
      'Professionelt design',
      'Optimeret for konvertering',
      'Skalerbar løsning',
    ],
    packages: [
      {
        name: 'Shopify Basis',
        price: '8.995 kr.',
        description: 'Perfekt til nye webshops der vil hurtigt i gang.',
        features: [
          'Shopify opsætning',
          'Tema installation og tilpasning',
          'Op til 20 produkter',
          'Betaling og fragt opsætning',
          'Grundlæggende SEO',
        ],
      },
      {
        name: 'Shopify Pro',
        price: '19.995 kr.',
        description: 'Komplet løsning med custom design og avancerede funktioner.',
        features: [
          'Alt fra Basis',
          'Custom tema-tilpasning',
          'Avancerede apps',
          'CRO-optimering',
          'Ubegrænsede produkter',
          '3 måneders support',
        ],
        popular: true,
      },
    ],
    metaTitle: 'Shopify Webshop Udvikling | Konvertio',
    metaDescription: 'Få en professionel Shopify webshop der konverterer. Opsætning, design og optimering.',
  },
  {
    slug: 'wordpress-website',
    title: 'Websites',
    shortTitle: 'Websites',
    description: 'Skræddersyede websites med høj performance og unikt design til din virksomhed.',
    shortDescription: 'Professionelle websites med høj performance og unikt design.',
    icon: 'Globe',
    features: [
      'Unikt design',
      'Høj performance',
      'SEO-optimeret',
      'Mobil-venligt',
      'Nemt at vedligeholde',
    ],
    benefits: [
      'Professionelt udtryk',
      'Hurtig loading tid',
      'Bedre SEO-rankinger',
      'Fuld kontrol over indhold',
    ],
    packages: [
      {
        name: 'Onepage',
        price: '4.995 kr.',
        description: 'Ideel til mindre virksomheder der vil stå stærkt online og konvertere besøgende til leads via én målrettet og overbevisende side.',
        features: [
          'Onepage opbygning',
          'Responsivt design',
          'Enkel kontaktformular',
          'Grundlæggende SEO',
          'Hurtig levering',
        ],
      },
      {
        name: 'Website Basis',
        price: '7.995 kr.',
        description: 'Perfekt til mindre virksomheder der skal have en professionel hjemmeside.',
        features: [
          'Op til 5 sider',
          'Responsivt design',
          'Kontaktformular',
          'Grundlæggende SEO',
        ],
      },
      {
        name: 'Website Pro',
        price: '14.995 kr.',
        description: 'Komplet løsning med avancerede funktioner og custom design.',
        features: [
          'Op til 10 sider',
          'Responsivt design',
          'Kontaktformular',
          'Muligheder for flere undersider ift. ydelser, cases etc.',
          'SEO-optimeret site',
        ],
        popular: true,
      },
    ],
    metaTitle: 'Website Udvikling | Konvertio',
    metaDescription: 'Få et professionelt website med høj performance og unikt design. Onepage, Basis eller Pro løsning.',
  },
]

// Testimonials
export const testimonials = [
  {
    quote: 'Tusind tak for det! Det ser rigtigt godt ud, og der er meget brugbart CRO til vores webshop. Det sætter vi kæmpe pris på — det er sådan noget der løfter vores virksomhed! Kæmpe anbefaling.',
    name: 'ByMøller',
    company: 'bymoller.com',
    initial: 'B',
  },
  {
    quote: 'Vi fandt mange værdifulde indsigter. Pointerne omkring at skelne tydeligere mellem homepage og produktsider gav rigtig god mening. Vi planlægger allerede, hvordan vi fanger forbrugeren tidligere.',
    name: 'Frederik Møller',
    company: 'Corelabs · corelabs.dk',
    initial: 'F',
  },
  {
    quote: 'Super god oplevelse. Vi fik en meget grundig og professionel gennemgang med konkrete anbefalinger. Det er tydeligt at der er tænkt over både design, brugeroplevelse og konvertering. Kan klart anbefales.',
    name: 'Rambergbrand.dk',
    company: 'E-commerce',
    initial: 'R',
  },
  {
    quote: 'Super seriøs og hjælpsom. Stoppede ikke før jeg var tilfreds. Kan kun anbefale hvis i søger en dedikeret person. Det er ikke sidste gang jeg søger hjælp her.',
    name: 'Dennis Thøgersen',
    company: 'Ejer · grisekongen.dk',
    initial: 'D',
  },
]
