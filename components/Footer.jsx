"use client"

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-dr-orange/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-dr-yellow/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-20">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <Image
                src="/images/logo.png"
                alt="Durbar Rajshahi"
                width={180}
                height={60}
                className="mb-6"
              />
              <p className="text-gray-400 max-w-md">
                Join us in celebrating cricket and culture in the heart of Rajshahi. 
                Be part of our journey to cricket excellence.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com`}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center group transition-all duration-300"
                >
                  <i className={`fab fa-${social} text-white/60 group-hover:text-dr-orange text-xl transition-colors`}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['About', 'Squad', 'Schedule', 'Explore', 'Sponsors'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-dr-orange transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <i className="fas fa-map-marker-alt text-dr-orange mr-2"></i>
                  Rajshahi, Bangladesh
                </li>
                <li className="text-gray-400">
                  <i className="fas fa-envelope text-dr-orange mr-2"></i>
                  info@durbarrajshahi.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          {/* Separator Line with Gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Copyright Text */}
          <div className="px-4 py-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Durbar Rajshahi. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-dr-yellow via-dr-orange to-dr-yellow" />
    </footer>
  )
}

export default Footer
