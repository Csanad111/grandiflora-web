import React from 'react';
import { Header } from "../components/figma-landing/Header";
import { HeroSection } from "../components/figma-landing/HeroSection";
import { ServicesGrid } from "../components/figma-landing/ServicesGrid";
import { ContactForm } from "../components/figma-landing/ContactForm";
import { Footer } from "../components/figma-landing/Footer";

export default function LandingScreen({ onNavigate }) {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-transparent via-white/60 to-white">
      <Header />
      <main className="w-full">
        {/* We map the Hero CTA to 'login' screen so users can enter the app */}
        <HeroSection onCtaClick={() => onNavigate('login')} />
        <ServicesGrid onServiceClick={scrollToForm} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
