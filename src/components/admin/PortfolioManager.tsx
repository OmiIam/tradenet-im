'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  PieChart, 
  Plus, 
  Edit, 
  Trash2, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Activity,
  BarChart3,
  Target
} from 'lucide-react'
import { AdminUser, AdminPosition, PortfolioPosition } from '@/types/admin'

interface PortfolioManagerProps {
  users: AdminUser[]
  onUpdatePortfolio: (userId: string, positions: PortfolioPosition[]) => void
}

const PortfolioManager: React.FC<PortfolioManagerProps> = ({ users, onUpdatePortfolio }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null)
  const [showPositionModal, setShowPositionModal] = useState(false)
  const [positionForm, setPositionForm] = useState({
    symbol: '',
    quantity: '',
    averagePrice: '',
    action: 'add' as 'add' | 'update' | 'remove'
  })

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Mock portfolio positions data
  const getPortfolioPositions = (userId: string): AdminPosition[] => {
    const positions: AdminPosition[] = [
      {
        id: '1',
        userId,
        symbol: 'AAPL',
        name: 'Apple Inc.',
        type: 'stock',
        quantity: 100,
        averagePrice: 150.00,
        currentPrice: 185.20,
        totalValue: 18520,
        unrealizedGain: 3520,
        unrealizedGainPercent: 23.47,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        userId,
        symbol: 'BTC',
        name: 'Bitcoin',
        type: 'crypto',
        quantity: 0.5,
        averagePrice: 40000,
        currentPrice: 45234.56,
        totalValue: 22617.28,
        unrealizedGain: 2617.28,
        unrealizedGainPercent: 13.09,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        userId,
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        type: 'stock',
        quantity: 50,
        averagePrice: 380.00,
        currentPrice: 378.90,
        totalValue: 18945,
        unrealizedGain: -55,
        unrealizedGainPercent: -0.29,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return positions
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const handleAddPosition = () => {
    if (!selectedUser || !positionForm.symbol || !positionForm.quantity || !positionForm.averagePrice) return

    const position: PortfolioPosition = {
      symbol: positionForm.symbol.toUpperCase(),
      quantity: parseFloat(positionForm.quantity),
      averagePrice: parseFloat(positionForm.averagePrice),
      action: positionForm.action
    }

    onUpdatePortfolio(selectedUser.id, [position])
    setShowPositionModal(false)
    setPositionForm({ symbol: '', quantity: '', averagePrice: '', action: 'add' })
  }

  const popularSymbols = [
    'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'META', 'NFLX',
    'BTC', 'ETH', 'BNB', 'ADA', 'SOL', 'DOT', 'AVAX', 'MATIC'
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Portfolio Manager</h2>
          <p className="text-gray-400">Manage user portfolios and positions</p>
        </div>
      </div>

      {/* Search and Overview */}
      <div className="glass-dark rounded-xl p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search users to manage portfolios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {users.filter(u => u.portfolioValue > 0).length}
              </div>
              <div className="text-sm text-gray-400">Active Portfolios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {formatCurrency(users.reduce((sum, u) => sum + u.portfolioValue, 0))}
              </div>
              <div className="text-sm text-gray-400">Total Portfolio Value</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {((users.reduce((sum, u) => sum + u.winRate, 0) / users.length) || 0).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-400">Avg Win Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Users List */}
        <div className="glass-dark rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">User Portfolios</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredUsers.map((user) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors cursor-pointer"
                onClick={() => setSelectedUser(user)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user.firstName[0]}{user.lastName[0]}
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-gray-400 text-sm">{user.email}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">
                      {formatCurrency(user.portfolioValue)}
                    </div>
                    <div className="text-sm text-gray-400">
                      {user.totalTrades} trades
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      user.winRate >= 70 ? 'text-green-400' : 
                      user.winRate >= 50 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {user.winRate.toFixed(1)}% Win Rate
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedUser(user)
                      setShowPositionModal(true)
                    }}
                    className="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-lg transition-colors"
                  >
                    Manage
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Portfolio Details */}
        <div className="glass-dark rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-4">
            <PieChart className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">
              {selectedUser ? `${selectedUser.firstName}'s Portfolio` : 'Select a User'}
            </h3>
          </div>
          
          {selectedUser ? (
            <div className="space-y-4">
              {/* Portfolio Overview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-400">Total Value</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {formatCurrency(selectedUser.portfolioValue)}
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-400">Total Trades</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {selectedUser.totalTrades}
                  </div>
                </div>
              </div>

              {/* Positions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">Positions</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowPositionModal(true)}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors flex items-center space-x-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Position</span>
                  </motion.button>
                </div>
                
                {getPortfolioPositions(selectedUser.id).map((position) => (
                  <div key={position.id} className="bg-gray-800/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {position.symbol.substring(0, 2)}
                        </div>
                        <div>
                          <div className="text-white font-medium">{position.symbol}</div>
                          <div className="text-gray-400 text-xs">{position.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium">
                          {formatCurrency(position.totalValue)}
                        </div>
                        <div className={`text-xs ${
                          position.unrealizedGain >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {position.unrealizedGain >= 0 ? '+' : ''}
                          {formatCurrency(position.unrealizedGain)} ({position.unrealizedGainPercent.toFixed(2)}%)
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Qty: {position.quantity}</span>
                      <span>Avg: {formatCurrency(position.averagePrice)}</span>
                      <span>Current: {formatCurrency(position.currentPrice)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <PieChart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Select a user to view their portfolio</p>
            </div>
          )}
        </div>
      </div>

      {/* Position Modal */}
      {showPositionModal && selectedUser && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Add Position - {selectedUser.firstName} {selectedUser.lastName}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Symbol
                </label>
                <input
                  type="text"
                  value={positionForm.symbol}
                  onChange={(e) => setPositionForm({
                    ...positionForm,
                    symbol: e.target.value.toUpperCase()
                  })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="e.g., AAPL, BTC"
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {popularSymbols.map(symbol => (
                    <motion.button
                      key={symbol}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setPositionForm({
                        ...positionForm,
                        symbol
                      })}
                      className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-colors"
                    >
                      {symbol}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  value={positionForm.quantity}
                  onChange={(e) => setPositionForm({
                    ...positionForm,
                    quantity: e.target.value
                  })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Average Price
                </label>
                <input
                  type="number"
                  value={positionForm.averagePrice}
                  onChange={(e) => setPositionForm({
                    ...positionForm,
                    averagePrice: e.target.value
                  })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter average price"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Action
                </label>
                <select
                  value={positionForm.action}
                  onChange={(e) => setPositionForm({
                    ...positionForm,
                    action: e.target.value as 'add' | 'update' | 'remove'
                  })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="add">Add Position</option>
                  <option value="update">Update Position</option>
                  <option value="remove">Remove Position</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setShowPositionModal(false)
                  setPositionForm({ symbol: '', quantity: '', averagePrice: '', action: 'add' })
                }}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddPosition}
                disabled={!positionForm.symbol || !positionForm.quantity || !positionForm.averagePrice}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                Add Position
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default PortfolioManager