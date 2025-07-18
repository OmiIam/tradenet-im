'use client'

import React from 'react'

const Statistics = () => {
  const stats = [
    { value: '2M+', label: 'Active Traders' },
    { value: '$50B+', label: 'Daily Volume' },
    { value: '99.9%', label: 'Uptime' },
    { value: '190+', label: 'Countries' }
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Millions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join traders worldwide who trust our platform for their daily trading activities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics