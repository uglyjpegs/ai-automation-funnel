"use client"

import { useState } from "react"
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
  Play,
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
    setCurrentStep(0)
    setFormData({
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
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    setCurrentStep(totalSteps)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return true
      case 1:
        return formData.businessType !== ""
      case 2:
        return formData.followUpMethod !== ""
      case 3:
        return formData.overdueClients !== ""
      case 4:
        return formData.automationTools !== ""
      case 5:
        return formData.timeSpent !== ""
      case 6:
        return formData.biggestChallenge.trim() !== ""
      case 7:
        return formData.companyName.trim() !== ""
      case 8:
        return formData.businessSize !== "" && formData.annualRevenue !== ""
      case 9:
        return formData.name.trim() !== "" && formData.email.trim() !== "" && formData.phone.trim() !== ""
      default:
        return false
    }
  }

  const VideoPlaceholder = ({ title, description }: { title: string; description: string }) => (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden aspect-video shadow-2xl">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <Play className="h-10 w-10 text-white ml-1" />
          </div>
          <div className="text-white">
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-slate-300">{description}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
        4:32
      </div>
    </div>
  )

  const AboutDialog = () => (
    <Button
      variant="ghost"
      onClick={() => (window.location.href = "/about")}
      className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
    >
      <User className="h-4 w-4" />
      <span>About Us</span>
    </Button>
  )

  const Header = () => (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-75 h-75 relative">
                <Image
                  src="/images/Grey.png"
                  alt="Remedy AI Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <AboutDialog />
            {currentStep !== 0 && (
              <Button
                variant="ghost"
                onClick={goHome}
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20 px-6 rounded-3xl shadow-2xl">
              <div className="max-w-5xl mx-auto text-center space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Stop Chasing
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Overdue Payments
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                    Transform your payment follow-ups with AI automation. Save 15+ hours per week and increase
                    collection rates by 40% while you focus on growing your business.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={nextStep}
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get My Free AI Audit <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-slate-400 text-sm">2-minute assessment • Custom automation blueprint</p>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-6 rounded-3xl border border-blue-100">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Agencies Choose Remedy AI</h2>
                  <p className="text-xl text-slate-600">Proven results that speak for themselves</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Save 15+ Hours Weekly</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Eliminate manual calls and emails. Our AI handles follow-ups automatically, giving you time to
                      focus on sales and client relationships.
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">40% Better Collections</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Consistent, timely follow-ups with personalized messaging that gets results. Never miss a
                      follow-up again.
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Zero Learning Curve</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We handle the complete setup and integration. Start seeing results within 48 hours with no
                      technical knowledge required.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Story Section */}
            <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-6 rounded-3xl border border-purple-100">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">The Problem Every Agency Faces</h2>
                  <p className="text-xl text-slate-600">My journey from frustrated agent to automation expert</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">The Breaking Point</h3>
                      <div className="space-y-4 text-slate-600 leading-relaxed">
                        <p>
                          Five years ago, I was drowning. 20+ hours every week spent chasing overdue payments. My
                          clients avoided my calls. My stress was through the roof.
                        </p>
                        <p>
                          I felt more like a debt collector than an insurance professional. Worst of all, I had no time
                          for new prospects or existing client relationships.
                        </p>
                        <p className="text-blue-600 font-semibold">
                          That's when I decided to build a solution that would change everything.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white shadow-xl">
                      <h4 className="text-xl font-bold mb-4">The Breakthrough</h4>
                      <p className="text-blue-100 leading-relaxed">
                        My first automation system delivered a 35% improvement in collections within 30 days. More
                        importantly, I got my life back. That's when I knew I had to share this with other agents.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <VideoPlaceholder
                      title="My Automation Journey"
                      description="From 20 hours/week to complete automation"
                    />

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-red-400 to-red-600 p-6 rounded-2xl shadow-lg border border-red-100 text-center">
                        <div className="text-3xl font-bold mb-2 text-primary-foreground">Before</div>
                        <div className="space-y-1 text-primary-foreground">
                          <div className="font-semibold">20+ hours/week</div>
                          <div className="text-sm">Stressed & overwhelmed</div>
                          <div className="text-sm">Clients avoiding calls</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-400 to-green-500 p-6 rounded-2xl shadow-lg text-center text-white">
                        <div className="text-3xl font-bold mb-2">After</div>
                        <div className="space-y-1 text-primary-foreground">
                          <div className="font-semibold">2 hours/week</div>
                          <div className="text-sm text-blue-100">Focused on growth</div>
                          <div className="text-sm text-blue-100">Happy clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16 px-6 rounded-3xl text-white shadow-2xl">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Proven Results Across 200+ Agencies</h2>
                  <p className="text-xl text-slate-300">Real transformations, real numbers</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">200+</div>
                    <div className="text-slate-300">Agencies Transformed</div>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Clock className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">15,000+</div>
                    <div className="text-slate-300">Hours Saved Monthly</div>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">40%</div>
                    <div className="text-slate-300">Average Improvement</div>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <DollarSign className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">$2M+</div>
                    <div className="text-slate-300">Additional Collections</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-6 rounded-3xl border border-blue-100 text-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl font-bold text-slate-900">Ready to Transform Your Agency?</h2>
                <p className="text-xl text-slate-600">
                  Join 200+ agencies that have already automated their payment follow-ups
                </p>

                <Button
                  onClick={nextStep}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start My Free Assessment <ArrowRight className="ml-2 h-6 w-6" />
                </Button>

                <p className="text-slate-500">Takes 2 minutes • Get your custom automation blueprint</p>
              </div>
            </section>
          </div>
        )

      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">What type of business do you run?</h2>
              <p className="text-slate-600">This helps us customize your automation recommendations</p>
            </div>

            <RadioGroup
              value={formData.businessType}
              onValueChange={(value) => updateFormData("businessType", value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="insurance-agency" id="insurance-agency" />
                <Label htmlFor="insurance-agency" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Insurance Agency</div>
                      <div className="text-sm text-slate-500">Auto, home, life, commercial insurance</div>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="financial-services" id="financial-services" />
                <Label htmlFor="financial-services" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Financial Services</div>
                      <div className="text-sm text-slate-500">Financial planning, investments, loans</div>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="real-estate" id="real-estate" />
                <Label htmlFor="real-estate" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Real Estate</div>
                      <div className="text-sm text-slate-500">Residential, commercial, property management</div>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="other-service" id="other-service" />
                <Label htmlFor="other-service" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Other Service Business</div>
                      <div className="text-sm text-slate-500">Consulting, legal, accounting, etc.</div>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">
                How do you currently follow up with overdue clients?
              </h2>
              <p className="text-slate-600">Be honest - we've seen it all and we're here to help!</p>
            </div>

            <RadioGroup
              value={formData.followUpMethod}
              onValueChange={(value) => updateFormData("followUpMethod", value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="manual-calls" id="manual-calls" />
                <Label htmlFor="manual-calls" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Manual phone calls</div>
                      <div className="text-sm text-slate-500">The old way - time-consuming and stressful</div>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="manual-emails" id="manual-emails" />
                <Label htmlFor="manual-emails" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Manual emails</div>
                      <div className="text-sm text-slate-500">Writing individual emails takes forever</div>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="mix-manual" id="mix-manual" />
                <Label htmlFor="mix-manual" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Mix of calls and emails</div>
                      <div className="text-sm text-slate-500">Exhausting and inconsistent approach</div>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="inconsistent" id="inconsistent" />
                <Label htmlFor="inconsistent" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-500 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Inconsistent follow-ups</div>
                      <div className="text-sm text-slate-500">Only when I remember - not ideal</div>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">How many overdue clients do you typically have?</h2>
              <p className="text-slate-600">This helps us calculate your potential time savings and ROI</p>
            </div>

            <RadioGroup
              value={formData.overdueClients}
              onValueChange={(value) => updateFormData("overdueClients", value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="1-10" id="1-10" />
                <Label htmlFor="1-10" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-slate-900">1-10 clients per month</div>
                    <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">Low volume</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="11-25" id="11-25" />
                <Label htmlFor="11-25" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-slate-900">11-25 clients per month</div>
                    <div className="text-sm text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">Moderate volume</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="26-50" id="26-50" />
                <Label htmlFor="26-50" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-slate-900">26-50 clients per month</div>
                    <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">High volume</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="50+" id="50+" />
                <Label htmlFor="50+" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-slate-900">50+ clients per month</div>
                    <div className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      Critical - Need automation NOW!
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">What automation tools are you currently using?</h2>
              <p className="text-slate-600">No judgment here - most agencies start with manual processes</p>
            </div>

            <RadioGroup
              value={formData.automationTools}
              onValueChange={(value) => updateFormData("automationTools", value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">No automation tools</div>
                      <div className="text-sm text-slate-500">Everything is done manually</div>
                    </div>
                    <div className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">High impact potential</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="basic-crm" id="basic-crm" />
                <Label htmlFor="basic-crm" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">Basic CRM system</div>
                      <div className="text-sm text-slate-500">But no automated follow-ups</div>
                    </div>
                    <div className="text-sm text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">Good foundation</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="email-automation" id="email-automation" />
                <Label htmlFor="email-automation" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">Some email automation</div>
                      <div className="text-sm text-slate-500">Basic email sequences</div>
                    </div>
                    <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Can be enhanced</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">Advanced automation</div>
                      <div className="text-sm text-slate-500">But it's not working well</div>
                    </div>
                    <div className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      Needs optimization
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">How much time do you spend on follow-ups weekly?</h2>
              <p className="text-slate-600">Include calls, emails, tracking, and administrative tasks</p>
            </div>

            <RadioGroup
              value={formData.timeSpent}
              onValueChange={(value) => updateFormData("timeSpent", value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="1-5-hours" id="1-5-hours" />
                <Label htmlFor="1-5-hours" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">1-5 hours per week</div>
                      <div className="text-sm text-slate-500">Manageable but could be automated</div>
                    </div>
                    <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">Save 3-4 hours</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="6-10-hours" id="6-10-hours" />
                <Label htmlFor="6-10-hours" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">6-10 hours per week</div>
                      <div className="text-sm text-slate-500">Significant time investment</div>
                    </div>
                    <div className="text-sm text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">Save 7-8 hours</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="11-20-hours" id="11-20-hours" />
                <Label htmlFor="11-20-hours" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">11-20 hours per week</div>
                      <div className="text-sm text-slate-500">This is impacting your growth</div>
                    </div>
                    <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Save 15+ hours</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                <RadioGroupItem value="20+-hours" id="20+-hours" />
                <Label htmlFor="20+-hours" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">20+ hours per week</div>
                      <div className="text-sm text-slate-500">This is killing your business growth!</div>
                    </div>
                    <div className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">URGENT - Save 18+ hours</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 6:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Do you think AI Agents could help your agency?             </h2>
              <p className="text-slate-600">Help us understand your specific pain points so we can address them</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <Label htmlFor="challenge" className="text-lg font-semibold text-slate-900 mb-4 block">
                Tell us in your own words:
              </Label>
              <Textarea
                id="challenge"
                placeholder="For example: 'I am interested in implementing AI Agents into my agency to help with client notifications'"
                value={formData.biggestChallenge}
                onChange={(e) => updateFormData("biggestChallenge", e.target.value)}
                className="min-h-[150px] text-base border-slate-200 focus:border-blue-300 focus:ring-blue-200 bg-white"
              />
              <p className="text-sm text-slate-500 mt-2">
                The more specific you are, the better we can customize your automation solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">Common Challenges We Solve:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Clients not answering calls</li>
                  <li>• Inconsistent follow-up timing</li>
                  <li>• Losing track of who to contact</li>
                  <li>• Awkward payment conversations</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
                <h4 className="font-semibold mb-3">Our Solution Provides:</h4>
                <ul className="space-y-2 text-sm text-blue-100">
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
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Tell us about your business</h2>
              <p className="text-slate-600">This helps us create a more accurate automation blueprint</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="companyName" className="text-lg font-semibold text-slate-900">
                    Company/Agency Name *
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Enter your company or agency name"
                    value={formData.companyName}
                    onChange={(e) => updateFormData("companyName", e.target.value)}
                    className="text-base border-slate-200 focus:border-blue-300 focus:ring-blue-200 bg-white h-12"
                  />
                  <p className="text-sm text-slate-500">We'll use this to personalize your automation blueprint</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Your Information is Secure</h4>
                  <p className="text-sm text-slate-600">We use enterprise-grade security to protect your data</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">What's the size of your business?</h2>
              <p className="text-slate-600">This helps us recommend the right automation level and pricing</p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <Label className="text-lg font-semibold text-slate-900 mb-4 block">Number of employees/agents *</Label>
                <RadioGroup
                  value={formData.businessSize}
                  onValueChange={(value) => updateFormData("businessSize", value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                    <RadioGroupItem value="solo" id="solo" />
                    <Label htmlFor="solo" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-slate-900">Just me (solo agent/owner)</div>
                        <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Starter plan</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                    <RadioGroupItem value="2-5" id="2-5" />
                    <Label htmlFor="2-5" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-slate-900">2-5 employees</div>
                        <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">Growth plan</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                    <RadioGroupItem value="6-15" id="6-15" />
                    <Label htmlFor="6-15" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-slate-900">6-15 employees</div>
                        <div className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          Professional plan
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                    <RadioGroupItem value="16+" id="16+" />
                    <Label htmlFor="16+" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-slate-900">16+ employees</div>
                        <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                          Enterprise plan
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
                <Label className="text-lg font-semibold text-slate-900 mb-4 block">Annual revenue range *</Label>
                <RadioGroup
                  value={formData.annualRevenue}
                  onValueChange={(value) => updateFormData("annualRevenue", value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                    <RadioGroupItem value="under-250k" id="under-250k" />
                    <Label htmlFor="under-250k" className="flex-1 cursor-pointer font-semibold text-slate-900">
                      Under $250K
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                    <RadioGroupItem value="250k-500k" id="250k-500k" />
                    <Label htmlFor="250k-500k" className="flex-1 cursor-pointer font-semibold text-slate-900">
                      $250K - $500K
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                    <RadioGroupItem value="500k-1m" id="500k-1m" />
                    <Label htmlFor="500k-1m" className="flex-1 cursor-pointer font-semibold text-slate-900">
                      $500K - $1M
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 cursor-pointer transition-all duration-200">
                    <RadioGroupItem value="1m+" id="1m+" />
                    <Label htmlFor="1m+" className="flex-1 cursor-pointer font-semibold text-slate-900">
                      $1M+
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        )

      case 9:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Get Your Free AI Automation Audit</h2>
              <p className="text-slate-600">
                We'll create a custom automation blueprint specifically for your business
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-lg font-semibold text-slate-900">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="text-base border-slate-200 focus:border-blue-300 focus:ring-blue-200 bg-white h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-lg font-semibold text-slate-900">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="text-base border-slate-200 focus:border-blue-300 focus:ring-blue-200 bg-white h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-lg font-semibold text-slate-900">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className="text-base border-slate-200 focus:border-blue-300 focus:ring-blue-200 bg-white h-12"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-4">What you'll receive within 24 hours:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100">Custom AI workflow blueprint</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100">ROI calculation based on your time spent</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100">Implementation timeline and roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100">Optional 15-minute strategy call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 10:
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Thank You! Your Audit is Being Prepared</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We're creating your custom AI automation blueprint based on your responses. You'll receive it in your
                inbox within the next 24 hours along with a personalized ROI calculation.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <VideoPlaceholder title="What to Expect Next" description="A preview of your custom automation audit" />
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold text-center mb-8">What happens next:</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-300">Custom Blueprint Delivered</h4>
                      <p className="text-slate-300 text-sm">Personalized automation strategy for your business</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-300">ROI Analysis</h4>
                      <p className="text-slate-300 text-sm">Calculate your potential time and cost savings</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Implementation Timeline</h4>
                      <p className="text-slate-300 text-sm">Step-by-step roadmap to automation success</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Strategy Call Option</h4>
                      <p className="text-slate-300 text-sm">Optional 15-minute call to discuss your results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Want to Fast-Track Your Results?</h3>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("https://calendly.com/your-calendar", "_blank")}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Free Strategy Call
              </Button>
              <p className="text-slate-500">Discuss your automation blueprint directly with Elvis</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 text-center">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Join 200+ Agencies Already Automating</h4>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-slate-600 ml-2">4.9/5 from our clients</span>
              </div>
              <p className="text-slate-600">
                "The automation blueprint was exactly what we needed. Implementation was smooth and results came fast."
              </p>
              <p className="text-slate-500 text-sm mt-2">- Jennifer K., State Farm Agency</p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Header />
        <div className="container mx-auto px-6 py-12">{renderStep()}</div>
      </div>
    )
  }

  if (currentStep === totalSteps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Header />
        <div className="container mx-auto px-6 py-12">{renderStep()}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <div className="container mx-auto px-6 py-8">
        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-600">
              Step {currentStep} of {totalSteps - 1}
            </span>
            <span className="text-sm font-medium text-slate-600">
              {Math.round(((currentStep - 1) / (totalSteps - 1)) * 100)}% Complete
            </span>
          </div>
          <Progress value={((currentStep - 1) / (totalSteps - 1)) * 100} className="h-3" />
        </div>

        {/* Question Card */}
        <Card className="max-w-3xl mx-auto p-10 shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-3xl">
          {renderStep()}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10 pt-8 border-t border-slate-100">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep <= 1}
              className="flex items-center px-6 py-3 border-slate-200 hover:bg-slate-50 rounded-xl transition-all duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            {currentStep === totalSteps - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center px-8 py-3 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get My Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center px-8 py-3 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
