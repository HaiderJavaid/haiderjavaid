import React, { useState, useEffect } from 'react';

const BootScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fill the bar over ~2 seconds
    const duration = 2000; 
    const intervalTime = 30; // smooth 30ms ticks
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200); // Small pause at 100%
          return 100;
        }
        // Randomize the increment slightly to make it feel like a real load
        return p + increment * (Math.random() * 1.5 + 0.5);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 md:p-16 text-pip selection:bg-pip selection:text-pip-bg z-20 relative">
      <div className="w-full max-w-xs md:max-w-md flex flex-col gap-3 md:gap-4 animate-in fade-in duration-500">
        <div className="flex justify-between items-end font-bold tracking-widest text-xs md:text-sm text-pip-light uppercase">
          <span className="opacity-80 animate-pulse">Loading System</span>
          <span>{Math.min(Math.floor(progress), 100)}%</span>
        </div>
        
        {/* Loading Bar Container */}
        <div className="w-full h-3 md:h-4 border border-pip/50 p-[2px] bg-pip-bg/60 overflow-hidden rounded-sm drop-shadow-[0_0_8px_rgba(20,184,166,0.2)]">
          {/* Inner fill bar */}
          <div 
            className="h-full bg-pip relative transition-all duration-75 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            {/* Gloss highlight on the bar */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
