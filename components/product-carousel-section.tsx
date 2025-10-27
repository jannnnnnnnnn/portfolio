"use client"

import { useState } from "react"
import { AutoScrollCarousel } from "@/components/auto-scroll-carousel"
import { CompactProductCard } from "@/components/compact-product-card"
import { ProductCard } from "@/components/product-card"

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
}

interface ProductCarouselSectionProps {
  products: Product[]
}

export function ProductCarouselSection({ products }: ProductCarouselSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleExpand = (id: string) => {
    setExpandedId(id)
    setTimeout(() => {
      document.getElementById(`expanded-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const handleClose = () => {
    setExpandedId(null)
  }

  return (
    <div className="space-y-8">
      <AutoScrollCarousel
        perPage={3}
        gap="1rem"
        arrows
        pagination={false}
        speed={0.5}            // tweak 0.3–1.2 for faster/slower
        pauseOnHover
        pauseOnFocus
      >
        {products.map((product) => (
          <CompactProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            description={product.description}
            image={product.image}
            tags={product.tags}
            skills={product.skills}
            onClick={() => handleExpand(product.id)}
          />
        ))}
      </AutoScrollCarousel>

      {expandedId && (
        <div id={`expanded-${expandedId}`} className="scroll-mt-20">
          <ProductCard product={products.find((p) => p.id === expandedId)!} onClose={handleClose} />
        </div>
      )}
    </div>
  )
}
