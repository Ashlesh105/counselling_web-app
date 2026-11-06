import React, { useState } from 'react';
import { ChevronDown, Quote, HelpCircle } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const TestimonialsAndFaq: React.FC = () => {
  const { testimonials, faqs } = siteContent;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sanctum-900 border-t border-amber-500/15">
      <div className="max-w-6xl mx-auto">
        
        {/* Testimonials Block */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif uppercase tracking-widest mb-3">
              <Quote className="w-3.5 h-3.5 text-amber-400" />
              Heartfelt Experiences
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3">
              Words From <span className="text-gold-gradient">Those Who Found Peace</span>
            </h2>
            <p className="text-xs sm:text-sm text-sacred-sandalwood/70 font-serif">
              Raw, heartfelt transformations from seekers who unloaded their burdens in this space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-amber-500/20 bg-sanctum-950 p-6 flex flex-col justify-between hover:border-amber-400/40 transition-all shadow-lg"
              >
                <div>
                  <Quote className="w-8 h-8 text-amber-400/20 mb-3" />
                  <p className="text-xs sm:text-sm text-sacred-sandalwood/85 font-serif italic leading-relaxed mb-6">
                    "{t.story}"
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-500/15 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-cinzel font-bold text-amber-200">{t.name}</h4>
                    <span className="text-[11px] text-sacred-sandalwood/50 font-sans">{t.city}</span>
                  </div>
                  <span className="text-[10px] text-amber-400/70 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-serif">
                    {t.sessionType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Block */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              Common Inquiries
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Questions About Sessions & Energy
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-amber-500/20 bg-sanctum-950/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white hover:text-amber-200 transition-colors"
                >
                  <span className="font-cinzel text-xs sm:text-sm font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-sacred-sandalwood/75 font-sans leading-relaxed border-t border-amber-500/10 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
