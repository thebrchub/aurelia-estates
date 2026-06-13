import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black pt-24 text-luxury-paper border-t border-white/10">
      
      {/* Architectural Background & Depth Gradients */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-luxury-900/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-8 md:px-12 lg:px-24">
        
        {/* Top Hero Section: The Glowing Monumental Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center border-b border-white/10 pb-20"
        >
          <div className="relative">
            {/* Elegant ambient glow behind the logo */}
            <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/10 blur-[50px] transition-opacity duration-700 hover:opacity-100" />
            
            <img 
              src="/logo.webp" 
              alt="Aurelia Estates" 
              className="relative z-10 h-30 md:h-32 lg:h-80 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            />
          </div>
        </motion.div>

        {/* Middle Section: Symmetrical 3-Column Layout */}
        <div className="grid grid-cols-1 gap-16 py-20 lg:grid-cols-3 lg:gap-12">
          
          {/* Left Column: Directory */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase mb-8">
              Directory
            </p>
            <ul className="flex flex-col gap-5 text-sm font-light text-luxury-paper/60">
              <li>
                <a href="#collection" className="group flex items-center justify-center lg:justify-start gap-3 transition-colors hover:text-white">
                  <span className="h-[1px] w-0 bg-luxury-gold transition-all duration-300 group-hover:w-6" />
                  Signature Collection
                </a>
              </li>
              <li>
                <a href="#masterplan" className="group flex items-center justify-center lg:justify-start gap-3 transition-colors hover:text-white">
                  <span className="h-[1px] w-0 bg-luxury-gold transition-all duration-300 group-hover:w-6" />
                  The Masterplan
                </a>
              </li>
              <li>
                <a href="#amenities" className="group flex items-center justify-center lg:justify-start gap-3 transition-colors hover:text-white">
                  <span className="h-[1px] w-0 bg-luxury-gold transition-all duration-300 group-hover:w-6" />
                  Amenities 360°
                </a>
              </li>
              <li>
                <a href="#vision" className="group flex items-center justify-center lg:justify-start gap-3 transition-colors hover:text-white">
                  <span className="h-[1px] w-0 bg-luxury-gold transition-all duration-300 group-hover:w-6" />
                  Founder's Note
                </a>
              </li>
            </ul>
          </div>

          {/* Center Column: The Inner Circle (Newsletter) */}
          <div className="flex flex-col items-center text-center px-4">
            <span className="mb-6 font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase">
              The Inner Circle
            </span>
            <h3 className="font-serif text-2xl text-white md:text-3xl leading-tight">
              Gain exclusive access to off-market private listings.
            </h3>
            
            <form 
              className="mt-10 flex w-full max-w-sm items-center border-b border-white/20 pb-4 transition-colors focus-within:border-luxury-gold group" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent text-center font-light text-white placeholder-white/30 focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all hover:border-luxury-gold hover:bg-luxury-gold hover:text-luxury-900 group-focus-within:border-luxury-gold"
              >
                <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-0.5" />
              </button>
            </form>
          </div>

          {/* Right Column: Concierge */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <p className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase mb-8">
              Concierge
            </p>
            <ul className="flex flex-col items-center lg:items-end gap-5 text-sm font-light text-luxury-paper/60">
              <li className="leading-relaxed">
                Level 42, The Obsidian<br/>
                Financial District, Hyderabad
              </li>
              <li className="mt-2">
                <a href="mailto:private@aurelia.com" className="group flex items-center gap-2 border-b border-transparent pb-1 transition-colors hover:border-luxury-gold hover:text-luxury-gold">
                  private@aurelia.com <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </li>
              <li>
                <a href="tel:+918000000000" className="group flex items-center gap-2 border-b border-transparent pb-1 transition-colors hover:border-luxury-gold hover:text-luxury-gold">
                  +91 8000 000 000 <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Small Bottom Bar Overlay with BRC HUB LLP Highlight */}
        <div className="relative z-20 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 text-[9px] tracking-[0.25em] text-luxury-paper/40 uppercase md:flex-row">
          
          <p className="flex-1 text-center md:text-left">© 2026 AURELIA ESTATES.</p>
          
          {/* Highlighted Agency Signature */}
          <div className="flex-1 flex justify-center">
            <p className="flex items-center gap-2">
              Crafted by{" "}
              <a 
                href="https://www.brchub.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1 text-luxury-gold transition-colors hover:text-white"
              >
                BRC HUB LLP
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </p>
          </div>

          <div className="flex flex-1 justify-center gap-8 md:justify-end">
            <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
          </div>

        </div>

      </div>
    </footer>
  );
}