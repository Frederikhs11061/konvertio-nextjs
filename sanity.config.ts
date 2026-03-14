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
        deskTool(),
        visionTool(),
    ],
    schema: {
        types: schemas,
    },
})
