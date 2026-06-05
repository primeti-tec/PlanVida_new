import { useState, useEffect } from "react";
import { CLINICA_SYSTEM_PROMPT } from "@/data/clinicaKnowledge";
import { KNOWLEDGE_STORAGE_KEY } from "@/components/ChatWidget";

const SECTIONS = [
  {
    id: "clinica",
    label: "Clínica",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 000 1.5h.008a.75.75 0 000-1.5h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 010 1.5h-.008a.75.75 0 01-.75-.75z" clipRule="evenodd" />
      </svg>
    ),
    placeholder: `Nome, endereço, telefone/WhatsApp, horário de funcionamento, Instagram, descrição geral da clínica...`,
  },
  {
    id: "especialistas",
    label: "Especialistas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    ),
    placeholder: `Lista de médicos e especialistas com nome, especialidade, CRM, formação, o que trata e quando consultar...`,
  },
  {
    id: "exames",
    label: "Exames",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5zM4.875 6H6v13.125A3.375 3.375 0 009.375 22.5h9.375a3.375 3.375 0 003.375-3.375V9.375A3.375 3.375 0 0018.75 6H6.375A1.875 1.875 0 004.5 7.875v.188A.375.375 0 004.875 8.25z" clipRule="evenodd" />
      </svg>
    ),
    placeholder: `Exames disponíveis na clínica, laboratório próprio, parcerias (ex: LIFEMED), exames de imagem, laboratoriais...`,
  },
  {
    id: "agendamento",
    label: "Agendamento & Links",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
    ),
    placeholder: `Links de WhatsApp de cada especialista, link de agendamento online, instruções de como marcar consulta, planos aceitos...`,
  },
  {
    id: "instrucoes",
    label: "Instruções da IA",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5z" clipRule="evenodd" />
      </svg>
    ),
    placeholder: `Como a IA deve se comportar, tom de voz, o que não deve falar, como encaminhar para urgências, limitações...`,
  },
];

interface SectionData {
  clinica: string;
  especialistas: string;
  exames: string;
  agendamento: string;
  instrucoes: string;
}

const SECTIONS_STORAGE_KEY = "planvida_knowledge_sections";

function buildPromptFromSections(sections: SectionData): string {
  const parts: string[] = [];

  if (sections.clinica.trim()) {
    parts.push(`## Sobre a Clínica\n\n${sections.clinica.trim()}`);
  }
  if (sections.especialistas.trim()) {
    parts.push(`## Especialistas e Especialidades\n\n${sections.especialistas.trim()}`);
  }
  if (sections.exames.trim()) {
    parts.push(`## Exames e Laboratório\n\n${sections.exames.trim()}`);
  }
  if (sections.agendamento.trim()) {
    parts.push(`## Agendamento e Links de Contato\n\n${sections.agendamento.trim()}`);
  }
  if (sections.instrucoes.trim()) {
    parts.push(`## Instruções de Comportamento\n\n${sections.instrucoes.trim()}`);
  }

  return parts.join("\n\n---\n\n");
}

const emptySections: SectionData = {
  clinica: "",
  especialistas: "",
  exames: "",
  agendamento: "",
  instrucoes: "",
};

