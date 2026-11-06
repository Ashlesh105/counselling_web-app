import React, { useState, useEffect } from 'react';
import { Sparkles, Bell, Clock, Eye, MapPin } from 'lucide-react';
import { useLaunchConfig } from '../context/LaunchConfigContext';
import { siteContent } from '../config/siteContent';
import { playTempleBell } from '../utils/audioUtils';
import { triggerDivineBlessingShower } from '../utils/particleEffect';
import { DivineBlessingModal } from './DivineBlessingModal';

export const TirupatiLaunchBanner: React.FC = () => {
  const { timeLeft, isTimerActive } = useLaunchConfig();
  const [isDarshanOpen, setIsDarshanOpen] = useState(false);
  const [blessingFired, setBlessingFired] = useState(false);
  const [hasAutoActivated, setHasAutoActivated] = useState(false);

  // Automatically activate the Touch for Divine blessing experience the moment timer completes!
  useEffect(() => {
    if (!timeLeft.isExpired) {
      setHasAutoActivated(false);
    } else if (timeLeft.isExpired && !hasAutoActivated) {
      setHasAutoActivated(true);

      // Auto-trigger the divine blessing shower & sacred bell chime
      playTempleBell();
      triggerDivineBlessingShower();
      setBlessingFired(true);

      // Automatically open the full Lord Balaji & Lord Mahadev darshan modal!
      setIsDarshanOpen(true);

      const timer = setTimeout(() => {
        setBlessingFired(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft.isExpired, hasAutoActivated]);

  const handleAshirwadClick = () => {
    playTempleBell();
    triggerDivineBlessingShower();
    setBlessingFired(true);
    setTimeout(() => setBlessingFired(false), 4000);
  };

  return (
    <>
      {/* Top Auspicious Ticker */}
      <div className="w-full bg-gradient-to-r from-amber-950 via-sacred-vermilion to-amber-950 text-gold-shimmer text-xs py-1.5 px-4 font-serif text-center tracking-widest border-b border-amber-500/20 flex items-center justify-between">
        <span className="hidden sm:inline-block text-amber-300/80">ॐ नमो वेङ्कटेशाय</span>
        <div className="flex items-center justify-center gap-2 mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span className="font-sans font-medium text-[11px] sm:text-xs tracking-wider uppercase text-amber-100">
            Consecration Launch • Tirupati Tirumala Kshetram
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        </div>
        <span className="hidden sm:inline-block text-amber-300/80">हर हर महादेव</span>
      </div>

      {/* Main Sacred Launch Banner & Countdown */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sanctum-900 via-sanctum-850 to-sanctum-950 border-b border-amber-500/25 py-6 sm:py-8 px-4">
        {/* Subtle Background Divine Rays & Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-mandala-glow pointer-events-none opacity-80"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Column: Tirupati & Mahadev Blessing Invocation */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium mb-3">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteContent.launch.sacredLocation}</span>
            </div>
            
            <h1 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-white leading-tight">
              {siteContent.launch.eventName}
            </h1>
            <p className="font-serif text-sacred-sandalwood/75 text-sm sm:text-base mt-1.5 italic">
              "{siteContent.launch.eventSubtitle}"
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-4">
              <button
                onClick={() => setIsDarshanOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sanctum-800/90 hover:bg-sanctum-700 border border-amber-500/30 text-amber-200 text-xs font-medium transition-all shadow-sm"
              >
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                View Balaji & Mahadev Blessings
              </button>

              <button
                onClick={handleAshirwadClick}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 text-xs font-semibold transition-all"
              >
                <Bell className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                {blessingFired ? "✨ Divine Ashirwad Showered!" : "Touch for Temple Bell Chime"}
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Launch Countdown Clock */}
          <div className="w-full lg:w-auto flex flex-col items-center">
            <div className="flex items-center gap-2 text-xs font-cinzel tracking-widest text-amber-300 uppercase mb-3">
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              <span>Auspicious Launch Countdown</span>
            </div>

            {isTimerActive ? (
              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                {/* Days */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-sanctum-950/80 border border-amber-500/30 min-w-[65px] sm:min-w-[80px] shadow-lg shadow-black/40">
                  <span className="text-xl sm:text-3xl font-cinzel font-bold text-gold-shimmer">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-sacred-sandalwood/60 uppercase font-sans tracking-wider mt-0.5">
                    Days
                  </span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-sanctum-950/80 border border-amber-500/30 min-w-[65px] sm:min-w-[80px] shadow-lg shadow-black/40">
                  <span className="text-xl sm:text-3xl font-cinzel font-bold text-gold-shimmer">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-sacred-sandalwood/60 uppercase font-sans tracking-wider mt-0.5">
                    Hours
                  </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-sanctum-950/80 border border-amber-500/30 min-w-[65px] sm:min-w-[80px] shadow-lg shadow-black/40">
                  <span className="text-xl sm:text-3xl font-cinzel font-bold text-gold-shimmer">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-sacred-sandalwood/60 uppercase font-sans tracking-wider mt-0.5">
                    Mins
                  </span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-sanctum-950/80 border border-amber-400/50 min-w-[65px] sm:min-w-[80px] shadow-lg shadow-amber-500/10">
                  <span className="text-xl sm:text-3xl font-cinzel font-bold text-amber-400 animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-amber-400/70 uppercase font-sans tracking-wider mt-0.5">
                    Secs
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-sanctum-900 to-amber-500/20 border-2 border-amber-400 shadow-2xl shadow-amber-500/25 text-center animate-fade-in max-w-sm sm:max-w-md">
                <span className="text-base sm:text-lg font-cinzel font-bold text-amber-300 block mb-1">
                  ✨ The Sacred Sanctum Is Consecrated & Live! ✨
                </span>
                <span className="text-xs text-sacred-sandalwood/80 block font-serif mb-3">
                  Under the eternal blessings of Lord Venkateswara & Lord Mahadev.
                </span>
                <button
                  onClick={handleAshirwadClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sanctum-950 font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <Bell className="w-4 h-4 animate-bounce" />
                  {blessingFired ? "✨ Divine Ashirwad Flowing!" : "Touch for Divine Ashirwad & Bell"}
                </button>
              </div>
            )}

            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-amber-300/60 font-serif">
              <span>Brahma Muhurtham Consecration</span>
              <span>•</span>
              <span>Vedic Energy Shield Active</span>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Blessing & Darshan Modal */}
      <DivineBlessingModal
        isOpen={isDarshanOpen}
        onClose={() => setIsDarshanOpen(false)}
        isConsecrated={timeLeft.isExpired}
      />
    </>
  );
};
