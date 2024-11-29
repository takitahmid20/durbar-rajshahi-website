"use client"

import Image from 'next/image'

const Schedule = () => {
  const getMatchStatus = (matchDate, matchTime) => {
    const now = new Date()
    const [month, day] = matchDate.split(" ")[0].split(",")[0].split(" ")
    const year = 2025
    const [hours, minutes] = matchTime.split(" ")[0].split(":")
    const isPM = matchTime.includes("PM")
    
    const monthMap = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    }

    const matchDateTime = new Date(
      year,
      monthMap[month],
      parseInt(day),
      isPM ? parseInt(hours) + 12 : parseInt(hours),
      parseInt(minutes)
    )

    // Add 3 hours to match time for approximate match duration
    const matchEndTime = new Date(matchDateTime.getTime() + (3 * 60 * 60 * 1000))

    if (now > matchEndTime) {
      return { status: 'finished', color: 'text-gray-400', label: 'Finished' }
    } else if (now >= matchDateTime && now <= matchEndTime) {
      return { status: 'live', color: 'text-green-500', label: 'Live Now' }
    } else {
      return { status: 'upcoming', color: 'text-dr-orange', label: 'Upcoming' }
    }
  }

  const matches = [
    {
      id: 1,
      date: "Dec 30, Mon",
      time: "1:30 PM LOCAL",
      homeTeam: "Fortune Barishal",
      awayTeam: "Durbar Rajshahi",
      venue: "Shere Bangla National Stadium, Dhaka",
      homeLogo: "/images/teams/barishal.png",
      awayLogo: "/images/logo.png"
    },
    {
      id: 2,
      date: "Jan 2, Thu",
      time: "1:30 PM LOCAL",
      homeTeam: "Durbar Rajshahi",
      awayTeam: "Dhaka Capital",
      venue: "Shere Bangla National Stadium, Dhaka",
      homeLogo: "/images/logo.png",
      awayLogo: "/images/teams/dhaka.png"
    },
    {
      id: 3,
      date: "Jan 3, Fri",
      time: "2:00 PM LOCAL",
      homeTeam: "Durbar Rajshahi",
      awayTeam: "Chittagong Kings",
      venue: "Shere Bangla National Stadium, Dhaka",
      homeLogo: "/images/logo.png",
      awayLogo: "/images/teams/chittagong.png"
    },
    {
      id: 4,
      date: "Jan 10, Fri",
      time: "2:00 PM LOCAL",
      homeTeam: "Durbar Rajshahi",
      awayTeam: "Khulna Tigers",
      venue: "Sylhet",
      homeLogo: "/images/logo.png",
      awayLogo: "/images/teams/khulna.png"
    },
    {
      id: 5,
      date: "Jan 12, Sun",
      time: "6:30 PM LOCAL",
      homeTeam: "Durbar Rajshahi",
      awayTeam: "Dhaka Capital",
      venue: "Sylhet",
      homeLogo: "/images/logo.png",
      awayLogo: "/images/teams/dhaka.png"
    },
    {
      id: 6,
      date: "Jan 17, Fri",
      time: "2:00 PM LOCAL",
      homeTeam: "Durbar Rajshahi",
      awayTeam: "Sylhet Strikers",
      venue: "Chattogram",
      homeLogo: "/images/logo.png",
      awayLogo: "/images/teams/sylhet.png"
    },
    {
      id: 7,
      date: "Jan 19, Sun",
      time: "6:30 PM LOCAL",
      homeTeam: "Durbar Rajshahi",
      awayTeam: "Khulna Tigers",
      venue: "Chattogram",
      homeLogo: "/images/logo.png",
      awayLogo: "/images/teams/khulna.png"
    },
    {
      id: 8,
      date: "Jan 23, Thu",
      time: "1:30 PM LOCAL",
      homeTeam: "Durbar Rajshahi",
      awayTeam: "Rangpur Riders",
      venue: "Chattogram",
      homeLogo: "/images/logo.png",
      awayLogo: "/images/teams/rangpur.png"
    },
    {
      id: 9,
      date: "Jan 26, Sun",
      time: "6:30 PM LOCAL",
      homeTeam: "Durbar Rajshahi",
      awayTeam: "Rangpur Riders",
      venue: "Dhaka",
      homeLogo: "/images/logo.png",
      awayLogo: "/images/teams/rangpur.png"
    },
    {
      id: 10,
      date: "Jan 27, Mon",
      time: "6:30 PM LOCAL",
      homeTeam: "Durbar Rajshahi",
      awayTeam: "Sylhet Strikers",
      venue: "Dhaka",
      homeLogo: "/images/logo.png",
      awayLogo: "/images/teams/sylhet.png"
    }
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden" id="schedule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Match</span>{' '}
            <span className="bg-gradient-to-r from-dr-yellow to-dr-orange bg-clip-text text-transparent">Schedule</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            BPL 2025 Fixture - Follow Durbar Rajshahi's journey through the tournament
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => {
            const matchStatus = getMatchStatus(match.date, match.time)
            return (
              <div
                key={match.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-dr-orange/30"
              >
                {/* Match Header - Date & Time */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-white">
                    <div className="text-lg font-semibold">{match.date}</div>
                    <div className="text-dr-orange">{match.time}</div>
                  </div>
                  <div className="bg-dr-orange/20 text-dr-orange px-3 py-1 rounded-full text-sm">
                    Matchday {match.id}
                  </div>
                </div>

                {/* Teams */}
                <div className="flex items-center justify-between mb-6">
                  {/* Home Team */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative w-16 h-16">
                      <Image
                        src={match.homeLogo}
                        alt={match.homeTeam}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-white text-center font-medium">{match.homeTeam}</div>
                  </div>

                  {/* VS */}
                  <div className="text-2xl font-bold text-white/50">VS</div>

                  {/* Away Team */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative w-16 h-16">
                      <Image
                        src={match.awayLogo}
                        alt={match.awayTeam}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-white text-center font-medium">{match.awayTeam}</div>
                  </div>
                </div>

                {/* Venue and Status */}
                <div className="flex flex-col items-center gap-3">
                  <div className={`px-3 py-1 rounded-full text-sm ${matchStatus.color} bg-white/5 border border-current`}>
                    {matchStatus.label}
                  </div>
                  <div className="text-gray-400">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {match.venue}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Schedule
