import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COFFEE_CUPS, STATS_ITEMS } from '../data/coffeeData';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up the color-cycle interval for our stop-motion takeaway cup swap
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % COFFEE_CUPS.length);
    }, 3000); // Swaps every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const currentCup = COFFEE_CUPS[currentIndex];

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-5rem)] bg-[#F5F3EF] px-6 sm:px-10 py-12 md:py-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Top Section Wrapper - houses both the decorative stats row (right) and layouts nicely */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Stats Row: Top-Right of Hero, right-aligned */}
        <motion.div 
          id="hero-stats-row"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute -top-4 sm:-top-8 md:-top-12 right-0 flex items-center space-x-8 sm:space-x-12 text-center"
        >
          {STATS_ITEMS.map((stat, idx) => (
            <div key={idx} id={`stat-block-${idx}`} className="flex flex-col items-center">
              <span id={`stat-value-${idx}`} className="text-2xl sm:text-3xl font-display font-bold text-[#2B1B12]">
                {stat.value}
              </span>
              <span id={`stat-label-${idx}`} className="text-[11px] sm:text-[12px] text-gray-500 uppercase tracking-widest mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Core Hero Grid: Text on LEFT, Coffee Cup on RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center mt-12 sm:mt-16 md:mt-10">
          
          {/* Left Column: Typography, Stamp, Subheader, and Rectangular Button */}
          <div id="hero-left-content" className="flex flex-col items-start pr-0 md:pr-6">
            
            {/* Vintage Round Stamp / Established Seal Logo */}
            <motion.div 
              id="vintage-seal-container"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <svg 
                id="vintage-badge-svg"
                className="w-20 h-20 text-gray-400 select-none animate-[spin_40s_linear_infinite]" 
                viewBox="0 0 100 100"
              >
                <path
                  id="badge-path-curve"
                  className="fill-none"
                  d="M 20,50 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                />
                {/* Circular outer outline */}
                <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.75" />
                
                {/* Embedded vintage text */}
                <text className="font-sans text-[7.5px] font-semibold text-gray-500 letter-spacing-[1px] uppercase fill-current">
                  <textPath href="#badge-path-curve" startOffset="0%">
                    • ESTD 2026 • COFFEE LOUNGE • ORIGINAL BLEND
                  </textPath>
                </text>
                
                {/* Center visual: minimalist outline representation */}
                <path d="M 45 48 Q 50 43 55 48 C 55 52 45 52 45 48 Z" fill="none" stroke="gray" strokeWidth="1.25" />
                <path d="M 42 52 H 58 Q 58 56 50 56 Q 42 56 42 52 Z M 48 58 H 52" fill="none" stroke="gray" strokeWidth="1.25" />
              </svg>
            </motion.div>

            {/* Main Header: Stacked tightly, Extra-Bold condensed typography */}
            <motion.h1 
              id="hero-main-title"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-display text-[64px] sm:text-[80px] lg:text-[96px] text-[#2B1B12] leading-[0.85] tracking-tight uppercase select-none flex flex-col"
            >
              <span>COFFEE</span>
              <span className="mt-1">LOUNGE</span>
            </motion.h1>

            {/* Doubleline Subheading directly below */}
            <motion.div
              id="hero-sub-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 font-display text-[22px] sm:text-[26px] text-[#2B1B12] leading-[1.1] tracking-tight text-left"
            >
              <p>Rich & Aromatic</p>
              <p className="opacity-80">Lounge Coffee</p>
            </motion.div>

            {/* Slogan */}
            <motion.p
              id="hero-brief-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-4 text-sm text-gray-600 max-w-sm"
            >
              Crafting premium visual memories, slow-extracted artisan blends, and authentic roasts. Tap to discover our menu.
            </motion.p>

            {/* Flat burnt-orange rectangular button */}
            <motion.a
              href="#menu"
              id="hero-cta-btn"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 bg-[#D9622B] text-white font-bold tracking-wider uppercase text-xs px-10 py-4.5 inline-block border border-transparent shadow-md hover:bg-[#c05120] hover:shadow-lg transition-all duration-200"
            >
              Click Here
            </motion.a>
          </div>

          {/* Right Column: Stop-motion color product cup variant cycling */}
          <div id="hero-right-visual" className="relative flex justify-center items-center h-[380px] sm:h-[480px] md:h-[550px]">
            {/* Soft backdrop shadow beneath the cup */}
            <div 
              id="coffee-cup-shadow-ellipse"
              className="absolute bottom-2 sm:bottom-6 w-52 sm:w-64 h-8 bg-black/10 rounded-full blur-xl scale-x-125 scale-y-75 transform translate-y-2"
            />

            {/* Container featuring precise -12deg rotation angle to simulate a slightly tilted cup */}
            <div 
              id="tilted-cup-holder"
              className="relative w-72 sm:w-96 h-72 sm:w-96 select-none cursor-pointer transform -rotate-12 hover:-rotate-6 transition-transform duration-700 ease-out"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCup.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="w-full h-full flex items-center justify-center relative"
                >
                  <img
                    id={`hero-coffee-cup-img-${currentCup.id}`}
                    src={currentCup.image}
                    alt={currentCup.name}
                    referrerPolicy="no-referrer"
                    style={{ filter: currentCup.filterStyle || 'none' }}
                    className="w-full h-full object-contain drop-shadow-[5px_15px_30px_rgba(0,0,0,0.06)]"
                  />
                  
                  {/* Miniature absolute variant color tags overlay */}
                  <div className="absolute right-4 bottom-12 bg-white/90 backdrop-blur-sm border border-gray-100 py-1.5 px-3 shadow-sm text-[10px] font-sans font-semibold text-gray-500 uppercase tracking-widest rounded-none">
                    Current: <span className="text-[#2B1B12] font-bold">{currentCup.colorName}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
