import { getMatchDateTime, getMatchStatus } from '../utils/matchUtils.js';

// Test for Dec 30 match
const matchDate = "Dec 30, Mon";
const matchTime = "1:30 PM LOCAL";

// Test different times of the day
console.log('\n=== Match Status Test Results ===\n');

// 10:00 AM - Before match
const beforeMatch = new Date(2024, 11, 30, 10, 0);
console.log('10:00 AM:', getMatchStatus(matchDate, matchTime, beforeMatch));

// 1:30 PM - Start of match
const startMatch = new Date(2024, 11, 30, 13, 30);
console.log('1:30 PM:', getMatchStatus(matchDate, matchTime, startMatch));

// 3:00 PM - During match
const duringMatch = new Date(2024, 11, 30, 15, 0);
console.log('3:00 PM:', getMatchStatus(matchDate, matchTime, duringMatch));

// 4:31 PM - After match
const afterMatch = new Date(2024, 11, 30, 16, 31);
console.log('4:31 PM:', getMatchStatus(matchDate, matchTime, afterMatch));
