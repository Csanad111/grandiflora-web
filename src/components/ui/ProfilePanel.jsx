import React, { useState } from 'react';

/**
 * ProfilePanel — glassmorphism bottom-sheet
 * Slides up from the bottom when the profile icon is tapped.
 */
export default function ProfilePanel({ onClose, onLogout }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
        {/* Glass sheet */}
        <div className="relative mx-3 mb-3 rounded-[28px] overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[40px]" />
          <div className="absolute inset-0 border border-white/60 rounded-[28px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 pt-5 pb-4 px-5">

            {/* Drag handle */}
            <div className="w-9 h-1 bg-primary/20 rounded-full mx-auto mb-5" />

            {/* Profile avatar + name placeholder */}
            <div className="flex items-center gap-4 mb-6 px-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-primary text-[17px] font-display tracking-wide">Profil</p>
                <p className="text-primary/50 text-[13px] font-alt">Grandiflora ügyfél</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-primary/10 mb-3" />

            {/* Menu items */}
            <div className="flex flex-col gap-1">
              <MenuRow
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                }
                label="Beállítások"
                onPress={onClose}
              />
              <MenuRow
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                label="Értesítések"
                onPress={onClose}
              />
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-primary/10 my-3" />

            {/* Logout */}
            <button
              onClick={() => { onClose(); onLogout(); }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-400 hover:bg-red-50/60 active:scale-[0.98] transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[16px] font-alt">Kijelentkezés</span>
            </button>

          </div>
        </div>

        {/* Safe area spacer – iOS home indicator */}
        <div className="h-2" />
      </div>
    </>
  );
}

function MenuRow({ icon, label, onPress }) {
  return (
    <button
      onClick={onPress}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-primary hover:bg-primary/5 active:scale-[0.98] transition-all duration-200"
    >
      <span className="text-primary/70">{icon}</span>
      <span className="text-[16px] font-alt">{label}</span>
      <svg className="ml-auto text-primary/30" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
