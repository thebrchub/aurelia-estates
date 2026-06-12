import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  { prefix: "", value: 18, suffix: "", label: "Projects Delivered" },
  { prefix: "", value: 12, suffix: "M+", label: "Sq Ft Developed" },
  { prefix: "₹", value: 3200, suffix: " Cr", label: "Project Value" },
  { prefix: "", value: 25, suffix: "+", label: "Years Experience" },
];

export default function NumbersThatMatter() {
  return (
    <section className="relative w-full overflow-hidden bg-luxury-900 py-32 text-luxury-paper md:py-48">
      
      {/* Subtle background divider */}
      <div className="absolute left-0 top-0 w-full border-t border-white/10" />

      {/* FIXED: Expanded to max-w-[1400px] to perfectly align with the Navbar and Footer */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
        
        {/* Section Heading - Scaled up typography to match the wider layout */}
        <div className="mb-24">
          <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">The Legacy in Numbers</h2>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-luxury-paper/60 md:text-base">
            A quarter-century of uncompromising quality. We don't just build properties; we engineer landmarks that redefine the city's skyline.
          </p>
        </div>

        {/* Stats Grid - Increased gaps massively so it spreads beautifully across the screen */}
        <div className="grid w-full grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 xl:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col border-l border-luxury-gold/30 pl-8 transition-colors duration-500 hover:border-luxury-gold">
              
              {/* Scaled the text back up to 7xl because we have the room for it now */}
              <div className="flex items-baseline whitespace-nowrap font-serif text-5xl text-white md:text-6xl xl:text-7xl">
                <span className="mr-2 text-luxury-gold">{stat.prefix}</span>
                <AnimatedCounter value={stat.value} />
                <span className="ml-2 text-luxury-gold">{stat.suffix}</span>
              </div>
              
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-luxury-paper/70">
                {stat.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}