"use client"

import { AutoScrollCarousel } from "@/components/auto-scroll-carousel"

const clients = [
  { name: "Ontario Health", website: "ontariohealth.ca" },
  { name: "LifeLabs", website: "lifelabs.com" },
  { name: "Vertex", website: "vrtx.com" },
  { name: "Alexion", website: "alexion.com" },
  { name: "Tarsus", website: "tarsusrx.com" },
  { name: "Eli Lilly", website: "lilly.com" },
  { name: "Medtronic", website: "medtronic.com" },
]

export function ClientLogos() {
  return (
    <section className="py-20 lg: bg-black text-white" aria-labelledby="clients-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="clients-heading" className="text-sm uppercase tracking-wider text-white/60 mb-12 font-mono">
          Companies & Clients
        </h2>

        <AutoScrollCarousel speed={1}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-12 flex flex-col items-center justify-center gap-6 hover:bg-white/10 transition-colors border border-white/10 min-w-[280px] flex-shrink-0"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${client.website}&sz=128`}
                alt={`${client.name} logo`}
                className="h-24 w-24 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=96&width=96"
                }}
              />
              <p className="text-white/60 text-sm">{client.name}</p>
            </div>
          ))}
        </AutoScrollCarousel>
      </div>
    </section>
  )
}
