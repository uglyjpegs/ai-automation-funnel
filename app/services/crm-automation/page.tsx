import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Calendar, CheckCircle, Zap, GitMerge, Settings, Bell, Star, Users, Play } from "lucide-react"

export const metadata = {
  title: "CRM & Workflow Automation for Agencies",
  description: "We build and automate your entire client pipeline inside GHL or your existing CRM. No more dropped leads or manual follow-ups. RemedyAds — live in 7 days.",
  alternates: { canonical: "https://remedyads.com/services/crm-automation" },
  openGraph: {
    title: "CRM & Workflow Automation | RemedyAds",
    description: "Every lead responded to in under 2 minutes. Automated sequences, pipeline routing, and tool integrations — all built for you.",
    url: "https://remedyads.com/services/crm-automation",
  },
}

const included = [
  { icon: Settings, title: "GHL / CRM Setup & Build-Out", desc: "We configure your CRM from scratch or optimize your existing setup — contacts, pipelines, tags, and all." },
  { icon: GitMerge, title: "Lead Pipeline Automation", desc: "Every new lead gets routed, tagged, and followed up with automatically. Nothing slips through." },
  { icon: Bell, title: "Auto-Nurture Sequences", desc: "SMS, email, and voicemail drops that nurture leads over weeks — hands-free." },
  { icon: Zap, title: "Tool Integration", desc: "We connect your CRM to your calendar, forms, ads, and other tools so data flows without copy-paste." },
]

const testimonials = [
  {
    quote: "Before RemedyAds, leads would come in and just sit there. Now every lead gets a response in under 2 minutes and a 5-touch follow-up sequence. Game changer.",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <SiteHeader />
      <div className="container mx-auto px-4 py-6 md:py-12 space-y-8 md:space-y-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 text-white py-16 md:py-24 px-6 md:px-12 rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs text-slate-300 font-medium">
              <Zap className="h-3.5 w-3.5 text-purple-400" />
              GHL Certified · Done-For-You
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Your Pipeline on{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Autopilot
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We build and automate your entire client journey — from first contact to signed contract — inside GHL or your existing CRM. No more dropped leads, no more manual follow-ups.
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

        {/* What's Included */}
        <section className="px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">What's Included</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">End-to-End Pipeline Build</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item) => (
                <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-7 flex gap-5 hover:shadow-lg hover:border-purple-100 transition-all shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
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

        {/* Video — Pipeline Walkthrough */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">Inside Look</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Watch a Pipeline Build in Real-Time</h2>
              <p className="text-slate-600 mt-2">See exactly how we set up automations, sequences, and integrations inside GHL for a real agency.</p>
            </div>
            <div className="relative bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl overflow-hidden aspect-video shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border-2 border-white/40 hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="h-9 w-9 text-white ml-1" />
                </div>
                <p className="text-white font-semibold text-lg">Pipeline Build Walkthrough</p>
                <p className="text-slate-300 text-sm">Coming soon — full GHL automation demo</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="bg-white px-6 md:px-12 py-12 md:py-16 rounded-2xl md:rounded-3xl shadow-lg border border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">The Result</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">What Your Agency Gets</h2>
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
                <div key={item} className="flex items-center gap-3 bg-gradient-to-br from-slate-50 to-purple-50 border border-slate-200 rounded-xl p-4">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 py-12 md:py-16 px-6 md:px-12 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-slate-200 italic leading-relaxed mb-5">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full flex items-center justify-center">
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stop losing leads to manual processes</h2>
              <p className="text-slate-600 mb-8">Book a free call. We'll review your current setup and show you what's leaking leads right now.</p>
              <Link
                href="/funnel"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-purple-500/20 text-lg"
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
