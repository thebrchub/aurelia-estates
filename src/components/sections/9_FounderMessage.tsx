import { motion } from "framer-motion";

export default function FounderMessage() {
  return (
    <section className="relative w-full bg-luxury-900 py-24 md:py-32">
      
      {/* Background Apartment Render */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Apartment Interior"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-luxury-900/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          
          {/* Founder Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-lg lg:w-1/2"
          >
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 bg-luxury-800">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
                alt="Robert Downey"
                className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </div>
            {/* Geometric accent */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 border-b-2 border-l-2 border-luxury-gold/30" />
          </motion.div>

          {/* Quote & Identity */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="flex w-full flex-col justify-center lg:w-1/2"
          >
            <span className="mb-8 font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase">
              A Visionary's Note
            </span>
            
            <blockquote className="font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              "Every structure we create becomes part of a city's identity."
            </blockquote>
            
            <div className="mt-12">
              <p className="font-serif text-2xl text-white">Robert Downey</p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-luxury-gold uppercase">
                Founder & Chairman, Aurelia Estates
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}