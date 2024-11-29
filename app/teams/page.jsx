"use client"

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PlayerSearch from '@/components/PlayerSearch'
import PlayerCard from '@/components/PlayerCard'

const TeamPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const players = [
    {
      id: 1,
      name: "Anamul Haque Bijoy",
      role: "Wicket-Keeper Batter",
      image: "/players/anamul.jpg",
      country: "BD",
      age: 30,
      batting: "Right-handed",
      bowling: "N/A",
      district: "Kushtia",
      matches: 145,
      runs: 4250,
      wickets: 0
    },
    {
      id: 2,
      name: "Taskin Ahmed",
      role: "Fast Bowler",
      image: "/players/taskin.jpg",
      country: "BD",
      age: 28,
      batting: "Right-handed",
      bowling: "Right-arm fast",
      district: "Dhaka",
      matches: 167,
      runs: 428,
      wickets: 245
    },
    {
      id: 3,
      name: "Jishan Alam",
      role: "Fast Bowler",
      image: "/players/jishan.jpg",
      country: "BD",
      age: 26,
      batting: "Right-handed",
      bowling: "Right-arm fast-medium",
      district: "Rajshahi",
      matches: 42,
      runs: 86,
      wickets: 67
    },
    {
      id: 4,
      name: "Yasir Ali Rabbi",
      role: "Middle Order Batter",
      image: "/players/yasir.jpg",
      country: "BD",
      age: 27,
      batting: "Right-handed",
      bowling: "Right-arm medium",
      district: "Chittagong",
      matches: 98,
      runs: 3245,
      wickets: 12
    },
    {
      id: 5,
      name: "Sabbir Hossen",
      role: "Middle Order Batter",
      image: "/players/sabbir.jpg",
      country: "BD",
      age: 31,
      batting: "Right-handed",
      bowling: "Right-arm leg break",
      district: "Rajshahi",
      matches: 187,
      runs: 5640,
      wickets: 28
    },
    {
      id: 6,
      name: "Sanjamul Islam",
      role: "All-Rounder",
      image: "/players/sanjamul.jpg",
      country: "BD",
      age: 28,
      batting: "Left-handed",
      bowling: "Left-arm orthodox",
      district: "Rajshahi",
      matches: 112,
      runs: 1845,
      wickets: 134
    },
    {
      id: 7,
      name: "M Meherob Hasan",
      role: "All-Rounder",
      image: "/players/meherob.jpg",
      country: "BD",
      age: 22,
      batting: "Right-handed",
      bowling: "Right-arm off-break",
      district: "Rajshahi",
      matches: 34,
      runs: 567,
      wickets: 42
    },
    {
      id: 8,
      name: "Akbar Ali",
      role: "Wicket-Keeper Batter",
      image: "/players/akbar.jpg",
      country: "BD",
      age: 22,
      batting: "Right-handed",
      bowling: "N/A",
      district: "Rangpur",
      matches: 45,
      runs: 1234,
      wickets: 0
    },
    {
      id: 9,
      name: "Hasan Murad",
      role: "Spin Bowler",
      image: "/players/hasan.jpg",
      country: "BD",
      age: 23,
      batting: "Left-handed",
      bowling: "Left-arm orthodox",
      district: "Khulna",
      matches: 56,
      runs: 245,
      wickets: 89
    },
    {
      id: 10,
      name: "Shafiul Islam",
      role: "Fast Bowler",
      image: "/players/shafiul.jpg",
      country: "BD",
      age: 33,
      batting: "Right-handed",
      bowling: "Right-arm fast-medium",
      district: "Bogra",
      matches: 198,
      runs: 567,
      wickets: 287
    },
    {
      id: 11,
      name: "Mohor Sheikh Antar",
      role: "All-Rounder",
      image: "/players/mohor.jpg",
      country: "BD",
      age: 24,
      batting: "Left-handed",
      bowling: "Left-arm orthodox",
      district: "Rajshahi",
      matches: 38,
      runs: 645,
      wickets: 52
    },
    {
      id: 12,
      name: "Sad Nasim",
      role: "All-Rounder",
      image: "/players/sad.jpg",
      country: "PAK",
      age: 29,
      batting: "Right-handed",
      bowling: "Right-arm medium-fast",
      district: "Lahore",
      matches: 156,
      runs: 2345,
      wickets: 178
    },
    {
      id: 13,
      name: "Lahiru Samarakoon",
      role: "All-Rounder",
      image: "/players/lahiru.jpg",
      country: "SL",
      age: 27,
      batting: "Left-handed",
      bowling: "Right-arm off-break",
      district: "Colombo",
      matches: 134,
      runs: 2678,
      wickets: 145
    }
  ]

  const filteredPlayers = players.filter(player => {
    const searchStr = searchQuery.toLowerCase()
    return (
      player.name.toLowerCase().includes(searchStr) ||
      player.role.toLowerCase().includes(searchStr) ||
      player.country.toLowerCase().includes(searchStr) ||
      player.district.toLowerCase().includes(searchStr)
    )
  })

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-black pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our</span>{' '}
              <span className="bg-gradient-to-r from-dr-yellow to-dr-orange bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the warriors of Durbar Rajshahi. A perfect blend of experience, 
              talent, and determination.
            </p>
          </div>

          {/* Search */}
          <PlayerSearch onSearch={setSearchQuery} />

          {/* Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlayers.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>

          {/* No Results */}
          {filteredPlayers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No players found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default TeamPage
