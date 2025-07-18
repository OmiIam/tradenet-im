'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Professional Trading
          <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Made Simple
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Trade stocks, crypto, forex, and options with advanced AI analytics and 
          institutional-grade security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/signup">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Trading
            </button>
          </Link>
          <Link href="/features">
            <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors">
              Learn More
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-white">2M+</div>
            <div className="text-sm text-gray-400">Traders</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">$50B+</div>
            <div className="text-sm text-gray-400">Volume</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">18.5%</div>
            <div className="text-sm text-gray-400">Avg Return</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero