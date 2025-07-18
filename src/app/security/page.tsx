'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Shield,
  Lock,
  Eye,
  Server,
  CheckCircle,
  AlertTriangle,
  Key,
  UserCheck,
  Database,
  Globe,
  Award,
  FileText,
  Smartphone,
  Clock,
  TrendingUp
} from 'lucide-react'

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Multi-Layer Security',
      description: 'Advanced security architecture with multiple layers of protection',
      details: [
        'End-to-end encryption',
        'Real-time threat monitoring',
        'Advanced firewall protection',
        'DDoS protection'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Cold Storage',
      description: 'Majority of funds stored offline in secure cold storage',
      details: [
        '95% of funds in cold storage',
        'Multi-signature wallets',
        'Geographically distributed',
        'Bank-grade security'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Identity Verification',
      description: 'Comprehensive KYC/AML compliance and verification',
      details: [
        'Government ID verification',
        'Biometric authentication',
        'Address verification',
        'Source of funds checks'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and incident response',
      details: [
        'Real-time threat detection',
        'Automated response systems',
        'Security operations center',
        'Incident response team'
      ],
      color: 'from-red-500 to-pink-500'
    }
  ]

  const certifications = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'ISO 27001',
      description: 'Information Security Management System certification'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'GDPR Compliant',
      description: 'General Data Protection Regulation compliance'
    }
  ]

  const protectionMeasures = [
    {
      category: 'Account Security',
      measures: [
        'Two-factor authentication (2FA)',
        'Biometric login options',
        'Device fingerprinting',
        'Session management',
        'Login anomaly detection'
      ]
    },
    {
      category: 'Data Protection',
      measures: [
        'AES-256 encryption',
        'TLS 1.3 in transit',
        'Zero-knowledge architecture',
        'Data anonymization',
        'Regular security audits'
      ]
    },
    {
      category: 'Infrastructure',
      measures: [
        'AWS enterprise security',
        'Private cloud deployment',
        'Network segmentation',
        'Intrusion detection systems',
        'Regular penetration testing'
      ]
    },
    {
      category: 'Compliance',
      measures: [
        'Regular compliance audits',
        'Third-party security assessments',
        'Bug bounty program',
        'Security incident reporting',
        'Regulatory compliance monitoring'
      ]
    }
  ]

  const insuranceDetails = [
    {
      type: 'SIPC Insurance',
      coverage: 'Up to $500,000',
      description: 'Securities Investor Protection Corporation insurance for eligible accounts'
    },
    {
      type: 'Cyber Insurance',
      coverage: 'Up to $100M',
      description: 'Comprehensive cyber insurance coverage for digital assets'
    },
    {
      type: 'Crime Insurance',
      coverage: 'Up to $50M',
      description: 'Protection against theft, fraud, and other criminal activities'
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
              Your Security is
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                Our Priority
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              We employ industry-leading security measures to protect your funds and data. 
              Learn about our comprehensive security infrastructure and commitment to your safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
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
              Multi-Layer Security Architecture
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Our security infrastructure is built with multiple layers of protection to ensure maximum safety.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-trade p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-body text-gray-300 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-body-sm text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Measures */}
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
              Comprehensive Protection Measures
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              We implement comprehensive security measures across all aspects of our platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protectionMeasures.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade-surface p-6"
              >
                <h3 className="text-h4 font-semibold text-white mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.measures.map((measure, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-body-sm text-gray-300">{measure}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Industry Certifications
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              We maintain the highest industry standards through rigorous certification processes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-400">
                    {cert.icon}
                  </div>
                </div>
                <h3 className="text-h4 font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-body-sm text-gray-400">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
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
              Insurance Protection
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Your funds are protected by comprehensive insurance coverage through leading providers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {insuranceDetails.map((insurance, index) => (
              <motion.div
                key={insurance.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-trade p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-h3 font-bold text-white mb-2">
                  {insurance.type}
                </h3>
                <div className="text-2xl font-bold text-green-400 mb-4">
                  {insurance.coverage}
                </div>
                <p className="text-body-sm text-gray-300">
                  {insurance.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
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
              Security Best Practices
            </h2>
            <p className="text-body-lg text-gray-300">
              Help us keep your account secure by following these recommendations.
            </p>
          </motion.div>

          <div className="card-trade p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-h3 font-semibold text-white mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                  Recommended Actions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Key className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-body-sm text-gray-300">Enable two-factor authentication</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-body-sm text-gray-300">Use a strong, unique password</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Smartphone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-body-sm text-gray-300">Keep your devices updated</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Eye className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-body-sm text-gray-300">Monitor your account regularly</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-h3 font-semibold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
                  Avoid These Risks
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-body-sm text-gray-300">Don't share your login credentials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-body-sm text-gray-300">Avoid public WiFi for trading</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-body-sm text-gray-300">Never click suspicious links</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-body-sm text-gray-300">Don't download unofficial apps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
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
              Security Concerns?
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              If you notice any suspicious activity or have security concerns, contact our security team immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Shield className="w-5 h-5" />
                <span>Report Security Issue</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-trade-secondary text-lg px-8 py-4"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}