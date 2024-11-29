"use client"

const PlayerSearch = ({ onSearch }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <i className="fas fa-search text-gray-400"></i>
      </div>
      <input
        type="text"
        placeholder="Search players by name, country, or role..."
        className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-lg rounded-xl 
                 border border-white/10 focus:border-dr-orange/50
                 text-white placeholder-gray-400 outline-none transition-all"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}

export default PlayerSearch
