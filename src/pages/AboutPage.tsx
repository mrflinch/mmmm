import React from 'react';
import { motion } from 'motion/react';
import { GridBackground } from '@/src/components/ui/grid-background';
import { GlowingEffect } from '@/src/components/ui/glowing-effect';
import { RainbowButton } from '@/src/components/ui/rainbow-button';
import { CheckCircle2, X } from 'lucide-react';

const BOOKING_URL = "https://cal.com/monder/quick-chat";

export const AboutPage = () => (
  <div className="pt-32 pb-32 relative overflow-hidden">
    <GridBackground variant="orb" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-12 leading-[0.9]">
          We Are Not a Lead Generation Agency. <br />
          <span className="text-white/20">We Are Your Revenue Engine.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative p-10 rounded-3xl glass overflow-hidden transition-all"
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
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-brand-primary" /> Who We Are
            </h3>
            <ul className="space-y-6">
              {[
                "Your growth partner, building predictable client acquisition systems",
                "AI-powered infrastructure replacing fragmented lead-gen stacks",
                "Full-service solution: prospect identification → qualification → scheduled sales-ready conversations"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-white/60 leading-relaxed">
                  <span className="text-brand-primary font-mono">0{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative p-10 rounded-3xl glass border-red-500/10 overflow-hidden transition-all"
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
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <X className="text-red-500" /> Who We Are Not
            </h3>
            <ul className="space-y-6">
              {[
                "Not a cold email shop",
                "Not an SDR outsourcing firm",
                "Not a marketing expense"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-white/40 leading-relaxed line-through decoration-red-500/30">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="relative py-24 px-10 rounded-[3rem] overflow-hidden bg-brand-primary/5 border border-brand-primary/10 text-center glow-border transition-all"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-brand-primary mb-8 text-glow">Our Mission</h2>
          <p className="text-3xl md:text-4xl font-display font-medium leading-tight">
            We replace chaotic, inconsistent pipelines with fully automated, predictable revenue engines — so B2B companies focus on closing, not chasing.
          </p>
            <RainbowButton 
              className="mt-12 h-14 px-12 text-lg"
              onClick={() => window.open(BOOKING_URL, '_blank')}
            >
              Discover How We Transform Pipelines
            </RainbowButton>
        </div>
      </motion.div>
    </div>
  </div>
);
