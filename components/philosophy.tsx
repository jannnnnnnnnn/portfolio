import { Card } from "@/components/ui/card"
import { Target, Users, Zap, TrendingUp } from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "User-Centric Discovery",
    description: "Deep stakeholder engagement to uncover real needs",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Roadmapping",
    description: "Evidence-based prioritization and milestone planning",
  },
  {
    icon: Zap,
    title: "Agile Execution",
    description: "Flexible methodologies tailored to project requirements",
  },
  {
    icon: Users,
    title: "Cross-Functional Leadership",
    description: "Bridging business, technical, and design teams",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Product Management Philosophy</h2>
          <p className="text-lg text-white/70 max-w-3xl">
            My approach combines strategic thinking with hands-on execution, always focused on delivering measurable
            business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <Card key={index} className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{principle.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{principle.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
