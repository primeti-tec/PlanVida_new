import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Brain, Stethoscope, Activity, Baby, Bone, Dna,
  Scissors, Apple, Heart, Calendar, ChevronDown, ChevronUp, ArrowRight,
} from "lucide-react";
import { useState } from "react";

const especialidades = [
  {
    icon: Brain,
    nome: "Saúde Mental",
    slug: "saude-mental",
    medico: "Dra. Giovanna Dourado Matni",
    descricao: "Diagnóstico e tratamento de transtornos mentais com abordagem humanizada e baseada em evidências.",
    detalhes: ["Transtornos de ansiedade", "Depressão", "Transtorno bipolar", "Psicoses", "Acompanhamento psiquiátrico"],
  },
  {
    icon: Stethoscope,
    nome: "Clínica Geral e Ultrassom",
    slug: "clinica-geral",
    medico: "Dr. Luis Felipe Ferreira",
    descricao: "Atendimento clínico geral completo com diagnóstico por imagem no mesmo local.",
    detalhes: ["Consultas gerais", "Diagnóstico e tratamento", "Solicitação de exames", "Saúde preventiva", "Ultrassonografia"],
    linkMedico: "/dr-luis-felipe",
  },
  {
    icon: Activity,
    nome: "Medicina da Dor",
    slug: "medicina-da-dor",
    medico: "Dr. Luis Felipe Ferreira",
    descricao: "Tratamento especializado para dores crônicas e agudas com tecnologia minimamente invasiva.",
    detalhes: ["Avaliação da dor", "Bloqueios anestésicos", "Terapias minimamente invasivas", "Dores crônicas", "Acompanhamento personalizado"],
    linkMedico: "/dr-luis-felipe",
  },
  {
    icon: Baby,
    nome: "Ginecologia e Obstetrícia",
    slug: "ginecologia",
    medico: "Dr. Roberto Silva Almeida Junior",
    descricao: "Saúde da mulher em todas as fases da vida, do acompanhamento ginecológico ao pré-natal.",
    detalhes: ["Consultas ginecológicas", "Pré-natal", "Exames preventivos", "Colposcopia", "Planejamento familiar"],
  },
  {
    icon: Bone,
    nome: "Ortopedia e Traumatologia",
    slug: "ortopedia",
    medico: "Dr. Vandré Von Rondon",
    descricao: "Diagnóstico e tratamento de lesões e doenças do sistema musculoesquelético.",
    detalhes: ["Fraturas e lesões", "Dores articulares", "Coluna vertebral", "Joelho e quadril", "Reabilitação ortopédica"],
  },
  {
    icon: Dna,
    nome: "Endocrinologia",
    slug: "endocrinologia",
    medico: "Dra. Raquel Guimarães",
    descricao: "Diagnóstico e tratamento de distúrbios hormonais e metabólicos com foco na qualidade de vida.",
    expandida: true,
    detalhes: [
      "Doenças da Tireoide (Hipotireoidismo, Hipertireoidismo, Nódulos, Hashimoto, Graves)",
      "Diabetes Tipo 1 e Tipo 2",
      "Pré-diabetes e Resistência Insulínica",
      "Dislipidemia e Obesidade",
      "Síndrome Metabólica",
      "Andropausa e Menopausa",
      "Distúrbios do crescimento (Acromegalia)",
    ],
    quandoMarcar: [
      "Excesso de peso ou dificuldade para emagrecer",
      "Cansaço excessivo sem causa aparente",
      "Alterações menstruais",
      "Glicose elevada no exame de sangue",
      "Nódulo ou aumento da tireoide",
      "Queda de cabelo intensa",
    ],
  },
  {
    icon: Scissors,
    nome: "Proctologia",
    slug: "proctologia",
    medico: "Dr. Daniel Peralba",
    descricao: "Diagnóstico e tratamento de doenças do intestino grosso, reto e ânus.",
    detalhes: ["Hemorroidas", "Fissuras anais", "Fístulas", "Constipação crônica", "Colonoscopia"],
  },
  {
    icon: Activity,
    nome: "Fisioterapia",
    slug: "fisioterapia",
    medico: "Luiz Fernando",
    descricao: "Reabilitação física e prevenção de lesões com técnicas modernas e personalizadas.",
    detalhes: ["Reabilitação pós-cirúrgica", "Fisioterapia ortopédica", "Fisioterapia respiratória", "Pilates clínico", "RPG"],
  },
  {
    icon: Apple,
    nome: "Nutrição",
    slug: "nutricao",
    medico: "Cleiton Marques",
    descricao: "Orientação nutricional personalizada para saúde, emagrecimento e prevenção de doenças.",
    detalhes: ["Emagrecimento saudável", "Reeducação alimentar", "Nutrição esportiva", "Dietas terapêuticas", "Acompanhamento de exames"],
  },
  {
    icon: Heart,
    nome: "Terapia e Psicanálise",
    slug: "terapia-psicanalise",
    medico: "Dra. Isabella Dourado Matni",
    descricao: "Atendimento psicanalítico e terapêutico para autoconhecimento e bem-estar emocional.",
    detalhes: ["Psicanálise clínica", "Terapia individual", "Ansiedade e estresse", "Traumas emocionais", "Desenvolvimento pessoal"],
  },
];

