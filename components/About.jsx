'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative py-24 overflow-hidden bg-black"
      id="about"
    >
      {/* Animated Background Texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute w-full h-full bg-[radial-gradient(circle_800px_at_50%_-40%,#FF4D00,transparent)]"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF4D00' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: 'texture-scroll 30s linear infinite',
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4" ref={aboutRef}>
        {/* Header with Animated Gradient */}
        <div className="relative text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-slide-up"
            style={{
              animationDelay: '0.2s',
              animationFillMode: 'forwards',
            }}
          >
            <span className="text-white">About</span>{' '}
            <span className="gradient-text">Durbar Rajshahi</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-dr-orange to-transparent opacity-0 animate-fade-in"
            style={{
              animationDelay: '0.4s',
              animationFillMode: 'forwards',
            }}
          />
        </div>

        {/* Main Content with Staggered Animation */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Legacy",
              desc: "15+ years of cricket excellence in Rajshahi",
              icon: "🏆",
              delay: "0.6s",
            },
            {
              title: "Valentine Group",
              desc: "Backed by professional excellence",
              icon: "⭐",
              delay: "0.8s",
            },
            {
              title: "Achievement",
              desc: "12 championships and counting",
              icon: "🎯",
              delay: "1s",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl transform hover:scale-105 transition-all duration-500 opacity-0 animate-slide-up hover:shadow-glow"
              style={{
                animationDelay: item.delay,
                animationFillMode: 'forwards',
                background:
                  'linear-gradient(to bottom right, rgba(45, 27, 105, 0.5), rgba(45, 27, 105, 0.2))',
              }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-4xl mb-2 animate-bounce">{item.icon}</div>
                <h3 className="text-2xl font-bold gradient-text">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <div
              className="relative px-6 py-3 glass rounded-xl transform hover:scale-105 transition-all duration-500 opacity-0 animate-fade-in cursor-pointer hover:shadow-glow"
              style={{
                animationDelay: '1.2s',
                animationFillMode: 'forwards',
                background:
                  'linear-gradient(to right, rgba(45, 27, 105, 0.5), rgba(255, 77, 0, 0.2))',
              }}
            >
              <span className="text-lg font-medium">
                Powered by <span className="gradient-text">Valentine Group</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes texture-scroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 100%;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .shadow-glow {
          box-shadow: 0 0 20px rgba(255, 77, 0, 0.2);
        }
      `}</style>
    </section>
  )
}
