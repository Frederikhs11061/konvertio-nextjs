import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Siteindstillinger',
    type: 'document',
    fields: [
        // ─── HERO ───────────────────────────────────────────
        defineField({
            name: 'hero',
            title: 'Hero – Forside',
            type: 'object',
            fields: [
                { name: 'socialProofText', title: 'Social proof tekst (øverst)', type: 'string', description: 'Fx "Hurtig levering · Professionelt resultat"' },
                { name: 'availabilityText', title: 'Tilgængeligheds-badge', type: 'string', description: 'Fx "Klar til nye opgaver"' },
                { name: 'badge', title: 'Badge-tekst (øverst)', type: 'string' },
                { name: 'title1', title: 'Overskrift linje 1', type: 'string' },
                { name: 'titleHighlight', title: 'Overskrift – fremhævet ord', type: 'string' },
                { name: 'title2', title: 'Overskrift linje 2', type: 'string' },
                { name: 'subtitle', title: 'Undertekst', type: 'text', rows: 3 },
                { name: 'ctaPrimary', title: 'Primær knap-tekst', type: 'string' },
                { name: 'ctaSecondary', title: 'Sekundær knap-tekst', type: 'string' },
            ],
        }),

        // ─── FORSIDE – SEKTIONER ────────────────────────────
        defineField({
            name: 'homePage',
            title: 'Forside – sektioner',
            type: 'object',
            fields: [
                // Problem/Løsning sektion
                {
                    name: 'problemsSectionLabel',
                    title: 'Problem-sektion – label (øverst)',
                    type: 'string',
                    description: 'Fx "Kender du det?"',
                },
                {
                    name: 'problemsSectionH2',
                    title: 'Problem-sektion – overskrift',
                    type: 'string',
                },
                {
                    name: 'problemsCardTitle',
                    title: 'Problemer kort – titel',
                    type: 'string',
                },
                {
                    name: 'solutionsCardTitle',
                    title: 'Løsninger kort – titel',
                    type: 'string',
                },
                {
                    name: 'solutionsCtaText',
                    title: 'Løsninger CTA-knap tekst',
                    type: 'string',
                },
                {
                    name: 'problems',
                    title: 'Problemer (liste)',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title', title: 'Titel', type: 'string' },
                            { name: 'desc', title: 'Beskrivelse', type: 'string' },
                        ],
                        preview: { select: { title: 'title', subtitle: 'desc' } },
                    }],
                },
                {
                    name: 'solutions',
                    title: 'Løsninger (liste)',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title', title: 'Titel', type: 'string' },
                            { name: 'desc', title: 'Beskrivelse', type: 'string' },
                        ],
                        preview: { select: { title: 'title', subtitle: 'desc' } },
                    }],
                },

                // Ydelser-sektion labels
                {
                    name: 'servicesH2part1',
                    title: 'Ydelser-sektion – overskrift del 1',
                    type: 'string',
                },
                {
                    name: 'servicesH2highlight',
                    title: 'Ydelser-sektion – fremhævet ord',
                    type: 'string',
                },
                {
                    name: 'servicesH2part2',
                    title: 'Ydelser-sektion – overskrift del 2',
                    type: 'string',
                },
                {
                    name: 'servicesSubtitle',
                    title: 'Ydelser-sektion – undertekst',
                    type: 'text',
                    rows: 2,
                },

                // Om mig-sektion på forsiden
                {
                    name: 'aboutH2',
                    title: 'Om mig-sektion – overskrift',
                    type: 'string',
                },
                {
                    name: 'aboutPara1',
                    title: 'Om mig-sektion – afsnit 1',
                    type: 'text',
                    rows: 3,
                },
                {
                    name: 'aboutPara2',
                    title: 'Om mig-sektion – afsnit 2',
                    type: 'text',
                    rows: 3,
                },

                // Blog-sektion labels
                {
                    name: 'blogSectionH2',
                    title: 'Blog-sektion – overskrift',
                    type: 'string',
                },
                {
                    name: 'blogSectionSubtitle',
                    title: 'Blog-sektion – undertekst',
                    type: 'text',
                    rows: 2,
                },

                // CTA-sektion
                {
                    name: 'ctaH2part1',
                    title: 'CTA-sektion – overskrift del 1',
                    type: 'string',
                },
                {
                    name: 'ctaH2highlight',
                    title: 'CTA-sektion – fremhævet ord',
                    type: 'string',
                },
                {
                    name: 'ctaH2part2',
                    title: 'CTA-sektion – overskrift del 2',
                    type: 'string',
                },
                {
                    name: 'ctaSubtitle',
                    title: 'CTA-sektion – undertekst',
                    type: 'text',
                    rows: 2,
                },
                {
                    name: 'ctaPrimaryText',
                    title: 'CTA – primær knap',
                    type: 'string',
                },
                {
                    name: 'ctaSecondaryText',
                    title: 'CTA – sekundær knap',
                    type: 'string',
                },
            ],
        }),

        // ─── OM MIG ─────────────────────────────────────────
        defineField({
            name: 'about',
            title: 'Om mig – side',
            type: 'object',
            fields: [
                { name: 'badge', title: 'Label/badge øverst', type: 'string', description: 'Fx "Om mig"' },
                { name: 'title', title: 'Overskrift (H1)', type: 'string' },
                { name: 'intro', title: 'Intro-tekst (afsnit 1)', type: 'text', rows: 4 },
                { name: 'body', title: 'Brødtekst (afsnit 2)', type: 'text', rows: 4 },
                { name: 'closing', title: 'Afsluttende tekst (afsnit 3)', type: 'text', rows: 3 },
                {
                    name: 'skills',
                    title: 'Kompetencer (tags)',
                    type: 'array',
                    of: [{ type: 'string' }],
                    description: 'Fx Static Ads, Facebook Ads, CRO ...',
                },
                {
                    name: 'benefits',
                    title: 'Fordele (liste med flueben)',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
                { name: 'availabilityText', title: 'Tilgængeligheds-tekst', type: 'string', description: 'Fx "Klar til nye projekter"' },
                // CTA sektion
                { name: 'ctaH2', title: 'CTA-sektion – overskrift', type: 'string' },
                { name: 'ctaSubtitle', title: 'CTA-sektion – undertekst', type: 'text', rows: 2 },
                { name: 'ctaButtonText', title: 'CTA-knap tekst', type: 'string' },
            ],
        }),

        // ─── KONTAKT ────────────────────────────────────────
        defineField({
            name: 'contact',
            title: 'Kontakt – side',
            type: 'object',
            fields: [
                { name: 'badge', title: 'Label/badge øverst', type: 'string', description: 'Fx "Kontakt"' },
                { name: 'h1', title: 'Overskrift (H1)', type: 'string' },
                { name: 'subtitle', title: 'Undertekst', type: 'text', rows: 3 },
                {
                    name: 'benefits',
                    title: 'Fordele (liste med flueben)',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
                { name: 'email', title: 'Email', type: 'string' },
                { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
                { name: 'location', title: 'Placering (fx "Viborg, Danmark")', type: 'string' },
                { name: 'responseTime', title: 'Svartid (fx "Inden for 24 timer")', type: 'string' },
                { name: 'availabilityText', title: 'Tilgængeligheds-tekst', type: 'string', description: 'Fx "Tilgængelig for nye projekter"' },
            ],
        }),
    ],
    preview: {
        prepare: () => ({ title: 'Siteindstillinger' }),
    },
})
