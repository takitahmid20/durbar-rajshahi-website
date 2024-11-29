"use client"

import Image from 'next/image'

const PlayerCard = ({ player }) => {
  // Convert country code to lowercase for flag URL
  const countryCode = player.country === 'BD' ? 'bd' : 
                     player.country === 'PAK' ? 'pk' : 
                     player.country === 'SL' ? 'lk' : 
                     player.country.toLowerCase()

  // Flag CDN URL
  const flagUrl = `https://flagcdn.com/w80/${countryCode}.png`

  return (
    <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden
                  border border-white/10 hover:border-dr-orange/30 transition-all duration-300">
      {/* Player Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={player.image}
          alt={player.name}
          fill
          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
        
        {/* Country Flag */}
        <div className="absolute top-4 right-4 w-10 h-6 rounded-md overflow-hidden shadow-lg">
          <Image
            src={flagUrl}
            alt={player.country}
            width={40}
            height={24}
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>
      </div>

      {/* Player Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{player.name}</h3>
          <p className="text-dr-orange">{player.role}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Age</p>
            <p className="text-white">{player.age} years</p>
          </div>
          <div>
            <p className="text-gray-400">Batting</p>
            <p className="text-white">{player.batting}</p>
          </div>
          <div>
            <p className="text-gray-400">Bowling</p>
            <p className="text-white">{player.bowling || 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-400">District</p>
            <p className="text-white">{player.district}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-white">{player.matches}</p>
              <p className="text-sm text-gray-400">Matches</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{player.runs}</p>
              <p className="text-sm text-gray-400">Runs</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{player.wickets}</p>
              <p className="text-sm text-gray-400">Wickets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
