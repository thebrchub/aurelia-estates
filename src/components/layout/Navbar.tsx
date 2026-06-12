import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      // Removed all border classes from the main nav tag
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-700 ${
        isScrolled 
          ? "bg-luxury-900/90 py-5 backdrop-blur-xl shadow-2xl" 
          : "bg-gradient-to-b from-luxury-900/80 to-transparent py-8"
      }`}
    >
      {/* 
        The Bulletproof Border: 
        An absolute div that just fades in and out. No layout shifts, no black lines. 
      */}
      <div 
        className={`absolute bottom-0 left-0 h-[1px] w-full bg-white/10 transition-opacity duration-700 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`} 
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Desktop Layout (Symmetrical Center Logo) */}
        <div className="hidden lg:grid grid-cols-3 items-center">
          
          {/* Left Links */}
          <div className="flex items-center gap-12">
            {["Portfolio", "Vision"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="group relative text-xs font-medium tracking-[0.2em] text-luxury-paper/80 uppercase transition-colors hover:text-luxury-gold"
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-luxury-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <div className="cursor-pointer font-serif text-4xl tracking-widest text-white transition-transform duration-700 hover:scale-105">
              AURELIA<span className="text-luxury-gold">.</span>
            </div>
          </div>

          {/* Right Links & CTA */}
          <div className="flex items-center justify-end gap-12">
            <a 
              href="#lifestyle"
              className="group relative text-xs font-medium tracking-[0.2em] text-luxury-paper/80 uppercase transition-colors hover:text-luxury-gold"
            >
              Lifestyle
              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-luxury-gold transition-all duration-500 group-hover:w-full" />
            </a>
            
            <button className="relative overflow-hidden border border-white/20 bg-white/5 px-8 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-md transition-all duration-500 hover:border-luxury-gold hover:bg-luxury-gold hover:text-luxury-900">
              Inquire Now
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Layout */}
        <div className="flex items-center justify-between lg:hidden">
          <div className="cursor-pointer font-serif text-3xl tracking-widest text-white">
            AURELIA<span className="text-luxury-gold">.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="hidden sm:block border border-luxury-gold px-6 py-2.5 text-xs font-medium tracking-[0.2em] text-luxury-gold uppercase transition-colors hover:bg-luxury-gold hover:text-luxury-900">
              Inquire
            </button>
            <button className="group flex items-center gap-3 text-white transition-colors hover:text-luxury-gold">
              <span className="hidden text-xs font-medium tracking-widest uppercase sm:block">Menu</span>
              <Menu className="h-8 w-8 transition-transform group-hover:scale-110" strokeWidth={1} />
            </button>
          </div>
        </div>

      </div>
    </motion.nav>
  );
}