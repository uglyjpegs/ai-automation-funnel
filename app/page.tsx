import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowRight,
  Target,
  Zap,
  Bot,
  Users,
  Clock,
  TrendingUp,
  DollarSign,
  CheckCircle,
  Calendar,
  Star,
  Play,
  MessageSquare,
  Phone,
  BarChart2,
  Lightbulb,
  AlertCircle,
  Repeat,
  Mail,
  ShieldCheck,
  Gauge,
  ThumbsUp,
  PieChart,
} from "lucide-react"

export const metadata = {
  title: "RemedyAds — AI-Powered Marketing for Agencies",
  description:
    "Done-for-you Meta ads, CRM automation, and AI follow-up systems. RemedyAds helps service businesses and agencies scale without hiring. English & Spanish.",
  alternates: { canonical: "https://remedyads.com" },
  openGraph: {
    title: "RemedyAds — AI-Powered Marketing for Agencies",
    description: "Done-for-you Meta ads, CRM automation, and AI follow-up systems. Scale without hiring.",
    url: "https://remedyads.com",
  },
}

const services = [
  {
    icon: Target,
    title: "DFY Meta Ads",
    badge: "Most Popular",
    desc: "We build and manage Meta campaigns that fill your pipeline with qualified leads. Creative, targeting, budgets, optimization — all handled.",
    features: [
      "Custom ad creative & copy",
      "Audience research & targeting",
      "A/B testing & optimization",
      "Weekly performance reports",
    ],
    href: "/services/meta-ads",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "CRM & Workflow Automation",
    badge: null,
    desc: "We connect your tools and automate your entire client journey — from first contact to signed contract — inside GHL or your existing CRM.",
    features: [
      "GHL / CRM setup & build-out",
      "Lead pipeline automation",
      "Auto-nurture sequences",
      "Integration with your tools",
    ],
    href: "/services/crm-automation",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Bot,
    title: "AI Follow-Up Systems",
    badge: null,
    desc: "Never lose a lead again. Our AI follows up instantly via SMS, email, and voice — so you never have to chase a prospect manually.",
    features: [
      "Instant lead response",
      "Multi-channel follow-up",
      "AI-powered personalization",
      "Automated appointment booking",
    ],
    href: "/services/ai-follow-up",
    color: "from-pink-500 to-rose-500",
  },
]

const stats = [
  { icon: Users, value: "200+", label: "Agencies Served", color: "from-blue-500 to-cyan-500" },
  { icon: DollarSign, value: "$2M+", label: "Revenue Generated", color: "from-purple-500 to-violet-500" },
  { icon: TrendingUp, value: "40%", label: "Avg. Conversion Lift", color: "from-pink-500 to-rose-500" },
  { icon: Clock, value: "15K+", label: "Hours Saved Monthly", color: "from-green-500 to-emerald-500" },
]

const steps = [
  {
    step: "01",
    title: "Free Strategy Call",
    desc: "We audit your current process, identify your biggest growth lever, and map out your custom automation blueprint.",
  },
  {
    step: "02",
    title: "Build & Launch",
    desc: "We build everything for you — ads, workflows, AI sequences — and launch within 7-10 days. No DIY, no learning curve.",
  },
  {
    step: "03",
    title: "Scale & Optimize",
    desc: "We monitor results, run tests, and continuously improve your system so it keeps getting better over time.",
  },
]

const testimonials = [
  {
    quote:
      "Elvis understands our challenges because he's been in our shoes. His automation system saved us 18 hours per week and improved our collection rate by 45%.",
    name: "Maria Rodriguez",
    title: "Rodriguez Insurance Agency",
  },
  {
    quote:
      "What sets RemedyAds apart is real-world experience. Elvis doesn't just build technology — he builds solutions that actually work for agencies like ours.",
    name: "James Thompson",
    title: "Thompson Financial Services",
  },
]

