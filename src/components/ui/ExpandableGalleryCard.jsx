import React, { useState, useRef, useEffect } from 'react';
import GlassEffectLayers from './GlassEffectLayers';

export default function ExpandableGalleryCard({ onNavigateTo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    }
    
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [cardRef]);

  const handleToggle = (e) => {
    // Only toggle if we are clicking on the main card area, not inside the expanded content buttons
    if (!isExpanded) {
      setIsExpanded(true);
    } else if (e.target.closest('.gallery-trigger-btn')) {
      // If expanding by clicking the specific button again (optional behavior)
      setIsExpanded(false);
    }
  };

  const handleGalleryClick = (e) => {
    e.stopPropagation();
    onNavigateTo('before-after');
  };

  return (
    <div
      ref={cardRef}
      onClick={handleToggle}
      className={`group relative w-full flex flex-col items-center justify-center cursor-pointer overflow-hidden ${isExpanded ? 'shadow-2xl z-20' : 'z-10'}`}
      style={{
        height: isExpanded ? '240px' : '195px',
        transition: 'height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <GlassEffectLayers />

      <div 
        className="absolute inset-0 flex items-center justify-center px-4"
        style={{
          opacity: isExpanded ? 0 : 1,
          transform: isExpanded ? 'scale(0.95)' : 'scale(1)',
          pointerEvents: isExpanded ? 'none' : 'auto',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <button className="relative w-full max-w-[260px] sm:max-w-[300px] h-[65px] bg-primary text-white text-[18px] sm:text-[20px] font-display tracking-[0.14px] rounded-[20px] shadow-[0_4px_12px_rgba(94,110,94,0.3)] mx-auto">
          Előtte - utána
        </button>
      </div>

      {/* Expanded State Content */}
      <div 
        className="absolute inset-x-0 top-0 bottom-0 flex flex-col"
        style={{
          opacity: isExpanded ? 1 : 0,
          pointerEvents: isExpanded ? 'auto' : 'none',
          transition: 'opacity 0.4s ease 0.1s'
        }}
      >
        {/* Top Button */}
        <div className="pt-6 flex justify-center z-10">
          <button 
            onClick={handleGalleryClick}
            className="w-[180px] h-[44px] bg-primary text-white text-[18px] font-display rounded-[22px] shadow-lg hover:bg-primary-dark active:scale-95 transition-all"
          >
            Galéria
          </button>
        </div>

        {/* Divider */}
        <div className="absolute top-[85px] bottom-[20px] left-1/2 w-[1px] bg-primary/20 -translate-x-1/2" />

        {/* Two Icon Columns */}
        <div className="flex-1 flex flex-row items-end pb-8 relative z-10">
          
          {/* Left: "Előtte" */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary opacity-80">
              <path d="M4 20L10 10L14 15M20 20L16 12L12 17M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 20H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-primary text-[18px] font-display font-medium tracking-wide">Előtte</span>
          </div>

          {/* Right: "Utána" */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M20 20L14 10L10 15M4 20L8 12L12 17M16 6C16 7.10457 15.1046 8 14 8C12.8954 8 12 7.10457 12 6C12 4.89543 12.8954 4 14 4C15.1046 4 16 4.89543 16 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 20H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              {/* Added a small stylized tree next to mountains for "After" */}
              <path d="M6 13L4 16H8L6 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M6 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-primary text-[18px] font-display font-medium tracking-wide">Utána</span>
          </div>

        </div>
      </div>
    </div>
  );
}
