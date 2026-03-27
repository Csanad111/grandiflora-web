import { motion } from "motion/react";
import { LiquidGlassCard } from "./LiquidGlassCard";
import { 
  Hammer, 
  PenTool, 
  TreeDeciduous, 
  Droplets, 
  Recycle, 
  Sprout 
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Kertépítés",
    description: "Komplex kertépítési munkák a tervezéstől a megvalósításig. Terasszal, járdával és díszkertekkel.",
    image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ1NTY5MzV8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    icon: PenTool,
    title: "Kerttervezés",
    description: "Egyedi kerttervek készítése modern 3D vizualizációval és szakmai tanácsadással.",
    image: "https://images.unsplash.com/photo-1617850687395-620757feb1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzc0NTU2OTM2fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    icon: TreeDeciduous,
    title: "Faápolás",
    description: "Szakszerű faápolás, metszés és fakivágás minden fafajta esetében biztonsággal.",
    image: "https://images.unsplash.com/photo-1765064520245-2baac5e82689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmVlJTIwY2FyZSUyMHBydW5pbmd8ZW58MXx8fHwxNzc0NTU2OTM1fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    icon: Droplets,
    title: "Öntözéstechnika",
    description: "Modern automata öntözőrendszerek tervezése és telepítése energiatakarékosan.",
    image: "https://images.unsplash.com/photo-1760727467149-4cec6fb5b34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBpcnJpZ2F0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc3NDU1NjkzNnww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    icon: Recycle,
    title: "Ágdarálás",
    description: "Professzionális ágdarálási szolgáltatás környezetbarát komposztálással.",
    image: "https://images.unsplash.com/photo-1728881652469-56b43240dce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBtYWludGVuYW5jZSUyMGxhbmRzY2FwaW5nfGVufDF8fHx8MTc3NDU0ODMwM3ww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    icon: Sprout,
    title: "Kertfenntartás",
    description: "Rendszeres kertgondozás és -karbantartás egész évben testre szabott ütemezéssel.",
    image: "https://images.unsplash.com/photo-1728881652469-56b43240dce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBtYWludGVuYW5jZSUyMGxhbmRzY2FwaW5nfGVufDF8fHx8MTc3NDU0ODMwM3ww&ixlib=rb-4.1.0&q=80&w=400"
  }
];

interface ServicesGridProps {
  onServiceClick: () => void;
}

export function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white/60 to-white/90">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-['DM_Serif_Display'] text-[#5e6e5e] text-4xl sm:text-5xl mb-4">
            Szolgáltatásaink
          </h2>
          <p className="text-[#5e6e5e] text-base sm:text-lg px-4">
            Komplex kertészeti szolgáltatások szakértő csapattal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LiquidGlassCard className="h-full">
                <div className="relative h-full p-6 sm:p-8 backdrop-blur-[40px] bg-white/20 border border-white/40 rounded-[24px] shadow-inner hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-[24px] overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex p-3 sm:p-4 bg-[#5e6e5e] rounded-full">
                      <service.icon size={28} className="text-white sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="font-['DM_Serif_Display'] text-[#5e6e5e] text-xl sm:text-2xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#5e6e5e] text-sm sm:text-base mb-6 leading-relaxed min-h-[4.5rem]">
                      {service.description}
                    </p>
                    <button
                      onClick={onServiceClick}
                      className="bg-[#f3edf7] hover:bg-[#5e6e5e] hover:text-white text-[#5e6e5e] px-5 sm:px-6 py-2.5 sm:py-3 rounded-[20px] text-sm sm:text-base font-medium transition-all duration-300 inline-flex items-center gap-2"
                    >
                      Érdekel
                    </button>
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}