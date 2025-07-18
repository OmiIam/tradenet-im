'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Award,
  TrendingUp,
  ArrowRight
} from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Security', href: '/security' },
        { name: 'API Documentation', href: '/api' },
        { name: 'System Status', href: '/status' }
      ]
    },
    {
      title: 'Markets',
      links: [
        { name: 'Stocks', href: '/markets/stocks' },
        { name: 'Cryptocurrency', href: '/markets/crypto' },
        { name: 'Forex', href: '/markets/forex' },
        { name: 'Commodities', href: '/markets/commodities' },
        { name: 'Options', href: '/markets/options' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Trading Academy', href: '/academy' },
        { name: 'Market Analysis', href: '/analysis' },
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Contact', href: '/contact' },
        { name: 'Investors', href: '/investors' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github }
  ]

  const trustBadges = [
    { icon: Shield, text: 'SEC Registered' },
    { icon: Award, text: 'FINRA Member' },
    { icon: Shield, text: 'SIPC Insured' }
  ]

  return (
    <footer className="bg-trade-midnight border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl font-mono">t</span>
                </div>
                <span className="text-h3 font-bold text-white font-primary">
                  trade.im
                </span>
              </div>

              {/* Description */}
              <p className="text-body text-gray-300 mb-8 max-w-sm">
                Professional trading platform with advanced AI analytics for stocks and cryptocurrency. 
                Trade with confidence using cutting-edge technology.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="text-h4 font-semibold text-white mb-4">
                  Stay Updated
                </h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                  <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                    <badge.icon className="w-4 h-4 text-green-400" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <h4 className="text-h4 font-semibold text-white mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-body-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <div>
                <div className="text-sm font-medium text-white">Email</div>
                <div className="text-sm text-gray-400">support@trade.im</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <div>
                <div className="text-sm font-medium text-white">Phone</div>
                <div className="text-sm text-gray-400">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-400" />
              <div>
                <div className="text-sm font-medium text-white">Address</div>
                <div className="text-sm text-gray-400">New York, NY 10001</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-trade-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 trade.im. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/risk" className="hover:text-white transition-colors">
                Risk Disclosure
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>Markets Open</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer