/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    async redirects() {
        return [
            { source: '/services', destination: '/ydelser', permanent: true },
            { source: '/services/:path*', destination: '/ydelser/:path*', permanent: true },
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
            // Tillad Sanity Studio at vise siden i iframe (Presentation Tool)
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Frame-Options', value: 'ALLOWALL' },
                    { key: 'Content-Security-Policy', value: "frame-ancestors 'self' https://konvertio.sanity.studio" },
                ],
            },
        ]
    },
}

export default nextConfig
