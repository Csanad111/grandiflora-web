import React from 'react';
import GlassEffectLayers from './GlassEffectLayers';

export default function LiquidGlassSection({ label, onClick, isTracking, trackingProgress, trackingLabel }) {
  return (
    <div
      className="group relative w-full flex items-center justify-center"
      style={{
        height: isTracking ? '140px' : '195px',
        transition: 'height 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <GlassEffectLayers />

      {/* Button — fades out when tracking starts */}
      <button
        onClick={onClick}
        disabled={isTracking}
        className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] h-[65px] px-6 bg-primary text-white text-[18px] sm:text-[20px] font-display tracking-[0.14px] rounded-[20px] flex items-center justify-center shadow-lg mx-auto"
        style={{
          opacity: isTracking ? 0 : 1,
          transform: isTracking ? 'scale(0.85)' : 'scale(1)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: isTracking ? 'none' : 'auto',
          position: isTracking ? 'absolute' : 'relative',
        }}
      >
        {label}
      </button>

      {/* Progress Bar — fades in when tracking starts */}
      <div
        className="absolute inset-x-0 z-10 px-6 flex flex-col gap-3"
        style={{
          opacity: isTracking ? 1 : 0,
          transform: isTracking ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.4s ease 0.2s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
          pointerEvents: 'none',
        }}
      >
        {/* Label row */}
        <div className="flex items-baseline justify-between">
          <span className="text-accent-dark text-[15px] font-display tracking-wide">
            {trackingLabel || 'Nyomon követés'}
          </span>
          <span className="text-primary text-[22px] font-display tabular-nums">
            {trackingProgress ?? 0}%
          </span>
        </div>

        {/* Track */}
        <div className="w-full h-[10px] bg-white/50 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full"
            style={{
              width: isTracking ? `${trackingProgress ?? 0}%` : '0%',
              background: 'linear-gradient(90deg, #899c85 0%, #5e6e5e 100%)',
              transition: isTracking
                ? 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s'
                : 'none',
              boxShadow: '0 1px 6px rgba(94,110,94,0.35)',
            }}
          />
        </div>

        {/* Status chip */}
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full bg-accent"
            style={{ animation: isTracking ? 'pulse 1.5s ease-in-out infinite' : 'none' }}
          />
          <span className="text-primary/70 text-[13px] font-body">Folyamatban</span>
        </div>
      </div>
    </div>
  );
}
