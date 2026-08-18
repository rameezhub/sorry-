import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#EFE5DE] bg-[#FAF5F0] text-center text-xs sm:text-sm text-[#7D665E] relative z-10">
      <div className="max-w-4xl mx-auto px-4 space-y-3">
        <div className="flex items-center justify-center gap-1.5 font-medium text-[#4A3731]">
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-[#E11D48] fill-[#E11D48] animate-pulse" />
          <span>and deep sibling repentance for</span>
          <strong className="text-[#9F1239] font-serif-display font-bold">Saloni Didi</strong>
        </div>

        <p className="text-xs text-[#9C8279]">
          Happy Belated Birthday! May this year be as wonderful, vibrant, and special as you are. 🎂✨
        </p>

        <div className="pt-2 text-[11px] text-[#B8A49C] flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>© Forever Your Little Brother • Best Didi in the World</span>
        </div>
      </div>
    </footer>
  );
};
