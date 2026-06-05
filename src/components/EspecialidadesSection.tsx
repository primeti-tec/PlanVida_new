import { Link } from "react-router-dom";
import { Brain, Stethoscope, Activity, Baby, Bone, Dna, Scissors, Leaf, Apple, Heart, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const items = [
  { icon: Brain,       nome: "Saúde Mental",              href: "/especialidades/saude-mental" },
  { icon: Stethoscope, nome: "Clínica Geral e Ultrassom", href: "/especialidades/clinica-geral" },
  { icon: Activity,    nome: "Medicina da Dor",           href: "/especialidades/medicina-da-dor" },
  { icon: Baby,        nome: "Ginecologia e Obstetrícia", href: "/especialidades/ginecologia" },
  { icon: Bone,        nome: "Ortopedia e Traumatologia", href: "/especialidades/ortopedia" },
  { icon: Dna,         nome: "Endocrinologia",            href: "/especialidades/endocrinologia" },
  { icon: Scissors,    nome: "Proctologia",               href: "/especialidades/proctologia" },
  { icon: Leaf,        nome: "Fisioterapia",              href: "/especialidades/fisioterapia" },
  { icon: Apple,       nome: "Nutrição",                  href: "/especialidades/nutricao" },
  { icon: Heart,       nome: "Terapia e Psicanálise",     href: "/especialidades/terapia-psicanalise" },
];

const EspecialidadesSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="especialidades" ref={ref as any} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Título */}
        <div className={`text-center mb-14 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-body text-planvida-olive font-semibold text-sm tracking-widest uppercase mb-3">O que oferecemos</p>
          <h2 className="font-heading font-black text-planvida-brown text-3xl md:text-4xl mb-4">
            Especialidades Médicas
          </h2>
          <div className="w-16 h-1 bg-planvida-olive mx-auto mb-6" />
          <p className="font-body text-planvida-brown/60 max-w-2xl mx-auto">
            10 especialidades em um único lugar para cuidar da sua saúde de forma completa.
          </p>
        </div>

        {/* Grid com stagger */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {items.map(({ icon: Icon, nome, href }, i) => (
            <Link to={href} key={nome}>
              <div
                className={`group bg-planvida-light hover:bg-planvida-olive border border-planvida-border hover:border-planvida-olive rounded-xl p-5 text-center transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: inView ? `${100 + i * 60}ms` : "0ms" }}
              >
                <div className="bg-white group-hover:bg-white/20 p-3 rounded-lg mx-auto w-fit mb-3 transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-planvida-olive group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-body font-medium text-planvida-brown group-hover:text-white text-sm leading-snug transition-colors duration-300">
                  {nome}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className={`text-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: inView ? "800ms" : "0ms" }}>
          <Link to="/especialidades">
            <button className="inline-flex items-center gap-2 bg-planvida-olive hover:bg-planvida-brown active:scale-95 text-white font-body font-semibold text-sm px-8 py-3 rounded-md transition-all duration-200 cursor-pointer min-h-[44px] shadow-sm hover:shadow-md">
              Ver Todas as Especialidades
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesSection;
