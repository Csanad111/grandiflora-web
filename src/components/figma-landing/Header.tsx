import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoIcon from "../../assets/figma/059c293333deaf670cb9e3e54dcb31770524a2e7.png";

export function Header({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-[#5e6e5e]/10">
      <div className="w-full px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none"
        >
          <img 
            src={logoIcon} 
            alt="Grandiflora Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <h1 className="font-['DM_Serif_Display'] text-[#5e6e5e] text-2xl sm:text-3xl tracking-wide">
            GRANDIFLORA
          </h1>
        </button>

        {/* 2-line Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-8 h-8 flex flex-col justify-center items-center gap-[6px] z-50 focus:outline-none group"
          aria-label="Menu"
        >
          <div className={`w-6 h-[2px] bg-[#5e6e5e] rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <div className={`w-6 h-[2px] bg-[#5e6e5e] rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left font-['DM_Serif_Display'] text-[#5e6e5e] text-xl py-2 border-b border-[#5e6e5e]/10 hover:text-[#758a76] hover:pl-2 transition-all duration-200"
              >
                Szolgáltatások
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  if (onNavigate) onNavigate('before-after');
                }}
                className="text-left font-['DM_Serif_Display'] text-[#5e6e5e] text-xl py-2 border-b border-[#5e6e5e]/10 hover:text-[#758a76] hover:pl-2 transition-all duration-200"
              >
                Referencia
              </button>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="text-left font-['DM_Serif_Display'] text-[#5e6e5e] text-xl py-2 hover:text-[#758a76] hover:pl-2 transition-all duration-200"
              >
                Kapcsolat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}