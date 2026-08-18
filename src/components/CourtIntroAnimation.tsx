import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Scale, Sparkles, Gavel, ScrollText, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface CourtIntroAnimationProps {
  onComplete: () => void;
}

export const CourtIntroAnimation: React.FC<CourtIntroAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    // Stage 0: Initial docket presentation
    const timer1 = setTimeout(() => {
      soundFx.playGavelStrike();
      setStage(1);
    }, 900);

    // Stage 2: Final completion transition
    const timer2 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const handleSkip = () => {
    soundFx.playGentleChime(659.25);
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1E192B] text-[#FAF7F2] p-6 text-center overflow-hidden selection:bg-[#FCE7F3] selection:text-[#9D174D]"
    >
      {/* Background warm glowing aura */}
      <div className="absolute w-96 h-96 bg-[#BE123C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative max-w-md w-full flex flex-col items-center">
        {/* Animated Scales / Gavel Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mb-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#2D243F] to-[#171221] border border-[#FDE68A]/30 flex items-center justify-center shadow-2xl relative">
            <Scale className="w-10 h-10 text-[#FDE68A]" />
            
            {/* Gavel striking animation */}
            <motion.div
              animate={stage >= 1 ? { rotate: [0, -35, 12, 0], scale: [1, 1.25, 0.95, 1] } : {}}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#BE123C] border-2 border-[#1E192B] flex items-center justify-center text-white shadow-lg"
            >
              <Gavel className="w-5 h-5 text-amber-200" />
            </motion.div>
          </div>
        </motion.div>

        {/* Case Docket Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#FDE68A] text-xs font-semibold uppercase tracking-widest mb-4"
        >
          <ScrollText className="w-3.5 h-3.5" />
          <span>Filing Case Docket #001</span>
        </motion.div>

        {/* Court Announcement */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl sm:text-3xl font-bold font-serif-display text-white leading-snug"
        >
          Entering the Supreme Court of{' '}
          <span className="text-[#FDE68A] block sm:inline">Saloni Didi, Esq.</span>
        </motion.h2>

        {/* Status indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-3 text-sm text-[#DDD2CC] font-light max-w-xs"
        >
          {stage === 0
            ? 'Preparing the formal petition & apology on record...'
            : 'Petition accepted. Presenting the defense... ⚖️'}
        </motion.p>

        {/* Animated Loading Bar */}
        <div className="w-48 h-1.5 bg-white/10 rounded-full mt-8 overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.3, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-[#BE123C] via-[#F59E0B] to-[#FDE68A] rounded-full"
          />
        </div>

        {/* Fast skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={handleSkip}
          type="button"
          className="mt-6 flex items-center gap-1.5 text-xs text-[#A89890] hover:text-[#FDE68A] transition-colors cursor-pointer"
        >
          <span>Enter Courtroom Immediately</span>
          <ArrowRight className="w-3 h-3" />
        </motion.button>
      </div>
    </motion.div>
  );
};
