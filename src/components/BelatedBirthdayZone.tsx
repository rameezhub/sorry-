import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Cake, Sparkles, PartyPopper, Heart, RefreshCw, Flame } from 'lucide-react';
import { soundFx } from '../utils/audio';

const BIRTHDAY_WISHES = [
  'May this upcoming year shower you with endless joy, boundless success, vibrant health, and dream vacations! ✈️✨',
  'May every goal you set this year be smashed effortlessly, and may you always remain the happiest, coolest Didi! 🌟',
  'Wishing you unlimited coffee/tea dates, laughter-filled days, peace of mind, and the best life has to offer! ☕💖',
  'May you be blessed with immense prosperity, boundless love, and an annoying brother who never forgets your birthday again! 🎂🎉',
];

export const BelatedBirthdayZone: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [wishIndex, setWishIndex] = useState(0);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const triggerBirthdayConfetti = () => {
    soundFx.playCandleSparkle();
    setHasCelebrated(true);

    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#EC4899', '#8B5CF6', '#10B981', '#F43F5E', '#FBBF24'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleCandleToggle = () => {
    if (candlesLit) {
      // Blow out candles
      soundFx.playCelebrationFanfare();
      setCandlesLit(false);
      triggerBirthdayConfetti();
    } else {
      // Relight candles
      soundFx.playGentleChime(783.99);
      setCandlesLit(true);
    }
  };

  const nextWish = () => {
    soundFx.playGentleChime(659.25);
    setWishIndex((prev) => (prev + 1) % BIRTHDAY_WISHES.length);
  };

  return (
    <section id="birthday-wish-zone" className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-b from-[#FFFDF8] to-[#FFF6F6] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#F5E2DA] shadow-xl text-center relative overflow-hidden"
      >
        {/* Floating background decorative balloons */}
        <div className="absolute top-4 left-6 text-3xl opacity-60 animate-bounce select-none">🎈</div>
        <div className="absolute top-8 right-6 text-3xl opacity-60 animate-bounce delay-300 select-none">🎂</div>

        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs sm:text-sm font-semibold mb-4">
          <PartyPopper className="w-4 h-4 text-[#D97706]" />
          <span>Better Late Than Never • The Grand Birthday Tribute</span>
        </div>

        {/* Belated Birthday Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif-display text-[#3A1821] tracking-tight">
          Happy Belated Birthday, <br />
          <span className="text-[#BE123C] inline-flex items-center gap-2">
            Saloni Didi! 🎂🎉
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#66504B] max-w-xl mx-auto">
          The calendar date might have passed, but my warmest wishes, deepest love, and celebration for you lasts all 365 days of the year!
        </p>

        {/* Interactive Birthday Cake Feature */}
        <div className="mt-10 mb-8 max-w-md mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-[#F3DFD5] shadow-sm">
          {/* Cake Illustration / State */}
          <div className="relative py-4 flex flex-col items-center justify-center">
            {/* Candle Flames */}
            <div className="flex gap-6 mb-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-5 flex items-center justify-center">
                    {candlesLit ? (
                      <motion.div
                        animate={{ scale: [1, 1.2, 0.9, 1.1], rotate: [-2, 3, -1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6 + i * 0.2 }}
                        className="text-amber-500 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                      >
                        <Flame className="w-4 h-4 fill-amber-400 text-amber-500" />
                      </motion.div>
                    ) : (
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full opacity-60" />
                    )}
                  </div>
                  {/* Candle stick */}
                  <div className="w-2.5 h-8 rounded-t-xs bg-gradient-to-b from-pink-300 to-rose-400 border border-rose-300 shadow-xs" />
                </div>
              ))}
            </div>

            {/* Cake Tiers */}
            <div className="w-44 h-10 bg-gradient-to-r from-amber-100 via-rose-100 to-amber-100 rounded-t-xl border border-rose-200 flex items-center justify-center shadow-xs">
              <span className="text-xs font-semibold text-rose-700 tracking-wider">★ SALONI ★</span>
            </div>
            <div className="w-56 h-14 bg-gradient-to-r from-rose-200 via-pink-100 to-rose-200 rounded-b-2xl border-t border-rose-300 border border-rose-200 flex items-center justify-center shadow-sm">
              <div className="flex gap-2">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              </div>
            </div>
            {/* Cake Stand */}
            <div className="w-64 h-3 bg-[#E5D7D0] rounded-full mt-1" />
          </div>

          {/* Candle Action Button */}
          <div className="mt-4 flex justify-center">
            <button
              id="blow-candles-btn"
              onClick={handleCandleToggle}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#BE123C] text-white font-semibold text-xs sm:text-sm hover:bg-[#9F1239] shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              {candlesLit ? (
                <>
                  <span>💨 Blow Out the Candles & Make a Wish!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Relight Candles & Wish Again! ✨</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Birthday Wishes Carousel / Card */}
        <div className="max-w-xl mx-auto bg-[#FFF8F2] rounded-2xl p-5 border border-[#FDE3D2] text-left relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] flex items-center gap-1">
              <Cake className="w-3.5 h-3.5 text-[#EA580C]" /> Special Birthday Blessing
            </span>
            <button
              id="next-wish-btn"
              onClick={nextWish}
              type="button"
              className="flex items-center gap-1 text-xs font-semibold text-[#9D174D] hover:text-[#700D32] transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Next Wish</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={wishIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-sm sm:text-base text-[#4C3530] font-medium leading-relaxed"
            >
              &ldquo;{BIRTHDAY_WISHES[wishIndex]}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Confetti celebration launcher button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            id="trigger-confetti-btn"
            onClick={triggerBirthdayConfetti}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-sm font-semibold hover:bg-[#FDE68A] transition-all cursor-pointer shadow-xs"
          >
            <PartyPopper className="w-4 h-4 text-[#D97706]" />
            <span>Launch Birthday Confetti Rain 🎊</span>
          </button>
        </div>

        {hasCelebrated && (
          <p className="text-xs text-[#9D174D] mt-3 font-medium animate-pulse">
            ✨ You are celebrated today, tomorrow, and every single day, Didi!
          </p>
        )}
      </motion.div>
    </section>
  );
};
