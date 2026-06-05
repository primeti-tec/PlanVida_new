import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, FlaskConical, ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  { src: "/lovable-uploads/clinica-fachada-entrada.jpeg", alt: "Fachada da Clínica PlanVida" },
  { src: "/lovable-uploads/clinica-fachada-logo.jpeg",    alt: "Clínica PlanVida — logo na fachada" },
];

const stats = [
  { icon: Users,        value: "10+",   label: "Especialistas" },
  { icon: Calendar,     value: "1000+", label: "Pacientes Atendidos" },
  { icon: FlaskConical, value: "Lab",   label: "Próprio Certificado" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <section id="inicio" className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">

      {/* Slides */}
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-12 sm:py-18 md:py-24 relative z-10">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-xs font-body font-medium tracking-wider uppercase">
              Redenção — Pará
            </span>
          </div>

          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4 sm:mb-6 tracking-tight">
            Cuidamos de Você com{" "}
            <span className="text-planvida-gold">Dedicação</span>{" "}
            e Excelência
          </h1>

          <p className="font-body text-white/80 text-base md:text-xl mb-6 sm:mb-10 leading-relaxed max-w-xl">
            Clínica multidisciplinar com laboratório próprio certificado.
            Especialistas dedicados ao seu bem-estar em Redenção - PA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-14">
            <a href="https://wa.me/5594992961300?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20PlanVida." target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 bg-planvida-olive hover:bg-planvida-brown text-white font-body font-semibold px-8 py-3.5 rounded-md transition-all duration-200 cursor-pointer min-h-[48px] shadow-lg hover:shadow-xl">
                <Calendar className="h-4 w-4" />
                Agendar Consulta
              </button>
            </a>
            <Link to="/especialistas">
              <button className="flex items-center gap-2 border-2 border-white/60 hover:border-white text-white font-body font-semibold px-8 py-3.5 rounded-md transition-all duration-200 cursor-pointer min-h-[48px] hover:bg-white/10">
                Nossa Equipe
                <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="bg-white/10 p-2.5 rounded-lg">
                  <Icon className="h-5 w-5 text-planvida-gold" />
                </div>
                <div>
                  <div className="font-heading font-black text-white text-xl leading-none">{value}</div>
                  <div className="font-body text-white/60 text-xs mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Setas */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200 cursor-pointer"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200 cursor-pointer"
        aria-label="Próximo"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "bg-planvida-gold w-6" : "bg-white/50 hover:bg-white/80"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
