"use client"

import { ClientLogos } from "@/components/client-logos"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Bridging <span className="italic">strategy</span> with{" "}
            <span className="bg-accent px-2 py-1 text-black">execution</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-4">
            Product Strategy | Agile Methodologies | Cross-Functional Leadership
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Healthcare Technology | Pharmaceutical Digital Platforms | Web3 Innovation | Data-Driven Decision Making
          </p>
        </div>
        {/* </CHANGE> */}

        <ClientLogos />
      </div>
    </section>
  )
}