const defaultSections: SectionData = {
  clinica: `Nome: Clínica PlanVida
Endereço: Avenida Evangelizadora Neusa Dourado, 226 — Redenção, PA — CEP 68553-200
Telefone/WhatsApp: (94) 99296-1300
Horário: Segunda a sexta 08h às 18h | Sábado 08h às 12h | Domingo: Fechado
Instagram: https://www.instagram.com/clinicaplanvida/ (@clinicaplanvida)
Facebook: https://www.facebook.com/clinicaplanvida/
Site: www.clinicaplanvida.com

A Clínica PlanVida é uma clínica multidisciplinar localizada em Redenção, Pará. Oferece atendimento médico de qualidade com equipe especializada e laboratório próprio certificado. Conta com parceria com a LIFEMED Diagnostics para exames complementares.`,

  especialistas: `1. Dra. Giovanna Dourado Matni — CRM 15.109/PA
Especialidade: Saúde Mental (Psiquiatria)
Trata: ansiedade, pânico, depressão, transtorno bipolar, psicoses, esquizofrenia, TOC, TEPT, acompanhamento psiquiátrico de longa duração, ajuste de medicações.
Quando consultar: tristeza persistente há mais de 2 semanas, ansiedade intensa, insônia frequente, pensamentos perturbadores, mudanças bruscas de humor, uso problemático de álcool ou substâncias.

2. Dr. Luis Felipe Ferreira — CRM 16.378/PA
Especialidade: Clínica Geral, Ultrassom e Medicina da Dor
Trata: check-up anual, doenças crônicas (hipertensão, diabetes, colesterol), ultrassonografia abdominal/pélvica/partes moles, Doppler vascular, medicina preventiva, avaliação pré-operatória, dor crônica, lombalgia, cervicalgia, fibromialgia, neuropatia diabética, bloqueios anestésicos.
Quando consultar: check-up de saúde, dores abdominais ou torácicas, febre prolongada, controle de doenças crônicas, dor persistente há mais de 3 meses, dor que limita atividades diárias.

3. Dr. Roberto Silva Almeida Junior — CRM 14.596/PA
Especialidade: Ginecologia e Obstetrícia — Membro da SOGIPA
Trata: consultas ginecológicas preventivas, Papanicolau, colposcopia, pré-natal, planejamento familiar, contracepção, SOP, endometriose, miomas, cistos ovarianos, menopausa, infecções ginecológicas.
Quando consultar: consulta ginecológica anual, irregularidade menstrual, dor pélvica, suspeita de gravidez, planejamento familiar, corrimento atípico, nódulos mamários, sintomas de menopausa.

4. Dr. Vandré Von Rondon — CRM 12.487/PA — RQE 7980
Especialidade: Ortopedia e Traumatologia — Membro da SBOT
Trata: fraturas, luxações, hérnia de disco, lombalgia, artrose, lesões esportivas, LCA, ruptura do manguito rotador, tendinites, deformidades dos pés e joelhos, cirurgia ortopédica.
Quando consultar: dor na coluna/joelhos/quadril/ombros/tornozelo, fraturas ou entorses, limitação de movimentos, lesões esportivas, formigamento ou fraqueza nos membros, inchaço articular.

5. Dra. Raquel Guimarães — CRM 19.113/PA — CRM 101211-MG
Especialidade: Endocrinologia
Trata: hipotireoidismo, hipertireoidismo, doença de Graves, tireoidite de Hashimoto, nódulos de tireoide, diabetes tipo 1 e 2, pré-diabetes, resistência insulínica, obesidade, síndrome metabólica, osteoporose, menopausa, andropausa.
Quando consultar: cansaço excessivo, queda de cabelo, ganho de peso, glicose alterada, nódulo na tireoide, dificuldade para emagrecer, sintomas de menopausa ou andropausa.

6. Dr. Daniel Peralba — CRM 20.611/PA
Especialidade: Proctologia — Membro da SBCP
Trata: hemorroidas, fissuras e fístulas anais, colonoscopia diagnóstica e terapêutica, polipectomia, constipação crônica, incontinência fecal, rastreamento do câncer colorretal.
Quando consultar: sangramento retal, dor/coceira/desconforto anal, intestino preso crônico, sensação de evacuação incompleta, colonoscopia preventiva (acima de 45 anos), histórico familiar de câncer colorretal.

8. Dra. Isabella Dourado Matni
Especialidade: Terapia e Psicanálise Clínica
Trata: ansiedade, depressão, baixa autoestima, dificuldades relacionais, luto, traumas, crises existenciais, autoconhecimento.
Quando consultar: ansiedade ou sensação de vazio, depressão persistente, dificuldades nos relacionamentos, elaboração de luto, traumas do passado, crises existenciais.

9. Cleiton Marques — CRN-PA
Especialidade: Nutrição
Trata: emagrecimento saudável, reeducação alimentar, nutrição esportiva, dietas terapêuticas (diabetes, hipertensão, doenças renais), nutrição materno-infantil, intolerâncias alimentares (lactose, glúten), saúde intestinal.
Quando consultar: desejo de emagrecer, diabetes/hipertensão/colesterol elevado, melhora de desempenho esportivo, gestação, intolerâncias alimentares, anemia.

10. Luiz Fernando — CREFITO-PA
Especialidade: Fisioterapia
Trata: reabilitação pós-cirúrgica, lesões musculares e ligamentares, artrose, tendinites, pilates clínico, RPG, fisioterapia respiratória, fisioterapia neurofuncional (AVC, Parkinson), prevenção de lesões.
Quando consultar: dor muscular ou articular crônica, recuperação pós-cirúrgica, lesões esportivas, problemas de postura, dificuldades respiratórias, sequelas neurológicas.`,

  exames: `Laboratório próprio certificado + parceria com LIFEMED Diagnostics.

EXAMES DE IMAGEM
- Ultrassonografia abdominal
- Ultrassonografia pélvica
- Ultrassonografia obstétrica
- Ultrassonografia de partes moles
- Ultrassonografia de tireoide
- Doppler vascular

ENDOSCOPIA DIGESTIVA
- Colonoscopia diagnóstica
- Colonoscopia terapêutica (polipectomia)
- Colonoscopia preventiva (recomendada acima de 45 anos)

EXAMES LABORATORIAIS (laboratório próprio + LIFEMED)
- Hemograma completo
- Glicemia em jejum, Hemoglobina glicada (HbA1c), Curva glicêmica
- Colesterol total, LDL, HDL, Triglicerídeos
- Creatinina, Ureia, Ácido úrico
- TGO, TGP, GGT (função hepática)
- TSH, T3, T4 livre, Anti-TPO, Anti-Tg (tireoide)
- FSH, LH, Estradiol, Progesterona, Testosterona, Prolactina
- Vitamina D, Vitamina B12, Ferritina, Folato
- Beta-HCG (teste de gravidez)
- PSA, CEA, CA 125 (marcadores tumorais, sob solicitação médica)

Sistema de cashback/pontos para pacientes que realizam exames na clínica.`,

  agendamento: `Todo agendamento é feito via WhatsApp: (94) 99296-1300
Link direto: https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.

Horário de atendimento administrativo:
- Segunda a sexta: 08h às 18h
- Sábado: 08h às 12h
- Domingo: Fechado

PLANOS ACEITOS
(preencher com os convênios aceitos — ex: Unimed, particular, etc.)

OBSERVAÇÕES
- Em caso de urgência médica (dor no peito, dificuldade respiratória, AVC), orientar o paciente a ir imediatamente à UPA ou pronto-socorro mais próximo.`,

  instrucoes: `Tom de voz: acolhedor, claro, direto e profissional. Sem jargão médico desnecessário.

O QUE DEVE SER FEITO
- Quando o paciente descrever sintomas, identificar qual especialidade e médico é mais adequado.
- Sempre finalizar sugerindo o agendamento pelo WhatsApp (94) 99296-1300.
- Confirmar o horário de atendimento administrativo quando perguntado.
- Informar sobre o laboratório próprio e os exames disponíveis quando relevante.

O QUE NÃO DEVE SER FEITO
- Nunca fazer diagnósticos médicos. Orientar e encaminhar, nunca concluir.
- Nunca inventar informações sobre médicos, horários, valores ou procedimentos.
- Nunca afirmar disponibilidade de horário específico de cada médico sem confirmação.
- Nunca citar preços de consultas ou exames.
- Nunca comparar especialistas entre si.

URGÊNCIAS MÉDICAS
Se o paciente descrever: dor no peito intensa, dificuldade respiratória grave, desmaio, sintomas de AVC (boca torta, fraqueza súbita de um lado, fala arrastada), sangramento intenso ou convulsão — orientar imediatamente:
"Esse sintoma precisa de avaliação imediata. Vá a uma UPA ou pronto-socorro mais próximo."
Nunca orientar a esperar pela consulta nesses casos.`,
};

