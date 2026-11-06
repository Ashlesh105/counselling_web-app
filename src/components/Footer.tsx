import React from 'react';
import { Sparkles, Heart, Phone, Mail, MapPin, Lock } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface FooterProps {
  onLogout?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLogout }) => {
  const { counselor } = siteContent;

  return (
    <footer className="bg-sanctum-950 border-t border-amber-500/20 text-sacred-sandalwood pt-16 pb-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Shanti Mantra Inscription Callout */}
        <div className="text-center max-w-2xl mx-auto mb-14 p-6 rounded-2xl bg-gradient-to-b from-sanctum-900 to-sanctum-950 border border-amber-500/25">
          <p className="font-serif text-sm sm:text-base text-amber-300 font-semibold leading-relaxed mb-2">
            ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।<br />
            सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥
          </p>
          <p className="text-xs text-sacred-sandalwood/60 font-serif italic">
            "May all beings everywhere be happy and free from affliction. May all see what is auspicious. May no one suffer. Om Shanti Shanti Shanti."
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🪷</span>
              <span className="font-cinzel text-lg font-bold text-white tracking-wide">
                Sacred Healing Sanctum
              </span>
            </div>
            <p className="text-xs sm:text-sm text-sacred-sandalwood/70 font-serif max-w-sm leading-relaxed mb-4">
              Where empathetic psychological listening meets traditional Vedic wisdom, positive energy, and emotional peace.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-amber-300 font-serif">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Blessed by Divine Grace • Held in Sacred Presence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              Sacred Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-sacred-sandalwood/80">
              <li><a href="#about" className="hover:text-amber-300 transition-colors">Counselor Lineage</a></li>
              <li><a href="#offerings" className="hover:text-amber-300 transition-colors">4 Healing Modalities</a></li>
              <li><a href="#energy-checker" className="hover:text-amber-300 transition-colors">Energy & Vibe Assessment</a></li>
              <li><a href="#vibrations" className="hover:text-amber-300 transition-colors">Philosophy of Spanda</a></li>
              <li><a href="#booking" className="hover:text-amber-300 transition-colors">Book a Sacred Session</a></li>
            </ul>
          </div>

          {/* Direct Sanctuary Contact */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              Sanctuary Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-sacred-sandalwood/80 font-sans">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{counselor.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href={`tel:${counselor.phone}`} className="hover:text-amber-300 transition-colors">
                  {counselor.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${counselor.email}`} className="hover:text-amber-300 transition-colors">
                  {counselor.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-amber-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-sacred-sandalwood/50">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Sacred Healing Sanctum. All blessings reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-amber-400/80">
              <Heart className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>Held in pure loving presence</span>
            </div>

            {onLogout && (
              <button
                onClick={onLogout}
                className="text-sacred-sandalwood/40 hover:text-amber-400 text-[10px] flex items-center gap-1 transition-colors"
                title="Lock Sanctum Access"
              >
                <Lock className="w-3 h-3" />
                <span>Lock Portal</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
