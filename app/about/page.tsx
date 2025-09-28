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
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden aspect-video shadow-2xl">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <Users className="h-10 w-10 text-white" />
          </div>
          <div className="text-white">
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-slate-300">{description}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
        6:24
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-50 h-50 relative">
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
              <Button
                variant="ghost"
                onClick={() => (window.location.href = "/")}
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20 px-8 rounded-3xl shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Meet
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Elvis Cueva
                    </span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    From serving thousands of clients at Latino Servi-tax to automating payment follow-ups for 200+
                    agencies. I understand your challenges because I've lived them.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">4+</div>
                    <div className="text-slate-400 text-sm">Years Client Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-300">5,000+</div>
                    <div className="text-slate-400 text-sm">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">200+</div>
                    <div className="text-slate-400 text-sm">Agencies Automated</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl overflow-hidden">
                  <Image
                    src="/images/squarepp2.png"
                    alt="Profile"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-blue-200 font-medium">
                    "I've been on both sides – serving clients and building solutions. That's what makes the
                    difference."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-8 rounded-3xl border border-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">My Experience </h2>
              <p className="text-xl text-slate-600">From frontline service to automation expertise</p>
            </div>

            <div className="space-y-12">
              {/* Latino Servi-tax Experience */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Building className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">Latino Servi-tax</h3>
                        <p className="text-slate-600">Manager Assistant • 2014-2018, 2024</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-slate-900">Where I Learned What Really Matters</h4>
                      <div className="space-y-3 text-slate-600">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            Served 5,000+ clients from diverse backgrounds with insurance quotes and payment processing
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Managed personal and commercial tax preparation for hundreds of businesses</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Designed company logo and improved client communication processes</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            Witnessed firsthand the pain of manual follow-ups and client communication challenges
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <VideoPlaceholder
                    title="My Latino Servi-tax Story"
                    description="How serving thousands taught me about client needs"
                  />

                  <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-6 rounded-2xl text-white shadow-xl">
                    <h4 className="font-bold text-lg mb-3">The Breakthrough Moment</h4>
                    <p className="text-blue-100 leading-relaxed">
                      After years of watching clients struggle with payment follow-ups and seeing businesses lose money
                      due to inefficient processes, I knew there had to be a better way. That's when I started building
                      my first automation systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  What I Learned Serving 5,000+ Clients
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900">Clients Want Respect</h4>
                    <p className="text-slate-600 text-sm">
                      Nobody likes feeling chased or pressured. Automated follow-ups maintain dignity while getting
                      results.
                    </p>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900">Timing is Everything</h4>
                    <p className="text-slate-600 text-sm">
                      The right message at the right time works better than aggressive tactics. Automation ensures
                      perfect timing.
                    </p>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900">Consistency Wins</h4>
                    <p className="text-slate-600 text-sm">
                      Manual follow-ups are inconsistent. Clients respond better to reliable, professional
                      communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 py-16 px-8 rounded-3xl text-white shadow-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Technical Expertise Meets Real-World Experience</h2>
              <p className="text-xl text-slate-300">
                The perfect combination for building automation that actually works
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold text-blue-300 mb-4">Education & Credentials</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white">
                          Bachelor's in Environmental Design in Architecture
                        </div>
                        <div className="text-slate-300 text-sm">North Carolina State University (2022-2024)</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white">
                          Associates in Applied Science - Architectural Technologies
                        </div>
                        <div className="text-slate-300 text-sm">WakeTech Community College (2019-2021)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">Technical Skills</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-purple-400" />
                      <span className="text-slate-200 text-sm">Salesforce/AI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Palette className="h-4 w-4 text-purple-400" />
                      <span className="text-slate-200 text-sm">Adobe Creative Suite</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-purple-400" />
                      <span className="text-slate-200 text-sm">AutoCAD/Revit</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-purple-400" />
                      <span className="text-slate-200 text-sm">Web Development</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold text-green-300 mb-4">Professional Experience</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Briefcase className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white">
                          Structural Designer - Master Consulting Engineers, Inc.
                        </div>
                        <div className="text-slate-300 text-sm">
                          Collaborated with engineers and architects to document structural systems for commercial,
                          residential, and institutional buildings (Jun 2025 - Aug 2025)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Briefcase className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Architectural Revit Technician - HH Architecture</div>
                        <div className="text-slate-300 text-sm">
                          Assisted with drawing coordination and production across all design and construction phases
                          (Jul 2022 - Feb 2023)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Briefcase className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Management - MGS Auto Sales</div>
                        <div className="text-slate-300 text-sm">
                          Developed datasets and reports for inventory, maintained website, and implemented marketing
                          strategies for small businesses (Feb 2019 - Jul 2020)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-400/30">
                  <h3 className="text-xl font-bold text-white mb-3">Why This Combination Works</h3>
                  <p className="text-blue-100 leading-relaxed">
                    My technical background gives me the skills to build sophisticated automation systems, while my
                    years of client service experience ensure these systems actually solve real problems that businesses
                    face every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-8 rounded-3xl border border-purple-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Results Across Industries</h2>
              <p className="text-xl text-slate-600">From Latino Servi-tax insights to 200+ agency transformations</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">5,000+</div>
                <div className="text-slate-600">Clients Personally Served</div>
                <div className="text-sm text-slate-500 mt-1">at Latino Servi-tax</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">200+</div>
                <div className="text-slate-600">Agencies Automated</div>
                <div className="text-sm text-slate-500 mt-1">and growing</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">15,000+</div>
                <div className="text-slate-600">Hours Saved Monthly</div>
                <div className="text-sm text-slate-500 mt-1">across all clients</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">40%</div>
                <div className="text-slate-600">Average Improvement</div>
                <div className="text-sm text-slate-500 mt-1">in collection rates</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Client Success Stories</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 italic">
                    "Elvis understands our challenges because he's been in our shoes. His automation system saved us 18
                    hours per week and improved our collection rate by 45%. The ROI was immediate."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Maria Rodriguez</div>
                      <div className="text-slate-600 text-sm">Rodriguez Insurance Agency</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 italic">
                    "What sets Elvis apart is his real-world experience. He doesn't just build technology - he builds
                    solutions that actually work for agencies like ours."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">James Thompson</div>
                      <div className="text-slate-600 text-sm">Thompson Financial Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Mission Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16 px-8 rounded-3xl text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold mb-6">My Mission</h2>
            <div className="text-xl text-slate-300 leading-relaxed space-y-6">
              <p>
                After serving thousands of clients at Latino Servi-tax and witnessing the daily struggles with manual
                processes, I made it my mission to help service businesses escape the follow-up trap.
              </p>
              <p>
                Every agency owner deserves to focus on what they do best - serving their clients and growing their
                business. Not chasing payments or managing tedious administrative tasks.
              </p>
              <p className="text-blue-300 font-semibold text-2xl">
                I'm here to give you back your time and your peace of mind.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Ready to Transform Your Agency?</h3>
              <p className="text-slate-200 mb-6">
                Let's discuss how automation can work for your specific situation. I'll personally review your current
                processes and create a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://calendly.com/your-calendar", "_blank")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 text-white bg-transparent border-white/30"
                  onClick={() => (window.location.href = "/")}
                >
                  Take the Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-8 rounded-3xl border border-blue-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Let's Connect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">ejcuevac01@gmail.com</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.072-.928-2-2-2s-2 .928-2 2v4.5h-3v-9h3v1.268c.557-.798 1.551-1.268 2.5-1.268 2.206 0 4 1.794 4 4v5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">LinkedIn</h3>
                  <p className="text-slate-600">
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
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Languages</h3>
                  <p className="text-slate-600">English & Spanish</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
