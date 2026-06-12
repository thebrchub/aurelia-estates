import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Waves, 
  Briefcase, 
  Dumbbell, 
  MonitorPlay, 
  Flower2, 
  Sofa,
  ArrowRight,
  TreePine,
  ShieldCheck,
  ConciergeBell,
  Car
} from "lucide-react";

// Enriched data structure containing the background imagery and dynamic stats
const amenities = [
  { 
    id: 1, 
    name: "Sky Lounge", 
    icon: Sofa, 
    angle: 0, // Top
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    desc: "An exclusive rooftop sanctuary offering vintage spirits and panoramic views of the financial district.",
    stats: [{ label: "ELEVATION", value: "Level 55" }, { label: "CAPACITY", value: "40 Guests" }, { label: "ACCESS", value: "Residents Only" }]
  },
  { 
    id: 2, 
    name: "Infinity Pool", 
    icon: Waves, 
    angle: 60, // Top Right
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
    desc: "An edge-to-horizon aquatic sanctuary suspended above the city skyline.",
    stats: [{ label: "POOL LENGTH", value: "50 M" }, { label: "TEMPERATURE", value: "32°C" }, { label: "VIEWS", value: "Panoramic" }]
  },
  { 
    id: 3, 
    name: "Business Center", 
    icon: Briefcase, 
    angle: 120, // Bottom Right
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    desc: "Boardrooms and private acoustic pods equipped with enterprise-grade telepresence technology.",
    stats: [{ label: "MEETING ROOMS", value: "6 Suites" }, { label: "INTERNET", value: "10 Gbps" }, { label: "SUPPORT", value: "IT Concierge" }]
  },
  { 
    id: 4, 
    name: "Private Theatre", 
    icon: MonitorPlay, 
    angle: 180, // Bottom
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
    desc: "Acoustically treated screening room with Dolby Atmos surround and 4K laser projection.",
    stats: [{ label: "SCREEN SIZE", value: "200 Inch" }, { label: "SEATING", value: "12 Recliners" }, { label: "AUDIO", value: "Dolby Atmos" }]
  },
  { 
    id: 5, 
    name: "Sports Arena", 
    icon: Dumbbell, 
    angle: 240, // Bottom Left
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    desc: "Olympic-grade training facilities, indoor squash courts, and a climate-controlled sports hall.",
    stats: [{ label: "FLOOR AREA", value: "15,000 Sq Ft" }, { label: "EQUIPMENT", value: "Technogym" }, { label: "TRAINERS", value: "On-Call" }]
  },
  { 
    id: 6, 
    name: "Wellness Spa", 
    icon: Flower2, 
    angle: 300, // Top Left
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    desc: "Rejuvenate mind and body with temperature-controlled hydrotherapy pools and massage pavilions.",
    stats: [{ label: "SAUNAS", value: "Dry & Steam" }, { label: "TREATMENTS", value: "Bespoke" }, { label: "THERAPISTS", value: "Certified" }]
  },
];

