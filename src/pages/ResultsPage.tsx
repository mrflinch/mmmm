import React from 'react';
import { motion } from 'motion/react';
import { GridBackground } from '@/src/components/ui/grid-background';
import { GlowingEffect } from '@/src/components/ui/glowing-effect';
import { RainbowButton } from '@/src/components/ui/rainbow-button';
import { TrendingUp, Globe2, CheckCircle2 } from 'lucide-react';

const BOOKING_URL = "https://cal.com/monder/quick-chat";

export const ResultsPage = () => (
  <div className="pt-32 pb-32 relative overflow-hidden">
    <GridBackground variant="orb" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">From Chaos to Predictable Growth</h1>
        <p className="text-xl text-white/40">Real transformations for high-growth B2B companies.</p>
      </div>

      {/* Before vs After */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative p-12 rounded-3xl glass overflow-hidden transition-all"
        >
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative z-10">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <TrendingUp className="w-32 h-32" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/20 mb-10">The Old Way (Before)</h3>
            <ul className="space-y-8">
              {[
                "Inconsistent pipeline & dry spells",
                "Referral-dependent growth",
                "SDR headaches & wasted ad spend",
                "Missed inbound leads"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative p-12 rounded-3xl glass border-brand-primary/20 overflow-hidden transition-all"
        >
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative z-10">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Globe2 className="w-32 h-32 text-brand-primary" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-10">The Adventure Way (After)</h3>
            <ul className="space-y-8">
              {[
                "Predictable calendar full of qualified calls",
                "Fully automated outbound + inbound system",
                "AI Dashboard + Proprietary CRM visibility",
                "Closing-focused sales team"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ROI Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
          { label: "Service Coverage", value: "1 Deal", sub: "One $20K deal can cover months of service" },
          { label: "Average ROI", value: "3x+", sub: "Clients routinely see 3x+ ROI within first months" },
          { label: "Tracking", value: "100%", sub: "Real metrics tracked in your AI Dashboard" }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }}
            className="relative p-10 rounded-3xl glass text-center overflow-hidden transition-all"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="text-sm font-bold uppercase tracking-widest text-white/20 mb-4">{stat.label}</div>
              <div className="text-5xl font-display font-bold text-brand-primary mb-4">{stat.value}</div>
              <p className="text-sm text-white/40 leading-relaxed">{stat.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <RainbowButton 
            className="h-14 px-12 text-lg"
            onClick={() => window.open("https://casestudies.advmedia.online/", '_blank')}
          >
            See Full Case Studies
          </RainbowButton>
          <RainbowButton 
            className="h-14 px-12 text-lg"
            onClick={() => window.open(BOOKING_URL, '_blank')}
          >
            Book a Demo
          </RainbowButton>
        </div>
      </div>
    </div>
  </div>
);
