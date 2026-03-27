import React, { useState } from 'react';
import { Header } from "../components/figma-landing/Header";
import { HeroSection } from "../components/figma-landing/HeroSection";
import { ServicesGrid } from "../components/figma-landing/ServicesGrid";
import { ContactForm } from "../components/figma-landing/ContactForm";
import { Footer } from "../components/figma-landing/Footer";

export default function LandingScreen({ onNavigate }) {
  const [prefilledService, setPrefilledService] = useState("");

  const scrollToForm = (serviceName = "") => {
    if (typeof serviceName === "string" && serviceName) {
      setPrefilledService(serviceName);
    }
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-transparent via-white/60 to-white">
      <Header onNavigate={onNavigate} />
      <main className="w-full">
        {/* We map the Hero CTA directly to the form as requested */}
        <HeroSection onCtaClick={() => scrollToForm("Kertépítés")} />
        <ServicesGrid onServiceClick={scrollToForm} />
        <ContactForm prefilledService={prefilledService} />
      </main>
      <Footer />
    </div>
  );
}
