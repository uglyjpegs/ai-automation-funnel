import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Calendar, CheckCircle, Target, TrendingUp, BarChart2, Layers, Star, Users } from "lucide-react"

export const metadata = {
  title: "DFY Meta Ads | Remedy AI",
  description: "Done-for-you Meta advertising that fills your pipeline with qualified leads. We handle creative, targeting, budgets, and optimization.",
}

const included = [
  { icon: Layers, title: "Ad Creative & Copywriting", desc: "We write the copy and design the creatives. No back-and-forth, no waiting on a designer." },
  { icon: Target, title: "Audience Research & Targeting", desc: "We identify your best-converting audiences using data — not guesswork." },
  { icon: BarChart2, title: "A/B Testing & Optimization", desc: "Continuous testing to find what works. We never stop improving your campaigns." },
  { icon: TrendingUp, title: "Weekly Performance Reports", desc: "Clear, jargon-free reports every week showing exactly where your money went and what it earned." },
]

const results = [
  { value: "3-5x", label: "ROAS" },
  { value: "40%", label: "Lower Cost Per Lead" },
  { value: "7", label: "Days to Launch" },
]

const testimonials = [
  {
    quote: "We went from spending $5K/month on ads with no system to a full funnel that books 20+ calls a week. Night and day difference.",
    name: "Carlos M.",
    title: "Insurance Agency Owner, Miami FL",
  },
  {
    quote: "Finally an agency that actually knows our industry. Elvis built our ads and automation together — everything connects.",
    name: "Sarah T.",
    title: "Financial Planner, Dallas TX",
  },
]

export default function MetaAdsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 md:py-36 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-600/15 to-cyan-600/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-400 font-medium mb-8">
              <Target className="h-3.5 w-3.5 text-blue-400" />
              Done-For-You · No Long-Term Contracts
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Meta Ads That{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Fill Your Pipeline
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We build, launch, and manage your Meta advertising campaigns end-to-end. Creative, targeting, budgets, optimization — all done for you while you focus on closing deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/elvis-cueva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/20 text-lg"
              >
                <Calendar className="h-5 w-5" />
                Get a Free Ad Audit
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
              >
                See All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">What's Included</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">Everything Handled for You</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item) => (
                <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex gap-5 hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-zinc-900/50 border-y border-zinc-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">Live in 7 Days</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Strategy Call", desc: "We learn your offer, audience, and goals. Walk away with a clear campaign blueprint." },
                { step: "02", title: "Build & Launch", desc: "We create the ads, set up the campaigns, and go live — usually within one week." },
                { step: "03", title: "Optimize & Scale", desc: "We monitor daily, kill what doesn't work, scale what does. Weekly reports keep you in the loop." },
              ].map((s) => (
                <div key={s.step} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
                  <div className="text-5xl font-black text-zinc-800 mb-4 leading-none">{s.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Typical Results</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-12">Numbers That Matter</h2>
            <div className="grid grid-cols-3 gap-8 mb-16">
              {results.map((r) => (
                <div key={r.label}>
                  <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">{r.value}</div>
                  <div className="text-sm text-zinc-500">{r.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-zinc-300 italic leading-relaxed mb-5">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-zinc-500">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 border-t border-zinc-800/50">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-600/15 to-cyan-600/10 border border-zinc-700 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to fill your pipeline?</h2>
              <p className="text-zinc-400 mb-8">Book a free call. We'll audit your current ads (or lack thereof) and show you exactly what we'd change.</p>
              <Link
                href="https://cal.com/elvis-cueva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/20 text-lg"
              >
                <Calendar className="h-5 w-5" />
                Book Free Ad Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-zinc-600 mt-4">No commitment. No fluff.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
