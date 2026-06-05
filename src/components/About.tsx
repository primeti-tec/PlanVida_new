import { Heart, Zap, Shield, MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const valores = [
  { icon: Heart,  titulo: "Cuidado Integral",      desc: "Cada paciente tratado com atenção completa, do diagnóstico ao acompanhamento." },
  { icon: Zap,    titulo: "Tecnologia Avançada",   desc: "Laboratório próprio certificado e equipamentos de última geração." },
  { icon: Shield, titulo: "Ética e Transparência", desc: "Relação de confiança baseada em clareza, respeito e responsabilidade." },
];

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="sobre" ref={ref as any} className="py-12 md:py-20 bg-planvida-light overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Título */}
        <div className={`text-center mb-14 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-body text-planvida-olive font-semibold text-sm tracking-widest uppercase mb-3">Quem somos</p>
          <h2 className="font-heading font-black text-planvida-brown text-3xl md:text-4xl mb-4">
            Sobre a Clínica PlanVida
          </h2>
          <div className="w-16 h-1 bg-planvida-olive mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Coluna esquerda */}
          <div className={`transition-all duration-600 delay-150 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
            style={{ transitionDelay: inView ? "150ms" : "0ms" }}>
            <p className="font-body text-planvida-brown/70 text-base leading-relaxed mb-8">
              A <strong className="text-planvida-brown font-semibold">Clínica PlanVida</strong> é uma instituição de saúde que une alta sofisticação,
              acolhimento humano e modernidade. Nossa missão é transformar a experiência de ida ao médico
              num momento de tranquilidade, bem-estar e segurança — longe do aspecto hospitalar frio.
            </p>

            <div className="space-y-6">
              {valores.map(({ icon: Icon, titulo, desc }, i) => (
                <div
                  key={titulo}
                  className={`flex gap-4 transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: inView ? `${200 + i * 100}ms` : "0ms" }}
                >
                  <div className="bg-planvida-olive/10 hover:bg-planvida-olive/20 p-3 rounded-lg flex-shrink-0 h-fit transition-colors duration-200">
                    <Icon className="h-5 w-5 text-planvida-olive" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-planvida-brown text-base mb-1">{titulo}</h4>
                    <p className="font-body text-planvida-brown/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita — card */}
          <div
            className={`bg-white rounded-2xl border border-planvida-border shadow-sm hover:shadow-lg p-5 md:p-8 transition-all duration-600 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
            style={{ transitionDelay: inView ? "300ms" : "0ms" }}
          >
            <h3 className="font-heading font-bold text-planvida-brown text-xl mb-6">Informações de Contato</h3>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Endereço", content: "Av. Evangelizadora Neusa Dourado, 226\nNúcleo Urbano — Redenção, PA — CEP 68553-200" },
                { icon: Phone, label: "WhatsApp", href: "https://wa.me/5594992961300", content: "(94) 99296-1300" },
                { icon: Clock, label: "Horários", content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/clinicaplanvida", content: "@clinicaplanvida" },
              ].map(({ icon: Icon, label, content, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="bg-planvida-light p-2.5 rounded-lg flex-shrink-0">
                    <Icon className="h-4 w-4 text-planvida-olive" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-planvida-brown text-sm">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="font-body text-planvida-olive hover:underline text-sm cursor-pointer mt-0.5 block">
                        {content}
                      </a>
                    ) : (
                      <p className="font-body text-planvida-brown/60 text-sm mt-0.5 whitespace-pre-line">{content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/5594992961300" target="_blank" rel="noopener noreferrer" className="mt-6 block">
              <button className="w-full bg-planvida-olive hover:bg-planvida-brown active:scale-95 text-white font-body font-semibold text-sm py-3 rounded-md transition-all duration-200 cursor-pointer min-h-[44px] shadow-sm hover:shadow-md">
                Falar pelo WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
