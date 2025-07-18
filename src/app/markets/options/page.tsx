'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  TrendingUp,
  TrendingDown,
  BarChart3,
  Target,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Calculator,
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Settings
} from 'lucide-react'
import Link from 'next/link'

export default function OptionsPage() {
  const [selectedStrategy, setSelectedStrategy] = useState('covered-call')

  const marketHighlights = [
    {
      metric: 'Options Volume',
      value: '45M',
      change: '+12%',
      trend: 'up',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      metric: 'Open Interest',
      value: '275M',
      change: '+8.5%',
      trend: 'up',
      icon: <Target className="w-6 h-6" />
    },
    {
      metric: 'VIX Level',
      value: '18.4',
      change: '-2.1%',
      trend: 'down',
      icon: <TrendingDown className="w-6 h-6" />
    },
    {
      metric: 'Avg IV',
      value: '22.8%',
      change: '+1.2%',
      trend: 'up',
      icon: <Calculator className="w-6 h-6" />
    }
  ]

  const optionStrategies = [
    {
      id: 'covered-call',
      name: 'Covered Call',
      description: 'Generate income from stock holdings by selling call options',
      risk: 'Low',
      reward: 'Limited',
      outlook: 'Neutral to Bullish',
      complexity: 'Beginner'
    },
    {
      id: 'protective-put',
      name: 'Protective Put',
      description: 'Protect stock positions from downside risk',
      risk: 'Low',
      reward: 'Unlimited',
      outlook: 'Bullish',
      complexity: 'Beginner'
    },
    {
      id: 'long-straddle',
      name: 'Long Straddle',
      description: 'Profit from significant price movement in either direction',
      risk: 'Limited',
      reward: 'Unlimited',
      outlook: 'Volatile',
      complexity: 'Intermediate'
    },
    {
      id: 'iron-condor',
      name: 'Iron Condor',
      description: 'Profit from low volatility with limited risk',
      risk: 'Limited',
      reward: 'Limited',
      outlook: 'Neutral',
      complexity: 'Advanced'
    },
    {
      id: 'bull-call-spread',
      name: 'Bull Call Spread',
      description: 'Profit from moderate upward price movement',
      risk: 'Limited',
      reward: 'Limited',
      outlook: 'Bullish',
      complexity: 'Intermediate'
    },
    {
      id: 'butterfly-spread',
      name: 'Butterfly Spread',
      description: 'Profit from minimal price movement',
      risk: 'Limited',
      reward: 'Limited',
      outlook: 'Neutral',
      complexity: 'Advanced'
    }
  ]

  const popularOptions = [
    {
      underlying: 'AAPL',
      strike: '185',
      expiry: '2024-02-16',
      type: 'CALL',
      price: '4.25',
      change: '+0.35',
      changePercent: 8.9,
      volume: '15.2K',
      iv: '24.5%',
      delta: '0.52'
    },
    {
      underlying: 'TSLA',
      strike: '250',
      expiry: '2024-02-16',
      type: 'PUT',
      price: '8.75',
      change: '-0.50',
      changePercent: -5.4,
      volume: '22.8K',
      iv: '45.2%',
      delta: '-0.43'
    },
    {
      underlying: 'SPY',
      strike: '475',
      expiry: '2024-02-16',
      type: 'CALL',
      price: '2.15',
      change: '+0.25',
      changePercent: 13.2,
      volume: '45.6K',
      iv: '18.9%',
      delta: '0.38'
    },
    {
      underlying: 'QQQ',
      strike: '390',
      expiry: '2024-02-16',
      type: 'PUT',
      price: '3.60',
      change: '-0.15',
      changePercent: -4.0,
      volume: '28.4K',
      iv: '21.3%',
      delta: '-0.35'
    }
  ]

  const features = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Options Calculator',
      description: 'Advanced options pricing and Greeks calculator',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategy Builder',
      description: 'Visual strategy builder with P&L analysis',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Chain Analysis',
      description: 'Complete options chain with volume and open interest',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Management',
      description: 'Portfolio Greeks and risk metrics monitoring',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const benefits = [
    'Hedge portfolio positions',
    'Generate additional income',
    'Leverage with limited risk',
    'Profit from volatility',
    'Flexible trading strategies',
    'Portfolio diversification'
  ]

  const riskFactors = [
    {
      factor: 'Time Decay',
      description: 'Options lose value as expiration approaches',
      impact: 'High',
      mitigation: 'Monitor theta and time to expiration'
    },
    {
      factor: 'Volatility Risk',
      description: 'Changes in implied volatility affect option prices',
      impact: 'High',
      mitigation: 'Use vega hedging strategies'
    },
    {
      factor: 'Liquidity Risk',
      description: 'Wide bid-ask spreads in illiquid options',
      impact: 'Medium',
      mitigation: 'Trade high-volume options'
    },
    {
      factor: 'Assignment Risk',
      description: 'Short options may be assigned early',
      impact: 'Medium',
      mitigation: 'Monitor in-the-money positions'
    }
  ]

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-500/20 text-green-400'
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400'
      case 'Advanced': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

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
              Advanced Options
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                Trading Platform
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Trade options with professional tools including Greeks calculator, 
              strategy builder, and comprehensive risk management features.
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
              Options Market Overview
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Real-time options market data and key metrics.
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

      {/* Options Strategies */}
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
              Popular Options Strategies
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Choose from proven strategies for different market conditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optionStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedStrategy(strategy.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-h4 font-semibold text-white">
                    {strategy.name}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getComplexityColor(strategy.complexity)}`}>
                    {strategy.complexity}
                  </span>
                </div>
                
                <p className="text-body-sm text-gray-400 mb-4">
                  {strategy.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk:</span>
                    <span className="text-white">{strategy.risk}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reward:</span>
                    <span className="text-white">{strategy.reward}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Outlook:</span>
                    <span className="text-white">{strategy.outlook}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Options */}
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
              Active Options
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Most actively traded options with real-time data.
            </p>
          </motion.div>

          <div className="card-trade overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-h3 font-semibold text-white">
                  Live Options Data
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
                    <th className="text-center p-4 text-gray-400 font-medium">Strike</th>
                    <th className="text-center p-4 text-gray-400 font-medium">Expiry</th>
                    <th className="text-center p-4 text-gray-400 font-medium">Type</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Price</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Change</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Volume</th>
                    <th className="text-right p-4 text-gray-400 font-medium">IV</th>
                    <th className="text-center p-4 text-gray-400 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {popularOptions.map((option, index) => (
                    <motion.tr
                      key={`${option.underlying}-${option.strike}-${option.type}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4 font-semibold text-white">{option.underlying}</td>
                      <td className="p-4 text-center text-gray-300 font-mono">{option.strike}</td>
                      <td className="p-4 text-center text-gray-300 font-mono">{option.expiry}</td>
                      <td className="p-4 text-center">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          option.type === 'CALL' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {option.type}
                        </span>
                      </td>
                      <td className="p-4 text-right text-white font-mono">${option.price}</td>
                      <td className="p-4 text-right">
                        <div className={`${option.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          <div className="font-mono">{option.change}</div>
                          <div className="text-sm">({option.changePercent >= 0 ? '+' : ''}{option.changePercent.toFixed(1)}%)</div>
                        </div>
                      </td>
                      <td className="p-4 text-right text-gray-300 font-mono">{option.volume}</td>
                      <td className="p-4 text-right text-gray-300 font-mono">{option.iv}</td>
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
              Professional Options Tools
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Advanced features for professional options trading.
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
              Options Trading Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-body text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
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
              Risk Management
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Understanding and managing options trading risks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {riskFactors.map((risk, index) => (
              <motion.div
                key={risk.factor}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-h4 font-semibold text-white">
                      {risk.factor}
                    </h3>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    risk.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                    risk.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {risk.impact} Risk
                  </span>
                </div>
                <p className="text-body-sm text-gray-400 mb-4">
                  {risk.description}
                </p>
                <div className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-green-400">
                    {risk.mitigation}
                  </span>
                </div>
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
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-h1 font-bold text-white mb-6">
              Start Options Trading
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Access professional options trading with advanced tools and strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <Target className="w-5 h-5" />
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