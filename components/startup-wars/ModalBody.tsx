import Image from "next/image"

export default function StartupWarsModalBody() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-3">
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Region</p>
          <p className="text-sm font-medium text-slate-200">Indonesia, Malaysia, Philippines, Singapore, Vietnam</p>
        </div>
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Thesis</p>
          <p className="text-sm font-medium text-slate-200">Cloud &gt; MSS · DRaaS &gt; IAM</p>
        </div>
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Role</p>
          <p className="text-sm font-medium text-slate-200">Lead Data Analyst · Sector Research</p>
        </div>
      </div>

      <section>
        <h3 className="text-lg font-semibold text-slate-200 mb-2">Overview</h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          Delivered investor‑grade thesis showing Cloud over Managed Security Services and Disaster Recovery as a Service
          over Identity and Access Management based on market size and winnability. Built Philippines‑first dataset with
          Multi‑Criteria Decision Analysis producing method‑robust rankings and audit‑ready outputs.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-200 mb-2">Methodology</h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          Scored subsectors across six venture capital criteria using SAW, TOPSIS, PROMETHEE II, and VIKOR. Validated
          stability via ±10–15% weight stress tests with explicit guardrails to reduce model risk.
        </p>
      </section>

      <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-slate-700/60">
        <Image src="/images/foxmont-team.jpeg" alt="Team photo" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
      </div>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-200">Key Outcomes</h3>
        <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
          <li>Top 6 ranking with clear thesis across 175+ teams</li>
          <li>Philippines‑first dataset with cited sources</li>
          <li>Method‑robust rankings validated across approaches</li>
        </ul>
      </section>
    </div>
  )
}

