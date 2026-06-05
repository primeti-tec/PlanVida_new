import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, GraduationCap, Stethoscope, CheckCircle, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProfissionalBySlug } from "@/data/equipe-data";
import { useInView } from "@/hooks/use-in-view";

const ProfissionalDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const prof = getProfissionalBySlug(slug ?? "");

  const heroRef = useInView();
  const bioRef = useInView();
  const formRef = useInView();
  const atuacaoRef = useInView();

  if (!prof) return <Navigate to="/especialistas" replace />;

  // Se tiver página própria (Dr. Luis Felipe), redireciona
  if (prof.externalLink) return <Navigate to={prof.externalLink} replace />;

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-planvida-cream via-white to-planvida-light py-12 md:py-20">
        <div
          ref={heroRef.ref as any}
          className={`container mx-auto px-4 transition-all duration-500 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Link
            to="/especialistas"
            className="inline-flex items-center gap-1.5 text-planvida-amber hover:text-planvida-brown text-sm font-body font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Nossa Equipe
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Foto / Avatar grande */}
            <div className={`flex justify-center transition-all duration-500 ${heroRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: "100ms" }}>
              <div className="relative mb-6 lg:mb-0">
                {prof.foto ? (
                  <img
                    src={prof.foto}
                    alt={prof.nome}
                    className="w-56 h-56 md:w-72 md:h-72 rounded-3xl object-cover object-top shadow-2xl border-4 border-white"
                  />
                ) : (
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-planvida-brown flex items-center justify-center shadow-2xl">
                    <span className="font-heading font-black text-planvida-gold text-7xl md:text-8xl">{prof.iniciais}</span>
                  </div>
                )}
                {/* Badge CRM */}
                <div className="absolute -bottom-4 -right-4 bg-white border border-planvida-border rounded-2xl px-4 py-2 shadow-lg">
                  <p className="font-body text-planvida-brown/50 text-xs">Registro</p>
                  <p className="font-body font-semibold text-planvida-brown text-sm">{prof.crm}</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className={`transition-all duration-500 ${heroRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              style={{ transitionDelay: "200ms" }}>
              <p className="font-body text-planvida-amber font-semibold text-xs tracking-widest uppercase mb-3">
                {prof.especialidade}
              </p>
              <h1 className="font-heading font-black text-planvida-brown text-3xl md:text-4xl lg:text-5xl leading-tight mb-3">
                {prof.nome}
              </h1>
              <p className="font-body text-planvida-brown/60 text-lg mb-8">{prof.titulo}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center gap-2 bg-planvida-olive hover:bg-planvida-brown active:scale-95 text-white font-body font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer min-h-[48px] shadow-sm hover:shadow-md">
                    <Calendar className="h-4 w-4" />
                    Agendar Consulta
                  </button>
                </a>
                <a href="https://wa.me/5594992961300" target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center gap-2 border-2 border-planvida-amber text-planvida-brown hover:bg-planvida-cream active:scale-95 font-body font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer min-h-[48px]">
                    <Phone className="h-4 w-4" />
                    WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section ref={bioRef.ref as any} className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className={`transition-all duration-500 ${bioRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h2 className="font-heading font-bold text-planvida-brown text-2xl mb-3">Sobre o Profissional</h2>
              <div className="w-12 h-1 bg-planvida-amber mb-6 rounded-full" />
              <p className="font-body text-planvida-brown/70 text-base leading-relaxed border-l-4 border-planvida-amber pl-5">
                {prof.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formação + Atuação */}
      <section ref={formRef.ref as any} className="py-10 md:py-16 bg-planvida-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Formação */}
            <div
              className={`bg-white rounded-2xl p-8 shadow-sm border border-planvida-border/20 transition-all duration-500 ${formRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-planvida-cream p-2.5 rounded-xl">
                  <GraduationCap className="h-5 w-5 text-planvida-amber" />
                </div>
                <h3 className="font-heading font-bold text-planvida-brown text-lg">Formação</h3>
              </div>
              <ul className="space-y-3">
                {prof.formacao.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-planvida-brown/70 text-sm">
                    <span className="w-1.5 h-1.5 bg-planvida-amber rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Áreas de Atuação */}
            <div
              className={`bg-white rounded-2xl p-8 shadow-sm border border-planvida-border/20 transition-all duration-500 ${formRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: formRef.inView ? "150ms" : "0ms" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-planvida-cream p-2.5 rounded-xl">
                  <Stethoscope className="h-5 w-5 text-planvida-amber" />
                </div>
                <h3 className="font-heading font-bold text-planvida-brown text-lg">Áreas de Atuação</h3>
              </div>
              <ul className="space-y-3">
                {prof.atuacao.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-planvida-brown/70 text-sm">
                    <CheckCircle className="h-4 w-4 text-planvida-amber flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades vinculadas */}
      {prof.especialidadesLinks.length > 0 && (
        <section ref={atuacaoRef.ref as any} className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className={`mb-8 transition-all duration-500 ${atuacaoRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <h2 className="font-heading font-bold text-planvida-brown text-2xl mb-2">
                  Especialidades Atendidas
                </h2>
                <div className="w-12 h-1 bg-planvida-amber rounded-full" />
              </div>
              <div className="flex flex-wrap gap-4">
                {prof.especialidadesLinks.map((esp, i) => (
                  <Link
                    key={esp.slug}
                    to={`/especialidades/${esp.slug}`}
                    className={`group flex items-center gap-3 bg-planvida-cream hover:bg-planvida-amber border border-planvida-border hover:border-planvida-amber rounded-xl px-6 py-4 transition-all duration-200 cursor-pointer ${atuacaoRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: atuacaoRef.inView ? `${i * 100}ms` : "0ms" }}
                  >
                    <span className="font-body font-semibold text-planvida-brown group-hover:text-white text-sm transition-colors duration-200">
                      {esp.nome}
                    </span>
                    <ArrowRight className="h-4 w-4 text-planvida-amber group-hover:text-white transition-colors duration-200 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-10 md:py-16 bg-planvida-olive text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">
            Agende sua consulta com {prof.nome.split(" ")[0]} {prof.nome.split(" ")[1]}
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8">
            Entre em contato com a Clínica PlanVida e garanta seu atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 bg-white hover:bg-planvida-cream active:scale-95 text-planvida-brown font-body font-semibold px-8 py-3.5 rounded-md transition-all duration-200 min-h-[48px] shadow-lg">
                <Calendar className="h-4 w-4" />
                Agendar Consulta
              </button>
            </a>
            <Link to="/especialistas">
              <button className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-body font-semibold px-8 py-3.5 rounded-md transition-all duration-200 min-h-[48px] hover:bg-white/10">
                Ver Toda a Equipe
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

export default ProfissionalDetalhe;


