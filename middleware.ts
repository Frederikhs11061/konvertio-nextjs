import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Security middleware: add OWASP-recommended headers and optional rate limiting.
 * Rate limiting for /api/* is applied inside each API route (see lib/rateLimit.ts).
 * For site-wide DDoS protection across instances, consider Upstash Redis in middleware.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
