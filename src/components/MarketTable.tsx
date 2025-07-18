'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, TrendingUp, TrendingDown, Plus } from 'lucide-react'

interface MarketData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: number
  marketCap: number
  isWatchlisted: boolean
}

interface MarketTableProps {
  data: MarketData[]
  title: string
  type: 'stocks' | 'crypto'
}

const MarketTable: React.FC<MarketTableProps> = ({ data, title, type }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  }

  const formatVolume = (volume: number) => {
    if (volume >= 1e9) return `${(volume / 1e9).toFixed(1)}B`
    if (volume >= 1e6) return `${(volume / 1e6).toFixed(1)}M`
    if (volume >= 1e3) return `${(volume / 1e3).toFixed(1)}K`
    return volume.toString()
  }

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) return `${(marketCap / 1e12).toFixed(1)}T`
    if (marketCap >= 1e9) return `${(marketCap / 1e9).toFixed(1)}B`
    if (marketCap >= 1e6) return `${(marketCap / 1e6).toFixed(1)}M`
    return marketCap.toString()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-dark rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            All
          </button>
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors">
            Gainers
          </button>
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors">
            Losers
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Symbol</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Name</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Price</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Change</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Volume</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Market Cap</th>
              <th className="text-center py-3 px-2 text-sm font-medium text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <motion.tr
                key={item.symbol}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
              >
                <td className="py-3 px-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {item.symbol.substring(0, 2)}
                    </div>
                    <span className="text-white font-medium">{item.symbol}</span>
                  </div>
                </td>
                <td className="py-3 px-2 text-gray-300">{item.name}</td>
                <td className="py-3 px-2 text-right text-white font-medium">
                  {formatPrice(item.price)}
                </td>
                <td className="py-3 px-2 text-right">
                  <div className="flex items-center justify-end space-x-1">
                    {item.change > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`font-medium ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}
                    </span>
                    <span className={`text-sm ${item.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      ({item.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </td>
                <td className="py-3 px-2 text-right text-gray-300">
                  {formatVolume(item.volume)}
                </td>
                <td className="py-3 px-2 text-right text-gray-300">
                  {formatMarketCap(item.marketCap)}
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center justify-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-1 rounded-full transition-colors ${
                        item.isWatchlisted 
                          ? 'text-yellow-500 hover:text-yellow-400' 
                          : 'text-gray-400 hover:text-yellow-500'
                      }`}
                    >
                      <Star className="w-4 h-4" fill={item.isWatchlisted ? 'currentColor' : 'none'} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 rounded-full text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default MarketTable