"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Diagonal Divider */}
      <div className="absolute inset-0 bg-gradient-to-br from-dr-purple/20 to-black transform -skew-y-6" />
      
      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8" ref={heroRef}>
            {/* Animated Stats Bar */}
            <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-2 rounded-full w-fit">
              <span className="animate-pulse px-3 py-1 rounded-full bg-dr-orange text-white text-sm">
                LIVE
              </span>
              <span className="text-gray-300">Next Match: Feb 15, 2024</span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold space-y-2">
              <span className="block text-white">DURBAR</span>
              <span className="block gradient-text transform -skew-x-6">RAJSHAHI</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-xl">
              Where cricket meets legacy. Join us in celebrating the spirit of Rajshahi 
              through exceptional cricket and unforgettable moments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-dr-orange to-dr-yellow
                             rounded-xl text-white font-medium overflow-hidden">
                <span className="relative z-10">Watch Live</span>
                <div className="absolute inset-0 bg-gradient-to-r from-dr-yellow to-dr-orange 
                            transform scale-x-0 group-hover:scale-x-100 transition-transform 
                            origin-left duration-300" />
              </button>
              <button className="group relative px-8 py-4 border border-dr-orange/30 rounded-xl
                             text-white font-medium overflow-hidden hover:border-dr-orange">
                <span className="relative z-10">Team Stats</span>
                <div className="absolute inset-0 bg-dr-orange/10 transform scale-x-0 
                            group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Dynamic Image Stack */}
          <div className="lg:col-span-5 relative h-[600px]">
            {/* Main Image */}
            <div className="absolute right-0 top-0 w-full h-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden transform 
                           hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/player.png"
                  alt="Cricket Player"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </div>

            {/* Trophy Image */}
            <div className="absolute -right-8 bottom-1/4 w-40 h-40">
              <div className="relative w-full h-full rounded-2xl overflow-hidden transform 
                           hover:scale-110 transition-transform duration-500 -rotate-12">
                <Image
                  src="/images/trophy.webp"
                  alt="Trophy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Live Match Card */}
            <div className="absolute -left-4 bottom-20 w-64">
              <div className="bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">Current Score</span>
                  <span className="px-2 py-1 rounded-full bg-dr-orange/20 text-dr-orange text-xs">LIVE</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-dr-orange/20" />
                    <span className="text-white">DR</span>
                  </div>
                  <span className="text-2xl font-bold text-white">186/4</span>
                </div>
                <div className="text-sm text-gray-400 mt-2">18.4 Overs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cricket Ball Animation */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-dr-orange 
                     animate-ping opacity-20" />
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-dr-yellow 
                     animate-pulse opacity-20" />
      </div>
    </div>
  )
}

export default Hero
