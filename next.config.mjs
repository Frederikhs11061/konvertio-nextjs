/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.sanity.io' },
        ],
    },
    async redirects() {
        return [
            { source: '/services', destination: '/ydelser', permanent: true },
            { source: '/services/:path*', destination: '/ydelser/:path*', permanent: true },
            { source: '/ydelser/wordpress-website', destination: '/ydelser/websites', permanent: true },
        ]
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-DNS-Prefetch-Control', value: 'on' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                ],
            },
            // Agressiv cache for statiske filer
            {
                source: '/images/(.*)',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
            },
            {
                source: '/_next/static/(.*)',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
            },
        ]
    },
}

export default nextConfig
