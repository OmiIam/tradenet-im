import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'trade.im - Professional Trading Platform',
  description: 'Professional trading platform with advanced AI analytics for stocks and cryptocurrency. Join thousands of traders using cutting-edge technology.',
  keywords: 'trade.im, trading, stocks, cryptocurrency, AI analytics, professional trading platform, investment, portfolio management',
  authors: [{ name: 'trade.im Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0066FF',
  openGraph: {
    title: 'trade.im - Professional Trading Platform',
    description: 'Professional trading platform with advanced AI analytics for stocks and cryptocurrency.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'trade.im - Professional Trading Platform',
    description: 'Professional trading platform with advanced AI analytics for stocks and cryptocurrency.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-primary bg-trade-navy text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}