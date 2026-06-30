import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Calendar, CheckCircle, Bot, MessageSquare, Phone, Mail, Clock, Star, Users, Play } from "lucide-react"

export const metadata = {
  title: "AI Follow-Up Systems for Agencies",
  description: "AI that responds to every lead in under 60 seconds via SMS, email, and voice — 24/7. Never lose a deal because you were busy. RemedyAds builds it for you.",
  alternates: { canonical: "https://remedyads.com/services/ai-follow-up" },
  openGraph: {
    title: "AI Follow-Up Systems | RemedyAds",
    description: "Instant multi-channel follow-up powered by AI. 40% more booked calls, zero manual chasing.",
    url: "https://remedyads.com/services/ai-follow-up",
  },
}

const included = [
  { icon: Clock, title: "Instant Lead Response", desc: "Every new lead gets a personalized response within 60 seconds — day or night, weekday or weekend." },
  { icon: MessageSquare, title: "Multi-Channel Follow-Up", desc: "We sequence follow-ups across SMS, email, and ringless voicemail for maximum reach." },
  { icon: Bot, title: "AI-Powered Personalization", desc: "Messages feel human because they're tailored to each lead's info, industry, and behavior." },
  { icon: Calendar, title: "Automated Appointment Booking", desc: "When a lead is ready, the AI books the appointment directly to your calendar — no back-and-forth." },
]

const testimonials = [
  {
    quote: "I used to lose leads every weekend. Now the AI handles everything instantly and I wake up Monday to booked appointments. It's unreal.",
    name: "Mike S.",
    title: "Agency Owner, Raleigh NC",
  },
  {
    quote: "The AI sounds like a real person. Clients respond to it, book calls, and half the time they don't even know it wasn't me.",
    name: "Jennifer A.",
    title: "State Farm Agent, Phoenix AZ",
  },
]

export default function AiFollowUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <SiteHeader />
      <div className="container mx-auto px-4 py-6 md:py-12 space-y-8 md:space-y-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-pink-900 to-rose-900 text-white py-16 md:py-24 px-6 md:px-12 rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs text-slate-300 font-medium">
              <Bot className="h-3.5 w-3.5 text-pink-400" />
              AI-Powered · Runs 24/7
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Never Lose a Lead{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Again
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Our AI follows up with every lead instantly via SMS, email, and voice — 24/7. No more manually chasing prospects or losing deals because you were busy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/elvis-cueva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl text-lg"
              >
                <Calendar className="h-5 w-5" />
                See It in Action
              </Link>
              <Link
                href="/funnel"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
              >
                Take the Free Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-widest">What's Included</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Your AI Follow-Up Stack</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item) => (
                <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-7 flex gap-5 hover:shadow-lg hover:border-pink-100 transition-all shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
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

        {/* Channels */}
        <section className="bg-white px-6 md:px-12 py-12 md:py-16 rounded-2xl md:rounded-3xl shadow-lg border border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-pink-600 uppercase tracking-widest">Channels We Automate</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-12">Every touchpoint. All automated.</h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: MessageSquare, label: "SMS / Text", desc: "Highest open rates. Instant delivery." },
                { icon: Mail, label: "Email", desc: "Branded sequences that nurture over time." },
                { icon: Phone, label: "Ringless Voicemail", desc: "Personal touch without interrupting." },
              ].map((c) => (
                <div key={c.label} className="bg-gradient-to-br from-slate-50 to-pink-50 border border-slate-200 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <c.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{c.label}</h3>
                  <p className="text-slate-600 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video — AI In Action */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-widest">Live Demo</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Watch the AI Respond to a Real Lead</h2>
              <p className="text-slate-600 mt-2">See how the system fires within seconds of a lead coming in — SMS, email, and voicemail all automated.</p>
            </div>
            <div className="relative bg-gradient-to-br from-slate-900 to-pink-900 rounded-2xl overflow-hidden aspect-video shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border-2 border-white/40 hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="h-9 w-9 text-white ml-1" />
                </div>
                <p className="text-white font-semibold text-lg">AI Follow-Up Live Demo</p>
                <p className="text-slate-300 text-sm">Coming soon — real lead response in under 60 seconds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-gradient-to-br from-slate-900 via-pink-900 to-rose-900 py-12 md:py-16 px-6 md:px-12 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-pink-300 uppercase tracking-widest">What Clients See</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">The Impact Is Immediate</h2>
            </div>
            <div className="grid grid-cols-3 gap-8 text-center mb-12">
              {[
                { value: "<60s", label: "Avg. Response Time" },
                { value: "40%", label: "More Booked Calls" },
                { value: "0hrs", label: "Manual Follow-Up Time" },
              ].map((r) => (
                <div key={r.label}>
                  <div className="text-4xl md:text-5xl font-bold text-pink-300 mb-2">{r.value}</div>
                  <div className="text-sm text-slate-400">{r.label}</div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-slate-200 italic leading-relaxed mb-5">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">See how fast your leads should hear from you</h2>
              <p className="text-slate-600 mb-8">Take our free 2-minute audit and get a custom AI follow-up blueprint for your agency.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://cal.com/elvis-cueva/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-pink-500/20"
                >
                  <Calendar className="h-5 w-5" />
                  Book a Strategy Call
                </Link>
                <Link
                  href="/funnel"
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-500 text-slate-700 hover:text-slate-900 font-semibold px-7 py-4 rounded-xl transition-all duration-200"
                >
                  Take Free Audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-sm text-slate-400 mt-4">No commitment. No fluff.</p>
            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
