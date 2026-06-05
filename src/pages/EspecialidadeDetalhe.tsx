import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, CheckCircle, GraduationCap, Stethoscope, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getEspecialidadeBySlug } from "@/data/especialidades-data";
import { useInView } from "@/hooks/use-in-view";

const MedicoCard = ({ medico, index }: { medico: any; index: number }) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as any}
      className={`bg-white rounded-2xl border border-planvida-border/30 shadow-sm overflow-hidden transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Header clicável — vai ao perfil do profissional */}
      <Link to={medico.link ?? "/especialistas"} className="block group/header cursor-pointer">
        <div className="bg-gradient-to-br from-planvida-brown to-planvida-brown/80 p-6 group-hover/header:from-planvida-olive group-hover/header:to-planvida-olive/80 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-planvida-gold/60 flex-shrink-0 overflow-hidden">
              {medico.foto
                ? <img src={medico.foto} alt={medico.nome} className="w-full h-full object-cover object-center" />
                : <div className="w-full h-full bg-planvida-amber/20 flex items-center justify-center"><span className="font-heading font-black text-planvida-gold text-xl">{medico.iniciais}</span></div>
              }
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-white text-lg leading-tight">{medico.nome}</h3>
              <p className="font-body text-planvida-gold text-sm font-medium mt-0.5">{medico.titulo}</p>
              <p className="font-body text-white/50 text-xs mt-1">{medico.crm}</p>
              <p className="font-body text-white/40 text-xs mt-1 group-hover/header:text-planvida-gold transition-colors duration-200">
                Ver perfil completo →
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Formação */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="h-4 w-4 text-planvida-amber flex-shrink-0" />
            <h4 className="font-heading font-bold text-planvida-brown text-sm">Formação</h4>
          </div>
          <ul className="space-y-2">
            {medico.formacao.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm font-body text-planvida-brown/65">
                <span className="w-1.5 h-1.5 bg-planvida-amber rounded-full mt-1.5 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Áreas de atuação */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Stethoscope className="h-4 w-4 text-planvida-amber flex-shrink-0" />
            <h4 className="font-heading font-bold text-planvida-brown text-sm">Áreas de Atuação</h4>
          </div>
          <ul className="space-y-2">
            {medico.atuacao.map((a: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm font-body text-planvida-brown/65">
                <CheckCircle className="h-3.5 w-3.5 text-planvida-amber mt-0.5 flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6">
        <Link to={medico.link ?? "/especialistas"}>
          <button className="inline-flex items-center gap-2 bg-planvida-olive hover:bg-planvida-brown active:scale-95 text-white font-body font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-200 cursor-pointer">
            Ver perfil completo
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const EspecialidadeDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const esp = getEspecialidadeBySlug(slug ?? "");
  const heroRef = useInView();
  const conteudoRef = useInView();
  const quandoRef = useInView();

  if (!esp) return <Navigate to="/especialidades" replace />;

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-planvida-cream via-white to-planvida-light py-12 md:py-20">
        <div
          ref={heroRef.ref as any}
          className={`container mx-auto px-4 text-center transition-all duration-500 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Link to="/especialidades" className="inline-flex items-center gap-1.5 text-planvida-amber hover:text-planvida-brown text-sm font-body font-medium mb-6 transition-colors duration-200">
            <ArrowLeft className="h-4 w-4" />
            Todas as Especialidades
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-planvida-brown mb-3">
            {esp.nome}
          </h1>
          <div className="w-16 h-1 bg-planvida-amber mx-auto mb-5 rounded-full" />
          <p className="text-lg text-planvida-brown/70 max-w-2xl mx-auto leading-relaxed">
            {esp.subtitulo}
          </p>
        </div>
      </section>

      {/* Intro + Conteúdo */}
      <section
        ref={conteudoRef.ref as any}
        className="py-10 md:py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Intro destaque */}
            <p
              className={`font-body text-planvida-brown text-lg leading-relaxed font-medium border-l-4 border-planvida-amber pl-5 mb-10 transition-all duration-500 ${conteudoRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              {esp.intro}
            </p>

            {/* Parágrafos */}
            <div className="space-y-5">
              {esp.conteudo.map((p, i) => (
                <p
                  key={i}
                  className={`font-body text-planvida-brown/70 text-base leading-relaxed transition-all duration-500 ${conteudoRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: conteudoRef.inView ? `${100 + i * 80}ms` : "0ms" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quando Consultar */}
      <section
        ref={quandoRef.ref as any}
        className="py-10 md:py-16 bg-planvida-light"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className={`transition-all duration-500 ${quandoRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h2 className="font-heading font-bold text-planvida-brown text-2xl mb-2">
                Quando marcar uma consulta?
              </h2>
              <div className="w-12 h-1 bg-planvida-amber mb-8 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {esp.quando_consultar.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-planvida-border/20 transition-all duration-400 ${quandoRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: quandoRef.inView ? `${60 + i * 60}ms` : "0ms" }}
                >
                  <CheckCircle className="h-5 w-5 text-planvida-amber flex-shrink-0 mt-0.5" />
                  <span className="font-body text-planvida-brown/75 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Médicos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-planvida-brown text-2xl mb-2">
                {esp.medicos.length === 1 ? "Especialista Responsável" : "Especialistas Responsáveis"}
              </h2>
              <div className="w-12 h-1 bg-planvida-amber mx-auto rounded-full" />
            </div>

            <div className={`grid gap-6 ${esp.medicos.length === 1 ? "grid-cols-1 max-w-xl mx-auto" : "grid-cols-1 md:grid-cols-2"}`}>
              {esp.medicos.map((medico, i) => (
                <MedicoCard key={medico.nome} medico={medico} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-10 md:py-16 bg-planvida-olive text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">
            Pronto para agendar sua consulta?
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8">
            Entre em contato com a Clínica PlanVida e cuide da sua saúde com os melhores especialistas de Redenção - PA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 bg-white hover:bg-planvida-cream active:scale-95 text-planvida-brown font-body font-semibold px-8 py-3.5 rounded-md transition-all duration-200 min-h-[48px] shadow-lg">
                <Calendar className="h-4 w-4" />
                Agendar Consulta
              </button>
            </a>
            <Link to="/especialidades">
              <button className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-body font-semibold px-8 py-3.5 rounded-md transition-all duration-200 min-h-[48px] hover:bg-white/10">
                Ver Outras Especialidades
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EspecialidadeDetalhe;


