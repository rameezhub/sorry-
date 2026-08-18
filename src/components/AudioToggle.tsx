import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const AudioToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());

  const toggle = () => {
    const nextState = soundFx.toggleMute();
    setIsMuted(nextState);
    if (!nextState) {
      soundFx.playGentleChime(659.25);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
      <button
        id="audio-toggle-btn"
        onClick={toggle}
        type="button"
        aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F3E8E2] text-xs font-medium text-[#7C635B] shadow-xs hover:bg-white hover:text-[#B45309] hover:border-[#FDE68A] transition-all"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#9CA3AF]" />
            <span className="hidden sm:inline">Sound Off</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[#D97706] animate-pulse" />
            <span className="hidden sm:inline">Sound Chimes On</span>
            <Sparkles className="w-3 h-3 text-[#F59E0B]" />
          </>
        )}
      </button>
    </div>
  );
};
