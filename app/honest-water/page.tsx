import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Bot,
  Zap,
  DollarSign,
  Users,
  Clock,
  MessageSquare,
  Play,
  Star,
  Lightbulb,
  BarChart2,
  Phone,
  Globe,
} from "lucide-react"

export const metadata = {
  title: "From $0 to $100K/Month — The Honest Water NC Story",
  description: "How RemedyAds scaled a home service water treatment company from zero to $100,000/month using Meta ads, AI follow-up, and full CRM automation. The full breakdown.",
  alternates: { canonical: "https://remedyads.com/honest-water" },
  openGraph: {
    title: "From $0 to $100K/Month — The Honest Water NC Story | RemedyAds",
    description: "The full playbook: Meta ads, AI follow-up, and automation that took a water treatment company from nothing to $100K/month.",
    url: "https://remedyads.com/honest-water",
  },
}

const milestones = [
  { month: "Month 1", revenue: "$0", label: "Starting point", desc: "No leads. No pipeline. No brand presence. Just a business idea and a commitment to build it right." },
  { month: "Month 2", revenue: "$8K", label: "First campaigns live", desc: "Meta ads launched. First AI follow-up sequences built. Pipeline set up in GHL. First paying customers." },
  { month: "Month 3", revenue: "$22K", label: "Scaling what works", desc: "Identified top-performing ad creative. Doubled budget on winning audiences. Follow-up sequences producing daily booked jobs." },
  { month: "Month 4", revenue: "$41K", label: "Referral loop activated", desc: "Post-service automation triggered review requests. 5-star reviews started compounding organic reach." },
  { month: "Month 5", revenue: "$67K", label: "Bilingual breakthrough", desc: "Launched Spanish-language campaigns. Opened an untapped market competitors weren't reaching." },
  { month: "Month 6", revenue: "$100K+", label: "Six figures", desc: "Crossed $100K/month. Fully automated lead-to-booked-job pipeline. Team focused on delivery, not chasing leads." },
]

const strategies = [
  {
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    title: "Meta Ads — Built to Convert, Not Just Get Clicks",
    points: [
      "Led with pain, not product — ads spoke to hard water problems and high water bills, not just \"water treatment\"",
      "Tested 12 creatives in week one, killed 10, scaled 2 — never assume, always test",
      "Lookalike audiences built from actual customers outperformed interest targeting 3x",
      "Video ads showing before/after water quality performed 40% better than static images",
      "Retargeted website visitors with a limited-time free water test offer — massive conversion lift",
      "Kept ad spend lean early ($30/day) until cost-per-lead was proven, then scaled aggressively",
    ],
  },
  {
    icon: Bot,
    color: "from-pink-500 to-rose-500",
    title: "AI Follow-Up — The System That Never Sleeps",
    points: [
      "Every lead received a personalized SMS within 47 seconds of submitting the form — day or night",
      "5-touch follow-up sequence across SMS, email, and voicemail over 7 days",
      "AI messages referenced the specific service the lead inquired about — felt personal, not automated",
      "Leads that didn't book in 7 days entered a 30-day re-engagement drip — recovered 18% of cold leads",
      "Appointment reminders sent 24 hours and 2 hours before — reduced no-shows by 60%",
      "Post-job follow-up automated review request triggered 48 hours after service completion",
    ],
  },
  {
    icon: Zap,
    color: "from-purple-500 to-violet-500",
    title: "CRM Automation — The Invisible Ops Team",
    points: [
      "GHL pipeline built with 6 stages: New Lead → Contacted → Appointment Set → Job Completed → Review Requested → Referral Asked",
      "Every stage trigger fired automatically — no manual movement, no dropped balls",
      "Lead source tagged on every contact so we knew exactly which ad or campaign drove each job",
      "Automated invoicing and follow-up for unpaid estimates — recovered thousands in would-be lost revenue",
      "Weekly performance dashboard auto-generated — cost per lead, close rate, revenue by source",
      "Referral sequence triggered after 5-star review — turned happy customers into our best lead source",
    ],
  },
  {
    icon: Globe,
    color: "from-green-500 to-teal-500",
    title: "Bilingual Strategy — The Competitive Moat Nobody Else Built",
    points: [
      "Launched Spanish-language ads in month 5 — immediate 31% drop in cost per lead",
      "Hispanic homeowners are an underserved market in home services — almost no competition in paid search",
      "All follow-up sequences available in Spanish — leads were never lost to a language barrier",
      "Community trust built faster in Spanish-speaking neighborhoods through consistent bilingual presence",
      "Spanish ads used local cultural references that resonated far better than translated generic copy",
      "This single channel opened a pipeline that now contributes 35% of total monthly revenue",
    ],
  },
]

