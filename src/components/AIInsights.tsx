'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, TrendingUp, TrendingDown, AlertTriangle, Target, Clock, Activity } from 'lucide-react'

interface AIInsight {
  symbol: string
  recommendation: 'buy' | 'sell' | 'hold'
  confidence: number
  reasons: string[]
  targetPrice: number
  currentPrice: number
  riskLevel: 'low' | 'medium' | 'high'
  timeHorizon: 'short' | 'medium' | 'long'
}

const AIInsights: React.FC = () => {
  // Mock AI insights data
  const insights: AIInsight[] = [
    {
      symbol: 'AAPL',
      recommendation: 'buy',
      confidence: 85,
      reasons: [
        'Strong technical momentum with RSI indicating oversold conditions',
        'Positive earnings surprise expected next quarter',
        'Growing services revenue and iPhone 15 demand'
      ],
      targetPrice: 195.50,
      currentPrice: 185.20,
      riskLevel: 'medium',
      timeHorizon: 'medium'
    },
    {
      symbol: 'BTC',
      recommendation: 'hold',
      confidence: 72,
      reasons: [
        'Consolidation phase after recent rally',
        'Institutional adoption continues to grow',
        'Regulatory clarity improving'
      ],
      targetPrice: 48000,
      currentPrice: 45200,
      riskLevel: 'high',
      timeHorizon: 'long'
    },
    {
      symbol: 'TSLA',
      recommendation: 'sell',
      confidence: 78,
      reasons: [
        'Overbought conditions on technical indicators',
        'Increased competition in EV market',
        'Profit margin pressure from price cuts'
      ],
      targetPrice: 220.00,
      currentPrice: 245.80,
      riskLevel: 'high',
      timeHorizon: 'short'
    }
  ]

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'buy':
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'sell':
        return <TrendingDown className="w-4 h-4 text-red-500" />
      case 'hold':
        return <Activity className="w-4 h-4 text-yellow-500" />
      default:
        return <Activity className="w-4 h-4 text-gray-400" />
    }
  }

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'buy':
        return 'text-green-500 bg-green-500/10 border-green-500/20'
      case 'sell':
        return 'text-red-500 bg-red-500/10 border-red-500/20'
      case 'hold':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20'
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'text-green-400'
      case 'medium':
        return 'text-yellow-400'
      case 'high':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-dark rounded-xl p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <Brain className="w-5 h-5 text-blue-500" />
        </div>
        <h3 className="text-lg font-semibold text-white">AI Market Insights</h3>
        <div className="flex items-center space-x-1 text-sm text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Live Analysis</span>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.symbol}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-white font-semibold">{insight.symbol}</span>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getRecommendationColor(insight.recommendation)}`}>
                  {getRecommendationIcon(insight.recommendation)}
                  <span className="uppercase">{insight.recommendation}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Confidence</div>
                <div className="text-white font-medium">{insight.confidence}%</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-blue-400" />
                <div className="text-sm">
                  <span className="text-gray-400">Target: </span>
                  <span className="text-white font-medium">
                    ${insight.targetPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <div className="text-sm">
                  <span className="text-gray-400">Risk: </span>
                  <span className={`font-medium ${getRiskColor(insight.riskLevel)}`}>
                    {insight.riskLevel.charAt(0).toUpperCase() + insight.riskLevel.slice(1)}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <div className="text-sm">
                  <span className="text-gray-400">Horizon: </span>
                  <span className="text-white font-medium">
                    {insight.timeHorizon.charAt(0).toUpperCase() + insight.timeHorizon.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700/50 pt-3">
              <div className="text-sm text-gray-400 mb-2">Key Reasons:</div>
              <ul className="space-y-1">
                {insight.reasons.map((reason, reasonIndex) => (
                  <li key={reasonIndex} className="text-sm text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Brain className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-400">AI Analysis Update</span>
        </div>
        <p className="text-sm text-gray-300">
          Our AI models are continuously analyzing market data, news sentiment, and technical indicators 
          to provide you with the most accurate trading insights.
        </p>
      </div>
    </motion.div>
  )
}

export default AIInsights