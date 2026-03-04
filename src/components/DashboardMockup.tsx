import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, BarChart, Bar, Cell
} from 'recharts';
import { motion } from 'motion/react';
import { Calendar, Users, PhoneCall, TrendingUp, CheckCircle2 } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const data = [
  { name: 'Mon', calls: 4, leads: 12 },
  { name: 'Tue', calls: 7, leads: 18 },
  { name: 'Wed', calls: 5, leads: 15 },
  { name: 'Thu', calls: 9, leads: 24 },
  { name: 'Fri', calls: 12, leads: 32 },
  { name: 'Sat', calls: 6, leads: 14 },
  { name: 'Sun', calls: 8, leads: 20 },
];

export default function DashboardMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-5xl mx-auto glass rounded-2xl overflow-hidden shadow-2xl glow-primary"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <span className="ml-4 text-xs font-mono text-white/40 uppercase tracking-widest">Adventure Media Dashboard v2.4</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-tighter">Live Engine Active</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats Column */}
        <div className="space-y-6">
          <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Booked Calls</span>
                <Calendar className="w-4 h-4 text-brand-primary" />
              </div>
              <div className="text-3xl font-display font-bold text-glow">42</div>
              <div className="text-[10px] text-brand-primary mt-1 font-mono text-glow">+12% from last week</div>
            </div>
          </div>

          <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Engaged Leads</span>
                <Users className="w-4 h-4 text-brand-primary" />
              </div>
              <div className="text-3xl font-display font-bold text-glow">1,284</div>
              <div className="text-[10px] text-brand-primary mt-1 font-mono text-glow">+248 this month</div>
            </div>
          </div>

          <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider">AI Qualification Rate</span>
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              </div>
              <div className="text-3xl font-display font-bold text-glow">94.2%</div>
              <div className="text-[10px] text-brand-primary mt-1 font-mono text-glow">Optimized by Engine</div>
            </div>
          </div>
        </div>

        {/* Chart Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4169E1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4169E1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#ffffff40" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#ffffff40" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#4169E1' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="leads" 
                  stroke="#4169E1" 
                  fillOpacity={1} 
                  fill="url(#colorLeads)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <div className="text-[10px] text-white/40 uppercase font-bold">AI Caller Status</div>
                <div className="text-sm font-bold">Active (12 lines)</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <div className="text-[10px] text-white/40 uppercase font-bold">Pipeline Value</div>
                <div className="text-sm font-bold">$1.4M Projected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
