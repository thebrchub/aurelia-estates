import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function CinematicHero() {
  const { x, y } = useMousePosition();

  // Subtle parallax calculations
  const xMove = typeof window !== "undefined" ? (x / window.innerWidth - 0.5) * 20 : 0;
  const yMove = typeof window !== "undefined" ? (y / window.innerHeight - 0.5) * 20 : 0;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-luxury-900 text-luxury-paper">
      
      {/* Background Image with Mouse Parallax */}
      <motion.div
        className="absolute inset-0 z-0 scale-110"
        animate={{ x: xMove * -1, y: yMove * -1 }}
        transition={{ type: "tween", ease: "easeOut", duration: 1.5 }}
      >
        <img
          src="/hero.png"
          alt="Aurelia Estates Aerial"
          className="h-full w-full object-cover"
        />
        {/* Complex Gradient Overlays for Text Readability & Mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-900/95 via-luxury-900/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-transparent to-luxury-900/40 z-10" />
      </motion.div>

      {/* Main Content (Pushed tightly to the left edge for wide screens) */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1800px] flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-24">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pt-16 md:pt-24 lg:max-w-5xl xl:max-w-6xl"
        >
          {/* Eyebrow */}
          <span className="mb-6 block font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase">
            Crafting Landmarks
          </span>
          
          {/* Massive Typography */}
          <h1 className="font-serif text-5xl leading-[1.1] md:text-6xl lg:text-7xl xl:text-[6.5rem]">
            <span className="block text-white">WE DON'T BUILD</span>
            <span className="block text-white">BUILDINGS.</span>
            <span className="block text-luxury-gold mt-1">WE BUILD LEGACIES.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-luxury-paper/80 md:text-lg">
            Aurelia Estates creates iconic developments that inspire generations and shape the future of luxury living.
          </p>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="group flex w-fit items-center gap-4 border border-luxury-gold/50 px-8 py-4 transition-all duration-300 hover:border-luxury-gold hover:bg-luxury-gold/10">
              <span className="text-[10px] font-medium tracking-[0.2em] text-luxury-gold uppercase transition-colors group-hover:text-luxury-gold">
                Explore Our Projects
              </span>
              <ArrowUpRight className="h-4 w-4 text-luxury-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-luxury-paper/40 uppercase">
          Scroll
        </span>
        <motion.div 
          animate={{ height: ["0%", "100%", "0%"], y: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-luxury-gold to-transparent"
        />
      </motion.div>

    </section>
  );
}