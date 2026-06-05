import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const links = [
  { label: "Início",         href: "/" },
  { label: "Quem Somos",    href: "/quem-somos" },
  { label: "Especialidades", href: "/especialidades" },
  { label: "Nossa Equipe",   href: "/especialistas" },
  { label: "Exames",         href: "/exames" },
  { label: "Parcerias",      href: "/parcerias" },
  { label: "Contato",        href: "/contato" },
];

const Footer = () => (
  <footer className="bg-planvida-brown text-white">
    <div className="container mx-auto px-4 py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Coluna 1 — marca */}
        <div>
          <img src="/lovable-uploads/logo_clinica.png" alt="Clínica PlanVida" className="h-20 md:h-28 mb-6 brightness-0 invert" />
          <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs">
            Saúde e bem-estar com sofisticação, acolhimento e tecnologia de ponta em Redenção - PA.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://instagram.com/clinicaplanvida" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-planvida-olive p-2.5 rounded-lg transition-colors duration-200 cursor-pointer" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com/clinicaplanvida" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-planvida-olive p-2.5 rounded-lg transition-colors duration-200 cursor-pointer" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Coluna 2 — links */}
        <div>
          <h4 className="font-heading font-bold text-white text-base mb-5">Links Rápidos</h4>
          <ul className="space-y-2.5">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link to={href}
                  className="font-body text-white/60 hover:text-white text-sm transition-colors duration-200 cursor-pointer hover:pl-1 transition-all">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 — contato */}
        <div>
          <h4 className="font-heading font-bold text-white text-base mb-5">Contato</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-white/40 mt-0.5 flex-shrink-0" />
              <p className="font-body text-white/60 text-sm leading-relaxed">
                Av. Evangelizadora Neusa Dourado, 226<br />
                Núcleo Urbano — Redenção, PA<br />
                CEP 68553-200
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-white/40 flex-shrink-0" />
              <a href="https://wa.me/5594992961300"
                className="font-body text-white/60 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
                (94) 99296-1300
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-white/40 mt-0.5 flex-shrink-0" />
              <p className="font-body text-white/60 text-sm">
                Seg–Sex: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white border-t border-planvida-border/40">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-body text-planvida-brown/60 text-xs">
          © {new Date().getFullYear()} Clínica PlanVida. Todos os direitos reservados.
        </p>
        <p className="font-body text-planvida-muted text-xs">
          Redenção — Pará — Brasil
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
