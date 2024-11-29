"use client"

const Cricket = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cricket Ball Animation */}
      <div className="absolute w-8 h-8 bg-dr-orange rounded-full animate-float glow-shadow 
                    top-1/4 left-1/4 opacity-50"></div>
      <div className="absolute w-6 h-6 bg-dr-yellow rounded-full animate-float 
                    top-3/4 right-1/4 opacity-30" style={{ animationDelay: '1s' }}></div>
      
      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-dr-orange to-transparent
                     animate-pulse-glow opacity-20"
            style={{
              top: `${20 * (i + 1)}%`,
              left: '0',
              right: '0',
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Diagonal Lines */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-screen bg-gradient-to-b from-transparent via-dr-yellow to-transparent
                   transform -rotate-45 animate-pulse-glow opacity-20"
          style={{
            left: `${30 * (i + 1)}%`,
            animationDelay: `${i * 0.7}s`
          }}
        ></div>
      ))}

      {/* Cricket Bat Silhouette */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-dr-yellow">
          <path d="M19,5L17.2,3.2C16.9,2.9 16.5,2.8 16.2,3.1L5.9,13.4L7.5,15L17.8,4.7C18.1,4.4 18,4 17.7,3.7L19,5M7.4,15L5.8,13.4L3.1,16.1C2.8,16.4 2.8,16.8 3.1,17.1L5.9,19.9C6.2,20.2 6.6,20.2 6.9,19.9L9.6,17.2L8,15.6L6.4,17.2L4.8,15.6L7.4,13L7.4,15Z" />
        </svg>
      </div>

      {/* Particle Effect */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-dr-yellow rounded-full animate-float opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        ></div>
      ))}
    </div>
  )
}

export default Cricket
