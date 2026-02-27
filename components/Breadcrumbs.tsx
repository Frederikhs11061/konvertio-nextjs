import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

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
            item: item.href ? `https://konvertio.dk${item.href}` : undefined,
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav aria-label="Breadcrumb" className="py-4 px-6">
                <div className="max-w-6xl mx-auto">
                    <ol className="flex items-center gap-2 text-sm text-neutral-500 flex-wrap">
                        {allItems.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />}
                                {item.href && index < allItems.length - 1 ? (
                                    <Link href={item.href} className="hover:text-neutral-900 transition-colors flex items-center gap-1">
                                        {index === 0 && <Home className="w-3.5 h-3.5" />}
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-neutral-900 font-medium">{item.label}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>
        </>
    )
}
