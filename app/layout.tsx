import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://remedyads.com'),
  title: {
    default: 'RemedyAds — AI-Powered Marketing for Agencies',
    template: '%s | RemedyAds',
  },
  description: 'Done-for-you Meta ads, CRM automation, and AI follow-up systems. RemedyAds helps service businesses and agencies scale without adding headcount. English & Spanish.',
  keywords: ['AI marketing agency', 'Meta ads agency', 'CRM automation', 'AI follow-up system', 'GHL automation', 'GoHighLevel agency', 'done for you marketing', 'insurance agency automation', 'lead follow-up automation'],
  authors: [{ name: 'Elvis Cueva', url: 'https://remedyads.com/about' }],
  creator: 'Elvis Cueva',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://remedyads.com',
    siteName: 'RemedyAds',
    title: 'RemedyAds — AI-Powered Marketing for Agencies',
    description: 'Done-for-you Meta ads, CRM automation, and AI follow-up systems. Scale your agency without hiring.',
    images: [{ url: '/images/logo-horizontal.png', width: 1200, height: 630, alt: 'RemedyAds' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RemedyAds — AI-Powered Marketing for Agencies',
    description: 'Done-for-you Meta ads, CRM automation, and AI follow-up systems.',
    images: ['/images/logo-horizontal.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://remedyads.com' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RemedyAds',
  url: 'https://remedyads.com',
  logo: 'https://remedyads.com/images/logo-horizontal.png',
  description: 'AI-powered marketing agency offering done-for-you Meta ads, CRM automation, and AI follow-up systems for service businesses and agencies.',
  founder: { '@type': 'Person', name: 'Elvis Cueva' },
  contactPoint: { '@type': 'ContactPoint', email: 'ejcuevac01@gmail.com', contactType: 'sales', availableLanguage: ['English', 'Spanish'] },
  sameAs: ['https://www.linkedin.com/in/elviscueva/'],
  areaServed: 'US',
  knowsLanguage: ['en', 'es'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
