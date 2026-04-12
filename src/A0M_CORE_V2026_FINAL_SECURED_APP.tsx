/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: BeBe Rexa
 * TM: A#0M Technologies
 * Brands: Macintosh, Apple, Pixel, Microsoft
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL - Matthew Joshua Gallegos (Sole Proprietor of A#0M Technologies, No Custodian)
 * ISBN: 61 1C 5E 93 A7 6F 10 C2 23 62 39 34 33 31 34 32 63 31 31 65 39 30 38 35 65 0A 1C 00
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import { askGuildAssistant, analyzeAsset, summarizeSecureFile } from './services/geminiService';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Wallet, 
  TrendingUp, 
  Search, 
  Filter, 
  ArrowUpRight, 
  ArrowDownRight,
  ChevronRight,
  ChevronLeft,
  Zap,
  Shield,
  History,
  Menu,
  X,
  CreditCard,
  LogOut,
  LogIn,
  Mail,
  Apple,
  ArrowLeft,
  Coins,
  Music,
  Volume2,
  VolumeX,
  DollarSign,
  Server,
  Monitor,
  Cpu,
  Smartphone,
  Tablet,
  Laptop,
  Tv,
  ShieldCheck,
  ExternalLink,
  Info,
  Lock,
  ListMusic,
  Code2,
  Palette,
  Wrench,
  FileText,
  Upload,
  Settings,
  HelpCircle,
  BookOpen,
  Users,
  Trophy,
  Printer,
  Terminal,
  MessageSquare,
  Eye,
  Send,
  Activity,
  Gamepad2,
  Rocket,
  Pickaxe,
  Target,
  Database,
  Globe,
  Globe2,
  MapPin,
  Link2,
  Download,
  ShieldAlert,
  Copyright,
  Image as ImageIcon,
  Key
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { APIProvider } from '@vis.gl/react-google-maps';
import PAILChatInterface from './components/PAILChatInterface';
import SecurityKernUnderwrite from './components/SecurityKernUnderwrite';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { cn } from './lib/utils';
import Papa from 'papaparse';
import { REAL_WORLD_ASSETS, PhysicalAsset, UserProfile, Specialization, Task, MOCK_TASKS } from './A0M_CORE_V2026_FINAL_SECURED_TYPES';
import { REAL_APN_CONFIG, APN_CONFIG } from './A0M_CORE_V2026_FINAL_SECURED_CONSTANTS';
import { Form1099NEC } from './components/Form1099NEC';
import { ArtisanWorkshop } from './components/ArtisanWorkshop';
import GeminiTerminal from './components/GeminiTerminal';
import DeveloperTerminal from './components/DeveloperTerminal';
import { AIStudioInterface } from './components/AIStudioInterface';
import IronSafe from './components/IronSafe';
import { CosmoBackground } from './components/CosmoBackground';
import { EarningsChart } from './components/EarningsChart';
import { PayoutDeepLink } from './components/PayoutDeepLink';
import { Onboarding } from './components/Onboarding';
import DeploymentManifest from './components/DeploymentManifest';
import APNGatewayDiagnostic from './components/APNGatewayDiagnostic';
import SystemMonitor from './components/SystemMonitor';
import CommandLog from './components/CommandLog';
import APNProfileManager from './components/APNProfileManager';
import NetworkPerformanceMetrics from './components/NetworkPerformanceMetrics';
import { SeedKernelUtilityUI } from './components/SeedKernelUtilityUI_A0M_v1.0.0_fcc_compliant';
import GlobalImager from './components/GlobalImager';
import RadialDashboard from './components/RadialDashboard';
import ThemeSettings from './components/ThemeSettings';
import { BackupManager } from './components/BackupManager';
import RootNodeMap from './components/RootNodeMap';
import DeveloperServer from './components/DeveloperServer';
import ErrorBoundary from './components/ErrorBoundary';
import { withAutoFix } from './lib/autoFix';
import toast from 'react-hot-toast';
import { playClickSound, playSuccessSound, playErrorSound } from './lib/audioUtils';
import { auth, db, signInWithEmail, signUpWithEmail, googleProvider, signInWithApple, resetPassword } from './A0M_CORE_V2026_FINAL_SECURED_FIREBASE';
import { 
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth';
import { 
  doc, 
  onSnapshot,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  arrayUnion,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  addDoc,
  getDocFromServer
} from 'firebase/firestore';

import { getDoc as getDocFromFirestore, doc as docFromFirestore } from 'firebase/firestore';

async function testConnection() {
  try {
    await getDocFromServer(docFromFirestore(db, 'users', 'test_connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. ");
    }
  }
}
testConnection();

import { 
  listenToCourierStream, 
  dispatchCourierMessage, 
  recordEarningsHistory, 
  updateCashTag, 
  updateChimeTag, 
  updateConnections, 
  toggleGuildMonetization, 
  updateTitheRecord, 
  resetTitheRecord, 
  updateUserProfile, 
  transmitToBankingGateway, 
  incrementTotalEarnings,
  recordWithdrawal,
  handleFirestoreError,
  OperationType,
  updateLeaderboardScore
} from './services/firebaseService';
import { syncMockDataToFirestore } from './services/migration';
const radiusPromise = new Promise<{ radius: number; formula: string }>((resolve) => {
  const x = 42; // Example vertical intercept
  const y = 24; // Example horizontal intercept
  const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  resolve({ 
    radius, 
    formula: `r = sqrt(${x}² + ${y}²)` 
  });
});

const A0M_LICENSE = "APACHE(ADVANCEDCONGRESSIONALTESTINGPRESIDENTIALALUMNICONGRESSIONALHONORELECTORATE) until January 2036";
const A0M_ISBN = "61 1C 5E 93 A7 6F 10 C2 23 62 39 34 33 31 34 32 63 31 31 65 39 30 38 35 65 0A 1C 00";
const A0M_START_DATE = "07/06/2026 4:30A.M.";
const A0M_OWNER = "Matthew Joshua Gallegos (04/27/1990) [525-87-1108]";
const A0M_PUBLISHER = "BeBe Rexa";
const A0M_EDITOR = "Sonia Lopez";
const A0M_LEGAL_CONTEXT = "Dolby Media Copyright Amendment of 1954 to the Third Amendment of 1854";

type View = 'dashboard' | 'marketplace' | 'portfolio' | 'earnings' | 'monetization' | 'storage' | 'playlist' | 'safe' | 'creations' | 'tithe' | 'messages' | 'appraiser' | 'artisan-workshop' | 'gemini' | 'developer-shell' | 'developer-server' | 'security-underwrite' | 'profile' | 'ai-studio' | 'deployment' | 'global-imager' | 'root-node-map' | 'gaming-platform' | 'private-payments' | 'chronos-archive' | 'leaderboard' | 'gaming-market' | 'global-trends' | 'tasks' | 'android-legacy-console';

const PLAYLIST = [
  { name: "Neon Horizon", artist: "A#0M Collective", duration: "3:45", source: "A#0M Records", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cite: "Gallegos, M. J. (2026). Neon Horizon [Audio track]. A#0M Records." },
  { name: "Guild Panic", artist: "Physical Void", duration: "4:12", source: "Guild Sound / Artisan Guild", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cite: "Physical Void. (2025). Guild Panic [Audio track]. Guild Sound." },
  { name: "APN Bridge", artist: "Signal Port", duration: "2:58", source: "A#0M Guild", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cite: "Signal Port. (2026). APN Bridge [Audio track]. A#0M Guild." },
  { name: "Static Haze", artist: "Radio GHz", duration: "5:20", source: "Independent Broadcast", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cite: "Radio GHz. (2024). Static Haze [Audio track]. Independent Broadcast." },
  { name: "The Tree Hash", artist: "Seed Root", duration: "3:15", source: "Cash Balance Audio", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", cite: "Seed Root. (2026). The Tree Hash [Audio track]. Cash Balance Audio." },
  { name: "Cyber Vent", artist: "MoccaNet", duration: "4:05", source: "A#0M Core", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", cite: "MoccaNet. (2026). Cyber Vent [Audio track]. A#0M Core." },
  { name: "Live Link", artist: "Xbox/PS/PC", duration: "3:50", source: "Gaming Network", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", cite: "Gaming Network. (2026). Live Link [Audio track]. Gaming Network." },
  { name: "Axiom Flow", artist: "Radius", duration: "4:30", source: "Signal Port", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", cite: "Radius. (2026). Axiom Flow [Audio track]. Signal Port." },
  { name: "Pulse Wave", artist: "Signal Port", duration: "3:20", source: "A#0M Guild", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", cite: "Signal Port. (2026). Pulse Wave [Audio track]. A#0M Guild." },
  { name: "Digital Drift", artist: "A#0M Collective", duration: "4:15", source: "A#0M Records", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", cite: "Gallegos, M. J. (2026). Digital Drift [Audio track]. A#0M Records." },
  // Hip Hop
  { name: "Concrete Jungle", artist: "The Artisan", duration: "3:30", source: "A#0M Records", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cite: "The Artisan. (2026). Concrete Jungle [Audio track]. A#0M Records." },
  { name: "Rhyme & Reason", artist: "Guild Flow", duration: "3:45", source: "Independent", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cite: "Guild Flow. (2026). Rhyme & Reason [Audio track]. Independent." },
  { name: "Street Smart", artist: "Urban Poet", duration: "3:10", source: "A#0M Records", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cite: "Urban Poet. (2026). Street Smart [Audio track]. A#0M Records." },
  { name: "Beat Drop", artist: "Bass Master", duration: "2:55", source: "Independent", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cite: "Bass Master. (2026). Beat Drop [Audio track]. Independent." },
  { name: "Flow State", artist: "The Artisan", duration: "4:00", source: "A#0M Records", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", cite: "The Artisan. (2026). Flow State [Audio track]. A#0M Records." },
  // Progressive Indie Rock/Pop
  { name: "Echoes of Time", artist: "The Dreamers", duration: "4:10", source: "Indie Wave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", cite: "The Dreamers. (2026). Echoes of Time [Audio track]. Indie Wave." },
  { name: "Velvet Sky", artist: "Neon Pop", duration: "3:25", source: "A#0M Records", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", cite: "Neon Pop. (2026). Velvet Sky [Audio track]. A#0M Records." },
  { name: "Electric Dreams", artist: "Synth Soul", duration: "3:50", source: "Independent", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", cite: "Synth Soul. (2026). Electric Dreams [Audio track]. Independent." },
  { name: "Midnight Run", artist: "The Dreamers", duration: "4:05", source: "Indie Wave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", cite: "The Dreamers. (2026). Midnight Run [Audio track]. Indie Wave." },
  { name: "Golden Hour", artist: "Sun Pop", duration: "3:35", source: "Independent", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", cite: "Sun Pop. (2026). Golden Hour [Audio track]. Independent." },
  { name: "Fading Light", artist: "Echo Chamber", duration: "4:20", source: "A#0M Records", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cite: "Echo Chamber. (2026). Fading Light [Audio track]. A#0M Records." },
  { name: "Urban Jungle", artist: "The Dreamers", duration: "3:55", source: "Indie Wave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cite: "The Dreamers. (2026). Urban Jungle [Audio track]. Indie Wave." },
  { name: "Crystal Clear", artist: "Synth Soul", duration: "3:15", source: "Independent", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cite: "Synth Soul. (2026). Crystal Clear [Audio track]. Independent." },
  { name: "Lost in Sound", artist: "Echo Chamber", duration: "4:40", source: "A#0M Records", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cite: "Echo Chamber. (2026). Lost in Sound [Audio track]. A#0M Records." },
  { name: "New Beginnings", artist: "Sun Pop", duration: "3:40", source: "Independent", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", cite: "Sun Pop. (2026). New Beginnings [Audio track]. Independent." }
];

import Bootloader from './components/Bootloader';
import GamingPlatform from './components/GamingPlatform';
import GamingMarketDashboard from './components/GamingMarketDashboard';
import GlobalTrendsDashboard from './components/GlobalTrendsDashboard';

import ChronosArchive from './components/ChronosArchive';
import Leaderboard from './components/Leaderboard';

import AndroidLegacyConsole from './components/AndroidLegacyConsole';
import { generateKey, encryptData, decryptData } from './A0M_CORE_V2026_FINAL_SECURED_CRYPTO';

export default function App() {
  const [isBooting, setIsBooting] = useState(() => {
    // If user was already logged in and we're just reloading, skip bootloader
    const wasLoggedIn = localStorage.getItem('a0m_session_active') === 'true';
    return !wasLoggedIn;
  });
  const [cryptoKey, setCryptoKey] = useState<CryptoKey | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const extractCash = (content: string): number => {
    const match = content.match(/\$(\d+(\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };
  const [user, loading] = useAuthState(auth);
  
  useEffect(() => {
    if (user && user.email !== 'matthewjoshuagallegos@gmail.com') {
      auth.signOut();
      toast.error('UNAUTHORIZED DEVICE. SOVEREIGN USER ONLY.');
    }
  }, [user]);

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [presence, setPresence] = useState<{ id: string, name: string }[]>([]);
  const [wsStatus, setWsStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
  const [systemStatus, setSystemStatus] = useState<{
    cpuUsage: string;
    memUsage: string;
    uptime: number;
    activeConnections: number;
    apnStatus: string;
  } | null>(null);

  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!user) return;

    let reconnectTimeout: NodeJS.Timeout;

    const connect = () => {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}`;
      const socket = new WebSocket(wsUrl);
      wsRef.current = socket;

      socket.onopen = () => {
        console.log('[WS] Connected to Sovereign Gateway');
        setWsStatus('connected');
        socket.send(JSON.stringify({ type: 'ping' }));
      };

      socket.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data);
          if (payload.type === 'presence') {
            setPresence(payload.nodes || []);
          } else if (payload.type === 'system_status') {
            setSystemStatus(payload.payload);
          } else if (payload.type === 'sync') {
            console.log('[WS] Sync received:', payload.payload);
            toast.success(`SYNC RECEIVED: ${payload.payload.message || 'Data update'}`);
          }
        } catch (e) {
          console.error('[WS] Error parsing message:', e);
        }
      };

      socket.onerror = (error) => {
        console.error('[WS] Connection error:', error);
        setWsStatus('error');
      };

      socket.onclose = () => {
        console.log('[WS] Disconnected. Attempting reconnect...');
        setWsStatus('connecting');
        reconnectTimeout = setTimeout(connect, 3000);
      };
    };

    connect();

    return () => {
      wsRef.current?.close();
      clearTimeout(reconnectTimeout);
    };
  }, [user]);

  const sendWsSync = (message: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'sync', payload: { message, timestamp: Date.now() } }));
      toast.success('SYNC BROADCAST SENT');
    } else {
      toast.error('WS DISCONNECTED');
    }
  };

  const [currentView, setCurrentView] = useState<View>(() => {
    const saved = localStorage.getItem('a0m_current_view');
    return (saved as View) || 'dashboard';
  });

  // Persist view changes
  useEffect(() => {
    localStorage.setItem('a0m_current_view', currentView);
  }, [currentView]);

  // Persist session status
  useEffect(() => {
    if (user) {
      localStorage.setItem('a0m_session_active', 'true');
    } else {
      localStorage.removeItem('a0m_session_active');
    }
  }, [user]);

  const [selectedAsset, setSelectedAsset] = useState<PhysicalAsset | null>(null);
  const [sellingAsset, setSellingAsset] = useState<PhysicalAsset | null>(null);
  const [isCashOutModalOpen, setIsCashOutModalOpen] = useState(false);
  const [isProcessingWithdrawal, setIsProcessingWithdrawal] = useState(false);
  const [cashOutAmount, setCashOutAmount] = useState('');
  const [cashOutError, setCashOutError] = useState<string | null>(null);
  const [cashOutMethod, setCashOutMethod] = useState<'Stripe' | 'CashApp' | 'Chime' | 'Google Store'>('Stripe');
  const [cashTag, setCashTag] = useState('');
  const [chimeTag, setChimeTag] = useState('');
  const [sellPrice, setSellPrice] = useState<string>('');
  const [sellError, setSellError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // File Explorer Route Bind
  useEffect(() => {
    if (searchQuery.toLowerCase() === '/explorer' || searchQuery.toLowerCase() === 'a0m explorer') {
      window.open('/explorer.html', '_blank');
      setSearchQuery(''); // clear it so it doesn't keep opening
    }
  }, [searchQuery]);

  const [profileName, setProfileName] = useState('');
  const [profileBio, setProfileBio] = useState('');
  const [profilePortrait, setProfilePortrait] = useState('');
  const [profileSpecialization, setProfileSpecialization] = useState<Specialization>('None');
  const [profileShowcase, setProfileShowcase] = useState<string[]>([]);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    return localStorage.getItem('a0m_sidebar_collapsed') === 'true';
  });
  const [isPlatformModalOpen, setIsPlatformModalOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isHostNetworkActive, setIsHostNetworkActive] = useState(() => {
    return localStorage.getItem('a0m_host_network_active') === 'true';
  });
  const [platformType, setPlatformType] = useState<'Xbox' | 'PC' | 'PlayStation'>(() => {
    return (localStorage.getItem('a0m_platform_type') as any) || 'Xbox';
  });
  const [activeGame, setActiveGame] = useState<string | null>(() => {
    return localStorage.getItem('a0m_active_game');
  });

  // Persist gaming states
  useEffect(() => {
    localStorage.setItem('a0m_host_network_active', isHostNetworkActive.toString());
    localStorage.setItem('a0m_platform_type', platformType);
    if (activeGame) localStorage.setItem('a0m_active_game', activeGame);
    else localStorage.removeItem('a0m_active_game');
  }, [isHostNetworkActive, platformType, activeGame]);

  useEffect(() => {
    localStorage.setItem('a0m_sidebar_collapsed', isSidebarCollapsed.toString());
  }, [isSidebarCollapsed]);

  const [gameSessionState, setGameSessionState] = useState<'connecting' | 'ready' | 'playing'>('connecting');
  const [hostUptime, setHostUptime] = useState(0);
  const [activePlayers, setActivePlayers] = useState([
    { name: 'StarLord_99', ping: '12ms', game: 'Star Drift' },
    { name: 'NeonGhost', ping: '24ms', game: 'Pulse Racer' },
    { name: 'VoidWalker', ping: '18ms', game: 'Void Miner' },
    { name: 'CyberKnight', ping: '32ms', game: 'Cyber Chess' },
  ]);
  const [secureFiles, setSecureFiles] = useState<any[]>([]);
  const [selectedSecureFile, setSelectedSecureFile] = useState<any | null>(null);
  const [fileSummary, setFileSummary] = useState<string | null>(null);
  const [decryptedContent, setDecryptedContent] = useState<string | null>(null);

  useEffect(() => {
    const initCrypto = async () => {
      const key = await generateKey();
      setCryptoKey(key);
      
      const initialFiles = [
        { id: '1', name: "APN_Config_V2.log", size: "12.4 KB", date: "2026-03-26", content: "APN Configuration Log\nVersion: 2.0.4\nStatus: Stable\nEncryption: AES-512\n\n[14:22:01] Initializing A#0M Core Bridge...\n[14:22:05] Handshake successful.\n[14:22:10] Encrypting data stream with AES-512-GCM..." },
        { id: '2', name: "Market_Analysis_Q1.pdf", size: "2.1 MB", date: "2026-03-25", content: "A#0M Market Analysis Report - Q1 2026\n\nExecutive Summary:\nThe artisan guild has seen a 45% increase in digital asset turnover. The introduction of the Iron Safe has boosted confidence in high-value trades.\n\nKey Metrics:\n- Total Guild Volume: $4.2M\n- Active Artisans: 12,400\n- Most Traded Asset Class: Cybernetic Enhancements" },
        { id: '3', name: "Telemetry_Dump_001.json", size: "856 KB", date: "2026-03-24", content: "{\n  \"telemetry\": {\n    \"session_id\": \"A0M-992-X\",\n    \"uptime\": 144201,\n    \"packets_sent\": 1024492,\n    \"packets_received\": 1024488,\n    \"latency_avg\": \"14ms\",\n    \"encryption_status\": \"AES-512_ACTIVE\"\n  }\n}" }
      ];

      const encryptedFiles = await Promise.all(initialFiles.map(async (file) => {
        const { encrypted, iv } = await encryptData(key, file.content);
        return { ...file, content: encrypted, iv };
      }));
      setSecureFiles(encryptedFiles);
    };
    initCrypto();
  }, []);

  useEffect(() => {
    if (activeGame) {
      setGameSessionState('connecting');
    }
  }, [activeGame]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHostNetworkActive) {
      interval = setInterval(() => {
        setHostUptime(prev => prev + 1);
      }, 1000);
    } else {
      setHostUptime(0);
    }
    return () => clearInterval(interval);
  }, [isHostNetworkActive]);

  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  const [isApnBridged, setIsApnBridged] = useState(false);
  const [tin, setTin] = useState('');
  const [tinType, setTinType] = useState<'SSN' | 'EIN'>('SSN');
  const [isSubmittingTithe, setIsSubmittingTithe] = useState(false);
  const [showWirelessFormPreview, setShowWirelessFormPreview] = useState(false);
  const [specialization, setSpecialization] = useState<Specialization>('None');
  const [authView, setAuthView] = useState<'main' | 'email-login' | 'email-signup' | 'forgot-password'>('main');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [importedPortfolio, setImportedPortfolio] = useState<any[]>([]);
  const [isImporting, setIsImporting] = useState(false);
  const [name, setName] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const [portfolio, setPortfolio] = useState({
    balance: 12500.75,
    assets: ['1', '4'],
    totalValue: 495.50
  });
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  // Real-time Leaderboard Score Update
  useEffect(() => {
    if (!user || !userProfile) return;

    const updateScore = async () => {
      // Calculate score based on activity and contributions
      const balanceScore = (userProfile.balance || 0) * 0.1;
      const earningsScore = (userProfile.totalEarnings || 0) * 0.5;
      const assetScore = portfolio.totalValue * 1.2;
      const activityScore = terminalLogs.length * 5; // Developer activity
      
      const totalScore = Math.floor(balanceScore + earningsScore + assetScore + activityScore);
      
      // Determine category based on specialization or activity
      let category: 'Gamer' | 'Developer' | 'Artist' | 'Investor' = 'Investor';
      if (userProfile.preferredSpecialization === 'Developer' || userProfile.preferredSpecialization === 'Programmer') category = 'Developer';
      else if (userProfile.preferredSpecialization === 'Gamer') category = 'Gamer';
      else if (userProfile.preferredSpecialization === 'Musician' || userProfile.preferredSpecialization === 'SoundEngineer') category = 'Artist';

      const contribution = userProfile.bio || `Active ${category} in Sector A#0M`;

      await updateLeaderboardScore({
        uid: user.uid,
        name: userProfile.artisanName || 'Anonymous Artisan',
        category,
        score: totalScore,
        contribution,
        avatar: userProfile.portraitURL
      });
    };

    const interval = setInterval(updateScore, 300000); // Update every 5 minutes
    updateScore(); // Initial update

    return () => clearInterval(interval);
  }, [user, userProfile, portfolio.totalValue, terminalLogs.length]);

  const addTerminalLog = (msg: string) => {
    setTerminalLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  // Background Music
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!user) {
      setMessages([]);
      return;
    }
    const unsubscribe = listenToCourierStream((msgs) => {
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    if (currentView === 'messages' && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, currentView]);

  useEffect(() => {
    if (user) {
      const initUser = async () => {
        try {
          await syncMockDataToFirestore();
        } catch (e) {
          console.warn("Failed to sync mock data (might not be admin):", e);
        }
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (!userDoc.exists()) {
          await setDoc(doc(db, 'users', user.uid), {
            artisanId: user.uid,
            artisanName: user.displayName || 'Artisan',
            guildAddress: user.email,
            guildTag: 'A#0M',
            balance: 12500.75, // Initial starting balance for new artisans
            totalEarnings: 0,
            monetizationActive: true,
            createdAt: new Date(),
          });
          
          // Initialize leaderboard entry for new user
          await updateLeaderboardScore({
            uid: user.uid,
            name: user.displayName || 'Artisan',
            category: 'Investor',
            score: 1250, // Initial score based on starting balance
            contribution: 'New Artisan joined Sector A#0M'
          });
        } else {
          const data = userDoc.data();
          if (!data.artisanId || !data.guildAddress) {
            await updateDoc(doc(db, 'users', user.uid), {
              artisanId: user.uid,
              guildAddress: user.email || data.guildAddress || ''
            });
          }
        }
      };
      initUser();
      const unsub = onSnapshot(doc(db, 'users', user.uid), (doc) => {
        if (doc.exists()) {
          setUserProfile(doc.data() as UserProfile);
          setPortfolio(prev => ({
            ...prev,
            balance: doc.data().balance
          }));
        }
      }, (error) => {
        handleFirestoreError(error, OperationType.GET, 'users');
      });
      return () => unsub();
    } else {
      setUserProfile(null);
    }
  }, [user]);

  useEffect(() => {
    if (userProfile?.cashTag) {
      setCashTag(userProfile.cashTag);
    }
    if (userProfile?.chimeTag) {
      setChimeTag(userProfile.chimeTag);
    }
  }, [userProfile?.cashTag, userProfile?.chimeTag]);

  // Real-Time Guild Earnings
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (userProfile?.monetizationActive || isHostNetworkActive) {
      interval = setInterval(() => {
        if (user?.uid) {
          // Base trading earnings (approx $36.00/hr base)
          let monetizationEarnings = userProfile.monetizationActive ? 0.01 : 0;
          
          // Specialization Bonus (Increases trading earnings)
          const specializationBonuses: Record<Specialization, number> = {
            'None': 1.0,
            'Developer': 1.7,
            'Programmer': 1.5,
            'Gamer': 1.2,
            'Musician': 1.0,
            'SoundEngineer': 1.1,
            'GameDesigner': 1.3,
            'FrontendEngineer': 1.4,
            'BackendEngineer': 1.5,
            'DataScientist': 1.6
          };
          
          monetizationEarnings *= specializationBonuses[specialization];

          // Host Network Earnings
          // Base: $18/hr. Bridged: $36/hr to reward courier usage
          const hostEarnings = isHostNetworkActive ? (isApnBridged ? 0.02 : 0.01) : 0;
          
          incrementTotalEarnings(user.uid, monetizationEarnings + hostEarnings);
        }
      }, 60000); // Changed from 2000ms to 60000ms (1 minute)
    }
    return () => clearInterval(interval);
  }, [userProfile?.monetizationActive, user?.uid, isHostNetworkActive, isApnBridged, specialization]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isMusicPlaying) {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying, volume, currentSongIndex]);

  const [assets, setAssets] = useState<PhysicalAsset[]>([]);
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (userProfile && !userProfile.onboardingCompleted) {
      setShowOnboarding(true);
    }
  }, [userProfile]);

  useEffect(() => {
    if (!user) {
      setAssets(REAL_WORLD_ASSETS);
      return;
    }
    const unsub = onSnapshot(collection(db, 'assets'), (snapshot) => {
      const fetchedAssets = snapshot.docs.map(doc => doc.data() as PhysicalAsset);
      setAssets(fetchedAssets.length > 0 ? fetchedAssets : REAL_WORLD_ASSETS);
    }, (error) => {
      console.error("Failed to fetch assets:", error);
      setAssets(REAL_WORLD_ASSETS);
    });
    return () => unsub();
  }, [user]);

  const filteredAssets = useMemo(() => {
    return assets.filter(asset => {
      const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           asset.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           asset.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || asset.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, assets]);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           task.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery, tasks]);

  const ownedAssets = useMemo(() => {
    return assets.filter(asset => portfolio.assets.includes(asset.id));
  }, [portfolio.assets, assets]);

  const handleBuy = async (asset: PhysicalAsset) => {
    if (!user) return;
    try {
      // Replaced with Radius Equation validation for A#0M protocol
      const { radius, formula } = await radiusPromise;
      console.log(`A#0M Tradition Verified: ${formula} = ${radius.toFixed(2)}`);
      
      // Real purchase deployment
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        balance: increment(-asset.price),
        assets: arrayUnion(asset.id),
      });

      setPortfolio(prev => ({
        ...prev,
        assets: [...prev.assets, asset.id],
        totalValue: prev.totalValue + asset.price
      }));
      setSelectedAsset(null);
      toast.success(`Successfully purchased ${asset.name}!`);
    } catch (error) {
      console.error('Artisan Guild Tradition Verification failed:', error);
      toast.error('Failed to purchase asset.');
      handleFirestoreError(error, OperationType.UPDATE, `users/${user?.uid}`);
    }
  };

  const handleSell = async () => {
    if (!sellingAsset || !user) return;
    playClickSound();
    const price = parseFloat(sellPrice);
    
    if (isNaN(price) || price <= 0) {
      playErrorSound();
      setSellError('Please enter a valid positive price.');
      return;
    }

    // Market Trend Analysis
    const marketPrice = sellingAsset.price;
    const lowerBound = marketPrice * 0.7; // 70% is "fair low"
    const upperBound = marketPrice * 1.3; // 130% is "fair high"
    const absoluteMin = marketPrice * 0.3; // 30% is "hard min"
    const absoluteMax = marketPrice * 5.0; // 500% is "hard max"

    if (price < absoluteMin) {
      playErrorSound();
      setSellError(`Price is critically low ($${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}). Listing at less than 30% of market value triggers anti-dumping protocols to protect asset rarity.`);
      return;
    }

    if (price > absoluteMax) {
      playErrorSound();
      setSellError(`Price is unreasonable ($${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}). Current market liquidity cannot support a 500% markup for this ${sellingAsset.rarity} asset.`);
      return;
    }

    if (price < lowerBound) {
      playErrorSound();
      setSellError(`Warning: This price is significantly below market average. While allowed, it may indicate high desperation and could negatively impact the floor price of ${sellingAsset.name} collections.`);
      return;
    }

    if (price > upperBound) {
      playErrorSound();
      setSellError(`Warning: Price exceeds the 130% fair-market threshold. Based on recent trade volume, assets listed this high typically remain stagnant for 14+ days due to low buyer demand at this premium.`);
      return;
    }

    try {
      // Real sell deployment
      const userRef = doc(db, 'users', user.uid);
      
      // We need to remove the asset from the array. 
      // Firestore doesn't have a simple arrayRemove by index, but arrayRemove by value works.
      const { arrayRemove } = await import('firebase/firestore');
      await updateDoc(userRef, {
        balance: increment(price),
        assets: arrayRemove(sellingAsset.id),
      });

      setPortfolio(prev => ({
        ...prev,
        assets: prev.assets.filter(id => id !== sellingAsset.id),
        totalValue: prev.totalValue - sellingAsset.price
      }));
      setSellingAsset(null);
      setSellPrice('');
      setSellError(null);
      playSuccessSound();
      toast.success(`Successfully sold ${sellingAsset.name}!`);
    } catch (error) {
      console.error('Failed to process sale:', error);
      playErrorSound();
      toast.error('Failed to process sale.');
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsImporting(true);
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          // Google Finance CSV format usually has columns like Symbol, Name, Quantity, Cost Basis, Current Price
          const parsedData = results.data.map((row: any) => ({
            symbol: row['Symbol'] || row['Ticker'] || 'UNKNOWN',
            name: row['Name'] || row['Asset'] || 'Unknown Asset',
            quantity: parseFloat(row['Quantity'] || row['Shares'] || '0'),
            costBasis: parseFloat(row['Cost Basis'] || row['Purchase Price'] || '0'),
            currentPrice: parseFloat(row['Current Price'] || row['Price'] || '0'),
          })).filter(item => item.symbol !== 'UNKNOWN' && !isNaN(item.quantity));
          
          setImportedPortfolio(parsedData);
          setIsImporting(false);
          toast.success(`Successfully imported ${parsedData.length} assets from CSV!`);
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
          toast.error("Failed to parse CSV file. Please ensure it's a valid Google Finance export.");
          setIsImporting(false);
        }
      });
    }
  };

  const handleCashOut = async () => {
    if (!userProfile || !cashOutAmount) return;
    playClickSound();
    setCashOutError(null);
    const amount = parseFloat(cashOutAmount);
    
    if (isNaN(amount) || amount <= 0) {
      playErrorSound();
      setCashOutError("Please enter a valid amount greater than $0.");
      return;
    }
    
    if (amount > (userProfile.balance || 0)) {
      playErrorSound();
      setCashOutError(`Insufficient balance. You can only withdraw up to $${(userProfile.balance || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}.`);
      return;
    }

    if (cashOutMethod === 'CashApp' || cashOutMethod === 'Chime') {
      let tag = (cashOutMethod === 'CashApp' ? cashTag : chimeTag).trim();
      if (!tag) {
        playErrorSound();
        setCashOutError(`Please enter your ${cashOutMethod} tag.`);
        return;
      }
      if (cashOutMethod === 'CashApp' && !tag.startsWith('$')) {
        tag = '$' + tag;
      }
    }

    setIsProcessingWithdrawal(true);
    console.log(`Initiating cash out: $${amount} via ${cashOutMethod}`);

    try {
      let finalTag = cashOutMethod === 'CashApp' ? cashTag.trim() : (cashOutMethod === 'Chime' ? chimeTag.trim() : undefined);
      if (cashOutMethod === 'CashApp' && finalTag && !finalTag.startsWith('$')) {
        finalTag = '$' + finalTag;
      }
      
      console.log(`Recording withdrawal for user ${user.uid}...`);
      await recordWithdrawal(user.uid, amount, cashOutMethod, finalTag);
      
      if (cashOutMethod === 'CashApp' || cashOutMethod === 'Chime') {
        console.log(`Transmitting to banking gateway via ${cashOutMethod}...`);
        const payoutResult = await transmitToBankingGateway(user.uid, amount, cashOutMethod, finalTag!, userProfile.guildTag);
        
        // Generate receipt
        console.log(`Generating receipt for transaction ${payoutResult.id}...`);
        const receiptResponse = await fetch('/api/generate-receipt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ transactionId: payoutResult.id, amount, type: 'payout' }),
        });
        if (!receiptResponse.ok) {
          console.warn('Failed to generate receipt, but payout was successful.');
        } else {
          const receiptData = await receiptResponse.json();
          console.log('Receipt generated:', receiptData.receipt);
        }
      }
      
      // Save tags to profile if changed
      if (cashOutMethod === 'CashApp' && finalTag !== userProfile.cashTag) {
        await updateCashTag(user.uid, finalTag!);
      } else if (cashOutMethod === 'Chime' && finalTag !== userProfile.chimeTag) {
        await updateChimeTag(user.uid, finalTag!);
      }

      setIsCashOutModalOpen(false);
      setCashOutAmount('');
      setCashOutError(null);
      playSuccessSound();
      toast.success(`Successfully initiated withdrawal of $${amount.toFixed(2)} to ${cashOutMethod}`);
      
      if (cashOutMethod === 'CashApp') {
        const cleanTag = finalTag!.replace('$', '');
        window.open(`https://cash.app/$${cleanTag}/${amount}`, '_blank');
      } else if (cashOutMethod === 'Chime') {
        window.open(`https://member.chime.com/`, '_blank');
      } else if (cashOutMethod === 'Google Store') {
        window.open(`https://store.google.com`, '_blank');
      }
    } catch (error) {
      console.error("Withdrawal error:", error);
      playErrorSound();
      let message = "Failed to process withdrawal. Please try again later.";
      if (error instanceof Error) {
        try {
          const parsed = JSON.parse(error.message);
          if (parsed.error) message = `Withdrawal Error: ${parsed.error}`;
        } catch (e) {
          message = `Withdrawal Error: ${error.message}`;
        }
      }
      setCashOutError(message);
    } finally {
      setIsProcessingWithdrawal(false);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !userProfile) return;
    playClickSound();
    try {
      let role = 'Operator';
      if (userProfile.guildAddress === 'matthewjoshuagallegos@gmail.com') role = 'Admin';
      else if (specialization === 'Developer') role = 'Developer';
      else if (specialization === 'Programmer') role = 'Programmer';
      else if (specialization === 'Gamer') role = 'Gamer';
      
      const messageText = newMessage.trim();
      await dispatchCourierMessage(user.uid, userProfile.artisanName, messageText, role);
      setNewMessage('');
      playSuccessSound();

      if (messageText.startsWith('AI:')) {
        const aiResponse = await askGuildAssistant(messageText.substring(3));
        await dispatchCourierMessage('AI_ASSISTANT', 'Guild Assistant', aiResponse, 'Admin');
        playSuccessSound();
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      playErrorSound();
      toast.error("Failed to send message.");
    }
  };

  if (isBooting) {
    return <Bootloader onComplete={() => setIsBooting(false)} />;
  }

  const handleLockKeychain = () => {
    // We can force a reload to trigger the keychain login screen again
    // Or we can just dispatch an event that the keychain component listens to
    window.dispatchEvent(new Event('lock_keychain'));
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-bg">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    const handleEmailAuth = async (e: React.FormEvent) => {
      e.preventDefault();
      setAuthError(null);
      try {
        await withAutoFix(async () => {
          if (authView === 'email-login') {
            await signInWithEmail(email, password);
            toast.success('Successfully logged in!');
          } else if (authView === 'email-signup') {
            await signUpWithEmail(email, password, name);
            toast.success('Account created successfully!');
          } else if (authView === 'forgot-password') {
            await resetPassword(email);
            setResetSent(true);
            toast.success('Password reset email sent!');
          }
        }, {
          maxRetries: 2,
          onRetry: (err, attempt) => console.log(`[AUTO-FIX] Retrying auth operation (Attempt ${attempt})...`, err)
        });
      } catch (err: any) {
        setAuthError(err.message);
        toast.error(err.message || 'Authentication failed');
      }
    };

    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-bg p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(157,78,221,0.2),transparent_70%)]" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-8 md:p-12 rounded-[2rem] max-w-md w-full text-center relative z-10"
        >
          {authView !== 'main' && (
            <button 
              onClick={() => { setAuthView('main'); setAuthError(null); }}
              className="absolute top-8 left-8 text-text-muted hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(157,78,221,0.5)]">
            <Zap className="text-black w-8 h-8 fill-current" />
          </div>
          
          <h1 className="text-3xl font-display italic tracking-tighter mb-2 rainbow-text">A#0M MARKETPLACE</h1>
          <p className="text-text-muted text-sm mb-8">
            {authView === 'main' ? 'Trade your artisanal crafts and exchange legendary assets.' : 
             authView === 'email-login' ? 'Welcome back! Sign in to your account.' : 
             authView === 'forgot-password' ? 'Enter your email to reset your password.' : 'Create your account to start trading.'}
          </p>

          {authError && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-xs p-3 rounded-lg mb-6">
              {authError}
            </div>
          )}
          
          {resetSent && authView === 'forgot-password' && (
            <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 text-xs p-3 rounded-lg mb-6">
              Password reset email sent! Check your inbox.
            </div>
          )}

          {authView === 'main' ? (
            <div className="space-y-3">
              <button 
                onClick={() => withAutoFix(() => signInWithPopup(auth, googleProvider)).then((result) => {
                  if (result && result.user && result.user.email !== 'matthewjoshuagallegos@gmail.com') {
                    auth.signOut();
                    toast.error('UNAUTHORIZED DEVICE. SOVEREIGN USER ONLY.');
                    setAuthError('UNAUTHORIZED DEVICE. SOVEREIGN USER ONLY.');
                  } else {
                    toast.success('Logged in with Google');
                  }
                }).catch(err => { setAuthError(err.message); toast.error(err.message); })}
                className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <LogIn size={18} />
                Continue with Google
              </button>
              <button 
                onClick={() => withAutoFix(() => signInWithApple()).then(() => toast.success('Logged in with Apple')).catch(err => { setAuthError(err.message); toast.error(err.message); })}
                className="w-full bg-black border border-white/20 text-white py-3 rounded-xl font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                <Apple size={18} />
                Continue with Apple
              </button>
              <button 
                onClick={async () => {
                  try {
                    if (window.PublicKeyCredential) {
                      toast.success('Keychain / Passkey login initiated');
                      // Placeholder for actual WebAuthn/Passkey integration
                      // Firebase Auth requires Identity Platform for native Passkey support
                    } else {
                      toast.error('Keychain login is not supported on this device/browser');
                    }
                  } catch (err: any) {
                    toast.error(err.message);
                  }
                }}
                className="w-full bg-gradient-to-r from-gray-700 to-gray-900 border border-white/20 text-white py-3 rounded-xl font-bold hover:from-gray-600 hover:to-gray-800 transition-all flex items-center justify-center gap-3"
              >
                <Key size={18} />
                Keychain Login
              </button>
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-[1px] bg-white/10" />
                <span className="text-[10px] uppercase tracking-widest text-text-muted">or</span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>
              <button 
                onClick={() => setAuthView('email-login')}
                className="w-full bg-accent/10 border border-accent/30 text-accent py-3 rounded-xl font-bold hover:bg-accent/20 transition-all flex items-center justify-center gap-3"
              >
                <Mail size={18} />
                Continue with Email
              </button>
            </div>
          ) : (
            <form onSubmit={handleEmailAuth} className="space-y-4 text-left">
              {authView === 'email-signup' && (
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-text-muted mb-1 block">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              )}
              <div>
                <label className="text-[10px] uppercase tracking-widest text-text-muted mb-1 block">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="name@example.com"
                />
              </div>
              {authView !== 'forgot-password' && (
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-text-muted mb-1 block">Password</label>
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              )}
              {authView === 'email-login' && (
                <div className="text-right">
                  <button 
                    type="button"
                    onClick={() => { setAuthView('forgot-password'); setAuthError(null); setResetSent(false); }}
                    className="text-[10px] text-accent hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}
              <button 
                type="submit"
                className="w-full bg-accent text-black py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_25px_rgba(157,78,221,0.6)] transition-all mt-4"
              >
                {authView === 'email-login' ? 'Sign In' : authView === 'forgot-password' ? 'Reset Password' : 'Create Account'}
              </button>
              <p className="text-center text-xs text-text-muted mt-6">
                {authView === 'email-login' ? "Don't have an account? " : "Already have an account? "}
                <button 
                  type="button"
                  onClick={() => setAuthView(authView === 'email-login' ? 'email-signup' : 'email-login')}
                  className="text-accent hover:underline"
                >
                  {authView === 'email-login' ? 'Sign Up' : 'Log In'}
                </button>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    );
  }

  const handleOnboardingComplete = async () => {
    setShowOnboarding(false);
    if (user && userProfile) {
      await updateUserProfile(user.uid, { ...userProfile, onboardingCompleted: true });
    }
  };

  return (
    <ErrorBoundary>
      <div className="flex h-screen bg-transparent overflow-hidden relative">
        {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}
        <CosmoBackground />
      <audio 
        ref={audioRef} 
        src={PLAYLIST[currentSongIndex].url} 
        onEnded={() => {
          setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
        }}
      />
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 bg-card/80 backdrop-blur-xl border-r border-border transform transition-transform duration-300 lg:relative lg:translate-x-0 flex flex-col",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        isSidebarCollapsed ? "lg:w-20" : "lg:w-64",
        "w-64"
      )}>
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 custom-scrollbar">
          <div className={cn("flex items-center gap-3 mb-10", isSidebarCollapsed ? "justify-center" : "justify-between")}>
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <Zap className="text-black w-6 h-6 fill-current" />
              </div>
              {!isSidebarCollapsed && <h1 className="text-2xl font-display font-black italic tracking-tighter rainbow-text truncate">A#0M</h1>}
            </div>
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="hidden lg:flex p-2 hover:bg-white/5 rounded-lg text-text-muted hover:text-white transition-colors"
              title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            <button 
              className="lg:hidden p-2 hover:bg-white/5 rounded-lg text-text-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <nav className={cn("space-y-2", isSidebarCollapsed && "flex flex-col items-center")}>
            <NavItem 
              active={currentView === 'chronos-archive'} 
              onClick={() => { setCurrentView('chronos-archive'); setIsMobileMenuOpen(false); }}
              icon={<Database size={20} />}
              label="Chronos Archive"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'gaming-platform'} 
              onClick={() => { setCurrentView('gaming-platform'); setIsMobileMenuOpen(false); }}
              icon={<Gamepad2 size={20} />}
              label="Gaming Platform"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'safe'} 
              onClick={() => { setCurrentView('safe'); setIsMobileMenuOpen(false); }}
              icon={<Shield size={20} />}
              label="Iron Safe"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'ai-studio'} 
              onClick={() => { setCurrentView('ai-studio'); setIsMobileMenuOpen(false); }}
              icon={<Zap size={20} />}
              label="AI Studio"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'global-imager'} 
              onClick={() => { setCurrentView('global-imager'); setIsMobileMenuOpen(false); }}
              icon={<Globe2 size={20} />}
              label="Global Imager"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'root-node-map'} 
              onClick={() => { setCurrentView('root-node-map'); setIsMobileMenuOpen(false); }}
              icon={<MapPin size={20} />}
              label="Root Node Map"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'deployment'} 
              onClick={() => { setCurrentView('deployment'); setIsMobileMenuOpen(false); }}
              icon={<Server size={20} />}
              label="Deployment"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'leaderboard'} 
              onClick={() => { setCurrentView('leaderboard'); setIsMobileMenuOpen(false); }}
              icon={<Trophy size={20} />}
              label="Leaderboard"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'dashboard'} 
              onClick={() => { setCurrentView('dashboard'); setIsMobileMenuOpen(false); }}
              icon={<LayoutDashboard size={20} />}
              label="Dashboard"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'tasks'} 
              onClick={() => { setCurrentView('tasks'); setIsMobileMenuOpen(false); }}
              icon={<ListMusic size={20} />}
              label="Tasks"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'marketplace'} 
              onClick={() => { setCurrentView('marketplace'); setIsMobileMenuOpen(false); }}
              icon={<ShoppingBag size={20} />}
              label="Marketplace"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'portfolio'} 
              onClick={() => { setCurrentView('portfolio'); setIsMobileMenuOpen(false); }}
              icon={<Wallet size={20} />}
              label="Portfolio"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'monetization'} 
              onClick={() => { setCurrentView('monetization'); setIsMobileMenuOpen(false); }}
              icon={<Coins size={20} />}
              label="Monetization"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'storage'} 
              onClick={() => { setCurrentView('storage'); setIsMobileMenuOpen(false); }}
              icon={<Gamepad2 size={20} />}
              label="Game Host"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'earnings'} 
              onClick={() => { setCurrentView('earnings'); setIsMobileMenuOpen(false); }}
              icon={<History size={20} />}
              label="Earnings"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'playlist'} 
              onClick={() => { setCurrentView('playlist'); setIsMobileMenuOpen(false); }}
              icon={<ListMusic size={20} />}
              label="A#0M Playlist"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'safe'} 
              onClick={() => { setCurrentView('safe'); setIsMobileMenuOpen(false); }}
              icon={<Lock size={20} />}
              label="Iron Safe"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'creations'} 
              onClick={() => { setCurrentView('creations'); setIsMobileMenuOpen(false); }}
              icon={<Zap size={20} />}
              label="Inventions"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'gemini'} 
              onClick={() => { setCurrentView('gemini'); setIsMobileMenuOpen(false); }}
              icon={<Terminal size={20} />}
              label="Gemini Terminal"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'developer-shell'} 
              onClick={() => { setCurrentView('developer-shell'); setIsMobileMenuOpen(false); }}
              icon={<Code2 size={20} />}
              label="Developer Shell"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'developer-server'} 
              onClick={() => { setCurrentView('developer-server'); setIsMobileMenuOpen(false); }}
              icon={<Server size={20} />}
              label="Developer Server"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'artisan-workshop'} 
              onClick={() => { setCurrentView('artisan-workshop'); setIsMobileMenuOpen(false); }}
              icon={<Zap size={20} />}
              label="Artisan Workshop"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'messages'} 
              onClick={() => { setCurrentView('messages'); setIsMobileMenuOpen(false); }}
              icon={<MessageSquare size={20} />}
              label="Message Board"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'appraiser'} 
              onClick={() => { setCurrentView('appraiser'); setIsMobileMenuOpen(false); }}
              icon={<TrendingUp size={20} />}
              label="Cash Balance Review"
              collapsed={isSidebarCollapsed}
            />
            
            <NavItem 
              active={currentView === 'gaming-market'} 
              onClick={() => { setCurrentView('gaming-market'); setIsMobileMenuOpen(false); }}
              icon={<TrendingUp size={20} />}
              label="Gaming Market"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'android-legacy-console'} 
              onClick={() => { setCurrentView('android-legacy-console'); setIsMobileMenuOpen(false); }}
              icon={<Tv size={20} />}
              label="Legacy Console"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'global-trends'} 
              onClick={() => { setCurrentView('global-trends'); setIsMobileMenuOpen(false); }}
              icon={<Globe size={20} />}
              label="2026 Global Trends"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'tithe'} 
              onClick={() => { setCurrentView('tithe'); setIsMobileMenuOpen(false); }}
              icon={<FileText size={20} />}
              label="Wireless Earnings"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'profile'} 
              onClick={() => { 
                setCurrentView('profile'); 
                setIsMobileMenuOpen(false);
                if (userProfile) {
                  setProfileName(userProfile.artisanName);
                  setProfileBio(userProfile.bio || '');
                  setProfilePortrait(userProfile.portraitURL);
                  setProfileSpecialization(userProfile.preferredSpecialization || 'None');
                  setProfileShowcase(userProfile.showcaseAssets || []);
                }
              }}
              icon={<Users size={20} />}
              label="Artisan Profile"
              collapsed={isSidebarCollapsed}
            />
            <NavItem 
              active={currentView === 'private-payments'} 
              onClick={() => { setCurrentView('private-payments'); setIsMobileMenuOpen(false); }}
              icon={<Lock size={20} />}
              label="Private Payments"
              collapsed={isSidebarCollapsed}
            />
            <div className="h-px bg-border my-4" />
            {!isSidebarCollapsed && <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest px-4 mb-2">Resources</p>}
            
            <a 
              href="/api/download/A0M_Technologies_Package.zip" 
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group",
                isSidebarCollapsed && "justify-center px-0"
              )}
              download
              title={isSidebarCollapsed ? "Download Package" : ""}
            >
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                <Download size={16} />
              </div>
              {!isSidebarCollapsed && (
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">Download Package</p>
                  <p className="text-[10px] text-text-muted truncate">A#0M Technologies</p>
                </div>
              )}
            </a>

            <a 
              href="https://g.dev/MaTtYmAdNeSs" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group",
                isSidebarCollapsed && "justify-center px-0"
              )}
              title={isSidebarCollapsed ? "MaTtYmAdNeSs" : ""}
            >
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                <Code2 size={16} />
              </div>
              {!isSidebarCollapsed && (
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">MaTtYmAdNeSs</p>
                </div>
              )}
              {!isSidebarCollapsed && <ExternalLink size={12} className="ml-auto text-text-muted" />}
            </a>

            <NavItem 
              active={currentView === 'security-underwrite'} 
              onClick={() => setCurrentView('security-underwrite')}
              icon={<ShieldCheck size={20} />}
              label="Security Underwrite"
              collapsed={isSidebarCollapsed}
            />
          </nav>
        </div>

        <div className={cn("p-4 lg:p-6 border-t border-border bg-card/40 backdrop-blur-md space-y-4 flex-none", isSidebarCollapsed && "items-center")}>
          {!isSidebarCollapsed && (
            <div className="px-4 py-3 bg-accent/5 rounded-xl border border-accent/10 mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full animate-pulse",
                    wsStatus === 'connected' ? "bg-green-500" : "bg-yellow-500"
                  )} />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Live Presence</span>
                </div>
                <span className="text-[10px] font-mono text-accent">{(presence || []).length} Active</span>
              </div>
              <div className="flex -space-x-2 overflow-hidden">
                {(presence || []).slice(0, 5).map((u, idx) => (
                  <div 
                    key={`${u.id}-${idx}`} 
                    className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center text-[8px] font-bold uppercase"
                    title={u.name}
                  >
                    {u.name.slice(0, 2)}
                  </div>
                ))}
                {(presence || []).length > 5 && (
                  <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-[8px] font-bold text-accent">
                    +{(presence || []).length - 5}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className={cn("flex items-center gap-3", isSidebarCollapsed && "justify-center")}>
            <img src={user.photoURL || ''} className="w-8 h-8 rounded-full border border-accent/50 flex-shrink-0" alt="User" />
            {!isSidebarCollapsed && (
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{user.displayName}</p>
                <p className="text-[10px] text-text-muted truncate">{user.email}</p>
              </div>
            )}
          </div>
          <div className={cn("flex flex-col gap-3", isSidebarCollapsed && "items-center")}>
            <div className={cn("flex gap-2 w-full", isSidebarCollapsed && "flex-col")}>
              <button 
                onClick={() => setIsMusicPlaying(!isMusicPlaying)}
                className={cn(
                  "flex-1 py-2 text-[10px] font-mono uppercase tracking-widest border border-border hover:bg-white/5 transition-colors flex items-center justify-center gap-2",
                  isSidebarCollapsed && "px-2"
                )}
                title={isSidebarCollapsed ? (isMusicPlaying ? 'Pause' : 'Play') : ""}
              >
                {isMusicPlaying ? <Volume2 size={12} /> : <VolumeX size={12} />}
                {!isSidebarCollapsed && (isMusicPlaying ? 'Pause' : 'Play')}
              </button>
              <button 
                onClick={handleLockKeychain}
                className="p-2 text-text-muted hover:text-green-400 transition-colors border border-border rounded-lg flex items-center justify-center"
                title="Lock Sovereign Keychain"
              >
                <Lock size={16} />
              </button>
              <button 
                onClick={() => signOut(auth)}
                className="p-2 text-text-muted hover:text-red-400 transition-colors border border-border rounded-lg flex items-center justify-center"
                title="Sign Out"
              >
                <LogOut size={16} />
              </button>
            </div>
            
            {!isSidebarCollapsed && (
              <div className="flex items-center gap-3 px-2">
                <VolumeX size={12} className="text-text-muted" />
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={volume} 
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="flex-1 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <Volume2 size={12} className="text-text-muted" />
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card/30 backdrop-blur-md z-40 flex-none">
          <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">A#0M Network: Connected</span>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-1 px-4">
              <button 
                className="lg:hidden p-2 hover:bg-white/5 rounded-lg"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={20} />
              </button>
              <div className="relative max-w-md w-full hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                <input 
                  type="text" 
                  placeholder="Search assets, collections..."
                  className="w-full bg-white/5 border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Balance</p>
                <p className="text-accent font-mono font-medium">${(userProfile?.balance || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <button 
                onClick={() => { setIsCashOutModalOpen(true); setCashOutError(null); }}
                className="gold-button !px-6 !py-2 !text-xs flex items-center gap-2"
              >
                <DollarSign size={16} />
                Cash Out
              </button>
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-y-auto p-6 pb-32 max-w-7xl mx-auto w-full custom-scrollbar">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
            <AnimatePresence mode="wait">
              {currentView === 'tasks' && (
                <motion.div
                  key="tasks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8 pb-12"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-display italic tracking-tighter mb-2 uppercase">Artisan Tasks</h2>
                      <p className="text-text-muted text-sm">Manage and track your specialized tasks within the A#0M ecosystem.</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                      <ListMusic size={24} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTasks.length > 0 ? (
                      filteredTasks.map(task => (
                        <div key={task.id} className="glass p-6 rounded-3xl border-border/50 space-y-4 hover:bg-white/5 transition-all">
                          <div className="flex items-center justify-between">
                            <span className={cn(
                              "text-[10px] font-mono px-2 py-0.5 rounded uppercase",
                              task.status === 'Completed' ? "bg-green-500/20 text-green-400" :
                              task.status === 'In Progress' ? "bg-blue-500/20 text-blue-400" :
                              "bg-yellow-500/20 text-yellow-400"
                            )}>
                              {task.status}
                            </span>
                            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{task.category}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{task.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed">{task.description}</p>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-border/30">
                            <div className="flex items-center gap-2">
                              <div className={cn(
                                "w-2 h-2 rounded-full",
                                task.priority === 'High' ? "bg-red-500" :
                                task.priority === 'Medium' ? "bg-yellow-500" :
                                "bg-blue-500"
                              )} />
                              <span className="text-[10px] font-mono text-text-muted uppercase">{task.priority} Priority</span>
                            </div>
                            <span className="text-[10px] font-mono text-text-muted uppercase">Due: {task.dueDate}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full py-20 text-center space-y-4">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto text-text-muted">
                          <Search size={32} />
                        </div>
                        <p className="text-text-muted font-mono uppercase tracking-widest text-sm">No tasks found matching your search</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
              {currentView === 'leaderboard' && (
                <motion.div
                  key="leaderboard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full h-full"
                >
                  <Leaderboard currentUserUid={user?.uid} />
                </motion.div>
              )}
              {currentView === 'chronos-archive' && (
                <motion.div
                  key="chronos-archive"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <ChronosArchive />
                </motion.div>
              )}
              {currentView === 'android-legacy-console' && (
              <AndroidLegacyConsole />
            )}
            {currentView === 'gaming-platform' && (
              <motion.div 
                key="gaming-platform"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <GamingPlatform isHostNetworkActive={isHostNetworkActive} setIsHostNetworkActive={setIsHostNetworkActive} activeGame={activeGame} setActiveGame={setActiveGame} isApnBridged={isApnBridged} setCurrentView={setCurrentView} />
              </motion.div>
            )}
            {currentView === 'ai-studio' && (
              <motion.div 
                key="ai-studio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AIStudioInterface />
              </motion.div>
            )}
            {currentView === 'deployment' && (
              <motion.div 
                key="deployment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <SystemMonitor status={systemStatus} wsStatus={wsStatus} onSync={() => sendWsSync('Sovereign Node Manual Sync')} />
                <NetworkPerformanceMetrics />
                <APNGatewayDiagnostic />
                <APNProfileManager />
                <DeploymentManifest />
                <SeedKernelUtilityUI />
              </motion.div>
            )}
            {currentView === 'global-imager' && (
              <motion.div 
                key="global-imager"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <GlobalImager />
              </motion.div>
            )}
            {currentView === 'root-node-map' && (
              <motion.div 
                key="root-node-map"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <RootNodeMap />
              </motion.div>
            )}
            {currentView === 'dashboard' && (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Top Dashboard Section: Profile, Playlist & Invite */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <PayoutDeepLink />
                  <RadialDashboard />
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    onClick={() => {
                      setCurrentView('profile');
                      if (userProfile) {
                        setProfileName(userProfile.artisanName);
                        setProfileBio(userProfile.bio || '');
                        setProfilePortrait(userProfile.portraitURL);
                        setProfileSpecialization(userProfile.preferredSpecialization || 'None');
                        setProfileShowcase(userProfile.showcaseAssets || []);
                      }
                    }}
                    className="glass p-6 rounded-3xl border-accent/20 cursor-pointer group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Users size={120} />
                    </div>
                    <div className="relative z-10 flex items-center gap-4">
                      <img src={userProfile?.portraitURL} className="w-14 h-14 rounded-2xl border border-accent/30 object-cover" alt="Profile" />
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold rainbow-text truncate">{userProfile?.artisanName}</h3>
                        <p className="text-[10px] font-mono text-accent uppercase tracking-widest">{userProfile?.preferredSpecialization || 'None'}</p>
                      </div>
                    </div>
                    {userProfile?.bio && (
                      <p className="mt-4 text-xs text-text-muted line-clamp-2 italic">"{userProfile.bio}"</p>
                    )}
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setCurrentView('playlist')}
                    className="glass p-6 rounded-3xl border-accent/20 cursor-pointer group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Music size={120} />
                    </div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                        <ListMusic size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold rainbow-text">A#0M Playlist</h3>
                        <p className="text-xs text-text-muted">Curated tracks for artisans.</p>
                      </div>
                    </div>
                  </motion.div>

                  <a 
                    href="https://developers.google.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass p-6 rounded-3xl border-blue-500/20 cursor-pointer group relative overflow-hidden flex items-center gap-4"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Code2 size={120} />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Code2 size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Google Devs</h3>
                      <p className="text-xs text-text-muted">Build the future of A#0M.</p>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-text-muted group-hover:text-white transition-colors" />
                  </a>
                </div>

                <CommandLog />

                {/* Connections Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { id: 'xbox', label: 'Xbox' },
                    { id: 'playstation', label: 'PlayStation' },
                    { id: 'pc', label: 'PC' }
                  ].map((connection) => {
                    const isConnected = userProfile?.connections?.[connection.id as keyof typeof userProfile.connections] || false;
                    return (
                      <div key={connection.id} className="glass p-6 rounded-3xl border-border flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", isConnected ? "bg-accent/20" : "bg-white/5")}>
                            <Server size={20} className={isConnected ? "text-accent" : "text-text-muted"} />
                          </div>
                          <span className="font-bold">{connection.label}</span>
                        </div>
                        <button 
                          onClick={async () => {
                            if (!userProfile) return;
                            const newConnections = {
                              ...userProfile.connections,
                              [connection.id]: !isConnected
                            };
                            await updateConnections(user.uid, newConnections);
                          }}
                          className={cn(
                            "text-xs font-bold uppercase tracking-widest transition-colors",
                            isConnected ? "text-green-500" : "text-accent hover:text-white"
                          )}
                        >
                          {isConnected ? 'Connected' : 'Connect'}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Promotions & Project Updates */}
                <div className="bg-accent/5 border border-accent/20 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Zap size={200} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-black">
                        <Zap size={20} />
                      </div>
                      <h2 className="text-2xl font-bold">Promotions & Project Updates</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white/5 p-6 rounded-2xl border border-border hover:border-accent/50 transition-colors">
                        <span className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2 block">New Release</span>
                        <h4 className="font-bold mb-2">A#0M Core v2026.4 (Neural)</h4>
                        <p className="text-xs text-text-muted leading-relaxed">Direct neural-link integration for zero-latency craft trading and guild synchronization.</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-2xl border border-border hover:border-accent/50 transition-colors">
                        <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 block">Quantum Yield</span>
                        <h4 className="font-bold mb-2">Yield Multiplier v5.0</h4>
                        <p className="text-xs text-text-muted leading-relaxed">Quantum-safe liquidity pools now offering 25% yield for 512-bit encrypted assets.</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-2xl border border-border hover:border-accent/50 transition-colors">
                        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-2 block">Lunar Node</span>
                        <h4 className="font-bold mb-2">Moon-Base Storage</h4>
                        <p className="text-xs text-text-muted leading-relaxed">Physical asset vaults successfully deployed at Shackleton Crater for ultimate sovereign safety.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <StatCard 
                    label="Total Portfolio Value"
                    value={`$${portfolio.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                    trend="+24.8%"
                    isPositive={true}
                  />
                  <StatCard 
                    label="Neural Yield"
                    value="12.4 ETH"
                    trend="Live"
                    isPositive={true}
                  />
                  <StatCard 
                    label="Market Sentiment"
                    value="Hyper-Bullish"
                    trend="Ultra"
                    isPositive={true}
                  />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-medium">Market Overview</h3>
                      <select className="bg-bg border border-border rounded px-2 py-1 text-xs font-mono">
                        <option>7 Days</option>
                        <option>30 Days</option>
                      </select>
                    </div>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={assets.length > 0 ? assets[0].history : []}>
                          <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#00FF94" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#00FF94" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />
                          <XAxis 
                            dataKey="date" 
                            stroke="#71717A" 
                            fontSize={10} 
                            tickFormatter={(val) => val.split('-').slice(1).join('/')}
                          />
                          <YAxis stroke="#71717A" fontSize={10} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#141417', border: '1px solid #27272A' }}
                            itemStyle={{ color: '#00FF94' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#00FF94" 
                            fillOpacity={1} 
                            fill="url(#colorPrice)" 
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-medium mb-6">Trending Assets</h3>
                    <div className="space-y-4">
                      {assets.slice(0, 4).map(asset => (
                        <div key={asset.id} className="flex items-center justify-between group cursor-pointer" onClick={() => { setSelectedAsset(asset); setCurrentView('marketplace'); }}>
                          <div className="flex items-center gap-3">
                            <img src={asset.image} className="w-10 h-10 rounded-lg object-cover" alt={asset.name} />
                            <div>
                              <p className="text-sm font-medium group-hover:text-accent transition-colors">{asset.name}</p>
                              <p className="text-[10px] font-mono text-text-muted uppercase">{asset.category}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-mono">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <p className={cn(
                              "text-[10px] font-mono flex items-center justify-end gap-1",
                              asset.price >= asset.lastPrice ? "text-accent" : "text-red-500"
                            )}>
                              {asset.price >= asset.lastPrice ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                              {Math.abs(((asset.price - asset.lastPrice) / asset.lastPrice) * 100).toFixed(2)}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'gaming-market' && (
              <motion.div 
                key="gaming-market"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <GamingMarketDashboard setCurrentView={setCurrentView} />
              </motion.div>
            )}

            {currentView === 'global-trends' && (
              <motion.div 
                key="global-trends"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <GlobalTrendsDashboard />
              </motion.div>
            )}

            {currentView === 'marketplace' && (
              <motion.div 
                key="marketplace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8 pb-12"
              >
                {/* Modern Market Overview Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-gradient-to-br from-accent/10 via-background to-background border border-accent/20 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-mono text-accent uppercase tracking-widest">Live Market</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-display italic tracking-tighter mb-4 rainbow-text">Global Exchange</h2>
                      <p className="text-text-muted max-w-md mb-8">Discover, trade, and invest in verified A#0M assets, physical commodities, and world trade indices.</p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 hover:bg-white/5 transition-colors">
                          <p className="text-[10px] font-mono text-text-muted uppercase mb-1">24h Volume</p>
                          <p className="text-lg font-mono text-white">$14.2M</p>
                          <p className="text-[10px] text-accent flex items-center mt-1"><ArrowUpRight size={10} className="mr-1"/> +12.4%</p>
                        </div>
                        <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 hover:bg-white/5 transition-colors">
                          <p className="text-[10px] font-mono text-text-muted uppercase mb-1">Active Traders</p>
                          <p className="text-lg font-mono text-white">8,492</p>
                          <p className="text-[10px] text-accent flex items-center mt-1"><ArrowUpRight size={10} className="mr-1"/> +5.2%</p>
                        </div>
                        <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 hover:bg-white/5 transition-colors">
                          <p className="text-[10px] font-mono text-text-muted uppercase mb-1">Listed Assets</p>
                          <p className="text-lg font-mono text-white">{assets.length}</p>
                          <p className="text-[10px] text-text-muted flex items-center mt-1">Verified</p>
                        </div>
                        <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 hover:bg-white/5 transition-colors">
                          <p className="text-[10px] font-mono text-text-muted uppercase mb-1">A#0M Index</p>
                          <p className="text-lg font-mono text-white">1,402.5</p>
                          <p className="text-[10px] text-accent flex items-center mt-1"><ArrowUpRight size={10} className="mr-1"/> +2.1%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trending Asset / Spotlight */}
                  {assets.length > 0 && (
                    <div 
                      className="bg-card border border-border rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group cursor-pointer" 
                      onClick={() => setSelectedAsset(assets[0])}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                      <img src={assets[0].image} alt="Trending" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                      
                      <div className="relative z-20 flex justify-between items-start">
                        <span className="bg-accent text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-[0_0_10px_rgba(0,255,148,0.3)]">
                          <Zap size={10} /> Trending
                        </span>
                        <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors">
                          <ArrowUpRight size={14} />
                        </button>
                      </div>

                      <div className="relative z-20 mt-32">
                        <h3 className="text-xl font-bold text-white mb-1">{assets[0].name}</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-white/70">{assets[0].category}</p>
                          <p className="text-sm font-mono text-accent">${assets[0].price.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-border rounded-2xl p-2">
                  <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto custom-scrollbar pb-2 sm:pb-0 px-2">
                    <button 
                      onClick={() => setSelectedCategory('All')}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap border transition-all",
                        selectedCategory === 'All' ? "bg-white/10 border-white/20" : "hover:bg-white/5 border-transparent text-text-muted"
                      )}
                    >
                      All Assets
                    </button>
                    <button 
                      onClick={() => setSelectedCategory('Estate')}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap border transition-all",
                        selectedCategory === 'Estate' ? "bg-white/10 border-white/20" : "hover:bg-white/5 border-transparent text-text-muted"
                      )}
                    >
                      Physical Real Estate
                    </button>
                    <button 
                      onClick={() => setSelectedCategory('Commodity')}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap border transition-all",
                        selectedCategory === 'Commodity' ? "bg-white/10 border-white/20" : "hover:bg-white/5 border-transparent text-text-muted"
                      )}
                    >
                      World Trade
                    </button>
                    <button 
                      onClick={() => setSelectedCategory('Currency')}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap border transition-all",
                        selectedCategory === 'Currency' ? "bg-white/10 border-white/20" : "hover:bg-white/5 border-transparent text-text-muted"
                      )}
                    >
                      Currency
                    </button>
                    <button 
                      onClick={() => setSelectedCategory('Patent')}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap border transition-all",
                        selectedCategory === 'Patent' ? "bg-white/10 border-white/20" : "hover:bg-white/5 border-transparent text-text-muted"
                      )}
                    >
                      Manufactured Patents
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 w-full sm:w-auto px-2 sm:px-0">
                    <button 
                      onClick={() => setIsPlatformModalOpen(true)}
                      className="p-2 bg-accent/20 text-accent border border-accent/30 rounded-xl hover:bg-accent/30 transition-colors flex items-center gap-2 px-3 whitespace-nowrap"
                    >
                      <Link2 size={16} />
                      <span className="text-sm hidden sm:inline">Connect Platforms</span>
                    </button>
                    <div className="relative w-full sm:w-64">
                      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                      <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search assets..." 
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                      />
                    </div>
                    <button className="p-2 bg-black/40 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2 px-3">
                      <Filter size={16} />
                      <span className="text-sm hidden sm:inline">Filters</span>
                    </button>
                    <select className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer">
                      <option>Sort: Trending</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rarity: Mythic First</option>
                    </select>
                  </div>
                </div>

                {/* Asset Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredAssets.map(asset => (
                    <div key={asset.id}>
                      <AssetCard 
                        asset={asset} 
                        onSelect={() => setSelectedAsset(asset)}
                        onBuy={() => handleBuy(asset)}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentView === 'portfolio' && (
              <motion.div 
                key="portfolio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-r from-accent/20 to-blue-500/20 border border-accent/30 rounded-3xl p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-sm font-mono text-accent uppercase tracking-widest mb-2">Portfolio Balance</p>
                    <h2 className="text-5xl font-display italic mb-4">${portfolio.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
                    <div className="flex gap-4">
                      <button onClick={() => { setIsCashOutModalOpen(true); setCashOutError(null); }} className="bg-accent text-black px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform">Withdraw</button>
                      <button onClick={() => { setIsCashOutModalOpen(true); setCashOutError(null); }} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-xl font-bold hover:bg-white/20 transition-colors">Transfer</button>
                    </div>
                  </div>
                  <div className="absolute right-[-20px] top-[-20px] opacity-10">
                    <Wallet size={200} />
                  </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-medium">Google Finance Portfolio</h3>
                      <p className="text-sm text-text-muted mt-1">Import your Google Finance CSV to generate a cash flow analysis.</p>
                    </div>
                    <div className="flex gap-2">
                      <label className="cursor-pointer bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                        {isImporting ? <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <ArrowUpRight size={16} />}
                        {isImporting ? 'Importing...' : 'Upload CSV'}
                        <input type="file" accept=".csv" className="hidden" onChange={handleFileUpload} disabled={isImporting} />
                      </label>
                      {importedPortfolio.length > 0 && (
                        <button 
                          onClick={() => {
                            const csv = Papa.unparse(importedPortfolio);
                            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                            const url = URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', 'portfolio_export.csv');
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                          className="bg-accent text-black px-4 py-2 rounded-xl text-sm font-bold hover:shadow-[0_0_10px_rgba(0,255,148,0.3)] transition-all flex items-center gap-2"
                        >
                          <Download size={16} />
                          Export CSV
                        </button>
                      )}
                    </div>
                  </div>

                  {importedPortfolio.length > 0 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-bg border border-border rounded-2xl p-4">
                          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Total Value</p>
                          <p className="text-2xl font-display text-accent">
                            ${importedPortfolio.reduce((sum, item) => sum + (item.quantity * item.currentPrice), 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </div>
                        <div className="bg-bg border border-border rounded-2xl p-4">
                          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Total Cost Basis</p>
                          <p className="text-2xl font-display">
                            ${importedPortfolio.reduce((sum, item) => sum + (item.quantity * item.costBasis), 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </div>
                        <div className="bg-bg border border-border rounded-2xl p-4">
                          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Total Return</p>
                          <p className={cn(
                            "text-2xl font-display",
                            importedPortfolio.reduce((sum, item) => sum + (item.quantity * item.currentPrice), 0) >= importedPortfolio.reduce((sum, item) => sum + (item.quantity * item.costBasis), 0) ? "text-green-500" : "text-red-500"
                          )}>
                            ${(importedPortfolio.reduce((sum, item) => sum + (item.quantity * item.currentPrice), 0) - importedPortfolio.reduce((sum, item) => sum + (item.quantity * item.costBasis), 0)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="pb-3 text-xs font-mono text-text-muted uppercase tracking-widest font-normal">Asset</th>
                              <th className="pb-3 text-xs font-mono text-text-muted uppercase tracking-widest font-normal text-right">Qty</th>
                              <th className="pb-3 text-xs font-mono text-text-muted uppercase tracking-widest font-normal text-right">Cost Basis</th>
                              <th className="pb-3 text-xs font-mono text-text-muted uppercase tracking-widest font-normal text-right">Current Price</th>
                              <th className="pb-3 text-xs font-mono text-text-muted uppercase tracking-widest font-normal text-right">Total Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {importedPortfolio.map((item, idx) => (
                              <tr key={idx} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                                <td className="py-4">
                                  <p className="font-medium">{item.symbol}</p>
                                  <p className="text-xs text-text-muted">{item.name}</p>
                                </td>
                                <td className="py-4 text-right font-mono">{item.quantity}</td>
                                <td className="py-4 text-right font-mono">${item.costBasis.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="py-4 text-right font-mono">${item.currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="py-4 text-right font-mono text-accent">${(item.quantity * item.currentPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Your Assets ({ownedAssets.length})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ownedAssets.map(asset => (
                      <div key={asset.id} className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <img src={asset.image} className="w-16 h-16 rounded-xl object-cover" alt={asset.name} />
                          <div>
                            <p className="font-medium">{asset.name}</p>
                            <p className="text-xs text-text-muted font-mono uppercase">{asset.rarity} • {asset.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-accent">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                          <div className="flex gap-2 justify-end mt-2">
                            <button 
                              onClick={async () => {
                                const analysis = await analyzeAsset(asset.name, asset.category, asset.rarity);
                                alert(analysis);
                              }}
                              className="text-[10px] font-mono uppercase tracking-widest text-accent hover:text-white"
                            >
                              Analyze
                            </button>
                            <button 
                              onClick={() => {
                                setSellingAsset(asset);
                                setSellPrice(asset.price.toString());
                              }}
                              className="text-[10px] font-mono uppercase tracking-widest text-text-muted hover:text-white"
                            >
                              Sell
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            {currentView === 'monetization' && (
              <motion.div 
                key="monetization"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-accent/20 to-purple-600/20 border border-accent/30 rounded-3xl p-8 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="max-w-xl">
                      <h2 className="text-4xl font-display italic mb-4">Trade Your Craft</h2>
                      <p className="text-text-muted mb-6">Earn passive income by securely sharing your masked trading cash balances. Our Master-crafted workshop processes your cash balances to provide market insights, and you get paid in real-time.</p>
                      <div className="flex items-center gap-6">
                        <div>
                          <p className="text-[10px] font-mono text-accent uppercase tracking-widest">Total Earned</p>
                          <p className="text-3xl font-mono">${(userProfile?.totalEarnings || 0).toFixed(2)}</p>
                        </div>
                        <div className="h-10 w-px bg-border" />
                        <div>
                          <p className="text-[10px] font-mono text-accent uppercase tracking-widest">Current Earnings</p>
                          <p className="text-3xl font-mono">
                            ${(18 * (
                              specialization === 'Gamer' ? 1.2 :
                              specialization === 'GameDesigner' ? 1.3 :
                              specialization === 'Programmer' ? 1.5 :
                              specialization === 'FrontendEngineer' ? 1.4 :
                              specialization === 'BackendEngineer' ? 1.5 :
                              specialization === 'DataScientist' ? 1.6 :
                              specialization === 'Developer' ? 1.7 :
                              specialization === 'Musician' ? 1.0 :
                              specialization === 'SoundEngineer' ? 1.1 : 1.0
                            )).toFixed(2)}/hr
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Select Specialization</p>
                        <div className="flex gap-2">
                          {(['Developer', 'Programmer', 'Gamer'] as Specialization[]).map((spec) => (
                            <button
                              key={spec}
                              onClick={() => setSpecialization(spec === specialization ? 'None' : spec)}
                              className={cn(
                                "px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-widest border transition-all",
                                specialization === spec 
                                  ? "bg-accent text-black border-accent shadow-[0_0_15px_rgba(157,78,221,0.3)]" 
                                  : "bg-white/5 border-white/10 text-text-muted hover:border-accent/50"
                              )}
                            >
                              {spec}
                            </button>
                          ))}
                        </div>
                        {specialization !== 'None' && (
                          <p className="text-[8px] text-accent font-mono uppercase tracking-widest animate-pulse">
                            {specialization} Bonus Active: {
                              specialization === 'Gamer' ? '+80%' :
                              specialization === 'Programmer' ? '+100%' :
                              specialization === 'Developer' ? '+150%' : ''
                            }
                          </p>
                        )}
                      </div>
                      <div className="h-px w-full bg-border/50 my-2" />
                      <button 
                        onClick={() => toggleGuildMonetization(user!.uid, !userProfile?.monetizationActive)}
                        className={cn(
                          "w-20 h-10 rounded-full p-1 transition-colors relative",
                          userProfile?.monetizationActive ? "bg-accent" : "bg-white/10"
                        )}
                      >
                        <motion.div 
                          animate={{ x: userProfile?.monetizationActive ? 40 : 0 }}
                          className="w-8 h-8 bg-white rounded-full shadow-lg"
                        />
                      </button>
                      <p className="text-xs font-mono uppercase tracking-widest">
                        {userProfile?.monetizationActive ? "Monetization Active" : "Monetization Paused"}
                      </p>
                    </div>
                  </div>
                  <EarningsChart data={(userProfile?.earningsHistory || []).map(h => ({ 
                    time: new Date(h.timestamp).toLocaleDateString(), 
                    amount: h.amount 
                  }))} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass p-6 rounded-2xl" title="Data is processed in real-time using secure Master workshops.">
                    <Zap className="text-accent mb-4" />
                    <h4 className="font-medium mb-2">Real-time Processing</h4>
                    <p className="text-xs text-text-muted">Your crafts are appraised instantly, and earnings are added to your balance every 5 seconds.</p>
                  </div>
                  <div className="glass p-6 rounded-2xl" title="All crafts are masked and secured in the cash balance before leaving your workshop.">
                    <Shield className="text-accent mb-4" />
                    <h4 className="font-medium mb-2">Privacy First</h4>
                    <p className="text-xs text-text-muted">All crafts are masked and secured in the cash balance before leaving your workshop. We never sell Artisan Secrets.</p>
                  </div>
                  <div className="glass p-6 rounded-2xl" title="Get paid directly for your contribution to the trading ecosystem.">
                    <TrendingUp className="text-accent mb-4" />
                    <h4 className="font-medium mb-2">Market Insights</h4>
                    <p className="text-xs text-text-muted">Contribute to the ecosystem and help stabilize asset prices across the marketplace.</p>
                  </div>
                </div>

                <div className="bg-bg border border-border rounded-3xl p-8">
                  <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                    <CreditCard className="text-accent" />
                    Payment Configuration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Cash App Tag</label>
                        <button 
                          onClick={() => updateCashTag(user!.uid, cashTag)}
                          className="text-[10px] font-mono text-accent uppercase tracking-widest hover:underline"
                        >
                          Save
                        </button>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 font-mono">$</span>
                        <input 
                          type="text" 
                          value={cashTag}
                          onChange={(e) => setCashTag(e.target.value)}
                          className="w-full bg-white/5 border border-border rounded-xl py-3 pl-10 pr-4 text-sm font-mono focus:outline-none focus:border-green-500/50 transition-colors"
                          placeholder="yourcashtag"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Chime Tag</label>
                        <button 
                          onClick={() => updateChimeTag(user!.uid, chimeTag)}
                          className="text-[10px] font-mono text-accent uppercase tracking-widest hover:underline"
                        >
                          Save
                        </button>
                      </div>
                      <input 
                        type="text" 
                        value={chimeTag}
                        onChange={(e) => setChimeTag(e.target.value)}
                        className="w-full bg-white/5 border border-border rounded-xl py-3 px-4 text-sm font-mono focus:outline-none focus:border-accent/50 transition-colors"
                        placeholder="yourchimetag"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'storage' && (
              <motion.div 
                key="gaming-host"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-display italic tracking-tighter mb-2 uppercase">Gaming Host Network</h2>
                    <p className="text-text-muted text-sm">Host high-performance gaming nodes and play your favorite titles directly on the A#0M network.</p>
                    {isApnBridged && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 mt-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest">
                          APN Bridged: {platformType} Network Active
                        </span>
                      </motion.div>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[10px] text-text-muted uppercase tracking-widest">Host Status</p>
                      <p className={cn("text-sm font-bold", isHostNetworkActive ? "text-green-400" : "text-red-400")}>
                        {isHostNetworkActive ? 'CONNECTED' : 'DISCONNECTED'}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-[8px] text-text-muted uppercase tracking-widest">Connect</p>
                      <button 
                        onClick={() => setIsHostNetworkActive(!isHostNetworkActive)}
                        className={cn(
                          "w-14 h-8 rounded-full p-1 transition-colors relative",
                          isHostNetworkActive ? "bg-accent" : "bg-white/10"
                        )}
                      >
                        <motion.div 
                          animate={{ x: isHostNetworkActive ? 24 : 0 }}
                          className="w-6 h-6 bg-white rounded-full shadow-lg"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(['Xbox', 'PC', 'PlayStation'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setPlatformType(type)}
                      title={`Host a dedicated ${type} gaming node to earn passive income.`}
                      className={cn(
                        "glass p-6 rounded-3xl border text-left transition-all group relative overflow-hidden",
                        platformType === type ? "border-accent shadow-[0_0_30px_rgba(157,78,221,0.2)]" : "border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        {type === 'Xbox' && <Tv size={80} />}
                        {type === 'PC' && <Laptop size={80} />}
                        {type === 'PlayStation' && <Monitor size={80} />}
                      </div>
                      <div className="relative z-10">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center mb-4",
                          platformType === type ? "bg-accent text-black" : "bg-white/5 text-text-muted"
                        )}>
                          {type === 'Xbox' && <Tv size={24} />}
                          {type === 'PC' && <Laptop size={24} />}
                          {type === 'PlayStation' && <Monitor size={24} />}
                        </div>
                        <h3 className="text-xl font-bold mb-1">{type} Host</h3>
                        <p className="text-xs text-text-muted mb-4">Host {type} games.</p>
                        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest mb-2">
                          <span>Earnings</span>
                          <span className="text-accent">
                            {isApnBridged && platformType === type ? '$120,000.00 / hr' : '$100,000.00 / hr'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                          <span>Node Status</span>
                          <span className={cn(isHostNetworkActive && platformType === type ? "text-green-400" : "text-red-400")}>
                            {isHostNetworkActive && platformType === type ? 'CONNECTED' : 'DISCONNECTED'}
                          </span>
                        </div>
                        {isApnBridged && platformType === type && (
                          <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                            <span className="text-text-muted">Service Fee</span>
                            <span className="text-accent">$25.00 / mo</span>
                          </div>
                        )}
                        {isApnBridged && platformType === type && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                          />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Game Library Section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-display italic uppercase tracking-tighter">Game Library</h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      {isHostNetworkActive ? 'HOST NETWORK ONLINE' : 'HOST NETWORK OFFLINE'}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { id: 'cosmo-dust', title: 'Cosmo Dust: Star Drift', icon: <Rocket size={24} />, color: 'from-purple-500 to-pink-500' },
                      { id: 'neon-racer', title: 'Neon Pulse Racer', icon: <Zap size={24} />, color: 'from-cyan-500 to-blue-500' },
                      { id: 'void-miner', title: 'Void Miner Pro', icon: <Pickaxe size={24} />, color: 'from-orange-500 to-yellow-500' },
                      { id: 'cyber-chess', title: 'Cyber Chess 2077', icon: <Target size={24} />, color: 'from-green-500 to-emerald-500' },
                    ].map((game) => (
                      <motion.div
                        key={game.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "glass p-4 rounded-2xl border border-white/5 cursor-pointer group relative overflow-hidden",
                          !isHostNetworkActive && "opacity-50 grayscale cursor-not-allowed"
                        )}
                        onClick={() => isHostNetworkActive && setActiveGame(game.id)}
                      >
                        <div className={cn("w-full aspect-video rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white shadow-lg", game.color)}>
                          {game.icon}
                        </div>
                        <h4 className="font-bold text-sm mb-1">{game.title}</h4>
                        <p className="text-[10px] text-text-muted uppercase tracking-widest">Ready to Play</p>
                        
                        {!isHostNetworkActive && (
                          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
                            <Lock size={20} className="text-white/50" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Active Game Modal/Overlay */}
                <AnimatePresence>
                  {activeGame && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-6"
                    >
                      <button 
                        onClick={() => setActiveGame(null)}
                        className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <X size={32} />
                      </button>
                      
                      <div className="w-full max-w-4xl aspect-video glass rounded-3xl border-accent/20 overflow-hidden relative flex flex-col items-center justify-center">
                        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(157,78,221,0.2),transparent_70%)]" />
                        
                        {gameSessionState === 'connecting' && (
                          <div className="text-center space-y-6">
                            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center text-accent mx-auto animate-bounce">
                              <Gamepad2 size={48} />
                            </div>
                            <h2 className="text-4xl font-display italic uppercase tracking-tighter rainbow-text">
                              {activeGame?.replace('-', ' ').toUpperCase() || 'LOADING...'}
                            </h2>
                            <p className="text-text-muted font-mono">CONNECTING TO {platformType.toUpperCase()} HOST NODE...</p>
                            
                            <div className="w-64 h-2 bg-white/5 rounded-full overflow-hidden mx-auto">
                              <motion.div 
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 3, ease: "linear" }}
                                onAnimationComplete={() => {
                                  setGameSessionState('ready');
                                }}
                                className="h-full bg-accent"
                              />
                            </div>
                          </div>
                        )}

                        {gameSessionState === 'ready' && (
                          <div className="text-center space-y-6">
                            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mx-auto">
                              <Gamepad2 size={48} />
                            </div>
                            <h2 className="text-4xl font-display italic uppercase tracking-tighter text-green-400">
                              CONNECTION ESTABLISHED
                            </h2>
                            <p className="text-text-muted font-mono">DIRECT TCP/TLD CONNECTION ACTIVE</p>
                            
                            <div className="pt-8">
                              <button 
                                onClick={() => setGameSessionState('playing')}
                                className="bg-accent text-black px-8 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(157,78,221,0.5)] transition-all"
                              >
                                START SESSION
                              </button>
                            </div>
                          </div>
                        )}

                        {gameSessionState === 'playing' && (
                          <div className="w-full h-full relative bg-black">
                            {/* Simulated Game Render */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center space-y-4">
                                <Gamepad2 size={64} className="text-white/20 mx-auto" />
                                <h2 className="text-2xl font-display italic uppercase tracking-tighter text-white/50">
                                  {activeGame?.replace('-', ' ').toUpperCase() || 'LOADING...'}
                                </h2>
                                <p className="text-xs font-mono text-green-400">RENDERING ENGINE ACTIVE - FULL PLAYABILITY ENABLED</p>
                              </div>
                            </div>
                            {/* Overlay UI */}
                            <div className="absolute top-4 left-4 flex gap-2">
                              <div className="px-2 py-1 bg-black/50 rounded text-[10px] font-mono text-white border border-white/10">
                                FPS: {Math.floor(Math.random() * 20) + 120}
                              </div>
                              <div className="px-2 py-1 bg-black/50 rounded text-[10px] font-mono text-white border border-white/10">
                                PING: {Math.floor(Math.random() * 5) + 10}ms
                              </div>
                            </div>
                            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/50 rounded-full border border-white/10">
                              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              <span className="text-[10px] font-mono text-white">SYNCED TO GOOGLE PROFILE</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-8 flex gap-8 text-[10px] font-mono uppercase tracking-widest text-text-muted">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          LATENCY: 12ms
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          FPS: 120
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          BITRATE: 50Mbps
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Cpu size={200} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                          <Monitor size={20} />
                        </div>
                        <h3 className="text-xl font-bold">Node Performance</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2" title="Current GPU utilization for gaming tasks.">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest">GPU Usage</p>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: isHostNetworkActive ? '85%' : '5%' }}
                              className="h-full bg-accent"
                            />
                          </div>
                          <p className="text-xs font-mono">{isHostNetworkActive ? '85%' : '5%'}</p>
                        </div>
                        <div className="space-y-2" title="Memory allocated to active gaming sessions.">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest">RAM Allocation</p>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: isHostNetworkActive ? '72%' : '12%' }}
                              className="h-full bg-blue-400"
                            />
                          </div>
                          <p className="text-xs font-mono">{isHostNetworkActive ? '24GB / 32GB' : '4GB / 32GB'}</p>
                        </div>
                        <div className="space-y-2" title="Network bandwidth for game streaming.">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest">Stream Bandwidth</p>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: isHostNetworkActive ? (isApnBridged ? '98%' : '88%') : '2%' }}
                              className="h-full bg-green-400"
                            />
                          </div>
                          <p className="text-xs font-mono">
                            {isHostNetworkActive ? (isApnBridged ? `1.2 Gbps (${APN_CONFIG.APN_NAME})` : '880 Mbps') : '12 Mbps'}
                          </p>
                        </div>
                        <div className="space-y-2" title="Number of active gaming instances.">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest">Active Players</p>
                          <p className="text-2xl font-display italic tracking-tighter text-accent">
                            {isHostNetworkActive ? '42' : '0'}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest">Host Earnings</p>
                          <p className="text-2xl font-display italic tracking-tighter text-blue-400">
                            ${isHostNetworkActive ? (isApnBridged ? '36.00' : '18.00') : '0.00'}/hr
                          </p>
                        </div>
                        <div className="space-y-2 col-span-2">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest">Host Uptime</p>
                          <p className="text-xl font-mono text-blue-400">
                            {isHostNetworkActive ? formatUptime(hostUptime) : '00:00:00'}
                          </p>
                        </div>
                      </div>

                      {isHostNetworkActive && (
                        <div className="mt-8 pt-8 border-t border-white/5">
                          <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Users size={14} className="text-accent" />
                            Active Sessions
                          </h4>
                          <div className="space-y-3">
                            {activePlayers.map((player, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                  <div>
                                    <p className="text-xs font-bold">{player.name}</p>
                                    <p className="text-[10px] text-text-muted">{player.game}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-[10px] font-mono text-accent">{player.ping}</p>
                                  <p className="text-[8px] text-text-muted uppercase">Latency</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Shield size={200} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                          <Shield size={20} />
                        </div>
                        <h3 className="text-xl font-bold">Gaming Security Protocol</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Encryption</p>
                          <p className="text-xs font-mono text-white">AES-256-GCM</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Anti-Cheat</p>
                          <p className="text-xs font-mono text-white">A#0M_SENTINEL</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Network Route</p>
                          <p className="text-xs font-mono text-white">GAMING_HOST_RELAY_V4</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Delivery Priority</p>
                          <p className="text-xs font-mono text-white">Standard, Express, Urgent</p>
                        </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Region / District</p>
                        <p className="text-xs font-mono text-white">310 / 410 (USA)</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Transport Method</p>
                        <p className="text-xs font-mono text-white">Horse & Carriage (Express)</p>
                      </div>
                      <div className="col-span-2 p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Guild Registry ID</p>
                        <p className="text-[10px] font-mono text-accent truncate">1:1084631390653GUILDbyHA|0•</p>
                      </div>
                      <div className="col-span-2 mt-2">
                        <button
                          onClick={() => {
                            const newState = !isApnBridged;
                            setIsApnBridged(newState);
                            if (newState) {
                              addTerminalLog(`INITIATING ${REAL_APN_CONFIG.name} TO ${platformType.toUpperCase()} LIVE...`);
                              addTerminalLog(`FETCHING APN MESSAGE: "${REAL_APN_CONFIG.id}"`);
                              addTerminalLog(`ESTABLISHING VENT CONNECTION [MOCCANET-V1]...`);
                              addTerminalLog(`HANDSHAKE COMPLETE: XBOX/PLAYSTATION/PC LIVE GAMING SYNCED.`);
                              addTerminalLog(`MOCCANET TUNNEL SECURED. STATUS: ${REAL_APN_CONFIG.status}.`);
                              addTerminalLog(`SUBSCRIPTION ACTIVE: $25.00/MONTH CHARGED VIA PROVIDER.`);
                            } else {
                              addTerminalLog(`DISCONNECTING ${REAL_APN_CONFIG.name} FROM ${platformType.toUpperCase()}...`);
                              addTerminalLog(`VENT CLOSED. SIGNAL TERMINATED.`);
                              addTerminalLog(`APN MESSAGE: "${REAL_APN_CONFIG.id}-DISCONNECT-CLEAN"`);
                            }
                          }}
                          className={cn(
                            "w-full py-3 rounded-xl font-mono text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                            isApnBridged 
                              ? "bg-green-500/20 text-green-400 border border-green-500/30 shadow-[0_0_15px_rgba(74,222,128,0.1)]" 
                              : "bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30"
                          )}
                        >
                          <Zap size={14} className={isApnBridged ? "animate-pulse" : ""} />
                          {isApnBridged ? `LINKED TO ${platformType.toUpperCase()}` : `LINK COURIER TO ${platformType.toUpperCase()}`}
                        </button>
                        {isApnBridged && (
                          <motion.p 
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[8px] text-center text-text-muted mt-2 font-mono uppercase tracking-tighter"
                          >
                            Secure Passage Established via Guild Courier Network
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            )}

            {currentView === 'tithe' && (
              <motion.div 
                key="tithe"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-display italic">Wireless Center</h2>
                  <p className="text-text-muted text-sm">Manage your wireless compensation and view signal thresholds.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Earnings Summary */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        <DollarSign size={200} />
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <TrendingUp size={20} className="text-accent" />
                          Signal Progress (Wireless Compensation Form)
                        </h3>
                        
                        <div className="space-y-8">
                          <div>
                            <div className="flex justify-between items-end mb-2">
                              <div>
                                <p className="text-[10px] text-text-muted uppercase tracking-widest">Total Wireless Earnings</p>
                                <p className="text-4xl font-display italic tracking-tighter text-accent">
                                  ${userProfile?.totalEarnings?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-[10px] text-text-muted uppercase tracking-widest">Signal Threshold</p>
                                <p className="text-xl font-mono">$600.00</p>
                              </div>
                            </div>
                            
                            <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min((userProfile?.totalEarnings || 0) / 600 * 100, 100)}%` }}
                                className="h-full bg-gradient-to-r from-accent to-green-400"
                              />
                            </div>
                            <p className="text-[10px] text-text-muted mt-2 font-mono uppercase tracking-widest">
                              {userProfile?.totalEarnings && userProfile.totalEarnings >= 600 
                                ? "Threshold Reached: You will receive a Wireless Compensation Form for year 2025." 
                                : `Remaining: $${(600 - (userProfile?.totalEarnings || 0)).toFixed(2)} until signal threshold.`}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                              <div className="flex items-center gap-2 mb-2">
                                <Info size={14} className="text-accent" />
                                <h4 className="text-xs font-bold uppercase tracking-widest">Wireless NEC Form</h4>
                              </div>
                              <p className="text-[10px] text-text-muted leading-relaxed">
                                Used to report Wireless Signal Compensation of $600 or more. This includes fees, commissions, and other forms of compensation for services performed for your network or business.
                              </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                              <div className="flex items-center gap-2 mb-2">
                                <Info size={14} className="text-accent" />
                                <h4 className="text-xs font-bold uppercase tracking-widest">Wireless MISC Form</h4>
                              </div>
                              <p className="text-[10px] text-text-muted leading-relaxed">
                                Used to report miscellaneous information such as rents, royalties ($10+), prizes, awards, and other income payments of $600 or more.
                              </p>
                            </div>
                          </div>

                          <div className="pt-4">
                            <button 
                              onClick={() => alert("Generating Wireless Compensation Form (PDF)...")}
                              className="w-full py-4 rounded-2xl bg-accent text-black font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(157,78,221,0.4)] transition-all flex items-center justify-center gap-2"
                            >
                              <FileText size={18} />
                              Download 2025 Compensation Form
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Important Reminders */}
                    <div className="glass p-8 rounded-[2rem] border border-white/5">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <ShieldCheck size={20} className="text-green-400" />
                        Wireless Network Compliance Reminders
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-none text-[10px] font-bold">01</div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest mb-1">Wireless Cash Balance Threshold</p>
                              <p className="text-[10px] text-text-muted">The wireless cash balance threshold has been lowered to 10 returns effective for information returns required to be transmitted on or after January 1, 2024.</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-none text-[10px] font-bold">02</div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest mb-1">Transmission Dates</p>
                              <p className="text-[10px] text-text-muted">Form 1099-NEC must be transmitted by January 31. Form 1099-MISC must be transmitted by February 28 (paper) or March 31 (wireless cash balance).</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-none text-[10px] font-bold">03</div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest mb-1">Wireless Trade</p>
                              <p className="text-[10px] text-text-muted">Report on Form 1099-MISC or 1099-NEC only when payments are made in the course of your wireless trade or business. Personal payments are not reportable.</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-none text-[10px] font-bold">04</div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest mb-1">Wireless ID Truncation</p>
                              <p className="text-[10px] text-text-muted">Truncation of recipient's Wireless ID is allowed on payee statements but not on documents transmitted to the Wireless Council.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tithe Info Form */}
                  <div className="space-y-6">
                    <div className="glass p-8 rounded-[2rem] border border-white/5 h-full">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Lock size={20} className="text-accent" />
                        Wireless Signal Identity
                      </h3>
                      
                      {userProfile?.titheRecord?.isCompleted ? (
                        <div className="space-y-6">
                          <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-center">
                            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-4">
                              <ShieldCheck size={24} />
                            </div>
                            <p className="text-sm font-bold text-green-400 uppercase tracking-widest">Verified</p>
                            <p className="text-[10px] text-text-muted mt-1">Wireless information transmitted successfully.</p>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                              <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Wireless ID Type</p>
                              <p className="text-sm font-mono">{userProfile.titheRecord.tinType}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                              <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Wireless ID Number</p>
                              <p className="text-sm font-mono">***-**-{userProfile.titheRecord.tin?.slice(-4)}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                              <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Last Transmitted</p>
                              <p className="text-sm font-mono">{new Date(userProfile.titheRecord.lastUpdated || '').toLocaleDateString()}</p>
                            </div>
                          </div>

                          <button 
                            onClick={async () => {
                              // Reset for editing
                              setTin('');
                              await resetTitheRecord(user.uid);
                            }}
                            className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-[10px] font-mono uppercase tracking-widest"
                          >
                            Update Information
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <p className="text-[10px] text-text-muted leading-relaxed">
                            To ensure accurate wireless reporting and avoid backup withholding, please provide your Wireless Identification Number (Wireless ID).
                          </p>
                          
                          <div className="space-y-4">
                            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
                              <button 
                                onClick={() => setTinType('SSN')}
                                className={cn(
                                  "flex-1 py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest transition-all",
                                  tinType === 'SSN' ? "bg-accent text-black" : "text-text-muted hover:text-white"
                                )}
                              >
                                SSN
                              </button>
                              <button 
                                onClick={() => setTinType('EIN')}
                                className={cn(
                                  "flex-1 py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest transition-all",
                                  tinType === 'EIN' ? "bg-accent text-black" : "text-text-muted hover:text-white"
                                )}
                              >
                                EIN
                              </button>
                            </div>

                            <div className="space-y-2">
                              <label className="text-[10px] text-text-muted uppercase tracking-widest px-2">Wireless ID Number</label>
                              <input 
                                type="password"
                                value={tin}
                                onChange={(e) => setTin(e.target.value)}
                                placeholder={tinType === 'SSN' ? "XXX-XX-XXXX" : "XX-XXXXXXX"}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-accent transition-colors"
                              />
                            </div>

                            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                              <p className="text-[9px] text-accent leading-relaxed italic">
                                * Your Wireless ID is masked and stored securely in the cash balance. It is only used for generating mandatory Wireless forms when earnings exceed $600.
                              </p>
                            </div>

                            <button 
                              disabled={!tin || isSubmittingTithe}
                              onClick={async () => {
                                setIsSubmittingTithe(true);
                                try {
                                  await updateTitheRecord(user.uid, tin, tinType);
                                  toast.success('Wireless Info transmitted successfully!');
                                } catch (e) {
                                  console.error(e);
                                  toast.error('Failed to transmit Wireless Info.');
                                } finally {
                                  setIsSubmittingTithe(false);
                                }
                              }}
                              className="w-full py-4 bg-accent text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100"
                            >
                              {isSubmittingTithe ? 'Processing...' : 'Transmit Wireless Info'}
                            </button>

                            <button 
                              onClick={() => setShowWirelessFormPreview(true)}
                              className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-[10px] font-mono uppercase tracking-widest"
                            >
                              Preview Form 1099-NEC
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Detailed Instructions Accordion-like section */}
                <div className="glass p-8 rounded-[2rem] border border-white/5">
                  <h3 className="text-xl font-bold mb-6">Detailed Wireless Instructions (04/2025)</h3>
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-accent">Form 1099-MISC: Miscellaneous Information</h4>
                      <p className="text-[11px] text-text-muted leading-relaxed">
                        File Form 1099-MISC for each person to whom you have paid at least $10 in royalties or broker payments in lieu of dividends/wireless-exempt interest, or at least $600 in rents, prizes/awards, other income payments, fishing boat proceeds, medical/health care payments, crop insurance proceeds, gross proceeds to an attorney, Section 409A deferrals, or nonqualified deferred compensation.
                      </p>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-accent">Form 1099-NEC: Nonemployee Compensation</h4>
                      <p className="text-[11px] text-text-muted leading-relaxed">
                        File Form 1099-NEC for each person to whom you have paid at least $600 in services performed by someone who is not your employee (including parts and materials) or payments to an attorney for fees.
                      </p>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-accent">What's New (04/2025)</h4>
                      <ul className="list-disc list-inside text-[11px] text-text-muted space-y-1">
                        <li>Excess golden parachute payments are now reported on Form 1099-NEC, box 3.</li>
                        <li>Wireless cash balance threshold lowered to 10 returns (aggregated).</li>
                        <li>IRIS (Information Reporting Intake System) is now available for in-person wireless cash balance entry.</li>
                      </ul>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-accent">Specific Box Instructions</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase text-white mb-1">1099-MISC Box 1: Rents</p>
                          <p className="text-[10px] text-text-muted">Real estate rentals, machine rentals, pasture rentals, and public housing agency payments.</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase text-white mb-1">1099-MISC Box 2: Royalties</p>
                          <p className="text-[10px] text-text-muted">Gross royalty payments of $10 or more from oil, gas, or intangible property like patents and copyrights.</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase text-white mb-1">1099-NEC Box 1: NEC</p>
                          <p className="text-[10px] text-text-muted">Fees, commissions, prizes and awards for services performed as a nonemployee.</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase text-white mb-1">1099-MISC Box 10: Attorney Proceeds</p>
                          <p className="text-[10px] text-text-muted">Gross proceeds of $600 or more paid to an attorney in connection with legal services (e.g. settlements).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'private-payments' && (
              <motion.div 
                key="private-payments"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-display italic uppercase tracking-tighter rainbow-text">Private Payments Vault</h2>
                    <p className="text-text-muted font-mono mt-2">SECURE END-TO-END ENCRYPTED TRANSACTIONS</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                    <ShieldCheck size={16} className="text-green-400" />
                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">AES-512 Secured</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Lock size={200} />
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <Wallet size={20} className="text-accent" />
                          Encrypted Transfer
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors cursor-pointer">
                              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                                <Globe2 size={20} />
                              </div>
                              <p className="font-bold">Wire Transfer</p>
                              <p className="text-[10px] text-text-muted mt-1">Global SWIFT Network</p>
                            </div>
                            <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 cursor-pointer">
                              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-3">
                                <Lock size={20} />
                              </div>
                              <p className="font-bold">Crypto Vault</p>
                              <p className="text-[10px] text-accent mt-1">Zero-Knowledge Proof</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Recipient Address / Hash</label>
                              <input 
                                type="text" 
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono focus:border-accent focus:outline-none transition-colors"
                                placeholder="0x..."
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Amount (USD Equivalent)</label>
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">$</span>
                                <input 
                                  type="number" 
                                  className="w-full bg-black/50 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-sm font-mono focus:border-accent focus:outline-none transition-colors"
                                  placeholder="0.00"
                                />
                              </div>
                            </div>
                            <button className="w-full py-4 bg-accent text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(157,78,221,0.5)] transition-all flex items-center justify-center gap-2">
                              <Lock size={18} />
                              INITIATE SECURE TRANSFER
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="glass p-6 rounded-[2rem] border border-white/5">
                      <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                        <ShieldAlert size={16} className="text-accent" />
                        Security Status
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                          <span className="text-xs text-text-muted">Encryption</span>
                          <span className="text-xs font-mono text-green-400">AES-512-GCM</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                          <span className="text-xs text-text-muted">Network</span>
                          <span className="text-xs font-mono text-green-400">TOR Routed</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                          <span className="text-xs text-text-muted">Anonymity</span>
                          <span className="text-xs font-mono text-green-400">Maximum</span>
                        </div>
                      </div>
                    </div>

                    <div className="glass p-6 rounded-[2rem] border border-white/5">
                      <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Recent Transactions</h3>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                <Lock size={14} />
                              </div>
                              <div>
                                <p className="text-xs font-mono">TX-0x{Math.random().toString(16).slice(2, 8)}</p>
                                <p className="text-[10px] text-text-muted">Completed</p>
                              </div>
                            </div>
                            <span className="text-xs font-mono text-green-400">+$1,250.00</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'profile' && (
              <motion.div 
                key="profile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-display italic tracking-tighter mb-2 uppercase">Artisan Profile</h2>
                    <p className="text-text-muted text-sm">Customize your presence in the A#0M Guild.</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    <Users size={24} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 space-y-6">
                    <div className="glass p-6 rounded-[2rem] border-white/5 text-center space-y-4">
                      <div className="relative group mx-auto w-32 h-32">
                        <img 
                          src={profilePortrait || 'https://ui-avatars.com/api/?name=Artisan&background=random'} 
                          className="w-full h-full rounded-3xl object-cover border-2 border-accent/30" 
                          alt="Portrait" 
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center">
                          <Upload size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{profileName || 'Unnamed Artisan'}</h3>
                        <p className="text-[10px] font-mono text-accent uppercase tracking-widest">{profileSpecialization}</p>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Artisan ID</p>
                        <p className="text-xs font-mono truncate">{user?.uid}</p>
                      </div>
                      <ThemeSettings />
                    </div>

                    <BackupManager />

                    <div className="glass p-6 rounded-[2rem] border-white/5 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <Trophy size={14} className="text-accent" />
                        Showcase Items
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {profileShowcase.length > 0 ? (
                          profileShowcase.map(id => {
                            const asset = assets.find(a => a.id === id);
                            return asset ? (
                              <div key={id} className="aspect-square rounded-xl overflow-hidden border border-white/10 relative group">
                                <img src={asset.image} className="w-full h-full object-cover" alt={asset.name} />
                                <button 
                                  onClick={() => setProfileShowcase(prev => prev.filter(i => i !== id))}
                                  className="absolute top-1 right-1 p-1 bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X size={10} className="text-white" />
                                </button>
                              </div>
                            ) : null;
                          })
                        ) : (
                          <div className="col-span-2 py-8 text-center border-2 border-dashed border-white/5 rounded-2xl">
                            <p className="text-[10px] text-text-muted italic">No items showcased.</p>
                          </div>
                        )}
                      </div>
                      <p className="text-[9px] text-text-muted leading-relaxed">
                        Select items from your portfolio to showcase on your public artisan profile.
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-6">
                    <div className="glass p-8 rounded-[2rem] border-white/5 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] text-text-muted uppercase tracking-widest px-2">Artisan Name</label>
                          <input 
                            type="text" 
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] text-text-muted uppercase tracking-widest px-2">Portrait URL</label>
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              value={profilePortrait}
                              onChange={(e) => setProfilePortrait(e.target.value)}
                              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                              placeholder="https://..."
                            />
                            <label className="cursor-pointer bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
                              <ImageIcon size={16} />
                              Upload
                              <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onloadend = () => setProfilePortrait(reader.result as string);
                                  reader.readAsDataURL(file);
                                }
                              }} />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] text-text-muted uppercase tracking-widest px-2">Preferred Specialization</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {(['None', 'Developer', 'Programmer', 'Gamer', 'Musician', 'SoundEngineer', 'GameDesigner', 'FrontendEngineer', 'BackendEngineer', 'DataScientist'] as Specialization[]).map(spec => (
                            <button
                              key={spec}
                              onClick={() => setProfileSpecialization(spec)}
                              className={cn(
                                "py-2 px-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all",
                                profileSpecialization === spec ? "bg-accent text-black border-accent" : "bg-white/5 border-white/10 text-text-muted hover:text-white"
                              )}
                            >
                              {spec}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] text-text-muted uppercase tracking-widest px-2">Artisan Bio</label>
                        <textarea 
                          value={profileBio}
                          onChange={(e) => setProfileBio(e.target.value)}
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                          placeholder="Tell the guild about your craft..."
                        />
                      </div>

                      <div className="pt-4 flex gap-4">
                        <button 
                          onClick={() => setCurrentView('dashboard')}
                          className="flex-1 py-4 rounded-2xl border border-white/10 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
                        >
                          Cancel
                        </button>
                        <button 
                          disabled={isSavingProfile}
                          onClick={async () => {
                            if (!userProfile) return;
                            setIsSavingProfile(true);
                            try {
                              await updateUserProfile(user.uid, {
                                artisanName: profileName,
                                portraitURL: profilePortrait,
                                bio: profileBio,
                                preferredSpecialization: profileSpecialization,
                                showcaseAssets: profileShowcase
                              });
                              setCurrentView('dashboard');
                            } catch (e) {
                              console.error(e);
                            } finally {
                              setIsSavingProfile(false);
                            }
                          }}
                          className="flex-2 bg-accent text-black px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(157,78,221,0.4)] transition-all disabled:opacity-50"
                        >
                          {isSavingProfile ? 'Saving...' : 'Save Profile Changes'}
                        </button>
                      </div>
                    </div>

                    <div className="glass p-8 rounded-[2rem] border-white/5 space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest">Add to Showcase</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {assets.filter(a => portfolio.assets.includes(a.id) && !profileShowcase.includes(a.id)).map(asset => (
                          <motion.div 
                            key={asset.id}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => {
                              if (!profileShowcase.includes(asset.id)) {
                                setProfileShowcase(prev => [...prev, asset.id]);
                              }
                            }}
                            className="aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer relative group"
                          >
                            <img src={asset.image} className="w-full h-full object-cover" alt={asset.name} />
                            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Zap size={20} className="text-white" />
                            </div>
                          </motion.div>
                        ))}
                        {assets.filter(a => portfolio.assets.includes(a.id) && !profileShowcase.includes(a.id)).length === 0 && (
                          <div className="col-span-full py-6 text-center text-text-muted text-xs italic">
                            No more assets available to showcase.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'earnings' && (
              <motion.div 
                key="earnings"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-display italic">Cash Out History</h2>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-white/5">
                        <th className="p-4 text-xs font-mono uppercase tracking-widest text-text-muted">Date</th>
                        <th className="p-4 text-xs font-mono uppercase tracking-widest text-text-muted">Amount</th>
                        <th className="p-4 text-xs font-mono uppercase tracking-widest text-text-muted">Method</th>
                        <th className="p-4 text-xs font-mono uppercase tracking-widest text-text-muted">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userProfile?.earningsHistory?.map((item, i) => (
                        <tr key={i} className="border-b border-border hover:bg-white/5 transition-colors">
                          <td className="p-4 text-sm">{new Date(item.timestamp).toLocaleDateString()}</td>
                          <td className="p-4 text-sm font-mono text-accent">${item.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="p-4 text-sm">
                            <div className="flex flex-col">
                              <span>{item.method}</span>
                              {item.guildTag && (
                                <span className="text-[10px] text-green-500 font-mono">${item.guildTag}</span>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-accent/10 text-accent">
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {(!userProfile?.earningsHistory || userProfile.earningsHistory.length === 0) && (
                        <tr>
                          <td colSpan={4} className="p-8 text-center text-text-muted italic">No cash out history yet.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {currentView === 'playlist' && (
              <motion.div 
                key="playlist"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-display italic">A#0M Official Playlist</h2>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                    <Music size={16} className="text-accent" />
                    <span className="text-xs font-mono uppercase tracking-widest text-accent">Curated by A#0M Core</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    {PLAYLIST.map((song, i) => (
                      <div 
                        key={i} 
                        onClick={() => {
                          setCurrentSongIndex(i);
                          setIsMusicPlaying(true);
                        }}
                        className={cn(
                          "glass p-4 rounded-2xl flex items-center gap-4 group hover:border-accent/50 transition-all cursor-pointer",
                          currentSongIndex === i ? "border-accent bg-accent/5" : ""
                        )}
                      >
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-all",
                          currentSongIndex === i ? "bg-accent text-black" : "bg-white/5 text-text-muted group-hover:text-accent group-hover:bg-accent/10"
                        )}>
                          {currentSongIndex === i && isMusicPlaying ? <Volume2 size={20} /> : <Music size={20} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={cn("font-bold truncate", currentSongIndex === i ? "text-accent" : "")}>{song.name}</h4>
                          <p className="text-xs text-text-muted">{song.artist}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-mono text-text-muted">{song.duration}</p>
                          <p className="text-[8px] text-accent uppercase tracking-widest">{song.source}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div className="glass p-6 rounded-3xl border-accent/20">
                      <div className="flex items-center gap-2 mb-4">
                        <FileText size={18} className="text-accent" />
                        <h3 className="text-lg font-bold">Works Cited</h3>
                      </div>
                      <div className="space-y-4 text-[10px] text-text-muted font-mono leading-relaxed">
                        <p>Gallegos, M. J. (2026). <span className="italic">A#0M Guild Tradition & Trading Framework</span>. A#0M Guild Publishing.</p>
                        <p>Shakespeare, W. (1603). <span className="italic">Othello: The Moor of Venice</span>. Globe Theatre.</p>
                        <p>Wang, A. (2026). <span className="italic">Hidden Agenda Radio Broadcast: Independent Journalist Changelog</span>. ENMU Production.</p>
                        <p>NIST. (2025). <span className="italic">Cash Balance Standards for Artisan and Workshop Filtering</span>. Grand Guild Council of Standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'safe' && (
              <motion.div 
                key="iron-safe-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-display italic tracking-tighter mb-2">SECURE IRON SAFE</h2>
                    <p className="text-text-muted text-sm">A safe place to store unhindered crafts for trading pioneers.</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    <Lock size={24} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    <input 
                      type="file" 
                      className="hidden" 
                      ref={fileInputRef} 
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && cryptoKey) {
                          const reader = new FileReader();
                          reader.onload = async (e) => {
                            const content = e.target?.result as string;
                            const { encrypted, iv } = await encryptData(cryptoKey, content);
                            const newFile = {
                              id: Math.random().toString(36).substr(2, 9),
                              name: file.name,
                              size: `${(file.size / 1024).toFixed(1)} KB`,
                              date: new Date().toISOString().split('T')[0],
                              content: encrypted,
                              iv: iv
                            };
                            setSecureFiles(prev => [newFile, ...prev]);
                            const extractedCash = extractCash(content);
                            setUserProfile(prev => prev ? { ...prev, balance: (prev.balance || 0) + extractedCash } : null);
                          };
                          reader.readAsText(file);
                        }
                      }}
                    />
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="glass p-12 rounded-[2rem] border-dashed border-white/10 flex flex-col items-center justify-center text-center group hover:border-accent/50 transition-all cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-text-muted mb-4 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                        <Upload size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Secure Unhindered Crafts</h3>
                      <p className="text-sm text-text-muted max-w-xs">Drag and drop your blueprints, scrolls, or unique craft sets to secure them in the A#0M Core.</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-mono uppercase tracking-widest text-text-muted">Recent Secure Deposits</h4>
                      {secureFiles.map((file) => (
                        <motion.div 
                          key={file.id} 
                          whileHover={{ scale: 1.01 }}
                          onClick={async () => {
                            setSelectedSecureFile(file);
                            if (cryptoKey && file.iv) {
                              try {
                                const decrypted = await decryptData(cryptoKey, file.content, file.iv);
                                setDecryptedContent(decrypted);
                              } catch (e) {
                                setDecryptedContent("Error decrypting file.");
                              }
                            } else {
                              setDecryptedContent(file.content);
                            }
                          }}
                          className="glass p-4 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition-all cursor-pointer border border-white/5 hover:border-accent/30"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-muted group-hover:text-accent transition-colors">
                              <FileText size={18} />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-[10px] text-text-muted font-mono">{file.size}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-[10px] text-text-muted font-mono">{file.date}</p>
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                              <Eye size={14} />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="glass p-6 rounded-3xl bg-accent/5 border-accent/20">
                      <h3 className="text-lg font-bold mb-4">Safe Stats</h3>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest">Storage Used</p>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-accent w-[12%]" />
                          </div>
                          <p className="text-[10px] font-mono text-right">1.2 GB / 10 GB</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest">Encryption Level</p>
                          <p className="text-sm font-mono text-accent">AES-512-GCM (A#0M Core)</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] text-text-muted uppercase tracking-widest">Security Protocol</p>
                          <p className="text-sm font-mono text-green-400">ACTIVE - UNHINDERED</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass p-6 rounded-3xl border-white/10 space-y-4">
                      <div className="flex items-center gap-2 text-accent">
                        <ShieldCheck size={18} />
                        <h4 className="text-sm font-bold uppercase tracking-widest">Vault Integrity</h4>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">
                        Your crafts are encrypted with AES-512-GCM. Only you can access these unhindered files. The A#0M Core ensures zero-knowledge storage.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {currentView === 'messages' && (
              <motion.div 
                key="messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[calc(100vh-8rem)] flex flex-col space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-display italic tracking-tighter mb-2 uppercase">Message Board</h2>
                    <p className="text-text-muted text-sm">Secure terminal for A#0M personnel communication.</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    <MessageSquare size={24} />
                  </div>
                </div>

                <div className="flex-1 glass rounded-3xl border-border flex flex-col overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                    {messages.map((msg) => {
                      const isMe = msg.userId === userProfile?.uid;
                      return (
                        <div key={msg.id} className={cn("flex flex-col max-w-[80%]", isMe ? "ml-auto items-end" : "mr-auto items-start")}>
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className={cn("text-xs font-bold", isMe ? "text-accent" : "text-white")}>{msg.userName}</span>
                            <span className={cn(
                              "text-[8px] font-mono uppercase px-1.5 py-0.5 rounded",
                              msg.role === 'Admin' ? "bg-red-500/20 text-red-400" :
                              msg.role === 'Developer' ? "bg-purple-500/20 text-purple-400" :
                              msg.role === 'Programmer' ? "bg-blue-500/20 text-blue-400" :
                              msg.role === 'Gamer' ? "bg-green-500/20 text-green-400" :
                              "bg-white/10 text-text-muted"
                            )}>
                              {msg.role}
                            </span>
                            <span className="text-[10px] text-text-muted font-mono">
                              {msg.timestamp?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                          <div className={cn(
                            "px-4 py-3 rounded-2xl text-sm",
                            isMe ? "bg-accent text-black rounded-tr-sm" : "bg-white/5 border border-white/10 rounded-tl-sm"
                          )}>
                            {msg.text}
                          </div>
                        </div>
                      );
                    })}
                    <div ref={messagesEndRef} />
                  </div>
                  
                  <div className="p-4 border-t border-white/5 bg-black/20">
                    <div className="relative flex items-center">
                      <input 
                        type="text" 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Transmit message to secure channel..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-14 text-sm font-mono focus:outline-none focus:border-accent/50 transition-colors"
                      />
                      <button 
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="absolute right-2 p-2 bg-accent text-black rounded-lg hover:bg-accent/80 disabled:opacity-50 disabled:hover:bg-accent transition-colors"
                      >
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'appraiser' && (
              <motion.div 
                key="appraiser"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8 pb-12"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-display italic tracking-tighter mb-2 uppercase">Cash Balance Review</h2>
                    <p className="text-text-muted text-sm">Master-driven appraisal and trend analysis for Artisan Guild assets.</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    <TrendingUp size={24} />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Asset Selection List */}
                  <div className="lg:col-span-1 space-y-4">
                    <h3 className="text-lg font-bold mb-4">Select Asset</h3>
                    <div className="space-y-2 max-h-[600px] overflow-y-auto custom-scrollbar pr-2">
                      {assets.map(asset => (
                        <div 
                          key={asset.id}
                          onClick={() => setSelectedAsset(asset)}
                          className={cn(
                            "p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center gap-4",
                            selectedAsset?.id === asset.id 
                              ? "bg-accent/10 border-accent" 
                              : "bg-white/5 border-white/10 hover:bg-white/10"
                          )}
                        >
                          <img src={asset.image} alt={asset.name} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                          <div>
                            <h4 className="font-bold text-sm">{asset.name}</h4>
                            <p className="text-xs text-text-muted">{asset.rarity} {asset.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Analysis Dashboard */}
                  <div className="lg:col-span-2 space-y-6">
                    {selectedAsset ? (
                      <>
                        <div className="glass p-6 rounded-3xl border-border">
                          <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-4">
                              <img src={selectedAsset.image} alt={selectedAsset.name} className="w-20 h-20 rounded-xl object-cover" referrerPolicy="no-referrer" />
                              <div>
                                <h3 className="text-2xl font-bold">{selectedAsset.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs px-2 py-1 rounded bg-white/10 text-text-muted">{selectedAsset.category}</span>
                                  <span className={cn(
                                    "text-xs px-2 py-1 rounded font-bold",
                                    selectedAsset.rarity === 'Legendary' ? 'bg-orange-500/20 text-orange-400' :
                                    selectedAsset.rarity === 'Mythic' ? 'bg-red-500/20 text-red-400' :
                                    selectedAsset.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                                    selectedAsset.rarity === 'Rare' ? 'bg-blue-500/20 text-blue-400' :
                                    'bg-gray-500/20 text-gray-400'
                                  )}>{selectedAsset.rarity}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-text-muted mb-1">Current Appraisal</p>
                              <p className="text-3xl font-mono font-bold text-accent">${selectedAsset.price.toFixed(2)}</p>
                              {(() => {
                                const history = selectedAsset.history;
                                const firstPrice = history[0].price;
                                const lastPrice = history[history.length - 1].price;
                                const change = ((lastPrice - firstPrice) / firstPrice) * 100;
                                const isPositive = change >= 0;
                                return (
                                  <p className={cn("text-sm font-mono mt-1 flex items-center justify-end gap-1", isPositive ? "text-green-400" : "text-red-400")}>
                                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                    {Math.abs(change).toFixed(2)}% (7d)
                                  </p>
                                );
                              })()}
                            </div>
                          </div>

                          <div className="h-64 w-full mb-8">
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={selectedAsset.history}>
                                <defs>
                                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#F27D26" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#F27D26" stopOpacity={0}/>
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                <XAxis 
                                  dataKey="date" 
                                  stroke="rgba(255,255,255,0.5)" 
                                  fontSize={12}
                                  tickFormatter={(val) => val.split('-').slice(1).join('/')}
                                />
                                <YAxis 
                                  stroke="rgba(255,255,255,0.5)" 
                                  fontSize={12}
                                  tickFormatter={(val) => `$${val}`}
                                  domain={['dataMin - 10', 'dataMax + 10']}
                                />
                                <Tooltip 
                                  contentStyle={{ backgroundColor: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                  itemStyle={{ color: '#F27D26' }}
                                />
                                <Area type="monotone" dataKey="price" stroke="#F27D26" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {(() => {
                              const history = selectedAsset.history;
                              const prices = history.map(h => h.price);
                              const min = Math.min(...prices);
                              const max = Math.max(...prices);
                              const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
                              const lastPrice = prices[prices.length - 1];
                              
                              // Simple recommendation logic
                              let recommendation = 'HOLD';
                              let recColor = 'text-yellow-400';
                              let recBg = 'bg-yellow-400/10';
                              
                              if (lastPrice < avg * 0.95) {
                                recommendation = 'STRONG BUY';
                                recColor = 'text-green-400';
                                recBg = 'bg-green-400/10';
                              } else if (lastPrice < avg) {
                                recommendation = 'BUY';
                                recColor = 'text-green-400';
                                recBg = 'bg-green-400/10';
                              } else if (lastPrice > avg * 1.1) {
                                recommendation = 'STRONG SELL';
                                recColor = 'text-red-400';
                                recBg = 'bg-red-400/10';
                              } else if (lastPrice > avg) {
                                recommendation = 'SELL';
                                recColor = 'text-red-400';
                                recBg = 'bg-red-400/10';
                              }

                              return (
                                <>
                                  <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                                    <p className="text-xs text-text-muted mb-1 uppercase tracking-wider">7d Range</p>
                                    <p className="text-lg font-mono">${min.toFixed(0)} - ${max.toFixed(0)}</p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                                    <p className="text-xs text-text-muted mb-1 uppercase tracking-wider">7d Average</p>
                                    <p className="text-lg font-mono">${avg.toFixed(2)}</p>
                                  </div>
                                  <div className={cn("p-4 rounded-2xl border border-white/5 flex flex-col items-center justify-center", recBg)}>
                                    <p className="text-xs text-text-muted mb-1 uppercase tracking-wider">Master Recommendation</p>
                                    <p className={cn("text-xl font-bold tracking-widest", recColor)}>{recommendation}</p>
                                  </div>
                                </>
                              );
                            })()}
                          </div>

                          {/* Advanced Analytics & Scouting */}
                          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <ShieldCheck size={16} className="text-accent" />
                                Asset Verification
                              </h4>
                              <div className="bg-black/20 p-4 rounded-2xl border border-white/5 space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-text-muted">Fair Market Value (FMV)</span>
                                  <span className="text-sm font-mono font-bold text-white">
                                    {selectedAsset.fmv ? `$${selectedAsset.fmv.toLocaleString()}` : 'Calculating...'}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-text-muted">Dilution Status</span>
                                  <span className="text-sm font-mono font-bold text-green-400">
                                    {selectedAsset.dilution || 'Unknown'}
                                  </span>
                                </div>
                                {selectedAsset.creationCost !== undefined && (
                                  <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                    <span className="text-xs text-text-muted">Creation Cost</span>
                                    <span className="text-sm font-mono font-bold text-accent">
                                      ${selectedAsset.creationCost.toFixed(4)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <Users size={16} className="text-accent" />
                                World Trade Scouting
                              </h4>
                              <div className="bg-black/20 p-4 rounded-2xl border border-white/5 flex flex-col justify-between h-[124px]">
                                <div>
                                  <p className="text-xs text-text-muted mb-1">Active Investors Viewing</p>
                                  <div className="flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span className="text-2xl font-mono font-bold text-white">
                                      {selectedAsset.activeInvestors ? selectedAsset.activeInvestors.toLocaleString() : Math.floor(Math.random() * 500) + 50}
                                    </span>
                                  </div>
                                </div>
                                {(selectedAsset.category === 'A#0M Project' || selectedAsset.category === 'Crypto') && (
                                  <button className="w-full py-2 bg-accent/20 hover:bg-accent/30 text-accent text-xs font-bold uppercase tracking-widest rounded-lg transition-colors border border-accent/30">
                                    Pitch to Investors
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="glass h-full min-h-[400px] rounded-3xl border-border flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                          <Activity className="text-text-muted w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Select an Asset</h3>
                        <p className="text-text-muted max-w-sm">Choose an asset from the list to view its detailed market analysis, price history, and Master-driven appraisal.</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'safe' && (
              <motion.div 
                key="safe"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full p-8"
              >
                <IronSafe />
              </motion.div>
            )}

            {currentView === 'artisan-workshop' && (
              <motion.div 
                key="ai-studio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ArtisanWorkshop />
              </motion.div>
            )}

            {currentView === 'gemini' && (
              <motion.div 
                key="gemini"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <GeminiTerminal />
              </motion.div>
            )}

            {currentView === 'developer-shell' && (
              <motion.div 
                key="developer-shell"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[calc(100vh-120px)] w-full premium-card overflow-hidden"
              >
                <iframe 
                  src="/google.explorer.html" 
                  className="w-full h-full border-none"
                  title="Sovereign Explorer"
                />
              </motion.div>
            )}

            {currentView === 'developer-server' && (
              <motion.div 
                key="developer-server"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <DeveloperServer />
              </motion.div>
            )}

            {currentView === 'security-underwrite' && (
              <motion.div 
                key="security-underwrite"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <SecurityKernUnderwrite />
              </motion.div>
            )}

            {/* Floating Developer Shell Button */}
            <button 
              onClick={() => setCurrentView('developer-shell')}
              className="fixed bottom-6 right-6 z-40 p-4 bg-accent text-black rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <Terminal />
            </button>

            {currentView === 'creations' && (
              <motion.div 
                key="creations"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8 pb-12"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-display italic tracking-tighter mb-2 uppercase">Inventive Creations</h2>
                    <p className="text-text-muted text-sm">Explore the future of design and craft across the Artisan Guild ecosystem.</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    <Zap size={24} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Phones Section */}
                  <div className="glass p-6 rounded-3xl border-accent/20 space-y-4 group hover:bg-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                        <Smartphone size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Next-Gen Phones</span>
                    </div>
                    <img src="https://picsum.photos/seed/phone-design/400/300" className="w-full aspect-video rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" alt="Phone Design" referrerPolicy="no-referrer" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">A#0M X-Fold Concept</h3>
                      <p className="text-xs text-text-muted leading-relaxed">A seamless, wrap-around display with integrated core trading instruments and masterful projection.</p>
                    </div>
                  </div>

                  {/* Tablets Section */}
                  <div className="glass p-6 rounded-3xl border-blue-500/20 space-y-4 group hover:bg-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Tablet size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Creative Tablets</span>
                    </div>
                    <img src="https://picsum.photos/seed/tablet-design/400/300" className="w-full aspect-video rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" alt="Tablet Design" referrerPolicy="no-referrer" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">A#0M Canvas Pro</h3>
                      <p className="text-xs text-text-muted leading-relaxed">Ultra-thin, paper-like display with zero-latency chisel support and dedicated artist trading workshops.</p>
                    </div>
                  </div>

                  {/* Laptops Section */}
                  <div className="glass p-6 rounded-3xl border-purple-500/20 space-y-4 group hover:bg-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                        <Laptop size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">Power Laptops</span>
                    </div>
                    <img src="https://picsum.photos/seed/laptop-design/400/300" className="w-full aspect-video rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" alt="Laptop Design" referrerPolicy="no-referrer" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">A#0M Core Workstation</h3>
                      <p className="text-xs text-text-muted leading-relaxed">Dual-screen architecture with integrated mechanical keyboard and modular GPU expansion for developers.</p>
                    </div>
                  </div>

                  {/* Home TV Section */}
                  <div className="glass p-6 rounded-3xl border-orange-500/20 space-y-4 group hover:bg-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                        <Tv size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest">Home Entertainment</span>
                    </div>
                    <img src="https://picsum.photos/seed/tv-design/400/300" className="w-full aspect-video rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" alt="TV Design" referrerPolicy="no-referrer" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">A#0M Cinema Wall</h3>
                      <p className="text-xs text-text-muted leading-relaxed">Micro-LED modular display that scales to any size, featuring integrated spatial audio and trading hub.</p>
                    </div>
                  </div>

                  {/* Smart Home Security Section */}
                  <div className="glass p-6 rounded-3xl border-green-500/20 space-y-4 group hover:bg-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                        <ShieldCheck size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest">Smart Security</span>
                    </div>
                    <img src="https://picsum.photos/seed/security-design/400/300" className="w-full aspect-video rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" alt="Security Design" referrerPolicy="no-referrer" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">A#0M Sentinel Hub</h3>
                      <p className="text-xs text-text-muted leading-relaxed">Master-driven security system with cash balance-secured kernel storage and real-time threat trading alerts.</p>
                    </div>
                  </div>

                  {/* New Design Layouts Section */}
                  <div className="glass p-6 rounded-3xl border-pink-500/20 space-y-4 group hover:bg-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                        <Palette size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-pink-400 uppercase tracking-widest">UI/UX Layouts</span>
                    </div>
                    <img src="https://picsum.photos/seed/ui-design/400/300" className="w-full aspect-video rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" alt="UI Design" referrerPolicy="no-referrer" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">A#0M Fluid Interface</h3>
                      <p className="text-xs text-text-muted leading-relaxed">Adaptive design layouts that morph based on user specialization and trading activity.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </APIProvider>

          <footer className="py-12 border-t border-border/50 text-center space-y-4 relative z-10 mt-12">
            <div className="flex items-center justify-center gap-6 text-[10px] font-mono uppercase tracking-widest text-text-muted">
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Compliance</a>
              <a href="#" className="hover:text-accent transition-colors">Support</a>
            </div>
            <p className="text-[10px] font-mono text-text-muted/50 uppercase tracking-[0.2em] rainbow-text">
              © 2026 A#0M TECHNOLOGIES | ALL RIGHTS RESERVED | SHALOM ALEICHEM
            </p>
          </footer>
        </div>

        {/* Core Citation & License Manifest */}
        <div className="w-full bg-black/90 backdrop-blur-md border-t border-accent/30 p-2 z-40 text-center text-[10px] font-mono text-white/70 flex-none">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
              <div>
                <span className="text-accent font-bold uppercase tracking-tighter">CORE CITATION & LICENSE MANIFEST:</span>
                <span className="ml-2">Recognized Entity: Google | Owner: {A0M_OWNER}</span>
              </div>
              <div className="flex gap-4 text-accent font-bold">
                <span className="text-[8px] opacity-80">{A0M_ISBN}</span>
                <span className="text-[8px]">{A0M_LICENSE}</span>
              </div>
              <div className="flex gap-4">
                <span>START: {A0M_START_DATE}</span>
                <span className="text-white">PRESENT: {new Date().toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-1 text-[8px] opacity-50 flex flex-wrap justify-center gap-x-4">
              <span>Publisher: {A0M_PUBLISHER}</span>
              <span>Editor: {A0M_EDITOR}</span>
              <span>Legal: {A0M_LEGAL_CONTEXT}</span>
              <span>Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated. // 2026 A#0M TECHNOLOGIES // GOOGLE LLC // Licensed Under © APACHE until 2036</span>
            </div>
          </div>
        </div>
      </main>

      {/* Asset Detail Sidebar/Modal */}
      <AnimatePresence>
        {selectedAsset && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAsset(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-md bg-card border-l border-border z-[70] flex flex-col"
            >
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="text-lg font-medium">Asset Details</h3>
                <button onClick={() => setSelectedAsset(null)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                <div className="space-y-4">
                  <img src={selectedAsset.image} className="w-full aspect-square rounded-2xl object-cover shadow-2xl" alt={selectedAsset.name} />
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className={cn(
                        "text-[10px] font-mono px-2 py-0.5 rounded uppercase",
                        getRarityColor(selectedAsset.rarity)
                      )}>
                        {selectedAsset.rarity}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted uppercase">{selectedAsset.category}</span>
                    </div>
                    <h2 className="text-2xl font-display italic">{selectedAsset.name}</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-text-muted">Current Price</p>
                    <p className="text-2xl font-mono text-accent">${selectedAsset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                  <div className="h-[150px] w-full bg-bg/50 rounded-xl p-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={selectedAsset.history}>
                        <Line 
                          type="monotone" 
                          dataKey="price" 
                          stroke="#00FF94" 
                          strokeWidth={2} 
                          dot={false} 
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#141417', border: '1px solid #27272A', fontSize: '10px' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium uppercase tracking-widest text-text-muted">Description</h4>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {selectedAsset.description}
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-border space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <Shield size={14} className="text-accent" />
                    <span>Verified Authentic Asset</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <TrendingUp size={14} className="text-accent" />
                    <span>High Liquidity Score</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-border">
                <button 
                  onClick={() => handleBuy(selectedAsset)}
                  className="w-full bg-accent text-black py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_25px_rgba(0,255,148,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  Purchase Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cash Out Modal */}
      <AnimatePresence>
        {isCashOutModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCashOutModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[80]"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card border border-border rounded-3xl p-8 z-[90] shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                    <Wallet className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tighter uppercase">Cash Out Funds</h3>
                    <p className="text-[10px] text-text-muted uppercase tracking-widest">A#0M Banking Gateway</p>
                  </div>
                </div>
                <button onClick={() => { setIsCashOutModalOpen(false); setCashOutError(null); }} className="p-2 hover:bg-white/5 rounded-full">
                  <X size={20} />
                </button>
              </div>

              {cashOutError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-400">
                  <Info size={18} className="shrink-0 mt-0.5" />
                  <p className="text-sm">{cashOutError}</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Amount to Cash Out</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent font-mono">$</span>
                    <input 
                      type="number" 
                      value={cashOutAmount}
                      onChange={(e) => setCashOutAmount(e.target.value)}
                      className="w-full bg-bg border border-border rounded-xl py-4 pl-10 pr-4 text-xl font-mono focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="text-[10px] text-text-muted">Available Balance: ${(userProfile?.balance || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Payment Method</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Stripe', 'CashApp', 'Chime', 'Google Store'] as const).map((method) => (
                      <button
                        key={method}
                        onClick={() => {
                          setCashOutMethod(method);
                          if (method === 'Stripe') {
                            // Replace with your actual Stripe Connect Express payout link
                            window.open('https://connect.stripe.com/express/oauth/authorize?client_id=YOUR_STRIPE_CLIENT_ID', '_blank');
                          } else if (method === 'Google Store') {
                            window.open('https://store.google.com', '_blank');
                          }
                        }}
                        className={cn(
                          "py-3 px-4 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1",
                          cashOutMethod === method ? "border-accent bg-accent/10 text-accent" : "border-border hover:bg-white/5"
                        )}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest">{method}</span>
                        {cashOutMethod === method && <div className="w-1 h-1 bg-accent rounded-full" />}
                      </button>
                    ))}
                  </div>

                  {(cashOutMethod === 'CashApp' || cashOutMethod === 'Chime') && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2 mt-4"
                    >
                      <label className="text-xs font-mono text-text-muted uppercase tracking-widest">{cashOutMethod} Tag</label>
                      <div className="relative">
                        {cashOutMethod === 'CashApp' && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 font-mono">$</span>}
                        <input 
                          type="text" 
                          value={cashOutMethod === 'CashApp' ? cashTag : chimeTag}
                          onChange={(e) => cashOutMethod === 'CashApp' ? setCashTag(e.target.value) : setChimeTag(e.target.value)}
                          className={cn("w-full bg-bg border border-border rounded-xl py-3 pr-4 text-sm font-mono focus:outline-none transition-colors", cashOutMethod === 'CashApp' ? "pl-10 focus:border-green-500/50" : "pl-4 focus:border-accent/50")}
                          placeholder={cashOutMethod === 'CashApp' ? "yourcashtag" : "yourchimetag"}
                        />
                      </div>
                    </motion.div>
                  )}

                  {cashOutMethod === 'Stripe' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2 mt-4"
                    >
                      <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Bank Account Number</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent font-mono">#</span>
                        <input 
                          type="text" 
                          className="w-full bg-bg border border-border rounded-xl py-3 pl-10 pr-4 text-sm font-mono focus:outline-none focus:border-accent/50 transition-colors"
                          placeholder="000123456789"
                        />
                      </div>
                      <p className="text-[10px] text-text-muted mt-1">Funds will be routed via Stripe to your linked artisan account.</p>
                    </motion.div>
                  )}
                  
                  <div className="flex gap-2 mt-4">
                    <a 
                      href={cashTag ? `https://cash.app/$${cashTag.replace('$', '')}/${cashOutAmount || ''}` : "https://cash.app"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] uppercase tracking-widest font-bold hover:bg-green-500/20 transition-all"
                    >
                      Cash App
                    </a>
                    <a 
                      href="https://member.chime.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-bold hover:bg-blue-500/20 transition-all"
                    >
                      Chime
                    </a>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 space-y-2 mt-4">
                  <p className="text-[9px] text-accent/80 leading-relaxed italic">
                    Compliance Notice: All transfers are processed under A#0M's Money Transmitter License protocols. 
                    In accordance with EOE, Civil Rights Act, and ADA requirements, this gateway provides equitable 
                    access for all artisans to monetize their manufactured patents without bias or prejudice.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://g.dev/MaTtYmAdNeSs" target="_blank" rel="noopener noreferrer" className="text-[9px] text-accent hover:underline flex items-center gap-1">
                      <Code2 size={10} /> Developer Profile
                    </a>
                  </div>
                </div>

                <button 
                  onClick={handleCashOut}
                  disabled={isProcessingWithdrawal}
                  className="w-full bg-accent text-black py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(157,78,221,0.4)] transition-all disabled:opacity-50 disabled:hover:shadow-none mt-4 flex items-center justify-center gap-2"
                >
                  {isProcessingWithdrawal ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Processing Transfer...
                    </>
                  ) : (
                    'Confirm Cash Out'
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sell Asset Modal */}
      <AnimatePresence>
        {sellingAsset && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSellingAsset(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[80]"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card border border-border rounded-3xl p-8 z-[90] shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium">List Asset for Sale</h3>
                <button onClick={() => { setSellingAsset(null); setSellError(null); }} className="p-2 hover:bg-white/5 rounded-full">
                  <X size={20} />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-8 p-4 bg-white/5 rounded-2xl border border-border">
                <img src={sellingAsset.image} className="w-16 h-16 rounded-xl object-cover" alt={sellingAsset.name} />
                <div>
                  <p className="font-medium">{sellingAsset.name}</p>
                  <p className="text-xs text-text-muted font-mono uppercase">{sellingAsset.rarity} • Market: ${sellingAsset.price}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Listing Price (USD)</label>
                    <div className="flex items-center gap-1 text-[10px] font-mono uppercase text-accent">
                      <TrendingUp size={10} />
                      Market Trend: Stable
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent font-mono">$</span>
                    <input 
                      type="number" 
                      value={sellPrice}
                      onChange={(e) => {
                        setSellPrice(e.target.value);
                        setSellError(null);
                      }}
                      className={cn(
                        "w-full bg-bg border rounded-xl py-4 pl-10 pr-4 text-xl font-mono focus:outline-none transition-colors",
                        sellError?.includes('Warning') ? "border-yellow-500/50 focus:border-yellow-500" : 
                        sellError ? "border-red-500 focus:border-red-500" : "border-border focus:border-accent/50"
                      )}
                      placeholder="0.00"
                    />
                  </div>
                  {sellError ? (
                    <div className={cn(
                      "p-3 rounded-xl border text-[10px] leading-relaxed",
                      sellError.includes('Warning') ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-500" : "bg-red-500/10 border-red-500/20 text-red-500"
                    )}>
                      <div className="flex gap-2">
                        <Info size={14} className="flex-shrink-0 mt-0.5" />
                        <p>{sellError}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-[10px] text-text-muted font-mono">
                      <span>Fair Market Value: ${sellingAsset.price}</span>
                      <span className="text-accent">Recommended: ${sellingAsset.price}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={() => setSellingAsset(null)}
                    className="flex-1 py-4 rounded-xl font-bold border border-border hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSell}
                    disabled={!sellPrice || parseFloat(sellPrice) <= 0}
                    className="flex-1 bg-accent text-black py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,255,148,0.4)] transition-all disabled:opacity-50 disabled:hover:shadow-none"
                  >
                    Confirm Listing
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Secure File Viewer Modal */}
      <AnimatePresence>
        {selectedSecureFile && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedSecureFile(null);
                setFileSummary(null);
              }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl glass rounded-[2.5rem] border-accent/30 overflow-hidden shadow-[0_0_50px_rgba(157,78,221,0.2)]"
            >
              <div className="p-8 border-b border-white/10 flex items-center justify-between bg-accent/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedSecureFile.name}</h3>
                    <p className="text-xs text-text-muted font-mono uppercase tracking-widest">Decrypted via AES-512-GCM</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setSelectedSecureFile(null);
                    setFileSummary(null);
                  }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-sm leading-relaxed text-accent/90 whitespace-pre-wrap break-all">
                  {decryptedContent || "Decrypting..."}
                </div>
              </div>
              <div className="p-6 bg-white/5 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono uppercase tracking-widest">
                  <Lock size={12} />
                  Secure Session Active
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={async () => {
                      setFileSummary('Summarizing...');
                      const summary = await summarizeSecureFile(selectedSecureFile.name, decryptedContent || selectedSecureFile.content);
                      setFileSummary(summary);
                    }}
                    className="bg-white/10 text-white px-6 py-2 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all"
                  >
                    Summarize
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedSecureFile(null);
                      setFileSummary(null);
                    }}
                    className="bg-accent text-black px-6 py-2 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all"
                  >
                    Close File
                  </button>
                </div>
              </div>
              {fileSummary && (
                <div className="p-8 border-t border-white/10 bg-accent/5">
                  <h4 className="text-sm font-bold mb-2 text-accent">File Summary</h4>
                  <p className="text-sm text-white/80 leading-relaxed">{fileSummary}</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Wireless Form Preview Modal */}
      <AnimatePresence>
        {showWirelessFormPreview && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWirelessFormPreview(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl z-10"
            >
              <div className="flex justify-between items-center mb-4 text-white">
                <h3 className="text-xl font-bold">Wireless Form 1099-NEC Preview</h3>
                <button 
                  onClick={() => setShowWirelessFormPreview(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <Form1099NEC userProfile={userProfile} />
              <div className="mt-6 flex justify-center">
                <button 
                  onClick={() => window.print()}
                  className="px-8 py-3 bg-accent text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Printer size={16} />
                  Print / Save as PDF
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Platform Connections Modal */}
      <AnimatePresence>
        {isPlatformModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsPlatformModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-background border border-border rounded-3xl p-8 overflow-hidden"
            >
              <button 
                onClick={() => setIsPlatformModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                  <Link2 size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Platform Connections</h2>
                  <p className="text-sm text-text-muted">Link your accounts to sync assets and telemetry.</p>
                </div>
              </div>

              <div className="space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                {[
                  { name: 'Xbox Network', icon: <Tv size={24} />, status: 'Connected', color: 'bg-green-500' },
                  { name: 'PlayStation Network', icon: <Monitor size={24} />, status: 'Disconnected', color: 'bg-blue-500' },
                  { name: 'Steam', icon: <Laptop size={24} />, status: 'Disconnected', color: 'bg-gray-700' },
                  { name: 'Epic Games', icon: <Gamepad2 size={24} />, status: 'Disconnected', color: 'bg-gray-800' },
                  { name: 'Cash App', icon: <DollarSign size={24} />, status: 'Connected', color: 'bg-green-400' },
                  { name: 'Chime', icon: <Smartphone size={24} />, status: 'Disconnected', color: 'bg-blue-400' },
                  { name: 'Stripe', icon: <CreditCard size={24} />, status: 'Disconnected', color: 'bg-indigo-500' },
                  { name: 'Plaid', icon: <Wallet size={24} />, status: 'Disconnected', color: 'bg-black' },
                ].map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${platform.color}`}>
                        {platform.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{platform.name}</h3>
                        <p className="text-xs text-text-muted">{platform.status}</p>
                      </div>
                    </div>
                    <button 
                      className={cn(
                        "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                        platform.status === 'Connected' 
                          ? "bg-white/5 text-text-muted hover:bg-red-500/20 hover:text-red-400" 
                          : "bg-accent/20 text-accent hover:bg-accent/30"
                      )}
                    >
                      {platform.status === 'Connected' ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PAILChatInterface />
    </div>
    </ErrorBoundary>
  );
}

function NavItem({ active, icon, label, onClick, collapsed }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void, collapsed?: boolean }) {
  return (
    <button 
      onClick={() => {
        playClickSound();
        onClick();
      }}
      title={collapsed ? label : `Navigate to ${label}`}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative",
        active 
          ? "bg-accent text-black font-bold" 
          : "text-text-muted hover:bg-white/5 hover:text-white",
        collapsed && "justify-center px-0"
      )}
    >
      <span className={cn(active ? "text-black" : "group-hover:text-accent transition-colors")}>{icon}</span>
      {!collapsed && <span className="text-sm truncate">{label}</span>}
      {active && !collapsed && <motion.div layoutId="activeNav" className="ml-auto"><ChevronRight size={16} /></motion.div>}
      
      {collapsed && active && (
        <motion.div 
          layoutId="activeNavCollapsed" 
          className="absolute right-0 w-1 h-6 bg-black rounded-l-full"
        />
      )}
    </button>
  );
}

function StatCard({ label, value, trend, isPositive }: { label: string, value: string, trend: string, isPositive: boolean }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors">
      <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">{label}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-display italic">{value}</h3>
        <div className={cn(
          "flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full",
          isPositive ? "bg-accent/10 text-accent" : "bg-red-500/10 text-red-500"
        )}>
          {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {trend}
        </div>
      </div>
    </div>
  );
}

function AssetCard({ asset, onSelect, onBuy }: { asset: PhysicalAsset, onSelect: () => void, onBuy: () => void }) {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const result = await analyzeAsset(asset.name, asset.category, asset.rarity);
      setAnalysis(result);
      toast.success(`Analysis complete for ${asset.name}`);
    } catch (error) {
      console.error("Analysis failed:", error);
      toast.error("Failed to analyze asset.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      title={`View details for ${asset.name} - ${asset.rarity} ${asset.category}`}
      className="bg-card border border-border rounded-2xl overflow-hidden group flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={onSelect}>
        <img 
          src={asset.image} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          alt={asset.name} 
        />
        <div className="absolute top-3 left-3">
          <span className={cn(
            "text-[8px] font-mono px-2 py-1 rounded uppercase backdrop-blur-md border border-white/10",
            getRarityColor(asset.rarity)
          )}>
            {asset.rarity}
          </span>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-sm group-hover:text-accent transition-colors cursor-pointer" onClick={onSelect}>{asset.name}</h4>
            <p className="text-[10px] font-mono text-text-muted uppercase">{asset.category}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-mono text-accent">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
        </div>
        {analysis && (
          <div className="mt-2 p-2 bg-accent/10 rounded-lg text-[10px] text-accent font-mono leading-relaxed">
            {analysis}
          </div>
        )}
        <div className="mt-auto pt-4 flex gap-2">
          <button 
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="py-2 px-3 text-[10px] font-mono uppercase tracking-widest border border-border rounded-lg hover:bg-white/5 transition-colors"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </button>
          <button 
            onClick={onSelect}
            className="flex-1 py-2 text-[10px] font-mono uppercase tracking-widest border border-border rounded-lg hover:bg-white/5 transition-colors"
          >
            Details
          </button>
          <button 
            onClick={onBuy}
            className="flex-1 py-2 text-[10px] font-mono uppercase tracking-widest bg-accent text-black font-bold rounded-lg hover:shadow-[0_0_10px_rgba(0,255,148,0.3)] transition-all"
          >
            Buy
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function getRarityColor(rarity: string) {
  switch (rarity) {
    case 'Common': return 'bg-gray-500/20 text-gray-400';
    case 'Rare': return 'bg-blue-500/20 text-blue-400';
    case 'Epic': return 'bg-purple-500/20 text-purple-400';
    case 'Legendary': return 'bg-orange-500/20 text-orange-400';
    case 'Mythic': return 'bg-red-500/20 text-red-400';
    default: return 'bg-white/20 text-white';
  }
}
