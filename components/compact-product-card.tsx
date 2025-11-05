"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface CompactProductCardProps {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  skills: string[]
  onClick: () => void
}

export function CompactProductCard({
  title,
  category,
  description,
  image,
  tags,
  skills,
  onClick,
}: CompactProductCardProps) {
  return (
    <Card
      className="p-6 hover:shadow-xl transition-all cursor-pointer group bg-card/50 backdrop-blur-sm border-2 hover:border-accent min-w-[320px] flex-shrink-0 overflow-hidden"
      onClick={onClick}
    >
      <div className="space-y-4">
        <Badge variant="secondary" className="text-xs font-medium">
          {category}
        </Badge>

        {/* Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted/30">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover p-4 group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-tight text-balance group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}
