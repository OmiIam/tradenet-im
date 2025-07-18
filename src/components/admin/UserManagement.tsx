'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  UserPlus, 
  Edit, 
  Trash2, 
  Eye, 
  UserCheck, 
  UserX,
  Mail,
  Calendar,
  DollarSign,
  MoreVertical,
  Users
} from 'lucide-react'
import { AdminUser } from '@/types/admin'

interface UserManagementProps {
  users: AdminUser[]
  onEditUser: (user: AdminUser) => void
  onDeleteUser: (userId: string) => void
  onToggleStatus: (userId: string, status: 'active' | 'suspended') => void
}

const UserManagement: React.FC<UserManagementProps> = ({ 
  users, 
  onEditUser, 
  onDeleteUser, 
  onToggleStatus 
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'suspended' | 'inactive'>('all')
  const [showCreateModal, setShowCreateModal] = useState(false)

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'suspended':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'inactive':
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">User Management</h2>
          <p className="text-gray-400">Manage platform users and their accounts</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowCreateModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add User</span>
        </motion.button>
      </div>

      {/* Filters */}
      <div className="glass-dark rounded-xl p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="glass-dark rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">User</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Balance</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Portfolio</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Win Rate</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Last Login</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {user.firstName[0]}{user.lastName[0]}
                      </div>
                      <div>
                        <div className="text-white font-medium">
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="text-gray-400 text-sm flex items-center space-x-1">
                          <Mail className="w-3 h-3" />
                          <span>{user.email}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(user.status)}`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-white font-medium">
                    {formatCurrency(user.totalBalance)}
                  </td>
                  <td className="py-4 px-4 text-right text-white font-medium">
                    {formatCurrency(user.portfolioValue)}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className={`font-medium ${
                      user.winRate >= 70 ? 'text-green-400' : 
                      user.winRate >= 50 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {user.winRate.toFixed(1)}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400 text-sm">
                    {user.lastLogin ? (
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(user.lastLogin).toLocaleDateString()}</span>
                      </div>
                    ) : (
                      'Never'
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onEditUser(user)}
                        className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                        title="Edit User"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onToggleStatus(user.id, user.status === 'active' ? 'suspended' : 'active')}
                        className={`p-2 transition-colors ${
                          user.status === 'active' 
                            ? 'text-red-400 hover:text-red-300' 
                            : 'text-green-400 hover:text-green-300'
                        }`}
                        title={user.status === 'active' ? 'Suspend User' : 'Activate User'}
                      >
                        {user.status === 'active' ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onDeleteUser(user.id)}
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                        title="Delete User"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-dark rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-400">Total Users</span>
          </div>
          <div className="text-2xl font-bold text-white">{users.length}</div>
        </div>
        <div className="glass-dark rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <UserCheck className="w-5 h-5 text-green-400" />
            <span className="text-sm text-gray-400">Active Users</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {users.filter(u => u.status === 'active').length}
          </div>
        </div>
        <div className="glass-dark rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <UserX className="w-5 h-5 text-red-400" />
            <span className="text-sm text-gray-400">Suspended</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {users.filter(u => u.status === 'suspended').length}
          </div>
        </div>
        <div className="glass-dark rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-gray-400">Total Value</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {formatCurrency(users.reduce((sum, u) => sum + u.totalBalance + u.portfolioValue, 0))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement