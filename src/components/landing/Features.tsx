'use client'

import React from 'react'
import { Brain, Zap, Shield, BarChart3, Smartphone, Globe } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced algorithms analyze market patterns and provide predictive insights.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast Execution',
      description: 'Sub-millisecond trade execution with institutional-grade infrastructure.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Bank-Level Security',
      description: 'Multi-layer security with cold storage and insurance protection.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Charting',
      description: 'Professional charts with 100+ technical indicators.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Trading',
      description: 'Full-featured mobile app for trading on the go.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Markets',
      description: 'Access to stocks, forex, crypto, and commodities.'
    }
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Everything You Need to Trade
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional trading tools and institutional-grade infrastructure in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features