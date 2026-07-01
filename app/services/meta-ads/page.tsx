import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, CheckCircle, Target, TrendingUp, BarChart2, Layers, Star, Users, Play } from "lucide-react"

export const metadata = {
  title: "DFY Meta Ads for Agencies",
  description: "Done-for-you Meta advertising that fills your pipeline with qualified leads. RemedyAds handles creative, targeting, budgets, and optimization — you just close deals.",
  alternates: { canonical: "https://remedyads.com/services/meta-ads" },
  openGraph: {
    title: "DFY Meta Ads for Agencies | RemedyAds",
    description: "We build, launch, and manage your Meta campaigns end-to-end. Creative, targeting, budgets — all handled. Live in 7 days.",
    url: "https://remedyads.com/services/meta-ads",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Done-For-You Meta Ads",
  provider: { "@type": "Organization", name: "RemedyAds", url: "https://remedyads.com" },
  description: "Full-service Meta advertising management including creative, targeting, A/B testing, and weekly reporting.",
  areaServed: "US",
  serviceType: "Digital Marketing",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <div className="container mx-auto px-4 py-6 md:py-12 space-y-8 md:space-y-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-16 md:py-24 px-6 md:px-12 rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs text-slate-300 font-medium">
              <Target className="h-3.5 w-3.5 text-blue-400" />
              Done-For-You · No Long-Term Contracts
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Meta Ads That{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Fill Your Pipeline
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We build, launch, and manage your Meta advertising campaigns end-to-end. Creative, targeting, budgets, optimization — all done for you while you focus on closing deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/funnel"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl text-lg"
              >
                <ArrowRight className="h-5 w-5" />
                Get My Free Audit
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
              >
                See All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Video — Campaign Walkthrough */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">See It In Action</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Watch How We Build a Campaign</h2>
              <p className="text-slate-600 mt-2">A real walkthrough of the strategy, creative, and targeting setup we use for agencies like yours.</p>
            </div>
            <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl overflow-hidden aspect-video shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border-2 border-white/40 hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="h-9 w-9 text-white ml-1" />
                </div>
                <p className="text-white font-semibold text-lg">Campaign Walkthrough Video</p>
                <p className="text-slate-300 text-sm">Coming soon — strategy, creative & results</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">What's Included</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Everything Handled for You</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item) => (
                <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-7 flex gap-5 hover:shadow-lg hover:border-blue-100 transition-all shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white px-6 md:px-12 py-12 md:py-16 rounded-2xl md:rounded-3xl shadow-lg border border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Live in 7 Days</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Strategy Call", desc: "We learn your offer, audience, and goals. Walk away with a clear campaign blueprint." },
                { step: "02", title: "Build & Launch", desc: "We create the ads, set up the campaigns, and go live — usually within one week." },
                { step: "03", title: "Optimize & Scale", desc: "We monitor daily, kill what doesn't work, scale what does. Weekly reports keep you in the loop." },
              ].map((s) => (
                <div key={s.step} className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-7">
                  <div className="text-5xl font-black text-slate-200 mb-4 leading-none">{s.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 py-12 md:py-16 px-6 md:px-12 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-widest">Typical Results</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-12">Numbers That Matter</h2>
            <div className="grid grid-cols-3 gap-8 mb-16">
              {results.map((r) => (
                <div key={r.label}>
                  <div className="text-4xl md:text-6xl font-bold text-blue-300 mb-2">{r.value}</div>
                  <div className="text-sm text-slate-400">{r.label}</div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-slate-200 italic leading-relaxed mb-5">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white border border-slate-100 rounded-3xl p-10 md:p-14 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to fill your pipeline?</h2>
              <p className="text-slate-600 mb-8">Book a free call. We'll audit your current ads (or lack thereof) and show you exactly what we'd change.</p>
              <Link
                href="/funnel"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/20 text-lg"
              >
                Start Free Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-slate-400 mt-4">No commitment. No fluff.</p>
            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
