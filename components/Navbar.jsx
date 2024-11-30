"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Updated navigation links to include Players page
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Squad', href: '#squad' },
    { name: 'Players', href: '/players' },
    { name: 'Teams', href: '/teams' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Explore', href: '#explore' },
  ]

  const handleLinkClick = (href) => {
    setActiveLink(href)
    setIsMobileMenuOpen(false)
    
    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        // If on home page, just scroll
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // If on another page, navigate to home with hash
        router.push(`/${href}`)
      }
    } else {
      // Handle regular page navigation
      router.push(href)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-8`}>
        <div className="container mx-auto px-4">
          {/* Main Navigation Bar */}
          <div className={`relative rounded-full transition-all duration-300 backdrop-blur-lg overflow-visible
                        ${isScrolled 
                          ? 'bg-black/70 py-3' 
                          : 'bg-gradient-to-r from-black/80 via-dr-purple/50 to-black/80 py-4'}`}>
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center px-8">
              {/* Left Links */}
              <div className="flex items-center space-x-8">
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.href)
                    }}
                  >
                    <span className="text-gray-300 hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-dr-orange 
                                 transition-all duration-300 group-hover:w-full
                                 ${activeLink === link.href ? 'w-full' : 'w-0'}`} />
                  </Link>
                ))}
              </div>

              {/* Center Logo */}
              <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '-2rem' }}>
                <Link href="/" className="group" onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick('/')
                }}>
                  <div className="relative w-32 h-32">
                    <Image
                      src="/images/logo.png"
                      alt="Durbar Rajshahi Logo"
                      fill
                      className="object-contain transform group-hover:scale-110 transition-all duration-300"
                      priority
                    />
                  </div>
                </Link>
              </div>

              {/* Right Links */}
              <div className="flex items-center space-x-8">
                {navLinks.slice(3).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.href)
                    }}
                  >
                    <span className="text-gray-300 hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-dr-orange 
                                 transition-all duration-300 group-hover:w-full
                                 ${activeLink === link.href ? 'w-full' : 'w-0'}`} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-between items-center px-4">
              {/* Mobile Logo */}
              <Link href="/" className="relative w-12 h-12" onClick={(e) => {
                e.preventDefault()
                handleLinkClick('/')
              }}>
                <Image
                  src="/images/logo.png"
                  alt="Durbar Rajshahi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <i className="fas fa-times text-white text-xl"></i>
                ) : (
                  <i className="fas fa-bars text-white text-xl"></i>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 mt-4 transition-all duration-300 transform origin-top
                     ${isMobileMenuOpen 
                       ? 'opacity-100 scale-y-100' 
                       : 'opacity-0 scale-y-0 pointer-events-none'}`}
          >
            <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 mx-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-gray-300 hover:text-white transition-colors relative group"
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                >
                  <span>{link.name}</span>
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-dr-orange 
                               transition-all duration-300 group-hover:w-full
                               ${activeLink === link.href ? 'w-full' : 'w-0'}`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300
                 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

export default Navbar
