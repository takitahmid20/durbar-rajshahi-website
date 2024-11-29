"use client"

import Image from 'next/image'

const CoachCard = ({ coach }) => {
  // Convert country code to lowercase for flag URL
  const countryCode = coach.country === 'BD' ? 'bd' : 
                     coach.country === 'PAK' ? 'pk' : 
                     coach.country === 'SL' ? 'lk' : 
                     coach.country.toLowerCase()

  // Flag CDN URL
  const flagUrl = `https://flagcdn.com/w80/${countryCode}.png`

  return (
    <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden
                  border border-white/10 hover:border-dr-orange/30 transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Coach Image */}
        <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-square overflow-hidden">
          <Image
            src={coach.image}
            alt={coach.name}
            fill
            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
          
          {/* Country Flag */}
          <div className="absolute top-4 right-4 w-10 h-6 rounded-md overflow-hidden shadow-lg">
            <Image
              src={flagUrl}
              alt={coach.country}
              width={40}
              height={24}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
        </div>

        {/* Coach Info */}
        <div className="w-full md:w-2/3 p-8 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">{coach.name}</h3>
              <p className="text-dr-orange text-xl">{coach.role}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm mb-6">
              <div>
                <p className="text-gray-400">Experience</p>
                <p className="text-white text-lg">{coach.experience} Years</p>
              </div>
              <div>
                <p className="text-gray-400">Specialization</p>
                <p className="text-white text-lg">{coach.specialization}</p>
              </div>
              <div>
                <p className="text-gray-400">Previous Teams</p>
                <p className="text-white text-lg">{coach.previousTeams}</p>
              </div>
              <div>
                <p className="text-gray-400">Nationality</p>
                <p className="text-white text-lg">{coach.nationality}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">{coach.matches}</p>
                <p className="text-sm text-gray-400">Matches</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{coach.winPercentage}%</p>
                <p className="text-sm text-gray-400">Win Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{coach.trophies}</p>
                <p className="text-sm text-gray-400">Trophies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoachCard
