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
  Bot,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  MessageSquare,
  Home,
  Building,
  Briefcase,
  Star,
  Globe,
  Wrench,
} from "lucide-react"
import Image from "next/image"

interface FormData {
  businessType: string
  yearsInBusiness: string
  monthlyRevenue: string
  biggestChallenge: string
  leadSource: string
  followUpMethod: string
  marketingBudget: string
  serviceInterest: string
  timeline: string
  name: string
  company: string
  email: string
  phone: string
  language: string
}

const TOTAL_QUIZ_STEPS = 9

export default function FunnelPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    businessType: "",
    yearsInBusiness: "",
    monthlyRevenue: "",
    biggestChallenge: "",
    leadSource: "",
    followUpMethod: "",
    marketingBudget: "",
    serviceInterest: "",
    timeline: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    language: "",
  })

  const update = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  const next = () => setCurrentStep((s) => s + 1)
  const prev = () => setCurrentStep((s) => s - 1)

  const handleSubmit = async () => {
    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/TPn8WlVu5mzgqASwKnKc/webhook-trigger/140adf93-0565-4342-a09b-73dea2fd5cf7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      )
    } catch {
      // silent — don't block the user
    }
    setCurrentStep(TOTAL_QUIZ_STEPS + 1)
  }

  const isValid = () => {
    switch (currentStep) {
      case 0: return true
      case 1: return !!formData.businessType
      case 2: return !!formData.yearsInBusiness
      case 3: return !!formData.monthlyRevenue
      case 4: return !!formData.biggestChallenge
      case 5: return !!formData.leadSource
      case 6: return !!formData.followUpMethod
      case 7: return !!formData.marketingBudget
      case 8: return !!formData.serviceInterest
      case 9: return !!formData.timeline
      case 10: return !!formData.name && !!formData.email && !!formData.phone
      default: return false
    }
  }

  const Header = () => (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/">
          <Image src="/images/logo-horizontal.png" alt="RemedyAds" width={140} height={36} className="object-contain" />
        </a>
        <a href="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">Back to site</span>
        </a>
      </div>
    </header>
  )

  // ── Option card component ──────────────────────────────────────────────────
  const OptionCard = ({
    value,
    selected,
    onSelect,
    icon: Icon,
    iconColor,
    label,
    desc,
    badge,
    badgeColor,
  }: {
    value: string
    selected: boolean
    onSelect: () => void
    icon?: React.ElementType
    iconColor?: string
    label: string
    desc?: string
    badge?: string
    badgeColor?: string
  }) => (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left flex items-center gap-4 p-4 md:p-5 rounded-xl border-2 transition-all duration-200 ${
        selected
          ? "border-blue-500 bg-blue-50 shadow-md"
          : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50 shadow-sm"
      }`}
    >
      {Icon && (
        <div className={`w-10 h-10 md:w-11 md:h-11 bg-gradient-to-r ${iconColor ?? "from-blue-500 to-purple-600"} rounded-xl flex items-center justify-center shrink-0 shadow`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-slate-900 text-sm md:text-base">{label}</div>
        {desc && <div className="text-xs md:text-sm text-slate-500 mt-0.5">{desc}</div>}
      </div>
      {badge && (
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${badgeColor}`}>{badge}</span>
      )}
      <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${selected ? "border-blue-500 bg-blue-500" : "border-slate-300"}`}>
        {selected && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>
    </button>
  )

  // ── STEP 0 — Landing ──────────────────────────────────────────────────────
  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Header />
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-3xl">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white rounded-2xl md:rounded-3xl p-8 md:p-14 shadow-2xl text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free · 2 minutes · No commitment
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              See If RemedyAds Is the
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Right Fit for You</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              Answer 9 quick questions. We'll show you exactly which systems would make the biggest impact for your business — and whether we're the team to build them.
            </p>
            <div className="grid grid-cols-3 gap-4 py-2">
              {[
                { icon: Target, label: "Meta Ads" },
                { icon: Zap, label: "CRM Automation" },
                { icon: Bot, label: "AI Follow-Up" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs text-slate-300">{s.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={next}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 shadow-2xl w-full md:w-auto"
            >
              Start My Free Assessment
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-slate-500 text-sm">English & Spanish · Takes about 2 minutes</p>
          </div>
        </div>
      </div>
    )
  }

  // ── STEP FINAL — Thank You ─────────────────────────────────────────────────
  if (currentStep === TOTAL_QUIZ_STEPS + 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Header />
        <div className="container mx-auto px-4 py-10 md:py-16 max-w-2xl">
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-14 shadow-xl border border-slate-100 text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">You're a Great Fit.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We've received your answers and will review them before your call. You're one step away from a custom blueprint for your business.
            </p>
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-6 text-white space-y-4">
              <h3 className="font-bold text-lg">Book Your Free 30-Min Strategy Call</h3>
              <p className="text-slate-300 text-sm">Elvis will review your answers before the call and come prepared with a real plan — not a sales pitch.</p>
              <a
                href="https://cal.com/elvis-cueva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl w-full text-base"
              >
                <Calendar className="h-5 w-5" />
                Pick Your Time Slot
              </a>
              <p className="text-slate-500 text-xs">Zoom or phone · 30 minutes · Free</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              {["Confirmation sent to your email", "Elvis reviews before your call", "Custom blueprint on the call"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── QUIZ STEPS 1–10 ───────────────────────────────────────────────────────
  const quizStep = currentStep // 1-indexed, matching isValid()

  const renderQuizContent = () => {
    switch (quizStep) {
      case 1:
        return (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">What type of business do you run?</h2>
              <p className="text-slate-500 text-sm">This helps us match you to the right strategy.</p>
            </div>
            {[
              { value: "insurance", label: "Insurance Agency", desc: "Auto, home, life, or commercial", icon: Building, color: "from-blue-500 to-cyan-500" },
              { value: "real-estate", label: "Real Estate / Mortgage", desc: "Residential, commercial, lending", icon: Home, color: "from-green-500 to-teal-500" },
              { value: "financial", label: "Financial Services / Tax", desc: "Planning, accounting, tax prep", icon: DollarSign, color: "from-purple-500 to-violet-500" },
              { value: "home-services", label: "Home Services", desc: "Water treatment, HVAC, roofing, cleaning…", icon: Wrench, color: "from-orange-500 to-amber-500" },
              { value: "agency", label: "Marketing / Consulting Agency", desc: "You serve other businesses", icon: Briefcase, color: "from-pink-500 to-rose-500" },
              { value: "other", label: "Other Service Business", desc: "Legal, med spa, coaching, etc.", icon: Users, color: "from-slate-500 to-slate-600" },
            ].map((o) => (
              <OptionCard key={o.value} value={o.value} selected={formData.businessType === o.value} onSelect={() => { update("businessType", o.value); }} icon={o.icon} iconColor={o.color} label={o.label} desc={o.desc} />
            ))}
          </div>
        )

      case 2:
        return (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">How long have you been in business?</h2>
            </div>
            {[
              { value: "under-1yr", label: "Less than 1 year", badge: "New & growing", badgeColor: "text-blue-600 bg-blue-50" },
              { value: "1-3yr", label: "1–3 years", badge: "Building momentum", badgeColor: "text-green-600 bg-green-50" },
              { value: "3-5yr", label: "3–5 years", badge: "Ready to scale", badgeColor: "text-purple-600 bg-purple-50" },
              { value: "5yr+", label: "5+ years", badge: "Established", badgeColor: "text-orange-600 bg-orange-50" },
            ].map((o) => (
              <OptionCard key={o.value} value={o.value} selected={formData.yearsInBusiness === o.value} onSelect={() => update("yearsInBusiness", o.value)} label={o.label} badge={o.badge} badgeColor={o.badgeColor} />
            ))}
          </div>
        )

      case 3:
        return (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">What's your current monthly revenue?</h2>
              <p className="text-slate-500 text-sm">Approximate is fine — this helps us calibrate the right investment level.</p>
            </div>
            {[
              { value: "under-10k", label: "Under $10K/month", badge: "Early stage", badgeColor: "text-slate-600 bg-slate-100" },
              { value: "10-30k", label: "$10K – $30K/month", badge: "Growing", badgeColor: "text-blue-600 bg-blue-50" },
              { value: "30-75k", label: "$30K – $75K/month", badge: "Scaling", badgeColor: "text-purple-600 bg-purple-50" },
              { value: "75k+", label: "$75K+/month", badge: "Established", badgeColor: "text-green-600 bg-green-50" },
            ].map((o) => (
              <OptionCard key={o.value} value={o.value} selected={formData.monthlyRevenue === o.value} onSelect={() => update("monthlyRevenue", o.value)} label={o.label} badge={o.badge} badgeColor={o.badgeColor} />
            ))}
          </div>
        )

      case 4:
        return (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">What's your biggest growth challenge right now?</h2>
            </div>
            {[
              { value: "not-enough-leads", label: "Not enough qualified leads coming in", icon: Target, color: "from-blue-500 to-cyan-500" },
              { value: "cant-follow-up", label: "Leads come in but I can't follow up fast enough", icon: Clock, color: "from-orange-500 to-red-500" },
              { value: "cant-close", label: "I follow up but can't close enough of them", icon: TrendingUp, color: "from-purple-500 to-violet-500" },
              { value: "disorganized", label: "My pipeline is disorganized — deals fall through", icon: Zap, color: "from-pink-500 to-rose-500" },
              { value: "all-of-above", label: "Honestly, all of the above", icon: Users, color: "from-green-500 to-teal-500" },
            ].map((o) => (
              <OptionCard key={o.value} value={o.value} selected={formData.biggestChallenge === o.value} onSelect={() => update("biggestChallenge", o.value)} icon={o.icon} iconColor={o.color} label={o.label} />
            ))}
          </div>
        )

      case 5:
        return (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">How are you currently generating leads?</h2>
            </div>
            {[
              { value: "referrals", label: "Word of mouth / referrals only", desc: "No paid advertising yet" },
              { value: "self-ads", label: "Running my own Meta or Google ads", desc: "Managing it myself" },
              { value: "agency", label: "Working with an outside agency", desc: "Paying someone else to run ads" },
              { value: "cold-outreach", label: "Cold outreach (calls, DMs, email)", desc: "Prospecting manually" },
              { value: "mix", label: "A mix of methods", desc: "But nothing's truly consistent" },
            ].map((o) => (
              <OptionCard key={o.value} value={o.value} selected={formData.leadSource === o.value} onSelect={() => update("leadSource", o.value)} label={o.label} desc={o.desc} />
            ))}
          </div>
        )

      case 6:
        return (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">How do you follow up with new leads today?</h2>
              <p className="text-slate-500 text-sm">Be honest — no judgment here.</p>
            </div>
            {[
              { value: "manual-self", label: "I call or text them myself", desc: "Takes a lot of my time", badge: "High impact fix", badgeColor: "text-red-600 bg-red-50" },
              { value: "manual-team", label: "A team member handles it", desc: "Inconsistent without a system", badge: "Can be automated", badgeColor: "text-orange-600 bg-orange-50" },
              { value: "some-automation", label: "I have some automation but it's not working", desc: "Partial — not fully converting", badge: "Needs optimization", badgeColor: "text-yellow-600 bg-yellow-50" },
              { value: "inconsistent", label: "I don't follow up consistently", desc: "Leads are slipping away", badge: "Critical to fix", badgeColor: "text-red-600 bg-red-50" },
            ].map((o) => (
              <OptionCard key={o.value} value={o.value} selected={formData.followUpMethod === o.value} onSelect={() => update("followUpMethod", o.value)} label={o.label} desc={o.desc} badge={o.badge} badgeColor={o.badgeColor} />
            ))}
          </div>
        )

      case 7:
        return (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">What's your available monthly marketing budget?</h2>
              <p className="text-slate-500 text-sm">This includes ad spend + service fees combined.</p>
            </div>
            {[
              { value: "under-1500", label: "Under $1,500/month", badge: "Starter tier", badgeColor: "text-slate-600 bg-slate-100" },
              { value: "1500-4000", label: "$1,500 – $4,000/month", badge: "Growth tier", badgeColor: "text-blue-600 bg-blue-50" },
              { value: "4000-8000", label: "$4,000 – $8,000/month", badge: "Scale tier", badgeColor: "text-purple-600 bg-purple-50" },
              { value: "8000+", label: "$8,000+/month", badge: "Full system", badgeColor: "text-green-600 bg-green-50" },
            ].map((o) => (
              <OptionCard key={o.value} value={o.value} selected={formData.marketingBudget === o.value} onSelect={() => update("marketingBudget", o.value)} label={o.label} badge={o.badge} badgeColor={o.badgeColor} />
            ))}
          </div>
        )

      case 8:
        return (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Which service are you most interested in?</h2>
            </div>
            {[
              { value: "meta-ads", label: "DFY Meta Ads", desc: "Fill my pipeline with qualified leads", icon: Target, color: "from-blue-500 to-cyan-500" },
              { value: "crm-automation", label: "CRM & Workflow Automation", desc: "Organize my pipeline, stop dropping deals", icon: Zap, color: "from-purple-500 to-violet-500" },
              { value: "ai-follow-up", label: "AI Follow-Up System", desc: "Respond instantly, never lose a lead again", icon: Bot, color: "from-pink-500 to-rose-500" },
              { value: "all-three", label: "All three — I need the full system", desc: "The complete RemedyAds stack", icon: TrendingUp, color: "from-green-500 to-teal-500" },
              { value: "not-sure", label: "Not sure — I want your recommendation", desc: "I'll let you guide me", icon: MessageSquare, color: "from-slate-400 to-slate-600" },
            ].map((o) => (
              <OptionCard key={o.value} value={o.value} selected={formData.serviceInterest === o.value} onSelect={() => update("serviceInterest", o.value)} icon={o.icon} iconColor={o.color} label={o.label} desc={o.desc} />
            ))}
          </div>
        )

      case 9:
        return (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">When are you looking to get started?</h2>
            </div>
            {[
              { value: "asap", label: "ASAP — I'm ready to move now", badge: "Priority intake", badgeColor: "text-green-700 bg-green-50" },
              { value: "30days", label: "Within the next 30 days", badge: "Planning ahead", badgeColor: "text-blue-600 bg-blue-50" },
              { value: "60-90days", label: "Within 60–90 days", badge: "No rush", badgeColor: "text-slate-600 bg-slate-100" },
              { value: "exploring", label: "Just exploring for now", badge: "That's fine too", badgeColor: "text-slate-500 bg-slate-50" },
            ].map((o) => (
              <OptionCard key={o.value} value={o.value} selected={formData.timeline === o.value} onSelect={() => update("timeline", o.value)} label={o.label} badge={o.badge} badgeColor={o.badgeColor} />
            ))}
          </div>
        )

      case 10:
        return (
          <div className="space-y-5">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Last step — where do we send your blueprint?</h2>
              <p className="text-slate-500 text-sm">We'll review your answers and reach out within 24 hours.</p>
            </div>
            <div className="space-y-4">
              {[
                { id: "name", field: "name" as keyof FormData, label: "Full Name *", type: "text", placeholder: "Your name" },
                { id: "company", field: "company" as keyof FormData, label: "Business / Company Name *", type: "text", placeholder: "Your business name" },
                { id: "email", field: "email" as keyof FormData, label: "Email Address *", type: "email", placeholder: "you@example.com" },
                { id: "phone", field: "phone" as keyof FormData, label: "Phone Number *", type: "tel", placeholder: "(555) 000-0000" },
              ].map((inp) => (
                <div key={inp.id} className="space-y-1.5">
                  <Label htmlFor={inp.id} className="text-sm font-semibold text-slate-700">{inp.label}</Label>
                  <Input
                    id={inp.id}
                    type={inp.type}
                    placeholder={inp.placeholder}
                    value={formData[inp.field]}
                    onChange={(e) => update(inp.field, e.target.value)}
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
                      onClick={() => update("language", l.value)}
                      className={`flex items-center justify-center gap-2 h-11 rounded-xl border-2 text-sm font-medium transition-all ${formData.language === l.value ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600 hover:border-blue-200"}`}
                    >
                      <Globe className="h-4 w-4" />
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-5 text-white">
              <h4 className="font-semibold mb-3 text-sm">What happens next:</h4>
              <div className="space-y-2">
                {[
                  "Elvis reviews your answers personally",
                  "Custom blueprint built for your business",
                  "30-min strategy call to walk through it",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="h-3.5 w-3.5 text-green-400 shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const progressPercent = Math.round(((quizStep - 1) / TOTAL_QUIZ_STEPS) * 100)
  const isLastStep = quizStep === TOTAL_QUIZ_STEPS + 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <div className="container mx-auto px-4 py-6 md:py-10">
        {/* Progress */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500">Question {quizStep} of {TOTAL_QUIZ_STEPS + 1}</span>
            <span className="text-xs font-medium text-slate-500">{progressPercent}% complete</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
          {quizStep === 1 && (
            <div className="flex gap-3 mt-3 flex-wrap">
              {[
                { icon: Star, label: "200+ agencies served" },
                { icon: Clock, label: "Live in 7–10 days" },
                { icon: CheckCircle, label: "No long-term contracts" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-1 text-xs text-slate-500">
                  <t.icon className="h-3.5 w-3.5 text-blue-500" />
                  {t.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card */}
        <Card className="max-w-2xl mx-auto p-6 md:p-10 shadow-xl border-0 bg-white/95 rounded-2xl md:rounded-3xl">
          {renderQuizContent()}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
            <Button
              variant="outline"
              onClick={prev}
              disabled={quizStep <= 1}
              className="flex items-center gap-2 px-5 py-2.5 border-slate-200 hover:bg-slate-50 rounded-xl text-sm bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            {isLastStep ? (
              <Button
                onClick={handleSubmit}
                disabled={!isValid()}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-2.5 text-base font-semibold rounded-xl shadow-lg disabled:opacity-50"
              >
                Get My Free Blueprint
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={next}
                disabled={!isValid()}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-2.5 text-base font-semibold rounded-xl shadow-lg disabled:opacity-50"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
