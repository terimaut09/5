import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MidStatement from './components/MidStatement';
import ProductCarousel from './components/ProductCarousel';
import Features from './components/Features';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="coffee-lounge-app" className="bg-[#F5F3EF] min-h-screen text-[#2B1B12] font-sans selection:bg-[#D9622B]/20 selection:text-[#2B1B12]">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main content body */}
      <main id="lounge-sections">
        {/* 2. Hero Section & Stats Overlay */}
        <Hero />

        {/* 3. Mid-Page Slogan Statement Section (Overlapping black cup) */}
        <MidStatement />

        {/* 4. Infinite looping Product Carousel Marquee */}
        <ProductCarousel />

        {/* 5. Core USP Feature columns */}
        <Features />

        {/* 6. Coffee Menu list with Prices */}
        <Menu />
      </main>

      {/* 7. Footer Contact band (Only dark-colored zone) */}
      <Footer />
    </div>
  );
}
