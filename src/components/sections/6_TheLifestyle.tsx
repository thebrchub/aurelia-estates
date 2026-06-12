import { motion } from "framer-motion";

const lifestyles = [
  {
    id: "01",
    title: "Wellness",
    subtitle: "A Sanctuary for the Senses",
    description: "Curated spaces designed to rejuvenate mind, body, and soul. Featuring temperature-controlled hydrotherapy pools and Zen meditation pavilions.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Luxury",
    subtitle: "Uncompromising Elegance",
    description: "Every finish, every texture, carefully selected to reflect your stature. Italian marble, bespoke fittings, and ceiling heights that breathe grandiosity.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Community",
    subtitle: "The Elite Circle",
    description: "Belong to an exclusive network of visionaries and leaders. Our members-only clubhouses host curated events, art galas, and private symposiums.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Nature",
    subtitle: "Urban Ecology",
    description: "Over 60% open green spaces. We seamlessly weave indigenous flora, Miyawaki forests, and cascading water features into your daily living experience.",
    image: "https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Technology",
    subtitle: "Invisible Intelligence",
    description: "Next-generation smart home integration, AI-driven climate control, and biometric security systems that anticipate your needs before you do.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function TheLifestyle() {
  return (
    <section className="relative w-full bg-luxury-900">
      {lifestyles.map((lifestyle, index) => (
        <div 
          key={lifestyle.id} 
          className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
          // We use z-index to ensure they stack properly over each other
          style={{ zIndex: index }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 h-full w-full">
            <img 
              src={lifestyle.image} 
              alt={lifestyle.title}
              className="h-full w-full object-cover grayscale-[30%] transition-transform duration-[2s] hover:scale-105 hover:grayscale-0"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-900/90 via-luxury-900/40 to-luxury-900/10" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex h-full w-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 text-luxury-gold">
                <span className="font-serif text-2xl">{lifestyle.id}</span>
                <span className="h-[1px] w-12 bg-luxury-gold" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase">{lifestyle.subtitle}</span>
              </div>
              
              <h2 className="mt-6 font-serif text-6xl text-white md:text-8xl lg:text-9xl">
                {lifestyle.title}
              </h2>
              
              <p className="mt-8 text-sm font-light leading-loose text-luxury-paper/80 md:text-lg">
                {lifestyle.description}
              </p>
            </motion.div>
          </div>

        </div>
      ))}
    </section>
  );
}