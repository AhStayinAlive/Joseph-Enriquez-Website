"use client"

import { useState } from "react"
import { ArrowLeft, Mail, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const dynamic = 'force-static'
export const revalidate = 86400

export default function StartupWars2025() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openLightbox = (image: string) => {
    setSelectedImage(image)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Back Navigation */}
      <div className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <Link
            href="/#projects"
            className="inline-flex items-center text-slate-400 hover:text-red-400 transition-colors duration-300 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-red-600 mb-3">
                Startup Wars 2025
              </h1>
              <p className="text-xl text-slate-300 mb-4">Top 6 of 175+ Teams · Cloud Security Investment Analysis</p>
            </div>

            {/* Compact Stats */}
            <div className="grid md:grid-cols-3 gap-3">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Region</p>
                  <p className="text-sm font-medium text-slate-200">
                    Indonesia, Malaysia, Philippines, Singapore, Vietnam
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Thesis</p>
                  <p className="text-sm font-medium text-slate-200">
                    Cloud {">"} MSS · DRaaS {">"} IAM
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Role</p>
                  <p className="text-sm font-medium text-slate-200">Lead Data Analyst · Sector Research</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => openLightbox("/images/foxmont-team.jpeg")}
                className="bg-red-500 hover:bg-red-600 text-white text-sm"
              >
                View Team Photo
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-600 hover:border-slate-500 text-slate-300 bg-transparent text-sm"
              >
                <a href="/#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">Overview</h2>
          <p className="text-base text-slate-300 leading-relaxed mb-4">
            Delivered investor-grade thesis demonstrating Cloud over Managed Security Services on scale and liquidity,
            and within Cloud, Business Continuity and Disaster Recovery as a Service over Identity and Access Management
            based on market size and winnability. Built Philippines-first dataset with Multi-Criteria Decision Analysis
            producing method-robust rankings and audit-ready outputs.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-500 mb-2">Team & Stack</p>
              <p className="text-slate-300 mb-3">5 members · Python, R, SQL, Jupyter</p>
              <p className="text-slate-500 mb-2">Methods</p>
              <p className="text-slate-300">
                SAW, TOPSIS, PROMETHEE II, VIKOR · Policy and market concentration guardrails
              </p>
            </div>
            <div>
              <p className="text-slate-500 mb-2">Key Outcomes</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Top 6 ranking with clear thesis across 175+ teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Philippines-first dataset with cited sources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Method-robust rankings validated across approaches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="border-b border-slate-800 bg-black/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">Methodology</h2>
          <p className="text-base text-slate-300 leading-relaxed mb-4">
            Scored five subsectors across six venture capital criteria using multiple Multi-Criteria Decision Analysis
            methods. Simple Additive Weighting provided transparent rankings, TOPSIS measured closeness to ideal,
            PROMETHEE II applied non-compensatory logic, and VIKOR minimized worst-case regret. Validated stability
            through ±10–15% weight stress tests.
          </p>
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 mt-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="font-medium">Data Pipeline:</span> Philippines-first approach with Asia-Pacific
              supplementary data from 2023-2025. Collected, cleaned, geo-tagged, and evidence-scored sources; normalized
              to 0-100 scale; exported reproducible R and SQL notebooks.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">Investment Thesis</h2>
          <div className="space-y-4">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-200 mb-2">
                Cloud Security over Managed Security Services
              </h3>
              <p className="text-sm text-slate-300">
                Cloud leads on scale and liquidity with better unit economics. Multi-tenant Software as a Service plus
                co-sell arrangements equal lower customer acquisition costs, faster pilots, and higher margins compared
                to services-heavy models.
              </p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-200 mb-2">
                Disaster Recovery as a Service Takes Priority
              </h3>
              <p className="text-sm text-slate-300">
                Business Continuity and Disaster Recovery sits in large addressable market with high growth and
                acceptable competition. Identity and Access Management offers fast attach rates but represents smaller
                market opportunity. Cloud products integrate seamlessly into platforms, driving stronger valuations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-black/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">Impact</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
              <p className="text-base text-slate-300">
                <span className="font-medium">Decision-grade outputs</span> with audit-ready charts accelerated
                Investment Committee discussions
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
              <p className="text-base text-slate-300">
                <span className="font-medium">Method-robust ranking</span> with explicit guardrails reduced model risk
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
              <p className="text-base text-slate-300">
                <span className="font-medium">Channel-first go-to-market strategy</span> translated directly to
                actionable investment experiments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors duration-300"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] mx-4">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Team photo"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
