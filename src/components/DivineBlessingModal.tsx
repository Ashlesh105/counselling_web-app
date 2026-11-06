import React, { useState } from 'react';
import { X, Sparkles, Volume2, ShieldCheck, Heart } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { playTempleBell } from '../utils/audioUtils';
import { triggerDivineBlessingShower } from '../utils/particleEffect';

interface DivineBlessingModalProps {
  isOpen: boolean;
  onClose: () => void;
  isConsecrated?: boolean;
}

export const DivineBlessingModal: React.FC<DivineBlessingModalProps> = ({ isOpen, onClose, isConsecrated = false }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'balaji' | 'mahadev'>('both');
  const [blessingReceived, setBlessingReceived] = useState(false);

  if (!isOpen) return null;

  const handleSeekBlessing = () => {
    playTempleBell();
    triggerDivineBlessingShower();
    setBlessingReceived(true);
    setTimeout(() => setBlessingReceived(false), 5000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-gradient-to-b from-sanctum-900 via-sanctum-850 to-sanctum-950 rounded-2xl border border-amber-500/40 shadow-2xl shadow-amber-950/60 p-6 sm:p-8 text-center text-sacred-sandalwood">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-sanctum-800/80 hover:bg-amber-500/20 text-gold hover:text-white transition-all border border-amber-500/30"
          title="Close Darshan"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Auspicious Consecration Live Announcement */}
        {isConsecrated && (
          <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-sacred-vermilion/30 to-amber-500/20 border-2 border-amber-400 text-amber-200 text-xs sm:text-sm font-cinzel font-bold tracking-wider shadow-lg animate-pulse flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Auspicious Launch Moment Activated! Divine Ashirwad Flowing at Tirupati Tirumala</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
        )}

        {/* Sacred Header Motif */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Tirupati Tirumala Sacred Kshetram
          </div>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-gold-gradient tracking-wide">
            Sri Venkateswara & Lord Mahadev Darshan
          </h2>
          <p className="text-sm sm:text-base text-sacred-sandalwood/70 font-serif max-w-xl mt-1 italic">
            "Under the supreme aegis of Tirumala Hills, seeking eternal light, strength, and inner stillness for all seekers."
          </p>
        </div>

        {/* Deity Filter Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeTab === 'both'
              ? 'bg-amber-500 text-sanctum-950 font-semibold shadow-lg shadow-amber-500/30'
              : 'bg-sanctum-800/60 text-sacred-sandalwood/80 hover:bg-sanctum-700'
              }`}
          >
            Dual Divinity (Hari-Hara)
          </button>
          <button
            onClick={() => setActiveTab('balaji')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeTab === 'balaji'
              ? 'bg-amber-500 text-sanctum-950 font-semibold shadow-lg shadow-amber-500/30'
              : 'bg-sanctum-800/60 text-sacred-sandalwood/80 hover:bg-sanctum-700'
              }`}
          >
            Sri Tirupati Balaji
          </button>
          <button
            onClick={() => setActiveTab('mahadev')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeTab === 'mahadev'
              ? 'bg-amber-500 text-sanctum-950 font-semibold shadow-lg shadow-amber-500/30'
              : 'bg-sanctum-800/60 text-sacred-sandalwood/80 hover:bg-sanctum-700'
              }`}
          >
            Lord Mahadev (Shiva)
          </button>
        </div>

        {/* Divine Cards Grid */}
        <div className={`grid gap-6 ${activeTab === 'both' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-xl mx-auto'} mb-8 text-left`}>

          {/* 1. Lord Venkateswara (Tirupati Balaji) Card */}
          {(activeTab === 'both' || activeTab === 'balaji') && (
            <div className="relative rounded-xl overflow-hidden border border-amber-500/30 bg-gradient-to-b from-amber-950/30 via-sanctum-900 to-sanctum-950 p-5 group hover:border-amber-400/60 transition-all">
              {/* Golden Halo Background Animation */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/25 transition-all"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border border-amber-400/50 bg-amber-500/10 flex items-center justify-center text-2xl shadow-inner shadow-amber-400/20">
                  🪷
                </div>
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-amber-200">
                    Lord Venkateswara
                  </h3>
                  <span className="text-xs font-serif text-amber-400/80 tracking-wider">
                    Govinda • Srinivasa • Balaji
                  </span>
                </div>
              </div>

              {/* Balaji Sloka */}
              <div className="p-3.5 rounded-lg bg-sanctum-950/80 border border-amber-500/20 mb-3">
                <p className="font-serif text-xs sm:text-sm text-amber-300 font-semibold leading-relaxed">
                  {siteContent.launch.slokaBalaji}
                </p>
                <p className="text-xs text-sacred-sandalwood/60 mt-1 italic">
                  "{siteContent.launch.slokaBalajiMeaning}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-sacred-sandalwood/80 leading-relaxed font-sans">
                {siteContent.launch.blessingTextBalaji}
              </p>

              <div className="mt-4 pt-3 border-t border-amber-500/15 flex items-center justify-between text-xs text-amber-400/80">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Kalyug Abhaya Pradhata
                </span>
                <span className="text-sacred-sandalwood/50">Tirumala Sanctum</span>
              </div>
            </div>
          )}

          {/* 2. Lord Mahadev Card */}
          {(activeTab === 'both' || activeTab === 'mahadev') && (
            <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-slate-950 via-sanctum-900 to-sanctum-950 p-5 group hover:border-cyan-400/60 transition-all">
              {/* Cyan Cosmic Aura Background Animation */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border border-cyan-400/50 bg-cyan-500/10 flex items-center justify-center text-2xl shadow-inner shadow-cyan-400/20">
                  🔱
                </div>
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-cyan-200">
                    Lord Mahadev
                  </h3>
                  <span className="text-xs font-serif text-cyan-400/80 tracking-wider">
                    Neelakantha • Bholenath • Nataraja
                  </span>
                </div>
              </div>

              {/* Mahadev Sloka */}
              <div className="p-3.5 rounded-lg bg-sanctum-950/80 border border-cyan-500/20 mb-3">
                <p className="font-serif text-xs sm:text-sm text-cyan-300 font-semibold leading-relaxed">
                  {siteContent.launch.slokaMahadev}
                </p>
                <p className="text-xs text-sacred-sandalwood/60 mt-1 italic">
                  "{siteContent.launch.slokaMahadevMeaning}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-sacred-sandalwood/80 leading-relaxed font-sans">
                {siteContent.launch.blessingTextMahadev}
              </p>

              <div className="mt-4 pt-3 border-t border-cyan-500/15 flex items-center justify-between text-xs text-cyan-400/80">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-cyan-400" />
                  Stillness & Mind Liberation
                </span>
                <span className="text-sacred-sandalwood/50">Kailash Dhyana</span>
              </div>
            </div>
          )}

        </div>

        {/* Action Button: Touch for Divine Ashirwad */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={handleSeekBlessing}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-sanctum-950 font-cinzel font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all"
          >
            <Volume2 className="w-4 h-4 text-sanctum-950 animate-bounce" />
            Seek Divine Ashirwad & Bell Chime
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-sanctum-800/80 hover:bg-sanctum-700 text-sacred-sandalwood text-xs tracking-wider font-semibold transition-all"
          >
            Continue to Sanctuary
          </button>
        </div>

        {blessingReceived && (
          <div className="mt-4 p-3 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-200 text-xs sm:text-sm animate-fade-in">
            ✨ Om Namo Venkateshaya! Har Har Mahadev! Divine blessings and protective aura have been showered upon your heart.
          </div>
        )}

      </div>
    </div>
  );
};
