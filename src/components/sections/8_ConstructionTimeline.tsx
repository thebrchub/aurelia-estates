import { motion } from "framer-motion";

const metrics = [
  { stage: "Foundation & Substructure", progress: 100, status: "Completed", completionDate: "Nov 2025" },
  { stage: "Superstructure & Core Walls", progress: 85, status: "In Progress", completionDate: "Mar 2026" },
  { stage: "Enclosure & Facade Glazing", progress: 50, status: "In Progress", completionDate: "Aug 2026" },
  { stage: "Interior Fit-Outs & Handover", progress: 10, status: "Scheduled", completionDate: "Dec 2026" },
];

export default function ConstructionTimeline() {
  return (
    // Reduced padding so it flows better from the previous sections
    <section className="relative w-full overflow-hidden bg-luxury-900 py-24 text-luxury-paper md:py-32">
      
      {/* Expanded to our global 1400px width */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          
          {/* Left Side: Visual "Live Feed" Anchor */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square w-full overflow-hidden bg-luxury-800 md:aspect-[4/5]"
          >
            {/* High-end architectural construction image */}
            {/* High-end architectural construction image */}
<img 
  src="/timeline.webp" 
  alt="Construction Telemetry"
  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[4s] hover:scale-105"
/>
            
            {/* Tech/Blueprint Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-900/90 via-transparent to-luxury-900/40" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Fake "Live Camera" UI overlay */}
            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="font-mono text-[10px] tracking-widest text-white uppercase">Site Cam 04: Active</span>
            </div>

            <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest text-white/50 uppercase">
              <p>Lat: 17.4326° N</p>
              <p>Lon: 78.3375° E</p>
            </div>
          </motion.div>

          {/* Right Side: The Data */}
          <div className="flex flex-col justify-center">
            
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl tracking-tight">Development Status</h2>
              <p className="mt-4 text-xs font-medium tracking-[0.25em] text-luxury-gold-muted uppercase">
                Real-time execution matrix
              </p>
              <p className="mt-6 text-sm font-light leading-relaxed text-luxury-paper/70">
                Transparency is the cornerstone of our legacy. Track the physical manifestation of Aurelia Estates through our verified on-site telemetry feeds.
              </p>
            </div>

            {/* Progress Bars (Letting them breathe without a confining box) */}
            <div className="flex flex-col gap-10">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col gap-4">
                  
                  {/* Labels & Status Meta */}
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <span className="font-mono text-[10px] text-luxury-gold/60 mr-3 tracking-widest">
                        [PHASE 0{index + 1}]
                      </span>
                      <span className="font-serif text-2xl text-white md:text-3xl">
                        {metric.stage}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest text-luxury-paper/60 uppercase">
                      <span>{metric.completionDate}</span>
                      <span className={`h-1.5 w-1.5 rounded-full ${metric.progress === 100 ? 'bg-luxury-gold' : 'bg-white animate-pulse'}`} />
                      <span className={metric.progress === 100 ? 'text-luxury-gold' : 'text-white'}>
                        {metric.status}
                      </span>
                    </div>
                  </div>

                  {/* Refined Ultra-Premium Progress Track */}
                  <div className="relative mt-2 h-[2px] w-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 }}
                      className="relative h-full bg-luxury-gold"
                    >
                      {/* Glowing leading edge dot */}
                      <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-luxury-gold shadow-[0_0_10px_#D4AF37]" />
                    </motion.div>
                  </div>
                  
                  {/* Digital overlay text showing percentage directly below the bar */}
                  <div className="flex justify-end">
                    <span className="font-mono text-[10px] text-white/40 tracking-widest">
                      {metric.progress}% COMPLETE
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}