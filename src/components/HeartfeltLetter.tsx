import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, Sparkles, ScrollText, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const HeartfeltLetter: React.FC = () => {
  const [sealTapped, setSealTapped] = useState(false);

  const handleSealClick = () => {
    soundFx.playGentleChime(523.25);
    setSealTapped(true);
  };

  return (
    <section id="heartfelt-letter" className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto z-10 relative">
      {/* Formal Letter / Affidavit Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E8DACF] shadow-xl overflow-hidden"
      >
        {/* Affidavit Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#F0E2DA] pb-4 mb-6 gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A7168]">
            <ScrollText className="w-4 h-4 text-[#C2410C]" />
            <span>Exhibit A: Formal Plea & Apology on Record</span>
          </div>

          <button
            id="bar-association-seal"
            type="button"
            onClick={handleSealClick}
            className="group relative cursor-pointer"
            title="Click the official seal!"
          >
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FFF1F2] border border-[#FECDD3] rounded-full text-[11px] font-medium text-[#BE123C] group-hover:bg-[#FFE4E6] transition-all">
              <Scale className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>{sealTapped ? '⚖️ Irrefutable Love' : 'Sister Court Seal 💌'}</span>
            </div>
          </button>
        </div>

        {/* Letter Text */}
        <div className="space-y-5 text-[#3D2D2A] text-base sm:text-lg leading-relaxed">
          <p className="font-serif-display font-bold text-2xl sm:text-3xl text-[#2B1B20] text-left">
            To the Most Honorable Saloni Didi,
          </p>

          <p>
            May it please the court:{' '}
            <strong className="text-[#991B1B] font-semibold bg-[#FEE2E2]/60 px-1.5 py-0.5 rounded">
              I plead 100% guilty, with zero mitigating circumstances, and waive all rights to make excuses.
            </strong>{' '}
            You are a brilliant lawyer who knows every argument in the book, so you already know that forgetting your own sister&apos;s birthday is an open-and-shut case of complete brotherly negligence.
          </p>

          <p>
            The truth is, seeing you excel in your legal career, fight passionately for what is right, and handle the hardest challenges with your signature grace and fierce intelligence fills me with so much pride. You have always been the sharpest, wisest, and most dependable person in our family.
          </p>

          {/* Sincere Sibling Reflection Box */}
          <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#FFF8F0] border-l-4 border-[#F59E0B] text-[#78350F] shadow-xs">
            <p className="italic text-base sm:text-lg font-serif-display leading-relaxed">
              &ldquo;Long before you had your official law degree, you were already my undefeated defense attorney — rescuing me from mom and dad&apos;s cross-examinations, keeping my secrets safe, and always having my back no matter what.&rdquo;
            </p>
            <div className="mt-2 text-xs font-semibold text-[#B45309] uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" /> Evidence of Lifelong Sisterly Greatness
            </div>
          </div>

          <p>
            I know a belated wish is technically tardy, but my love, respect, and gratitude for you will never expire. As settlement for emotional damages and brotherly carelessness, I hereby agree to the following mandatory reparations:
          </p>

          {/* Sibling Settlement Terms */}
          <div className="my-4 p-4 rounded-xl bg-[#FAF5F0] border border-[#ECDCD0] space-y-2 text-sm sm:text-base text-[#473632]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <span><strong>Full Dinner & Dessert Settlement:</strong> A celebration meal at any venue of your choosing, completely on my tab.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <span><strong>No-Contest Sibling Agreement:</strong> 7 consecutive days of zero sarcastic comebacks or remote-control fights.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <span><strong>Triple-Calendar Statute:</strong> Multiple calendar notifications set on all my devices so this blunder never recurs.</span>
            </div>
          </div>

          <p>
            Thank you for being the most incredible sister, guide, and role model. Please accept this petition and grant your repentant little brother full sisterly pardon?
          </p>
        </div>

        {/* Signature Section */}
        <div className="mt-8 pt-6 border-t border-[#F0E2DA] flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#8C736B] font-medium">Respectfully & Lovingly Submitted,</p>
            <p className="font-handwriting text-3xl sm:text-4xl text-[#9F1239] mt-1 font-bold">
              Your Defenseless Little Brother
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#FFF5F8] px-4 py-2 rounded-xl border border-[#FCD7E2] text-xs text-[#9D174D]">
            <Heart className="w-4 h-4 text-[#E11D48] fill-[#E11D48]" />
            <span>Binding under the Laws of Sibling Love 📜</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
