/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL - Matthew Joshua Gallegos (Sole Proprietor of A#0M Technologies, No Custodian)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */


// --- RADIUS EQUATION ---
const _radiusPromise = new Promise<{ radius: number; formula: string }>((resolve) => {
  const x = 42; // Example vertical intercept
  const y = 24; // Example horizontal intercept
  const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  resolve({ radius, formula: `r = sqrt(${x}² + ${y}²)` });
});
void _radiusPromise;
// -----------------------

export interface PhysicalAsset {
  id: string;
  name: string;
  category: 'Tool' | 'Clothing' | 'Carriage' | 'Estate' | 'Commodity' | 'Currency' | 'Artisan Project' | 'Material' | 'A#0M Project' | 'Crypto' | 'Patent';
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic' | 'Global' | 'Zero-Cost';
  price: number;
  lastPrice: number;
  image: string;
  description: string;
  history: { date: string; price: number }[];
  fmv?: number; // Fair Trade Value
  purity?: string; // e.g., "100% - Pure"
  materialCost?: number; // Cost of raw materials
  interestedArtisans?: number; // Number of artisans observing this
  dilution?: string;
  creationCost?: number;
  activeInvestors?: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  category: string;
}

export const MOCK_TASKS: Task[] = [
  {
    id: 't1',
    title: 'Master Node Optimization',
    description: 'Optimize the kernel for faster data throughput and reduced latency in the A#0M network.',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2026-04-15',
    category: 'Development'
  },
  {
    id: 't2',
    title: 'Artisan Guild Onboarding',
    description: 'Create a comprehensive guide for new artisans joining the guild, focusing on trade ethics and tool mastery.',
    status: 'Pending',
    priority: 'Medium',
    dueDate: '2026-04-20',
    category: 'Community'
  },
  {
    id: 't3',
    title: 'Security Audit - Phase 2',
    description: 'Perform a deep dive into the AES-512-GCM implementation to ensure no side-channel vulnerabilities exist.',
    status: 'Completed',
    priority: 'High',
    dueDate: '2026-04-10',
    category: 'Security'
  },
  {
    id: 't4',
    title: 'Marketplace Liquidity Analysis',
    description: 'Analyze the current trade volume of legendary assets and propose a strategy for maintaining stable FMV.',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2026-04-18',
    category: 'Finance'
  }
];

export interface CashOutHistory {
  amount: number;
  method: 'Stripe' | 'CashApp' | 'Chime';
  timestamp: string;
  status: 'Pending' | 'Completed';
  cashTag?: string; // For Courier/CashApp
  guildTag?: string; // For Courier
  stripeBank?: string; // For Stripe
}

export interface TitheInfo {
  tin?: string;
  tinType?: 'SSN' | 'EIN';
  isCompleted: boolean;
  lastUpdated?: string;
}

export type Specialization = 'None' | 'Developer' | 'Programmer' | 'Gamer' | 'Musician' | 'SoundEngineer' | 'GameDesigner' | 'FrontendEngineer' | 'BackendEngineer' | 'DataScientist';

export interface UserProfile {
  uid: string;
  artisanId: string;
  guildAddress: string;
  artisanName: string;
  portraitURL: string;
  balance: number;
  monetizationActive: boolean;
  totalEarnings: number;
  earningsHistory: CashOutHistory[];
  guildTag?: string;
  cashTag?: string;
  chimeTag?: string;
  stripeBank?: string;
  titheRecord?: TitheInfo;
  bio?: string;
  preferredSpecialization?: Specialization;
  showcaseAssets?: string[];
  connections: {
    xbox: boolean;
    playstation: boolean;
    pc: boolean;
  };
  onboardingCompleted?: boolean;
}

export const DEFAULT_USER_PROFILE: UserProfile = {
  uid: 'new-user',
  artisanId: 'A0M-NEW',
  guildAddress: 'new-user@a0m.network',
  artisanName: 'New User Log-in',
  portraitURL: 'https://picsum.photos/seed/a0m/200/200',
  balance: 0,
  monetizationActive: false,
  totalEarnings: 0,
  earningsHistory: [],
  bio: 'Welcome to A#0M Technologies. Please complete your profile.',
  preferredSpecialization: 'None',
  showcaseAssets: [],
  connections: {
    xbox: false,
    playstation: false,
    pc: false,
  },
  onboardingCompleted: false
};

export interface UserPortfolio {
  balance: number;
  assets: string[]; // IDs of owned assets
  totalValue: number;
  history: { date: string; value: number }[];
}

export interface LeaderboardEntry {
  uid: string;
  name: string;
  category: 'Gamer' | 'Developer' | 'Artist' | 'Investor';
  score: number;
  contribution: string;
  rank?: number;
  avatar?: string;
  lastUpdated?: string;
}

export const REAL_WORLD_ASSETS: PhysicalAsset[] = [
  {
    id: '1',
    name: 'Forged Iron Scythe',
    category: 'Tool',
    rarity: 'Legendary',
    price: 450.50,
    lastPrice: 420.00,
    image: 'https://picsum.photos/seed/scythe/400/400',
    description: 'A scythe forged in the depths of the mountain forge. Whispers of the master blacksmith follow its wielder.',
    history: [
      { date: '2026-03-20', price: 380 },
      { date: '2026-03-21', price: 400 },
      { date: '2026-03-22', price: 420 },
      { date: '2026-03-23', price: 410 },
      { date: '2026-03-24', price: 435 },
      { date: '2026-03-25', price: 450.5 },
    ]
  },
  {
    id: '2',
    name: 'Carved Wooden Mask',
    category: 'Clothing',
    rarity: 'Epic',
    price: 125.00,
    lastPrice: 130.00,
    image: 'https://picsum.photos/seed/mask/400/400',
    description: 'Hand-carved traditional mask. Perfect for high-stakes theatrical performances.',
    history: [
      { date: '2026-03-20', price: 110 },
      { date: '2026-03-21', price: 115 },
      { date: '2026-03-22', price: 120 },
      { date: '2026-03-23', price: 130 },
      { date: '2026-03-24', price: 128 },
      { date: '2026-03-25', price: 125 },
    ]
  },
  {
    id: '3',
    name: 'Polished Ruby Core',
    category: 'Material',
    rarity: 'Mythic',
    price: 2100.00,
    lastPrice: 1950.00,
    image: 'https://picsum.photos/seed/ruby/400/400',
    description: 'The essence of a rare gemstone. Can be used to upgrade any jewelry to its ultimate form.',
    history: [
      { date: '2026-03-20', price: 1800 },
      { date: '2026-03-21', price: 1850 },
      { date: '2026-03-22', price: 1900 },
      { date: '2026-03-23', price: 1950 },
      { date: '2026-03-24', price: 2050 },
      { date: '2026-03-25', price: 2100 },
    ]
  },
  {
    id: '4',
    name: 'Leather Stalker Boots',
    category: 'Clothing',
    rarity: 'Rare',
    price: 45.00,
    lastPrice: 42.00,
    image: 'https://picsum.photos/seed/leatherboots/400/400',
    description: 'Silence your footsteps and blend into the forest.',
    history: [
      { date: '2026-03-20', price: 35 },
      { date: '2026-03-21', price: 38 },
      { date: '2026-03-22', price: 40 },
      { date: '2026-03-23', price: 42 },
      { date: '2026-03-24', price: 44 },
      { date: '2026-03-25', price: 45 },
    ]
  },
  {
    id: '5',
    name: 'Brass Telescope',
    category: 'Tool',
    rarity: 'Legendary',
    price: 890.00,
    lastPrice: 920.00,
    image: 'https://picsum.photos/seed/telescope/400/400',
    description: 'Allows viewing of distant lands. Warning: Heavy brass construction.',
    history: [
      { date: '2026-03-20', price: 850 },
      { date: '2026-03-21', price: 870 },
      { date: '2026-03-22', price: 900 },
      { date: '2026-03-23', price: 920 },
      { date: '2026-03-24', price: 910 },
      { date: '2026-03-25', price: 890 },
    ]
  },
  {
    id: '6',
    name: 'Artisan Genesis Sculpture',
    category: 'Artisan Project',
    rarity: 'Zero-Cost',
    price: 45000.00,
    lastPrice: 38000.00,
    fmv: 45000.00,
    purity: '100% - Pure',
    materialCost: 0.00,
    interestedArtisans: 142,
    image: 'https://picsum.photos/seed/sculpture/400/400',
    description: 'A pure physical asset generated from clay. Proof for art collectors that value can be manifested from raw earth and community consensus.',
    history: [
      { date: '2026-03-20', price: 0.00 },
      { date: '2026-03-21', price: 1200 },
      { date: '2026-03-22', price: 8500 },
      { date: '2026-03-23', price: 22000 },
      { date: '2026-03-24', price: 38000 },
      { date: '2026-03-25', price: 45000 },
    ]
  },
  {
    id: '7',
    name: 'World Trade Ledger (WTL)',
    category: 'Commodity',
    rarity: 'Global',
    price: 12450.75,
    lastPrice: 12300.50,
    fmv: 12450.75,
    purity: '100% - Pure',
    interestedArtisans: 8904,
    image: 'https://picsum.photos/seed/ledger/400/400',
    description: 'A comprehensive physical ledger tracking the top 500 global trade entities. Verified fair market value, completely undiluted pages.',
    history: [
      { date: '2026-03-20', price: 12100 },
      { date: '2026-03-21', price: 12150 },
      { date: '2026-03-22', price: 12200 },
      { date: '2026-03-23', price: 12280 },
      { date: '2026-03-24', price: 12300 },
      { date: '2026-03-25', price: 12450.75 },
    ]
  },
  {
    id: '8',
    name: 'Gold Stamped Coin',
    category: 'Currency',
    rarity: 'Mythic',
    price: 4.50,
    lastPrice: 3.80,
    fmv: 4.50,
    purity: '100% - Pure',
    materialCost: 0.0001,
    interestedArtisans: 340,
    image: 'https://picsum.photos/seed/goldcoin/400/400',
    description: 'A guild-wide physical coin minted in the artisan guild. Started at fractions of a penny, demonstrating massive growth potential from raw ore.',
    history: [
      { date: '2026-03-20', price: 0.0001 },
      { date: '2026-03-21', price: 0.50 },
      { date: '2026-03-22', price: 1.20 },
      { date: '2026-03-23', price: 2.50 },
      { date: '2026-03-24', price: 3.80 },
      { date: '2026-03-25', price: 4.50 },
    ]
  },
  {
    id: '9',
    name: 'Project: Woven Tapestry',
    category: 'Artisan Project',
    rarity: 'Zero-Cost',
    price: 1250000.00,
    lastPrice: 1100000.00,
    fmv: 1250000.00,
    purity: '100% - Pure',
    materialCost: 0.00,
    interestedArtisans: 56,
    image: 'https://picsum.photos/seed/tapestry/400/400',
    description: 'An advanced woven tapestry developed entirely in-house. World trade collectors are actively scouting this project for commission.',
    history: [
      { date: '2026-03-20', price: 500000 },
      { date: '2026-03-21', price: 650000 },
      { date: '2026-03-22', price: 800000 },
      { date: '2026-03-23', price: 950000 },
      { date: '2026-03-24', price: 1100000 },
      { date: '2026-03-25', price: 1250000 },
    ]
  },
  {
    id: '10',
    name: 'Wireless Hub APN Patent',
    category: 'Patent',
    rarity: 'Global',
    price: 2500000.00,
    lastPrice: 2100000.00,
    fmv: 2500000.00,
    purity: '100% - Pure',
    image: 'https://picsum.photos/seed/patent1/400/400',
    description: 'A manufactured patent for the A#0M Wireless Hub APN Bridge technology. Unbiased valuation based on global gaming network integration.',
    history: [
      { date: '2026-03-20', price: 1500000 },
      { date: '2026-03-21', price: 1700000 },
      { date: '2026-03-22', price: 1900000 },
      { date: '2026-03-23', price: 2100000 },
      { date: '2026-03-24', price: 2300000 },
      { date: '2026-03-25', price: 2500000 },
    ]
  },
  {
    id: '11',
    name: 'MoccaNet Tunnel Patent',
    category: 'Patent',
    rarity: 'Mythic',
    price: 1850000.00,
    lastPrice: 1600000.00,
    fmv: 1850000.00,
    purity: '100% - Pure',
    image: 'https://picsum.photos/seed/patent2/400/400',
    description: 'Patent for the MoccaNet secure tunneling protocol. Essential for high-performance artisan data transfer.',
    history: [
      { date: '2026-03-20', price: 1200000 },
      { date: '2026-03-21', price: 1350000 },
      { date: '2026-03-22', price: 1500000 },
      { date: '2026-03-23', price: 1600000 },
      { date: '2026-03-24', price: 1750000 },
      { date: '2026-03-25', price: 1850000 },
    ]
  }
];
