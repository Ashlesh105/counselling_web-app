import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MessageCircle, Send, CheckCircle2, Shield, Heart } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface BookingSectionProps {
  selectedOfferingId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedOfferingId }) => {
  const { counselor, offerings } = siteContent;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    modality: selectedOfferingId || offerings[0].id,
    sessionMode: 'video', // 'video' | 'audio' | 'whatsapp'
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    intent: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedOfferingId) {
      setForm((prev) => ({ ...prev, modality: selectedOfferingId }));
    }
  }, [selectedOfferingId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 600);
  };

  const handleWhatsAppInstant = () => {
    const selectedMod = offerings.find((o) => o.id === form.modality)?.title || 'Counseling Session';
    const message = `Namaste Acharya Ji,\n\nMy name is ${form.name || 'a seeker'}.\nPhone: ${form.phone || 'Not provided'}\nEmail: ${form.email || 'Not provided'}\n\nI would like to schedule a session for *${selectedMod}*.\nPreferred Slot: ${form.date || 'Soon'} - ${form.timeSlot}.\n\nPlease let me know your availability.`;

    const waUrl = `https://wa.me/${counselor.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-sanctum-950 border-t border-amber-500/20 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            Sacred Consultation Booking
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3">
            Schedule Your <span className="text-gold-gradient">Healing Container</span>
          </h2>
          <p className="text-xs sm:text-sm text-sacred-sandalwood/70 font-serif max-w-lg mx-auto">
            Step across the threshold of noise into a confidential, deeply held space of listening and vibrational renewal.
          </p>
        </div>

        {/* Booking Card */}
        <div className="rounded-2xl border border-amber-500/30 bg-sanctum-900 p-6 sm:p-10 shadow-2xl relative">
          
          {isSubmitted ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                Your Sacred Request Has Been Received
              </h3>
              <p className="text-xs sm:text-sm text-sacred-sandalwood/80 font-serif max-w-md mx-auto mb-6">
                {counselor.name} will personally review your request and confirm your session time within 4-6 hours.
              </p>

              <button
                onClick={handleWhatsAppInstant}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-cinzel font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950"
              >
                <MessageCircle className="w-4 h-4" />
                Message Directly on WhatsApp for Faster Confirmation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Guidance Topic Selection */}
              <div>
                <label className="block text-xs font-serif text-amber-300/90 mb-2">
                  1. What Area Would You Like to Talk About:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {offerings.map((offering) => (
                    <button
                      key={offering.id}
                      type="button"
                      onClick={() => setForm({ ...form, modality: offering.id })}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        form.modality === offering.id
                          ? 'border-amber-400 bg-amber-500/15 shadow-md shadow-amber-500/10'
                          : 'border-amber-500/20 bg-sanctum-950/70 hover:border-amber-500/40'
                      }`}
                    >
                      <span className="block font-cinzel text-xs sm:text-sm font-bold text-white">
                        {offering.title}
                      </span>
                      <span className="block text-[11px] text-amber-300/70 font-serif mt-0.5">
                        {offering.duration} • Confidential Session
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Commented: Preferred Session Format
              <div>
                <label className="block text-xs font-serif text-amber-300/90 mb-2">
                  2. Preferred Session Format:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, sessionMode: 'video' })}
                    className={`py-2 px-3 rounded-lg border text-xs text-center font-medium transition-all ${
                      form.sessionMode === 'video'
                        ? 'border-amber-400 bg-amber-500/20 text-white'
                        : 'border-amber-500/20 bg-sanctum-950 text-sacred-sandalwood/70'
                    }`}
                  >
                    Virtual Video Call
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, sessionMode: 'audio' })}
                    className={`py-2 px-3 rounded-lg border text-xs text-center font-medium transition-all ${
                      form.sessionMode === 'audio'
                        ? 'border-amber-400 bg-amber-500/20 text-white'
                        : 'border-amber-500/20 bg-sanctum-950 text-sacred-sandalwood/70'
                    }`}
                  >
                    Audio Call Only
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, sessionMode: 'whatsapp' })}
                    className={`py-2 px-3 rounded-lg border text-xs text-center font-medium transition-all ${
                      form.sessionMode === 'whatsapp'
                        ? 'border-amber-400 bg-amber-500/20 text-white'
                        : 'border-amber-500/20 bg-sanctum-950 text-sacred-sandalwood/70'
                    }`}
                  >
                    WhatsApp Chat
                  </button>
                </div>
              </div>
              */}

              {/* Personal Details with Email Input */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-sacred-sandalwood/80 mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-sanctum-950 border border-amber-500/30 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-sacred-sandalwood/80 mb-1">
                    Phone / WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-sanctum-950 border border-amber-500/30 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-sacred-sandalwood/80 mb-1">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-sanctum-950 border border-amber-500/30 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-sacred-sandalwood/80 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Preferred Date:
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-sanctum-950 border border-amber-500/30 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-sacred-sandalwood/80 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Preferred Time Window:
                  </label>
                  <select
                    value={form.timeSlot}
                    onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-sanctum-950 border border-amber-500/30 text-white text-sm focus:outline-none focus:border-amber-400"
                  >
                    <option>Morning (08:00 AM - 11:00 AM)</option>
                    <option>Mid-Day (11:00 AM - 03:00 PM)</option>
                    <option>Evening (04:00 PM - 07:00 PM)</option>
                    <option>Twilight Dhyana (07:30 PM - 09:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Commented: What is currently weighing on your heart textarea
              <div>
                <label className="block text-xs font-medium text-sacred-sandalwood/80 mb-1">
                  What is currently weighing on your heart or energy? (Confidential)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share whatever comes naturally — grief, relationship hurt, career confusion, sleeplessness, or simply needing someone to listen..."
                  value={form.intent}
                  onChange={(e) => setForm({ ...form, intent: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-sanctum-950 border border-amber-500/30 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-sacred-sandalwood/30"
                />
              </div>
              */}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sanctum-950 font-cinzel font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? 'Securing Your Space...' : 'Confirm Sacred Booking'}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-cinzel font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
                >
                  <MessageCircle className="w-4 h-4" />
                  Instant WhatsApp Connect
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-sacred-sandalwood/50 font-serif text-center pt-2">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Protected by 100% sacred client confidentiality & Vedic ethics.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

