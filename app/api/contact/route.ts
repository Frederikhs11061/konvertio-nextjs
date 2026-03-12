import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { checkRateLimit } from '@/lib/rateLimit'
import { validateContactBody } from '@/lib/validations/contact'

/**
 * Contact API – rate limited, strictly validated (OWASP).
 * Sends email via Resend. API key stored in env var only (never client-side).
 */
export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  const { allowed, retryAfterSeconds } = checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      {
        error: 'For mange forsøg. Prøv igen senere.',
        retryAfter: retryAfterSeconds,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(retryAfterSeconds ?? 60),
          'X-RateLimit-Reset': String(retryAfterSeconds ?? 60),
        },
      }
    )
  }

  // Reject oversized payloads (max 16 KB) to prevent DoS
  const contentLength = request.headers.get('content-length')
  if (contentLength && parseInt(contentLength, 10) > 16_384) {
    return NextResponse.json({ error: 'Anmodning for stor' }, { status: 413 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Ugyldig JSON' },
      { status: 400 }
    )
  }

  const validation = validateContactBody(body)
  if (!validation.success) {
    return NextResponse.json(
      { error: 'Validering fejlede', details: validation.errors },
      { status: 400 }
    )
  }

  const { name, email, company, service, message } = validation.data

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email-tjeneste er ikke konfigureret.' },
      { status: 503 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Konvertio <frederik@konvertio.dk>',
    to: 'frederik@konvertio.dk',
    replyTo: email,
    subject: `Ny henvendelse fra ${name}`,
    text: [
      `Navn: ${name}`,
      `Email: ${email}`,
      company ? `Virksomhed: ${company}` : '',
      service ? `Ydelse: ${service}` : '',
      '',
      `Besked:\n${message}`,
    ].filter(Boolean).join('\n'),
  })

  if (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[Contact] Resend error:', error)
    }
    return NextResponse.json(
      { error: 'Kunne ikke sende besked. Prøv igen senere.' },
      { status: 500 }
    )
  }

  return NextResponse.json({
    success: true,
    message: 'Besked modtaget. Jeg vender tilbage inden for 24 timer.',
  })
}
