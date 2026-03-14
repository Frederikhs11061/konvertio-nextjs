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
            <nav aria-label="Breadcrumb" className="pt-6 pb-3 px-6">
                <div className="max-w-7xl mx-auto">
                    <ol className="flex items-center gap-1.5 text-sm text-neutral-500 min-w-0">
                        {allItems.map((item, index) => {
                            const isLast = index === allItems.length - 1
                            return (
                                <li key={index} className={`flex items-center gap-1.5 ${isLast ? 'min-w-0' : 'flex-shrink-0'}`}>
                                    {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />}
                                    {item.href && !isLast ? (
                                        <Link href={item.href} className="hover:text-neutral-900 transition-colors duration-300 flex items-center gap-1 flex-shrink-0">
                                            {index === 0 && <Home className="w-3.5 h-3.5" />}
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="text-neutral-900 font-medium truncate">{item.label}</span>
                                    )}
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </nav>
        </>
    )
}
