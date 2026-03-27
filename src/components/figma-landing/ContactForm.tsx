import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LiquidGlassCard } from "./LiquidGlassCard";
import { CheckCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in real app would send to backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f3edf7]">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-['DM_Serif_Display'] text-[#5e6e5e] text-4xl sm:text-5xl mb-4">
            Ingyenes Felmérés
          </h2>
          <p className="text-[#5e6e5e] text-base sm:text-lg px-4">
            Töltse ki az űrlapot, és munkatársunk 24 órán belül felveszi Önnel a kapcsolatot!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <LiquidGlassCard>
            <div className="relative p-6 sm:p-12 backdrop-blur-[40px] bg-white/20 border border-white/40 rounded-[24px] shadow-inner">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#5e6e5e] font-medium mb-2 text-sm sm:text-base"
                  >
                    Név
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-[16px] bg-white/50 border border-white/60 backdrop-blur-md text-[#5e6e5e] placeholder-[#5e6e5e]/50 focus:outline-none focus:ring-2 focus:ring-[#5e6e5e] focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Teljes név"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#5e6e5e] font-medium mb-2 text-sm sm:text-base"
                  >
                    Telefonszám
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-[16px] bg-white/50 border border-white/60 backdrop-blur-md text-[#5e6e5e] placeholder-[#5e6e5e]/50 focus:outline-none focus:ring-2 focus:ring-[#5e6e5e] focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="+36 20 123 4567"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#5e6e5e] font-medium mb-2 text-sm sm:text-base"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-[16px] bg-white/50 border border-white/60 backdrop-blur-md text-[#5e6e5e] placeholder-[#5e6e5e]/50 focus:outline-none focus:ring-2 focus:ring-[#5e6e5e] focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#5e6e5e] hover:bg-[#758a76] text-white px-6 sm:px-8 py-4 sm:py-5 rounded-[20px] font-['DM_Serif_Display'] text-lg sm:text-xl shadow-lg transition-all duration-300"
                >
                  Időpontot foglalok
                </motion.button>
              </form>
            </div>
          </LiquidGlassCard>
        </motion.div>

        {/* Success Modal */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white p-8 sm:p-12 rounded-[24px] shadow-2xl max-w-md text-center w-full"
              >
                <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
                <h3 className="font-['DM_Serif_Display'] text-[#5e6e5e] text-2xl sm:text-3xl mb-3">
                  Köszönjük!
                </h3>
                <p className="text-[#5e6e5e] text-base sm:text-lg">
                  Jelentkezését fogadtuk. Hamarosan felvesszük Önnel a kapcsolatot!
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}