import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "The Obsidian",
    category: "Ultra-Luxury Residences",
    description: "A striking silhouette against the twilight sky. The Obsidian features private infinity pools, smart-home integration, and a dedicated helipad. Redefining vertical living.",
    image: "/Obsidian.png",
    stats: { size: "4,500 Sq Ft", type: "4 & 5 BHK" }
  },
  {
    id: "02",
    name: "Lumina Commercial",
    category: "Grade A Office Spaces",
    description: "Where business meets prestige. Lumina offers column-free floor plates, platinum LEED certification, and an exclusive CEO lounge overlooking the botanical gardens.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    stats: { size: "2.5M Sq Ft", type: "Commercial" }
  },
  {
    id: "03",
    name: "Aurelia Estates",
    category: "Integrated Township",
    description: "A city within a city. Spanning over 150 acres, featuring a 9-hole golf course, international school, and wellness retreats designed by world-renowned architects.",
    image: "/township.png",
    stats: { size: "150 Acres", type: "Mixed Use" }
  }
];

export default function SignatureProjects() {
  return (
    <section className="bg-luxury-900 py-24 text-luxury-paper md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
        
        {/* Section Header - Gap reduced significantly */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">Architectural Digest</h2>
          <p className="mt-4 text-xs font-medium tracking-[0.2em] text-luxury-gold-muted uppercase">
            Spaces that inspire
          </p>
        </div>

        {/* Reimagined Editorial Overlap Layout */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id} 
                className="relative flex w-full flex-col lg:block"
              >
                
                {/* Massive Image Container */}
                <div className={`w-full lg:w-[70%] ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                  <div className="group relative aspect-[4/3] w-full overflow-hidden bg-luxury-800">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-luxury-900/10 transition-colors duration-500 group-hover:bg-transparent" />
                  </div>
                </div>

                {/* Floating Text Card (Overlaps the image on desktop) */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative z-10 mx-auto mt-[-10%] w-[90%] bg-luxury-800 p-8 shadow-2xl border border-white/5 backdrop-blur-sm lg:absolute lg:top-1/2 lg:mt-0 lg:w-[45%] lg:-translate-y-1/2 lg:p-12 xl:p-16 ${
                    isEven ? 'lg:right-0' : 'lg:left-0'
                  }`}
                >
                  <span className="font-serif text-xl text-luxury-gold md:text-2xl">{project.id}</span>
                  <h3 className="mt-2 font-serif text-3xl text-white md:text-5xl">{project.name}</h3>
                  <p className="mt-2 text-[10px] font-medium tracking-[0.2em] text-luxury-paper/50 uppercase">
                    {project.category}
                  </p>
                  
                  <p className="mt-6 text-sm font-light leading-relaxed text-luxury-paper/80 md:mt-8 md:text-base md:leading-loose">
                    {project.description}
                  </p>

                  <div className="mt-8 flex gap-8 border-t border-white/10 pt-6 md:mt-12 md:gap-12 md:pt-8">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-luxury-gold-muted uppercase">Scale</p>
                      <p className="mt-1 font-serif text-lg text-white md:text-xl">{project.stats.size}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-luxury-gold-muted uppercase">Typology</p>
                      <p className="mt-1 font-serif text-lg text-white md:text-xl">{project.stats.type}</p>
                    </div>
                  </div>

                  <button className="group mt-10 flex w-fit items-center gap-4 border-b border-luxury-gold pb-2 transition-all hover:text-luxury-gold">
                    <span className="text-[10px] font-medium tracking-[0.15em] uppercase md:text-xs">View Gallery</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}