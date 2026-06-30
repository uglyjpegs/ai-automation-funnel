"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const services = [
  { name: "DFY Meta Ads", href: "/services/meta-ads", desc: "Done-for-you Meta advertising" },
  { name: "CRM Automation", href: "/services/crm-automation", desc: "Streamline your client pipeline" },
  { name: "AI Follow-Up Systems", href: "/services/ai-follow-up", desc: "Never lose a lead again" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/images/logo-horizontal.png" alt="RemedyAds" width={150} height={40} className="object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                {s.name}
              </Link>
            ))}
            <Link href="/honest-water" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Results</Link>
            <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">About</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/funnel"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20"
            >
              Get Free Audit
            </Link>
          </div>

          <button
            className="md:hidden text-slate-600 hover:text-slate-900 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-3 pb-2">Services</div>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <div className="border-t border-slate-200 my-3" />
            <Link href="/honest-water" className="block px-3 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg" onClick={() => setMobileOpen(false)}>Results — $0 to $100K</Link>
            <Link href="/about" className="block px-3 py-2.5 text-sm text-slate-600 hover:text-slate-900" onClick={() => setMobileOpen(false)}>About</Link>
            <div className="pt-2">
              <Link
                href="/funnel"
                className="block text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-5 py-3 rounded-xl"
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
