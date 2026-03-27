import React, { useState, useEffect } from 'react';
import WeatherCharacter from './WeatherCharacter';
import ProfilePanel from './ProfilePanel';

export default function Header({ onBack, onLogout, showProfile = true, showBack = true }) {
  const [temperature, setTemperature] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current_weather=true`
          );
          const data = await res.json();
          setTemperature(Math.round(data.current_weather.temperature));
        } catch {
          // silently fail
        }
      },
      () => {}
    );
  }, []);

  return (
    <>
      {/* ── Spacer (Responsive top padding) ── */}
      <div className="h-4 sm:h-8 w-full shrink-0" aria-hidden="true" />

      {/* ── Redesigned Header Section ── */}
      <div className="relative h-[60px] flex items-center justify-between px-[20px] z-50 shrink-0">
        
        {/* LEFT — Back/Logout Button */}
        <div className="flex items-center w-[60px]">
          {showBack && (
            <button
              onClick={onBack || onLogout}
              className="group relative w-[34px] h-[34px] flex items-center justify-center outline-none active:scale-90 transition-transform duration-200"
              aria-label="Vissza"
            >
              <div className="absolute inset-[-5px] rounded-full bg-black/5 blur-[10px] group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 rounded-full bg-white/60 backdrop-blur-[24px] border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)]" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 to-transparent mix-blend-overlay" />
              <svg className="relative z-10" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7H1" stroke="#5e6e5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 13L1 7L7 1" stroke="#5e6e5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* CENTER — Dynamic Character + Brand Name (Senior UX Placement) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[10px] pointer-events-none select-none">
          <div className="flex items-center gap-[6px]">
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              <WeatherCharacter temperature={temperature} size={28} />
            </div>
            {/* We omit text temperature so focus stays on the character and brand per UX instructions */}
          </div>
          <h1 className="text-primary text-[24px] font-display tracking-[1.40px] whitespace-nowrap">
            GRANDIFLORA
          </h1>
        </div>

        {/* RIGHT — Profile Icon */}
        <div className="flex items-center justify-end w-[60px]">
          {showProfile && (
            <button
              onClick={() => setProfileOpen(true)}
              className="text-primary hover:bg-black/5 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 outline-none"
              aria-label="Profil és beállítások"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {profileOpen && (
        <ProfilePanel
          onClose={() => setProfileOpen(false)}
          onLogout={onLogout}
        />
      )}
    </>
  );
}
