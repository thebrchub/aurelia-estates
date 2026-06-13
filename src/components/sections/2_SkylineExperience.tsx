import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const premiumProjects = [
  {
    id: "01",
    name: "Skyline One",
    location: "Financial District",
    price: "₹25 Cr Onwards",
    completion: "Q4 2026",
    image: "/skyline1.webp",
  },
  {
    id: "02",
    name: "The Grand Meridian",
    location: "Banjara Hills",
    price: "₹40 Cr Onwards",
    completion: "Q2 2027",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "03",
    name: "Azure Heights",
    location: "Jubilee Hills",
    price: "₹35 Cr Onwards",
    completion: "Q1 2028",
    image: "/skyline3.webp",
  },
];

export default function SkylineExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const sections = gsap.utils.toArray(".project-panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + slider.offsetWidth,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-luxury-900 text-luxury-paper">
      
      {/* Absolute Section Header 
        FIXED: Pushed down to top-32 to clear the Navbar, increased z-index, and added a subtle text-shadow.
      */}
      <div className="pointer-events-none absolute left-6 top-32 z-30 md:left-12 lg:left-24">
        <h2 className="font-serif text-3xl drop-shadow-lg md:text-5xl">Signature Collection</h2>
        <p className="mt-2 text-sm font-light uppercase tracking-widest text-luxury-gold-muted drop-shadow-md">
          Curated for the extraordinary
        </p>
      </div>

      {/* The Horizontal Slider Track */}
      <div ref={sliderRef} className="flex h-full w-[300vw]">
        {premiumProjects.map((project) => (
          <div 
            key={project.id} 
            // FIXED: Pure screen dimensions, no padding, no max-width constraints.
            className="project-panel relative flex h-screen w-screen flex-col justify-end overflow-hidden"
          >
            
            {/* Edge-to-Edge Project Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              
              {/* Top Gradient: Protects the global "Signature Collection" header from bright skies */}
              <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-luxury-900/80 to-transparent" />
              
              {/* Bottom Gradient: Protects the project details text */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-luxury-900/40 to-transparent" />
            </div>

            {/* Project Details Overlay */}
            <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col justify-between px-6 pb-24 md:flex-row md:items-end md:px-12 lg:px-24">
              <div>
                <span className="font-serif text-6xl text-luxury-gold/50 md:text-8xl lg:text-9xl">
                  {project.id}
                </span>
                <h3 className="mt-2 font-serif text-5xl text-white md:text-6xl lg:text-7xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm font-light uppercase tracking-widest text-luxury-paper/70">
                  {project.location}
                </p>
              </div>

              <div className="mt-12 flex flex-col gap-6 md:mt-0 md:items-end">
                <div className="flex gap-12 border-b border-white/20 pb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-luxury-gold-muted">Starting Price</p>
                    <p className="mt-1 font-serif text-2xl md:text-3xl">{project.price}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-luxury-gold-muted">Completion</p>
                    <p className="mt-1 font-serif text-2xl md:text-3xl">{project.completion}</p>
                  </div>
                </div>
                
                <button className="group mt-4 flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-luxury-gold">
                  Explore Masterplan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}