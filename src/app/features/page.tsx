'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Globe,
  Clock,
  TrendingUp,
  Users,
  Award,
  Bot,
  Target,
  Eye,
  Layers,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze market patterns, predict trends, and provide actionable insights to help you make informed trading decisions.',
      features: [
        'Real-time sentiment analysis',
        'Pattern recognition algorithms',
        'Predictive market modeling',
        'Risk assessment tools'
      ],
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Lightning Fast Execution',
      description: 'Execute trades at sub-millisecond speeds with our institutional-grade infrastructure and direct market access.',
      features: [
        'Sub-millisecond latency',
        'Direct market access',
        'Smart order routing',
        '99.9% uptime guarantee'
      ],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Bank-Level Security',
      description: 'Multi-layer security architecture with cold storage, insurance protection, and regulatory compliance.',
      features: [
        'Multi-factor authentication',
        'Cold storage protection',
        'Insurance up to $500K',
        'Regulatory compliance'
      ],
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  const allFeatures = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Charting',
      description: 'Professional-grade charts with 100+ technical indicators, custom timeframes, and drawing tools.',
      category: 'Analysis'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Trading',
      description: 'Full-featured mobile app with all desktop capabilities, optimized for trading on the go.',
      category: 'Platform'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Markets',
      description: 'Access to stocks, forex, crypto, commodities, and options from markets worldwide.',
      category: 'Markets'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Automated Trading',
      description: 'Create and deploy trading bots with our intuitive strategy builder and backtesting tools.',
      category: 'Automation'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Risk Management',
      description: 'Advanced risk management tools including stop-loss, take-profit, and position sizing.',
      category: 'Risk'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Real-time Data',
      description: 'Live market data, news feeds, and economic calendars to stay ahead of market movements.',
      category: 'Data'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Portfolio Management',
      description: 'Comprehensive portfolio tracking, performance analytics, and rebalancing tools.',
      category: 'Management'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Trading',
      description: 'Follow successful traders, copy their strategies, and learn from the community.',
      category: 'Social'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with dedicated account managers for premium users.',
      category: 'Support'
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
              Powerful Features for
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                Professional Trading
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Discover the comprehensive suite of tools and features that make trade.im 
              the preferred choice for professional traders worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="card-trade p-8 h-full hover:scale-105 transition-transform duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-h2 font-bold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-body text-gray-300 leading-relaxed mb-6 text-center">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-body-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features Grid */}
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
              Complete Trading Suite
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to trade professionally, all in one integrated platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade-surface p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-h4 font-semibold text-white">
                        {feature.title}
                      </h4>
                      <span className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full">
                        {feature.category}
                      </span>
                    </div>
                    <p className="text-body-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
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
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-trade-success rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-h1 font-bold text-white mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Join thousands of professional traders who trust trade.im for their daily trading activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-trade-secondary text-lg px-8 py-4"
                >
                  View Pricing
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