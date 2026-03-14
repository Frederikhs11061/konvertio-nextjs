import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Siteindstillinger',
    type: 'document',
    fields: [
        defineField({
            name: 'hero',
            title: 'Hero – Forside',
            type: 'object',
            fields: [
                { name: 'badge', title: 'Badge-tekst (øverst)', type: 'string' },
                { name: 'title1', title: 'Overskrift linje 1', type: 'string' },
                { name: 'titleHighlight', title: 'Overskrift – fremhævet ord', type: 'string' },
                { name: 'title2', title: 'Overskrift linje 2', type: 'string' },
                { name: 'subtitle', title: 'Undertekst', type: 'text', rows: 3 },
                { name: 'ctaPrimary', title: 'Primær knap-tekst', type: 'string' },
                { name: 'ctaSecondary', title: 'Sekundær knap-tekst', type: 'string' },
            ],
        }),
        defineField({
            name: 'contact',
            title: 'Kontaktinfo',
            type: 'object',
            fields: [
                { name: 'email', title: 'Email', type: 'string' },
                { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
                { name: 'location', title: 'Placering (fx "Viborg, Danmark")', type: 'string' },
            ],
        }),
        defineField({
            name: 'about',
            title: 'Om mig – tekster',
            type: 'object',
            fields: [
                { name: 'title', title: 'Overskrift', type: 'string' },
                { name: 'intro', title: 'Intro-tekst', type: 'text', rows: 4 },
                { name: 'body', title: 'Brødtekst', type: 'text', rows: 4 },
                { name: 'closing', title: 'Afsluttende tekst', type: 'text', rows: 3 },
            ],
        }),
    ],
    preview: {
        prepare: () => ({ title: 'Siteindstillinger' }),
    },
})
