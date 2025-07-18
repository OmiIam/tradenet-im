'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  TrendingUp,
  Server,
  Database,
  Globe,
  Zap,
  Shield,
  Activity,
  BarChart3,
  RefreshCw,
  Calendar,
  AlertTriangle
} from 'lucide-react'

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  const systemStatus = {
    overall: 'operational',
    uptime: '99.97%',
    responseTime: '12ms',
    lastIncident: '7 days ago'
  }

  const services = [
    {
      name: 'Trading API',
      status: 'operational',
      description: 'Core trading functionality and order management',
      uptime: '99.98%',
      responseTime: '8ms'
    },
    {
      name: 'Market Data',
      status: 'operational',
      description: 'Real-time market data and price feeds',
      uptime: '99.99%',
      responseTime: '3ms'
    },
    {
      name: 'WebSocket Feeds',
      status: 'operational',
      description: 'Real-time data streaming and notifications',
      uptime: '99.96%',
      responseTime: '5ms'
    },
    {
      name: 'Authentication',
      status: 'operational',
      description: 'User authentication and authorization',
      uptime: '99.95%',
      responseTime: '15ms'
    },
    {
      name: 'Mobile App',
      status: 'operational',
      description: 'iOS and Android mobile applications',
      uptime: '99.94%',
      responseTime: '20ms'
    },
    {
      name: 'Web Platform',
      status: 'operational',
      description: 'Web-based trading platform',
      uptime: '99.97%',
      responseTime: '12ms'
    },
    {
      name: 'Payment Processing',
      status: 'maintenance',
      description: 'Deposits, withdrawals, and payment processing',
      uptime: '99.92%',
      responseTime: '25ms'
    },
    {
      name: 'Customer Support',
      status: 'operational',
      description: 'Help desk and customer support systems',
      uptime: '99.98%',
      responseTime: '10ms'
    }
  ]

  const metrics = [
    {
      name: 'API Requests',
      value: '2.3M',
      period: 'last hour',
      icon: <Activity className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Active Users',
      value: '47K',
      period: 'current',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Avg Response Time',
      value: '12ms',
      period: 'last 24h',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Uptime',
      value: '99.97%',
      period: 'last 30 days',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const incidents = [
    {
      date: '2024-01-10',
      title: 'Scheduled Maintenance - Payment Processing',
      description: 'Routine maintenance on payment processing systems',
      status: 'resolved',
      duration: '2 hours',
      severity: 'low'
    },
    {
      date: '2024-01-05',
      title: 'API Rate Limiting Issues',
      description: 'Some users experienced higher than normal API response times',
      status: 'resolved',
      duration: '45 minutes',
      severity: 'medium'
    },
    {
      date: '2023-12-28',
      title: 'WebSocket Connection Issues',
      description: 'Intermittent WebSocket disconnections for some users',
      status: 'resolved',
      duration: '1 hour 20 minutes',
      severity: 'medium'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400'
      case 'maintenance': return 'text-yellow-400'
      case 'degraded': return 'text-orange-400'
      case 'outage': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5" />
      case 'maintenance': return <AlertCircle className="w-5 h-5" />
      case 'degraded': return <AlertTriangle className="w-5 h-5" />
      case 'outage': return <XCircle className="w-5 h-5" />
      default: return <Clock className="w-5 h-5" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational': return 'Operational'
      case 'maintenance': return 'Maintenance'
      case 'degraded': return 'Degraded Performance'
      case 'outage': return 'Outage'
      default: return 'Unknown'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-500/20 text-green-400'
      case 'medium': return 'bg-yellow-500/20 text-yellow-400'
      case 'high': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 1000)
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
              System Status
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                & Performance
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Real-time status of all trade.im services and infrastructure. 
              Stay informed about system performance and any ongoing issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-trade p-8 mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-h1 font-bold text-white">
                    All Systems Operational
                  </h2>
                  <p className="text-body text-gray-300">
                    All systems are functioning normally
                  </p>
                </div>
              </div>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {systemStatus.uptime}
                </div>
                <div className="text-sm text-gray-400">Uptime (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {systemStatus.responseTime}
                </div>
                <div className="text-sm text-gray-400">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {systemStatus.lastIncident}
                </div>
                <div className="text-sm text-gray-400">Last Incident</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  {lastUpdated.toLocaleTimeString()}
                </div>
                <div className="text-sm text-gray-400">Last Updated</div>
              </div>
            </div>
          </motion.div>

          {/* Current Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1 font-mono">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 mb-1">{metric.name}</div>
                <div className="text-xs text-gray-500">{metric.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Status */}
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
              Service Status
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Individual status of all trade.im services and components.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card-trade p-6 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${getStatusColor(service.status)}`}>
                      {getStatusIcon(service.status)}
                    </div>
                    <div>
                      <h3 className="text-h4 font-semibold text-white">
                        {service.name}
                      </h3>
                      <p className="text-body-sm text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                    {getStatusText(service.status)}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white ml-2">{service.uptime}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Response:</span>
                    <span className="text-white ml-2">{service.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
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
              Recent Incidents
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              History of recent incidents and maintenance windows.
            </p>
          </motion.div>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-h4 font-semibold text-white mb-2">
                        {incident.title}
                      </h3>
                      <p className="text-body-sm text-gray-300 mb-3">
                        {incident.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{incident.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{incident.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">
                      {incident.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
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
              Stay Informed
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Subscribe to status updates and be notified of any incidents or maintenance windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Globe className="w-5 h-5" />
                <span>Subscribe to Updates</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-trade-secondary text-lg px-8 py-4"
              >
                RSS Feed
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Add Users import for the metrics
import { Users } from 'lucide-react'