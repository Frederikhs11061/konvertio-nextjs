import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Security middleware: add OWASP-recommended headers.
 * Rate limiting for /api/* is applied inside each API route (see lib/rateLimit.ts).
 */

// Content Security Policy:
// - 'unsafe-inline' is required for Next.js (hydration scripts, JSON-LD) and Framer Motion (inline styles)
// - Fonts are served from self via next/font/google optimization
// - GTM/GA domains allowed for analytics (gated by cookie consent in layout.tsx)
// - Sanity CDN allowed for images and client-side queries
// - frame-ancestors allows Sanity Studio visual editing preview
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://cdn.sanity.io https://api.sanity.io https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com",
  "media-src 'none'",
  "object-src 'none'",
  "frame-src https://www.googletagmanager.com",
  "frame-ancestors 'self' https://konvertio.sanity.studio",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join('; ')

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Content-Security-Policy', CSP)
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()')
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
