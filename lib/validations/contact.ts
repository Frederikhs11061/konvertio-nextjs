/**
 * Strict input validation for contact form (OWASP: schema-based, type checks, length limits).
 * Only known fields are accepted; unexpected fields are rejected via .strict().
 */
import { z } from 'zod'

const ALLOWED_SERVICES = [
  'static-ads',
  'cro',
  'shopify',
  'website',
  'facebook-ads',
  'andet',
] as const

export const contactFormSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Navn er påkrævet')
      .max(120, 'Navn er for langt')
      .trim(),
    email: z
      .string()
      .min(1, 'Email er påkrævet')
      .email('Ugyldig email')
      .max(254, 'Email er for lang')
      .trim()
      .toLowerCase(),
    company: z
      .string()
      .max(200, 'Virksomhedsnavn er for langt')
      .trim()
      .optional()
      .or(z.literal('')),
    service: z.union([z.enum(ALLOWED_SERVICES), z.literal('')]).optional(),
    message: z
      .string()
      .min(1, 'Besked er påkrævet')
      .max(5000, 'Besked er for lang (max 5000 tegn)')
      .trim(),
  })
  .strict() // Reject unexpected fields (OWASP)

export type ContactFormData = z.infer<typeof contactFormSchema>

export function validateContactBody(body: unknown): {
  success: true
  data: ContactFormData
} | {
  success: false
  errors: string[]
} {
  const result = contactFormSchema.safeParse(body)
  if (result.success) {
    return { success: true, data: result.data }
  }
  const errors = result.error.flatten().fieldErrors
  const messages = Object.entries(errors).flatMap(([field, msgs]) =>
    (msgs ?? []).map((m) => `${field}: ${m}`)
  )
  return { success: false, errors: messages }
}
