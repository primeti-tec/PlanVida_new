import { Heart, Zap, Shield, Users, Award, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useInView } from "@/hooks/use-in-view";

const valores = [
  {
    icon: Heart,
    titulo: "Cuidado Integral",
    desc: "Cada paciente é tratado com atenção completa, do acolhimento inicial ao acompanhamento contínuo. Acreditamos que saúde vai além do diagnóstico.",
  },
  {
    icon: Zap,
    titulo: "Tecnologia Avançada",
    desc: "Laboratório próprio certificado, equipamentos de última geração e integração entre consulta e exames no mesmo espaço — para um diagnóstico mais rápido e preciso.",
  },
  {
    icon: Shield,
    titulo: "Ética e Transparência",
    desc: "Relação de confiança construída com clareza, respeito e responsabilidade. Você sempre sabe o que está acontecendo e quais são as suas opções.",
  },
  {
    icon: Users,
    titulo: "Equipe Multidisciplinar",
    desc: "10 especialidades em um único local. Médicos, fisioterapeutas, nutricionistas e psicólogos trabalhando de forma integrada pelo seu bem-estar.",
  },
];

const numeros = [
  { valor: "10+",  label: "Especialidades" },
  { valor: "1000+", label: "Pacientes Atendidos" },
  { valor: "Lab",  label: "Próprio Certificado" },
  { valor: "2",    label: "Anos de Excelência" },
];

const Historia = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as any} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div className={`transition-all duration-600 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="font-body text-planvida-amber font-semibold text-xs tracking-widest uppercase mb-3">Nossa história</p>
            <h2 className="font-heading font-black text-planvida-brown text-3xl md:text-4xl mb-6 leading-tight">
              Nascemos do desejo de transformar o cuidado com a saúde em Redenção
            </h2>
            <div className="w-16 h-1 bg-planvida-amber mb-8 rounded-full" />

            <div className="space-y-5 font-body text-planvida-brown/70 text-base leading-relaxed">
              <p>
                A <strong className="text-planvida-brown font-semibold">Clínica PlanVida</strong> nasceu da visão de oferecer à população de Redenção e região um espaço de saúde que combina sofisticação, acolhimento humano e tecnologia de ponta — diferente do modelo hospitalar frio e impessoal.
              </p>
              <p>
                Reunimos especialistas de diferentes áreas sob o mesmo teto, criando um ecossistema de saúde completo: da consulta ao exame, do diagnóstico ao acompanhamento contínuo. Tudo em um único lugar, com agilidade e qualidade certificada.
              </p>
              <p>
                Nosso laboratório próprio, certificado em parceria com a <strong className="text-planvida-brown font-semibold">LIFEMED Serviços e Diagnósticos</strong>, foi um marco. O paciente não precisa mais ir a outro lugar para fazer exames — o laudo sai na hora, integrado à consulta.
              </p>
              <p>
                Hoje, a PlanVida atende centenas de famílias com um time de mais de 10 especialistas comprometidos com excelência, ética e humanidade no cuidado.
              </p>
            </div>
          </div>

          {/* Card visual com números */}
          <div className={`transition-all duration-600 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "200ms" }}>
            <div className="bg-planvida-brown rounded-3xl p-6 md:p-10 text-white relative overflow-hidden">
              {/* Círculos decorativos */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-planvida-amber/10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-planvida-amber/20 p-2.5 rounded-xl">
                    <Award className="h-6 w-6 text-planvida-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-base">Clínica PlanVida</p>
                    <p className="font-body text-white/50 text-xs">Redenção — Pará</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {numeros.map(({ valor, label }) => (
                    <div key={label} className="text-center bg-white/10 rounded-2xl p-5">
                      <p className="font-heading font-black text-planvida-gold text-3xl mb-1">{valor}</p>
                      <p className="font-body text-white/60 text-xs">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-sm font-body text-white/70">
                    <MapPin className="h-4 w-4 text-planvida-amber flex-shrink-0" />
                    Av. Evangelizadora Neusa Dourado, 226 — Redenção, PA
                  </div>
                  <div className="flex items-center gap-3 text-sm font-body text-white/70">
                    <Clock className="h-4 w-4 text-planvida-amber flex-shrink-0" />
                    Seg–Sex: 8h–18h &nbsp;|&nbsp; Sáb: 8h–12h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Valores = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as any} className="py-20 bg-planvida-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-body text-planvida-amber font-semibold text-xs tracking-widest uppercase mb-3">O que nos guia</p>
          <h2 className="font-heading font-black text-planvida-brown text-3xl md:text-4xl mb-4">
            Nossos Valores
          </h2>
          <div className="w-16 h-1 bg-planvida-amber mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valores.map(({ icon: Icon, titulo, desc }, i) => (
            <div
              key={titulo}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 border border-planvida-border/30 transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${100 + i * 100}ms` : "0ms" }}
            >
              <div className="flex items-start gap-5">
                <div className="bg-planvida-cream p-3.5 rounded-xl flex-shrink-0">
                  <Icon className="h-6 w-6 text-planvida-amber" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-planvida-brown text-lg mb-2">{titulo}</h3>
                  <p className="font-body text-planvida-brown/65 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as any} className="py-20 bg-planvida-olive overflow-hidden">
      <div className={`container mx-auto px-4 text-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="font-body text-planvida-gold font-semibold text-xs tracking-widest uppercase mb-4">Pronto para cuidar de você</p>
        <h2 className="font-heading font-black text-white text-3xl md:text-4xl mb-4">
          Venha Conhecer a Clínica PlanVida
        </h2>
        <p className="font-body text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Agende sua consulta e descubra uma experiência diferente de cuidado com a saúde — humana, completa e sofisticada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 bg-white hover:bg-planvida-cream active:scale-95 text-planvida-brown font-body font-semibold px-8 py-3.5 rounded-md transition-all duration-200 cursor-pointer min-h-[48px] shadow-lg hover:shadow-xl">
              Agendar Consulta
              <ArrowRight className="h-4 w-4" />
            </button>
          </a>
          <Link to="/especialidades">
            <button className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-body font-semibold px-8 py-3.5 rounded-md transition-all duration-200 cursor-pointer min-h-[48px] hover:bg-white/10">
              Ver Especialidades
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const QuemSomos = () => (
  <div className="min-h-screen bg-white">
    <TopBar />
    <Header />

    {/* Hero */}
    <section className="bg-gradient-to-br from-planvida-cream via-white to-planvida-light py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-planvida-amber mb-4">
          Clínica PlanVida
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-planvida-brown mb-4">
          Quem Somos
        </h1>
        <div className="w-16 h-1 bg-planvida-amber mx-auto mb-6 rounded-full" />
        <p className="text-lg text-planvida-brown/70 max-w-2xl mx-auto leading-relaxed">
          Saúde com sofisticação, acolhimento e tecnologia de ponta em Redenção - PA.
          Conheça a nossa história e o que nos move.
        </p>
      </div>
    </section>

    <Historia />
    <Valores />
    <CTA />

    <Footer />
    <WhatsAppButton />
  </div>
);

export default QuemSomos;


