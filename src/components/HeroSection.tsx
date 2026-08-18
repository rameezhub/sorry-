import React from 'react';
import { motion } from 'motion/react';
import { Heart, ChevronDown, Sparkles, Scale, Gavel, FileText } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const HeroSection: React.FC = () => {
  const scrollToLetter = () => {
    soundFx.playGentleChime(587.33);
    const element = document.getElementById('heartfelt-letter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative pt-12 pb-12 sm:pt-20 sm:pb-18 px-4 sm:px-6 max-w-4xl mx-auto text-center z-10">
      {/* Top Legal Docket Pill */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C] text-xs sm:text-sm font-semibold mb-6 shadow-xs"
      >
        <Scale className="w-3.5 h-3.5 text-[#BE123C]" />
        <span>Court Docket #001 • Special Apology Jurisdiction</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-ping" />
      </motion.div>

      {/* Case Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-xs sm:text-sm uppercase tracking-widest text-[#8C6D65] font-semibold mb-2"
      >
        Before the Honorable Senior Bench
      </motion.div>

      {/* Main Big Animated Heading Styled as a Legal Case */}
      <motion.h1
        id="hero-main-title"
        initial={{ opacity: 0, y: 22, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2B1B20] font-serif-display leading-tight sm:leading-tight"
      >
        Case No. 001: The Forgotten Birthday <br />
        <span className="relative inline-block text-[#B45309] mt-1 sm:mt-2">
          — In the Matter of Saloni Didi 💛
          {/* Underline wave */}
          <svg
            className="absolute -bottom-2 sm:-bottom-3 left-0 w-full text-[#FDE68A]"
            viewBox="0 0 250 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 11C40 3 95 14 135 7C175 1 210 13 247 9"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </motion.h1>

      {/* Subtitle with Lawyer Sister framing */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
        className="mt-6 text-base sm:text-xl text-[#614E49] max-w-2xl mx-auto leading-relaxed"
      >
        A formal writ of unconditional apology & birthday petition, filed by your{' '}
        <span className="text-[#9F1239] font-medium">currently defenseless younger brother</span>{' '}
        who admits to committing the ultimate crime of a belated birthday wish. 🙇‍♂️⚖️
      </motion.p>

      {/* Legal Proceedings Summary Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="mt-8 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EADBCE] shadow-sm max-w-xl mx-auto text-left"
      >
        <div className="flex items-center justify-between border-b border-[#F0E2DA] pb-3 mb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8C6256] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#C2410C]" />
            <span>Summary of the Parties</span>
          </div>
          <span className="text-[11px] font-medium text-[#B45309] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full">
            Status: Pleading Guilty
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#473430]">
          <div className="p-2.5 rounded-xl bg-[#FFF8F2] border border-[#FDE3D2]">
            <span className="font-semibold text-[#9A3412] block mb-0.5">👩‍⚖️ Presiding Judge:</span>
            <span>Saloni Didi, Esq. (Always Right)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FFF1F2] border border-[#FECDD3]">
            <span className="font-semibold text-[#9F1239] block mb-0.5">🙇‍♂️ Defendant:</span>
            <span>Younger Brother (No Valid Alibi)</span>
          </div>
        </div>

        {/* Guilt and Love Progress Trackers */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-[#FFF5F5] p-3 rounded-xl border border-[#FEE2E2]">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#991B1B]">
              <span>Brother&apos;s Guilt</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-[#FED7D7] h-2 rounded-full mt-1.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="bg-[#DC2626] h-full rounded-full"
              />
            </div>
            <p className="text-[10px] text-[#7F1D1D] mt-1">Conceding all charges 🏳️</p>
          </div>

          <div className="bg-[#FFFBEB] p-3 rounded-xl border border-[#FEF3C7]">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#92400E]">
              <span>Love for Didi</span>
              <span>∞%</span>
            </div>
            <div className="w-full bg-[#FDE68A] h-2 rounded-full mt-1.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 0.9 }}
                className="bg-[#D97706] h-full rounded-full"
              />
            </div>
            <p className="text-[10px] text-[#78350F] mt-1">Irrevocable & Eternal 💖</p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="mt-8 flex flex-col items-center"
      >
        <button
          id="hero-read-affidavit-btn"
          onClick={scrollToLetter}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FCE7F3] text-[#9D174D] border border-[#FBCFE8] text-sm font-semibold hover:bg-[#FBCFE8] hover:shadow-md transition-all cursor-pointer"
        >
          <Gavel className="w-4 h-4 text-[#9D174D] group-hover:rotate-12 transition-transform" />
          <span>Review the Formal Apology Affidavit</span>
          <ChevronDown className="w-4 h-4 text-[#9D174D] animate-bounce" />
        </button>
      </motion.div>
    </header>
  );
};
