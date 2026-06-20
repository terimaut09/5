import { Coffee, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="contact" 
      className="bg-[#2B1B12] text-[#F5F3EF] pt-16 pb-12 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Info and Brand */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="w-6 h-6 text-[#D9622B]" />
              <span className="font-display text-lg uppercase tracking-wider text-[#F5F3EF]">
                Coffee Lounge
              </span>
            </div>
            <p className="text-[#F5F3EF]/70 text-[13px] leading-relaxed max-w-sm">
              An offline shelter designed for slow roasts, peaceful studies, and aromatic memories. Drop by and let us brew your customized blend today.
            </p>
          </div>

          {/* Column 2: Plain Text Contact Information */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-display text-xs uppercase tracking-widest text-[#D9622B] mb-5">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-[13px] text-[#F5F3EF]/80">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#D9622B] shrink-0" />
                <span>124 Roasting Boulevard, Specialty Quarter, NY</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D9622B] shrink-0" />
                <span>+1 (212) 555-8901</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D9622B] shrink-0" />
                <a 
                  href="mailto:hello@coffeelounge.com" 
                  className="hover:text-white transition-colors"
                >
                  hello@coffeelounge.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Slogan */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-display text-xs uppercase tracking-widest text-[#D9622B] mb-5">
              Connect With Us
            </h4>
            <p className="text-[13px] text-[#F5F3EF]/70 mb-5 leading-relaxed">
              We update our single-origin bean batches and guest roasters weekly. Follow our digital notes.
            </p>
            <div className="flex items-center space-x-5">
              <a 
                href="#instagram" 
                className="w-8 h-8 rounded-none border border-white/10 hover:border-[#D9622B] hover:text-[#D9622B] flex items-center justify-center transition-colors text-[#F5F3EF]/80"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#twitter" 
                className="w-8 h-8 rounded-none border border-white/10 hover:border-[#D9622B] hover:text-[#D9622B] flex items-center justify-center transition-colors text-[#F5F3EF]/80"
                aria-label="Twitter profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#facebook" 
                className="w-8 h-8 rounded-none border border-white/10 hover:border-[#D9622B] hover:text-[#D9622B] flex items-center justify-center transition-colors text-[#F5F3EF]/80"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright and signature */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#F5F3EF]/50 tracking-wider">
          <p>© {currentYear} COFFEE LOUNGE. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 sm:mt-0 font-sans uppercase">
            FLAT, SIMPLE, ESTABLISHED DESIGN
          </p>
        </div>

      </div>
    </footer>
  );
}
