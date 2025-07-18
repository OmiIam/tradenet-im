'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  TrendingUp,
  TrendingDown,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Star,
  ArrowRight,
  Factory,
  Fuel,
  Gem,
  Wheat,
  Mountain,
  Droplet
} from 'lucide-react'
import Link from 'next/link'

export default function CommoditiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const marketHighlights = [
    {
      metric: 'Gold',
      value: '$2,045.30',
      change: '+1.2%',
      trend: 'up',
      icon: <Gem className="w-6 h-6" />
    },
    {
      metric: 'Crude Oil',
      value: '$78.45',
      change: '-0.8%',
      trend: 'down',
      icon: <Fuel className="w-6 h-6" />
    },
    {
      metric: 'Silver',
      value: '$24.67',
      change: '+2.1%',
      trend: 'up',
      icon: <Mountain className="w-6 h-6" />
    },
    {
      metric: 'Natural Gas',
      value: '$2.89',
      change: '+3.4%',
      trend: 'up',
      icon: <Droplet className="w-6 h-6" />
    }
  ]

  const commodityCategories = [
    {
      id: 'all',
      name: 'All Commodities',
      count: '50+',
      icon: <Factory className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'metals',
      name: 'Precious Metals',
      count: '8',
      icon: <Gem className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'energy',
      name: 'Energy',
      count: '12',
      icon: <Fuel className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'agriculture',
      name: 'Agriculture',
      count: '18',
      icon: <Wheat className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'industrial',
      name: 'Industrial Metals',
      count: '6',
      icon: <Mountain className="w-8 h-8" />,
      color: 'from-gray-500 to-slate-500'
    },
    {
      id: 'soft',
      name: 'Soft Commodities',
      count: '6',
      icon: <Droplet className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const topCommodities = [
    {
      symbol: 'XAUUSD',
      name: 'Gold',
      price: 2045.30,
      change: 24.50,
      changePercent: 1.22,
      volume: '$45.2B',
      unit: 'oz',
      category: 'Precious Metals',
      icon: '🥇'
    },
    {
      symbol: 'XAGUSD',
      name: 'Silver',
      price: 24.67,
      change: 0.51,
      changePercent: 2.11,
      volume: '$8.9B',
      unit: 'oz',
      category: 'Precious Metals',
      icon: '🥈'
    },
    {
      symbol: 'USOIL',
      name: 'Crude Oil WTI',
      price: 78.45,
      change: -0.62,
      changePercent: -0.78,
      volume: '$89.3B',
      unit: 'barrel',
      category: 'Energy',
      icon: '🛢️'
    },
    {
      symbol: 'UKOIL',
      name: 'Brent Oil',
      price: 82.15,
      change: -0.45,
      changePercent: -0.54,
      volume: '$67.8B',
      unit: 'barrel',
      category: 'Energy',
      icon: '⛽'
    },
    {
      symbol: 'NATGAS',
      name: 'Natural Gas',
      price: 2.89,
      change: 0.095,
      changePercent: 3.40,
      volume: '$12.4B',
      unit: 'MMBtu',
      category: 'Energy',
      icon: '🔥'
    },
    {
      symbol: 'COPPER',
      name: 'Copper',
      price: 8.234,
      change: 0.123,
      changePercent: 1.52,
      volume: '$15.6B',
      unit: 'lb',
      category: 'Industrial Metals',
      icon: '🔴'
    }
  ]

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Markets',
      description: 'Trade commodities from major exchanges worldwide',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Data',
      description: 'Live pricing and market data for all commodities',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Management',
      description: 'Advanced tools to manage commodity price volatility',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Technical Analysis',
      description: 'Professional charting tools and market analysis',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    'Access to 50+ commodity markets',
    'Competitive spreads and low fees',
    'Hedge against inflation',
    'Portfolio diversification',
    'Professional trading platforms',
    'Market research and analysis'
  ]

  const marketFactors = [
    {
      factor: 'Supply & Demand',
      description: 'Production levels, inventory data, and consumption patterns',
      impact: 'High'
    },
    {
      factor: 'Weather Conditions',
      description: 'Natural disasters, seasonal changes affecting crop yields',
      impact: 'High'
    },
    {
      factor: 'Economic Growth',
      description: 'Industrial demand, GDP growth, and economic indicators',
      impact: 'Medium'
    },
    {
      factor: 'Currency Fluctuations',
      description: 'USD strength, exchange rates affecting commodity prices',
      impact: 'Medium'
    },
    {
      factor: 'Geopolitical Events',
      description: 'Political stability, trade policies, and sanctions',
      impact: 'High'
    },
    {
      factor: 'Inventory Levels',
      description: 'Storage capacity, stockpile reports, and reserves',
      impact: 'Medium'
    }
  ]

  return (
    <div className="min-h-screen bg-trade-navy">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-trade-navy via-trade-midnight to-trade-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,102,255,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-display font-bold text-white mb-6">
              Trade Commodities
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                With Global Access
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Access global commodity markets including precious metals, energy, agriculture, 
              and industrial metals with professional trading tools and real-time data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 font-bold text-white mb-6">
              Market Highlights
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Live prices for key commodity markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 text-center"
              >
                <div className={`w-12 h-12 ${highlight.trend === 'up' ? 'bg-green-500/20' : 'bg-red-500/20'} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <div className={highlight.trend === 'up' ? 'text-green-400' : 'text-red-400'}>
                    {highlight.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-2 font-mono">
                  {highlight.value}
                </div>
                <div className="text-sm text-gray-400 mb-2">{highlight.metric}</div>
                <div className={`text-sm font-medium ${highlight.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {highlight.change}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commodity Categories */}
      <section className="py-20 bg-gradient-to-br from-trade-navy via-trade-midnight to-trade-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 font-bold text-white mb-6">
              Commodity Categories
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Explore different commodity sectors and markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commodityCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-h4 font-semibold text-white mb-2 text-center">
                  {category.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-gray-400">
                    {category.count} markets
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Commodities */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 font-bold text-white mb-6">
              Popular Commodities
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Most traded commodities with live pricing.
            </p>
          </motion.div>

          <div className="card-trade overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-h3 font-semibold text-white">
                  Live Commodity Prices
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-green-400">Live</span>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-gray-400 font-medium">Symbol</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Name</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Price</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Change</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Volume</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Category</th>
                    <th className="text-center p-4 text-gray-400 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {topCommodities.map((commodity, index) => (
                    <motion.tr
                      key={commodity.symbol}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{commodity.icon}</span>
                          <div className="font-semibold text-white font-mono">
                            {commodity.symbol}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-gray-300">{commodity.name}</td>
                      <td className="p-4 text-right text-white font-mono">
                        ${commodity.price.toFixed(2)}
                        <div className="text-xs text-gray-400">/{commodity.unit}</div>
                      </td>
                      <td className="p-4 text-right">
                        <div className={`${commodity.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          <div className="font-mono">{commodity.change >= 0 ? '+' : ''}{commodity.change.toFixed(2)}</div>
                          <div className="text-sm">({commodity.changePercent >= 0 ? '+' : ''}{commodity.changePercent.toFixed(2)}%)</div>
                        </div>
                      </td>
                      <td className="p-4 text-right text-gray-300 font-mono">{commodity.volume}</td>
                      <td className="p-4 text-gray-300">{commodity.category}</td>
                      <td className="p-4 text-center">
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                          Trade
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-trade-navy via-trade-midnight to-trade-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 font-bold text-white mb-6">
              Commodity Trading Features
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Professional tools and features for commodity trading.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-h4 font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="card-trade p-8">
            <h3 className="text-h2 font-bold text-white mb-6 text-center">
              Why Trade Commodities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-body text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Factors */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 font-bold text-white mb-6">
              Market Factors
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Key factors that influence commodity prices and market movements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketFactors.map((factor, index) => (
              <motion.div
                key={factor.factor}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-h4 font-semibold text-white">
                    {factor.factor}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    factor.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                    factor.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {factor.impact} Impact
                  </span>
                </div>
                <p className="text-body-sm text-gray-400">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-trade-navy via-trade-midnight to-trade-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-trade p-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Gem className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-h1 font-bold text-white mb-6">
              Start Trading Commodities
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Diversify your portfolio with global commodity markets and hedge against inflation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <Factory className="w-5 h-5" />
                  <span>Start Trading</span>
                </motion.button>
              </Link>
              <Link href="/features">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-trade-secondary text-lg px-8 py-4"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}