import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const equipe = [
  { nome: "Dra. Giovanna Dourado Matni",   cargo: "Saúde Mental",              crm: "CRM 15.109/PA", iniciais: "GD", link: "/equipe/dra-giovanna-dourado", foto: "/lovable-uploads/profissionais/dra-giovanna-dourado.jpeg",  fotoPos: "object-top" },
  { nome: "Dr. Luis Felipe Ferreira",       cargo: "Clínica Geral e Ultrassom", crm: "CRM 16.378/PA", iniciais: "LF", link: "/equipe/dr-luis-felipe",               foto: "/lovable-uploads/profissionais/dr-luis-felipe-foto.jpeg",   fotoPos: "object-top" },
  { nome: "Dra. Isabella Dourado Matni",    cargo: "Terapia e Psicanálise",     crm: "—",             iniciais: "ID", link: "/equipe/dra-isabella-dourado",    foto: "/lovable-uploads/profissionais/dra-isabella-dourado.jpeg",  fotoPos: "object-top" },
  { nome: "Dr. Daniel Peralba",             cargo: "Proctologia",               crm: "CRM 20.611/PA", iniciais: "DP", link: "/equipe/dr-daniel-peralba",      foto: "/lovable-uploads/profissionais/dr-daniel-peralba.jpeg",     fotoPos: "object-top" },
  { nome: "Dr. Vandré Von Rondon",          cargo: "Ortopedia e Traumatologia", crm: "CRM 12.487/PA", iniciais: "VV", link: "/equipe/dr-vandre-von-rondon",   foto: "/lovable-uploads/profissionais/dr-vandre-von-rondon.jpeg",  fotoPos: "object-top" },
  { nome: "Dra. Raquel Guimarães",          cargo: "Endocrinologia",            crm: "CRM 19.113/PA", iniciais: "RG", link: "/equipe/dra-raquel-guimaraes",   foto: "/lovable-uploads/profissionais/dra-raquel-guimaraes.jpeg",  fotoPos: "object-top" },
  { nome: "Dra. Camila Resende",            cargo: "Endocrinologia",            crm: "CRM PA",        iniciais: "CR", link: "/equipe/dra-camila-resende",      foto: "/lovable-uploads/profissionais/dra-camila-resende.jpeg",    fotoPos: "object-top" },
  { nome: "Dr. Roberto Almeida Junior",     cargo: "Ginecologia e Obstetrícia", crm: "CRM 14.596/PA", iniciais: "RA", link: "/equipe/dr-roberto-almeida",      foto: "/lovable-uploads/profissionais/dr-roberto-almeida.jpg",     fotoPos: "object-top" },
];

const EquipeSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="equipe" ref={ref as any} className="py-20 bg-planvida-light overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Título */}
        <div className={`text-center mb-14 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-body text-planvida-olive font-semibold text-sm tracking-widest uppercase mb-3">Profissionais</p>
          <h2 className="font-heading font-black text-planvida-brown text-3xl md:text-4xl mb-4">
            Nossa Equipe Médica
          </h2>
          <div className="w-16 h-1 bg-planvida-olive mx-auto mb-6" />
          <p className="font-body text-planvida-brown/60 max-w-2xl mx-auto">
            Especialistas dedicados e qualificados prontos para cuidar da sua saúde.
          </p>
        </div>

        {/* Cards com stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {equipe.map(({ nome, cargo, crm, iniciais, link, foto, fotoPos }, i) => (
            <div
              key={nome}
              className={`group bg-white rounded-2xl border border-planvida-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${100 + i * 80}ms` : "0ms" }}
            >
              {/* Foto / Avatar */}
              <div className="relative bg-planvida-light h-48 flex items-center justify-center overflow-hidden">
                {foto ? (
                  <img src={foto} alt={nome} className={`w-full h-full object-cover ${fotoPos} group-hover:scale-105 transition-transform duration-500`} />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-planvida-olive flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <span className="font-heading font-black text-white text-2xl">{iniciais}</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-planvida-olive/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center px-4">
                    <p className="font-body text-white text-xs font-medium mb-3">Agende sua consulta</p>
                    <a href="https://wa.me/5594992961300?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20PlanVida." target="_blank" rel="noopener noreferrer">
                      <button className="bg-white text-planvida-olive font-body font-semibold text-xs px-5 py-2 rounded-full cursor-pointer hover:bg-planvida-light transition-colors duration-200 active:scale-95">
                        Agendar
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="font-heading font-bold text-planvida-brown text-sm leading-tight mb-1">{nome}</h3>
                <p className="font-body text-planvida-olive text-xs font-medium mb-1">{cargo}</p>
                <p className="font-body text-planvida-brown/40 text-xs">{crm}</p>
                <div className="mt-3 flex flex-col gap-2 items-center">
                  <Link to={link} className="inline-block">
                    <span className="font-body text-planvida-olive text-xs font-medium hover:underline cursor-pointer">
                      Ver perfil →
                    </span>
                  </Link>
                  <a
                    href="https://wa.me/5594992961300?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20PlanVida."
                    target="_blank" rel="noopener noreferrer"
                    className="sm:hidden inline-block bg-planvida-olive text-white font-body font-semibold text-xs px-4 py-1.5 rounded-full cursor-pointer hover:bg-planvida-brown transition-colors duration-200"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: inView ? "750ms" : "0ms" }}>
          <Link to="/especialistas">
            <button className="inline-flex items-center gap-2 border-2 border-planvida-olive text-planvida-olive hover:bg-planvida-olive hover:text-white active:scale-95 font-body font-semibold text-sm px-8 py-3 rounded-md transition-all duration-200 cursor-pointer min-h-[44px]">
              Ver Equipe Completa
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
