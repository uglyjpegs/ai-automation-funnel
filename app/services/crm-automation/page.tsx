import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Calendar, CheckCircle, Zap, GitMerge, Settings, Bell, Star, Users } from "lucide-react"

export const metadata = {
  title: "CRM & Workflow Automation | Remedy AI",
  description: "We build and automate your entire client pipeline inside GHL or your existing CRM. No more manual follow-ups or dropped leads.",
}

const included = [
  { icon: Settings, title: "GHL / CRM Setup & Build-Out", desc: "We configure your CRM from scratch or optimize your existing setup — contacts, pipelines, tags, and all." },
  { icon: GitMerge, title: "Lead Pipeline Automation", desc: "Every new lead gets routed, tagged, and followed up with automatically. Nothing slips through." },
  { icon: Bell, title: "Auto-Nurture Sequences", desc: "SMS, email, and voicemail drops that nurture leads over weeks — hands-free." },
  { icon: Zap, title: "Tool Integration", desc: "We connect your CRM to your calendar, forms, ads, and other tools so data flows without copy-paste." },
]

const testimonials = [
  {
    quote: "Before Remedy AI, leads would come in and just sit there. Now every lead gets a response in under 2 minutes and a 5-touch follow-up sequence. Game changer.",
    name: "David R.",
    title: "Real Estate Broker, Charlotte NC",
  },
  {
    quote: "We were paying for GHL but only using 10% of it. Elvis built out our entire pipeline and now it runs itself. Worth every penny.",
    name: "Lisa K.",
    title: "Insurance Agency Owner, Atlanta GA",
  },
]

export default function CrmAutomationPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 md:py-36 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-purple-600/15 to-violet-600/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-400 font-medium mb-8">
              <Zap className="h-3.5 w-3.5 text-purple-400" />
              GHL Certified · Done-For-You
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Your Pipeline on{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Autopilot
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We build and automate your entire client journey — from first contact to signed contract — inside GHL or your existing CRM. No more dropped leads, no more manual follow-ups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/elvis-cueva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-purple-500/20 text-lg"
              >
                <Calendar className="h-5 w-5" />
                Get a Free CRM Audit
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
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest">What's Included</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">End-to-End Pipeline Build</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item) => (
                <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex gap-5 hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
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

        {/* What You Get */}
        <section className="py-20 px-4 bg-zinc-900/50 border-y border-zinc-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest">The Result</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">What Your Agency Gets</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Every lead responded to in under 2 minutes",
                "Automated 5–10 touch follow-up sequences",
                "Deals move through your pipeline automatically",
                "Instant notifications when leads take action",
                "Full visibility into your pipeline at all times",
                "Appointments booked without back-and-forth",
                "Re-engagement campaigns for cold leads",
                "Monthly reporting on pipeline performance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-zinc-300 italic leading-relaxed mb-5">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
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
            <div className="bg-gradient-to-br from-purple-600/15 to-violet-600/10 border border-zinc-700 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop losing leads to manual processes</h2>
              <p className="text-zinc-400 mb-8">Book a free call. We'll review your current setup and show you what's leaking leads right now.</p>
              <Link
                href="https://cal.com/elvis-cueva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-purple-500/20 text-lg"
              >
                <Calendar className="h-5 w-5" />
                Book Free CRM Audit
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
