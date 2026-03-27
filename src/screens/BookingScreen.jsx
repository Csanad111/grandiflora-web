import React, { useState } from 'react';
import GlassEffectLayers from '../components/ui/GlassEffectLayers';
import Header from '../components/ui/Header';

const SERVICES = [
  'Fűnyírás',
  'Fametszés',
  'Járda / Térkő építés',
  'Felmérés / Egyéb'
];

export default function BookingScreen({ onBack }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Generate a simple calendar for the current month
  const today = new Date();
  const currentMonthIndex = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonthIndex, 1).getDay();
  // Adjust so Monday is 0
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];

  const handleBookingSubmit = () => {
    if (!selectedDate) {
      alert("Kérlek válassz egy dátumot!");
      return;
    }
    setIsSubmitting(true);
    // Simulate API call to the backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="absolute inset-0 z-20 flex flex-col bg-transparent animate-in zoom-in-95 duration-500 justify-center items-center px-6">
        <GlassEffectLayers />
        <div className="relative z-10 flex flex-col items-center justify-center bg-white/40 backdrop-blur-xl p-8 rounded-[30px] border border-white/40 shadow-xl text-center">
          <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-[0px_8px_24px_rgba(94,110,94,0.4)]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 className="text-primary text-[24px] font-display mb-3">Sikeres kérés!</h2>
          <p className="text-black/70 font-body text-[15px] mb-8 leading-relaxed">
            Rögzítettük a kérésedet: <strong>{selectedService}</strong> ({selectedDate} napra).
            Hamarosan felvesszük veled a kapcsolatot a részletek pontosítása miatt!
          </p>
          <button
            onClick={onBack}
            className="w-full h-[55px] bg-primary text-white rounded-[25px] font-display text-[18px] tracking-wide shadow-lg active:scale-95 transition-all"
          >
            Vissza a főoldalra
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-20 flex flex-col bg-transparent animate-in slide-in-from-right duration-300">
      <Header onBack={onBack} showProfile={false} />

      <div className="mt-[6px] px-[35px] mb-4 text-center">
        <h1 className="text-primary text-[30px] font-display leading-tight mb-2 tracking-wide">
          Időpontfoglalás
        </h1>
        <p className="text-black text-[15px] font-body leading-tight">
          Válassz szolgáltatást és dátumot!
        </p>
      </div>

      <div className="flex-1 px-[22px] overflow-y-auto no-scrollbar pb-[100px] flex flex-col gap-6">
        
        {/* Services Selection */}
        <div className="relative group rounded-[24px]">
          <GlassEffectLayers />
          <div className="relative z-10 p-5 flex flex-col gap-3">
            <h3 className="text-primary text-[16px] font-display font-medium mb-1">Miben segíthetünk?</h3>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map(service => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-2 rounded-full text-[14px] font-body transition-all duration-300 ${
                    selectedService === service 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white/40 text-primary border border-primary/20 hover:bg-white/60'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar UI */}
        <div className="relative group rounded-[24px]">
          <GlassEffectLayers />
          <div className="relative z-10 p-5 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-primary text-[16px] font-display font-medium">Válassz dátumot</h3>
              <span className="text-primary/70 font-body text-[14px] font-semibold">{monthNames[currentMonthIndex]} {currentYear}</span>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center mb-2 text-[12px] font-body text-primary/60 font-medium">
              <div>H</div><div>K</div><div>Sze</div><div>Cs</div><div>P</div><div>Szo</div><div>V</div>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {/* Empty slots for start of month */}
              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={`empty-${i}`} className="h-10" />
              ))}
              
              {/* Days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayStr = `${currentYear}-${currentMonthIndex + 1}-${i + 1}`;
                const isSelected = selectedDate === dayStr;
                const isPast = new Date(currentYear, currentMonthIndex, i + 1) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                
                return (
                  <button
                    key={i}
                    disabled={isPast}
                    onClick={() => setSelectedDate(dayStr)}
                    className={`h-10 w-full flex items-center justify-center rounded-full text-[15px] font-body transition-all
                      ${isPast ? 'text-black/20 cursor-not-allowed' : 'hover:bg-primary/10 text-black/80'}
                      ${isSelected ? 'bg-primary text-white font-bold shadow-md hover:bg-primary' : ''}
                    `}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Notes/Address */}
        <div className="relative group rounded-[24px]">
          <GlassEffectLayers />
          <div className="relative z-10 p-5 flex flex-col gap-3">
            <h3 className="text-primary text-[16px] font-display font-medium">Cím és megjegyzés</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Kerület, utca, egyedi kérések..."
              className="w-full bg-white/40 border border-primary/20 rounded-[16px] p-4 text-[15px] font-body text-black placeholder:text-black/40 focus:outline-none focus:border-primary/50 focus:bg-white/60 transition-all min-h-[100px] resize-none"
            />
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="absolute bottom-[20px] left-[22px] right-[22px] z-30">
        <button
          onClick={handleBookingSubmit}
          disabled={isSubmitting || !selectedDate}
          className={`w-full h-[60px] rounded-[30px] flex items-center justify-center gap-2 font-display text-[18px] tracking-wide transition-all shadow-lg
            ${(!selectedDate) ? 'bg-black/20 text-white/50 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark active:scale-95'}
          `}
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            'Kérés leadása'
          )}
        </button>
      </div>

    </div>
  );
}
