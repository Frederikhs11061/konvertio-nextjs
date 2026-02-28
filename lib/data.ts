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
      <p><a href="/ydelser/cro-analyse">Konverteringsoptimering (CRO)</a> handler om at få flere af dine besøgende til at handle. Her er 5 tips der virker:</p>
      
      <h2>Optimer din produktside</h2>
      <p>Din produktside er hvor beslutningen tages. Sørg for:</p>
      <ul>
        <li>Højkvalitets billeder fra flere vinkler</li>
        <li>Klar og overbevisende produktbeskrivelse</li>
        <li>Tydelig pris og fragtinformation</li>
        <li>Sociale beviser (anmeldelser, antal solgte)</li>
      </ul>

      <h2>Reducer checkout friktion</h2>
      <p>Jo nemmere det er at købe, jo flere gør det. Fjern unødvendige felter, tilbyd gæste-checkout, og vis en progress indicator. Læs mere i vores guide til <a href="/blog/shopify-checkout-optimering">Shopify checkout-optimering</a>.</p>

      <h2>Brug urgency og scarcity</h2>
      <p>"Kun 3 tilbage på lager" eller "Tilbud slutter om 2 timer" kan skubbe kunden til at handle nu.</p>

      <h2>Forbedr din trust signals</h2>
      <p>Trustpilot-anmeldelser, sikkerhedscertifikater, og "gratis retur" kan fjerne bekymringer.</p>

      <h2>Test, test, test</h2>
      <p>A/B test dine ændringer. Hvad virker for én webshop virker ikke nødvendigvis for din. Vil du have hjælp til at få <a href="/ydelser/cro-analyse">CRO-analyse og konkrete anbefalinger</a>, kan jeg hjælpe.</p>
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
      <p>Shopifys checkout er hvor mange kunder forsvinder. Her er hvordan du optimerer den – uanset om du har en ny <a href="/ydelser/shopify-webshop">Shopify webshop</a> eller en eksisterende butik.</p>
      
      <h2>Aktivér Shop Pay</h2>
      <p>Shop Pay gør det muligt for kunder at gemme deres informationer og checke ud med ét klik. Det kan øge konverteringen med op til 35%.</p>

      <h2>Tilbyd flere betalingsmuligheder</h2>
      <p>MobilePay, Apple Pay, Google Pay, og køb nu betal senere (Klarna, Viabill) kan fjerne betalingsbarrierer.</p>

      <h2>Vis fragtprisen tidligt</h2>
      <p>Ingen kan lide overraskelser ved checkout. Vis fragtprisen så tidligt som muligt.</p>

      <h2>Brug trust badges</h2>
      <p>Vis at din butik er sikker med SSL-certifikat badges og betalingssikkerhedsikoner. Det understøtter også din <a href="/blog/5-cro-tips">CRO-arbejde</a>.</p>

      <h2>Send abandoned cart emails</h2>
      <p>Opsæt automatiske emails til kunder der forlader deres kurv. En påmindelse kan genvinde 10-15% af disse salg.</p>
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
      <p>En langsom webshop koster dig penge. Her er hvorfor hastighed betyder noget – og hvordan en <a href="/ydelser/cro-analyse">CRO-analyse</a> kan pege på konkrete forbedringer.</p>
      
      <h2>Hastighed påvirker SEO</h2>
      <p>Google bruger Core Web Vitals som ranking faktor. En langsom side rangerer lavere i søgeresultaterne.</p>

      <h2>Hastighed påvirker konvertering</h2>
      <p>Amazon fandt at hver 100ms forsinkelse kostede dem 1% i omsætning. For hver sekund din side loader, falder konverteringen.</p>

      <h2>Sådan optimerer du hastigheden</h2>
      <ul>
        <li>Komprimer billeder (brug WebP format)</li>
        <li>Brug lazy loading</li>
        <li>Minimer JavaScript og CSS</li>
        <li>Brug et CDN</li>
        <li>Fjern unødvendige apps og plugins</li>
      </ul>

      <h2>Mål din hastighed</h2>
      <p>Brug Google PageSpeed Insights eller GTmetrix til at måle og få konkrete forbedringsforslag. Læs også om <a href="/blog/shopify-checkout-optimering">checkout-optimering</a> og <a href="/blog/5-cro-tips">CRO-tips</a> der giver mere ud af din trafik.</p>
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
      <p><a href="/ydelser/static-ads">Static ads</a> er simple, skalerbare, og når de gøres rigtigt, utroligt effektive. Her er opskriften:</p>
      
      <h2>Forstå din målgruppe</h2>
      <p>Før du designer noget, skal du vide hvem du taler til. Hvad er deres pain points? Hvad motiverer dem? Hvad stopper deres scroll?</p>

      <h2>Brug en stærk headline</h2>
      <p>Du har mindre end et sekund til at fange opmærksomhed. Din headline skal:</p>
      <ul>
        <li>Tale direkte til et problem</li>
        <li>Vække nysgerrighed</li>
        <li>Eller love en klar fordel</li>
      </ul>

      <h2>Design for mobil først</h2>
      <p>De fleste ser dine ads på mobil. Sørg for teksten er læselig, billedet er tydeligt, og CTA'en er nem at trykke på.</p>

      <h2>Test flere vinkler</h2>
      <p>En ad virker sjældent første gang. Lav flere versioner med forskellige headlines, billeder, og pain points. Lad data vise hvad der virker. Læs også om <a href="/blog/facebook-ads-strategi-2026">Facebook Ads-strategi i 2026</a> og <a href="/blog/ugc-ads-guide">UGC i ads</a>.</p>

      <h2>Hold det simpelt</h2>
      <p>For meget tekst, for mange farver, for mange elementer – det forvirrer. En klar besked, ét stærkt billede, én tydelig CTA. Vil du have professionelt designede static ads, kan du se mine <a href="/ydelser/static-ads">pakker til static ads</a>.</p>
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
      <p>Facebook Ads i 2026 kræver en anden tilgang end tidligere. Algoritmen har ændret sig, og konkurrencen er hårdere. Her er hvad der virker – og hvordan <a href="/ydelser/static-ads">gode static ads</a> gør en kæmpe forskel.</p>
      
      <h2>First-party data er guld værd</h2>
      <p>Med iOS 14 og frem er tracking blevet sværere. Byg din egen email-liste og brug den til at skabe lookalike audiences.</p>

      <h2>Advantage+ Shopping Campaigns</h2>
      <p>Meta's AI-drevne kampagner kan faktisk virke rigtig godt. Giv algoritmen tid og data nok, og den finder dine kunder.</p>

      <h2>Creative is the new targeting</h2>
      <p>Da targeting er blevet sværere, er dine creatives blevet vigtigere. Invester i godt kreativt indhold – det betaler sig. Læs <a href="/blog/static-ads-der-virker">sådan laver du static ads der konverterer</a> og <a href="/blog/ugc-ads-guide">guide til UGC i ads</a>.</p>

      <h2>Test struktur</h2>
      <p>Start med 3-5 ad sets med forskellige audiences. Kør 2-3 ads i hver. Luk det der ikke virker, skaler det der gør.</p>

      <h2>ROAS er ikke alt</h2>
      <p>Se på helheden – LTV, repeat purchases, brand awareness. Nogle kampagner betaler sig først på længere sigt.</p>
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
      <p>UGC (User Generated Content) er indhold skabt af dine kunder – anmeldelser, billeder, videoer. Det er utroligt effektivt fordi det føles ægte, og det fungerer rigtig godt i <a href="/ydelser/static-ads">static ads</a>.</p>
      
      <h2>Hvorfor UGC virker</h2>
      <p>Folk stoler mere på andre kunder end på brands. UGC føles autentisk, ikke som reklame. Det kan øge konverteringen med 15-30%.</p>

      <h2>Sådan får du UGC</h2>
      <ul>
        <li>Bed om anmeldelser efter køb</li>
        <li>Opfordr til at dele på sociale medier med et hashtag</li>
        <li>Tilbyd rabat på næste køb for et billede/video</li>
        <li>Arbejd sammen med micro-influencere</li>
      </ul>

      <h2>Sådan bruger du UGC i ads</h2>
      <p>Tag de bedste anmeldelser og lav dem til static ads. Brug kundebilleder i dine carousels. Klip kundevideoer sammen til reels. Læs også <a href="/blog/static-ads-der-virker">guide til static ads der konverterer</a> og <a href="/blog/facebook-ads-strategi-2026">Facebook Ads-strategi 2026</a>.</p>

      <h2>Husk tilladelse</h2>
      <p>Spørg altid om lov før du bruger andres indhold i din markedsføring. De fleste siger ja – især hvis du tilbyder noget til gengæld.</p>
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
      <p>CRO står for Conversion Rate Optimization – på dansk konverteringsoptimering. Det handler om at få flere af dine besøgende til at handle. Vil du have en <a href="/ydelser/cro-analyse">dybdegående CRO-analyse</a> af din webshop, kan jeg hjælpe.</p>
      
      <h2>Hvad er en konverteringsrate?</h2>
      <p>Konverteringsrate er andelen af besøgende der udfører en ønsket handling – typisk et køb. Har du 100 besøgende og 2 køber, er din konverteringsrate 2%.</p>

      <h2>Hvorfor er CRO vigtigt?</h2>
      <p>Forestil dig du har 10.000 besøgende om måneden med en konverteringsrate på 2%. Det giver 200 køb. Hvis du øger konverteringsraten til 3%, får du 300 køb – en stigning på 50% uden at bruge mere på markedsføring!</p>

      <h2>CRO vs. mere trafik</h2>
      <p>Det er ofte billigere at konvertere flere af dine eksisterende besøgende end at skaffe nye. CRO giver dig mere værdi for dit marketingbudget.</p>

      <h2>Sådan kommer du i gang med CRO</h2>
      <ul>
        <li>Analyser din nuværende konverteringsrate</li>
        <li>Identificer hvor kunder falder fra</li>
        <li>Lav hypoteser om hvad der kan forbedres</li>
        <li>Test dine ændringer med A/B tests</li>
        <li>Implementer det der virker</li>
      </ul>
      <p>Læs også mine <a href="/blog/5-cro-tips">5 CRO-tips der øger konverteringen</a> og guide til <a href="/blog/shopify-checkout-optimering">Shopify checkout-optimering</a>.</p>
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
      <p>Valget af e-commerce platform er vigtigt. <a href="/ydelser/shopify-webshop">Shopify</a> og <a href="/ydelser/wordpress-website">WordPress/WooCommerce</a> er to af de mest populære – men hvilken skal du vælge?</p>
      
      <h2>Shopify fordele</h2>
      <ul>
        <li>Nem at komme i gang med – hosted løsning</li>
        <li>Professionelt design uden teknisk viden</li>
        <li>App store med tusindvis af udvidelser</li>
        <li>24/7 support</li>
        <li>Shop Pay og andre native betalingsløsninger</li>
      </ul>

      <h2>WooCommerce fordele</h2>
      <ul>
        <li>Gratis at bruge (kun hosting koster)</li>
        <li>Fuld kontrol over din butik</li>
        <li>Ingen transaktionsgebyrer til platformen</li>
        <li>Masser af plugins og tilpasningsmuligheder</li>
        <li>God til content marketing med WordPress</li>
      </ul>

      <h2>Hvem skal vælge hvad?</h2>
      <p><strong>Vælg Shopify hvis:</strong> Du vil hurtigt i gang, ikke har teknisk viden, og vil have en hosted løsning der "bare virker". Læs mere om <a href="/blog/shopify-checkout-optimering">Shopify checkout-optimering</a>.</p>
      <p><strong>Vælg WooCommerce hvis:</strong> Du vil have fuld kontrol, har teknisk viden eller budget til en udvikler, og vil undgå månedlige abonnementsgebyrer.</p>
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
        a: 'Send mig en besked via kontaktformularen eller på kontakt@konvertio.dk. Så tager vi en uforpligtende snak om dine behov og mål, og jeg kommer med en anbefaling.',
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
    title: 'WordPress & Websites',
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
        name: 'Website Basis',
        price: '7.995 kr.',
        description: 'Perfekt til mindre virksomheder der skal have en professionel hjemmeside.',
        features: [
          'Op til 5 sider',
          'Responsivt design',
          'Kontaktformular',
          'Grundlæggende SEO',
          'Google Analytics opsætning',
        ],
      },
      {
        name: 'Website Pro',
        price: '14.995 kr.',
        description: 'Komplet løsning med avancerede funktioner og custom design.',
        features: [
          'Op til 10 sider',
          'Custom design',
          'Blog opsætning',
          'Avanceret SEO',
          'Speed optimering',
          '3 måneders support',
        ],
        popular: true,
      },
    ],
    metaTitle: 'WordPress & Website Udvikling | Konvertio',
    metaDescription: 'Få et professionelt website med høj performance og unikt design. WordPress og custom løsninger.',
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
