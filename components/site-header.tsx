"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

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
            <Image src="/images/Grey.png" alt="Remedy AI" width={120} height={32} className="object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors py-2">
                Services
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-2 w-64">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="text-sm font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">{s.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{s.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">About</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="https://cal.com/elvis-cueva/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20"
            >
              Book a Free Call
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
            <Link href="/about" className="block px-3 py-2.5 text-sm text-slate-600 hover:text-slate-900" onClick={() => setMobileOpen(false)}>About</Link>
            <div className="pt-2">
              <Link
                href="https://cal.com/elvis-cueva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-5 py-3 rounded-xl"
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
