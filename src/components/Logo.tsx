import React from 'react';
import { Rocket } from 'lucide-react';

export const Logo = ({ className = "", iconSize = "w-10 h-10", textSize = "text-lg" }: { className?: string, iconSize?: string, textSize?: string }) => (
  <div className={`flex items-center gap-2 group ${className}`}>
    <div className="relative flex items-center justify-center">
      <div className="absolute -inset-2 bg-brand-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className={`${iconSize} relative z-10 flex items-center justify-center bg-gradient-to-br from-brand-primary to-blue-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
        <Rocket className="w-3/5 h-3/5 fill-white/20" />
      </div>
      <div className="absolute -bottom-1 w-full h-1 bg-brand-primary/20 blur-[2px] rounded-full" />
    </div>
    <span className={`${textSize} font-display font-bold tracking-tighter uppercase text-glow`}>Adventure Media</span>
  </div>
);
