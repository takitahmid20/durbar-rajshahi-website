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
  // ... rest of the matches
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

export const getMatchStatus = (matchDate, matchTime) => {
  const now = new Date()
  const matchDateTime = getMatchDateTime(matchDate, matchTime)
  const matchEndTime = new Date(matchDateTime.getTime() + (3 * 60 * 60 * 1000))

  if (now > matchEndTime) {
    return { status: 'finished', color: 'text-gray-400', label: 'Finished' }
  } else if (now >= matchDateTime && now <= matchEndTime) {
    return { status: 'live', color: 'text-green-500', label: 'Live Now' }
  } else {
    return { status: 'upcoming', color: 'text-dr-orange', label: 'Upcoming' }
  }
}
