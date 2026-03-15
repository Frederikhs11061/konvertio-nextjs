import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pageAbout',
    title: 'Om mig – side',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Label/badge øverst', type: 'string' }),
        defineField({ name: 'title', title: 'Overskrift (H1)', type: 'string' }),
        defineField({ name: 'intro', title: 'Intro-tekst (afsnit 1)', type: 'text', rows: 4 }),
        defineField({ name: 'body', title: 'Brødtekst (afsnit 2)', type: 'text', rows: 4 }),
        defineField({ name: 'closing', title: 'Afsluttende tekst (afsnit 3)', type: 'text', rows: 3 }),
        defineField({ name: 'skills', title: 'Kompetencer (tags)', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'benefits', title: 'Fordele (liste med flueben)', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'availabilityText', title: 'Tilgængeligheds-tekst', type: 'string' }),
        defineField({ name: 'ctaH2', title: 'CTA-sektion – overskrift', type: 'string' }),
        defineField({ name: 'ctaSubtitle', title: 'CTA-sektion – undertekst', type: 'text', rows: 2 }),
        defineField({ name: 'ctaButtonText', title: 'CTA-knap tekst', type: 'string' }),
    ],
    preview: { prepare: () => ({ title: 'Om mig – side' }) },
})
