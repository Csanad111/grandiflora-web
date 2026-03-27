import { Camera, Mail } from "lucide-react";
import logoIcon from "../../assets/figma/059c293333deaf670cb9e3e54dcb31770524a2e7.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(243,237,247,0.77)] shadow-lg">
      <div className="w-full px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logoIcon} 
            alt="Grandiflora Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <h1 className="font-['DM_Serif_Display'] text-[#5e6e5e] text-2xl sm:text-3xl tracking-wide">
            GRANDIFLORA
          </h1>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://instagram.com/grandiflora_kertepites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5e6e5e] hover:text-[#758a76] transition-colors hover:scale-110 transition-transform duration-200"
            aria-label="Instagram"
          >
            <Camera size={24} className="sm:w-7 sm:h-7" />
          </a>
          <a
            href="mailto:kertepites@grandiflorakert.hu"
            className="text-[#5e6e5e] hover:text-[#758a76] transition-colors hover:scale-110 transition-transform duration-200"
            aria-label="Email"
          >
            <Mail size={24} className="sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
    </header>
  );
}