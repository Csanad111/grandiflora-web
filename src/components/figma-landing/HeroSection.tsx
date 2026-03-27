import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroImage from "../../assets/figma/da1e1303e39f76543e08ebb3ed1c8adef6f18295.png";
import flowerIcon from "../../assets/figma/059c293333deaf670cb9e3e54dcb31770524a2e7.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Garden Design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Flower Icon */}
          <img
            src={flowerIcon}
            alt="Grandiflora"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-8 md:mb-10"
          />
          
          {/* Tagline */}
          <h1 className="font-['DM_Serif_Display'] text-[#5e6e5e] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl">
            Egyedi kertek szakértőktől –<br className="hidden sm:block" /> tervezéstől gondozásig.
          </h1>
        </motion.div>

        <motion.button
          onClick={onCtaClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-[#5e6e5e] hover:bg-[#758a76] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-[20px] font-['DM_Serif_Display'] text-lg sm:text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
        >
          Kérjen ingyenes felmérést!
          <ArrowDown size={24} className="animate-bounce" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#5e6e5e]/50 to-transparent" />
      </motion.div>
    </section>
  );
}