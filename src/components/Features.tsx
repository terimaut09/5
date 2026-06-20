import React, { ComponentType } from 'react';
import { Flame, Leaf, Zap, Coffee } from 'lucide-react';
import { FEATURE_ITEMS } from '../data/coffeeData';

interface IconMap {
  [key: string]: ComponentType<{ className?: string }>;
}

const iconMap: IconMap = {
  Flame,
  Leaf,
  Zap,
  Coffee,
};

export default function Features() {
  return (
    <section 
      id="about-features" 
      className="bg-[#F5F3EF] py-16 sm:py-24 px-6 sm:px-10 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10">
          {FEATURE_ITEMS.map((item) => {
            const IconComponent = iconMap[item.icon] || Coffee;
            return (
              <div 
                key={item.id} 
                id={`feature-col-${item.id}`} 
                className="flex flex-col items-start text-left group"
              >
                {/* Icon Wrapper: Elegant custom stamp boundary */}
                <div 
                  id={`feature-icon-wrapper-${item.id}`}
                  className="w-12 h-12 flex items-center justify-center bg-white border border-[#2B1B12]/10 text-[#D9622B] group-hover:bg-[#D9622B] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm rounded-none mb-6"
                >
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Text Content */}
                <h3 
                  id={`feature-title-${item.id}`}
                  className="font-display text-base sm:text-lg text-[#2B1B12] uppercase tracking-tight mb-2"
                >
                  {item.title}
                </h3>
                
                <p 
                  id={`feature-desc-${item.id}`}
                  className="text-gray-600 text-[13.5px] leading-relaxed max-w-xs"
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
