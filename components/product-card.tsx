"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, X } from "lucide-react"
import { FloatingImages } from "./floating-images"

interface Product {
  id: string
  title: string
  category: string
  vision: string
  roadmap: Array<{ phase: string; description: string }>
  contributions: string[]
  skills?: string[]
  floatingImages?: Array<{
    src: string
    alt: string
    className?: string
  }>
}

export function ProductCard({ product, onClose }: { product: Product; onClose?: () => void }) {
  return (
    <Card className="p-8 lg:p-12 hover:shadow-lg transition-shadow relative">
      {onClose && (
        <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-4 right-4 z-10">
          <X className="w-5 h-5" />
        </Button>
      )}

      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge variant="secondary" className="mb-4">
            {product.category}
          </Badge>
          <h3 className="text-3xl font-bold mb-4 text-balance">{product.title}</h3>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <div className="w-1 h-full bg-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Product Vision</p>
              <p className="text-base leading-relaxed">{product.vision}</p>
            </div>
          </div>
        </div>

        {product.floatingImages && product.floatingImages.length > 0 && (
          <FloatingImages images={product.floatingImages} />
        )}

        {/* Roadmap */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Roadmap & Impact</h4>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-border hidden lg:block" />

            {/* Phases */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 lg:flex lg:justify-between">
              {product.roadmap.map((phase, index) => (
                <div key={index} className="relative lg:flex-1 lg:flex lg:justify-center">
                  <div className="flex flex-col items-start lg:items-center">
                    {/* Phase indicator */}
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-3 relative z-10">
                      {index + 1}
                    </div>

                    {/* Phase name */}
                    <div className="text-xs font-bold mb-2 text-left lg:text-center">{phase.phase}</div>

                    {/* Description */}
                    <div className="text-xs text-muted-foreground text-left lg:text-center leading-relaxed">
                      {phase.description}
                    </div>
                  </div>

                  {/* Arrow for mobile */}
                  {index < product.roadmap.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground my-2 lg:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contributions */}
        <div>
          <h4 className="text-lg font-semibold mb-4">My Contributions</h4>
          <ul className="space-y-3">
            {product.contributions.map((contribution, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        {product.skills && product.skills.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold mb-4">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {product.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
