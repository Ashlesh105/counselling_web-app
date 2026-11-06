import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSanctum } from './components/HeroSanctum';
import { CounselorStory } from './components/CounselorStory';
import { HealingOfferings } from './components/HealingOfferings';
import { EnergyVibeChecker } from './components/EnergyVibeChecker';
import { VibesAndEnergySection } from './components/VibesAndEnergySection';
import { BookingSection } from './components/BookingSection';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedModality, setSelectedModality] = useState<string | undefined>(undefined);

  const handleSelectModality = (offeringId: string) => {
    setSelectedModality(offeringId);
  };

  return (
    <div className="min-h-screen bg-sanctum-950 text-sacred-sandalwood selection:bg-amber-500 selection:text-sanctum-950 font-sans flex flex-col justify-between">
      {/* Top Sacred Navigation Bar */}
      <Navbar />

      {/* Hero Section with Hari-Hara Resonating Om & 432Hz Soundscape */}
      <HeroSanctum />

      {/* Counselor Identity & Lineage */}
      <CounselorStory />

      {/* Core Guidance Topics */}
      <HealingOfferings onSelectOffering={handleSelectModality} />

      {/* Interactive Self Check-in */}
      <EnergyVibeChecker onRecommendationSelect={handleSelectModality} />

      {/* Positive Vibes & Calming Presence */}
      <VibesAndEnergySection />

      {/* Booking Container */}
      <BookingSection selectedOfferingId={selectedModality} />

      {/* Testimonials & FAQs */}
      <TestimonialsAndFaq />

      {/* Traditional Vedic Footer */}
      <Footer />
    </div>
  );
};

export default App;
