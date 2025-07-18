'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: number
  changePercent: number
  icon?: React.ReactNode
  className?: string
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  changePercent,
  icon,
  className = ''
}) => {
  const isPositive = change > 0
  const isNegative = change < 0
  const isNeutral = change === 0

  const getTrendIcon = () => {
    if (isPositive) return <TrendingUp className="w-4 h-4" />
    if (isNegative) return <TrendingDown className="w-4 h-4" />
    return <Minus className="w-4 h-4" />
  }

  const getTrendColor = () => {
    if (isPositive) return 'text-trading-green'
    if (isNegative) return 'text-trading-red'
    return 'text-gray-400'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={`glass-dark rounded-xl p-6 hover:bg-white/5 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl font-bold text-white">{value}</div>
        
        <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
          {getTrendIcon()}
          <span className="text-sm font-medium">
            {isPositive ? '+' : ''}{change.toFixed(2)}
          </span>
          <span className="text-sm">
            ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default StatsCard