const EspecialidadeCard = ({ esp, index }: { esp: typeof especialidades[0]; index: number }) => {
  const [aberto, setAberto] = useState(false);
  const Icon = esp.icon;

  return (
    <div
      className="group bg-white rounded-2xl border border-planvida-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden flex flex-col"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Accent top border on hover */}
      <div className="h-1 w-full bg-gradient-to-r from-planvida-olive to-planvida-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-planvida-cream group-hover:bg-planvida-olive p-3 rounded-xl flex-shrink-0 transition-colors duration-300">
            <Icon className="h-7 w-7 text-planvida-amber group-hover:text-planvida-gold transition-colors duration-300" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-planvida-brown leading-tight">{esp.nome}</h3>
            <p className="text-sm text-planvida-amber font-medium mt-0.5">{esp.medico}</p>
          </div>
        </div>

        <p className="font-body text-planvida-brown/65 text-sm mb-4 leading-relaxed">{esp.descricao}</p>

        {esp.expandida && esp.quandoMarcar && (
          <button
            onClick={() => setAberto(!aberto)}
            className="flex items-center gap-1 text-planvida-amber hover:text-planvida-brown text-sm font-medium mb-3 cursor-pointer transition-colors duration-200"
          >
            {aberto ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {aberto ? "Ver menos" : "Quando marcar consulta?"}
          </button>
        )}

        {(aberto || !esp.expandida) && (
          <ul className="space-y-2 mb-4 flex-1">
            {(esp.expandida && aberto ? esp.quandoMarcar! : esp.detalhes).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-body text-planvida-brown/65">
                <span className="w-1.5 h-1.5 bg-planvida-amber rounded-full mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {esp.slug && (
          <div className="mt-auto pt-4">
            <Link to={`/especialidades/${esp.slug}`} className="block">
              <button className="w-full inline-flex items-center justify-center gap-2 bg-planvida-amber hover:bg-planvida-brown text-white font-body font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer min-h-[44px] group/btn">
                Saiba Mais
                <ArrowRight className="h-4 w-4 translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Especialidades = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      <section className="bg-gradient-to-br from-planvida-cream via-white to-planvida-light py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-planvida-amber mb-4">Clínica PlanVida</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-planvida-brown mb-4">
            Especialidades
          </h1>
          <div className="w-16 h-1 bg-planvida-amber mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-planvida-brown/70 max-w-2xl mx-auto leading-relaxed">
            Equipe multidisciplinar com 10 especialidades para cuidar da sua saúde
            de forma completa em Redenção - PA.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-planvida-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {especialidades.map((esp, i) => (
              <EspecialidadeCard key={i} esp={esp} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-planvida-olive text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Pronto para cuidar da sua saúde?</h2>
          <p className="text-planvida-cream mb-8 max-w-xl mx-auto">
            Agende sua consulta com um de nossos especialistas. Atendemos em Redenção - PA.
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

export default Especialidades;

