'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { generateBreadcrumbSchema } from '@/lib/schemas/organization'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = generateBreadcrumbSchema(
    items.map(item => ({ name: item.label, url: item.href }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Fil d'Ariane" className="mb-4 md:mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
              )}
              {index === items.length - 1 ? (
                <span className="text-[#021157] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#021157] transition-colors hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
