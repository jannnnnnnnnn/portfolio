"use client"

import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded"
        >
          Skip to main content
        </a>
        {/* </CHANGE> */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-semibold" aria-label="Janet Han - Home">
            Janet Han
          </Link>

          <div className="flex items-center gap-6">
            <Link href="#about" className="text-sm hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="#products" className="text-sm hover:text-muted-foreground transition-colors">
              Products
            </Link>
            <Link href="#philosophy" className="text-sm hover:text-muted-foreground transition-colors">
              Philosophy
            </Link>
            <Link href="#competencies" className="text-sm hover:text-muted-foreground transition-colors">
              Competencies
            </Link>
            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://www.linkedin.com/in/janethan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:janet@bit-north.com"
                className="hover:text-muted-foreground transition-colors"
                aria-label="Email janet@bit-north.com"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
