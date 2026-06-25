import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Calendar, CheckCircle, Bot, MessageSquare, Phone, Mail, Clock, Star, Users } from "lucide-react"

export const metadata = {
  title: "AI Follow-Up Systems | Remedy AI",
  description: "AI that follows up instantly via SMS, email, and voice. Never lose a lead again — automated, personalized, and running 24/7.",
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
    <div className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 md:py-36 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-pink-600/15 to-rose-600/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-400 font-medium mb-8">
              <Bot className="h-3.5 w-3.5 text-pink-400" />
              AI-Powered · Runs 24/7
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Never Lose a Lead{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Again
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Our AI follows up with every lead instantly via SMS, email, and voice — 24/7. No more manually chasing prospects or losing deals because you were busy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/elvis-cueva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-pink-500/20 text-lg"
              >
                <Calendar className="h-5 w-5" />
                See It in Action
              </Link>
              <Link
                href="/funnel"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
              >
                Take the Free Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-pink-400 uppercase tracking-widest">What's Included</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">Your AI Follow-Up Stack</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item) => (
                <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex gap-5 hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
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

        {/* Channels */}
        <section className="py-20 px-4 bg-zinc-900/50 border-y border-zinc-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-pink-400 uppercase tracking-widest">Channels We Automate</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-12">Every touchpoint. All automated.</h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: MessageSquare, label: "SMS / Text", desc: "Highest open rates. Instant delivery." },
                { icon: Mail, label: "Email", desc: "Branded sequences that nurture over time." },
                { icon: Phone, label: "Ringless Voicemail", desc: "Personal touch without interrupting." },
              ].map((c) => (
                <div key={c.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <c.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{c.label}</h3>
                  <p className="text-zinc-400 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-pink-400 uppercase tracking-widest">What Clients See</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">The Impact Is Immediate</h2>
            </div>
            <div className="grid grid-cols-3 gap-8 text-center mb-12">
              {[
                { value: "<60s", label: "Avg. Response Time" },
                { value: "40%", label: "More Booked Calls" },
                { value: "0hrs", label: "Manual Follow-Up Time" },
              ].map((r) => (
                <div key={r.label}>
                  <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">{r.value}</div>
                  <div className="text-sm text-zinc-500">{r.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-zinc-300 italic leading-relaxed mb-5">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
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

        {/* Audit CTA */}
        <section className="py-24 px-4 border-t border-zinc-800/50">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-pink-600/15 to-rose-600/10 border border-zinc-700 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See how fast your leads should be hearing from you</h2>
              <p className="text-zinc-400 mb-8">Take our free 2-minute audit and get a custom AI follow-up blueprint for your agency.</p>
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
                  className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200"
                >
                  Take Free Audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-sm text-zinc-600 mt-4">No commitment. No fluff.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
