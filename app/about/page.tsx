"use client"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Building,
  Globe,
  Mail,
  CheckCircle,
  Star,
  Target,
  DollarSign,
  Zap,
  Bot,
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const startAssessment = () => {
    window.location.href = "/funnel?start=true"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <SiteHeader />

      <div className="container mx-auto px-4 py-6 md:py-12 space-y-8 md:space-y-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-12 md:py-20 px-6 md:px-12 rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:space-y-8 text-center md:text-left">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Meet
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Elvis Cueva
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                    I don't just build AI systems for businesses — I use them to build my own. I scaled a home service company from zero to $100K/month, and I bring that same playbook to agencies.
                  </p>
                  <p className="text-base text-slate-400">
                    Bilingual English & Spanish · Serving nationwide
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-300">$100K</div>
                    <div className="text-slate-400 text-xs md:text-sm mt-1">Monthly Revenue Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-300">200+</div>
                    <div className="text-slate-400 text-xs md:text-sm mt-1">Agencies Automated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-300">5K+</div>
                    <div className="text-slate-400 text-xs md:text-sm mt-1">Clients Served</div>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <Button
                    onClick={startAssessment}
                    size="lg"
                    className="w-full md:w-auto bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300"
                  >
                    Start Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl md:rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                  <Image
                    src="/images/squarepp2.png"
                    alt="Elvis Cueva"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Video */}
        <section className="px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Hear It From Elvis</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Why I Built RemedyAds</h2>
              <p className="text-slate-600 mt-2 max-w-lg mx-auto">The real story — from running a home service business to building systems that work for hundreds of agencies.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-slate-900">
              <video
                src="/after_appointment.mp4"
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* I Practice What I Preach */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">I Practice What I Preach</h2>
              <p className="text-lg md:text-xl text-slate-600">Every system I sell, I've used to grow real businesses. Here's the proof.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Honest Water NC */}
              <div className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute -top-3 left-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Case Study — Home Services
                </div>
                <div className="flex items-center gap-4 mb-6 mt-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Honest Water NC</h3>
                    <p className="text-slate-500 text-sm">honestwaternc.com · Water Treatment</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-xl p-4 mb-6">
                  <div className="text-3xl font-black text-blue-600 mb-1">$0 → $100K/mo</div>
                  <div className="text-slate-500 text-sm">Revenue scaled using Meta ads + AI automation</div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Built and scaled from zero using Meta ads + AI follow-up systems",
                    "Automated every touchpoint — leads, estimates, reminders, reviews",
                    "Proof that the same systems work outside of B2B agencies",
                    "English & Spanish market targeting in NC",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latino Servi-tax */}
              <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Latino Servi-tax</h3>
                    <p className="text-slate-500 text-sm">Manager Assistant · 2014–2018, 2024</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Where I learned what client follow-up really costs. Managing 5,000+ clients manually showed me exactly where automation changes everything — and built the empathy that makes my systems actually work.
                </p>
                <ul className="space-y-3">
                  {[
                    "5,000+ clients served with insurance and payment processing",
                    "Managed tax preparation for hundreds of businesses",
                    "Saw firsthand how manual follow-ups drain time and revenue",
                    "Bilingual service — English & Spanish communities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What I Build */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-12 md:py-16 px-6 md:px-12 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Three Systems. One Proven Result.</h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                I used these exact systems to take Honest Water NC to $100K/mo. Now I build them for agencies.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  color: "from-blue-500 to-cyan-500",
                  title: "DFY Meta Ads",
                  desc: "Creative, targeting, and optimization handled start to finish. I know what converts because I've been running my own ads.",
                },
                {
                  icon: Zap,
                  color: "from-purple-500 to-violet-500",
                  title: "CRM & Workflow Automation",
                  desc: "Your entire client journey automated inside GHL or your existing CRM — from first touch to signed contract.",
                },
                {
                  icon: Bot,
                  color: "from-pink-500 to-rose-500",
                  title: "AI Follow-Up Systems",
                  desc: "Instant multi-channel follow-up via SMS, email, and voice. The same system that drove Honest Water NC's growth.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: DollarSign, value: "$100K/mo", label: "Revenue Built", sub: "Honest Water NC", color: "from-blue-500 to-cyan-500" },
                { icon: Users, value: "200+", label: "Agencies Automated", sub: "and growing", color: "from-purple-500 to-violet-500" },
                { icon: Clock, value: "15K+", label: "Hours Saved", sub: "monthly across clients", color: "from-pink-500 to-rose-500" },
                { icon: TrendingUp, value: "40%", label: "Avg. Conversion Lift", sub: "across campaigns", color: "from-green-500 to-emerald-500" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 text-center">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg`}>
                    <stat.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-slate-600 text-xs md:text-sm font-medium">{stat.label}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button
                onClick={startAssessment}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start My Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white px-6 md:px-12 py-12 md:py-16 rounded-2xl md:rounded-3xl shadow-lg border border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">What Agencies Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  quote: "Elvis understands our challenges because he's been in our shoes. His automation system saved us 18 hours per week and improved our collection rate by 45%.",
                  name: "Maria Rodriguez",
                  company: "Rodriguez Insurance Agency",
                  color: "from-blue-500 to-purple-600",
                },
                {
                  quote: "What sets Elvis apart is real-world experience. He doesn't just build technology — he builds solutions that actually work for agencies like ours.",
                  name: "James Thompson",
                  company: "Thompson Financial Services",
                  color: "from-green-500 to-teal-600",
                },
              ].map((t) => (
                <div key={t.name} className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-slate-700 italic leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${t.color} rounded-full flex items-center justify-center`}>
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission / CTA */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-12 md:py-16 px-6 md:px-12 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold">Built It. Scaled It. Now I Build It for You.</h2>
            <div className="text-slate-300 text-base md:text-lg leading-relaxed space-y-4 max-w-2xl mx-auto">
              <p>
                I started Honest Water NC from nothing and scaled it to $100K/month using the exact systems I now build for agencies — Meta ads, AI follow-up, and full CRM automation.
              </p>
              <p>
                You're not hiring a consultant who read about automation. You're hiring someone who uses it every day to run real businesses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300"
                onClick={() => window.location.href = "/funnel"}
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Start Free Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 text-white bg-transparent"
                onClick={startAssessment}
              >
                Take the Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-slate-400 text-sm">English & Spanish · No commitment · Just a real conversation</p>
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6 md:mb-8">Let's Connect</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Mail className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base">Email</h3>
                  <a href="mailto:ejcuevac01@gmail.com" className="text-slate-600 text-xs md:text-sm hover:text-blue-600 transition-colors">ejcuevac01@gmail.com</a>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.072-.928-2-2-2s-2 .928-2 2v4.5h-3v-9h3v1.268c.557-.798 1.551-1.268 2.5-1.268 2.206 0 4 1.794 4 4v5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/elviscueva/" target="_blank" rel="noopener noreferrer" className="text-slate-600 text-xs md:text-sm hover:text-green-600 underline transition-colors">linkedin.com/in/elviscueva</a>
                </div>
              </div>

              <div className="text-center space-y-3 col-span-2 md:col-auto">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Globe className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base">Languages</h3>
                  <p className="text-slate-600 text-xs md:text-sm">English & Spanish</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
