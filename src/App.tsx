import React, { useState } from 'react';
import { LaunchConfigProvider } from './context/LaunchConfigContext';
import { TirupatiLaunchBanner } from './components/TirupatiLaunchBanner';
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
    <LaunchConfigProvider>
      <div className="min-h-screen bg-sanctum-950 text-sacred-sandalwood selection:bg-amber-500 selection:text-sanctum-950 font-sans flex flex-col justify-between">
        {/* Tirupati Tirumala Sacred Launch Banner & Countdown */}
        <TirupatiLaunchBanner />

        {/* Hero Section with 432Hz Soundscape */}
        <HeroSanctum />

        {/* Counselor Identity & Lineage */}
        <CounselorStory />

        {/* 4 Core Healing Modalities */}
        <HealingOfferings onSelectOffering={handleSelectModality} />

        {/* Interactive Energy & Vibe Assessment */}
        <EnergyVibeChecker onRecommendationSelect={handleSelectModality} />

        {/* The Role of Vibes, Frequency & Subtle Prana */}
        <VibesAndEnergySection />

        {/* Sacred Booking Container */}
        <BookingSection selectedOfferingId={selectedModality} />

        {/* Testimonials & FAQs */}
        <TestimonialsAndFaq />

        {/* Traditional Vedic Footer */}
        <Footer />
      </div>
    </LaunchConfigProvider>
  );
};

export default App;
