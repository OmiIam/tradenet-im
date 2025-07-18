'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Heart,
  Lightbulb,
  Zap,
  Star,
  ArrowRight,
  MapPin,
  Calendar,
  Building
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const stats = [
    { label: 'Founded', value: '2020', icon: Calendar },
    { label: 'Global Users', value: '2M+', icon: Users },
    { label: 'Countries', value: '190+', icon: Globe },
    { label: 'Daily Volume', value: '$50B+', icon: TrendingUp },
    { label: 'Team Members', value: '500+', icon: Building },
    { label: 'Uptime', value: '99.9%', icon: Shield }
  ]

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security First',
      description: 'We prioritize the security of your funds and data above all else, employing bank-level security measures and insurance protection.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Every feature and decision is made with our users in mind, ensuring the best possible trading experience.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We continuously push the boundaries of trading technology, bringing cutting-edge AI and analytics to every trader.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Lightning-fast execution and reliable infrastructure ensure you never miss a trading opportunity.',
      color: 'from-green-500 to-teal-500'
    }
  ]

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former Goldman Sachs quantitative trader with 15+ years of experience in financial markets and fintech.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer specializing in high-frequency trading systems and machine learning algorithms.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader with experience at Tesla and SpaceX, focused on creating intuitive trading experiences.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Dr. Emily Wang',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science from MIT, leading our AI and machine learning initiatives.',
      image: '/api/placeholder/150/150'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'trade.im was founded with a vision to democratize professional trading tools.'
    },
    {
      year: '2021',
      title: 'Beta Launch',
      description: 'Launched private beta with 1,000 selected traders, receiving overwhelming positive feedback.'
    },
    {
      year: '2022',
      title: 'Public Launch',
      description: 'Officially launched to the public, reaching 100,000 users within the first six months.'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Introduced AI-powered analytics and automated trading features, revolutionizing the platform.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to 190+ countries with full regulatory compliance and 24/7 support.'
    }
  ]

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
              Empowering Traders
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                Around the World
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              trade.im was founded with a simple mission: to provide professional-grade trading tools 
              to everyone, regardless of their experience level or account size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-trade-navy via-trade-midnight to-trade-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-h1 font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-body-lg text-gray-300 leading-relaxed mb-8">
                To democratize access to professional trading tools and empower individuals 
                to take control of their financial future through intelligent, secure, and 
                user-friendly trading technology.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-h4 font-semibold text-white">Our Goal</h3>
                  <p className="text-body-sm text-gray-400">
                    Making professional trading accessible to everyone
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-trade p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-trade-success rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-h2 font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-body text-gray-300 leading-relaxed">
                To become the world's most trusted and innovative trading platform, 
                where technology meets finance to create unprecedented opportunities 
                for traders of all levels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to our users.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-trade p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-body text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Leadership
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Our team combines decades of experience in finance, technology, and product development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-trade-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-h4 font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-body-sm text-primary-400 mb-4">
                  {member.role}
                </p>
                <p className="text-body-sm text-gray-400 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-body-lg text-gray-300">
              From startup to global platform, here's how we've grown.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-500/30"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="card-trade-surface p-6">
                    <div className="text-2xl font-bold text-primary-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-h4 font-semibold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-body-sm text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-trade-midnight"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Join Our Mission
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Be part of the trading revolution. Start your journey with trade.im today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Start Trading</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/careers">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-trade-secondary text-lg px-8 py-4"
                >
                  Join Our Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}