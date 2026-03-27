import React, { useState, useEffect } from 'react';
import InteractiveTrackingCard from '../components/features/InteractiveTrackingCard';
import LiquidGlassSection from '../components/ui/LiquidGlassSection';
import Header from '../components/ui/Header';

import ExpandableGalleryCard from '../components/ui/ExpandableGalleryCard';

export default function HomeScreen({ onLogout, onNavigateTo, projectData }) {
  return (
    <div className="flex-1 w-full flex flex-col bg-transparent animate-in fade-in duration-500">

      {/* Header Section */}
      <div className="w-full shrink-0">
        <Header onLogout={onLogout} />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col lg:flex-row gap-6 md:gap-10 overflow-y-auto no-scrollbar py-6 md:py-10">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <InteractiveTrackingCard project={projectData} />
          {/* Gallery will show here on desktop */}
          <div className="hidden lg:block h-full">
            <ExpandableGalleryCard onNavigateTo={onNavigateTo} />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <LiquidGlassSection label="Időpontfoglalás" onClick={() => onNavigateTo('booking')} />
          {/* Gallery will show here on mobile/tablet */}
          <div className="block lg:hidden">
            <ExpandableGalleryCard onNavigateTo={onNavigateTo} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full shrink-0 flex flex-col items-center gap-4 mt-auto pt-6 pb-4">
        <div className="w-full max-w-sm h-[1px] bg-primary/20" />
        <button className="text-primary text-[18px] font-display hover:opacity-75 transition-opacity">
          Rólunk
        </button>
      </div>

    </div>
  );
}
