import React from 'react';

export default function GlassEffectLayers() {
  return (
    <>
      {/* 1) Subtle Shadow */}
      <div className="absolute top-[20px] left-[15px] right-[15px] bottom-[-5px] rounded-[24px] bg-black/5 blur-[20px] pointer-events-none" />

      {/* 2) Main Glass Body Base - Brighter white wash */}
      <div className="absolute inset-0 rounded-[24px] bg-white/60 backdrop-blur-[24px] border-[1.5px] border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)] pointer-events-none" />

      {/* 3) Glass Effect Shine Layer */}
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/50 to-transparent mix-blend-overlay pointer-events-none" />
    </>
  );
}
