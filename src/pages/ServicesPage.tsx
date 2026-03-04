import React from 'react';
import { motion } from 'motion/react';
import { SplineScene } from '@/src/components/ui/splite';
import { Spotlight } from '@/src/components/ui/spotlight';
import { RainbowButton } from '@/src/components/ui/rainbow-button';
import { GlowingEffect } from '@/src/components/ui/glowing-effect';
import { ArrowRight, Target, Phone, Database } from 'lucide-react';

const BOOKING_URL = "https://cal.com/monder/quick-chat";

export const ServicesPage = () => (
  <div className="pt-32 pb-32 relative overflow-hidden">
    {/* Background Spline Scene */}
    <div className="absolute top-0 left-0 w-full h-screen z-0 opacity-30 pointer-events-none">
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-20 relative">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Our Systems.</h1>
        <p className="text-xl text-white/40 max-w-2xl">Modular AI infrastructure designed to scale your revenue without scaling your overhead.</p>
      </div>

      <div className="space-y-32">
        {[
          {
            title: "Outbound AI Engine",
            problem: "Manual prospecting is slow, inconsistent, and error-prone.",
            solution: "AI-driven multi-channel campaigns across Email, LinkedIn, Paid Ads, YouTube, and custom channels. Hyper-targeted to your ICP.",
            outcome: "Qualified, sales-ready conversations scheduled directly on your calendar, with real-time metrics visible in your AI Dashboard.",
            icon: Target,
            tags: ["Multi-channel", "Hyper-targeted", "Autonomous"]
          },
          {
            title: "AI Caller (Inbound Engine)",
            problem: "Leads slip through the cracks. Missed calls and unqualified meetings waste time and revenue.",
            solution: "Human-like AI answers calls, responds to forms, qualifies prospects, and books meetings 24/7.",
            outcome: "No unqualified bookings. Every conversation comes with full context and buying intent in your dashboard.",
            icon: Phone,
            tags: ["24/7 Availability", "Human-like Voice", "BANT Qualified"]
          },
          {
            title: "AI Proprietary CRM",
            problem: "Sales data scattered, manual follow-ups slow, pipeline prioritization unclear.",
            solution: "Centralized, AI-powered CRM with automated qualification, pipeline insights, and lead prioritization. Fully integrated with your AI Dashboard and AI engines.",
            outcome: "Less manual work, more closed deals, and complete visibility into your sales pipeline.",
            icon: Database,
            tags: ["Centralized Data", "Auto-Followup", "Smart Prioritization"]
          }
        ].map((service, i) => (
          <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-40">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8">
                <service.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">{service.title}</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
              <RainbowButton 
                className="h-14 px-10 text-lg"
                onClick={() => window.open(BOOKING_URL, '_blank')}
              >
                Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </RainbowButton>
            </div>
            <div className="space-y-12">
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-2xl glass overflow-hidden transition-all"
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
                  <h4 className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">The Problem</h4>
                  <p className="text-lg text-white/80 leading-relaxed">{service.problem}</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-2xl glass border-brand-primary/20 overflow-hidden transition-all"
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
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">The Solution</h4>
                  <p className="text-lg text-white/80 leading-relaxed">{service.solution}</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 overflow-hidden transition-all"
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
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">The Outcome</h4>
                  <p className="text-lg text-white/80 leading-relaxed font-medium italic">"{service.outcome}"</p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
