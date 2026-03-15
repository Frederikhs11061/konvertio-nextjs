import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pageContact',
    title: 'Kontakt – side',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Label/badge øverst', type: 'string' }),
        defineField({ name: 'h1', title: 'Overskrift (H1)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Undertekst', type: 'text', rows: 3 }),
        defineField({ name: 'benefits', title: 'Fordele (liste med flueben)', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'location', title: 'Placering (fx "Viborg, Danmark")', type: 'string' }),
        defineField({ name: 'responseTime', title: 'Svartid (fx "Inden for 24 timer")', type: 'string' }),
        defineField({ name: 'availabilityText', title: 'Tilgængeligheds-tekst', type: 'string' }),
    ],
    preview: { prepare: () => ({ title: 'Kontakt – side' }) },
})
