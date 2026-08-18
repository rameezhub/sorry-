import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Check, Utensils, Coffee, ShieldCheck, Laptop, Sparkles, Scale } from 'lucide-react';
import { Voucher } from '../types';
import { soundFx } from '../utils/audio';

const INITIAL_VOUCHERS: Voucher[] = [
  {
    id: 'v-1',
    title: 'The Unlimited Dinner Settlement Agreement',
    code: 'CONTRACT-DINNER-100',
    icon: 'Utensils',
    description: 'Any restaurant of your choice. Little brother pays 100% of bill + dessert, zero cross-examination allowed.',
    terms: 'Enforceable in all jurisdictions. Non-negotiable.',
    redeemed: false,
  },
  {
    id: 'v-2',
    title: 'Emergency Coffee / Boba Injunction',
    code: 'ORDER-BOBA-URGENT',
    icon: 'Coffee',
    description: 'Court-ordered beverage run dispatched immediately whenever Didi is stressed or handling a tough case.',
    terms: 'Valid 24/7 with zero prior notice required.',
    redeemed: false,
  },
  {
    id: 'v-3',
    title: '24-Hour Cease-and-Desist Sibling Arguing',
    code: 'CEASE-DESIST-ARGUE',
    icon: 'ShieldCheck',
    description: 'Full injunction barring little brother from making sarcastic remarks or arguing about anything.',
    terms: 'Brother must agree with all statements from Didi.',
    redeemed: false,
  },
  {
    id: 'v-4',
    title: 'Lifetime Retainer: Personal Tech & Errands',
    code: 'RETAINER-VIP-PRO-BONO',
    icon: 'Laptop',
    description: 'Fixing gadgets, setting up tech, running last-minute errands, and carrying all heavy luggage.',
    terms: 'Lifelong pro-bono service provided by your brother.',
    redeemed: false,
  },
];

export const SisterVouchers: React.FC = () => {
  const [vouchers, setVouchers] = useState<Voucher[]>(INITIAL_VOUCHERS);

  const handleRedeem = (id: string) => {
    soundFx.playRedeemChime();
    setVouchers((prev) =>
      prev.map((v) => (v.id === id ? { ...v, redeemed: !v.redeemed } : v))
    );
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      default:
        return <Gift className="w-5 h-5" />;
    }
  };

  return (
    <section id="sister-vouchers" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto z-10 relative">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCE7F3] border border-[#FBCFE8] text-[#9D174D] text-xs font-semibold uppercase tracking-wider mb-3">
          <Scale className="w-3.5 h-3.5" />
          <span>Statutory Sibling Reparations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-[#2B1B20]">
          Legally Binding Sister Privilege Vouchers
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E5752]">
          Signed, sealed, and ready for immediate execution by Saloni Didi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {vouchers.map((voucher, idx) => (
          <motion.div
            key={voucher.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`relative rounded-2xl p-5 border transition-all duration-300 ${
              voucher.redeemed
                ? 'bg-[#F0FDF4] border-[#BBF7D0] shadow-xs'
                : 'bg-white border-[#EADDD0] shadow-sm hover:border-[#FBCFE8]'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`p-3 rounded-xl ${
                    voucher.redeemed
                      ? 'bg-[#DCFCE7] text-[#16A34A]'
                      : 'bg-[#FFF1F2] text-[#BE123C]'
                  }`}
                >
                  {renderIcon(voucher.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#9C8279] uppercase">
                    {voucher.code}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#2E1E22] font-serif-display">
                    {voucher.title}
                  </h3>
                </div>
              </div>

              <button
                id={`execute-contract-${voucher.id}`}
                onClick={() => handleRedeem(voucher.id)}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
                  voucher.redeemed
                    ? 'bg-[#16A34A] text-white'
                    : 'bg-[#9D174D] text-white hover:bg-[#831843]'
                }`}
              >
                {voucher.redeemed ? (
                  <>
                    <Check className="w-3 h-3" /> Executed!
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3" /> Execute Clause
                  </>
                )}
              </button>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-[#5C4540] leading-relaxed">
              {voucher.description}
            </p>

            <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-[11px] text-[#9C8279]">
              <span>Clause: {voucher.terms}</span>
              <span className="font-semibold text-[#B45309]">Irrevocable ✨</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
