import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar } from "lucide-react";

const equipe = [
  {
    nome: "Dra. Giovanna Dourado Matni",
    especialidade: "Saúde Mental — Psiquiatria",
    crm: "CRM 15.109/PA",
    descricao: "Especialista em saúde mental com abordagem humanizada e baseada em evidências.",
    link: "/equipe/dra-giovanna-dourado",
    foto: "/lovable-uploads/profissionais/dra-giovanna-dourado.jpeg",
    iniciais: "GD",
  },
  {
    nome: "Dr. Luis Felipe Ferreira",
    especialidade: "Clínica Geral e Ultrassonografia",
    crm: "CRM 16.378/PA",
    descricao: "Atendimento clínico completo com diagnóstico por imagem integrado no mesmo local.",
    link: "/equipe/dr-luis-felipe",
    foto: "/lovable-uploads/profissionais/dr-luis-felipe-foto.jpeg",
    iniciais: "LF",
  },
  {
    nome: "Dra. Isabella Dourado Matni",
    especialidade: "Terapia e Psicanálise Clínica",
    crm: "—",
    descricao: "Psicoterapeuta e psicanalista para autoconhecimento e bem-estar emocional.",
    link: "/equipe/dra-isabella-dourado",
    foto: "/lovable-uploads/profissionais/dra-isabella-dourado.jpeg",
    iniciais: "ID",
  },
  {
    nome: "Dr. Daniel Peralba",
    especialidade: "Proctologia",
    crm: "CRM 20.611/PA",
    descricao: "Especialista em doenças do intestino grosso, reto e ânus com técnicas modernas.",
    link: "/equipe/dr-daniel-peralba",
    foto: "/lovable-uploads/profissionais/dr-daniel-peralba.jpeg",
    iniciais: "DP",
  },
  {
    nome: "Dr. Vandré Von Rondon",
    especialidade: "Ortopedia e Traumatologia",
    crm: "CRM 12.487/PA — RQE 7980",
    descricao: "Especialista em lesões e doenças do sistema musculoesquelético.",
    link: "/equipe/dr-vandre-von-rondon",
    foto: "/lovable-uploads/profissionais/dr-vandre-von-rondon.jpeg",
    iniciais: "VV",
    fotoPos: "object-top",
  },
  {
    nome: "Dra. Raquel Guimarães",
    especialidade: "Endocrinologia",
    crm: "CRM 19.113/PA — CRM 101211-MG",
    descricao: "Especialista em distúrbios hormonais, diabetes, tireoide e metabolismo.",
    link: "/equipe/dra-raquel-guimaraes",
    foto: "/lovable-uploads/profissionais/dra-raquel-guimaraes.jpeg",
    iniciais: "RG",
  },
  {
    nome: "Dr. Roberto Silva Almeida Junior",
    especialidade: "Ginecologia e Obstetrícia",
    crm: "CRM 14.596/PA",
    descricao: "Especialista em saúde da mulher, pré-natal e acompanhamento ginecológico.",
    link: "/equipe/dr-roberto-almeida",
    foto: "/lovable-uploads/profissionais/dr-roberto-almeida.jpg",
    iniciais: "RA",
    fotoPos: "object-top",
  },
  {
    nome: "Cleiton Marques",
    especialidade: "Nutrição",
    crm: "Nutricionista",
    descricao: "Orientação nutricional personalizada para saúde, emagrecimento e prevenção.",
    link: "/equipe/cleiton-marques",
    foto: "/lovable-uploads/profissionais/cleiton-marques.jpeg",
    iniciais: "CM",
  },
  {
    nome: "Luiz Fernando",
    especialidade: "Fisioterapia",
    crm: "Fisioterapeuta",
    descricao: "Reabilitação física e prevenção de lesões com técnicas modernas.",
    link: "/equipe/luiz-fernando",
    foto: null,
    iniciais: "LF",
  },
];

const Especialistas = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-planvida-cream via-white to-planvida-light py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-planvida-amber mb-4">Clínica PlanVida</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-planvida-brown mb-4">
            Nossa Equipe
          </h1>
          <div className="w-16 h-1 bg-planvida-amber mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-planvida-brown/70 max-w-2xl mx-auto leading-relaxed">
            Profissionais dedicados e qualificados prontos para cuidar da sua saúde
            com excelência em Redenção - PA.
          </p>
        </div>
      </section>

      {/* Cards da Equipe */}
      <section className="py-10 md:py-16 bg-planvida-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipe.map((prof, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Foto topo */}
                <div className="h-72 bg-planvida-light flex items-center justify-center overflow-hidden">
                  {prof.foto ? (
                    <img
                      src={prof.foto}
                      alt={prof.nome}
                      className={`w-full h-full object-cover ${prof.fotoPos ?? "object-top"}`}
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-planvida-olive flex items-center justify-center">
                      <span className="font-heading font-black text-white text-2xl">{prof.iniciais}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                <div className="mb-3">
                    <h3 className="font-heading font-bold text-planvida-brown leading-tight">{prof.nome}</h3>
                    <p className="text-planvida-amber text-sm font-medium mt-0.5">{prof.especialidade}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{prof.crm}</p>
                  </div>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">{prof.descricao}</p>

                <div>
                  <Link to={prof.link}>
                    <Button size="sm" className="bg-planvida-amber hover:bg-planvida-brown text-white transition-colors duration-200 cursor-pointer min-h-[44px]">
                      Ver perfil
                    </Button>
                  </Link>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-planvida-olive text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Agende com um de Nossos Especialistas
          </h2>
          <p className="text-planvida-cream mb-8 max-w-xl mx-auto">
            Atendimento humanizado e multidisciplinar em Redenção - PA.
          </p>
          <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white hover:bg-planvida-cream text-planvida-brown transition-colors duration-200 cursor-pointer min-h-[44px]">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Especialistas;