const educationalContent = [
  {
    icon: Clock,
    stat: "5 Minutes",
    color: "from-blue-500 to-cyan-500",
    title: "The 5-Minute Follow-Up Rule",
    body: "Leads contacted within 5 minutes of submitting a form are 9x more likely to convert. After 30 minutes, that chance drops by over 80%. Speed is your biggest competitive advantage.",
  },
  {
    icon: MessageSquare,
    stat: "98%",
    color: "from-green-500 to-teal-500",
    title: "SMS Open Rate vs. Email",
    body: "Text messages are opened 98% of the time vs. 20% for email. That's why our AI follow-up systems lead with SMS — your message actually gets seen before it ever competes in an inbox.",
  },
  {
    icon: Repeat,
    stat: "5–8 Touches",
    color: "from-purple-500 to-violet-500",
    title: "Why Most Leads Need Multiple Touchpoints",
    body: "Research shows it takes 5–8 touchpoints before a prospect is ready to buy. Most agencies give up after 1–2. Automated sequences keep you in front of leads long after your competitors have quit.",
  },
  {
    icon: AlertCircle,
    stat: "78%",
    color: "from-red-500 to-orange-500",
    title: "Leads That Go Cold Without Automation",
    body: "78% of leads buy from the first company that responds. Without automation, your agency is handing those deals to whoever responds faster. AI levels the playing field — and then some.",
  },
  {
    icon: BarChart2,
    stat: "3–5x ROAS",
    color: "from-blue-500 to-purple-500",
    title: "What Good Meta Ads Actually Return",
    body: "A well-built Meta campaign in the insurance and financial services space should return $3–$5 for every $1 spent. If you're below that, the problem is usually targeting, creative, or landing page alignment.",
  },
  {
    icon: Bot,
    stat: "<60 sec",
    color: "from-pink-500 to-rose-500",
    title: "AI Response Time: The New Standard",
    body: "Top-performing agencies respond to leads in under 60 seconds around the clock. AI makes this possible without hiring staff. Your competition is already using it — the question is whether you are.",
  },
  {
    icon: PieChart,
    stat: "70%",
    color: "from-amber-500 to-orange-500",
    title: "Where Most Ad Budgets Are Wasted",
    body: "Up to 70% of ad spend goes to audiences that will never buy. The fix isn't spending more — it's better targeting. Lookalike audiences built from your actual customers outperform broad targeting every time.",
  },
  {
    icon: Gauge,
    stat: "7–10 Days",
    color: "from-teal-500 to-cyan-500",
    title: "How Fast Can You Be Live?",
    body: "Most agencies think getting automation set up takes months. Our build process gets you fully live with ads, CRM workflows, and AI follow-up in 7–10 days. No onboarding delays, no long contracts.",
  },
  {
    icon: ShieldCheck,
    stat: "No Lock-In",
    color: "from-green-500 to-emerald-500",
    title: "Why We Don't Do Long-Term Contracts",
    body: "We don't need to lock you in because our results keep clients around. Month-to-month means we earn your business every single month — and that keeps us sharper than any agency hiding behind a 12-month contract.",
  },
  {
    icon: Phone,
    stat: "3x More",
    color: "from-violet-500 to-purple-500",
    title: "Ringless Voicemail Still Works",
    body: "Ringless voicemail drops get 3x the callback rate of cold calls and feel far less intrusive. Paired with SMS and email, they create a surround-sound follow-up that's hard to ignore.",
  },
  {
    icon: Lightbulb,
    stat: "$100K/mo",
    color: "from-yellow-500 to-amber-500",
    title: "We Built Our Own Business With These Systems",
    body: "Honest Water NC went from $0 to $100K/month using the exact Meta ads and AI automation we build for clients. We're not theorizing — we're sharing what we know works in the real world.",
  },
  {
    icon: Mail,
    stat: "40% Lift",
    color: "from-indigo-500 to-blue-500",
    title: "Email Sequences That Actually Nurture",
    body: "A properly built email nurture sequence increases close rates by 40% on average. Most agencies send one follow-up email and call it done. We build 8–12 touch sequences that work while you sleep.",
  },
  {
    icon: ThumbsUp,
    stat: "Bilingual",
    color: "from-rose-500 to-pink-500",
    title: "The Spanish-Speaking Market Is Underserved",
    body: "Hispanic Americans represent over $2.8 trillion in buying power — and most agencies don't market to them in Spanish. We build bilingual campaigns that open doors your competitors aren't even knocking on.",
  },
  {
    icon: TrendingUp,
    stat: "2 Minutes",
    color: "from-cyan-500 to-blue-500",
    title: "The ROI of Faster Lead Response",
    body: "Moving from a 2-hour average response time to 2 minutes has been shown to increase conversion rates by over 391%. That single change, powered by AI, can be the most impactful thing your agency does this year.",
  },
  {
    icon: Users,
    stat: "200+",
    color: "from-purple-500 to-pink-500",
    title: "Built for Service Businesses, Not Just Agencies",
    body: "Insurance, real estate, financial planning, water treatment, home services — we've built systems across all of them. The same AI infrastructure that works for a 1-person shop scales to a 50-person team.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <SiteHeader />
      <div className="container mx-auto px-4 py-6 md:py-12 space-y-8 md:space-y-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 md:py-24 px-6 md:px-12 rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Now accepting new clients · English &amp; Spanish
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              AI-Powered Marketing
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                That Actually Converts
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Stop guessing. Start scaling. RemedyAds builds and manages your Meta ads, CRM automation, and AI
              follow-up systems — fully done for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/funnel"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl text-lg"
              >
                <ArrowRight className="h-5 w-5" />
                Start Free Assessment
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
              >
                See Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" />200+ Agencies</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" />No Long-Term Contracts</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" />Results in 7-10 Days</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" />English &amp; Spanish</span>
            </div>
          </div>
        </section>

        {/* Video 1 — Overview */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">See How It Works</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">From Zero to Fully Automated in 7 Days</h2>
              <p className="text-slate-600 mt-2 max-w-xl mx-auto">Watch how we take an agency from manual chaos to a system that runs itself — ads, CRM, and AI follow-up all working together.</p>
            </div>
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden aspect-video shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border-2 border-white/40 hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="h-9 w-9 text-white ml-1" />
                </div>
                <p className="text-white font-semibold text-lg">Agency Transformation Overview</p>
                <p className="text-slate-300 text-sm">Full walkthrough coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">What We Build</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
                Three Services.{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  One Agency.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to fill your pipeline and close more deals — without hiring.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.href}
                  className="relative group bg-white border border-slate-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 shadow-lg flex flex-col"
                >
                  {service.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                      {service.badge}
                    </div>
                  )}
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors mt-auto"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-12 md:py-16 px-6 md:px-12 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">Know Before You Grow</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
                Why Automation{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Changes Everything
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                The data behind why agencies that automate win — and why those that don't keep losing.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationalContent.map((item) => (
                <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-blue-100 transition-all duration-200 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.stat}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video 2 — Case Study */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">Real Results</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">$0 to $100K/Month — The Honest Water NC Story</h2>
              <p className="text-slate-600 mt-2 max-w-xl mx-auto">How the same Meta ads and AI automation we build for agencies scaled a home service business from scratch to six figures a month.</p>
            </div>
            <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 rounded-2xl overflow-hidden aspect-video shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border-2 border-white/40 hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="h-9 w-9 text-white ml-1" />
                </div>
                <p className="text-white font-semibold text-lg">Honest Water NC Case Study</p>
                <p className="text-slate-300 text-sm">$0 → $100K/mo breakdown coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">How It Works</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">
                Up and running{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  in 7-10 days
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div key={step.step} className="relative">
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-[calc(100%+0.75rem)] w-6 h-px bg-slate-300 z-0" />
                  )}
                  <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-lg">
                    <div className="text-6xl font-black text-slate-100 mb-4 leading-none">{step.step}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white px-6 md:px-12 py-12 md:py-16 rounded-2xl md:rounded-3xl shadow-lg border border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">Client Results</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Agencies Love Working With Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16 md:py-20 px-6 md:px-12 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to automate your growth?</h2>
            <p className="text-lg md:text-xl text-slate-300">
              Book a free 30-minute strategy call. We'll show you exactly what we'd build for your agency.
            </p>
            <Link
              href="/funnel"
              className="inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-10 py-5 rounded-xl transition-all duration-200 shadow-2xl text-lg"
            >
              <ArrowRight className="h-5 w-5" />
              Start Free Assessment
            </Link>
            <p className="text-sm text-slate-400">No commitment. No pressure. Just a real conversation.</p>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
