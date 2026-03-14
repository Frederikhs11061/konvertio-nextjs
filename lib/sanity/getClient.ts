import { draftMode } from 'next/headers'
import { client, previewClient } from './client'

export function getClient() {
    try {
        const { isEnabled } = draftMode()
        return isEnabled ? previewClient : client
    } catch {
        return client
    }
}
