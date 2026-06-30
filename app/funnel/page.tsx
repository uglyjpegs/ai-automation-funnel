"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  Building,
  Home,
  User,
  Users,
  Target,
  TrendingUp,
  Shield,
  Star,
  Calendar,
  DollarSign,
} from "lucide-react"
import Image from "next/image"

interface FormData {
  businessType: string
  followUpMethod: string
  overdueClients: string
  automationTools: string
  biggestChallenge: string
  timeSpent: string
  companyName: string
  businessSize: string
  annualRevenue: string
  name: string
  email: string
  phone: string
}

export default function LeadMagnetFunnel() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    businessType: "",
    followUpMethod: "",
    overdueClients: "",
    automationTools: "",
    biggestChallenge: "",
    timeSpent: "",
    companyName: "",
    businessSize: "",
    annualRevenue: "",
    name: "",
    email: "",
    phone: "",
  })

  const totalSteps = 10

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("start") === "true") {
      setCurrentStep(1)
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goHome = () => {
    window.location.href = "/"
  }

  const handleSubmit = async () => {
    console.log("Form submitted:", formData)

    try {
      const res = await fetch(
        "https://services.leadconnectorhq.com/hooks/TPn8WlVu5mzgqASwKnKc/webhook-trigger/140adf93-0565-4342-a09b-73dea2fd5cf7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      )
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      console.log("Webhook response:", data)
    } catch (error) {
      console.error("Error sending webhook:", error)
    }

    setCurrentStep(totalSteps)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return true
      case 1: return formData.businessType !== ""
      case 2: return formData.followUpMethod !== ""
      case 3: return formData.overdueClients !== ""
      case 4: return formData.automationTools !== ""
      case 5: return formData.timeSpent !== ""
      case 6: return formData.biggestChallenge.trim() !== ""
      case 7: return formData.companyName.trim() !== ""
      case 8: return formData.businessSize !== "" && formData.annualRevenue !== ""
      case 9: return formData.name.trim() !== "" && formData.email.trim() !== "" && formData.phone.trim() !== ""
      default: return false
    }
  }

  const VideoPlaceholder = ({ url = "https://www.youtube.com/embed/pf2v0EvIoUQ?si=_o-XUAqVZ7IJI3-_" }: { title?: string; description?: string; url?: string }) => (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden aspect-video shadow-lg">
      <iframe width="100%" height="100%" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )

  const Header = () => (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-32 h-8 relative">
              <Image src="/images/logo-horizontal.png" alt="RemedyAds" width={150} height={40} className="object-contain" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "/about")}
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
            >
              <User className="h-4 w-4" />
              <span>About Us</span>
            </Button>
            <Button
              variant="ghost"
              onClick={goHome}
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8 md:pb-[0] pb-[0]">
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-12 md:py-20 px-4 md:px-8 rounded-2xl md:rounded-3xl shadow-2xl">
              <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <h1 className="text-3xl md:text-6xl font-bold leading-tight">
                    Stop Chasing
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Overdue Payments
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed px-2">
                    Save 15+ hours per week with AI automation. Increase collection rates by 40% while you focus on growing your business.
                  </p>
                </div>
                <VideoPlaceholder title="Upcoming" description="upcoming" />
                <Button
                  onClick={nextStep}
                  size="lg"
                  className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 md:px-12 py-4 text-lg md:text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-slate-400 text-sm">2-minute assessment • Custom automation blueprint</p>
              </div>
            </section>

            <section className="px-4 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">Why Agencies Choose RemedyAds</h2>
                  <p className="text-lg md:text-xl text-slate-600">Proven results that speak for themselves</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                  {[
                    { icon: Clock, label: "Save 15+ Hours", desc: "Eliminate manual calls and emails. Focus on sales and relationships." },
                    { icon: TrendingUp, label: "40% Better Results", desc: "Consistent, timely follow-ups that get results. Never miss again." },
                    { icon: Shield, label: "Zero Learning Curve", desc: "Complete setup and integration. Results within 48 hours.", wide: true },
                  ].map((item) => (
                    <div key={item.label} className={`bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow ${item.wide ? "col-span-2 md:col-span-1" : ""}`}>
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 shadow-lg mx-auto md:mx-0">
                        <item.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 text-center md:text-left">{item.label}</h3>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center md:text-left">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-12 md:py-16 px-4 md:px-8 rounded-2xl md:rounded-3xl text-white shadow-2xl">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Proven Results</h2>
                  <p className="text-lg md:text-xl text-slate-300">Real transformations, real numbers</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  {[
                    { icon: Users, value: "200+", label: "Agencies" },
                    { icon: Clock, value: "15K+", label: "Hours Saved" },
                    { icon: TrendingUp, value: "40%", label: "Improvement" },
                    { icon: DollarSign, value: "$2M+", label: "Collected" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                        <s.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-1 md:mb-2">{s.value}</div>
                      <div className="text-slate-300 text-sm md:text-base">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8 md:mt-12">
                  <Button
                    onClick={nextStep}
                    size="lg"
                    className="w-full md:w-auto bg-white text-slate-900 hover:bg-slate-100 px-8 md:px-12 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get My Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 md:px-8 rounded-2xl md:rounded-3xl border border-blue-100 text-center">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Ready to Transform Your Agency?</h2>
                <p className="text-lg md:text-xl text-slate-600 px-2">Join 200+ agencies that have already automated their payment follow-ups</p>
                <Button
                  onClick={nextStep}
                  size="lg"
                  className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 md:px-12 py-4 text-lg md:text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start My Free Assessment <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                </Button>
                <p className="text-slate-500 text-sm md:text-base">Takes 2 minutes • Get your custom automation blueprint</p>
              </div>
            </section>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What type of business do you run?</h2>
              <p className="text-slate-600 text-sm md:text-base">This helps us customize your automation recommendations</p>
            </div>
            <RadioGroup value={formData.businessType} onValueChange={(value) => updateFormData("businessType", value)} className="space-y-3 md:space-y-4">
              {[
                { value: "insurance-agency", label: "Insurance Agency", desc: "Auto, home, life, commercial insurance", icon: Building },
                { value: "financial-services", label: "Financial Services", desc: "Financial planning, investments, loans", icon: DollarSign },
                { value: "real-estate", label: "Real Estate", desc: "Residential, commercial, property management", icon: Building },
                { value: "other-service", label: "Other Service Business", desc: "Consulting, legal, accounting, etc.", icon: Target },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  <RadioGroupItem value={opt.value} id={opt.value} />
                  <Label htmlFor={opt.value} className="flex-1 cursor-pointer">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center">
                        <opt.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm md:text-base">{opt.label}</div>
                        <div className="text-xs md:text-sm text-slate-500">{opt.desc}</div>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How do you currently follow up with overdue clients?</h2>
              <p className="text-slate-600 text-sm md:text-base">Be honest - we've seen it all and we're here to help!</p>
            </div>
            <RadioGroup value={formData.followUpMethod} onValueChange={(value) => updateFormData("followUpMethod", value)} className="space-y-3 md:space-y-4">
              {[
                { value: "manual-calls", label: "Manual phone calls", desc: "The old way - time-consuming and stressful", icon: Phone, color: "from-red-500 to-orange-500" },
                { value: "manual-emails", label: "Manual emails", desc: "Writing individual emails takes forever", icon: Mail, color: "from-yellow-500 to-orange-500" },
                { value: "mix-manual", label: "Mix of calls and emails", desc: "Exhausting and inconsistent approach", icon: Phone, color: "from-red-500 to-yellow-500" },
                { value: "inconsistent", label: "Inconsistent follow-ups", desc: "Only when I remember - not ideal", icon: Clock, color: "from-gray-500 to-slate-500" },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  <RadioGroupItem value={opt.value} id={opt.value} />
                  <Label htmlFor={opt.value} className="flex-1 cursor-pointer">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${opt.color} rounded-lg md:rounded-xl flex items-center justify-center`}>
                        <opt.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm md:text-base">{opt.label}</div>
                        <div className="text-xs md:text-sm text-slate-500">{opt.desc}</div>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How many overdue clients do you typically have?</h2>
              <p className="text-slate-600 text-sm md:text-base">This helps us calculate your potential time savings and ROI</p>
            </div>
            <RadioGroup value={formData.overdueClients} onValueChange={(value) => updateFormData("overdueClients", value)} className="space-y-3 md:space-y-4">
              {[
                { value: "1-10", label: "1-10 clients per month", badge: "Low volume", badgeColor: "text-green-600 bg-green-50" },
                { value: "11-25", label: "11-25 clients per month", badge: "Moderate volume", badgeColor: "text-yellow-600 bg-yellow-50" },
                { value: "26-50", label: "26-50 clients per month", badge: "High volume", badgeColor: "text-orange-600 bg-orange-50" },
                { value: "50+", label: "50+ clients per month", badge: "Critical - Need automation NOW!", badgeColor: "text-red-600 bg-red-50" },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  <RadioGroupItem value={opt.value} id={opt.value} />
                  <Label htmlFor={opt.value} className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900 text-sm md:text-base">{opt.label}</div>
                      <div className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full ${opt.badgeColor}`}>{opt.badge}</div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What automation tools are you currently using?</h2>
              <p className="text-slate-600 text-sm md:text-base">No judgment here - most agencies start with manual processes</p>
            </div>
            <RadioGroup value={formData.automationTools} onValueChange={(value) => updateFormData("automationTools", value)} className="space-y-3 md:space-y-4">
              {[
                { value: "none", label: "No automation tools", desc: "Everything is done manually", badge: "High impact potential", badgeColor: "text-red-600 bg-red-50" },
                { value: "basic-crm", label: "Basic CRM system", desc: "But no automated follow-ups", badge: "Good foundation", badgeColor: "text-yellow-600 bg-yellow-50" },
                { value: "email-automation", label: "Some email automation", desc: "Basic email sequences", badge: "Can be enhanced", badgeColor: "text-blue-600 bg-blue-50" },
                { value: "advanced", label: "Advanced automation", desc: "But it's not working well", badge: "Needs optimization", badgeColor: "text-purple-600 bg-purple-50" },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  <RadioGroupItem value={opt.value} id={opt.value} />
                  <Label htmlFor={opt.value} className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 text-sm md:text-base">{opt.label}</div>
                        <div className="text-xs md:text-sm text-slate-500">{opt.desc}</div>
                      </div>
                      <div className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full ${opt.badgeColor}`}>{opt.badge}</div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How much time do you spend on follow-ups weekly?</h2>
              <p className="text-slate-600 text-sm md:text-base">Include calls, emails, tracking, and administrative tasks</p>
            </div>
            <RadioGroup value={formData.timeSpent} onValueChange={(value) => updateFormData("timeSpent", value)} className="space-y-3 md:space-y-4">
              {[
                { value: "1-5-hours", label: "1-5 hours per week", desc: "Manageable but could be automated", badge: "Save 3-4 hours", badgeColor: "text-green-600 bg-green-50" },
                { value: "6-10-hours", label: "6-10 hours per week", desc: "Significant time investment", badge: "Save 7-8 hours", badgeColor: "text-yellow-600 bg-yellow-50" },
                { value: "11-20-hours", label: "11-20 hours per week", desc: "This is impacting your growth", badge: "Save 15+ hours", badgeColor: "text-orange-600 bg-orange-50" },
                { value: "20+-hours", label: "20+ hours per week", desc: "This is killing your business growth!", badge: "URGENT - Save 18+ hours", badgeColor: "text-red-600 bg-red-50" },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  <RadioGroupItem value={opt.value} id={opt.value} />
                  <Label htmlFor={opt.value} className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 text-sm md:text-base">{opt.label}</div>
                        <div className="text-xs md:text-sm text-slate-500">{opt.desc}</div>
                      </div>
                      <div className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full ${opt.badgeColor}`}>{opt.badge}</div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Do you think AI Agents could help your agency?</h2>
              <p className="text-slate-600 text-sm md:text-base">Help us understand your specific pain points so we can address them</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-blue-100">
              <Label htmlFor="challenge" className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4 block">Tell us in your own words:</Label>
              <Textarea
                id="challenge"
                placeholder="For example: 'I am interested in implementing AI Agents into my agency to help with client notifications'"
                value={formData.biggestChallenge}
                onChange={(e) => updateFormData("biggestChallenge", e.target.value)}
                className="min-h-[120px] md:min-h-[150px] text-sm md:text-base border-slate-200 focus:border-blue-300 focus:ring-blue-200 bg-white"
              />
              <p className="text-xs md:text-sm text-slate-500 mt-2">The more specific you are, the better we can customize your automation solution</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm md:text-base">Common Challenges We Solve:</h4>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li>• Clients not answering calls</li>
                  <li>• Inconsistent follow-up timing</li>
                  <li>• Losing track of who to contact</li>
                  <li>• Awkward payment conversations</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 md:p-6 rounded-xl text-white shadow-lg">
                <h4 className="font-semibold mb-3 text-sm md:text-base">Our Solution Provides:</h4>
                <ul className="space-y-2 text-xs md:text-sm text-blue-100">
                  <li>• Automated, professional messaging</li>
                  <li>• Perfect timing every time</li>
                  <li>• Complete tracking and reporting</li>
                  <li>• Maintains client relationships</li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Tell us about your business</h2>
              <p className="text-slate-600 text-sm md:text-base">This helps us create a more accurate automation blueprint</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl md:rounded-2xl border border-blue-100">
              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="companyName" className="text-base md:text-lg font-semibold text-slate-900">Company/Agency Name *</Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Enter your company or agency name"
                  value={formData.companyName}
                  onChange={(e) => updateFormData("companyName", e.target.value)}
                  className="text-sm md:text-base border-slate-200 focus:border-blue-300 focus:ring-blue-200 bg-white h-11 md:h-12"
                />
                <p className="text-xs md:text-sm text-slate-500">We'll use this to personalize your automation blueprint</p>
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm md:text-base">Your Information is Secure</h4>
                  <p className="text-xs md:text-sm text-slate-600">We use enterprise-grade security to protect your data</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What's the size of your business?</h2>
              <p className="text-slate-600 text-sm md:text-base">This helps us recommend the right automation level and pricing</p>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-blue-100">
                <Label className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4 block">Number of employees/agents *</Label>
                <RadioGroup value={formData.businessSize} onValueChange={(value) => updateFormData("businessSize", value)} className="space-y-2 md:space-y-3">
                  {[
                    { value: "solo", label: "Just me (solo agent/owner)", badge: "Starter plan", badgeColor: "text-blue-600 bg-blue-50" },
                    { value: "2-5", label: "2-5 employees", badge: "Growth plan", badgeColor: "text-green-600 bg-green-50" },
                    { value: "6-15", label: "6-15 employees", badge: "Professional plan", badgeColor: "text-purple-600 bg-purple-50" },
                    { value: "16+", label: "16+ employees", badge: "Enterprise plan", badgeColor: "text-orange-600 bg-orange-50" },
                  ].map((opt) => (
                    <div key={opt.value} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white border border-slate-200 rounded-lg md:rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                      <RadioGroupItem value={opt.value} id={opt.value} />
                      <Label htmlFor={opt.value} className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-slate-900 text-sm md:text-base">{opt.label}</div>
                          <div className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full ${opt.badgeColor}`}>{opt.badge}</div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-purple-100">
                <Label className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4 block">Annual revenue range *</Label>
                <RadioGroup value={formData.annualRevenue} onValueChange={(value) => updateFormData("annualRevenue", value)} className="space-y-2 md:space-y-3">
                  {["under-250k", "250k-500k", "500k-1m", "1m+"].map((val) => (
                    <div key={val} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white border border-slate-200 rounded-lg md:rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                      <RadioGroupItem value={val} id={val} />
                      <Label htmlFor={val} className="flex-1 cursor-pointer font-semibold text-slate-900 text-sm md:text-base">
                        {val === "under-250k" ? "Under $250K" : val === "250k-500k" ? "$250K - $500K" : val === "500k-1m" ? "$500K - $1M" : "$1M+"}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        )

      case 9:
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Get Your Free AI Automation Audit</h2>
              <p className="text-slate-600 text-sm md:text-base">We'll create a custom automation blueprint specifically for your business</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl md:rounded-2xl border border-blue-100">
              <div className="space-y-4 md:space-y-6">
                {[
                  { id: "name", label: "Full Name *", type: "text", placeholder: "Enter your full name", field: "name" as keyof FormData },
                  { id: "email", label: "Email Address *", type: "email", placeholder: "Enter your email address", field: "email" as keyof FormData },
                  { id: "phone", label: "Phone Number *", type: "tel", placeholder: "Enter your phone number", field: "phone" as keyof FormData },
                ].map((input) => (
                  <div key={input.id} className="space-y-2 md:space-y-3">
                    <Label htmlFor={input.id} className="text-base md:text-lg font-semibold text-slate-900">{input.label}</Label>
                    <Input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      value={formData[input.field]}
                      onChange={(e) => updateFormData(input.field, e.target.value)}
                      className="text-sm md:text-base border-slate-200 focus:border-blue-300 focus:ring-blue-200 bg-white h-11 md:h-12"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-6 md:p-8 rounded-xl md:rounded-2xl text-white shadow-2xl">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">What you'll receive within 24 hours:</h3>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {["Custom AI workflow blueprint", "ROI calculation based on your time spent", "Implementation timeline and roadmap", "Optional 15-minute strategy call"].map((item) => (
                  <div key={item} className="flex items-center space-x-2 md:space-x-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-300 shrink-0" />
                    <span className="text-blue-100 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 10:
        return (
          <div className="space-y-8 md:space-y-12 pb-20 md:pb-8">
            <div className="text-center space-y-4 md:space-y-6">
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Thank You! Your Audit is Being Prepared</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed px-2">
                We're creating your custom AI automation blueprint based on your responses. You'll receive it in your inbox within the next 24 hours.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <VideoPlaceholder title="What to Expect Next" description="A preview of your custom automation audit" url="/after_appointment.mp4" />
            </div>
            <div className="text-center space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Want to Fast-Track Your Results?</h3>
              <Button
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 md:px-12 py-4 text-lg md:text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("https://cal.com/elvis-cueva/30min", "_blank")}
              >
                <Calendar className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                Book Your Free Strategy Call
              </Button>
              <p className="text-slate-500 text-sm md:text-base">Discuss your automation blueprint directly with Elvis</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl md:rounded-2xl border border-blue-100 text-center">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Join 200+ Agencies Already Automating</h4>
              <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />)}
                <span className="text-slate-600 ml-2 text-sm md:text-base">4.9/5 from our clients</span>
              </div>
              <p className="text-slate-600 text-sm md:text-base">"The automation blueprint was exactly what we needed. Implementation was smooth and results came fast."</p>
              <p className="text-slate-500 text-xs md:text-sm mt-2">- Jennifer K., State Farm Agency</p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (currentStep === 0 || currentStep === totalSteps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Header />
        <div className="container mx-auto px-4 py-6 md:py-12">{renderStep()}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-2xl mx-auto mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <span className="text-xs md:text-sm font-medium text-slate-600">Step {currentStep} of {totalSteps - 1}</span>
            <span className="text-xs md:text-sm font-medium text-slate-600">{Math.round(((currentStep - 1) / (totalSteps - 1)) * 100)}% Complete</span>
          </div>
          <Progress value={((currentStep - 1) / (totalSteps - 1)) * 100} className="h-2 md:h-3" />
        </div>

        <Card className="max-w-3xl mx-auto p-6 md:p-10 shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl">
          {renderStep()}
          <div className="flex justify-between items-center mt-6 md:mt-10 pt-6 md:pt-8 border-t border-slate-100">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep <= 1}
              className="flex items-center px-4 md:px-6 py-2 md:py-3 border-slate-200 hover:bg-slate-50 rounded-lg md:rounded-xl transition-all duration-200 text-sm md:text-base bg-transparent"
            >
              <ArrowLeft className="mr-1 md:mr-2 h-4 w-4" />
              Back
            </Button>
            {currentStep === totalSteps - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded-lg md:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get My Free Audit
                <ArrowRight className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded-lg md:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Continue
                <ArrowRight className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
