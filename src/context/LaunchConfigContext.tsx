import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteContent } from '../config/siteContent';

interface LaunchConfigContextType {
  launchTimestamp: string;
  isTimerActive: boolean;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  };
}

const LaunchConfigContext = createContext<LaunchConfigContextType | undefined>(undefined);

export const LaunchConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Configured in src/config/siteContent.ts
  const launchTimestamp = siteContent.launch.defaultLaunchTimestamp;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  // Countdown timer loop
  useEffect(() => {
    function calculate() {
      const target = new Date(launchTimestamp).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    }

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [launchTimestamp]);

  return (
    <LaunchConfigContext.Provider
      value={{
        launchTimestamp,
        isTimerActive: !timeLeft.isExpired,
        timeLeft,
      }}
    >
      {children}
    </LaunchConfigContext.Provider>
  );
};

export const useLaunchConfig = () => {
  const context = useContext(LaunchConfigContext);
  if (!context) {
    throw new Error('useLaunchConfig must be used within a LaunchConfigProvider');
  }
  return context;
};
