import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const ITEM_HEIGHT = 60; // Height of each menu item in px

const SlotMachineNav = ({ items, activeIndex, onNavigate, onSelect }) => {
  const containerRef = useRef(null);
  const isLocked = useRef(false); 
  const clearLockTimeout = useRef(null); 
  
  // Touch tracking refs
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      if (clearLockTimeout.current) clearTimeout(clearLockTimeout.current);

      clearLockTimeout.current = setTimeout(() => {
        isLocked.current = false;
        clearLockTimeout.current = null;
      }, 150);

      if (isLocked.current) return;

      isLocked.current = true;

      if (e.deltaY > 0) {
        onNavigate((prev) => (prev + 1) % items.length);
      } else {
        onNavigate((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        onNavigate((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        onNavigate((prev) => (prev + 1) % items.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (onSelect) onSelect();
      }
    };

    // --- TOUCH HANDLERS ---
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      // Prevent the page from scrolling while we are interacting with the wheel
      if(e.cancelable) e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY; // Positive = Swipe Up

      // Threshold to count as a swipe (prevents accidental jitters)
      if (Math.abs(deltaY) < 15) return;

      if (deltaY > 0) {
        // Swipe Up -> Next Item
        onNavigate((prev) => (prev + 1) % items.length);
      } else {
        // Swipe Down -> Prev Item
        onNavigate((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      
      if (clearLockTimeout.current) {
        clearTimeout(clearLockTimeout.current);
      }
    };
  }, [items.length, onNavigate, onSelect]);

  return (
    <div 
      ref={containerRef}
      className="relative h-64 w-full max-w-md mx-auto overflow-hidden border-t-2 border-b-2 border-teal-500/30 bg-teal-500/5 mask-image-linear-gradient select-none touch-none"
    >
      {/* Selection Highlight Bar (The "Window") */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[60px] bg-teal-500/10 border-t border-b border-teal-500 pointer-events-none z-0 shadow-[0_0_15px_rgba(20,184,166,0.2)]" />

      <div className="absolute top-1/2 left-0 right-0 w-full pointer-events-none">
        {items.map((item, index) => {
          let distance = index - activeIndex;
          
          if (distance < -2) distance += items.length;
          if (distance > 2) distance -= items.length;

          const isActive = index === activeIndex;
          
          const translateY = distance * ITEM_HEIGHT - (ITEM_HEIGHT / 2);
          const scale = isActive ? 1.2 : Math.max(0.8, 1 - Math.abs(distance) * 0.1);
          const opacity = isActive ? 1 : Math.max(0.2, 0.6 - Math.abs(distance) * 0.3);
          const blur = isActive ? 0 : Math.min(4, Math.abs(distance) * 2);

          if (Math.abs(distance) > 3) return null;

          return (
            <div
              key={item.id}
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity: opacity,
                filter: `blur(${blur}px)`,
                transition: 'all 0.2s cubic-bezier(0.17, 0.67, 0.14, 0.97)',
              }}
              className="absolute left-0 right-0 flex items-center justify-center h-[60px] z-10"
            >
              <div className="flex items-center gap-4">
                {isActive && <ChevronRight className="w-6 h-6 animate-pulse text-teal-500" />}
                <span 
                  className={`text-2xl font-bold tracking-widest uppercase truncate ${isActive ? 'text-teal-400 drop-shadow-[0_0_5px_rgba(20,184,166,0.8)]' : 'text-teal-500/60'}`}
                >
                  {item.label}
                </span>
                {isActive && <ChevronRight className="w-6 h-6 animate-pulse text-teal-500 rotate-180" />}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Gradient Masks */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-transparent to-slate-950/90 pointer-events-none z-20" />
      
      {/* Interaction Zones */}
      <div className="absolute inset-0 z-30 grid grid-rows-3 pointer-events-auto">
         {/* Top Click: Scroll Up */}
         <div className="cursor-pointer" onClick={() => onNavigate((prev) => (prev - 1 + items.length) % items.length)}></div>
         
         {/* Center Click: SELECT / ENTER */}
         <div 
            className="cursor-pointer hover:bg-teal-500/5 transition-colors" 
            title="Click to Enter"
            onClick={onSelect}
         ></div>
         
         {/* Bottom Click: Scroll Down */}
         <div className="cursor-pointer" onClick={() => onNavigate((prev) => (prev + 1) % items.length)}></div>
      </div>
    </div>
  );
};

export default SlotMachineNav;