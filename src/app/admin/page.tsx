'use client'

import React, { useState } from 'react'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminStatsComponent from '@/components/admin/AdminStats'
import UserManagement from '@/components/admin/UserManagement'
import BalanceManager from '@/components/admin/BalanceManager'
import PortfolioManager from '@/components/admin/PortfolioManager'
import { AdminUser, AdminStats, BalanceAdjustment, PortfolioPosition } from '@/types/admin'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock admin data
  const adminStats: AdminStats = {
    totalUsers: 1247,
    activeUsers: 1089,
    suspendedUsers: 23,
    totalPortfolioValue: 45678900,
    totalTrades: 15678,
    todayTrades: 1234,
    totalRevenue: 234567,
    monthlyRevenue: 45678
  }

  const mockUsers: AdminUser[] = [
    {
      id: 'user1',
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      role: 'user',
      status: 'active',
      createdAt: new Date('2024-01-15'),
      lastLogin: new Date('2024-01-18'),
      totalBalance: 25000,
      portfolioValue: 45000,
      totalTrades: 234,
      winRate: 78.5
    },
    {
      id: 'user2',
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      role: 'user',
      status: 'active',
      createdAt: new Date('2024-01-10'),
      lastLogin: new Date('2024-01-18'),
      totalBalance: 15000,
      portfolioValue: 32000,
      totalTrades: 156,
      winRate: 65.2
    },
    {
      id: 'user3',
      email: 'bob.johnson@example.com',
      firstName: 'Bob',
      lastName: 'Johnson',
      role: 'user',
      status: 'suspended',
      createdAt: new Date('2024-01-05'),
      lastLogin: new Date('2024-01-16'),
      totalBalance: 5000,
      portfolioValue: 12000,
      totalTrades: 89,
      winRate: 45.3
    },
    {
      id: 'user4',
      email: 'alice.brown@example.com',
      firstName: 'Alice',
      lastName: 'Brown',
      role: 'user',
      status: 'active',
      createdAt: new Date('2024-01-12'),
      lastLogin: new Date('2024-01-18'),
      totalBalance: 35000,
      portfolioValue: 67000,
      totalTrades: 345,
      winRate: 82.1
    },
    {
      id: 'user5',
      email: 'charlie.wilson@example.com',
      firstName: 'Charlie',
      lastName: 'Wilson',
      role: 'user',
      status: 'inactive',
      createdAt: new Date('2024-01-08'),
      lastLogin: new Date('2024-01-14'),
      totalBalance: 8000,
      portfolioValue: 15000,
      totalTrades: 67,
      winRate: 58.7
    }
  ]

  const [users, setUsers] = useState<AdminUser[]>(mockUsers)

  const handleEditUser = (user: AdminUser) => {
    console.log('Edit user:', user)
    // Implementation for editing user
  }

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId))
    console.log('Delete user:', userId)
  }

  const handleToggleStatus = (userId: string, status: 'active' | 'suspended') => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status } : user
    ))
    console.log('Toggle status:', userId, status)
  }

  const handleAdjustBalance = (adjustment: BalanceAdjustment) => {
    setUsers(users.map(user => {
      if (user.id === adjustment.userId) {
        let newBalance = user.totalBalance
        switch (adjustment.adjustmentType) {
          case 'add':
            newBalance += adjustment.amount
            break
          case 'subtract':
            newBalance -= adjustment.amount
            break
          case 'set':
            newBalance = adjustment.amount
            break
        }
        return { ...user, totalBalance: Math.max(0, newBalance) }
      }
      return user
    }))
    console.log('Adjust balance:', adjustment)
  }

  const handleUpdatePortfolio = (userId: string, positions: PortfolioPosition[]) => {
    console.log('Update portfolio:', userId, positions)
    // Implementation for updating portfolio
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Admin Overview</h1>
              <p className="text-gray-400">Monitor platform performance and user activity</p>
            </div>
            <AdminStatsComponent stats={adminStats} />
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => setActiveTab('users')}
              >
                <h3 className="text-lg font-semibold text-white mb-2">User Management</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Manage user accounts, status, and permissions
                </p>
                <div className="text-blue-400 font-medium">Manage Users →</div>
              </div>
              
              <div
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => setActiveTab('balances')}
              >
                <h3 className="text-lg font-semibold text-white mb-2">Balance Manager</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Adjust user balances and track transactions
                </p>
                <div className="text-green-400 font-medium">Manage Balances →</div>
              </div>
              
              <div
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => setActiveTab('portfolios')}
              >
                <h3 className="text-lg font-semibold text-white mb-2">Portfolio Manager</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Manage user portfolios and positions
                </p>
                <div className="text-purple-400 font-medium">Manage Portfolios →</div>
              </div>
            </div>
          </div>
        )
      case 'users':
        return (
          <UserManagement
            users={users}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
            onToggleStatus={handleToggleStatus}
          />
        )
      case 'balances':
        return (
          <BalanceManager
            users={users}
            onAdjustBalance={handleAdjustBalance}
          />
        )
      case 'portfolios':
        return (
          <PortfolioManager
            users={users}
            onUpdatePortfolio={handleUpdatePortfolio}
          />
        )
      case 'transactions':
        return (
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Transaction Management</h2>
            <p className="text-gray-400">Transaction management features coming soon...</p>
          </div>
        )
      case 'analytics':
        return (
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h2>
            <p className="text-gray-400">Advanced analytics features coming soon...</p>
          </div>
        )
      case 'settings':
        return (
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Admin Settings</h2>
            <p className="text-gray-400">Platform settings and configuration options coming soon...</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-trade-navy flex">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}