import React from 'react';
import { Ear, Sparkles, Compass, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteContent, Offering } from '../config/siteContent';

const iconMap: Record<string, React.ReactNode> = {
  Ear: <Ear className="w-6 h-6 text-amber-400" />,
  Compass: <Compass className="w-6 h-6 text-blue-400" />,
  Heart: <Heart className="w-6 h-6 text-rose-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-emerald-400" />,
};

interface HealingOfferingsProps {
  onSelectOffering?: (offeringId: string) => void;
}

export const HealingOfferings: React.FC<HealingOfferingsProps> = ({ onSelectOffering }) => {
  const { offerings } = siteContent;

  return (
    <section id="offerings" className="py-20 px-4 sm:px-6 lg:px-8 bg-sanctum-950 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            Support & Guidance
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How I Can <span className="text-gold-gradient">Listen & Guide You</span>
          </h2>
          
          <p className="text-sm sm:text-base text-sacred-sandalwood/75 font-serif leading-relaxed">
            Every person carries a unique struggle. Whether you just need a compassionate listener or wise guidance through a tough dilemma, you are safe here.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering: Offering) => (
            <div
              key={offering.id}
              className="relative rounded-2xl overflow-hidden border border-amber-500/25 bg-gradient-to-b from-sanctum-900 to-sanctum-950 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all hover:shadow-2xl hover:shadow-amber-500/10 group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-sanctum-950 border border-amber-500/30 shadow-inner">
                    {iconMap[offering.iconName] || <Heart className="w-6 h-6 text-amber-400" />}
                  </div>
                  <span className="text-xs text-amber-300/80 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 font-sans">
                    {offering.duration}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                  {offering.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-amber-300/70 font-serif italic mt-1 mb-4">
                  "{offering.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-sacred-sandalwood/80 leading-relaxed font-sans mb-6">
                  {offering.description}
                </p>

                {/* Benefits Checklist */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-amber-500/15">
                  {offering.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-sacred-sandalwood/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
                <span className="text-xs text-amber-300/70 font-serif">
                  1-on-1 Confidential Call
                </span>

                <a
                  href="#booking"
                  onClick={() => onSelectOffering?.(offering.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sanctum-800 hover:bg-amber-500 hover:text-sanctum-950 text-amber-200 text-xs font-cinzel font-bold uppercase tracking-wider transition-all border border-amber-500/30"
                >
                  <span>Schedule Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
