import { Coffee } from 'lucide-react';

export default function Navbar() {
  const navLinks = ['Home', 'About', 'Menu', 'Contact'];

  return (
    <nav 
      id="main-navbar"
      className="sticky top-0 z-50 bg-[#F5F3EF] border-b border-gray-200 backdrop-blur-md opacity-95 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        {/* Left Side: Minimal line-icon logo */}
        <a 
          href="#home"
          id="nav-logo-link"
          className="flex items-center text-[#2B1B12] hover:text-[#D9622B] transition-colors focus:outline-none"
          aria-label="Coffee Lounge Home"
        >
          <Coffee id="nav-logo-icon" className="w-6 h-6 stroke-[1.5]" />
        </a>

        {/* Right Side: Plain text nav links, evenly spaced */}
        <div id="nav-links-container" className="flex items-center space-x-8 sm:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              id={`nav-link-${link.toLowerCase()}`}
              className="text-[14px] sm:text-[15px] font-normal text-gray-700 hover:text-[#2B1B12] transition-colors duration-200 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D9622B] hover:after:w-full hover:after:transition-all hover:after:duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
