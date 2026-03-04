import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { RainbowButton } from '@/src/components/ui/rainbow-button';
import { GlowingEffect } from '@/src/components/ui/glowing-effect';
import DashboardMockup from '@/src/components/DashboardMockup';
import { LoadingSpinner } from '@/src/components/ui/loading-spinner';
import { SplineScene } from '@/src/components/ui/splite';
import { ArrowRight, Target, Phone, Database, BarChart3, Globe2 } from 'lucide-react';
import { Page } from '@/src/types';

const BOOKING_URL = "https://cal.com/monder/quick-chat";

export const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="relative">
    {/* Hero Section */}
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <SplineScene 
          scene="https://prod.spline.design/K1sWEgaisjO7t-Ck/scene.splinecode" 
          className="w-full h-full"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            Next-Gen B2B Acquisition
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[0.9]">
            Predictable B2B Client Acquisition. <br />
            <span className="text-white/40 italic text-glow">Engineered with AI.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            We build fully automated outbound and inbound systems that deliver qualified, sales-ready conversations — with full visibility through your AI Dashboard and proprietary AI CRM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <RainbowButton 
              className="w-full sm:w-auto h-14 px-10 text-lg"
              onClick={() => window.open(BOOKING_URL, '_blank')}
            >
              Book Your Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
            </RainbowButton>
            <RainbowButton 
              onClick={() => setPage('services')}
              className="w-full sm:w-auto h-14 px-8 text-lg"
            >
              Explore Systems
            </RainbowButton>
          </div>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>

    {/* Why This Works */}
    <section className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why This Works</h2>
          <p className="text-white/40 max-w-xl mx-auto">Our systems bypass traditional bottlenecks by leveraging autonomous AI agents that work 24/7.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Qualified Decision-Makers", desc: "Pre-nurtured and ready to buy, delivered directly to your calendar.", icon: Target },
            { title: "Real-time Insights", desc: "Complete visibility into campaign performance via your AI Dashboard.", icon: BarChart3 },
            { title: "Proprietary AI CRM", desc: "Centralizes leads, automates follow-ups, and prioritizes hot prospects.", icon: Database },
            { title: "Fully Automated", desc: "Outbound + inbound engines that scale without increasing headcount.", icon: Globe2 },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl glass transition-all"
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
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(65,105,225,0.2)]">
                  <item.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <RainbowButton 
            className="h-14 px-12 text-lg"
            onClick={() => window.open(BOOKING_URL, '_blank')}
          >
            Start Predictable Growth Today
          </RainbowButton>
        </div>
      </div>
    </section>

    {/* How It Works Preview */}
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">The Engine Behind Your Growth.</h2>
            <div className="space-y-8">
              {[
                { title: "Outbound AI Engine", desc: "Target, nurture, qualify, and book meetings automatically across multi-channel campaigns.", icon: Target },
                { title: "AI Caller (Inbound)", desc: "Human-like qualification 24/7, context delivered directly to your calendar.", icon: Phone },
                { title: "AI Proprietary CRM", desc: "Manage, prioritize, and automate your pipeline in one smart system.", icon: Database },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white/40" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl rounded-full opacity-20" />
            <div className="relative glass rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden">
               <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
               <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe2 className="w-10 h-10 text-brand-primary" />
                  </div>
                  <div className="text-4xl font-display font-bold mb-2">98%</div>
                  <div className="text-white/40 uppercase text-xs font-bold tracking-widest">Automation Efficiency</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Industries Served */}
    <section className="py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Expertise Across Sectors</span>
          <h2 className="text-3xl font-display font-bold mt-4">Industries Served</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "IT & Cybersecurity", icon: React.lazy(() => import('lucide-react').then(mod => ({ default: mod.ShieldCheck }))) },
            { name: "Enterprise SaaS", icon: Globe2 },
            { name: "Pharma & Biotech", icon: React.lazy(() => import('lucide-react').then(mod => ({ default: mod.FlaskConical }))) },
            { name: "Clinical Research", icon: BarChart3 },
            { name: "Recruiting & Staffing", icon: React.lazy(() => import('lucide-react').then(mod => ({ default: mod.Users2 }))) },
            { name: "Consulting", icon: React.lazy(() => import('lucide-react').then(mod => ({ default: mod.Briefcase }))) },
          ].map((industry, i) => (
            <div key={i} className="relative px-6 py-4 rounded-xl glass flex items-center gap-3 transition-colors cursor-default overflow-hidden">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative z-10 flex items-center gap-3">
                <Suspense fallback={<LoadingSpinner size="sm" />}>
                  <industry.icon className="w-5 h-5 text-brand-primary" />
                </Suspense>
                <span className="font-medium">{industry.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <RainbowButton 
            onClick={() => setPage('services')}
            className="h-12 px-8"
          >
            See How It Works <ArrowRight className="ml-2 w-4 h-4" />
          </RainbowButton>
        </div>
      </div>
    </section>
  </div>
);
