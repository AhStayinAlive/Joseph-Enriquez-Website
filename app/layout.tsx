import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Joseph Dean Te Enriquez - Data Engineer | Software Developer",
  description:
    "Joseph Dean Te Enriquez is a data engineer and software developer who builds accessible, pixel-perfect data pipelines and software solutions.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-red-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  )
}
