import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GridBackground } from '@/src/components/ui/grid-background';
import { GlowingEffect } from '@/src/components/ui/glowing-effect';
import { RainbowButton } from '@/src/components/ui/rainbow-button';
import { ChevronRight } from 'lucide-react';

const BOOKING_URL = "https://cal.com/monder/quick-chat";

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Results & Expectations",
      questions: [
        { q: "How many calls can I expect?", a: "Minimum 3 qualified booked calls per month, though most clients see significantly higher volume depending on market and ICP." },
        { q: "How fast will I see results?", a: "First results typically appear in 10–14 days, with predictable, scalable delivery established by Month 2–3." },
        { q: "Do you guarantee ROI?", a: "ROI depends on your sales ability — we guarantee qualified, sales-ready conversations with decision-makers." }
      ]
    },
    {
      category: "Targeting & ICP",
      questions: [
        { q: "How precise is the targeting?", a: "We use hyper-precise ICP refinement using AI insights, targeting by industry, job title, geography, and company size." },
        { q: "Does the targeting improve over time?", a: "Yes, we implement dynamic targeting improvements based on campaign performance and AI feedback loops." }
      ]
    },
    {
      category: "Channels & Strategy",
      questions: [
        { q: "Which channels do you use?", a: "Multi-channel campaigns across Email, LinkedIn, Paid Ads, SMS, and YouTube." },
        { q: "How do I track performance?", a: "The AI Dashboard tracks every metric in real-time, providing complete transparency." }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-32 relative overflow-hidden">
      <GridBackground variant="orb" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Everything You Need to Know Before Scaling</h1>
          <p className="text-xl text-white/40">Transparent answers to help you make the right decision for your growth.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-12">
            {faqs.map((cat, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">{cat.category}</h3>
                <div className="space-y-4">
                  {cat.questions.map((item, qIdx) => {
                    const globalIdx = catIdx * 10 + qIdx;
                    const isOpen = openIndex === globalIdx;
                    return (
                      <motion.div 
                        key={qIdx} 
                        whileHover={{ y: -2 }}
                        className="relative glass rounded-2xl overflow-hidden transition-all"
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
                          <button 
                            onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                          >
                            <span className="font-bold">{item.q}</span>
                            <ChevronRight className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                              >
                                <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-3xl glass border-brand-primary/20 overflow-hidden transition-all"
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
                <h4 className="text-xl font-bold mb-6">Process & Workflow</h4>
                <div className="space-y-6">
                  {[
                    { day: "Days 1–5", title: "ICP Refinement", desc: "System setup and target identification." },
                    { day: "Days 7–10", title: "Campaign Launch", desc: "Engines go live across all channels." },
                    { day: "Day 14+", title: "First Booked Calls", desc: "Qualified meetings hit your calendar." },
                    { day: "Month 1–2", title: "Optimization", desc: "A/B testing and performance tuning." },
                    { day: "Month 2–3", title: "Scale", desc: "Predictable, scalable delivery." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 text-[10px] font-bold text-brand-primary uppercase pt-1">{step.day}</div>
                      <div>
                        <div className="font-bold text-sm mb-1">{step.title}</div>
                        <div className="text-xs text-white/40">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-3xl bg-brand-primary/10 border border-brand-primary/20 text-white overflow-hidden transition-all"
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
                <h4 className="text-xl font-bold mb-4">Ready to scale?</h4>
                <p className="text-sm font-medium mb-8 opacity-80">Book your strategy call today and see how our AI engines can transform your pipeline.</p>
                <RainbowButton 
                  className="w-full h-14 text-lg"
                  onClick={() => window.open(BOOKING_URL, '_blank')}
                >
                  Get Started
                </RainbowButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
