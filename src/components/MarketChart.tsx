'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'

interface MarketChartProps {
  data: Array<{
    time: string
    price: number
    volume?: number
  }>
  symbol: string
  type?: 'line' | 'area'
  height?: number
  color?: string
}

const MarketChart: React.FC<MarketChartProps> = ({
  data,
  symbol,
  type = 'area',
  height = 300,
  color = '#3b82f6'
}) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value)
  }

  const formatTime = (time: string) => {
    return new Date(time).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-lg">
          <p className="text-gray-300 text-sm">{`Time: ${formatTime(label)}`}</p>
          <p className="text-white font-medium">
            {`${symbol}: ${formatPrice(payload[0].value)}`}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-dark rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">{symbol} Price Chart</h3>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            1D
          </button>
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors">
            1W
          </button>
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors">
            1M
          </button>
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors">
            1Y
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={height}>
        {type === 'area' ? (
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="time"
              tickFormatter={formatTime}
              stroke="#9ca3af"
              fontSize={12}
            />
            <YAxis
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              stroke="#9ca3af"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke={color}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        ) : (
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="time"
              tickFormatter={formatTime}
              stroke="#9ca3af"
              fontSize={12}
            />
            <YAxis
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              stroke="#9ca3af"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </motion.div>
  )
}

export default MarketChart