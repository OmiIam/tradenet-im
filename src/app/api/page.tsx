'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Code,
  Book,
  Key,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  Copy,
  ExternalLink,
  Terminal,
  Server,
  Database,
  Cpu,
  Clock,
  BarChart3,
  TrendingUp
} from 'lucide-react'

export default function APIPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null)

  const apiFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Sub-millisecond response times with 99.9% uptime guarantee',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Bank-level security with comprehensive rate limiting and monitoring',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Access',
      description: 'Worldwide availability with regional endpoints for optimal performance',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Real-time Data',
      description: 'Live market data, WebSocket support, and streaming capabilities',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const endpoints = [
    {
      category: 'Market Data',
      endpoints: [
        { method: 'GET', path: '/api/v1/market/ticker/{symbol}', description: 'Get current ticker data' },
        { method: 'GET', path: '/api/v1/market/depth/{symbol}', description: 'Get order book depth' },
        { method: 'GET', path: '/api/v1/market/trades/{symbol}', description: 'Get recent trades' },
        { method: 'GET', path: '/api/v1/market/klines/{symbol}', description: 'Get candlestick data' }
      ]
    },
    {
      category: 'Trading',
      endpoints: [
        { method: 'POST', path: '/api/v1/order', description: 'Place a new order' },
        { method: 'GET', path: '/api/v1/order/{orderId}', description: 'Get order status' },
        { method: 'DELETE', path: '/api/v1/order/{orderId}', description: 'Cancel an order' },
        { method: 'GET', path: '/api/v1/orders', description: 'Get all orders' }
      ]
    },
    {
      category: 'Account',
      endpoints: [
        { method: 'GET', path: '/api/v1/account', description: 'Get account information' },
        { method: 'GET', path: '/api/v1/account/balance', description: 'Get account balance' },
        { method: 'GET', path: '/api/v1/account/trades', description: 'Get trade history' },
        { method: 'GET', path: '/api/v1/account/deposits', description: 'Get deposit history' }
      ]
    }
  ]

  const sdks = [
    {
      language: 'JavaScript',
      icon: '🟨',
      installation: 'npm install @trade-im/sdk',
      example: `import { TradeIM } from '@trade-im/sdk';

const client = new TradeIM({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret'
});

const ticker = await client.getTicker('BTCUSDT');
console.log(ticker);`
    },
    {
      language: 'Python',
      icon: '🐍',
      installation: 'pip install trade-im',
      example: `from trade_im import TradeIM

client = TradeIM(
    api_key='your-api-key',
    api_secret='your-api-secret'
)

ticker = client.get_ticker('BTCUSDT')
print(ticker)`
    },
    {
      language: 'Go',
      icon: '🔷',
      installation: 'go get github.com/trade-im/go-sdk',
      example: `import "github.com/trade-im/go-sdk"

client := tradeim.NewClient(
    "your-api-key",
    "your-api-secret",
)

ticker, err := client.GetTicker("BTCUSDT")
if err != nil {
    log.Fatal(err)
}
fmt.Println(ticker)`
    }
  ]

  const rateLimits = [
    { tier: 'Free', requests: '100/hour', websocket: '5 connections', priority: 'Standard' },
    { tier: 'Professional', requests: '10,000/hour', websocket: '50 connections', priority: 'High' },
    { tier: 'Enterprise', requests: 'Unlimited', websocket: 'Unlimited', priority: 'Premium' }
  ]

  const handleCopyEndpoint = (endpoint: string) => {
    navigator.clipboard.writeText(`https://api.trade.im${endpoint}`)
    setCopiedEndpoint(endpoint)
    setTimeout(() => setCopiedEndpoint(null), 2000)
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-500'
      case 'POST': return 'bg-blue-500'
      case 'DELETE': return 'bg-red-500'
      case 'PUT': return 'bg-yellow-500'
      default: return 'bg-gray-500'
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
              Powerful Trading
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                API & SDKs
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Build powerful trading applications with our comprehensive REST API and WebSocket feeds. 
              Access real-time market data, execute trades, and manage your portfolio programmatically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Features */}
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
              Built for Developers
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Our API is designed with developers in mind, offering reliability, performance, and ease of use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => (
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
        </div>
      </section>

      {/* API Documentation */}
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
              API Endpoints
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive API endpoints for all your trading needs.
            </p>
          </motion.div>

          <div className="space-y-12">
            {endpoints.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="card-trade p-8"
              >
                <h3 className="text-h2 font-bold text-white mb-6 flex items-center">
                  <Terminal className="w-6 h-6 mr-3 text-primary-400" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="card-trade-surface p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className={`px-2 py-1 text-xs font-medium text-white rounded ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </span>
                          <code className="text-primary-400 font-mono">
                            {endpoint.path}
                          </code>
                        </div>
                        <button
                          onClick={() => handleCopyEndpoint(endpoint.path)}
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                        >
                          {copiedEndpoint === endpoint.path ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <p className="text-body-sm text-gray-400 mt-2">
                        {endpoint.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
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
              Official SDKs
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our official SDKs for popular programming languages.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.language}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-trade p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">{sdk.icon}</span>
                  <h3 className="text-h3 font-bold text-white">{sdk.language}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-h4 font-semibold text-white mb-2">Installation</h4>
                  <div className="bg-black/30 rounded-lg p-3">
                    <code className="text-green-400 font-mono text-sm">
                      {sdk.installation}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="text-h4 font-semibold text-white mb-2">Example</h4>
                  <div className="bg-black/30 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
                      {sdk.example}
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits */}
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
              Rate Limits & Pricing
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Choose the right tier for your application's needs.
            </p>
          </motion.div>

          <div className="card-trade overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-semibold">Tier</th>
                    <th className="text-center p-6 text-white font-semibold">API Requests</th>
                    <th className="text-center p-6 text-white font-semibold">WebSocket</th>
                    <th className="text-center p-6 text-white font-semibold">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {rateLimits.map((limit, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="p-6 text-white font-medium">{limit.tier}</td>
                      <td className="text-center p-6 text-gray-300">{limit.requests}</td>
                      <td className="text-center p-6 text-gray-300">{limit.websocket}</td>
                      <td className="text-center p-6">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          limit.priority === 'Premium' ? 'bg-yellow-500/20 text-yellow-400' :
                          limit.priority === 'High' ? 'bg-green-500/20 text-green-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {limit.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
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
              Ready to Start Building?
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Get your API keys and start building powerful trading applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Key className="w-5 h-5" />
                <span>Get API Keys</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-trade-secondary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Book className="w-5 h-5" />
                <span>View Documentation</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}