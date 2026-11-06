import React from 'react';

interface HariHaraOmBackdropProps {
  customImageUrl?: string;
}

export const HariHaraOmBackdrop: React.FC<HariHaraOmBackdropProps> = ({ customImageUrl }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center">
      {/* 1. Hari-Hara Dual Ambient Aura Fields */}
      {/* Left side: Hari (Lord Venkateswara Balaji) - Golden Warmth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-r from-amber-500/15 via-gold/10 to-transparent rounded-full blur-3xl opacity-75"></div>
      
      {/* Right side: Hara (Lord Mahadev Shiva) - Celestial Cosmic Blue */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-l from-sky-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl opacity-75"></div>

      {/* 2. Optional Divine Hari-Hara Background Art Overlay */}
      {customImageUrl ? (
        <div className="absolute inset-0 flex items-center justify-center opacity-25 mix-blend-screen">
          <img
            src={customImageUrl}
            alt="Hari Hara"
            className="w-full h-full object-cover filter contrast-125 brightness-90"
          />
        </div>
      ) : (
        /* Majestic Hari-Hara Dual Silhouette Artwork */
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative w-full max-w-3xl h-full flex items-center justify-between px-4 sm:px-12">
            
            {/* Hari (Lord Venkateswara) Sacred Emblems: Lotus & Sudarshana Chakra Glow */}
            <div className="flex flex-col items-center justify-center text-amber-400/40">
              <svg className="w-48 h-48 sm:w-72 sm:h-72" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="42" strokeWidth="0.8" strokeDasharray="3 3" />
                <path d="M50 15 C40 30, 40 70, 50 85 C60 70, 60 30, 50 15 Z" strokeWidth="1" />
                <path d="M15 50 C30 40, 70 40, 85 50 C70 60, 30 60, 15 50 Z" strokeWidth="1" />
                <circle cx="50" cy="50" r="18" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.3" />
              </svg>
              <span className="text-[11px] font-serif tracking-widest text-amber-300/40 mt-1 uppercase">
                हरि • SRI VENKATESWARA
              </span>
            </div>

            {/* Hara (Lord Mahadev Shiva) Sacred Emblems: Trishula & Crescent Moon */}
            <div className="flex flex-col items-center justify-center text-sky-400/40">
              <svg className="w-48 h-48 sm:w-72 sm:h-72" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                {/* Crescent Moon */}
                <path d="M40 20 A25 25 0 0 0 65 45 A25 25 0 0 1 40 20 Z" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
                {/* Trishula Silhouette */}
                <line x1="50" y1="20" x2="50" y2="85" strokeWidth="1.5" />
                <path d="M32 32 C38 48, 62 48, 68 32" strokeWidth="1.5" />
                <line x1="32" y1="25" x2="32" y2="35" strokeWidth="1.5" />
                <line x1="68" y1="25" x2="68" y2="35" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="42" strokeWidth="0.8" strokeDasharray="3 3" />
              </svg>
              <span className="text-[11px] font-serif tracking-widest text-sky-300/40 mt-1 uppercase">
                हर • LORD MAHADEV
              </span>
            </div>

          </div>
        </div>
      )}

      {/* 3. Centerpiece: Resonating Sacred OM (ॐ) with Expanding Vibrational Rings */}
      <div className="relative flex items-center justify-center">
        
        {/* Ring 1 - Deep Inner Resonance */}
        <div className="absolute w-52 h-52 sm:w-72 sm:h-72 rounded-full border border-amber-400/30 animate-om-ring-1"></div>
        
        {/* Ring 2 - Mid Vibrational Wave (Gold-Cyan Hue) */}
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-sky-400/25 animate-om-ring-2"></div>
        
        {/* Ring 3 - Outer Cosmic Expansion */}
        <div className="absolute w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full border border-amber-300/20 animate-om-ring-3"></div>

        {/* Luminous Central OM (ॐ) Symbol */}
        <div className="relative z-10 text-center animate-om-glow">
          <span className="font-serif text-7xl sm:text-9xl md:text-[140px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-sky-300 select-none block leading-none opacity-40 hover:opacity-70 transition-opacity">
            ॐ
          </span>
          <span className="block text-[10px] sm:text-xs font-serif tracking-[0.3em] uppercase text-amber-200/50 mt-1">
            Hari-Hara • Cosmic Resonating Om
          </span>
        </div>

      </div>

      {/* 4. Vignette Shadow Gradients to Ensure Text Readability */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-sanctum-950/70 to-sanctum-950"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-sanctum-950/60 via-transparent to-sanctum-950"></div>
    </div>
  );
};

