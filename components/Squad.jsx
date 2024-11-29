'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const Squad = () => {
  const players = [
    {
      name: "Anamul Haque Bijoy",
      role: "Wicket-Keeper Batter",
      image: "/players/anamul.jpg",
      country: "Bangladesh"
    },
    {
      name: "Taskin Ahmed",
      role: "Fast Bowler",
      image: "/players/taskin.jpg",
      country: "Bangladesh"
    },
    {
      name: "Jishan Alam",
      role: "Fast Bowler",
      image: "/players/jishan.jpg",
      country: "Bangladesh"
    },
    {
      name: "Yasir Ali Rabbi",
      role: "Middle Order Batter",
      image: "/players/yasir.jpg",
      country: "Bangladesh"
    },
    {
      name: "Sabbir Hossen",
      role: "Middle Order Batter",
      image: "/players/sabbir.jpg",
      country: "Bangladesh"
    },
    {
      name: "Sanjamul Islam",
      role: "All-Rounder",
      image: "/players/sanjamul.jpg",
      country: "Bangladesh"
    },
    {
      name: "M Meherob Hasan",
      role: "All-Rounder",
      image: "/players/meherob.jpg",
      country: "Bangladesh"
    },
    {
      name: "Akbar Ali",
      role: "Wicket-Keeper Batter",
      image: "/players/akbar.jpg",
      country: "Bangladesh"
    },
    {
      name: "Hasan Murad",
      role: "Spin Bowler",
      image: "/players/hasan.jpg",
      country: "Bangladesh"
    },
    {
      name: "Shafiul Islam",
      role: "Fast Bowler",
      image: "/players/shafiul.jpg",
      country: "Bangladesh"
    },
    {
      name: "Mohor Sheikh Antar",
      role: "All-Rounder",
      image: "/players/mohor.jpg",
      country: "Bangladesh"
    },
    {
      name: "Sad Nasim",
      role: "All-Rounder",
      image: "/players/sad.jpg",
      country: "Pakistan"
    },
    {
      name: "Lahiru Samarakoon",
      role: "All-Rounder",
      image: "/players/lahiru.jpg",
      country: "Sri Lanka"
    }
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden" id="squad">
      <div className="mb-20">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our</span>{' '}
            <span className="gradient-text">Squad</span>
          </h2>
        </div>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView={4}
          speed={5000}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.25,
            minimumVelocity: 0.1
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false
          }}
          loop={true}
          centeredSlides={false}
          className="squad-slider"
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 20 },
            640: { slidesPerView: 2.5, spaceBetween: 25 },
            768: { slidesPerView: 3.5, spaceBetween: 25 },
            1024: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
        >
          {[...players, ...players].map((player, index) => (
            <SwiperSlide key={index} className="swiper-slide-squad">
              <div className="relative group aspect-[3/4] overflow-hidden rounded-lg">
                <div className="relative w-full h-full">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Country Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm text-white">
                    {player.country}
                  </div>

                  {/* Player Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">{player.name}</h3>
                      <p className="text-gray-300 text-sm mb-1">{player.role}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-dr-orange/20 rounded-full text-dr-orange">
                          {player.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .squad-slider {
          overflow: visible !important;
          padding: 20px 0;
        }
        .swiper-slide-squad {
          transition: all 0.5s ease;
          opacity: 0.7;
        }
        .swiper-slide-squad:hover {
          transform: translateY(-10px);
          opacity: 1;
        }
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .swiper-horizontal > .swiper-scrollbar {
          display: none !important;
        }
      `}</style>
    </section>
  )
}

export default Squad
