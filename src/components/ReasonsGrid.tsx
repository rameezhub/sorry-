import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, ShieldCheck, Compass, HeartHandshake, Smile, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ReasonCard } from '../types';
import { soundFx } from '../utils/audio';

const REASONS: ReasonCard[] = [
  {
    id: 'reason-1',
    title: 'Supreme Defender of the Family',
    icon: 'Scale',
    tag: 'Fierce & Brilliant',
    shortDesc: 'You never back down from standing up for what is right, and your loyalty to family is unmatched.',
    expandedMemory: 'Whether in a courtroom or standing up for someone in real life, your integrity, eloquence, and courage inspire me more than you know. You are the ultimate powerhouse.',
    colorTheme: {
      bg: 'bg-[#FFF5F5]',
      border: 'border-[#FED7D7]',
      badge: 'bg-[#FEE2E2]',
      badgeText: 'text-[#991B1B]',
      iconBg: 'bg-[#FEE2E2]',
      iconColor: 'text-[#DC2626]',
    },
  },
  {
    id: 'reason-2',
    title: 'My Lifelong Defense Attorney',
    icon: 'ShieldCheck',
    tag: 'Since Childhood',
    shortDesc: 'Long before law school, you were getting me out of trouble when mom and dad were about to ground me.',
    expandedMemory: 'Whenever I broke something, failed a test, or caused chaos, you immediately took over damage control, coached my answers, and saved me from parental wrath.',
    colorTheme: {
      bg: 'bg-[#FFFBEB]',
      border: 'border-[#FDE68A]',
      badge: 'bg-[#FEF3C7]',
      badgeText: 'text-[#92400E]',
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#D97706]',
    },
  },
  {
    id: 'reason-3',
    title: 'The Supreme Court of Life Advice',
    icon: 'Compass',
    tag: 'Always 100% Right',
    shortDesc: 'You have that superhuman ability to see through confusion and give the clearest, wisest counsel.',
    expandedMemory: 'Whenever life feels messy or I have a big decision to make, one conversation with you puts everything back in perspective. You are my true north star.',
    colorTheme: {
      bg: 'bg-[#FFF7ED]',
      border: 'border-[#FED7AA]',
      badge: 'bg-[#FFEDD5]',
      badgeText: 'text-[#9A3412]',
      iconBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#EA580C]',
    },
  },
  {
    id: 'reason-4',
    title: 'The Snack Sharing Treaty Master',
    icon: 'HeartHandshake',
    tag: 'Bilateral Deals',
    shortDesc: 'We negotiated midnight food raids and fought over the last dessert like opposing counsel in trial.',
    expandedMemory: 'Even when we staged dramatic arguments over pizza crusts or stolen fries, you always ended up secretly sharing the best part with me.',
    colorTheme: {
      bg: 'bg-[#FDF2F8]',
      border: 'border-[#FBCFE8]',
      badge: 'bg-[#FCE7F3]',
      badgeText: 'text-[#9D174D]',
      iconBg: 'bg-[#FCE7F3]',
      iconColor: 'text-[#DB2777]',
    },
  },
  {
    id: 'reason-5',
    title: 'Unconditional Sisterly Mercy',
    icon: 'Smile',
    tag: 'Endless Patience',
    shortDesc: 'Putting up with my endless nonsense, teasing, and now granting bail for a forgotten birthday.',
    expandedMemory: 'No matter how annoying of a brother I can be at times, you continue to support me with unconditional warmth and love. You are truly the best Didi.',
    colorTheme: {
      bg: 'bg-[#F5F3FF]',
      border: 'border-[#DDD6FE]',
      badge: 'bg-[#EDE9FE]',
      badgeText: 'text-[#5B21B6]',
      iconBg: 'bg-[#EDE9FE]',
      iconColor: 'text-[#7C3AED]',
    },
  },
];

export const ReasonsGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    soundFx.playGentleChime(659.25);
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <Smile className="w-5 h-5" />;
    }
  };

  return (
    <section id="reasons-section" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Statement of Facts & Evidence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-display text-[#2B1B20]">
          Reasons I Love My Saloni Didi
        </h2>
        <p className="mt-3 text-base text-[#6E5752]">
          Unquestionable evidence of why you are the smartest, most compassionate, and wonderful sister.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REASONS.map((reason, index) => {
          const isExpanded = expandedId === reason.id;
          return (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border ${reason.colorTheme.border} ${reason.colorTheme.bg} p-6 shadow-sm transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${reason.colorTheme.iconBg} ${reason.colorTheme.iconColor}`}>
                    {renderIcon(reason.icon)}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${reason.colorTheme.badge} ${reason.colorTheme.badgeText}`}>
                    {reason.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#2E1E22] font-serif-display mb-2">
                  {reason.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#5C4540] leading-relaxed mb-4">
                  {reason.shortDesc}
                </p>

                {/* Expandable Memory Detail */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 pt-3 border-t border-[#EAE0D8] text-xs text-[#6B514B] bg-white/80 p-3.5 rounded-xl leading-relaxed"
                  >
                    <div className="font-semibold text-[#881337] flex items-center gap-1 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#BE123C]" /> Brother&apos;s Sworn Testimony:
                    </div>
                    {reason.expandedMemory}
                  </motion.div>
                )}
              </div>

              {/* Bottom Toggle Button */}
              <button
                id={`expand-reason-${reason.id}`}
                onClick={() => toggleExpand(reason.id)}
                type="button"
                className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#7C3AED] hover:text-[#5B21B6] transition-colors cursor-pointer w-full"
              >
                <span>{isExpanded ? 'Conceal Evidence' : 'Examine Sibling Evidence ✨'}</span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
