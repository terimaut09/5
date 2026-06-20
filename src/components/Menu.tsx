import { motion } from 'motion/react';
import { MENU_ITEMS } from '../data/coffeeData';

export default function Menu() {
  return (
    <section 
      id="menu" 
      className="bg-[#F5F3EF] py-20 sm:py-28 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div id="menu-header" className="text-center md:text-left mb-16 max-w-xl">
          <h2 className="font-display text-xs uppercase tracking-widest text-[#B5664A] mb-2">Artisanal Choice</h2>
          <h3 className="font-display text-4xl sm:text-5xl text-[#2B1B12] tracking-tight leading-none uppercase">
            Hand-Prepped Brews
          </h3>
          <p className="text-gray-600 text-[14px] mt-4">
            Each cup is custom grounded and masterfully crafted to highlight the bean's authentic natural notes. Pick your desired morning ritual.
          </p>
        </div>

        {/* Menu Grid - 4 Columns */}
        <div id="menu-items-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`menu-card-${item.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
            >
              {/* Product Card Image Wrapper */}
              <div id={`menu-img-wrap-${item.id}`} className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <img
                  id={`menu-item-img-${item.id}`}
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Category badge Tag */}
                <span className="absolute top-3 left-3 bg-[#F5F3EF]/90 backdrop-blur-sm text-[10px] uppercase font-display font-semibold tracking-wider px-2 py-1 text-gray-700">
                  {item.category}
                </span>
                
                {/* Visual hover overlay strip */}
                <div className="absolute inset-0 bg-[#2B1B12]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product specifications and price info */}
              <div id={`menu-card-details-${item.id}`} className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 id={`menu-item-name-${item.id}`} className="font-display text-sm sm:text-base text-[#2B1B12] uppercase tracking-tight leading-tight">
                      {item.name}
                    </h4>
                    <span id={`menu-item-price-${item.id}`} className="font-display text-sm sm:text-base text-[#D9622B]">
                      {item.price}
                    </span>
                  </div>
                  
                  <p id={`menu-item-desc-${item.id}`} className="mt-3 text-gray-500 text-[12.5px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Micro Action link */}
                <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[11px] font-sans text-gray-400 uppercase tracking-widest group-hover:text-[#D9622B] transition-colors">
                    Order at Counter
                  </span>
                  <svg 
                    className="w-3.5 h-3.5 text-gray-350 transform group-hover:translate-x-1 group-hover:text-[#D9622B] transition-all" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
