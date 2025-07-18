'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  DollarSign, 
  PieChart, 
  Activity, 
  Settings, 
  BarChart3,
  UserCheck,
  Wallet,
  TrendingUp,
  Shield,
  LogOut
} from 'lucide-react'

interface AdminSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'balances', label: 'Balance Manager', icon: Wallet },
    { id: 'portfolios', label: 'Portfolio Manager', icon: PieChart },
    { id: 'transactions', label: 'Transactions', icon: Activity },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Admin Panel</h2>
            <p className="text-gray-400 text-sm">TradePro Management</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 w-64 p-6 border-t border-gray-800">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <UserCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-medium">Admin User</p>
            <p className="text-gray-400 text-sm">admin@tradepro.com</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </motion.button>
      </div>
    </div>
  )
}

export default AdminSidebar