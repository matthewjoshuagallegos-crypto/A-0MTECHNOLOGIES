/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
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

import React from 'react';
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

interface EarningsChartProps {
  data: { time: string; amount: number }[];
}

export const EarningsChart: React.FC<EarningsChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[300px] mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff00ff" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ff00ff" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorNeon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis 
            dataKey="time" 
            stroke="rgba(255,255,255,0.3)" 
            fontSize={10} 
            tickLine={false} 
            axisLine={false}
            tick={{ fill: 'rgba(255,255,255,0.5)' }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.3)" 
            fontSize={10} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
            tick={{ fill: 'rgba(255,255,255,0.5)' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(10, 5, 20, 0.9)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              fontSize: '12px',
              color: '#fff'
            }}
            itemStyle={{ color: '#ff00ff' }}
            cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
          />
          <Area 
            type="monotone" 
            dataKey="amount" 
            stroke="#ff00ff" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorEarnings)" 
            animationDuration={2000}
          />
          <Area 
            type="monotone" 
            dataKey="amount" 
            stroke="#00f2ff" 
            strokeWidth={1}
            fillOpacity={0.1} 
            fill="url(#colorNeon)" 
            animationDuration={3000}
            strokeDasharray="5 5"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
