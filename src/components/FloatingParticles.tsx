import React, { useMemo } from 'react';

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
  opacity: number;
}

export const FloatingParticles: React.FC = () => {
  const particles: Particle[] = useMemo(() => {
    const emojis = ['✨', '💛', '🌸', '💖', '⭐', '🎈', '🍰'];
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8 + Math.random() * 4) % 100}%`,
      top: `${(i * 6.2 + Math.random() * 5) % 100}%`,
      size: 14 + Math.floor(Math.random() * 12),
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 5,
      emoji: emojis[i % emojis.length],
      opacity: 0.25 + Math.random() * 0.35,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Soft warm gradient orbs in background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFE4E6]/50 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-[#FEF3C7]/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#FCE7F3]/40 rounded-full blur-3xl" />

      {/* Floating gentle icons */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none animate-float-slow transition-opacity"
          style={{
            left: p.left,
            top: p.top,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};