export default function Amenities360() {
  const [activeId, setActiveId] = useState(2);
  const activeAmenity = amenities.find((a) => a.id === activeId) || amenities[1];

  // Auto-play transition logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = amenities.findIndex((a) => a.id === currentId);
        const nextIndex = (currentIndex + 1) % amenities.length;
        return amenities[nextIndex].id;
      });
    }, 5000); 

    return () => clearInterval(timer);
  }, [activeId]);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-luxury-900 py-24 text-luxury-paper">
      
      {/* Background ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-[150px]" />

      {/* Section Header */}
      <div className="relative z-10 mb-12 text-center md:mb-20">
        <p className="mb-4 text-[10px] font-medium tracking-[0.3em] text-luxury-gold uppercase">
          Amenity Collection
        </p>
        <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">360° Lifestyle Experience</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-luxury-paper/60">
          Every detail crafted for a life beyond compare. Explore a world of exclusive amenities designed to elevate your everyday.
        </p>
      </div>

      {/* The Interactive 360 Explorer */}
      <div className="relative z-10 flex aspect-square w-[95vw] max-w-[800px] items-center justify-center">
        
        {/* Outer thin orbit ring */}
        <div className="absolute inset-0 rounded-full border border-white/5" />

        {/* FIXED: The Slow Rotating Track container */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {/* The Orbiting Nodes */}
          {amenities.map((item) => {
            const isActive = item.id === activeId;
            
            return (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2 h-full w-[1px] origin-center -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${item.angle}deg)` }}
              >
                {/* FIXED: The Connecting Line - precisely bridges the 17.5% gap between the outer node and the 65% inner hub */}
                <div className={`absolute top-0 left-1/2 z-0 w-[1px] h-[17.5%] -translate-x-1/2 transition-colors duration-500 ${isActive ? 'bg-luxury-gold' : 'bg-transparent'}`} />

                {/* The Node Click Target */}
                <div 
                  className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setActiveId(item.id)}
                >
                  {/* Dynamic Counter-Rotation to cancel the track spin */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Static Counter-Rotation to cancel the item angle */}
                    <div style={{ transform: `rotate(-${item.angle}deg)` }}>
                      
                      {/* FIXED: Removed flex-col layout. The icon container is now the true center point. */}
                      <div className={`relative flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-500 md:h-20 md:w-20 ${
                        isActive 
                          ? 'border-luxury-gold bg-luxury-800 text-luxury-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]' 
                          : 'border-white/10 bg-luxury-900 text-white/50 hover:border-white/30 hover:text-white'
                      }`}>
                        <item.icon className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.2} />
                        
                        {/* Glowing active ring indicator */}
                        {isActive && (
                          <motion.div 
                            layoutId="activeRing"
                            className="absolute -inset-2 rounded-full border border-luxury-gold/40"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}

                        {/* FIXED: Text placed absolutely so it doesn't affect the node's geometric center */}
                        <span className={`absolute top-full mt-4 w-max max-w-[120px] text-center text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-luxury-paper' : 'text-luxury-paper/40'}`}>
                          {item.name}
                        </span>
                      </div>

                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Central Display Hub */}
        <div className="relative z-20 flex h-[65%] w-[65%] overflow-hidden rounded-full border border-luxury-gold/30 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAmenity.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full"
            >
              <img 
                src={activeAmenity.image} 
                alt={activeAmenity.name} 
                className="h-full w-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-luxury-900/60 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-8 text-center md:p-12">
                <span className="mb-2 text-[8px] font-medium tracking-[0.25em] text-luxury-gold uppercase md:text-[10px]">
                  Signature Experience
                </span>
                <h3 className="font-serif text-3xl text-white md:text-4xl">
                  {activeAmenity.name}
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-[10px] font-light leading-relaxed text-luxury-paper/80 md:text-xs">
                  {activeAmenity.desc}
                </p>

                <div className="mt-6 flex w-full max-w-sm justify-between border-t border-white/10 pt-6">
                  {activeAmenity.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span className="font-serif text-sm text-white md:text-base">{stat.value}</span>
                      <span className="text-[8px] tracking-widest text-luxury-gold-muted uppercase md:text-[9px]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="group mt-8 flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 transition-colors hover:border-luxury-gold hover:text-luxury-gold">
                  <span className="text-[9px] tracking-[0.2em] uppercase">Explore This Experience</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Global Telemetry Bottom Bar */}
      <div className="relative z-10 mt-24 flex w-full max-w-[1200px] flex-wrap justify-between gap-8 rounded-lg border border-white/5 bg-luxury-800/50 p-6 backdrop-blur-md md:p-8 lg:mt-32">
        <div className="flex items-center gap-4">
          <TreePine className="h-6 w-6 text-luxury-gold" strokeWidth={1.5} />
          <div>
            <p className="font-serif text-lg text-white md:text-xl">4.2 Acres</p>
            <p className="text-[10px] tracking-widest text-luxury-paper/50 uppercase">Landscape</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <ShieldCheck className="h-6 w-6 text-luxury-gold" strokeWidth={1.5} />
          <div>
            <p className="font-serif text-lg text-white md:text-xl">24/7</p>
            <p className="text-[10px] tracking-widest text-luxury-paper/50 uppercase">Security</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <ConciergeBell className="h-6 w-6 text-luxury-gold" strokeWidth={1.5} />
          <div>
            <p className="font-serif text-lg text-white md:text-xl">Concierge</p>
            <p className="text-[10px] tracking-widest text-luxury-paper/50 uppercase">Services</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Car className="h-6 w-6 text-luxury-gold" strokeWidth={1.5} />
          <div>
            <p className="font-serif text-lg text-white md:text-xl">600+</p>
            <p className="text-[10px] tracking-widest text-luxury-paper/50 uppercase">Parking Spaces</p>
          </div>
        </div>
      </div>

    </section>
  );
}