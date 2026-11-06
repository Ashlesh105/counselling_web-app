import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, MessageCircle, HeartHandshake, Shield, Compass } from 'lucide-react';
import { toggleAmbientSoundscape, playTempleBell } from '../utils/audioUtils';
import { HariHaraOmBackdrop } from './HariHaraOmBackdrop';

export const HeroSanctum: React.FC = () => {
  const [isPlayingSound, setIsPlayingSound] = useState(true);

  const handleSoundToggle = () => {
    const active = toggleAmbientSoundscape((state) => setIsPlayingSound(state));
    setIsPlayingSound(active);
  };

  const handleBellRing = () => {
    playTempleBell();
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sanctum-950 via-sanctum-900 to-sanctum-950">
      {/* Divine Hari-Hara Background with Resonating Om */}
      <HariHaraOmBackdrop />

      {/* Ambient Soundscape Controller Floating Pill */}
      <div className="max-w-6xl mx-auto flex justify-end mb-6">
        <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-full sacred-glass border border-amber-500/30 text-xs">
          <button
            onClick={handleSoundToggle}
            className="flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors"
            title="Toggle 432Hz Healing Frequency"
          >
            {isPlayingSound ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-[11px] font-medium text-emerald-300">432Hz Frequency Active</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-amber-400/70" />
                <span className="text-[11px] font-medium text-sacred-sandalwood/70">Play 432Hz Soundscape</span>
              </>
            )}
          </button>
          <span className="text-amber-500/40">|</span>
          <button
            onClick={handleBellRing}
            className="text-[11px] text-amber-400 hover:text-amber-300 font-serif"
            title="Ring Sacred Bell"
          >
            Ring Ghanta
          </button>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Sanskrit Inscription Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-serif mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>सत्यं ब्रूयात् प्रियं ब्रूयात् • Pure Compassionate Presence</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none mb-6">
          When the World is Too Heavy, <br className="hidden sm:inline" />
          <span className="text-gold-gradient">Find Sacred Stillness Here.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-sacred-sandalwood/80 font-serif leading-relaxed mb-8">
          A deeply private sanctuary where conscious listening dissolves your emotional knots, and gentle guidance restores the calm, peace, and clarity in your day.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sanctum-950 font-cinzel font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/20 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-sanctum-950" />
            Book a Listening Session
          </a>

          <a
            href="#energy-checker"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full sacred-glass hover:bg-sanctum-800/80 border border-amber-500/40 text-amber-200 font-cinzel font-semibold text-sm tracking-wider transition-all"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            What's Weighing On You?
          </a>
        </div>

        {/* Pillars of Trust Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-amber-500/20 text-left">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-sanctum-900/60 border border-amber-500/10">
            <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs sm:text-sm font-cinzel font-bold text-white">100% Confidential</h4>
              <p className="text-[11px] text-sacred-sandalwood/60 font-serif mt-0.5">Sacred unspoken trust</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-sanctum-900/60 border border-amber-500/10">
            <HeartHandshake className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs sm:text-sm font-cinzel font-bold text-white">Zero Judgment</h4>
              <p className="text-[11px] text-sacred-sandalwood/60 font-serif mt-0.5">Unconditional empathy</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-sanctum-900/60 border border-amber-500/10">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs sm:text-sm font-cinzel font-bold text-white">Grounded Guidance</h4>
              <p className="text-[11px] text-sacred-sandalwood/60 font-serif mt-0.5">Practical, peaceful advice</p>
            </div>
          </div>

          {/* 
          <div className="flex items-start gap-3 p-3 rounded-lg bg-sanctum-900/60 border border-amber-500/10">
            <Compass className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs sm:text-sm font-cinzel font-bold text-white">Global Reach</h4>
              <p className="text-[11px] text-sacred-sandalwood/60 font-serif mt-0.5">Video & audio sessions</p>
            </div>
          </div>
          */}
        </div>

      </div>
    </section>
  );
};
