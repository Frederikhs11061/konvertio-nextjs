import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Ydelse',
    type: 'document',
    fields: [
        defineField({ name: 'slug', title: 'URL (slug)', type: 'slug', options: { source: 'shortTitle' }, validation: (Rule) => Rule.required() }),
        defineField({ name: 'shortTitle', title: 'Kort titel (navigation)', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'title', title: 'Fuld titel (hero)', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'description', title: 'Beskrivelse (hero)', type: 'text', rows: 3 }),
        defineField({ name: 'shortDescription', title: 'Kort beskrivelse (kort)', type: 'text', rows: 2 }),
        defineField({
            name: 'icon',
            title: 'Ikon',
            type: 'string',
            options: { list: [
                { title: 'Target (Static Ads)', value: 'Target' },
                { title: 'TrendingUp (CRO)', value: 'TrendingUp' },
                { title: 'ShoppingBag (Shopify)', value: 'ShoppingBag' },
                { title: 'Globe (Website)', value: 'Globe' },
            ]},
        }),
        defineField({
            name: 'features',
            title: 'Hvad er inkluderet',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'benefits',
            title: 'Dine fordele',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'packages',
            title: 'Pakker & priser',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'name', title: 'Navn', type: 'string' },
                    { name: 'price', title: 'Pris (fx "2.795 kr.")', type: 'string' },
                    { name: 'description', title: 'Beskrivelse', type: 'text', rows: 2 },
                    { name: 'features', title: 'Inkluderet', type: 'array', of: [{ type: 'string' }] },
                    { name: 'popular', title: 'Mest populær?', type: 'boolean' },
                ],
                preview: { select: { title: 'name', subtitle: 'price' } },
            }],
        }),
        defineField({ name: 'packageNote', title: 'Note under pakker', type: 'string' }),
        defineField({
            name: 'process',
            title: 'Processen (trin)',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'step', title: 'Trin nr.', type: 'number' },
                    { name: 'title', title: 'Titel', type: 'string' },
                    { name: 'description', title: 'Beskrivelse', type: 'text', rows: 2 },
                ],
                preview: { select: { title: 'title', subtitle: 'step' } },
            }],
        }),
        defineField({ name: 'metaTitle', title: 'SEO – Titel', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'SEO – Beskrivelse', type: 'text', rows: 2, validation: (Rule) => Rule.max(160) }),
    ],
    preview: {
        select: { title: 'shortTitle', subtitle: 'slug.current' },
    },
})
