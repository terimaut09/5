import { COFFEE_CUPS } from '../data/coffeeData';

export default function ProductCarousel() {
  // To create a seamless infinite loop, we duplicate the items multiple times.
  // We use 3 copy layers so that even on extra wide screens, there is plenty of content flowing.
  const marqueeItems = [...COFFEE_CUPS, ...COFFEE_CUPS, ...COFFEE_CUPS, ...COFFEE_CUPS];

  // Specific tilt patterns to give each cup a unique, slightly tilted, authentic studio product feel
  const tilts = [
    '-rotate-6 hover:rotate-0',
    'rotate-6 hover:rotate-0',
    '-rotate-12 hover:rotate-0',
    'rotate-12 hover:rotate-0',
  ];

  return (
    <section 
      id="menu-marquee" 
      className="bg-[#F5F3EF] py-16 overflow-hidden border-t border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left">
        <h2 className="font-display text-xs uppercase tracking-widest text-[#B5664A]">Our Varieties</h2>
        <p className="font-display text-2xl sm:text-3xl text-[#2B1B12] tracking-tight">THE COLOR OF TASTE</p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden select-none py-10">
        {/* Soft edge gradients to mask the entry/exit points beautifully */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F5F3EF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F5F3EF] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-8 sm:gap-16">
          {marqueeItems.map((cup, index) => {
            const tiltClass = tilts[index % tilts.length];
            return (
              <div
                key={`${cup.id}-${index}`}
                id={`carousel-cup-item-${cup.id}-${index}`}
                className="w-44 sm:w-56 md:w-64 flex flex-col items-center justify-center shrink-0 transition-all duration-500 ease-out py-4"
              >
                {/* Floating Shadow Under Cup */}
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <div className="absolute bottom-1 w-24 sm:w-32 h-4 sm:h-6 bg-black/5 rounded-full blur-lg scale-x-125" />
                  
                  {/* Cup with custom tilt class and dynamic orange filter */}
                  <img
                    id={`carousel-cup-img-${cup.id}-${index}`}
                    src={cup.image}
                    alt={cup.name}
                    referrerPolicy="no-referrer"
                    style={{ filter: cup.filterStyle || 'none' }}
                    className={`w-full h-full object-contain drop-shadow-md transition-transform duration-500 ease-out transform ${tiltClass}`}
                  />
                </div>

                {/* Subtitle Label - keeping it floating directly on cream */}
                <span className="mt-4 font-display text-[11px] uppercase tracking-wider text-gray-500">
                  {cup.colorName}
                </span>
                <span className="font-sans text-[13px] font-bold text-[#2B1B12] tracking-tight mt-0.5">
                  {cup.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
