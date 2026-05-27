import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const SECTIONS = [
  {
    id: 1,
    content: (
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          In the era of digital noise, <span className="text-gray-400">clarity is the only currency.</span>
        </h1>
        <p className="text-xl text-gray-600 font-medium">
          Most businesses are shouting. Few are being heard.
        </p>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="space-y-6 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Every growth curve hits a <span className="text-gray-400">ceiling.</span>
        </h2>
        <div className="h-px w-24 bg-black/20 my-8"></div>
        <p className="text-2xl text-gray-800 leading-relaxed">
          Traffic plateaus. Leads dry up. The algorithm changes. 
          <br /><span className="text-gray-400">What got you here won't get you there.</span>
        </p>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="space-y-8 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          You don't need a website. <br/>
          <span className="text-gray-400">You need a conversion engine.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
           <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-bold mb-2">Technical Precision</h3>
              <p className="text-gray-500">Fast, accessible, and built on rock-solid infrastructure.</p>
           </div>
           <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-bold mb-2">Strategic Narrative</h3>
              <p className="text-gray-500">Design that speaks directly to your customer's pain points.</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="space-y-8 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-black rounded-full mb-4 flex items-center justify-center text-white font-bold text-2xl">
          H
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          I'm Haider.
        </h2>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          I bridge the gap between complex code and commercial success. 
          Let's verify your strategy.
        </p>
        
        <button 
          className="group mt-8 flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300 shadow-2xl shadow-black/20"
          onClick={() => alert("Booking System Loading...")}
        >
          <Calendar className="w-5 h-5" />
          <span>Book Free Consultation</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-sm text-gray-400 mt-4">No commitment. Just free knowledge.</p>
      </div>
    )
  }
];

const MarketingView = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Refs for scroll locking
  const isLocked = useRef(false);
  const clearLockTimeout = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      if (isLocked.current) return;

      // Determine Scroll Direction
      const delta = e.deltaY;
      if (Math.abs(delta) < 20) return; // Ignore tiny movements

      isLocked.current = true;

      if (delta > 0) {
        // SCROLL DOWN
        if (activeSlide < SECTIONS.length - 1) {
          setActiveSlide(prev => prev + 1);
        } else {
           // Release lock faster if at bounds
           isLocked.current = false;
           return;
        }
      } else {
        // SCROLL UP
        if (activeSlide > 0) {
          setActiveSlide(prev => prev - 1);
        } else {
           isLocked.current = false;
           return;
        }
      }

      // Lock cooldown (1200ms matches animation duration)
      if (clearLockTimeout.current) clearTimeout(clearLockTimeout.current);
      clearLockTimeout.current = setTimeout(() => {
        isLocked.current = false;
      }, 1200);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSlide]);

  return (
    <div className="h-[100dvh] w-full bg-white text-black font-sans overflow-hidden relative flex items-center justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white pointer-events-none" />

      {/* Progress Indicator (Right Side) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {SECTIONS.map((_, idx) => (
          <div 
            key={idx}
            className={`w-1.5 transition-all duration-500 rounded-full ${
              idx === activeSlide ? 'h-8 bg-black' : 'h-1.5 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Slide Container */}
      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12">
        {SECTIONS.map((section, index) => {
          // Render only active, prev, and next to save resources, though mapping all is fine for small count
          if (Math.abs(activeSlide - index) > 1) return null;

          const isActive = index === activeSlide;
          
          return (
            <div
              key={section.id}
              className={`absolute top-1/2 left-0 w-full -translate-y-1/2 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isActive 
                  ? 'opacity-100 translate-y-[-50%] blur-0 scale-100' 
                  : index < activeSlide 
                    ? 'opacity-0 translate-y-[-80%] blur-sm scale-95' // Old slides move UP and fade
                    : 'opacity-0 translate-y-[-20%] blur-sm scale-95' // New slides wait below
                }
              `}
              // Note: The translate-y logic above combines with the centering logic.
              // Active: Centered (-50%)
              // Passed: Moved Up (-80%)
              // Coming: Moved Down (-20%)
            >
              <div className={`${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                 {section.content}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer / Hint */}
      <div className="absolute bottom-8 left-0 w-full text-center text-gray-400 text-xs tracking-widest uppercase animate-pulse">
        {activeSlide === SECTIONS.length - 1 ? 'Start your journey' : 'Scroll to discover'}
      </div>
    </div>
  );
};

export default MarketingView;
