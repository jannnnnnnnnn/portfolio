import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import '@splidejs/react-splide/css'

export const metadata: Metadata = {
  title: "Janet Han - Product Manager",
  description: "Product Management Portfolio showcasing healthcare, pharmaceutical, and Web3 product experiences",
  generator: "v0.app",
  keywords: "Product Manager, Healthcare Technology, Pharmaceutical Digital Platforms, Web3, Agile, Product Strategy",
  authors: [{ name: "Janet Han" }],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* </CHANGE> */}
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
