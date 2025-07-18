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
  RefreshCw,
  Star,
  ArrowRight,
  BookOpen,
  Shield,
  Zap,
  Users,
  Target
} from 'lucide-react'
import Link from 'next/link'

export default function ForexPage() {
  const [selectedPair, setSelectedPair] = useState('EURUSD')

  const marketHighlights = [
    {
      metric: 'Daily Volume',
      value: '$6.6T',
      change: '+2.1%',
      trend: 'up',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      metric: 'Active Pairs',
      value: '65+',
      change: '+3',
      trend: 'up',
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      metric: 'Spread (EUR/USD)',
      value: '0.1 pips',
      change: 'Tight',
      trend: 'up',
      icon: <Target className="w-6 h-6" />
    },
    {
      metric: 'Execution Speed',
      value: '< 10ms',
      change: 'Fast',
      trend: 'up',
      icon: <Zap className="w-6 h-6" />
    }
  ]

  const majorPairs = [
    {
      pair: 'EUR/USD',
      name: 'Euro / US Dollar',
      price: '1.0845',
      change: '0.0023',
      changePercent: 0.21,
      spread: '0.1',
      volume: '$1.2T',
      flag1: '🇪🇺',
      flag2: '🇺🇸'
    },
    {
      pair: 'GBP/USD',
      name: 'British Pound / US Dollar',
      price: '1.2734',
      change: '-0.0045',
      changePercent: -0.35,
      spread: '0.2',
      volume: '$384B',
      flag1: '🇬🇧',
      flag2: '🇺🇸'
    },
    {
      pair: 'USD/JPY',
      name: 'US Dollar / Japanese Yen',
      price: '149.85',
      change: '0.45',
      changePercent: 0.30,
      spread: '0.1',
      volume: '$554B',
      flag1: '🇺🇸',
      flag2: '🇯🇵'
    },
    {
      pair: 'USD/CHF',
      name: 'US Dollar / Swiss Franc',
      price: '0.8734',
      change: '0.0012',
      changePercent: 0.14,
      spread: '0.2',
      volume: '$243B',
      flag1: '🇺🇸',
      flag2: '🇨🇭'
    },
    {
      pair: 'AUD/USD',
      name: 'Australian Dollar / US Dollar',
      price: '0.6634',
      change: '-0.0023',
      changePercent: -0.35,
      spread: '0.2',
      volume: '$223B',
      flag1: '🇦🇺',
      flag2: '🇺🇸'
    },
    {
      pair: 'USD/CAD',
      name: 'US Dollar / Canadian Dollar',
      price: '1.3567',
      change: '0.0034',
      changePercent: 0.25,
      spread: '0.2',
      volume: '$218B',
      flag1: '🇺🇸',
      flag2: '🇨🇦'
    }
  ]

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Markets',
      description: 'Access major, minor, and exotic currency pairs from around the world',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Execution',
      description: 'Ultra-low latency execution with no requotes or slippage',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Tight Spreads',
      description: 'Competitive spreads starting from 0.1 pips on major pairs',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Regulation',
      description: 'Fully regulated broker with segregated client funds',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const tradingHours = [
    { session: 'Sydney', time: '22:00 - 07:00 GMT', status: 'closed' },
    { session: 'Tokyo', time: '00:00 - 09:00 GMT', status: 'closed' },
    { session: 'London', time: '08:00 - 17:00 GMT', status: 'open' },
    { session: 'New York', time: '13:00 - 22:00 GMT', status: 'open' }
  ]

  const benefits = [
    'Leverage up to 1:500 for qualified traders',
    'No commission on forex trades',
    'Advanced risk management tools',
    'Professional trading platforms',
    'Economic calendar and news',
    'Educational resources and analysis'
  ]

  const strategies = [
    {
      title: 'Scalping',
      description: 'Short-term trading strategy focusing on small price movements',
      timeframe: '1-5 minutes',
      difficulty: 'Advanced'
    },
    {
      title: 'Day Trading',
      description: 'Intraday trading with positions closed before market close',
      timeframe: '5 minutes - 4 hours',
      difficulty: 'Intermediate'
    },
    {
      title: 'Swing Trading',
      description: 'Medium-term trading holding positions for days to weeks',
      timeframe: '4 hours - Daily',
      difficulty: 'Beginner'
    },
    {
      title: 'Position Trading',
      description: 'Long-term trading based on fundamental analysis',
      timeframe: 'Weekly - Monthly',
      difficulty: 'Beginner'
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
              Trade Forex with
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                Professional Edge
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Access the world's largest financial market with tight spreads, fast execution, 
              and professional trading tools. Trade 65+ currency pairs 24/5.
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
              Forex Market Overview
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Real-time forex market data and trading conditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marketHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 text-center"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-400">
                    {highlight.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-2 font-mono">
                  {highlight.value}
                </div>
                <div className="text-sm text-gray-400 mb-2">{highlight.metric}</div>
                <div className="text-sm font-medium text-green-400">
                  {highlight.change}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trading Hours */}
          <div className="card-trade p-8">
            <h3 className="text-h2 font-bold text-white mb-6 text-center">
              Global Trading Sessions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tradingHours.map((session, index) => (
                <div key={session.session} className="text-center">
                  <div className="text-h4 font-semibold text-white mb-2">
                    {session.session}
                  </div>
                  <div className="text-body-sm text-gray-400 mb-2">
                    {session.time}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    session.status === 'open' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {session.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Currency Pairs */}
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
              Major Currency Pairs
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Trade the most liquid and popular currency pairs with tight spreads.
            </p>
          </motion.div>

          <div className="card-trade overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-h3 font-semibold text-white">
                  Live Forex Rates
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
                    <th className="text-left p-4 text-gray-400 font-medium">Pair</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Name</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Price</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Change</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Spread</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Volume</th>
                    <th className="text-center p-4 text-gray-400 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {majorPairs.map((pair, index) => (
                    <motion.tr
                      key={pair.pair}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <span className="text-lg">{pair.flag1}</span>
                            <span className="text-lg">{pair.flag2}</span>
                          </div>
                          <div className="font-semibold text-white font-mono">
                            {pair.pair}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-gray-300">{pair.name}</td>
                      <td className="p-4 text-right text-white font-mono">{pair.price}</td>
                      <td className="p-4 text-right">
                        <div className={`${pair.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          <div className="font-mono">{pair.changePercent >= 0 ? '+' : ''}{pair.change}</div>
                          <div className="text-sm">({pair.changePercent >= 0 ? '+' : ''}{pair.changePercent.toFixed(2)}%)</div>
                        </div>
                      </td>
                      <td className="p-4 text-right text-gray-300 font-mono">{pair.spread} pips</td>
                      <td className="p-4 text-right text-gray-300 font-mono">{pair.volume}</td>
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
              Why Choose Our Forex Trading
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Professional forex trading with institutional-grade technology and conditions.
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
              Forex Trading Benefits
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

      {/* Trading Strategies */}
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
              Popular Trading Strategies
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Learn about different forex trading strategies and find the one that suits your style.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-h4 font-semibold text-white">
                    {strategy.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    strategy.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    strategy.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {strategy.difficulty}
                  </span>
                </div>
                <p className="text-body-sm text-gray-400 mb-4">
                  {strategy.description}
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Timeframe: {strategy.timeframe}</span>
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
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-h1 font-bold text-white mb-6">
              Start Forex Trading Today
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Join the world's largest financial market with professional trading conditions.
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