import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FloatingParticles } from './components/FloatingParticles';
import { AudioToggle } from './components/AudioToggle';
import { CourtIntroAnimation } from './components/CourtIntroAnimation';
import { HeroSection } from './components/HeroSection';
import { HeartfeltLetter } from './components/HeartfeltLetter';
import { ReasonsGrid } from './components/ReasonsGrid';
import { BelatedBirthdayZone } from './components/BelatedBirthdayZone';
import { SisterVouchers } from './components/SisterVouchers';
import { ForgiveSection } from './components/ForgiveSection';
import { Footer } from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2220] relative selection:bg-[#FCE7F3] selection:text-[#9D174D] overflow-x-hidden font-sans">
      {/* Full-Screen Court Docket Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <CourtIntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Background Floating Orbs & Ambient Sparkles */}
      <FloatingParticles />

      {/* Sound Toggle */}
      <AudioToggle />

      {/* Main Single-Page Experience */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        {/* 1. Hero Case Docket */}
        <HeroSection />

        {/* 2. Formal Apology Affidavit from Brother */}
        <HeartfeltLetter />

        {/* 3. Evidence of Sister Greatness Grid */}
        <ReasonsGrid />

        {/* 4. Belated Birthday Celebration & Virtual Cake Zone */}
        <BelatedBirthdayZone />

        {/* 5. Statutory Sister Privilege Contracts */}
        <SisterVouchers />

        {/* 6. Deliver the Verdict & Gavel Climax */}
        <ForgiveSection />
      </motion.main>

      {/* 7. Warm Sibling Footer */}
      <Footer />
    </div>
  );
}
