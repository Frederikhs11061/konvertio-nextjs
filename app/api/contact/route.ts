import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rateLimit'
import { validateContactBody } from '@/lib/validations/contact'

/**
 * Contact API – rate limited, strictly validated (OWASP).
 * API keys (e.g. for email) must be in env vars, never in code or client.
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

  // Optional: send email via Resend/SendGrid using env var (e.g. RESEND_API_KEY).
  // Never expose API keys client-side; only use server-side env here.
  // if (process.env.RESEND_API_KEY) { ... }

  // For now, just log and return success (you can add email later)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Contact]', { name, email, company, service, messageLength: message.length })
  }

  return NextResponse.json({
    success: true,
    message: 'Besked modtaget. Jeg vender tilbage inden for 24 timer.',
  })
}
