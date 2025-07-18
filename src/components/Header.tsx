'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white/5 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold text-white">
            trade.im
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-sm text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <button className="text-sm text-gray-300 hover:text-white transition-colors">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="text-sm bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-3">
              <Link href="/features" className="text-sm text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
            
            <div className="flex flex-col space-y-2 pt-4 border-t border-white/10 mt-4">
              <Link href="/login">
                <button className="w-full text-sm text-gray-300 hover:text-white transition-colors py-2">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-full text-sm bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header