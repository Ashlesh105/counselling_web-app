import React from 'react';
import { Award, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const CounselorStory: React.FC = () => {
  const { counselor } = siteContent;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-sanctum-900 border-y border-amber-500/15 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Portrait with Temple Aura Frame */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group">
            {/* Glowing Aura Rings */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-500/30 via-sacred-saffron/20 to-amber-600/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Portrait Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 p-1.5 bg-sanctum-950 shadow-2xl">
              <img
                src={counselor.photoUrl}
                alt={counselor.name}
                className="w-72 sm:w-80 h-96 object-cover rounded-xl filter contrast-105 brightness-95"
              />
              
              {/* Bottom Inscription Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-sanctum-950/85 backdrop-blur-md border border-amber-500/30 text-center">
                <span className="block font-cinzel text-sm font-bold text-amber-200">
                  {counselor.name}
                </span>
                <span className="block text-[11px] font-serif text-sacred-sandalwood/75">
                  {counselor.title}
                </span>
              </div>
            </div>

            {/* Experience Pill */}
            <div className="absolute -top-3 -right-3 px-3.5 py-1 rounded-full bg-amber-500 text-sanctum-950 font-cinzel font-bold text-xs shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{counselor.experienceYears}+ Years of Service</span>
            </div>
          </div>
        </div>

        {/* Right Column: Counselor Story & Philosophy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            The Presence Behind The Sanctum
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            "Listening Is An Act of <span className="text-gold-gradient">Sacred Consecration.</span>"
          </h2>

          {/* Core Belief Callout */}
          <div className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-400 mb-6">
            <p className="font-serif italic text-sm sm:text-base text-amber-200/90 leading-relaxed">
              "{counselor.coreBelief}"
            </p>
          </div>

          {/* Bio Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-sacred-sandalwood/80 leading-relaxed font-sans mb-8">
            {counselor.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Credentials Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
            {counselor.credentials.map((cred, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-sanctum-950/60 border border-amber-500/15">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-medium text-sacred-sandalwood/90">{cred}</span>
              </div>
            ))}
          </div>

          {/* Direct WhatsApp CTA */}
          <a
            href={`https://wa.me/${counselor.whatsapp}?text=${encodeURIComponent("Namaste Acharya Ji, I would like to inquire about a healing & listening consultation.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Connect Personally on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
};

