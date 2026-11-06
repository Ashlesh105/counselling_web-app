import React from 'react';
import { Heart, Sparkles, Smile, Shield } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const VibesAndEnergySection: React.FC = () => {
  const { vibePhilosophy } = siteContent;

  return (
    <section id="vibrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-sanctum-900 border-t border-amber-500/15 relative overflow-hidden">
      
      {/* Background Aura Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Vibes & Emotional Atmosphere
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {vibePhilosophy.headline}
          </h2>
          <p className="text-sm sm:text-base text-sacred-sandalwood/75 font-serif leading-relaxed">
            {vibePhilosophy.subheadline}
          </p>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {vibePhilosophy.points.map((point, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-amber-500/20 bg-sanctum-950/70 p-6 flex flex-col justify-between hover:border-amber-400/40 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                    {idx === 0 ? <Smile className="w-5 h-5" /> : idx === 1 ? <Shield className="w-5 h-5" /> : <Heart className="w-5 h-5" />}
                  </div>
                  <span className="text-xs text-amber-300 font-serif bg-sanctum-900 px-3 py-1 rounded-full border border-amber-500/20">
                    {point.significance}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-sacred-sandalwood/75 font-sans leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-amber-500/10 text-[11px] text-amber-400/60 font-serif">
                Support Principle {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Uplifting Quote Banner (NO chakras) */}
        <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-sanctum-950 via-sanctum-900 to-sanctum-950 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
          <p className="font-serif italic text-base sm:text-xl text-amber-200/90 leading-relaxed mb-4">
            "When you sit with someone who doesn't rush you, doesn't judge you, and genuinely cares about your wellbeing, your mind naturally stops fighting. Healing begins the moment you feel truly heard."
          </p>
          <span className="font-cinzel text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase block">
            — Acharya Meera Sharma
          </span>
        </div>

      </div>
    </section>
  );
};
