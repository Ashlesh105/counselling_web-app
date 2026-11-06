import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Sparkles, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { HariHaraOmBackdrop } from './HariHaraOmBackdrop';

interface LoginGateProps {
  onLoginSuccess: () => void;
}

export const LoginGate: React.FC<LoginGateProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Exact password required: Prathikakini
  const CORRECT_PASSWORD = 'Prathikakini';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      // Check password (allow exact match or trim)
      if (password.trim() === CORRECT_PASSWORD) {
        onLoginSuccess();
      } else {
        setErrorMsg('Incorrect passcode. Please enter the valid access password.');
        setIsSubmitting(false);
      }
    }, 350);
  };

  return (
    <div className="min-h-screen bg-sanctum-950 text-sacred-sandalwood flex items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Background Divine Hari-Hara with Resonating Om */}
      <HariHaraOmBackdrop />

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-amber-500/35 bg-sanctum-900/90 backdrop-blur-xl p-8 sm:p-10 shadow-2xl shadow-black/80 text-center animate-fade-in">
        
        {/* Sacred Lotus Icon Header */}
        <div className="w-16 h-16 rounded-full bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-3xl mx-auto mb-4 shadow-inner shadow-amber-400/20">
          🪷
        </div>

        {/* Title & Subtitle */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-serif uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Private Sanctum Portal</span>
        </div>

        <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide mb-1">
          Prathika Kini
        </h1>
        <p className="text-xs sm:text-sm text-sacred-sandalwood/70 font-serif mb-8">
          Counseling & Life Guidance Sanctum
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="block text-xs font-medium text-sacred-sandalwood/80 mb-2 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Enter Access Password:</span>
            </label>
            
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoFocus
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                className="w-full px-4 py-3.5 pr-11 rounded-xl bg-sanctum-950 border border-amber-500/30 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-sacred-sandalwood/30 transition-all shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sacred-sandalwood/50 hover:text-amber-300 transition-colors p-1"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3 rounded-lg bg-rose-950/70 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2 animate-shake">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !password}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sanctum-950 font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <span>{isSubmitting ? 'Entering Sanctum...' : 'Enter Sacred Sanctum'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Security Note */}
        <div className="mt-8 pt-4 border-t border-amber-500/15 flex items-center justify-center gap-1.5 text-[11px] text-sacred-sandalwood/50 font-serif">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400/80" />
          <span>Protected confidential portal for verified visitors</span>
        </div>

      </div>
    </div>
  );
};

