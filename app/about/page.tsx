"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Building,
  Palette,
  Code,
  Globe,
  Mail,
  Calendar,
  CheckCircle,
  Star,
  Target,
  Heart,
  Briefcase,
  GraduationCap,
  Home,
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const VideoPlaceholder = ({ title, description }: { title: string; description: string }) => (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden aspect-video shadow-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div className="text-white px-4">
            <h4 className="font-bold text-base">{title}</h4>
            <p className="text-slate-300 text-sm">{description}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
        6:24
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header - Mobile Optimized */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-32 h-8 relative">
                <Image src="/images/Grey.png" alt="Remedy AI Logo" width={128} height={32} className="object-contain" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => (window.location.href = "/")}
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Home</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-12 space-y-8 md:space-y-16">
        {/* Hero Section - Mobile First */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-12 md:py-20 px-4 md:px-8 rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center md:text-left space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 md:items-center">
              {/* Mobile: Image First */}
              <div className="order-2 md:order-2 space-y-4 md:space-y-6">
                <div className="w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto shadow-2xl overflow-hidden">
                  <Image
                    src="/images/squarepp2.png"
                    alt="Elvis Cueva Profile"
                    width={192}
                    height={192}
                    className="object-cover w-full md:w-80 md:h-80 h-full"
                  />
                </div>
                <div className="text-center">
                  
                </div>
              </div>

              {/* Mobile: Content Second */}
              <div className="order-1 md:order-1 space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <h1 className="text-3xl md:text-6xl font-bold leading-tight">
                    Meet
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Elvis Cueva
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                    From serving thousands of clients to automating client follow-ups for 200+ agencies. Serving both the Spanish and English communities.         
                  </p>
                  <p className="text-base md:text-lg text-slate-400">
                    I understand your challenges because I've lived them.
                  </p>
                </div>

                {/* Stats - Mobile Grid */}
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-300">4+</div>
                    <div className="text-slate-400 text-xs md:text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-300">5K+</div>
                    <div className="text-slate-400 text-xs md:text-sm">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-300">200+</div>
                    <div className="text-slate-400 text-xs md:text-sm">Agencies</div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="text-center md:text-left">
                  <Button
                    onClick={() => (window.location.href = "/")}
                    size="lg"
                    className="w-full md:w-auto bg-white text-slate-900 hover:bg-slate-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Start Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Mobile Optimized */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">My Experience</h2>
              <p className="text-lg md:text-xl text-slate-600">From frontline service to automation expertise</p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Latino Servi-tax Experience - Mobile Stack */}
              <div className="space-y-6 md:grid md:grid-cols-2 md:gap-12 md:items-center md:space-y-0">
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-slate-100">
                    <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                        <Building className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-slate-900">Latino Servi-tax</h3>
                        <p className="text-slate-600 text-sm md:text-base">Manager Assistant • 2014-2018, 2024</p>
                      </div>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                      <h4 className="text-base md:text-lg font-semibold text-slate-900">
                        Where I Learned What Really Matters
                      </h4>
                      <div className="space-y-2 md:space-y-3 text-slate-600">
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base">
                            Served 5,000+ clients with insurance quotes and payment processing
                          </span>
                        </div>
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base">
                            Managed tax preparation for hundreds of businesses
                          </span>
                        </div>
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base">Designed company logo and improved processes</span>
                        </div>
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base">
                            Witnessed the pain of manual follow-ups firsthand
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <VideoPlaceholder
                    title="My Latino Servi-tax Story"
                    description="How serving thousands taught me about client needs"
                  />

                  <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-4 md:p-6 rounded-xl md:rounded-2xl text-white shadow-xl">
                    <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">The Breakthrough Moment</h4>
                    <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                      After years of watching clients struggle with payment follow-ups, I knew there had to be a better
                      way. That's when I started building my first automation systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Insights - Mobile Grid */}
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
                  What I Learned Serving 5,000+ Clients
                </h3>
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm md:text-base">Clients Want Respect</h4>
                    <p className="text-slate-600 text-xs md:text-sm">
                      Nobody likes feeling chased. Automated follow-ups maintain dignity while getting results.
                    </p>
                  </div>

                  <div className="text-center space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Clock className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm md:text-base">Timing is Everything</h4>
                    <p className="text-slate-600 text-xs md:text-sm">
                      The right message at the right time works better than aggressive tactics.
                    </p>
                  </div>

                  <div className="text-center space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm md:text-base">Consistency Wins</h4>
                    <p className="text-slate-600 text-xs md:text-sm">
                      Manual follow-ups are inconsistent. Clients respond better to reliable communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA after experience */}
            <div className="text-center mt-8 md:mt-12">
              
            </div>
          </div>
        </section>

        {/* Technical Expertise - Condensed for Mobile */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 py-12 md:py-16 px-4 md:px-8 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                Technical Expertise Meets Real-World Experience
              </h2>
              <p className="text-lg md:text-xl text-slate-300">
                The perfect combination for building automation that actually works
              </p>
            </div>

            <div className="space-y-6 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div className="space-y-4 md:space-y-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20">
                  <h3 className="text-lg md:text-xl font-bold text-blue-300 mb-3 md:mb-4">Education & Credentials</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white text-sm md:text-base">
                          Bachelor's in Environmental Design in Architecture
                        </div>
                        <div className="text-slate-300 text-xs md:text-sm">
                          North Carolina State University (2022-2024)
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white text-sm md:text-base">
                          Associates in Applied Science - Architectural Technologies
                        </div>
                        <div className="text-slate-300 text-xs md:text-sm">WakeTech Community College (2019-2021)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20">
                  <h3 className="text-lg md:text-xl font-bold text-purple-300 mb-3 md:mb-4">Technical Skills</h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div className="flex items-center space-x-2">
                      <Code className="h-3 w-3 md:h-4 md:w-4 text-purple-400" />
                      <span className="text-slate-200 text-xs md:text-sm">Salesforce/AI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Palette className="h-3 w-3 md:h-4 md:w-4 text-purple-400" />
                      <span className="text-slate-200 text-xs md:text-sm">Adobe Creative</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="h-3 w-3 md:h-4 md:w-4 text-purple-400" />
                      <span className="text-slate-200 text-xs md:text-sm">AutoCAD/Revit</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-purple-400" />
                      <span className="text-slate-200 text-xs md:text-sm">Web Development</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20">
                  <h3 className="text-lg md:text-xl font-bold text-green-300 mb-3 md:mb-4">Professional Experience</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white text-sm md:text-base">
                          Structural Designer - Master Consulting Engineers
                        </div>
                        <div className="text-slate-300 text-xs md:text-sm">
                          Commercial, residential, and institutional buildings (2025)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 md:space-x-3">
                      <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white text-sm md:text-base">
                          Architectural Revit Technician - HH Architecture
                        </div>
                        <div className="text-slate-300 text-xs md:text-sm">
                          Drawing coordination and production (2022-2023)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 md:space-x-3">
                      <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white text-sm md:text-base">Management - MGS Auto Sales</div>
                        <div className="text-slate-300 text-xs md:text-sm">
                          Data analysis and marketing strategies (2019-2020)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 md:p-6 rounded-xl md:rounded-2xl border border-blue-400/30">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Why This Combination Works</h3>
                  <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                    My technical background gives me the skills to build sophisticated automation systems, while my
                    years of client service experience ensure these systems actually solve real problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact - Mobile Stats */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
                Proven Results Across Industries
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                From Latino Servi-tax insights to 200+ agency transformations
              </p>
            </div>

            {/* Mobile: 2x2 Grid, Desktop: 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 md:mb-2">5K+</div>
                <div className="text-slate-600 text-xs md:text-sm">Clients Served</div>
                <div className="text-xs text-slate-500 mt-1">at Latino Servi-tax</div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <Building className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 md:mb-2">200+</div>
                <div className="text-slate-600 text-xs md:text-sm">Agencies</div>
                <div className="text-xs text-slate-500 mt-1">automated</div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 md:mb-2">15K+</div>
                <div className="text-slate-600 text-xs md:text-sm">Hours Saved</div>
                <div className="text-xs text-slate-500 mt-1">monthly</div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 md:mb-2">40%</div>
                <div className="text-slate-600 text-xs md:text-sm">Improvement</div>
                <div className="text-xs text-slate-500 mt-1">average</div>
              </div>
            </div>

            {/* Client Success Stories - Mobile Stack */}
            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">Client Success Stories</h3>
              <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-1 md:space-x-2 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 italic text-sm md:text-base">
                    "Elvis understands our challenges because he's been in our shoes. His automation system saved us 18
                    hours per week and improved our collection rate by 45%."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm md:text-base">Maria Rodriguez</div>
                      <div className="text-slate-600 text-xs md:text-sm">Rodriguez Insurance Agency</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-1 md:space-x-2 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 italic text-sm md:text-base">
                    "What sets Elvis apart is his real-world experience. He doesn't just build technology - he builds
                    solutions that actually work for agencies like ours."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm md:text-base">James Thompson</div>
                      <div className="text-slate-600 text-xs md:text-sm">Thompson Financial Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA after results */}
            
          </div>
        </section>

        {/* Personal Mission - Mobile Optimized */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-12 md:py-16 px-4 md:px-8 rounded-2xl md:rounded-3xl text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">My Mission</h2>
            <div className="text-base md:text-xl text-slate-300 leading-relaxed space-y-4 md:space-y-6">
              <p>
                After serving thousands of clients at Latino Servi-tax and witnessing the daily struggles with manual
                processes, I made it my mission to help service businesses escape the follow-up trap.
              </p>
              <p>
                Every agency owner deserves to focus on what they do best - serving their clients and growing their
                business. Not chasing payments or managing tedious tasks.
              </p>
              <p className="text-blue-300 font-semibold text-lg md:text-2xl">
                I'm here to give you back your time and your peace of mind.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-3 md:mb-4">
                Ready to Transform Your Agency?
              </h3>
              <p className="text-slate-200 mb-4 md:mb-6 text-sm md:text-base">
                Let's discuss how automation can work for your specific situation. I'll personally review your current
                processes and create a custom solution.
              </p>
              <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://calendly.com/your-calendar", "_blank")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 text-white bg-transparent border-white/30"
                  onClick={() => (window.location.href = "/")}
                >
                  Take the Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information - Mobile Grid */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6 md:mb-8">Let's Connect</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {/* Email */}
              <div className="text-center space-y-3 md:space-y-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Mail className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base">Email</h3>
                  <p className="text-slate-600 text-xs md:text-sm">ejcuevac01@gmail.com</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="text-center space-y-3 md:space-y-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-8 md:w-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.072-.928-2-2-2s-2 .928-2 2v4.5h-3v-9h3v1.268c.557-.798 1.551-1.268 2.5-1.268 2.206 0 4 1.794 4 4v5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base">LinkedIn</h3>
                  <p className="text-slate-600 text-xs md:text-sm">
                    <a
                      href="https://www.linkedin.com/in/elviscueva/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-green-500"
                    >
                      linkedin.com/in/elviscueva
                    </a>
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div className="text-center space-y-3 md:space-y-4 col-span-2 md:col-auto">
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
    </div>
  )
}
