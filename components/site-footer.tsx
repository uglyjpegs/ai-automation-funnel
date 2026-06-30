import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <Image src="/images/Grey.png" alt="Remedy AI" width={120} height={32} className="object-contain mb-4" />
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              AI-powered marketing and automation for agencies ready to scale without adding headcount.
            </p>
            <p className="text-sm text-slate-400 mt-4">English & Spanish · Serving nationwide</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/meta-ads" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">DFY Meta Ads</Link></li>
              <li><Link href="/services/crm-automation" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">CRM Automation</Link></li>
              <li><Link href="/services/ai-follow-up" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">AI Follow-Up Systems</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">About Elvis</Link></li>
              <li>
                <Link
                  href="https://cal.com/elvis-cueva/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Book a Call
                </Link>
              </li>
              <li>
                <a href="mailto:ejcuevac01@gmail.com" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Remedy AI. All rights reserved.</p>
          <a href="mailto:ejcuevac01@gmail.com" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">ejcuevac01@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
