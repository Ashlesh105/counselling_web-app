import React, { useState } from 'react';
import { Sparkles, RefreshCw, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface EnergyVibeCheckerProps {
  onRecommendationSelect?: (offeringId: string) => void;
}

export const EnergyVibeChecker: React.FC<EnergyVibeCheckerProps> = ({ onRecommendationSelect }) => {
  const { quizData, offerings } = siteContent;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
    if (questionIndex < quizData.questions.length - 1) {
      setCurrentStep(questionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  // Determine recommendation based on first answer
  const firstQuestionOptions = quizData.questions[0].options as Array<{ text: string; recommendation?: string }>;
  const chosenFirstOption = firstQuestionOptions[answers[0] || 0];
  const recommendedOffering = offerings.find(
    (o) => o.id === chosenFirstOption?.recommendation
  ) || offerings[0];

  return (
    <section id="energy-checker" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sanctum-950 via-sanctum-900 to-sanctum-950 border-t border-amber-500/15">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            Check-In With Yourself
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3">
            {quizData.title}
          </h2>
          <p className="text-xs sm:text-sm text-sacred-sandalwood/70 font-serif max-w-xl mx-auto">
            {quizData.subtitle}
          </p>
        </div>

        {/* Quiz Card */}
        <div className="rounded-2xl border border-amber-500/30 bg-sanctum-900/90 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Golden Glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {!isFinished ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-serif text-amber-300 uppercase tracking-widest">
                  Step {currentStep + 1} of {quizData.questions.length}
                </span>
                <div className="flex gap-1.5">
                  {quizData.questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentStep
                          ? 'w-8 bg-amber-400'
                          : idx < currentStep
                          ? 'w-4 bg-amber-600'
                          : 'w-4 bg-sanctum-800'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-white mb-6 leading-relaxed">
                {quizData.questions[currentStep].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {quizData.questions[currentStep].options.map((option, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(currentStep, optIdx)}
                    className="w-full text-left p-4 rounded-xl bg-sanctum-950/80 hover:bg-sanctum-800 border border-amber-500/20 hover:border-amber-400/60 transition-all flex items-center justify-between group"
                  >
                    <span className="text-xs sm:text-sm text-sacred-sandalwood group-hover:text-amber-200 font-sans">
                      {option.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-amber-500/50 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="text-center animate-fade-in">
              <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>

              <h3 className="font-cinzel text-xl sm:text-3xl font-bold text-gold-gradient mb-2">
                You Don't Have to Carry This Alone
              </h3>

              <p className="text-xs sm:text-sm text-sacred-sandalwood/75 font-serif max-w-lg mx-auto mb-6">
                Thank you for taking a moment to acknowledge your feelings. Here is the recommended support session for what you are experiencing:
              </p>

              {/* Recommended Offering Card */}
              <div className="max-w-xl mx-auto p-6 rounded-xl bg-sanctum-950 border border-amber-400/40 text-left mb-8 shadow-xl">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-bold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                    Recommended For You
                  </span>
                  <span className="text-xs text-amber-300 font-serif">
                    {recommendedOffering.duration}
                  </span>
                </div>

                <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-1">
                  {recommendedOffering.title}
                </h4>
                
                <p className="text-xs text-sacred-sandalwood/80 font-sans mb-4">
                  {recommendedOffering.tagline}
                </p>

                <div className="flex items-center gap-2 text-xs text-amber-300 font-serif">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Confidential, patient, and judgment-free 1-on-1 conversation</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#booking"
                  onClick={() => onRecommendationSelect?.(recommendedOffering.id)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sanctum-950 font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
                >
                  Schedule This Session
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sanctum-800 hover:bg-sanctum-700 text-sacred-sandalwood text-xs transition-all"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Retake Check-In
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
