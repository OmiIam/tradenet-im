'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  BookOpen,
  Play,
  Download,
  Clock,
  Star,
  Users,
  Trophy,
  Target,
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  Award,
  GraduationCap
} from 'lucide-react'
import Link from 'next/link'

export default function AcademyPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const categories = [
    { id: 'all', name: 'All Courses', count: 45 },
    { id: 'basics', name: 'Trading Basics', count: 12 },
    { id: 'technical', name: 'Technical Analysis', count: 15 },
    { id: 'options', name: 'Options Trading', count: 8 },
    { id: 'risk', name: 'Risk Management', count: 6 },
    { id: 'psychology', name: 'Trading Psychology', count: 4 }
  ]

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ]

  const featuredCourses = [
    {
      id: 1,
      title: 'Complete Trading Fundamentals',
      description: 'Master the basics of trading with comprehensive lessons covering market analysis, order types, and risk management.',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 12500,
      duration: '8 hours',
      lessons: 24,
      level: 'Beginner',
      category: 'basics',
      price: 'Free',
      image: '📚',
      tags: ['Fundamentals', 'Market Analysis', 'Risk Management']
    },
    {
      id: 2,
      title: 'Technical Analysis Mastery',
      description: 'Learn to read charts, identify patterns, and use technical indicators to make informed trading decisions.',
      instructor: 'Michael Chen',
      rating: 4.9,
      students: 8750,
      duration: '12 hours',
      lessons: 36,
      level: 'Intermediate',
      category: 'technical',
      price: '$99',
      image: '📈',
      tags: ['Charts', 'Indicators', 'Patterns']
    },
    {
      id: 3,
      title: 'Options Trading Strategies',
      description: 'Comprehensive guide to options trading including Greeks, strategies, and risk management techniques.',
      instructor: 'David Rodriguez',
      rating: 4.7,
      students: 6200,
      duration: '10 hours',
      lessons: 30,
      level: 'Advanced',
      category: 'options',
      price: '$149',
      image: '🎯',
      tags: ['Options', 'Greeks', 'Strategies']
    },
    {
      id: 4,
      title: 'Psychology of Trading',
      description: 'Understand the mental aspects of trading and develop the discipline needed for consistent success.',
      instructor: 'Dr. Lisa Wang',
      rating: 4.9,
      students: 4500,
      duration: '6 hours',
      lessons: 18,
      level: 'Intermediate',
      category: 'psychology',
      price: '$79',
      image: '🧠',
      tags: ['Psychology', 'Discipline', 'Emotions']
    }
  ]

  const learningPaths = [
    {
      title: 'Beginner Trader Path',
      description: 'Start your trading journey with fundamental concepts and basic strategies',
      courses: 6,
      duration: '40 hours',
      difficulty: 'Beginner',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Technical Analysis Expert',
      description: 'Master chart reading and technical indicators for better market timing',
      courses: 8,
      duration: '60 hours',
      difficulty: 'Intermediate',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Options Trading Master',
      description: 'Advanced options strategies and risk management techniques',
      courses: 5,
      duration: '35 hours',
      difficulty: 'Advanced',
      icon: <Target className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Professional Trader',
      description: 'Complete curriculum for becoming a professional trader',
      courses: 12,
      duration: '100 hours',
      difficulty: 'All Levels',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const features = [
    {
      icon: <Play className="w-8 h-8" />,
      title: 'Video Lessons',
      description: 'High-quality video content with expert instructors',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Downloadable Resources',
      description: 'PDFs, cheat sheets, and trading templates',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Access',
      description: 'Join our trading community and network with peers',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certificates',
      description: 'Earn certificates upon course completion',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const instructors = [
    {
      name: 'Sarah Johnson',
      title: 'Senior Trading Instructor',
      experience: '15+ years',
      courses: 8,
      rating: 4.9,
      students: 25000,
      bio: 'Former Wall Street trader with expertise in fundamental analysis and risk management.'
    },
    {
      name: 'Michael Chen',
      title: 'Technical Analysis Expert',
      experience: '12+ years',
      courses: 6,
      rating: 4.8,
      students: 18000,
      bio: 'Chartered Market Technician specializing in chart patterns and trading psychology.'
    },
    {
      name: 'David Rodriguez',
      title: 'Options Trading Specialist',
      experience: '10+ years',
      courses: 5,
      rating: 4.7,
      students: 12000,
      bio: 'Professional options trader and educator with deep expertise in derivatives.'
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400'
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400'
      case 'Advanced': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
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
              Trading Academy
              <span className="block text-transparent bg-gradient-to-r from-primary-400 to-trade-success bg-clip-text">
                Learn from the Experts
              </span>
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Master trading with our comprehensive courses, expert instructors, and practical resources. 
              From beginner basics to advanced strategies.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">45+</div>
              <div className="text-gray-400">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.8</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
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
              Learning Paths
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Structured learning paths designed to take you from beginner to expert.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {path.icon}
                  </div>
                </div>
                <h3 className="text-h4 font-semibold text-white mb-3 text-center">
                  {path.title}
                </h3>
                <p className="text-body-sm text-gray-400 mb-4 text-center">
                  {path.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Courses:</span>
                    <span className="text-white">{path.courses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{path.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white">{path.difficulty}</span>
                  </div>
                </div>
                <button className="w-full mt-4 btn-trade-secondary text-sm py-2">
                  Start Learning
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
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
              Featured Courses
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Popular courses from our expert instructors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{course.image}</div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-h3 font-semibold text-white mb-3">
                  {course.title}
                </h3>
                
                <p className="text-body-sm text-gray-400 mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{course.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Instructor: {course.instructor}</div>
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-h3 font-bold text-white">
                    {course.price}
                  </div>
                  <button className="btn-trade-primary text-sm px-6 py-2">
                    {course.price === 'Free' ? 'Start Free' : 'Enroll Now'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              Why Choose Our Academy
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive learning experience with practical resources and expert guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-h4 font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
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
              Meet Our Instructors
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Learn from experienced traders and industry professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-trade p-6 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-trade-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-h3 font-semibold text-white mb-2">
                  {instructor.name}
                </h3>
                <p className="text-body-sm text-primary-400 mb-3">
                  {instructor.title}
                </p>
                <p className="text-body-sm text-gray-400 mb-4">
                  {instructor.bio}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-white font-medium">{instructor.experience}</div>
                    <div className="text-gray-400">Experience</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">{instructor.courses}</div>
                    <div className="text-gray-400">Courses</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">{instructor.rating}</div>
                    <div className="text-gray-400">Rating</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">{instructor.students.toLocaleString()}</div>
                    <div className="text-gray-400">Students</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trade-midnight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-trade p-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-h1 font-bold text-white mb-6">
              Start Your Trading Education
            </h2>
            <p className="text-body-lg text-gray-300 mb-8">
              Join thousands of students who have transformed their trading with our expert courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-trade-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Start Learning</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-trade-secondary text-lg px-8 py-4"
              >
                Browse Courses
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}