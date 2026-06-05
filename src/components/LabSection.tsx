import { Link } from "react-router-dom";
import { FlaskConical, Award, Gift, ArrowRight } from "lucide-react";

const destaques = [
  { icon: FlaskConical, titulo: "Laboratório Próprio", desc: "Exames realizados no local com máxima qualidade e praticidade." },
  { icon: Award,        titulo: "Parceria LIFEMED",    desc: "LIFEMED Serviços e Diagnósticos — referência em precisão na região." },
  { icon: Gift,         titulo: "CASHBACK em Exames",  desc: "Seus exames acumulam pontos e geram descontos nas próximas consultas." },
];

const LabSection = () => (
  <section className="py-12 md:py-20 bg-planvida-olive relative overflow-hidden">
    {/* Decorativo */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 translate-y-24" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <p className="font-body text-white/60 font-semibold text-sm tracking-widest uppercase mb-3">Diagnósticos</p>
        <h2 className="font-heading font-black text-white text-3xl md:text-4xl mb-4">
          Laboratório PlanVida
        </h2>
        <div className="w-16 h-1 bg-planvida-gold mx-auto mb-6" />
        <p className="font-body text-white/70 max-w-2xl mx-auto">
          Laboratório próprio certificado em parceria com <strong className="text-white">LIFEMED Serviços e Diagnósticos</strong>.
          Faça seus exames sem sair da clínica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {destaques.map(({ icon: Icon, titulo, desc }) => (
          <div key={titulo} className="bg-white hover:bg-white/95 border border-white/20 rounded-xl p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            <div className="bg-planvida-olive p-4 rounded-xl mx-auto w-fit mb-5">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading font-bold text-planvida-olive text-base mb-2">{titulo}</h3>
            <p className="font-body text-planvida-olive/70 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/exames">
          <button className="inline-flex items-center gap-2 bg-white text-planvida-olive hover:bg-planvida-gold font-body font-semibold text-sm px-8 py-3 rounded-md transition-colors duration-200 cursor-pointer min-h-[44px]">
            Ver Todos os Exames
            <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default LabSection;
