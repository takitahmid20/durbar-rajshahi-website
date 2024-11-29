"use client"

import Image from 'next/image'

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "Valentine Group",
      logo: "/images/logo.png", // temporarily using team logo for testing
      website: "https://valentine.com",
      type: "Title Sponsor"
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/images/logo.png", // temporarily using team logo for testing
      website: "https://example.com",
      type: "Co-Sponsor"
    },
    {
      id: 3,
      name: "Partner 3",
      logo: "/images/logo.png", // temporarily using team logo for testing
      website: "https://example.com",
      type: "Official Partner"
    }
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden" id="sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our</span>{' '}
            <span className="bg-gradient-to-r from-dr-yellow to-dr-orange bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proud to be associated with leading brands who share our passion for cricket and excellence
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[3/2] mb-6">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white text-xl font-semibold mb-2">{sponsor.name}</h3>
                <p className="text-dr-orange text-sm mb-4">{sponsor.type}</p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-white/60 hover:text-white transition-colors"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-dr-orange/20 to-dr-yellow/20 backdrop-blur-lg" />
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Become Our Partner
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join forces with Durbar Rajshahi and be part of our journey to cricket excellence. 
              We offer various partnership opportunities tailored to your brand objectives.
            </p>
            <button className="bg-gradient-to-r from-dr-orange to-dr-yellow text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-dr-orange/50 transition-all duration-300 transform hover:-translate-y-0.5">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
