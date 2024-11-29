export const matches = [
  {
    id: 1,
    date: "Dec 30, Mon",
    time: "1:30 PM LOCAL",
    homeTeam: "Fortune Barishal",
    awayTeam: "Durbar Rajshahi",
    venue: "Shere Bangla National Stadium, Dhaka",
    homeLogo: "/images/teams/barishal.png",
    awayLogo: "/images/logo.png"
  },
  {
    id: 2,
    date: "Jan 2, Thu",
    time: "1:30 PM LOCAL",
    homeTeam: "Durbar Rajshahi",
    awayTeam: "Dhaka Capital",
    venue: "Shere Bangla National Stadium, Dhaka",
    homeLogo: "/images/logo.png",
    awayLogo: "/images/teams/dhaka.png"
  },
  {
    id: 3,
    date: "Jan 3, Fri",
    time: "2:00 PM LOCAL",
    homeTeam: "Durbar Rajshahi",
    awayTeam: "Chittagong Kings",
    venue: "Shere Bangla National Stadium, Dhaka",
    homeLogo: "/images/logo.png",
    awayLogo: "/images/teams/chittagong.png"
  },
  {
    id: 4,
    date: "Jan 10, Fri",
    time: "2:00 PM LOCAL",
    homeTeam: "Durbar Rajshahi",
    awayTeam: "Khulna Tigers",
    venue: "Sylhet",
    homeLogo: "/images/logo.png",
    awayLogo: "/images/teams/khulna.png"
  },
  {
    id: 5,
    date: "Jan 12, Sun",
    time: "6:30 PM LOCAL",
    homeTeam: "Durbar Rajshahi",
    awayTeam: "Dhaka Capital",
    venue: "Sylhet",
    homeLogo: "/images/logo.png",
    awayLogo: "/images/teams/dhaka.png"
  },
  {
    id: 6,
    date: "Jan 17, Fri",
    time: "2:00 PM LOCAL",
    homeTeam: "Durbar Rajshahi",
    awayTeam: "Sylhet Strikers",
    venue: "Chattogram",
    homeLogo: "/images/logo.png",
    awayLogo: "/images/teams/sylhet.png"
  },
  {
    id: 7,
    date: "Jan 19, Sun",
    time: "6:30 PM LOCAL",
    homeTeam: "Durbar Rajshahi",
    awayTeam: "Khulna Tigers",
    venue: "Chattogram",
    homeLogo: "/images/logo.png",
    awayLogo: "/images/teams/khulna.png"
  },
  {
    id: 8,
    date: "Jan 23, Thu",
    time: "1:30 PM LOCAL",
    homeTeam: "Durbar Rajshahi",
    awayTeam: "Rangpur Riders",
    venue: "Chattogram",
    homeLogo: "/images/logo.png",
    awayLogo: "/images/teams/rangpur.png"
  },
  {
    id: 9,
    date: "Jan 26, Sun",
    time: "6:30 PM LOCAL",
    homeTeam: "Durbar Rajshahi",
    awayTeam: "Rangpur Riders",
    venue: "Dhaka",
    homeLogo: "/images/logo.png",
    awayLogo: "/images/teams/rangpur.png"
  },
  {
    id: 10,
    date: "Jan 27, Mon",
    time: "6:30 PM LOCAL",
    homeTeam: "Durbar Rajshahi",
    awayTeam: "Sylhet Strikers",
    venue: "Dhaka",
    homeLogo: "/images/logo.png",
    awayLogo: "/images/teams/sylhet.png"
  }
]

export const getMatchDateTime = (matchDate, matchTime) => {
  const [month, day] = matchDate.split(" ")[0].split(",")[0].split(" ")
  const year = 2025
  const [hours, minutes] = matchTime.split(" ")[0].split(":")
  const isPM = matchTime.includes("PM")
  
  const monthMap = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  }

  return new Date(
    year,
    monthMap[month],
    parseInt(day),
    isPM ? parseInt(hours) + 12 : parseInt(hours),
    parseInt(minutes)
  )
}

export const getNextMatch = () => {
  const now = new Date()
  
  // Find the next upcoming match
  const upcomingMatch = matches.find(match => {
    const matchDateTime = getMatchDateTime(match.date, match.time)
    return matchDateTime > now
  })

  // If no upcoming match found, return the first match (season restart)
  return upcomingMatch || matches[0]
}

export const getMatchStatus = (matchDate, matchTime, currentTime = new Date()) => {
  const matchDateTime = getMatchDateTime(matchDate, matchTime)
  const matchEndTime = new Date(matchDateTime.getTime() + (3 * 60 * 60 * 1000))

  if (currentTime > matchEndTime) {
    return { status: 'finished', color: 'text-gray-400', label: 'Finished' }
  } else if (currentTime >= matchDateTime && currentTime <= matchEndTime) {
    return { status: 'live', color: 'text-green-500', label: 'Live Now' }
  } else {
    return { status: 'upcoming', color: 'text-dr-orange', label: 'Upcoming' }
  }
}

// Test function to verify match status behavior
export const testMatchStatus = () => {
  const match = matches[0] // Dec 30 match
  
  // Test morning of match day
  const morningTime = new Date(2024, 11, 30, 10, 0) // 10:00 AM
  console.log('Morning status:', getMatchStatus(match.date, match.time, morningTime))
  
  // Test during match
  const duringMatch = new Date(2024, 11, 30, 14, 0) // 2:00 PM
  console.log('During match status:', getMatchStatus(match.date, match.time, duringMatch))
  
  // Test after match
  const afterMatch = new Date(2024, 11, 30, 17, 0) // 5:00 PM
  console.log('After match status:', getMatchStatus(match.date, match.time, afterMatch))
}

// Run test
testMatchStatus()
