'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  TrendingUp,
  TrendingDown,
  BarChart3,
  Clock,
  DollarSign,
  Globe,
  Building,
  Star,
  Search,
  Filter,
  ArrowRight,
  Eye,
  BookOpen,
  Award,
  Shield,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function StocksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const marketHighlights = [
    {
      metric: 'S&P 500',
      value: '4,756.50',
      change: '+2.45%',
      trend: 'up',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: 'NASDAQ',
      value: '14,963.87',
      change: '+1.89%',
      trend: 'up',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: 'DOW',
      value: '37,863.80',
      change: '-0.23%',
      trend: 'down',
      icon: <TrendingDown className="w-6 h-6" />
    },
    {
      metric: 'Volume',
      value: '3.2B',
      change: '+12.5%',
      trend: 'up',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ]

  const stockCategories = [
    { id: 'all', name: 'All Stocks', count: '5,000+' },
    { id: 'sp500', name: 'S&P 500', count: '500' },
    { id: 'nasdaq', name: 'NASDAQ', count: '3,000+' },
    { id: 'dow', name: 'Dow Jones', count: '30' },
    { id: 'etf', name: 'ETFs', count: '2,800+' },
    { id: 'international', name: 'International', count: '1,200+' }
  ]

  const topStocks = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 185.20,
      change: 2.45,
      changePercent: 1.34,
      volume: '45.6M',
      marketCap: '$2.85T',
      category: 'Technology',
      logo: '🍎'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 378.90,
      change: -1.25,
      changePercent: -0.33,
      volume: '23.4M',
      marketCap: '$2.81T',
      category: 'Technology',
      logo: '🖥️'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 142.56,
      change: 3.21,
      changePercent: 2.30,
      volume: '34.5M',
      marketCap: '$1.78T',
      category: 'Technology',
      logo: '🔍'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 155.89,
      change: 0.78,
      changePercent: 0.50,
      volume: '28.9M',
      marketCap: '$1.62T',
      category: 'E-commerce',
      logo: '📦'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 245.80,
      change: -5.34,
      changePercent: -2.13,
      volume: '67.8M',
      marketCap: '$778B',
      category: 'Automotive',
      logo: '🚗'
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 634.45,
      change: 12.34,
      changePercent: 1.98,
      volume: '89.2M',
      marketCap: '$1.56T',
      category: 'Technology',
      logo: '🔧'
    }
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Data',
      description: 'Live stock prices and market data with sub-second updates',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Charts',
      description: 'Professional charting tools with 100+ technical indicators',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Trading',
      description: 'Bank-level security with SIPC insurance up to $500K',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Markets',
      description: 'Access to US, European, and Asian stock markets',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    'Commission-free stock trading',
    'Fractional shares available',
    'Extended trading hours',
    'Professional-grade execution',
    'Real-time market research',
    'Portfolio analytics and insights'
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
              Trade Stocks with
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                Professional Tools
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Access thousands of stocks from major exchanges with real-time data, 
              advanced charting, and commission-free trading.
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
              Market Overview
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Stay updated with real-time market indices and trading volumes.
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

      {/* Stock Categories */}
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
              Stock Categories
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Explore stocks by major indices and categories.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stockCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-h4 font-semibold text-white">
                    {category.name}
                  </h3>
                  <div className="text-primary-400 font-mono font-medium">
                    {category.count}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-gray-400">
                    Available stocks
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Stocks */}
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
              Top Performing Stocks
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Most popular stocks traded on our platform.
            </p>
          </motion.div>

          <div className="card-trade overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-h3 font-semibold text-white">
                  Live Stock Prices
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
                    <th className="text-left p-4 text-gray-400 font-medium">Company</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Price</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Change</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Volume</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Market Cap</th>
                    <th className="text-center p-4 text-gray-400 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {topStocks.map((stock, index) => (
                    <motion.tr
                      key={stock.symbol}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{stock.logo}</span>
                          <div>
                            <div className="font-semibold text-white">{stock.symbol}</div>
                            <div className="text-xs text-gray-400">{stock.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-gray-300">{stock.name}</td>
                      <td className="p-4 text-right text-white font-mono">${stock.price.toFixed(2)}</td>
                      <td className="p-4 text-right">
                        <div className={`${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          <div className="font-mono">{stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}</div>
                          <div className="text-sm">({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)</div>
                        </div>
                      </td>
                      <td className="p-4 text-right text-gray-300 font-mono">{stock.volume}</td>
                      <td className="p-4 text-right text-gray-300 font-mono">{stock.marketCap}</td>
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
              Why Choose Our Stock Trading
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Professional-grade tools and features for serious stock traders.
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

          {/* Benefits List */}
          <div className="card-trade p-8">
            <h3 className="text-h2 font-bold text-white mb-6 text-center">
              Stock Trading Benefits
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

      {/* CTA Section */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-trade p-12"
          >
            <h2 className="text-h1 font-bold text-white mb-6">
              Start Trading Stocks Today
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Join thousands of traders who trust trade.im for their stock trading needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <TrendingUp className="w-5 h-5" />
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