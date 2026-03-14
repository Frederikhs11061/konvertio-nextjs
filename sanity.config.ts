import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemas } from './schemas'

export default defineConfig({
    name: 'konvertio',
    title: 'Konvertio CMS',
    projectId: 'x4du0gcn',
    dataset: 'production',
    plugins: [
        deskTool({
            structure: (S) =>
                S.list()
                    .title('Indhold')
                    .items([
                        S.listItem().title('Blogindlæg').schemaType('blogPost').child(S.documentTypeList('blogPost')),
                        S.listItem().title('Ydelser').schemaType('service').child(S.documentTypeList('service')),
                        S.listItem().title('Anmeldelser').schemaType('testimonial').child(S.documentTypeList('testimonial')),
                        S.listItem().title('FAQ').schemaType('faqCategory').child(S.documentTypeList('faqCategory')),
                        S.divider(),
                        S.listItem()
                            .title('Siteindstillinger')
                            .id('siteSettings')
                            .child(
                                S.document()
                                    .schemaType('siteSettings')
                                    .documentId('siteSettings')
                            ),
                    ]),
        }),
        visionTool(),
    ],
    schema: {
        types: schemas,
    },
})
