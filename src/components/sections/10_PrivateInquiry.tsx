import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const portfolios = [
  { value: "skyline", label: "Skyline One" },
  { value: "meridian", label: "The Grand Meridian" },
  { value: "azure", label: "Azure Heights" },
];

export default function PrivateInquiry() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close custom dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-luxury-900 py-24 md:py-32">
      
      {/* Deep Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Ambience"
          className="h-full w-full object-cover opacity-30 grayscale transition-transform duration-[10s] hover:scale-105"
        />
        {/* Double gradient for depth and text readability */}
        <div className="absolute inset-0 bg-luxury-900/80 backdrop-blur-[8px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-transparent to-luxury-900" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          
          {/* Left: The Concierge Promise */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center lg:w-5/12"
          >
            <div className="flex items-center gap-4 text-luxury-gold">
              <span className="h-[1px] w-8 bg-luxury-gold" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
                By Invitation Only
              </span>
            </div>
            
            <h2 className="mt-8 font-serif text-5xl leading-tight text-white md:text-7xl">
              Private<br />Consultation
            </h2>
            
            <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-luxury-paper/70 md:text-base">
              Membership at Aurelia Estates is reserved for those who value absolute privacy and world-class service. Our concierge team is ready to curate a bespoke viewing experience tailored to your precise vision.
            </p>
            
            <div className="mt-16 flex items-center gap-8 border-l border-luxury-gold/30 pl-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-luxury-gold">Direct Concierge</p>
                <p className="mt-2 font-serif text-2xl tracking-wide text-white">+91 99999 99999</p>
              </div>
            </div>
          </motion.div>

          {/* Right: The Glassmorphism VIP Application Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="relative w-full overflow-hidden border border-white/10 bg-luxury-800/40 p-8 backdrop-blur-xl md:p-14">
              
              {/* Subtle top golden glow line */}
              <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent" />

              <form className="flex w-full flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  {/* Floating Label Input - Name */}
                  <div className="group relative z-0 w-full">
                    <input 
                      type="text" 
                      id="name" 
                      className="peer block w-full appearance-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white focus:border-luxury-gold focus:outline-none focus:ring-0" 
                      placeholder=" " 
                      required 
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[10px] tracking-[0.2em] text-luxury-paper/50 uppercase transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-luxury-gold"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Floating Label Input - Email */}
                  <div className="group relative z-0 w-full">
                    <input 
                      type="email" 
                      id="email" 
                      className="peer block w-full appearance-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white focus:border-luxury-gold focus:outline-none focus:ring-0" 
                      placeholder=" " 
                      required 
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[10px] tracking-[0.2em] text-luxury-paper/50 uppercase transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-luxury-gold"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                {/* FIXED: 100% Custom React Dropdown */}
                <div className="group relative w-full z-50" ref={dropdownRef}>
                  
                  {/* Invisible input so form submissions still work correctly */}
                  <input type="hidden" name="portfolio" value={selectedPortfolio} required />

                  {/* Custom Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex w-full items-center justify-between border-b border-white/20 bg-transparent px-0 py-3 text-sm transition-all focus:border-luxury-gold focus:outline-none"
                  >
                    <span className={selectedPortfolio ? "text-white" : "text-white/30"}>
                      {selectedPortfolio ? portfolios.find(p => p.value === selectedPortfolio)?.label : "Select a Portfolio"}
                    </span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-luxury-gold" : "text-white/50 group-focus-within:text-luxury-gold"}`} />
                  </button>

                  <label className="absolute -top-3 left-0 origin-[0] scale-75 transform text-[10px] tracking-[0.2em] text-luxury-gold uppercase transition-all duration-300">
                    Area of Interest
                  </label>

                  {/* Custom Dropdown Menu with Framer Motion */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-full border border-white/10 bg-luxury-900/95 shadow-2xl backdrop-blur-xl"
                      >
                        {portfolios.map((portfolio) => (
                          <button
                            key={portfolio.value}
                            type="button"
                            onClick={() => {
                              setSelectedPortfolio(portfolio.value);
                              setIsDropdownOpen(false);
                            }}
                            className={`flex w-full items-center px-6 py-4 text-sm transition-colors hover:bg-luxury-gold/10 hover:text-luxury-gold ${
                              selectedPortfolio === portfolio.value ? "bg-luxury-gold/5 text-luxury-gold" : "text-white/70"
                            }`}
                          >
                            {portfolio.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Floating Label Textarea */}
                <div className="group relative z-0 w-full">
                  <textarea 
                    id="details" 
                    rows={3}
                    className="peer block w-full appearance-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white focus:border-luxury-gold focus:outline-none focus:ring-0" 
                    placeholder=" " 
                  />
                  <label 
                    htmlFor="details" 
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[10px] tracking-[0.2em] text-luxury-paper/50 uppercase transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-luxury-gold"
                  >
                    Request Details (Optional)
                  </label>
                </div>

                {/* Submit Button */}
                <button className="group mt-6 flex w-full items-center justify-center gap-4 bg-white/5 px-8 py-5 transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-900 border border-white/10 hover:border-luxury-gold">
                  <span className="text-[10px] font-medium tracking-[0.3em] uppercase">Request Invitation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </button>
                
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}