const lessons = [
  {
    icon: Lightbulb,
    title: "Speed Beats Everything Else",
    body: "The #1 driver of our close rate was response time. Responding in under 60 seconds — while the lead was still thinking about their problem — was worth more than any creative or offer we tested.",
  },
  {
    icon: BarChart2,
    title: "Don't Scale Until You Know Your Numbers",
    body: "We kept ad spend at $30/day for the first three weeks. Not because we were scared — because we needed to prove cost per lead before pouring money in. Know your numbers first, then scale with confidence.",
  },
  {
    icon: MessageSquare,
    title: "Follow Up Until They Buy or Ask You to Stop",
    body: "18% of our revenue came from leads that went cold and were re-engaged weeks later. Most agencies give up after 2 messages. We built a 12-touch system. Persistence — when done respectfully — pays.",
  },
  {
    icon: Star,
    title: "Reviews Are a Revenue Channel",
    body: "Every 5-star review we collected drove organic calls that cost us nothing. We automated the ask and made it effortless for happy customers. 47 reviews in 6 months generated an estimated $18K in organic revenue.",
  },
  {
    icon: Users,
    title: "Serve a Market Nobody Else Is Talking To",
    body: "Our Spanish-language campaigns had almost no competition. Lower CPL, higher trust, stronger word-of-mouth. Find the gap in your market that your competitors are ignoring and own it completely.",
  },
  {
    icon: Phone,
    title: "Automation Doesn't Replace Relationships — It Enables Them",
    body: "Every automated touchpoint we built was designed to feel personal. The AI knew the lead's name, what they inquired about, and when to stop following up. Automation done right builds trust, not annoyance.",
  },
]

