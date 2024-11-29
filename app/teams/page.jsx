"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamMemberCard from '@/components/TeamMemberCard'

const TeamsPage = () => {
  const teamMembers = {
    leadership: [
      {
        name: "Akash Chowdhury",
        role: "Owner & Chairman",
        image: "/team/coach.jpg",
        description: "Visionary leader and founder of Durbar Rajshahi, committed to developing cricket in the northern region of Bangladesh.",
        linkedin: "https://linkedin.com/in/akash-chowdhury",
        twitter: "https://twitter.com/akashchowdhury"
      },
      {
        name: "Mohammad Rahman",
        role: "Managing Director",
        image: "/team/coach.jpg",
        description: "Experienced sports administrator with a proven track record in cricket management and team operations.",
        linkedin: "https://linkedin.com/in/mohammad-rahman"
      }
    ],
    management: [
      {
        name: "Khaled Mahmud Sujon",
        role: "Head Coach",
        image: "/players/coach.jpg",
        description: "Former Bangladesh National Team player and coach, bringing wealth of experience in cricket strategy and player development.",
        twitter: "https://twitter.com/khaledmahmud"
      },
      {
        name: "Dr. Sarah Ahmed",
        role: "Team Physician",
        image: "/team/coach.jpg",
        description: "Sports medicine specialist with extensive experience in cricket-related injuries and rehabilitation.",
        linkedin: "https://linkedin.com/in/dr-sarah-ahmed"
      },
      {
        name: "Rafiqul Islam",
        role: "Strength & Conditioning Coach",
        image: "/team/coach.jpg",
        description: "Certified fitness trainer specializing in cricket-specific conditioning and performance enhancement.",
        linkedin: "https://linkedin.com/in/rafiqul-islam"
      }
    ],
    operations: [
      {
        name: "Aminul Haque",
        role: "Team Manager",
        image: "/team/coach.jpg",
        description: "Handles day-to-day team operations and player coordination with extensive management experience.",
        linkedin: "https://linkedin.com/in/aminul-haque"
      },
      {
        name: "Nasreen Khan",
        role: "Media Manager",
        image: "/team/coach.jpg",
        description: "Manages team's public relations and media communications with expertise in sports journalism.",
        twitter: "https://twitter.com/nasreenkhan"
      },
      {
        name: "Zahirul Islam",
        role: "Analytics Head",
        image: "/team/coach.jpg",
        description: "Leads performance analysis and data-driven decision making for team strategy.",
        linkedin: "https://linkedin.com/in/zahirul-islam"
      }
    ],
    support: [
      {
        name: "Abdul Karim",
        role: "Equipment Manager",
        image: "/team/coach.jpg",
        description: "Ensures proper maintenance and availability of all cricket equipment and training gear."
      },
      {
        name: "Masuda Begum",
        role: "Nutritionist",
        image: "/team/coach.jpg",
        description: "Develops personalized nutrition plans for players to optimize their performance.",
        linkedin: "https://linkedin.com/in/masuda-begum"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our</span>{' '}
            <span className="bg-gradient-to-r from-dr-yellow to-dr-orange bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the dedicated individuals who work behind the scenes to make Durbar Rajshahi a force to be reckoned with in Bangladesh cricket.
          </p>
        </div>

        {/* Leadership Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.leadership.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Management Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Technical Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.management.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Operations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.operations.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Support Staff Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Support Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.support.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default TeamsPage
