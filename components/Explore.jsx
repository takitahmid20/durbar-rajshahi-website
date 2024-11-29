"use client"

import Image from 'next/image'

const Explore = () => {
  const places = [
    {
      id: 1,
      name: "Puthia Temple Complex",
      image: "/images/explore/puthia.jpeg",
      size: "large",
      description: "Historical temple complex"
    },
    {
      id: 2,
      name: "Bagha Mosque",
      image: "/images/explore/bagha.jpg",
      size: "small",
      description: "Religious heritage"
    },
    {
      id: 3,
      name: "Padma River",
      image: "/images/explore/padma.webp",
      size: "medium",
      description: "Natural beauty"
    },
    {
      id: 4,
      name: "Varendra Research Museum",
      image: "/images/explore/varendra.jpg",
      size: "small",
      description: "Cultural heritage"
    },
    {
      id: 5,
      name: "Shahid Kamruzzaman Zoo",
      image: "/images/explore/zoo.jpg",
      size: "medium",
      description: "Wildlife sanctuary"
    },
    {
      id: 6,
      name: "Rajshahi College",
      image: "/images/explore/college.jpg",
      size: "small",
      description: "Educational landmark"
    }
  ]

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2'
      case 'medium':
        return 'col-span-1 row-span-2'
      default:
        return 'col-span-1 row-span-1'
    }
  }

  return (
    <section className="relative py-24 bg-black overflow-hidden" id="explore">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Explore</span>{' '}
            <span className="bg-gradient-to-r from-dr-yellow to-dr-orange bg-clip-text text-transparent">Rajshahi</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the rich cultural heritage and vibrant life of our beautiful city
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {places.map((place) => (
            <div
              key={place.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${getSizeClasses(place.size)}`}
            >
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{place.name}</h4>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Explore