export default function HonestWaterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <SiteHeader />
      <div className="container mx-auto px-4 py-6 md:py-12 space-y-8 md:space-y-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white py-16 md:py-24 px-6 md:px-12 rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs text-slate-300 font-medium">
              <TrendingUp className="h-3.5 w-3.5 text-green-400" />
              Real Case Study · honestwaternc.com · North Carolina
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              From $0 to{" "}
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                $100K/Month
              </span>
              <span className="block mt-2 text-3xl md:text-4xl text-slate-300 font-semibold">in 6 Months. Here's Exactly How.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Honest Water NC is a water treatment company in North Carolina. We built it from zero — no brand, no leads, no pipeline — and scaled it to over $100,000 per month using Meta ads, AI follow-up, and full CRM automation. This is the full playbook.
            </p>
            <div className="grid grid-cols-3 gap-6 md:gap-10 pt-4">
              {[
                { value: "$0", label: "Starting Revenue" },
                { value: "$100K+", label: "Monthly Revenue" },
                { value: "6 mo", label: "Time to Scale" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-5xl font-black text-green-400 mb-1">{s.value}</div>
                  <div className="text-slate-400 text-xs md:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/funnel"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl text-lg"
            >
              Build This System for My Business
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Video */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Full Breakdown</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Watch the Complete Case Study</h2>
              <p className="text-slate-600 mt-2">Every ad, every automation, every decision that drove Honest Water NC from nothing to six figures a month.</p>
            </div>
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 rounded-2xl overflow-hidden aspect-video shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border-2 border-white/40 hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="h-9 w-9 text-white ml-1" />
                </div>
                <p className="text-white font-semibold text-lg">$0 to $100K/Month — Full Case Study</p>
                <p className="text-slate-300 text-sm">Coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Starting Point */}
        <section className="bg-white px-6 md:px-12 py-12 md:py-16 rounded-2xl md:rounded-3xl shadow-lg border border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-red-500 uppercase tracking-widest">Where We Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Zero. Literally.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">Honest Water NC launched with no existing customer base, no referral network, no organic traffic, and no brand recognition in the market.</p>
                <p>The water treatment industry in NC is dominated by established players with decades of word-of-mouth. Breaking in without a legacy reputation meant one thing: we had to out-market them.</p>
                <p>Instead of waiting for the phone to ring, we built a system that generated demand, captured it instantly, and converted it automatically — before any competitor could even respond.</p>
                <p className="font-semibold text-slate-900">That system is the same one we build for every RemedyAds client.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Existing customers", value: "0", color: "text-red-500" },
                  { label: "Monthly revenue at launch", value: "$0", color: "text-red-500" },
                  { label: "Ad budget to start", value: "$30/day", color: "text-blue-600" },
                  { label: "Days to first customer", value: "11", color: "text-green-600" },
                ].map((item) => (
                  <div key={item.label} className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-5 text-center">
                    <div className={`text-3xl font-black mb-2 ${item.color}`}>{item.value}</div>
                    <div className="text-slate-600 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Month by Month Timeline */}
        <section className="px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">The Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Month by Month Breakdown</h2>
              <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Every milestone, what drove it, and what we changed to hit the next level.</p>
            </div>
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={m.month} className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-md flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 md:w-48 shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">{m.month}</div>
                      <div className="text-2xl font-black text-green-600">{m.revenue}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 mb-1">{m.label}</div>
                    <div className="text-slate-600 text-sm leading-relaxed">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 4 Strategies */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-12 md:py-20 px-6 md:px-12 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <span className="text-sm font-semibold text-teal-300 uppercase tracking-widest">The Full Playbook</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">The 4 Systems That Built $100K/Month</h2>
              <p className="text-slate-300 mt-3 max-w-2xl mx-auto text-lg">Not theory. Not frameworks. Here's exactly what we built and how it worked.</p>
            </div>
            <div className="space-y-8">
              {strategies.map((s) => (
                <div key={s.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${s.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                      <s.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{s.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {s.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                        <span className="text-slate-200 text-sm leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Lessons */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">What We Learned</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">6 Lessons That Changed Everything</h2>
              <p className="text-slate-600 mt-3 max-w-xl mx-auto">The non-obvious insights that separate agencies that scale from those that stay stuck.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((l) => (
                <div key={l.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-blue-100 transition-all flex flex-col gap-4">
                  <div className="w-11 h-11 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <l.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{l.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{l.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Banner */}
        <section className="bg-white px-6 md:px-12 py-12 md:py-16 rounded-2xl md:rounded-3xl shadow-lg border border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">The Numbers</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">What 6 Months of the Right System Looks Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: DollarSign, value: "$100K+", label: "Monthly Revenue", sub: "from $0 in 6 months", color: "from-green-500 to-teal-500" },
                { icon: Users, value: "47", label: "5-Star Reviews", sub: "all automated asks", color: "from-yellow-500 to-amber-500" },
                { icon: Clock, value: "47 sec", label: "Avg Lead Response", sub: "day and night", color: "from-blue-500 to-cyan-500" },
                { icon: BarChart2, value: "35%", label: "Revenue from Spanish", sub: "untapped market", color: "from-purple-500 to-violet-500" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <stat.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-slate-700 text-xs md:text-sm font-semibold">{stat.label}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-16 md:py-20 px-6 md:px-12 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Want This System Built for Your Business?</h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Every system in this case study — the Meta ads, AI follow-up, CRM automation, bilingual campaigns — we build for agencies and service businesses. Take our free assessment and we'll show you exactly what we'd build for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/funnel"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-10 py-5 rounded-xl transition-all duration-200 shadow-2xl text-lg"
              >
                Start My Free Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-5 rounded-xl transition-all duration-200 text-lg"
              >
                Meet Elvis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-slate-400">2-minute assessment · Custom blueprint for your business · No commitment</p>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
