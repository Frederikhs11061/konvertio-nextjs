import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { SITE_URL } from '@/lib/site'

interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const allItems = [{ label: 'Hjem', href: '/' }, ...items]

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: allItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: item.href ? `${SITE_URL}${item.href}` : undefined,
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav aria-label="Breadcrumb" className="pt-40 pb-4 px-6 border-b border-neutral-800/30">
                <div className="max-w-7xl mx-auto">
                    <ol className="flex items-center gap-2 text-sm text-neutral-500 flex-wrap">
                        {allItems.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-neutral-700" />}
                                {item.href && index < allItems.length - 1 ? (
                                    <Link href={item.href} className="hover:text-white transition-colors duration-300 flex items-center gap-1">
                                        {index === 0 && <Home className="w-3.5 h-3.5" />}
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-neutral-300 font-medium">{item.label}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>
        </>
    )
}
