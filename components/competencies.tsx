import { Badge } from "@/components/ui/badge"

const competencies = [
  "Product Strategy & Roadmapping",
  "Agile & Hybrid Methodologies",
  "Stakeholder Management",
  "Requirements Elicitation",
  "Cross-Functional Leadership",
  "Healthcare Technology",
  "Data-Driven Decision Making",
  "User Research & Testing",
  "Technical Documentation",
  "Process Optimization",
]

export function Competencies() {
  return (
    <section id="competencies" className="py-20 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Core Competencies</h2>
          <p className="text-lg text-white/70">Skills and expertise developed across diverse product domains</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {competencies.map((competency, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              {competency}
            </Badge>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="text-center">
            <p className="text-white/70 mb-6">Interested in working together?</p>
            <a
              href="mailto:janet@bit-north.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
