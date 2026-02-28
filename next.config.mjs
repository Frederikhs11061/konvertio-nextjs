/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
        ]
    },
}

export default nextConfig
