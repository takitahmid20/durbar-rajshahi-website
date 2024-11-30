"use client"

import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Squad from '../components/Squad'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    })

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))

    // Handle hash scroll after navigation
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Squad />
      <Schedule />
      <Explore />
      <Sponsors />
      <Footer />
    </main>
  )
}