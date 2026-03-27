import React from 'react';

/**
 * WeatherCharacter – chibi emoji-style, temperature-reactive
 *
 * < 0°C   → kék arc, jégsapka, remegő száj, könnycsepp
 * 0–10°C  → pirosló arcok, szomorú szem, sál
 * 10–18°C → álmos/laza semleges arc
 * 18–25°C → boldog arc, napsugarak, rózsa arc
 * > 25°C  → napszemüveg, verejték, hatalmas mosoly
 */
export default function WeatherCharacter({ temperature, size = 26, onlyHands = false }) {
  const temp = temperature;

  const isFreezing = temp !== null && temp < 0;
  const isCold     = temp !== null && temp <= 10;
  const isCool     = temp !== null && temp > 10 && temp < 18;
  const isComfy    = temp !== null && temp >= 18 && temp < 22;
  const isHot      = temp !== null && temp >= 22;
  const isLoading  = temp === null;

  const P = '#5e6e5e';          // app primary green
  const FACE_FILL = isFreezing ? '#cce4f5' : '#f5f0ea';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={temp !== null ? `${temp}°C` : 'Időjárás'}
      style={{ display: 'block', flexShrink: 0 }}
      className={!isLoading ? "animate-idle" : ""}
    >
      {!onlyHands && (
        <>
          {/* ══════════ SUN RAYS (comfy + hot) ══════════ */}
          {(isComfy || isHot) && (
            <g stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" opacity="0.8">
              <line x1="16" y1="1"   x2="16" y2="3.5"/>
              <line x1="23" y1="3.5" x2="21.2" y2="5.3"/>
              <line x1="25.5" y1="10" x2="23" y2="10"/>
              <line x1="9"  y1="3.5" x2="10.8" y2="5.3"/>
              <line x1="6.5" y1="10" x2="9"  y2="10"/>
            </g>
          )}

          {/* ══════════ ICE CRYSTALS (freezing) ══════════ */}
          {isFreezing && (
            <g stroke="#7ab8db" strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
              <line x1="5" y1="5" x2="5" y2="8"/>
              <line x1="3.7" y1="6.5" x2="6.3" y2="6.5"/>
              <line x1="4" y1="5.3" x2="6" y2="7.7"/>
              <line x1="6" y1="5.3" x2="4" y2="7.7"/>
              <circle cx="25" cy="5" r="1.2" fill="#7ab8db" stroke="none" opacity="0.5"/>
            </g>
          )}

          {/* ══════════ FACE CIRCLE ══════════ */}
          <circle
            cx="16" cy="18" r="12"
            fill={FACE_FILL}
            stroke={isFreezing ? '#7ab8db' : P}
            strokeWidth="1.6"
            opacity={isLoading ? 0.4 : 1}
          />

          {/* ══════════ BLUSH CHEEKS ══════════ */}
          {(isCold || isComfy || isLoading) && (
            <>
              <ellipse cx="10.5" cy="21" rx="2.5" ry="1.5" fill="#f0a0a0" opacity="0.35"/>
              <ellipse cx="21.5" cy="21" rx="2.5" ry="1.5" fill="#f0a0a0" opacity="0.35"/>
            </>
          )}
          {isHot && (
            <>
              <ellipse cx="10.5" cy="22" rx="2.5" ry="1.4" fill="#f07050" opacity="0.3"/>
              <ellipse cx="21.5" cy="22" rx="2.5" ry="1.4" fill="#f07050" opacity="0.3"/>
            </>
          )}

          {/* ══════════ EYES ══════════ */}
          {isFreezing && (
            <g stroke={P} strokeWidth="1.6" strokeLinecap="round">
              <line x1="11.5" y1="15.5" x2="13.5" y2="17.5"/>
              <line x1="13.5" y1="15.5" x2="11.5" y2="17.5"/>
              <line x1="18.5" y1="15.5" x2="20.5" y2="17.5"/>
              <line x1="20.5" y1="15.5" x2="18.5" y2="17.5"/>
            </g>
          )}

          {isCold && (
            <>
              <ellipse cx="12.5" cy="16.5" rx="2.2" ry="2.5" fill="white" stroke={P} strokeWidth="1.2"/>
              <ellipse cx="19.5" cy="16.5" rx="2.2" ry="2.5" fill="white" stroke={P} strokeWidth="1.2"/>
              <circle cx="12.5" cy="17.5" r="1.1" fill={P}/>
              <circle cx="19.5" cy="17.5" r="1.1" fill={P}/>
              <circle cx="13.1" cy="16.9" r="0.5" fill="white"/>
              <circle cx="20.1" cy="16.9" r="0.5" fill="white"/>
              <path d="M11 14.5 Q12.5 13.5 14 14.5" stroke={P} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              <path d="M18 14.5 Q19.5 13.5 21 14.5" stroke={P} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
            </>
          )}

          {isCool && (
            <>
              <ellipse cx="12.5" cy="17" rx="2.2" ry="2.5" fill="white" stroke={P} strokeWidth="1.2"/>
              <ellipse cx="19.5" cy="17" rx="2.2" ry="2.5" fill="white" stroke={P} strokeWidth="1.2"/>
              <circle cx="12.5" cy="17.5" r="1.1" fill={P}/>
              <circle cx="19.5" cy="17.5" r="1.1" fill={P}/>
              <circle cx="13.1" cy="16.9" r="0.5" fill="white"/>
              <circle cx="20.1" cy="16.9" r="0.5" fill="white"/>
              <path d="M10.3 15.5 Q12.5 14.8 14.7 15.5" stroke={P} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
              <path d="M17.3 15.5 Q19.5 14.8 21.7 15.5" stroke={P} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
            </>
          )}

          {isComfy && (
            <>
              <ellipse cx="12.5" cy="16.5" rx="2.5" ry="2.8" fill="white" stroke={P} strokeWidth="1.2"/>
              <ellipse cx="19.5" cy="16.5" rx="2.5" ry="2.8" fill="white" stroke={P} strokeWidth="1.2"/>
              <circle cx="12.5" cy="17" r="1.4" fill={P}/>
              <circle cx="19.5" cy="17" r="1.4" fill={P}/>
              <circle cx="13.3" cy="16.1" r="0.6" fill="white"/>
              <circle cx="12.1" cy="16.9" r="0.3" fill="white"/>
              <circle cx="20.3" cy="16.1" r="0.6" fill="white"/>
              <circle cx="19.1" cy="16.9" r="0.3" fill="white"/>
            </>
          )}

          {isHot && (
            <g>
              <rect x="9" y="14.5" width="5" height="4" rx="2" fill={P} opacity="0.85"/>
              <rect x="18" y="14.5" width="5" height="4" rx="2" fill={P} opacity="0.85"/>
              <line x1="14" y1="16.5" x2="18" y2="16.5" stroke={P} strokeWidth="1.2"/>
              <line x1="10.2" y1="15.6" x2="11.5" y2="15.6" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
              <line x1="19.2" y1="15.6" x2="20.5" y2="15.6" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
            </g>
          )}

          {isLoading && (
            <>
              <circle cx="12.5" cy="17" r="1.5" fill={P} opacity="0.3"/>
              <circle cx="19.5" cy="17" r="1.5" fill={P} opacity="0.3"/>
            </>
          )}

          {/* ══════════ MOUTHS ══════════ */}
          {isFreezing && (
            <path d="M12 23 Q13.5 21.5 16 23 Q18.5 24.5 20 23"
              stroke={P} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          )}
          {isCold && (
            <path d="M12.5 23.5 Q16 21 19.5 23.5"
              stroke={P} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          )}
          {isCool && (
            <path d="M12.5 22.5 Q16 22.5 19.5 22.5"
              stroke={P} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          )}
          {isComfy && (
            <>
              <path d="M12 21.5 Q16 26 20 21.5"
                stroke={P} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
              <path d="M12 21.5 Q16 26 20 21.5"
                fill="white" opacity="0.6"/>
            </>
          )}
          {isHot && (
            <>
              <path d="M11.5 21 Q16 26.5 20.5 21"
                stroke={P} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
              <path d="M11.5 21 Q16 26.5 20.5 21"
                fill="white" opacity="0.6"/>
            </>
          )}
          {isLoading && (
            <path d="M13 22.5 Q16 22.5 19 22.5"
              stroke={P} strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.3"/>
          )}

          {/* ══════════ ACCESSORIES ══════════ */}
          {isCold && (
            <g className="animate-in fade-in zoom-in duration-500">
              {/* Cute knitted scarf */}
              <path d="M7 23.5 Q16 26.5 25 23.5" stroke="#d96a5b" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
              <path d="M7 23.5 Q16 26.5 25 23.5" stroke="#c25749" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 1.5" fill="none"/>
              <path d="M10 24.5 L9 29" stroke="#d96a5b" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M10 24.5 L9 29" stroke="#c25749" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 1.5" fill="none"/>
              {/* Fringe */}
              <line x1="8" y1="29.5" x2="8" y2="30.5" stroke="#d96a5b" strokeWidth="0.8"/>
              <line x1="9" y1="29.5" x2="9" y2="30.5" stroke="#d96a5b" strokeWidth="0.8"/>
              <line x1="10" y1="29" x2="10" y2="30" stroke="#d96a5b" strokeWidth="0.8"/>
            </g>
          )}
          {isHot && (
            <g className="animate-in fade-in drop-shadow-sm duration-500">
              {/* Cool stylish sunglasses */}
              <path d="M6 15 Q16 12 26 15" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round"/>
              {/* Left Lens */}
              <path d="M8 14.5 C9.5 13.5 14.5 14.5 14.5 16 C14.5 18.5 12.5 19 11.5 19 C10 19 8 18 8 14.5Z" fill="#111827"/>
              <path d="M9.5 15.5 L11.5 15.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
              {/* Right Lens */}
              <path d="M17.5 14.5 C19 13.5 24 14.5 24 16 C24 18.5 22 19 21 19 C19.5 19 17.5 18 17.5 14.5Z" fill="#111827"/>
              <path d="M19 15.5 L21 15.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
            </g>
          )}
        </>
      )}

      {/* ══════════ GRABBING HANDS (for peeking) ══════════ */}
      {!isLoading && (
        <g fill={FACE_FILL} stroke={isFreezing ? '#7ab8db' : P} strokeWidth="1">
          {/* Left Paw */}
          <circle cx="6.5" cy="25.5" r="3" />
          <g fill={isFreezing ? '#7ab8db' : P} stroke="none">
            <circle cx="5"   cy="23" r="0.8" />
            <circle cx="6.5" cy="22.2" r="0.8" />
            <circle cx="8"   cy="23" r="0.8" />
          </g>
          
          {/* Right Paw */}
          <circle cx="14.5" cy="26.5" r="3" />
          <g fill={isFreezing ? '#7ab8db' : P} stroke="none">
            <circle cx="13"   cy="24" r="0.8" />
            <circle cx="14.5" cy="23.2" r="0.8" />
            <circle cx="16"   cy="24" r="0.8" />
          </g>
        </g>
      )}
    </svg>
  );
}
