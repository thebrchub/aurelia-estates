import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FIXED: Added distinct mobileTop and mobileLeft coordinates to account for image cropping on phones.
const features = [
  { 
    id: "tower-a", name: "Tower A", coords: "N 42° 18' W 71° 05'", desc: "Ultra-luxury 4 & 5 BHK residences with private elevators.", 
    top: "35%", left: "26%", mobileTop: "35%", mobileLeft: "12%" 
  },
  { 
    id: "tower-b", name: "Tower B", coords: "N 42° 19' W 71° 06'", desc: "Premium 3 & 4 BHK apartments with panoramic city views.", 
    top: "25%", left: "72%", mobileTop: "25%", mobileLeft: "88%" 
  },
  { 
    id: "club-house", name: "The Zenith Club", coords: "N 42° 17' W 71° 04'", desc: "50,000 sq ft of world-class amenities and wellness.", 
    top: "55%", left: "48%", mobileTop: "55%", mobileLeft: "50%" 
  },
  { 
    id: "lake-view", name: "Tranquility Lake", coords: "N 42° 16' W 71° 08'", desc: "A pristine man-made lake surrounded by jogging tracks.", 
    top: "80%", left: "65%", mobileTop: "80%", mobileLeft: "75%" 
  },
  { 
    id: "sky-garden", name: "Sky Garden", coords: "N 42° 20' W 71° 03'", desc: "Elevated botanical gardens connecting the twin towers.", 
    top: "28%", left: "48%", mobileTop: "28%", mobileLeft: "50%" 
  },
];

export default function InteractiveMasterplan() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section id="masterplan" className="relative w-full bg-luxury-900 py-16 text-luxury-paper md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">The Masterplan</h2>
          <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-luxury-paper/60">
            Select a sector below to explore the meticulously engineered layout of our 150-acre integrated township.
          </p>
        </div>

        {/* Masterplan Dashboard Layout */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          
          {/* Interactive Map Area (Left) */}
          <div className="relative w-full min-h-[400px] md:min-h-[500px] overflow-hidden border border-white/10 bg-luxury-800 lg:w-2/3 lg:min-h-[600px]">
            
            <img 
              src="/masterplan.webp" 
              alt="Architectural Site Masterplan"
              className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-[3s] hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-900/60 via-transparent to-luxury-900/80" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Architectural Crosshair Hotspots */}
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              
              return (
                <div
                  key={feature.id}
                  // FIXED: We pass our coordinates to CSS variables, and use Tailwind to dynamically switch them on md: breakpoint!
                  style={{
                    '--t-desk': feature.top,
                    '--l-desk': feature.left,
                    '--t-mob': feature.mobileTop,
                    '--l-mob': feature.mobileLeft,
                  } as React.CSSProperties}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-crosshair top-[var(--t-mob)] left-[var(--l-mob)] md:top-[var(--t-desk)] md:left-[var(--l-desk)]"
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  {/* Precision Target Node */}
                  <div className="relative flex h-10 w-10 md:h-16 md:w-16 items-center justify-center">
                    
                    <div className={`absolute h-full w-[1px] transition-colors duration-300 ${isActive ? 'bg-luxury-gold' : 'bg-white/20'}`} />
                    <div className={`absolute h-[1px] w-full transition-colors duration-300 ${isActive ? 'bg-luxury-gold' : 'bg-white/20'}`} />
                    
                    <div className={`relative z-10 h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-all duration-300 ${isActive ? 'bg-luxury-gold shadow-[0_0_15px_#D4AF37] scale-150' : 'bg-white'}`} />
                    
                    {isActive && (
                      <motion.div 
                        animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border border-luxury-gold"
                      />
                    )}
                  </div>

                  {/* Glassmorphism Telemetry Tooltip */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 30 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="pointer-events-none absolute left-1/2 top-1/2 w-48 md:w-56 -translate-y-1/2 border border-luxury-gold/30 bg-luxury-900/80 p-4 md:p-5 backdrop-blur-xl"
                      >
                        <p className="font-mono text-[10px] tracking-[0.2em] text-luxury-gold-muted uppercase">{feature.coords}</p>
                        <p className="mt-1 font-serif text-xl md:text-2xl text-white">{feature.name}</p>
                        <p className="mt-2 text-[10px] md:text-xs font-light leading-relaxed text-luxury-paper/70">{feature.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Interactive Telemetry Menu (Right) */}
          <div className="flex w-full flex-col justify-center lg:w-1/3">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] text-luxury-gold uppercase">Sector Navigation</span>
              <span className="animate-pulse h-1.5 w-1.5 rounded-full bg-luxury-gold" />
            </div>
            
            <div className="mt-4 flex flex-col">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`group cursor-pointer border-l-2 py-4 md:py-5 pl-4 md:pl-6 transition-all duration-500 ${
                    activeFeature === feature.id 
                      ? 'border-luxury-gold bg-luxury-800/40 translate-x-2 md:translate-x-4' 
                      : 'border-transparent hover:border-white/20 hover:bg-luxury-800/10'
                  }`}
                >
                  <span className={`block font-mono text-[10px] tracking-widest transition-colors duration-300 ${
                    activeFeature === feature.id ? 'text-luxury-gold' : 'text-white/30'
                  }`}>
                    [0{index + 1}]
                  </span>
                  <h3 className={`mt-1 font-serif text-2xl md:text-3xl transition-colors duration-300 ${
                    activeFeature === feature.id ? 'text-white' : 'text-white/60 group-hover:text-white'
                  }`}>
                    {feature.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}