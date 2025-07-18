'use client'

import React from 'react'
import Header from '@/components/Header'
import StatsCard from '@/components/StatsCard'
import MarketChart from '@/components/MarketChart'
import AIInsights from '@/components/AIInsights'
import MarketTable from '@/components/MarketTable'
import { DollarSign, TrendingUp, Activity, PieChart } from 'lucide-react'

export default function Home() {
  // Mock data for demonstration
  const chartData = [
    { time: '09:00', price: 185.20 },
    { time: '10:00', price: 186.50 },
    { time: '11:00', price: 184.80 },
    { time: '12:00', price: 187.30 },
    { time: '13:00', price: 188.90 },
    { time: '14:00', price: 187.60 },
    { time: '15:00', price: 189.45 },
    { time: '16:00', price: 190.20 },
  ]

  const stockData = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 185.20,
      change: 2.45,
      changePercent: 1.34,
      volume: 45600000,
      marketCap: 2850000000000,
      isWatchlisted: true
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 378.90,
      change: -1.25,
      changePercent: -0.33,
      volume: 23400000,
      marketCap: 2810000000000,
      isWatchlisted: false
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 142.56,
      change: 3.21,
      changePercent: 2.30,
      volume: 34500000,
      marketCap: 1780000000000,
      isWatchlisted: true
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 155.89,
      change: 0.78,
      changePercent: 0.50,
      volume: 28900000,
      marketCap: 1620000000000,
      isWatchlisted: false
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 245.80,
      change: -5.34,
      changePercent: -2.13,
      volume: 67800000,
      marketCap: 778000000000,
      isWatchlisted: true
    }
  ]

  const cryptoData = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 45234.56,
      change: 1234.78,
      changePercent: 2.81,
      volume: 28900000000,
      marketCap: 885000000000,
      isWatchlisted: true
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2456.89,
      change: -45.23,
      changePercent: -1.81,
      volume: 12400000000,
      marketCap: 295000000000,
      isWatchlisted: true
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      price: 312.45,
      change: 8.90,
      changePercent: 2.93,
      volume: 890000000,
      marketCap: 47800000000,
      isWatchlisted: false
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.52,
      change: 0.023,
      changePercent: 4.64,
      volume: 445000000,
      marketCap: 18200000000,
      isWatchlisted: false
    }
  ]

  return (
    <div className="min-h-screen bg-trade-navy">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to trade.im
          </h1>
          <p className="text-gray-400">
            Advanced trading platform with AI-powered analytics and real-time market insights
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Portfolio Value"
            value="$125,430.50"
            change={2845.30}
            changePercent={2.32}
            icon={<DollarSign className="w-5 h-5" />}
          />
          <StatsCard
            title="Today's P&L"
            value="$1,234.56"
            change={234.56}
            changePercent={1.89}
            icon={<TrendingUp className="w-5 h-5" />}
          />
          <StatsCard
            title="Active Positions"
            value="12"
            change={2}
            changePercent={20.0}
            icon={<Activity className="w-5 h-5" />}
          />
          <StatsCard
            title="Win Rate"
            value="78.5%"
            change={2.3}
            changePercent={3.02}
            icon={<PieChart className="w-5 h-5" />}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <MarketChart
              data={chartData}
              symbol="AAPL"
              height={400}
              color="#10b981"
            />
          </div>

          {/* AI Insights */}
          <div className="lg:col-span-1">
            <AIInsights />
          </div>
        </div>

        {/* Market Tables */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <MarketTable
            data={stockData}
            title="Top Stocks"
            type="stocks"
          />
          <MarketTable
            data={cryptoData}
            title="Top Cryptocurrencies"
            type="crypto"
          />
        </div>
      </main>
    </div>
  )
}