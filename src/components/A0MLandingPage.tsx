/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google LLC
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel, Samsung, Android
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL - Matthew Joshua Gallegos (Sole Proprietor of A#0M Technologies, No Custodian)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * SKU: A21S30i19GP13
 * ==========================================
 */

import React from 'react';
import { 
  Tv, 
  Zap, 
  Gamepad2, 
  Activity, 
  Database, 
  Smartphone, 
  Globe, 
  Users, 
  Mail, 
  MapPin, 
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Cpu,
  Lock
} from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white/[0.03] border border-white/10 p-8 hover:bg-white/[0.05] transition-all group">
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 tracking-tight uppercase italic">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed font-mono">
      {description}
    </p>
  </div>
);

const A0MLandingPage: React.FC<{ onExplore?: () => void }> = ({ onExplore }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-xl italic">A</div>
          <span className="font-black tracking-tighter text-xl italic uppercase">A#0M Technologies</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-widest text-gray-400">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          <button 
            onClick={onExplore}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold transition-all"
          >
            Launch Console
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-8"
          >
            <Lock className="w-3 h-3" />
            Android SKU A21S30i19GP13 Exclusively
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8"
          >
            Your Next-Gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Game Console</span> <br />
            in the Cloud
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Instant access to blockbuster titles on Android TV with console-grade performance. 
            Powered by Android and Gemini through Google Cloud.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={onExplore}
              className="w-full md:w-auto px-12 py-5 bg-white text-black font-black uppercase italic tracking-tighter hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-3"
            >
              Start Streaming Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              <span>512-Bit Encryption</span>
              <div className="w-1 h-1 bg-gray-800 rounded-full" />
              <span>FCC Compliant</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-4">Core Services</h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Optimized for Android TV & Cloud Orchestration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Tv />}
              title="Android TV Setup"
              description="Quick onboarding, device pairing, and TV optimization so you can start streaming games immediately."
            />
            <FeatureCard 
              icon={<Zap />}
              title="Performance Tuning"
              description="Network guidance and settings optimization to reduce lag, improve stability, and boost streaming quality."
            />
            <FeatureCard 
              icon={<Gamepad2 />}
              title="Accessory Support"
              description="Connect and configure popular Bluetooth controllers, headsets, and peripherals for a console-like experience."
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-8">Why A#0M?</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase italic mb-2">Advanced Statistics</h4>
                    <p className="text-gray-400 text-sm font-mono">Based on most statistics, we have something the competitors don't. Real-time telemetry and node monitoring.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase italic mb-2">Expansive Reports</h4>
                    <p className="text-gray-400 text-sm font-mono">Library catalog, developer portal for custom uploads (XBOX, PS, PC), and a production studio for soundtracks and AI features.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase italic mb-2">Mobile Integration</h4>
                    <p className="text-gray-400 text-sm font-mono">Connect to our Network gaming host a0m.lteusa.network directly from your mobile device.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase italic mb-2">Media & AI</h4>
                    <p className="text-gray-400 text-sm font-mono">Powered by Android and Gemini through Google Cloud. Advanced AI features for game enhancement and content creation.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase italic mb-2">Social Integration</h4>
                    <p className="text-gray-400 text-sm font-mono">Seamlessly connect your XBOX, PlayStation, and PC accounts. Share your production studio creations with the A#0M community.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl border border-white/10 p-8 flex flex-col justify-center items-center text-center">
                <Globe className="w-32 h-32 text-blue-500 mb-8 animate-pulse" />
                <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tighter">Global Node Network</h3>
                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em]">LTE-USA-TUNNEL ACTIVE</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/30" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-500/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 border border-white/5 bg-black/40">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <p className="text-sm font-mono uppercase text-gray-400">Clovis, NM, USA</p>
            </div>
            <div className="p-8 border border-white/5 bg-black/40">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <p className="text-sm font-mono lowercase text-gray-400">matthewjoshuagallegos@gmail.com</p>
            </div>
            <div className="p-8 border border-white/5 bg-black/40">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <p className="text-sm font-mono uppercase text-gray-400">Mon-Fri: 08:00-19:00</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto italic mb-12">
            "Feel free to bring your ideas, works, or games for testing to the table and we'll hook you up."
          </p>
          <button 
            onClick={() => {
              import('react-hot-toast').then(t => t.default.success('PROJECT SUBMITTED FOR REVIEW'));
            }}
            className="px-12 py-5 border border-white/20 hover:border-blue-500 hover:bg-blue-500/10 transition-all font-black uppercase italic tracking-tighter"
          >
            Submit Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-black text-sm italic">A</div>
              <span className="font-black tracking-tighter text-lg italic uppercase">A#0M Technologies</span>
            </div>
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              © 2026 Matthew Joshua Gallegos & Google LLC. <br />
              Sponsor: Bebe Rexha | Partner: Microsoft
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
            <span>FCC COMPLIANT</span>
            <span>512-BIT ENCRYPTION</span>
            <span>PROCTOR&GAMBLE ATTORNEYS</span>
            <span>JAVA DESIGN</span>
            <span>BITCOIN SECRET</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default A0MLandingPage;
