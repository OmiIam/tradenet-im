'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Check,
  X,
  Star,
  Crown,
  Zap,
  Shield,
  Users,
  ArrowRight,
  DollarSign,
  TrendingUp,
  BarChart3,
  Smartphone,
  Clock,
  Phone
} from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      period: 'Free Forever',
      description: 'Perfect for beginners getting started with trading',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500',
      features: [
        'Real-time market data',
        'Basic charting tools',
        'Up to 10 trades per month',
        'Email support',
        'Mobile app access',
        'Basic portfolio tracking'
      ],
      limitations: [
        'Limited to 3 watchlists',
        'No advanced indicators',
        'Basic market analysis',
        'Standard execution speed'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Professional',
      price: '29',
      period: 'per month',
      description: 'Advanced tools for serious traders',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      features: [
        'Everything in Starter',
        'Advanced charting with 100+ indicators',
        'Unlimited trades',
        'AI-powered insights',
        'Priority support',
        'Advanced portfolio analytics',
        'Risk management tools',
        'Market screeners',
        'Trading alerts',
        'API access'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '99',
      period: 'per month',
      description: 'Premium features for institutional traders',
      icon: <Crown className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Everything in Professional',
        'Institutional-grade execution',
        'Dedicated account manager',
        'Custom indicators & strategies',
        'Advanced order types',
        'Multi-account management',
        'White-label solutions',
        'Direct market access',
        'Custom integrations',
        '24/7 phone support'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  const comparisonFeatures = [
    {
      category: 'Trading Features',
      features: [
        { name: 'Real-time market data', starter: true, professional: true, enterprise: true },
        { name: 'Basic charting', starter: true, professional: true, enterprise: true },
        { name: 'Advanced indicators (100+)', starter: false, professional: true, enterprise: true },
        { name: 'AI-powered insights', starter: false, professional: true, enterprise: true },
        { name: 'Custom indicators', starter: false, professional: false, enterprise: true },
        { name: 'Automated trading', starter: false, professional: true, enterprise: true },
        { name: 'Advanced order types', starter: false, professional: true, enterprise: true },
        { name: 'Direct market access', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      category: 'Account Features',
      features: [
        { name: 'Portfolio tracking', starter: true, professional: true, enterprise: true },
        { name: 'Trade history', starter: true, professional: true, enterprise: true },
        { name: 'Performance analytics', starter: false, professional: true, enterprise: true },
        { name: 'Risk management tools', starter: false, professional: true, enterprise: true },
        { name: 'Multi-account management', starter: false, professional: false, enterprise: true },
        { name: 'White-label solutions', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      category: 'Support & Access',
      features: [
        { name: 'Email support', starter: true, professional: true, enterprise: true },
        { name: 'Priority support', starter: false, professional: true, enterprise: true },
        { name: 'Phone support', starter: false, professional: false, enterprise: true },
        { name: 'Dedicated account manager', starter: false, professional: false, enterprise: true },
        { name: 'API access', starter: false, professional: true, enterprise: true },
        { name: 'Custom integrations', starter: false, professional: false, enterprise: true }
      ]
    }
  ]

  const faqs = [
    {
      question: 'Can I switch plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you\'ll be charged or credited accordingly.'
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes, we offer a 14-day free trial for both Professional and Enterprise plans. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments for annual subscriptions.'
    },
    {
      question: 'Do you offer discounts for annual plans?',
      answer: 'Yes, annual subscribers get 2 months free (16.7% discount) and priority access to new features.'
    },
    {
      question: 'What happens if I exceed my trade limits?',
      answer: 'For the Starter plan, you can upgrade anytime. We\'ll notify you before you reach your limits and offer seamless upgrade options.'
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
              Simple, Transparent
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                Pricing
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your trading needs. Start free and upgrade as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative card-trade p-8 ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-h2 font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-body-sm text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-body-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-body-sm text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.name === 'Enterprise' ? '/contact' : '/signup'}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${plan.popular ? 'btn-trade-primary' : 'btn-trade-secondary'}`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
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
              Compare All Features
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              See exactly what's included in each plan to make the best choice for your trading needs.
            </p>
          </motion.div>

          <div className="card-trade overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">Starter</th>
                    <th className="text-center p-6 text-white font-semibold">Professional</th>
                    <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <React.Fragment key={category.category}>
                      <tr className="border-b border-white/10">
                        <td colSpan={4} className="p-6 bg-white/5">
                          <h3 className="text-h4 font-semibold text-white">{category.category}</h3>
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-white/10">
                          <td className="p-6 text-gray-300">{feature.name}</td>
                          <td className="text-center p-6">
                            {feature.starter ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                          <td className="text-center p-6">
                            {feature.professional ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                          <td className="text-center p-6">
                            {feature.enterprise ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-body-lg text-gray-300">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade-surface p-6"
              >
                <h3 className="text-h4 font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-body text-gray-300">
                  {faq.answer}
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
            <h2 className="text-h1 font-bold text-white mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Join thousands of traders who trust trade.im. Start with our free plan and upgrade as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Start Free Today</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-trade-secondary text-lg px-8 py-4"
                >
                  Contact Sales
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