// Custom cup asset imports
import cupMustard from '../assets/images/cup_mustard_1781969199458.jpg';
import cupBlack from '../assets/images/cup_black_1781969215707.jpg';
import cupMaroon from '../assets/images/cup_maroon_1781969232942.jpg';
import latteArt from '../assets/images/latte_art_1781969259436.jpg';

export interface CoffeeCupVariant {
  id: string;
  colorName: string;
  name: string;
  image: string;
  filterStyle?: string; // Optional CSS filter for turning the yellow cup bright orange!
  bgColor: string; // Tailwind background classification or text color representation if needed
  accentColor: string;
  description: string;
}

export const COFFEE_CUPS: CoffeeCupVariant[] = [
  {
    id: 'mustard',
    colorName: 'Mustard Golden',
    name: 'Sun-Kissed Golden Roast',
    image: cupMustard,
    bgColor: '#E6A23C',
    accentColor: '#B5822A',
    description: 'A smooth, bright, and vibrant medium roast with light citrus notes.',
  },
  {
    id: 'black',
    colorName: 'Midnight Black',
    name: 'Midnight Bold Espresso',
    image: cupBlack,
    bgColor: '#1E1E1E',
    accentColor: '#D9622B',
    description: 'An intense, robust dark coffee with deep cocoa undertones.',
  },
  {
    id: 'maroon',
    colorName: 'Crimson Wine Velvet',
    name: 'Velvet Crimson Reserve',
    image: cupMaroon,
    bgColor: '#5A1F26',
    accentColor: '#A7323E',
    description: 'A rich, elegant dark roast with velvet berry aroma and spiced highlights.',
  },
  {
    id: 'orange',
    colorName: 'Vibrant Orange Spice',
    name: 'Spiced Zest Citrus Bold',
    image: cupMustard, // Re-use mustard cup with a gorgeous hue rotation to render the bright orange variant
    filterStyle: 'hue-rotate(-22deg) saturate(2) brightness(0.9)',
    bgColor: '#D9622B',
    accentColor: '#2B1B12',
    description: 'A punchy, spicy coffee notes combined with dried orange peel essence.',
  }
];

export const LATTE_ART_IMAGE = latteArt;

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Classic Espresso',
    price: '$3.50',
    category: 'Hot Brew',
    image: 'https://images.unsplash.com/photo-1510701114205-05514de05f0d?auto=format&fit=crop&q=80&w=600',
    description: 'Rich, intense, double-shot extracted under high pressure with premium golden crema.',
  },
  {
    id: 'cappuccino',
    name: 'Velvet Cappuccino',
    price: '$4.20',
    category: 'Hot Brew',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600',
    description: 'Equal parts single espresso shot, warm steamed milk, and a thick, cloud-like foam crown.',
  },
  {
    id: 'latte',
    name: 'Signature Latte Art',
    price: '$4.50',
    category: 'Hot Brew',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    description: 'Fragrant espresso coupled with silky-smooth микро-foam milk, adorned with elegant patterns.',
  },
  {
    id: 'coldbrew',
    name: 'Slow-Drip Cold Brew',
    price: '$4.80',
    category: 'Cold Brew',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600',
    description: 'Pure single-origin grounds cold-infused over 18 hours for an exceptionally smooth, sweet sip.',
  }
];

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string; // The Lucide icon name to render
}

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: 'roasted',
    title: 'Freshly Roasted',
    description: 'Beeded, ground, and craft roasts made daily in small high-precision batches.',
    icon: 'Flame',
  },
  {
    id: 'natural',
    title: 'Natural Ingredients',
    description: 'Strictly 100% organic beans sourced ethically from direct-trade family micro-farms.',
    icon: 'Leaf',
  },
  {
    id: 'service',
    title: 'Fast Service',
    description: 'Dedicated professional baristas crafting your bespoke cup in under three minutes.',
    icon: 'Zap',
  },
  {
    id: 'cozy',
    title: 'Cozy Ambience',
    description: 'Warm cream-toned furniture, soothing acoustics, and standard quiet study pods.',
    icon: 'Coffee',
  }
];

export const STATS_ITEMS = [
  { value: '20+', label: 'Branches' },
  { value: '15k+', label: 'Customers' },
  { value: '78+', label: 'Products' },
];
