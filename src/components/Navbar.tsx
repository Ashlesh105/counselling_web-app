import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const Navbar: React.FC = () => {
  const { counselor } = siteContent;

  return (
    <header className="sticky top-0 z-40 bg-sanctum-950/85 backdrop-blur-md border-b border-amber-500/20 py-3.5 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand / Name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🪷</span>
          <div className="flex flex-col">
            <span className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-amber-200 transition-colors">
              {counselor.name}
            </span>
            <span className="text-[10px] font-serif tracking-wider text-amber-300/70 -mt-0.5">
              Counseling & Life Mentorship
            </span>
          </div>
        </a>

        {/* Center Nav Links (Hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-sans tracking-wide text-sacred-sandalwood/80">
          <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
          <a href="#offerings" className="hover:text-amber-300 transition-colors">Guidance Areas</a>
          <a href="#energy-checker" className="hover:text-amber-300 transition-colors">Self Check-in</a>
          <a href="#vibrations" className="hover:text-amber-300 transition-colors">Positive Energy</a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${counselor.whatsapp}?text=${encodeURIComponent("Namaste Prathika Ji, I would like to inquire about scheduling a session.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium hover:bg-emerald-600/30 transition-all"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#booking"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sanctum-950 font-cinzel font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all"
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Book a Session</span>
          </a>
        </div>

      </div>
    </header>
  );
};

