import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faqCategory',
    title: 'FAQ Kategori',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Kategorinavn', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'order', title: 'Rækkefølge', type: 'number' }),
        defineField({
            name: 'items',
            title: 'Spørgsmål & svar',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'q', title: 'Spørgsmål', type: 'string', validation: (Rule) => Rule.required() }),
                    defineField({ name: 'a', title: 'Svar', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
                ],
                preview: { select: { title: 'q' } },
            }],
        }),
    ],
    orderings: [{ title: 'Rækkefølge', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
    preview: {
        select: { title: 'name' },
    },
})
