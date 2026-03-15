'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import CookieConsent, { getConsentStatus } from './CookieConsent'

export default function GTMProvider() {
    const [gtmEnabled, setGtmEnabled] = useState(false)

    useEffect(() => {
        if (getConsentStatus() === 'accepted') {
            setGtmEnabled(true)
        }
    }, [])

    const handleConsent = (accepted: boolean) => {
        if (accepted) setGtmEnabled(true)
    }

    const gtmId = process.env.NEXT_PUBLIC_GTM_ID

    return (
        <>
            {gtmEnabled && gtmId && (
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
                    }}
                />
            )}
            <CookieConsent onConsent={handleConsent} />
        </>
    )
}
