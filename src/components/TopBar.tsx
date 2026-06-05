import { Phone, Clock, Instagram, Facebook } from "lucide-react";

const TopBar = () => (
  <div className="bg-planvida-brown text-white py-2 text-sm font-body">
    <div className="container mx-auto px-4 flex flex-row items-center justify-between gap-2">
      <div className="flex items-center gap-3 sm:gap-6">
        <a href="tel:+5594992961300" className="flex items-center gap-1.5 hover:text-planvida-gold transition-colors duration-200 cursor-pointer">
          <Phone className="h-3.5 w-3.5" />
          <span className="text-xs sm:text-sm">(94) 99296-1300</span>
        </a>
        <span className="hidden md:flex items-center gap-1.5 text-white/70">
          <Clock className="h-3.5 w-3.5" />
          <span>Seg–Sex 8h–18h &nbsp;|&nbsp; Sáb 8h–12h</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://instagram.com/clinicaplanvida" target="_blank" rel="noopener noreferrer"
          className="hover:text-planvida-gold transition-colors duration-200 cursor-pointer" aria-label="Instagram">
          <Instagram className="h-4 w-4" />
        </a>
        <a href="https://facebook.com/clinicaplanvida" target="_blank" rel="noopener noreferrer"
          className="hover:text-planvida-gold transition-colors duration-200 cursor-pointer" aria-label="Facebook">
          <Facebook className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