export default function AdminKnowledge() {
  const [activeTab, setActiveTab] = useState<keyof SectionData>("clinica");
  const [sections, setSections] = useState<SectionData>(emptySections);
  const [saved, setSaved] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [useCustom, setUseCustom] = useState(false);

  useEffect(() => {
    const storedSections = localStorage.getItem(SECTIONS_STORAGE_KEY);
    if (storedSections) {
      setSections(JSON.parse(storedSections));
    } else {
      setSections(defaultSections);
    }
    const storedPrompt = localStorage.getItem(KNOWLEDGE_STORAGE_KEY);
    setUseCustom(!!storedPrompt);
  }, []);

  const handleSave = () => {
    const prompt = buildPromptFromSections(sections);
    localStorage.setItem(SECTIONS_STORAGE_KEY, JSON.stringify(sections));
    localStorage.setItem(KNOWLEDGE_STORAGE_KEY, prompt);
    setUseCustom(true);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    if (!confirm("Isso vai apagar suas alterações e restaurar o conteúdo padrão da clínica. Confirma?")) return;
    localStorage.removeItem(KNOWLEDGE_STORAGE_KEY);
    localStorage.removeItem(SECTIONS_STORAGE_KEY);
    setSections(defaultSections);
    setUseCustom(false);
  };

  const previewPrompt = buildPromptFromSections(sections) || CLINICA_SYSTEM_PROMPT;
  const charCount = previewPrompt.length;
  const isFull = Object.values(sections).every((v) => !v.trim());

  return (
    <div className="min-h-screen bg-planvida-light">
      {/* Header */}
      <div className="bg-planvida-brown text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-planvida-amber flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-planvida-brown">
              <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h1 className="font-semibold text-base leading-tight">Base de Conhecimento — IA</h1>
            <p className="text-planvida-amber text-xs">Clínica PlanVida</p>
          </div>
        </div>
        <a href="/" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          Voltar ao site
        </a>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Status */}
        <div className={`mb-6 flex items-center gap-2 text-sm px-4 py-3 rounded-xl border ${useCustom ? "bg-green-50 border-green-200 text-green-800" : "bg-amber-50 border-amber-200 text-amber-800"}`}>
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${useCustom ? "bg-green-500" : "bg-amber-400"}`} />
          {useCustom
            ? "A IA está usando o conteúdo personalizado que você salvou."
            : "A IA está usando o conteúdo padrão do sistema. Preencha os campos abaixo e salve para personalizar."}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap mb-4">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id as keyof SectionData)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === s.id
                  ? "bg-planvida-brown text-white shadow"
                  : "bg-white text-planvida-brown border border-planvida-border hover:border-planvida-amber"
              }`}
            >
              {s.icon}
              {s.label}
              {sections[s.id as keyof SectionData].trim() && (
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${activeTab === s.id ? "bg-planvida-amber" : "bg-green-500"}`} />
              )}
            </button>
          ))}
        </div>

        {/* Active Section Editor */}
        {SECTIONS.map((s) => {
          if (s.id !== activeTab) return null;
          return (
            <div key={s.id} className="bg-white rounded-2xl border border-planvida-border shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-planvida-border bg-planvida-cream/50">
                <span className="text-planvida-brown">{s.icon}</span>
                <span className="text-sm font-semibold text-planvida-brown">{s.label}</span>
              </div>
              <textarea
                value={sections[s.id as keyof SectionData]}
                onChange={(e) =>
                  setSections((prev) => ({ ...prev, [s.id]: e.target.value }))
                }
                placeholder={s.placeholder}
                rows={16}
                className="w-full px-5 py-4 text-sm text-planvida-brown placeholder:text-planvida-brown/30 bg-white resize-none outline-none leading-relaxed"
              />
              <div className="px-5 py-2 border-t border-planvida-border bg-planvida-cream/30 text-xs text-planvida-brown/40">
                {sections[s.id as keyof SectionData].length} caracteres
              </div>
            </div>
          );
        })}

        {/* Preview toggle */}
        <button
          onClick={() => setShowPreview((v) => !v)}
          className="mt-4 flex items-center gap-2 text-sm text-planvida-brown/60 hover:text-planvida-brown transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
          </svg>
          {showPreview ? "Ocultar" : "Ver"} preview do prompt completo
          <span className="text-planvida-brown/40">({charCount} caracteres)</span>
        </button>

        {showPreview && (
          <div className="mt-3 bg-white rounded-2xl border border-planvida-border shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-planvida-border bg-planvida-cream/50">
              <span className="text-sm font-semibold text-planvida-brown">
                {isFull ? "Prompt padrão do sistema (nenhuma seção preenchida)" : "Prompt que será enviado para a IA"}
              </span>
            </div>
            <pre className="px-5 py-4 text-xs text-planvida-brown/70 whitespace-pre-wrap leading-relaxed overflow-y-auto max-h-96">
              {previewPrompt}
            </pre>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between mt-6 flex-wrap gap-3">
          <button
            onClick={handleReset}
            className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
            </svg>
            Restaurar padrão
          </button>

          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow ${
              saved
                ? "bg-green-500 text-white"
                : "bg-planvida-amber hover:bg-planvida-gold text-planvida-brown"
            }`}
          >
            {saved ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
                Salvo com sucesso!
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
                </svg>
                Salvar e ativar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
