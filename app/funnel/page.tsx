"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Calendar,
  Target,
  Zap,
  TrendingUp,
  Home,
  Building,
  Briefcase,
  Globe,
  Wrench,
  Users,
  DollarSign,
  BarChart2,
  Clock,
  Star,
  ThumbsUp,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"

interface FormData {
  businessType: string
  yearsInBusiness: string
  monthlyRevenue: string
  monthlyLeads: string
  primaryGoal: string
  agencyExperience: string
  marketingBudget: string
  biggestFrustration: string
  timeline: string
  name: string
  company: string
  email: string
  phone: string
  language: string
}

const TOTAL_STEPS = 9 // questions only; step 10 = contact form

export default function FunnelPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>({
    businessType: "",
    yearsInBusiness: "",
    monthlyRevenue: "",
    monthlyLeads: "",
    primaryGoal: "",
    agencyExperience: "",
    marketingBudget: "",
    biggestFrustration: "",
    timeline: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    language: "",
  })

  const set = (field: keyof FormData, value: string) =>
    setForm((p) => ({ ...p, [field]: value }))

  const next = () => setStep((s) => s + 1)
  const prev = () => setStep((s) => s - 1)

  const submit = async () => {
    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/TPn8WlVu5mzgqASwKnKc/webhook-trigger/140adf93-0565-4342-a09b-73dea2fd5cf7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      )
    } catch {
      // don't block UX on webhook failure
    }
    setStep(TOTAL_STEPS + 2) // jump to thank-you
  }

  const isValid = (): boolean => {
    switch (step) {
      case 0:  return true
      case 1:  return !!form.businessType
      case 2:  return !!form.yearsInBusiness
      case 3:  return !!form.monthlyRevenue
      case 4:  return !!form.monthlyLeads
      case 5:  return !!form.primaryGoal
      case 6:  return !!form.agencyExperience
      case 7:  return !!form.marketingBudget
      case 8:  return !!form.biggestFrustration
      case 9:  return !!form.timeline
      case 10: return !!form.name && !!form.email && !!form.phone
      default: return false
    }
  }

  // ── Shared option card ────────────────────────────────────────────────────
  const Opt = ({
    value, field, label, desc, badge, badgeColor,
    icon: Icon, iconColor,
  }: {
    value: string
    field: keyof FormData
    label: string
    desc?: string
    badge?: string
    badgeColor?: string
    icon?: React.ElementType
    iconColor?: string
  }) => {
    const selected = form[field] === value
    return (
      <button
        type="button"
        onClick={() => { set(field, value); setTimeout(next, 180) }}
        className={`w-full text-left flex items-center gap-4 p-4 md:p-5 rounded-xl border-2 transition-all duration-150 ${
          selected
            ? "border-blue-500 bg-blue-50 shadow-md"
            : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50 shadow-sm"
        }`}
      >
        {Icon && (
          <div className={`w-10 h-10 bg-gradient-to-r ${iconColor ?? "from-blue-500 to-purple-600"} rounded-xl flex items-center justify-center shrink-0 shadow`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-slate-900 text-sm md:text-base leading-snug">{label}</div>
          {desc && <div className="text-xs md:text-sm text-slate-500 mt-0.5">{desc}</div>}
        </div>
        {badge && (
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 hidden sm:block ${badgeColor}`}>{badge}</span>
        )}
        <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${selected ? "border-blue-500 bg-blue-500" : "border-slate-300"}`}>
          {selected && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>
      </button>
    )
  }

  const Header = () => (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/"><Image src="/images/logo-horizontal.png" alt="RemedyAds" width={140} height={36} className="object-contain" /></a>
        <a href="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
          <Home className="h-4 w-4" /><span className="hidden sm:inline">Back to site</span>
        </a>
      </div>
    </header>
  )

  // ── LANDING (step 0) ──────────────────────────────────────────────────────
  if (step === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Header />
        <div className="container mx-auto px-4 py-10 md:py-16 max-w-2xl">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white rounded-2xl md:rounded-3xl p-8 md:p-14 shadow-2xl text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free · 2 minutes · No commitment
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Let's See If We're a
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Good Fit</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              Answer 9 quick questions about your business. We'll review your answers and come to the call with a real plan — not a pitch deck.
            </p>
            <div className="flex flex-wrap justify-center gap-5 py-2">
              {[
                { icon: Star, label: "200+ businesses served" },
                { icon: Clock, label: "Live in 7–10 days" },
                { icon: CheckCircle, label: "Month-to-month only" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-1.5 text-xs text-slate-300">
                  <t.icon className="h-3.5 w-3.5 text-blue-400" />{t.label}
                </div>
              ))}
            </div>
            <button
              onClick={next}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 shadow-2xl w-full md:w-auto"
            >
              Start Free Assessment <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-slate-500 text-sm">English &amp; Spanish · No spam · No pressure</p>
          </div>
        </div>
      </div>
    )
  }

  // ── THANK YOU (step TOTAL_STEPS + 2) ─────────────────────────────────────
  if (step === TOTAL_STEPS + 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Header />
        <div className="container mx-auto px-4 py-10 md:py-16 max-w-xl">
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">You're a Great Fit.</h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We've got your answers. Elvis will review them personally before your call so you're not starting from scratch — he'll come prepared with a real plan for your business.
            </p>
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-6 md:p-8 text-white space-y-4">
              <h3 className="font-bold text-lg md:text-xl">Book Your Free 30-Min Strategy Call</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Pick a time that works. Come as you are — no prep needed on your end.</p>
              <a
                href="https://cal.com/elvis-cueva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl w-full text-base"
              >
                <Calendar className="h-5 w-5" />
                Choose Your Time Slot
              </a>
              <p className="text-slate-500 text-xs">Zoom or phone · 30 minutes · Free · English or Spanish</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 pt-2">
              {["Answers sent to Elvis", "Custom plan built before the call", "No commitment on the call"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── QUIZ STEPS 1–10 ───────────────────────────────────────────────────────
  const renderQuestion = () => {
    switch (step) {

      // Q1 — Business type
      case 1: return (
        <div className="space-y-3">
          <QHeader q="What type of business do you run?" sub="We work with a range of service businesses — this helps us understand your world." />
          {[
            { value: "insurance", label: "Insurance Agency", desc: "Auto, home, life, or commercial", icon: Building, color: "from-blue-500 to-cyan-500" },
            { value: "real-estate", label: "Real Estate / Mortgage", desc: "Residential, commercial, or lending", icon: Home, color: "from-green-500 to-teal-500" },
            { value: "financial", label: "Financial Services / Tax", desc: "Planning, accounting, or tax prep", icon: DollarSign, color: "from-purple-500 to-violet-500" },
            { value: "home-services", label: "Home Services", desc: "HVAC, roofing, water, cleaning, solar…", icon: Wrench, color: "from-orange-500 to-amber-500" },
            { value: "agency", label: "Marketing / Consulting Agency", desc: "You serve other businesses", icon: Briefcase, color: "from-pink-500 to-rose-500" },
            { value: "other", label: "Other Service Business", desc: "Legal, med spa, coaching, staffing…", icon: Users, color: "from-slate-500 to-slate-600" },
          ].map((o) => <Opt key={o.value} field="businessType" {...o} />)}
        </div>
      )

      // Q2 — Time in business
      case 2: return (
        <div className="space-y-3">
          <QHeader q="How long have you been in business?" sub="Helps us calibrate expectations and what's realistic to achieve together." />
          {[
            { value: "under-1yr", label: "Less than 1 year", badge: "New & building", badgeColor: "text-blue-600 bg-blue-50" },
            { value: "1-3yr", label: "1–3 years", badge: "Growing", badgeColor: "text-green-600 bg-green-50" },
            { value: "3-5yr", label: "3–5 years", badge: "Ready to scale", badgeColor: "text-purple-600 bg-purple-50" },
            { value: "5yr+", label: "5+ years", badge: "Established", badgeColor: "text-orange-600 bg-orange-50" },
          ].map((o) => <Opt key={o.value} field="yearsInBusiness" {...o} />)}
        </div>
      )

      // Q3 — Revenue
      case 3: return (
        <div className="space-y-3">
          <QHeader q="What's your current monthly revenue?" sub="Approximate is fine. This helps us match you to the right investment level." />
          {[
            { value: "under-10k", label: "Under $10K / month", badge: "Early stage", badgeColor: "text-slate-600 bg-slate-100" },
            { value: "10-30k", label: "$10K – $30K / month", badge: "Growing", badgeColor: "text-blue-600 bg-blue-50" },
            { value: "30-75k", label: "$30K – $75K / month", badge: "Scaling", badgeColor: "text-purple-600 bg-purple-50" },
            { value: "75k+", label: "$75K+ / month", badge: "Established", badgeColor: "text-green-600 bg-green-50" },
          ].map((o) => <Opt key={o.value} field="monthlyRevenue" {...o} />)}
        </div>
      )

      // Q4 — Monthly leads
      case 4: return (
        <div className="space-y-3">
          <QHeader q="How many new leads or inquiries does your business get per month?" sub="Count all sources — referrals, ads, website, social, etc." />
          {[
            { value: "0-10", label: "Fewer than 10 leads", badge: "Low volume", badgeColor: "text-red-600 bg-red-50", icon: AlertCircle, color: "from-red-400 to-orange-400" },
            { value: "10-30", label: "10–30 leads", badge: "Moderate", badgeColor: "text-yellow-600 bg-yellow-50", icon: BarChart2, color: "from-yellow-500 to-orange-500" },
            { value: "30-100", label: "30–100 leads", badge: "Active", badgeColor: "text-blue-600 bg-blue-50", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
            { value: "100+", label: "100+ leads", badge: "High volume", badgeColor: "text-green-600 bg-green-50", icon: Zap, color: "from-green-500 to-teal-500" },
          ].map((o) => <Opt key={o.value} field="monthlyLeads" {...o} />)}
        </div>
      )

      // Q5 — Primary goal
      case 5: return (
        <div className="space-y-3">
          <QHeader q="What's your #1 priority for the next 90 days?" sub="Pick the one that matters most to you right now." />
          {[
            { value: "more-leads", label: "Get more qualified leads consistently", icon: Target, color: "from-blue-500 to-cyan-500" },
            { value: "convert-faster", label: "Convert more of the leads I already get", icon: TrendingUp, color: "from-purple-500 to-violet-500" },
            { value: "automate-followup", label: "Follow up faster without doing it manually", icon: Zap, color: "from-pink-500 to-rose-500" },
            { value: "scale-without-hiring", label: "Grow revenue without adding more headcount", icon: Users, color: "from-green-500 to-teal-500" },
            { value: "all", label: "All of the above — I need a full system", icon: Star, color: "from-amber-500 to-orange-500" },
          ].map((o) => <Opt key={o.value} field="primaryGoal" {...o} />)}
        </div>
      )

      // Q6 — Agency experience
      case 6: return (
        <div className="space-y-3">
          <QHeader q="Have you worked with a marketing agency before?" sub="No wrong answer — this just helps us understand where you're starting from." />
          {[
            { value: "never", label: "No, never used a marketing agency", desc: "This would be my first time", badge: "First-timer", badgeColor: "text-blue-600 bg-blue-50", icon: ThumbsUp, color: "from-blue-500 to-cyan-500" },
            { value: "tried-no-results", label: "Yes, but I didn't get results", desc: "Felt like wasted money", badge: "Been burned before", badgeColor: "text-red-600 bg-red-50", icon: AlertCircle, color: "from-red-400 to-orange-400" },
            { value: "currently-using", label: "Yes, I'm with an agency now but want better", desc: "Looking for a change", badge: "Switching", badgeColor: "text-orange-600 bg-orange-50", icon: Zap, color: "from-orange-500 to-amber-500" },
            { value: "in-house", label: "I handle marketing in-house", desc: "Me or a team member does it", badge: "Self-managed", badgeColor: "text-purple-600 bg-purple-50", icon: Users, color: "from-purple-500 to-violet-500" },
          ].map((o) => <Opt key={o.value} field="agencyExperience" {...o} />)}
        </div>
      )

      // Q7 — Budget
      case 7: return (
        <div className="space-y-3">
          <QHeader q="What's your available monthly marketing budget?" sub="This covers everything — ad spend, software, and service fees combined." />
          {[
            { value: "under-1500", label: "Under $1,500 / month", badge: "Starter", badgeColor: "text-slate-600 bg-slate-100" },
            { value: "1500-4000", label: "$1,500 – $4,000 / month", badge: "Growth", badgeColor: "text-blue-600 bg-blue-50" },
            { value: "4000-8000", label: "$4,000 – $8,000 / month", badge: "Scale", badgeColor: "text-purple-600 bg-purple-50" },
            { value: "8000+", label: "$8,000+ / month", badge: "Full system", badgeColor: "text-green-600 bg-green-50" },
          ].map((o) => <Opt key={o.value} field="marketingBudget" {...o} />)}
        </div>
      )

      // Q8 — Biggest frustration
      case 8: return (
        <div className="space-y-3">
          <QHeader q="What's your biggest frustration with marketing right now?" sub="Be real — this is how we figure out where to focus." />
          {[
            { value: "not-enough-leads", label: "I'm not getting enough leads", desc: "The pipeline is too dry" },
            { value: "leads-go-cold", label: "Leads come in but go cold before I can respond", desc: "Too slow to follow up" },
            { value: "no-system", label: "I don't have a real system — it's all over the place", desc: "Disorganized and inconsistent" },
            { value: "no-roi", label: "I'm spending on marketing but don't know what's working", desc: "No clear ROI" },
            { value: "too-manual", label: "Everything takes too much time to manage manually", desc: "Need to automate" },
          ].map((o) => <Opt key={o.value} field="biggestFrustration" {...o} />)}
        </div>
      )

      // Q9 — Timeline
      case 9: return (
        <div className="space-y-3">
          <QHeader q="When are you looking to get started?" sub="Honest answer helps us prioritize." />
          {[
            { value: "asap", label: "ASAP — I'm ready to move now", badge: "Priority intake", badgeColor: "text-green-700 bg-green-50" },
            { value: "30days", label: "Within the next 30 days", badge: "Planning ahead", badgeColor: "text-blue-600 bg-blue-50" },
            { value: "60-90days", label: "Within 60–90 days", badge: "No rush", badgeColor: "text-slate-600 bg-slate-100" },
            { value: "exploring", label: "Just exploring for now", badge: "Still researching", badgeColor: "text-slate-500 bg-slate-50" },
          ].map((o) => <Opt key={o.value} field="timeline" {...o} />)}
        </div>
      )

      // Step 10 — Contact info
      case 10: return (
        <div className="space-y-5">
          <QHeader q="Last step — where do we send your custom plan?" sub="Elvis reviews your answers before the call. No sales scripts, just a real conversation." />
          <div className="space-y-4">
            {([
              { id: "name",    field: "name"    as const, label: "Full Name *",              type: "text",  placeholder: "Your name" },
              { id: "company", field: "company" as const, label: "Business / Company Name",  type: "text",  placeholder: "Your business name" },
              { id: "email",   field: "email"   as const, label: "Email Address *",          type: "email", placeholder: "you@example.com" },
              { id: "phone",   field: "phone"   as const, label: "Phone Number *",           type: "tel",   placeholder: "(555) 000-0000" },
            ] as { id: string; field: keyof FormData; label: string; type: string; placeholder: string }[]).map((inp) => (
              <div key={inp.id} className="space-y-1.5">
                <Label htmlFor={inp.id} className="text-sm font-semibold text-slate-700">{inp.label}</Label>
                <Input
                  id={inp.id}
                  type={inp.type}
                  placeholder={inp.placeholder}
                  value={form[inp.field]}
                  onChange={(e) => set(inp.field, e.target.value)}
                  className="h-11 text-sm border-slate-200 focus:border-blue-400 bg-white"
                />
              </div>
            ))}
            <div className="space-y-1.5">
              <Label className="text-sm font-semibold text-slate-700">Preferred Language</Label>
              <div className="grid grid-cols-2 gap-3">
                {[{ value: "english", label: "English" }, { value: "spanish", label: "Español" }].map((l) => (
                  <button
                    key={l.value}
                    type="button"
                    onClick={() => set("language", l.value)}
                    className={`flex items-center justify-center gap-2 h-11 rounded-xl border-2 text-sm font-medium transition-all ${form.language === l.value ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600 hover:border-blue-200"}`}
                  >
                    <Globe className="h-4 w-4" />{l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-5 text-white space-y-2">
            <p className="text-sm font-semibold mb-3">What happens after you submit:</p>
            {[
              "Elvis personally reviews your answers",
              "We build a custom plan for your business",
              "You book a free 30-min strategy call",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="h-3.5 w-3.5 text-green-400 shrink-0" />{t}
              </div>
            ))}
          </div>
        </div>
      )

      default: return null
    }
  }

  const isContactStep = step === TOTAL_STEPS + 1
  const progressPct = Math.round(((step - 1) / TOTAL_STEPS) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <div className="container mx-auto px-4 py-6 md:py-10">
        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500">
              {isContactStep ? "Final step" : `Question ${step} of ${TOTAL_STEPS}`}
            </span>
            <span className="text-xs font-medium text-slate-500">{isContactStep ? "Almost done" : `${progressPct}% complete`}</span>
          </div>
          <Progress value={isContactStep ? 95 : progressPct} className="h-2" />
          {step === 1 && (
            <div className="flex gap-4 mt-3 flex-wrap">
              {[
                { icon: Star, label: "200+ businesses served" },
                { icon: CheckCircle, label: "No long-term contracts" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-1 text-xs text-slate-400">
                  <t.icon className="h-3.5 w-3.5 text-blue-400" />{t.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Question card */}
        <Card className="max-w-2xl mx-auto p-6 md:p-10 shadow-xl border-0 bg-white/95 rounded-2xl md:rounded-3xl">
          {renderQuestion()}

          {/* Nav buttons — only show Back; Continue only on contact step */}
          <div className={`flex items-center mt-8 pt-6 border-t border-slate-100 ${step <= 1 ? "justify-end" : "justify-between"}`}>
            {step > 1 && (
              <Button
                variant="outline"
                onClick={prev}
                className="flex items-center gap-2 px-5 py-2.5 border-slate-200 hover:bg-slate-50 rounded-xl text-sm bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />Back
              </Button>
            )}

            {isContactStep ? (
              <Button
                onClick={submit}
                disabled={!isValid()}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-2.5 text-base font-semibold rounded-xl shadow-lg disabled:opacity-50"
              >
                Get My Free Blueprint <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              // Auto-advance on option click; manual Continue if they use Back
              <Button
                onClick={next}
                disabled={!isValid()}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-2.5 text-base font-semibold rounded-xl shadow-lg disabled:opacity-50"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

// ── Small helper components (file-scoped) ─────────────────────────────────
function QHeader({ q, sub }: { q: string; sub?: string }) {
  return (
    <div className="text-center space-y-1.5 mb-5">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">{q}</h2>
      {sub && <p className="text-slate-500 text-sm">{sub}</p>}
    </div>
  )
}
