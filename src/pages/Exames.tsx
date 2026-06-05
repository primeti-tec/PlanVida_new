
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Activity, Heart, Zap, Wind, Ear, TestTube, FlaskConical, Calendar, Award, Gift } from "lucide-react";

const exames = [
  {
    icon: Activity,
    nome: "Ultrassonografia — Partes Moles",
    descricao: "Exame de imagem para avaliação de órgãos abdominais, pelve, tireoide e partes moles com laudo imediato.",
    preparacao: "Jejum de 4 a 6 horas para ultrassom abdominal. Para pelve: bexiga cheia.",
    duracao: "20 a 40 minutos",
  },
  {
    icon: Activity,
    nome: "Doppler Vascular",
    descricao: "Avaliação do fluxo sanguíneo em veias e artérias para diagnóstico de trombose, varizes e insuficiência venosa.",
    preparacao: "Sem preparo especial necessário.",
    duracao: "30 a 60 minutos",
  },
  {
    icon: Heart,
    nome: "Ecocardiograma",
    descricao: "Ultrassom do coração que avalia estrutura, função cardíaca, válvulas e fluxo sanguíneo.",
    preparacao: "Sem preparo especial. Evitar atividade física intensa nas 24h anteriores.",
    duracao: "30 a 45 minutos",
  },
  {
    icon: Zap,
    nome: "Eletrocardiograma (ECG)",
    descricao: "Registro da atividade elétrica do coração para detectar arritmias, infarto e alterações cardíacas.",
    preparacao: "Sem preparo especial. Não usar cremes ou loções na pele do tórax.",
    duracao: "10 a 15 minutos",
  },
  {
    icon: Wind,
    nome: "Espirometria",
    descricao: "Avalia a função pulmonar medindo o volume e fluxo de ar. Essencial para diagnóstico de asma e DPOC.",
    preparacao: "Não fumar 4h antes. Evitar broncodilatadores conforme orientação médica.",
    duracao: "20 a 30 minutos",
  },
  {
    icon: Ear,
    nome: "Nasofibrolaringoscopia",
    descricao: "Exame endoscópico das vias aéreas superiores para diagnóstico de alterações na laringe e faringe.",
    preparacao: "Jejum de 2 horas. Informar uso de anticoagulantes.",
    duracao: "10 a 20 minutos",
  },
  {
    icon: TestTube,
    nome: "Hemograma Completo",
    descricao: "Análise das células do sangue (glóbulos vermelhos, brancos e plaquetas) para diagnóstico de anemia e infecções.",
    preparacao: "Jejum de 4 horas recomendado.",
    duracao: "Coleta rápida — resultado em 24h",
  },
  {
    icon: TestTube,
    nome: "Glicose e Glicemia",
    descricao: "Medição dos níveis de açúcar no sangue. Fundamental para diagnóstico e controle do diabetes.",
    preparacao: "Jejum de 8 a 12 horas obrigatório.",
    duracao: "Coleta rápida — resultado em 24h",
  },
  {
    icon: FlaskConical,
    nome: "Dosagem Hormonal",
    descricao: "Painel completo de hormônios: tireoide (TSH, T3, T4), insulina, testosterona, FSH, LH, prolactina e cortisol.",
    preparacao: "Jejum de 8 a 12 horas. Alguns hormônios devem ser coletados em horário específico.",
    duracao: "Coleta rápida — resultado em 24–72h",
  },
];

const Exames = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-planvida-cream via-white to-planvida-light py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-planvida-amber mb-4">Clínica PlanVida</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-planvida-brown mb-4">
            Exames e Diagnósticos
          </h1>
          <div className="w-16 h-1 bg-planvida-amber mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-planvida-brown/70 max-w-2xl mx-auto leading-relaxed">
            Laboratório próprio certificado em parceria com LIFEMED. Faça seus exames
            com qualidade e praticidade em Redenção - PA.
          </p>
        </div>
      </section>

      {/* Banner Laboratório */}
      <section className="bg-planvida-brown py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-planvida-amber/30 p-4 rounded-full">
                <FlaskConical className="h-10 w-10 text-planvida-cream" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Laboratório PlanVida</h3>
              <p className="text-planvida-cream text-sm">Laboratório próprio certificado para seus exames</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-planvida-amber/30 p-4 rounded-full">
                <Award className="h-10 w-10 text-planvida-cream" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Parceria LIFEMED</h3>
              <p className="text-planvida-cream text-sm">LIFEMED Serviços e Diagnósticos — qualidade certificada</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-planvida-amber/30 p-4 rounded-full">
                <Gift className="h-10 w-10 text-planvida-cream" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg">CASHBACK em Exames</h3>
              <p className="text-planvida-cream text-sm">Seus exames acumulam pontos e geram descontos futuros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Exames */}
      <section className="py-10 md:py-16 bg-planvida-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-planvida-brown text-center mb-12">
            Exames Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exames.map((exame, i) => {
              const Icon = exame.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-planvida-cream p-3 rounded-full flex-shrink-0">
                      <Icon className="h-6 w-6 text-planvida-amber" />
                    </div>
                    <h3 className="font-heading font-bold text-planvida-brown text-lg leading-tight">{exame.nome}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{exame.descricao}</p>
                  <div className="space-y-2 text-sm border-t border-planvida-gold/20 pt-4">
                    <div>
                      <span className="font-medium text-planvida-brown">Preparação: </span>
                      <span className="text-gray-600">{exame.preparacao}</span>
                    </div>
                    <div>
                      <span className="font-medium text-planvida-brown">Duração: </span>
                      <span className="text-gray-600">{exame.duracao}</span>
                    </div>
                  </div>
                  <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20um%20exame%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer" className="block mt-4">
                    <Button className="w-full bg-planvida-amber hover:bg-planvida-brown text-white transition-colors duration-200 cursor-pointer min-h-[44px]" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Agendar Exame
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-planvida-amber text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Agende seu Exame Agora
          </h2>
          <p className="text-planvida-cream mb-8 max-w-xl mx-auto">
            Entre em contato pelo WhatsApp ou preencha o formulário de agendamento.
          </p>
          <a href="https://wa.me/5594992961300" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-planvida-brown hover:bg-planvida-light transition-colors duration-200 cursor-pointer min-h-[44px]">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar pelo WhatsApp
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Exames;
