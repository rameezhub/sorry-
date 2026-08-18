import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Gavel, Scale, CheckCircle2, ShieldAlert, Award, Share2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const ForgiveSection: React.FC = () => {
  const [forgiven, setForgiven] = useState(false);
  const [gavelBanging, setGavelBanging] = useState(false);
  const [penaltyCount, setPenaltyCount] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const deliverVerdict = () => {
    setGavelBanging(true);
    soundFx.playGavelStrike();

    setTimeout(() => {
      soundFx.playCelebrationFanfare();
      setForgiven(true);
      setGavelBanging(false);

      // Multi-cannon grand confetti burst
      const duration = 4 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 6,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.7 },
          colors: ['#BE123C', '#F59E0B', '#10B981', '#6366F1', '#EC4899', '#FBBF24'],
        });
        confetti({
          particleCount: 6,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.7 },
          colors: ['#BE123C', '#F59E0B', '#10B981', '#6366F1', '#EC4899', '#FBBF24'],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }, 450);
  };

  const handlePenaltyClick = () => {
    soundFx.playGentleChime(440);
    setPenaltyCount((prev) => prev + 1);
  };

  const copyCelebration = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const getPenaltyText = () => {
    switch (penaltyCount) {
      case 1:
        return 'Court Order 1: Brother is sentenced to buy Didi a giant box of chocolates! 🍫';
      case 2:
        return 'Court Order 2: Brother must submit a written admission that Didi is the family genius! 👑';
      case 3:
        return 'Court Order 3: 50 virtual ear-pulls registered! Sentence satisfied, now please forgive him? 🥺';
      default:
        return `Penalties accumulated: ${penaltyCount}! Little brother is completely at your mercy.`;
    }
  };

  return (
    <section id="forgive-section" className="py-16 sm:py-24 px-4 sm:px-6 max-w-3xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-[#FFF5F8] via-[#FFFDF9] to-[#FEF3C7]/40 rounded-3xl p-6 sm:p-12 border border-[#FCD7D7] shadow-xl text-center relative overflow-hidden"
      >
        {!forgiven ? (
          <div>
            {/* Pre-verdict State */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C] text-xs sm:text-sm font-semibold mb-4">
              <Scale className="w-4 h-4 text-[#BE123C]" />
              <span>Court is in Session • Final Judgment</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif-display text-[#2B1B20]">
              Deliver the Verdict, Saloni Didi! ⚖️
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#66504B] max-w-lg mx-auto leading-relaxed">
              The defense has rested its case. Your repentant younger brother awaits Your Honor&apos;s final ruling.
            </p>

            {/* Penalty Feedback */}
            <AnimatePresence>
              {penaltyCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-xs sm:text-sm font-medium text-[#991B1B] max-w-md mx-auto flex items-center justify-center gap-2"
                >
                  <ShieldAlert className="w-4 h-4 shrink-0 text-[#DC2626]" />
                  <span>{getPenaltyText()}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gavel Styled Decision Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                id="deliver-verdict-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={deliverVerdict}
                type="button"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#BE123C] text-white text-base sm:text-lg font-bold shadow-lg hover:bg-[#9F1239] hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-3"
              >
                <motion.div
                  animate={gavelBanging ? { rotate: [0, -45, 15, 0] } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <Gavel className="w-5 h-5 text-amber-200" />
                </motion.div>
                <span>Deliver the Verdict — Forgive Me? ❤️</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </motion.button>

              <button
                id="impose-penalties-btn"
                onClick={handlePenaltyClick}
                type="button"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/90 border border-[#EADBCE] text-xs sm:text-sm font-semibold text-[#8C6D65] hover:bg-[#FFF1F2] hover:text-[#BE123C] hover:border-[#FECDD3] transition-all cursor-pointer"
              >
                <span>Impose Sibling Penalties First 😈 {penaltyCount > 0 ? `(${penaltyCount})` : ''}</span>
              </button>
            </div>

            <p className="text-xs text-[#9C8279] mt-6">
              *Striking the gavel grants an unconditional brotherly pardon and immediate food redemption rights.
            </p>
          </div>
        ) : (
          /* Celebratory Case Closed State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DCFCE7] text-[#16A34A] border-4 border-white shadow-md mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            {/* Exact Required Final Message */}
            <h3 className="text-3xl sm:text-5xl font-bold font-serif-display text-[#166534]">
              Case Closed. Verdict: Best Didi in the World ❤️
            </h3>

            <p className="text-lg sm:text-xl text-[#2B1B20] max-w-xl mx-auto font-medium leading-relaxed">
              &ldquo;Thank you for being you, Didi. You are the kindest, smartest, and most wonderful sister anyone could ever ask for!&rdquo;
            </p>

            {/* Official Final Judgment Certificate */}
            <div className="max-w-md mx-auto bg-white rounded-2xl p-6 border-2 border-[#FDE68A] shadow-md text-left relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#F5E6E0] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#D97706]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#92400E]">
                    Decree of the Supreme Sister Court
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                  Verdict: Absolute Pardon
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#473632]">
                <p>
                  <strong>Presiding Judge:</strong> Saloni Didi, Esq. 👑
                </p>
                <p>
                  <strong>Defendant Status:</strong> Forgiven & Deeply Blessed 🙇‍♂️
                </p>
                <p>
                  <strong>Order:</strong> Dinner, desserts, and perpetual brotherly appreciation approved in full.
                </p>
                <p className="pt-2 text-xs text-[#9C8279] italic font-serif-display">
                  &ldquo;This verdict is final, unappealable, and sealed with sibling love forever.&rdquo;
                </p>
              </div>
            </div>

            {/* Celebration Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                id="confetti-gavel-again-btn"
                onClick={deliverVerdict}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#BE123C] text-white text-xs sm:text-sm font-semibold hover:bg-[#9F1239] transition-all cursor-pointer shadow-sm"
              >
                <Gavel className="w-4 h-4 text-amber-200" />
                <span>Bang Gavel for More Confetti! 🎉</span>
              </button>

              <button
                id="share-verdict-btn"
                onClick={copyCelebration}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#EADBCE] text-xs sm:text-sm font-semibold text-[#66504B] hover:bg-[#FFF5F8] transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#C2410C]" />
                <span>{copiedLink ? 'Verdict Link Copied! ✨' : 'Share Case Record'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
