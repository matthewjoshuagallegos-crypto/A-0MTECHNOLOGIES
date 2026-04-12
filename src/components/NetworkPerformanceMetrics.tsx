/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: BeBe Rexa
 * TM: A#0M Technologies
 * Brands: Macintosh, Apple, Pixel, Microsoft
 * Partner: Microsoft
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL
 * ==========================================
 */

import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { motion } from 'motion/react';
import { Activity, Zap, ShieldCheck, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const NetworkPerformanceMetrics: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState({
    throughput: 0,
    latency: 0,
    stability: 0,
    packetLoss: 0
  });

  // Simulate real-time data
  useEffect(() => {
    const generateData = () => {
      const newData = Array.from({ length: 20 }, (_, i) => ({
        time: i,
        throughput: 800 + Math.random() * 400,
        latency: 15 + Math.random() * 10,
        stability: 98 + Math.random() * 2,
      }));
      setData(newData);
      
      const last = newData[newData.length - 1];
      setCurrentMetrics({
        throughput: Math.round(last.throughput),
        latency: Math.round(last.latency),
        stability: Math.round(last.stability),
        packetLoss: 0.02
      });
    };

    generateData();
    const interval = setInterval(() => {
      setData(prev => {
        const nextTime = prev[prev.length - 1].time + 1;
        const newPoint = {
          time: nextTime,
          throughput: 800 + Math.random() * 400,
          latency: 15 + Math.random() * 10,
          stability: 98 + Math.random() * 2,
        };
        const updated = [...prev.slice(1), newPoint];
        
        setCurrentMetrics({
          throughput: Math.round(newPoint.throughput),
          latency: Math.round(newPoint.latency),
          stability: Math.round(newPoint.stability),
          packetLoss: Math.random() * 0.05
        });
        
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          label="Throughput" 
          value={`${currentMetrics.throughput} Mbps`} 
          icon={<Zap className="text-accent" />} 
          trend="+12%"
          positive={true}
        />
        <MetricCard 
          label="Latency" 
          value={`${currentMetrics.latency} ms`} 
          icon={<Clock className="text-blue-400" />} 
          trend="-2ms"
          positive={true}
        />
        <MetricCard 
          label="Stability" 
          value={`${currentMetrics.stability}%`} 
          icon={<ShieldCheck className="text-emerald-400" />} 
          trend="Stable"
          positive={true}
        />
        <MetricCard 
          label="Packet Loss" 
          value={`${currentMetrics.packetLoss.toFixed(2)}%`} 
          icon={<Activity className="text-red-400" />} 
          trend="Low"
          positive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="premium-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Data Throughput (Mbps)</h3>
            <div className="flex items-center gap-2 px-2 py-1 bg-accent/10 rounded border border-accent/20">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[9px] font-mono text-accent uppercase">Live Stream</span>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorThroughput" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" vertical={false} />
                <XAxis dataKey="time" hide />
                <YAxis stroke="#444" fontSize={10} tickFormatter={(v) => `${v}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A', borderRadius: '8px' }}
                  itemStyle={{ color: '#D4AF37', fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="throughput" 
                  stroke="#D4AF37" 
                  fillOpacity={1} 
                  fill="url(#colorThroughput)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="premium-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Network Latency (ms)</h3>
            <div className="flex items-center gap-2 px-2 py-1 bg-blue-500/10 rounded border border-blue-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[9px] font-mono text-blue-500 uppercase">Real-time</span>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" vertical={false} />
                <XAxis dataKey="time" hide />
                <YAxis stroke="#444" fontSize={10} domain={['dataMin - 5', 'dataMax + 5']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A', borderRadius: '8px' }}
                  itemStyle={{ color: '#38BDF8', fontSize: '12px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="latency" 
                  stroke="#38BDF8" 
                  strokeWidth={2} 
                  dot={false}
                  animationDuration={300}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{ label: string; value: string; icon: React.ReactNode; trend: string; positive: boolean }> = ({ label, value, icon, trend, positive }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="premium-card p-5 flex items-center justify-between"
  >
    <div className="space-y-1">
      <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{label}</p>
      <h4 className="text-xl font-bold text-white tracking-tight">{value}</h4>
      <div className="flex items-center gap-1">
        {positive ? <ArrowUpRight className="w-3 h-3 text-emerald-400" /> : <ArrowDownRight className="w-3 h-3 text-red-400" />}
        <span className={`text-[10px] font-bold ${positive ? 'text-emerald-400' : 'text-red-400'}`}>{trend}</span>
      </div>
    </div>
    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
      {icon}
    </div>
  </motion.div>
);

export default NetworkPerformanceMetrics;
