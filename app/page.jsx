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
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    })

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))

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