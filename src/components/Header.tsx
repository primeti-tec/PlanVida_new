import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início",        href: "/",               isRoute: true },
  { label: "Quem Somos",   href: "/quem-somos",      isRoute: true },
  { label: "Especialidades",href: "/especialidades",  isRoute: true },
  { label: "Nossa Equipe",  href: "/especialistas",   isRoute: true },
  { label: "Exames",        href: "/exames",          isRoute: true },
  { label: "Parcerias",     href: "/parcerias",       isRoute: true },
  { label: "Contato",       href: "/contato",          isRoute: true },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-planvida-olive rounded-sm">
            <img src="/lovable-uploads/logo_clinica.png" alt="Clínica PlanVida" className="w-28 h-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className={`font-body font-medium text-sm tracking-wide transition-all duration-200 cursor-pointer pb-0.5 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-planvida-olive focus-visible:ring-offset-2 rounded-sm
                  ${location.pathname === href.split("#")[0]
                    ? "text-planvida-olive border-planvida-olive"
                    : "text-planvida-brown/80 border-transparent hover:text-planvida-brown hover:border-planvida-border"
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer">
              <button className="bg-planvida-olive hover:bg-planvida-brown active:scale-95 text-white font-body font-semibold text-sm px-6 py-2.5 rounded-md transition-all duration-200 cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-planvida-olive focus-visible:ring-offset-2 shadow-sm hover:shadow-md">
                Agendar Consulta
              </button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-planvida-brown cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-planvida-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-planvida-olive"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-planvida-border animate-in slide-in-from-top-2 duration-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Navegação mobile">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className={`font-body py-3 px-3 rounded-md transition-colors duration-200 cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-planvida-olive
                  ${location.pathname === href.split("#")[0]
                    ? "text-planvida-olive bg-planvida-cream font-semibold"
                    : "text-planvida-brown hover:bg-planvida-light"
                  }`}
              >
                {label}
              </Link>
            ))}
            <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer" className="mt-2 block">
              <button className="w-full bg-planvida-olive hover:bg-planvida-brown active:scale-95 text-white font-body font-semibold text-sm px-6 py-3 rounded-md transition-all duration-200 cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-planvida-olive focus-visible:ring-offset-2">
                Agendar Consulta
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
