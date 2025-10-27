"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { CompactProductCard } from "@/components/compact-product-card"

interface Product {
  id: string
  title: string
  category: string
  vision: string
  description: string
  image: string
  tags: string[]
  roadmap: Array<{ phase: string; description: string }>
  contributions: string[]
  skills: string[]
  floatingImages?: Array<{
    src: string
    alt: string
    size?: string
  }>
  expanded?: boolean
}

interface ExpandableProductSectionProps {
  products: Product[]
}

export function ExpandableProductSection({ products }: ExpandableProductSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleExpand = (id: string) => {
    setExpandedId(id)
    setTimeout(() => {
      document.getElementById(`product-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const handleClose = () => {
    setExpandedId(null)
  }

  return (
    <div className="space-y-16">
      {products.map((product) => {
        const isExpanded = product.expanded || expandedId === product.id

        if (isExpanded) {
          return (
            <div key={product.id} id={`product-${product.id}`} className="scroll-mt-20">
              <ProductCard product={product} onClose={expandedId === product.id ? handleClose : undefined} />
            </div>
          )
        }

        return null
      })}

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {products
          .filter((p) => !p.expanded && expandedId !== p.id)
          .map((product) => (
            <div key={product.id} className="break-inside-avoid">
              <CompactProductCard
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                image={product.image}
                tags={product.tags}
                skills={product.skills}
                onClick={() => handleExpand(product.id)}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
