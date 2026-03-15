import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemas } from './schemas'

const PREVIEW_SECRET = process.env.SANITY_STUDIO_PREVIEW_SECRET || 'konvertio-preview-2024'

export default defineConfig({
    name: 'konvertio',
    title: 'Konvertio CMS',
    projectId: 'x4du0gcn',
    dataset: 'production',
    plugins: [
        presentationTool({
            previewUrl: {
                origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'https://www.konvertio.dk',
                preview: '/',
                draftMode: {
                    enable: `/api/draft?secret=${PREVIEW_SECRET}`,
                },
            },
        }),
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
                            .title('Forside – tekster')
                            .id('pageHome')
                            .child(
                                S.document()
                                    .title('Forside – tekster')
                                    .schemaType('pageHome')
                                    .documentId('pageHome')
                            ),
                        S.listItem()
                            .title('Om mig – side')
                            .id('pageAbout')
                            .child(
                                S.document()
                                    .title('Om mig – side')
                                    .schemaType('pageAbout')
                                    .documentId('pageAbout')
                            ),
                        S.listItem()
                            .title('Kontakt – side')
                            .id('pageContact')
                            .child(
                                S.document()
                                    .title('Kontakt – side')
                                    .schemaType('pageContact')
                                    .documentId('pageContact')
                            ),
                    ]),
        }),
        visionTool(),
    ],
    schema: {
        types: schemas,
    },
})
