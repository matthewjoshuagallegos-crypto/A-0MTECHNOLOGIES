/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 * ==========================================
 */

export interface GameMarketData {
  id: string;
  title: string;
  developer: string;
  publisher: string;
  genre: string;
  mau: string; // Monthly Active Users
  peakConcurrent: string;
  marketValuation: string;
  platforms: string[];
  availability: "High" | "Medium" | "Low" | "Exclusive";
  regionDominance: string;
  vendorInterestScore: number; // 0-100
  releaseDate: string;
  status: "Live" | "Beta" | "Legacy";
}

export const POPULAR_GAMES_MARKET_DATA: GameMarketData[] = [
  {
    id: "lol",
    title: "League of Legends",
    developer: "Riot Games",
    publisher: "Tencent",
    genre: "MOBA",
    mau: "180M+",
    peakConcurrent: "8M",
    marketValuation: "$1.75B (Annual Rev)",
    platforms: ["PC", "Mac"],
    availability: "High",
    regionDominance: "Asia / China",
    vendorInterestScore: 98,
    releaseDate: "2009-10-27",
    status: "Live"
  },
  {
    id: "fortnite",
    title: "Fortnite",
    developer: "Epic Games",
    publisher: "Epic Games",
    genre: "Battle Royale",
    mau: "230M+",
    peakConcurrent: "12.3M",
    marketValuation: "$5.8B (Annual Rev)",
    platforms: ["PC", "PS5", "Xbox Series X", "Switch", "Mobile"],
    availability: "High",
    regionDominance: "North America / Europe",
    vendorInterestScore: 99,
    releaseDate: "2017-07-25",
    status: "Live"
  },
  {
    id: "minecraft",
    title: "Minecraft",
    developer: "Mojang Studios",
    publisher: "Microsoft",
    genre: "Sandbox",
    mau: "166M+",
    peakConcurrent: "N/A",
    marketValuation: "$3B+ (Est. Brand Value)",
    platforms: ["PC", "PS5", "Xbox Series X", "Switch", "Mobile", "VR"],
    availability: "High",
    regionDominance: "Global",
    vendorInterestScore: 95,
    releaseDate: "2011-11-18",
    status: "Live"
  },
  {
    id: "roblox",
    title: "Roblox",
    developer: "Roblox Corporation",
    publisher: "Roblox Corporation",
    genre: "Platform / Creation",
    mau: "200M+",
    peakConcurrent: "5.7M",
    marketValuation: "$25B (Market Cap)",
    platforms: ["PC", "Xbox", "Mobile", "VR"],
    availability: "High",
    regionDominance: "Global (Youth Demographic)",
    vendorInterestScore: 97,
    releaseDate: "2006-09-01",
    status: "Live"
  },
  {
    id: "gtav",
    title: "Grand Theft Auto V",
    developer: "Rockstar North",
    publisher: "Take-Two Interactive",
    genre: "Action-Adventure",
    mau: "N/A",
    peakConcurrent: "250K+ (Steam Only)",
    marketValuation: "$8B+ (Lifetime Rev)",
    platforms: ["PC", "PS5", "Xbox Series X"],
    availability: "Medium",
    regionDominance: "Global",
    vendorInterestScore: 94,
    releaseDate: "2013-09-17",
    status: "Live"
  },
  {
    id: "valorant",
    title: "Valorant",
    developer: "Riot Games",
    publisher: "Riot Games",
    genre: "Tactical Shooter",
    mau: "28M+",
    peakConcurrent: "2M+",
    marketValuation: "$500M+ (Est. Rev)",
    platforms: ["PC", "Console (Beta)"],
    availability: "High",
    regionDominance: "Global / Esports",
    vendorInterestScore: 92,
    releaseDate: "2020-06-02",
    status: "Live"
  },
  {
    id: "genshin",
    title: "Genshin Impact",
    developer: "miHoYo",
    publisher: "HoYoverse",
    genre: "Action RPG",
    mau: "65M+",
    peakConcurrent: "N/A",
    marketValuation: "$4B+ (Lifetime Mobile Rev)",
    platforms: ["PC", "PS5", "Mobile"],
    availability: "High",
    regionDominance: "Asia / Global",
    vendorInterestScore: 96,
    releaseDate: "2020-09-28",
    status: "Live"
  },
  {
    id: "cs2",
    title: "Counter-Strike 2",
    developer: "Valve",
    publisher: "Valve",
    genre: "Tactical Shooter",
    mau: "30M+",
    peakConcurrent: "1.5M",
    marketValuation: "$1B+ (Est. Annual Rev)",
    platforms: ["PC"],
    availability: "High",
    regionDominance: "Europe / CIS",
    vendorInterestScore: 90,
    releaseDate: "2023-09-27",
    status: "Live"
  }
];
