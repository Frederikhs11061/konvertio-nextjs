/**
 * In-memory IP-based rate limiter for API routes.
 * OWASP: Helps mitigate DDoS and abuse by limiting requests per IP.
 * For multi-instance/production, consider Upstash Redis or similar.
 */

const WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10 // Sensible default for contact/form endpoints

type Entry = { count: number; resetAt: number }

const store = new Map<string, Entry>()

/** Clean old entries to avoid unbounded memory growth */
function prune() {
  const now = Date.now()
  store.forEach((entry, key) => {
    if (entry.resetAt < now) store.delete(key)
  })
}

/**
 * Check rate limit for identifier (e.g. IP). Returns { allowed, retryAfterSeconds }.
 * Call this at the start of each API handler.
 */
export function checkRateLimit(identifier: string): {
  allowed: boolean
  retryAfterSeconds?: number
} {
  prune()
  const now = Date.now()
  let entry = store.get(identifier)
  if (!entry) {
    entry = { count: 1, resetAt: now + WINDOW_MS }
    store.set(identifier, entry)
    return { allowed: true }
  }
  if (now >= entry.resetAt) {
    entry = { count: 1, resetAt: now + WINDOW_MS }
    store.set(identifier, entry)
    return { allowed: true }
  }
  entry.count += 1
  if (entry.count > MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
    }
  }
  return { allowed: true }
}
