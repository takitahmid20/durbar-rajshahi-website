"use client"

import Image from 'next/image'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden
                    border border-white/10 hover:border-dr-orange/30 transition-all duration-300">
      {/* Member Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
        
        {/* Social Links */}
        <div className="absolute bottom-4 right-4 flex gap-3">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-dr-orange flex items-center justify-center
                       transition-all duration-300"
            >
              <FaLinkedin className="text-white" />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-dr-orange flex items-center justify-center
                       transition-all duration-300"
            >
              <FaTwitter className="text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Member Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-dr-orange mb-3">{member.role}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard
