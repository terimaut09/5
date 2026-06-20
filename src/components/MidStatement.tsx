import { motion } from 'motion/react';
import cupBlack from '../assets/images/cup_black_1781969215707.jpg';
import latteArt from '../assets/images/latte_art_1781969259436.jpg';

export default function MidStatement() {
  return (
    <section 
      id="about" 
      className="bg-[#F5F3EF] py-20 sm:py-36 px-6 sm:px-10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative flex items-center justify-center min-h-[350px] sm:min-h-[500px]">
        
        {/* Underlay / Background Text Lines - Heavy condensed rust-colored text */}
        <div className="w-full text-left uppercase font-display leading-[0.85] tracking-tighter text-[#B5664A] text-[40px] sm:text-[76px] md:text-[96px] lg:text-[110px] select-none flex flex-col gap-2">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.18, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="whitespace-nowrap"
          >
            USE PREMIUM
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.18, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="whitespace-nowrap self-start"
          >
            FRESH BEANS AND FRESHLY
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.18, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.4 }}
            className="whitespace-nowrap self-end sm:self-auto"
          >
            GROUND SPICES
          </motion.div>
          
        </div>

        {/* Foreground Overlay Container: Centered product photo + floating latte art badges */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-80 sm:w-96 md:w-[450px] h-full flex items-center justify-center pointer-events-auto">
            
            {/* Center: Black Coffee Cup (Same style as hero black cup) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, rotate: -2, transition: { duration: 0.4 } }}
              className="w-56 sm:w-72 md:w-80 h-auto cursor-pointer drop-shadow-[10px_25px_40px_rgba(0,0,0,0.12)] relative"
            >
              <img
                id="mid-statement-cup-img"
                src={cupBlack}
                alt="Midnight Black Coffee Cup Product Photo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Float badge 1: Upper-Right Latte Art Pill (oval shape, dark border) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -40, rotate: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
              whileHover={{ y: -8, rotate: 18 }}
              className="absolute top-8 sm:top-14 right-0 sm:right-6 w-20 sm:w-28 md:w-32 aspect-[3/4] border-2 border-[#2B1B12] rounded-full overflow-hidden shadow-md cursor-pointer select-none"
            >
              <img
                id="latte-badge-ur-img"
                src={latteArt}
                alt="Upper Right Latte Foam Art"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover saturate-[1.1] contrast-[1.05]"
              />
            </motion.div>

            {/* Float badge 2: Lower-Left Latte Art Pill (oval shape, dark border) */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40, rotate: -15 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: -15 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
              whileHover={{ y: 8, rotate: -10 }}
              className="absolute bottom-8 sm:bottom-14 left-0 sm:left-6 w-20 sm:w-28 md:w-32 aspect-[3/4] border-2 border-[#2B1B12] rounded-full overflow-hidden shadow-md cursor-pointer select-none"
            >
              <img
                id="latte-badge-ll-img"
                src={latteArt}
                alt="Lower Left Latte Foam Art"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover saturate-[1.1] contrast-[1.05]"
              />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
