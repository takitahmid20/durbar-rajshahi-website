"use client"

import Image from 'next/image'
import { matches, getMatchStatus } from '@/utils/matchUtils'

const Schedule = () => {
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
                  <div className={`px-3 py-1 rounded-full text-sm ${matchStatus.color} bg-${matchStatus.color}/20`}>
                    {matchStatus.label}
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

                {/* Venue */}
                <div className="flex flex-col items-center gap-3">
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
