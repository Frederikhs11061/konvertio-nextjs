import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Anmeldelse',
    type: 'document',
    fields: [
        defineField({ name: 'quote', title: 'Citat', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
        defineField({ name: 'name', title: 'Navn', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'company', title: 'Virksomhed / titel', type: 'string' }),
        defineField({ name: 'initial', title: 'Bogstav (avatar)', type: 'string', description: 'Ét bogstav der vises i avataren, fx "B"', validation: (Rule) => Rule.max(1) }),
        defineField({ name: 'order', title: 'Rækkefølge', type: 'number', description: 'Lavere tal = vises først' }),
    ],
    orderings: [{ title: 'Rækkefølge', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
    preview: {
        select: { title: 'name', subtitle: 'company' },
    },
})
