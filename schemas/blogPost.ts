import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL (slug)',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'CRO', value: 'CRO' },
                    { title: 'Shopify', value: 'Shopify' },
                    { title: 'Static Ads', value: 'Static Ads' },
                    { title: 'Facebook Ads', value: 'Facebook Ads' },
                    { title: 'UGC', value: 'UGC' },
                    { title: 'Performance', value: 'Performance' },
                ],
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Uddrag (kort beskrivelse)',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().max(200),
        }),
        defineField({
            name: 'mainImage',
            title: 'Forsidebillede',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt-tekst (billedbeskrivelse)',
                    description: 'Vigtigt for SEO og tilgængelighed. Beskriv hvad billedet viser.',
                },
            ],
        }),
        defineField({
            name: 'content',
            title: 'Indhold',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Overskrift H2', value: 'h2' },
                        { title: 'Overskrift H3', value: 'h3' },
                        { title: 'Citat', value: 'blockquote' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Fed', value: 'strong' },
                            { title: 'Kursiv', value: 'em' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    { name: 'href', type: 'url', title: 'URL' },
                                    { name: 'blank', type: 'boolean', title: 'Åbn i ny fane' },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt-tekst (billedbeskrivelse)',
                            description: 'Vigtigt for SEO og tilgængelighed.',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Billedtekst',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'author',
            title: 'Forfatter',
            type: 'string',
            initialValue: 'Frederik Høgh Simonsen',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Udgivelsesdato',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'readTime',
            title: 'Læsetid (fx "5 min")',
            type: 'string',
        }),
        defineField({
            name: 'metaTitle',
            title: 'SEO – Titel',
            type: 'string',
            description: 'Lad stå tom for at bruge titlen automatisk',
        }),
        defineField({
            name: 'metaDescription',
            title: 'SEO – Beskrivelse',
            type: 'text',
            rows: 2,
            validation: (Rule) => Rule.max(160),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'mainImage',
        },
    },
    orderings: [
        {
            title: 'Nyeste først',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
})
