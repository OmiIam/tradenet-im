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
  Coins,
  Star,
  Search,
  Filter,
  ArrowRight,
  Eye,
  BookOpen,
  Award,
  Shield,
  Zap,
  Bitcoin,
  Cpu
} from 'lucide-react'
import Link from 'next/link'

export default function CryptoPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const marketHighlights = [
    {
      metric: 'Total Market Cap',
      value: '$1.73T',
      change: '+3.24%',
      trend: 'up',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      metric: 'Bitcoin Dominance',
      value: '52.3%',
      change: '+0.8%',
      trend: 'up',
      icon: <Bitcoin className="w-6 h-6" />
    },
    {
      metric: '24h Volume',
      value: '$89.2B',
      change: '+15.7%',
      trend: 'up',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      metric: 'Active Cryptos',
      value: '2,500+',
      change: '+42',
      trend: 'up',
      icon: <Coins className="w-6 h-6" />
    }
  ]

  const cryptoCategories = [
    { id: 'all', name: 'All Cryptos', count: '2,500+' },
    { id: 'bitcoin', name: 'Bitcoin', count: '1' },
    { id: 'ethereum', name: 'Ethereum', count: '1' },
    { id: 'altcoins', name: 'Altcoins', count: '2,000+' },
    { id: 'defi', name: 'DeFi', count: '300+' },
    { id: 'nft', name: 'NFT', count: '150+' }
  ]

  const topCryptos = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 45234.56,
      change: 1234.78,
      changePercent: 2.81,
      volume: '$28.9B',
      marketCap: '$885B',
      category: 'Currency',
      logo: '₿'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2456.89,
      change: -45.23,
      changePercent: -1.81,
      volume: '$12.4B',
      marketCap: '$295B',
      category: 'Smart Contract',
      logo: '♦'
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      price: 312.45,
      change: 8.90,
      changePercent: 2.93,
      volume: '$890M',
      marketCap: '$47.8B',
      category: 'Exchange',
      logo: '🔶'
    },
    {
      symbol: 'XRP',
      name: 'Ripple',
      price: 0.6234,
      change: 0.0234,
      changePercent: 3.90,
      volume: '$1.2B',
      marketCap: '$33.5B',
      category: 'Payment',
      logo: '💧'
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.5234,
      change: 0.0234,
      changePercent: 4.68,
      volume: '$445M',
      marketCap: '$18.2B',
      category: 'Smart Contract',
      logo: '🔷'
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: 98.45,
      change: 2.34,
      changePercent: 2.43,
      volume: '$1.8B',
      marketCap: '$42.3B',
      category: 'Smart Contract',
      logo: '🌞'
    }
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: '24/7 Trading',
      description: 'Trade cryptocurrencies around the clock, 365 days a year',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cold Storage',
      description: '95% of funds stored in secure cold storage wallets',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Tools',
      description: 'Professional charting and analysis tools for crypto',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Access',
      description: 'Access major cryptocurrencies from around the world',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    'Low trading fees (0.1% maker, 0.2% taker)',
    'Advanced order types (limit, market, stop)',
    'Real-time market data and charts',
    'Secure multi-signature wallets',
    'DeFi integration and staking rewards',
    'Mobile app with full functionality'
  ]

  const cryptoInsights = [
    {
      title: 'Bitcoin Halving Impact',
      description: 'Analysis of upcoming Bitcoin halving event and its potential market impact',
      category: 'Analysis',
      readTime: '5 min read'
    },
    {
      title: 'DeFi Trends 2024',
      description: 'Exploring the latest trends in decentralized finance protocols',
      category: 'Research',
      readTime: '8 min read'
    },
    {
      title: 'Ethereum 2.0 Upgrade',
      description: 'Understanding the implications of Ethereum\'s proof-of-stake transition',
      category: 'Technology',
      readTime: '6 min read'
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
              Trade Cryptocurrency
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                24/7 with Confidence
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Access the world's largest cryptocurrency markets with advanced trading tools, 
              secure storage, and institutional-grade security.
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
              Crypto Market Overview
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Real-time cryptocurrency market data and key metrics.
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

      {/* Crypto Categories */}
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
              Cryptocurrency Categories
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Explore cryptocurrencies by category and use case.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoCategories.map((category, index) => (
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
                    Available assets
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cryptocurrencies */}
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
              Top Cryptocurrencies
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Most popular cryptocurrencies by market capitalization.
            </p>
          </motion.div>

          <div className="card-trade overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-h3 font-semibold text-white">
                  Live Crypto Prices
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
                    <th className="text-left p-4 text-gray-400 font-medium">Rank</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Name</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Price</th>
                    <th className="text-right p-4 text-gray-400 font-medium">24h Change</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Volume</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Market Cap</th>
                    <th className="text-center p-4 text-gray-400 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {topCryptos.map((crypto, index) => (
                    <motion.tr
                      key={crypto.symbol}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4 text-gray-300 font-mono">#{index + 1}</td>
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{crypto.logo}</span>
                          <div>
                            <div className="font-semibold text-white">{crypto.symbol}</div>
                            <div className="text-sm text-gray-400">{crypto.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right text-white font-mono">
                        ${crypto.price >= 1 ? crypto.price.toFixed(2) : crypto.price.toFixed(4)}
                      </td>
                      <td className="p-4 text-right">
                        <div className={`${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          <div className="font-mono">
                            {crypto.change >= 0 ? '+' : ''}
                            {crypto.price >= 1 ? crypto.change.toFixed(2) : crypto.change.toFixed(4)}
                          </div>
                          <div className="text-sm">({crypto.changePercent >= 0 ? '+' : ''}{crypto.changePercent.toFixed(2)}%)</div>
                        </div>
                      </td>
                      <td className="p-4 text-right text-gray-300 font-mono">{crypto.volume}</td>
                      <td className="p-4 text-right text-gray-300 font-mono">{crypto.marketCap}</td>
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
              Why Trade Crypto with Us
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Professional-grade cryptocurrency trading platform with advanced security.
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
          <div className="card-trade p-8 mb-16">
            <h3 className="text-h2 font-bold text-white mb-6 text-center">
              Crypto Trading Benefits
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

          {/* Crypto Insights */}
          <div className="grid md:grid-cols-3 gap-8">
            {cryptoInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-400">{insight.readTime}</span>
                </div>
                <h4 className="text-h4 font-semibold text-white mb-3">
                  {insight.title}
                </h4>
                <p className="text-body-sm text-gray-400 mb-4">
                  {insight.description}
                </p>
                <div className="flex items-center text-primary-400 hover:text-primary-300 transition-colors cursor-pointer">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm">Read More</span>
                </div>
              </motion.div>
            ))}
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
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bitcoin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-h1 font-bold text-white mb-6">
              Start Trading Crypto Today
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Join the future of finance with secure, professional cryptocurrency trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <Coins className="w-5 h-5" />
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