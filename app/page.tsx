import { Hero } from "@/components/hero"
import { AboutMe } from "@/components/about-me"
import { ProductShowcase } from "@/components/product-showcase"
import { Philosophy } from "@/components/philosophy"
import { Competencies } from "@/components/competencies"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen" id="main-content">
      <Navigation />
      <Hero />
      <AboutMe />
      {/* </CHANGE> */}
      <ProductShowcase />
      <Philosophy />
      <Competencies />
    </main>
  )
}
