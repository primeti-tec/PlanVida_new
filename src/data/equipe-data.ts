export interface ProfissionalData {
  slug: string;
  nome: string;
  titulo: string;
  crm: string;
  iniciais: string;
  foto?: string;
  especialidade: string;
  bio: string;
  formacao: string[];
  atuacao: string[];
  especialidadesLinks: { nome: string; slug: string }[];
  externalLink?: string;
}

export const equipeData: ProfissionalData[] = [
  {
    slug: "dra-giovanna-dourado",
    nome: "Dra. Giovanna Dourado Matni",
    titulo: "Médica Psiquiatra",
    crm: "CRM 15.109/PA",
    iniciais: "GD",
    foto: "/lovable-uploads/profissionais/dra-giovanna-dourado.jpeg",
    especialidade: "Saúde Mental — Psiquiatria",
    bio: "A Dra. Giovanna Dourado Matni é médica psiquiatra com atuação voltada ao diagnóstico e tratamento humanizado dos transtornos mentais. Com formação sólida em psicofarmacologia e prática clínica baseada em evidências, ela conduz seus atendimentos com escuta ativa, respeito à singularidade de cada paciente e compromisso com o bem-estar integral. Acredita que a saúde mental é um direito de todos e que buscar ajuda é um ato de coragem. Atende na Clínica PlanVida oferecendo um espaço seguro, sigiloso e acolhedor para adultos que enfrentam transtornos de ansiedade, depressão, transtorno bipolar, psicoses e outros quadros psiquiátricos.",
    formacao: [
      "Graduação em Medicina",
      "Especialização em Psiquiatria",
      "Formação em Psicofarmacologia Clínica",
      "Atualização contínua em Psiquiatria Baseada em Evidências",
    ],
    atuacao: [
      "Transtornos de ansiedade e síndrome do pânico",
      "Depressão maior e distimia",
      "Transtorno bipolar tipos I e II",
      "Psicoses e esquizofrenia",
      "TOC — Transtorno Obsessivo-Compulsivo",
      "TEPT — Transtorno de Estresse Pós-Traumático",
      "Acompanhamento psiquiátrico de longa duração",
      "Psicofarmacologia e ajuste de medicações",
    ],
    especialidadesLinks: [
      { nome: "Saúde Mental", slug: "saude-mental" },
    ],
  },
  {
    slug: "dr-luis-felipe",
    nome: "Dr. Luis Felipe Ferreira",
    titulo: "Médico Clínico Geral e Ultrassonografista",
    crm: "CRM 16.378/PA",
    iniciais: "LF",
    foto: "/lovable-uploads/profissionais/dr-luis-felipe-foto.jpeg",
    especialidade: "Clínica Geral, Ultrassom e Medicina da Dor",
    bio: "O Dr. Luis Felipe Ferreira é médico clínico geral com especialização em ultrassonografia diagnóstica e medicina da dor. Sua atuação integra consulta clínica, diagnóstico por imagem e tratamento de síndromes dolorosas — tudo em um único atendimento, com agilidade e precisão. Comprometido com a medicina preventiva e o cuidado continuado, acompanha pacientes com doenças crônicas, realiza check-ups completos e oferece laudos ultrassonográficos em tempo real. Na área de medicina da dor, realiza bloqueios anestésicos e procedimentos minimamente invasivos para o tratamento de dores crônicas e neuropáticas.",
    formacao: [
      "Graduação em Medicina",
      "Especialização em Clínica Médica",
      "Formação em Ultrassonografia Diagnóstica",
      "Capacitação em Medicina da Dor e Bloqueios Anestésicos",
    ],
    atuacao: [
      "Consultas de clínica geral e check-up",
      "Ultrassonografia abdominal, pélvica e obstétrica",
      "Doppler vascular",
      "Acompanhamento de hipertensão, diabetes e dislipidemia",
      "Medicina preventiva e avaliação pré-operatória",
      "Tratamento de dores crônicas e neuropáticas",
      "Bloqueios anestésicos e infiltrações",
    ],
    especialidadesLinks: [
      { nome: "Clínica Geral e Ultrassom", slug: "clinica-geral" },
      { nome: "Medicina da Dor", slug: "medicina-da-dor" },
    ],
  },
  {
    slug: "dr-daniel-peralba",
    nome: "Dr. Daniel Peralba",
    titulo: "Médico Proctologista",
    crm: "CRM 20.611/PA",
    iniciais: "DP",
    foto: "/lovable-uploads/profissionais/dr-daniel-peralba.jpeg",
    especialidade: "Proctologia",
    bio: "O Dr. Daniel Peralba é médico especialista em coloproctologia, dedicado ao diagnóstico e tratamento das doenças do cólon, reto e ânus. Com formação em endoscopia digestiva baixa, realiza colonoscopias diagnósticas e terapêuticas com alta precisão. Reconhece que a proctologia ainda é uma área cercada de estigma e constrangimento, por isso conduz seus atendimentos com discrição, respeito e profissionalismo, criando um ambiente acolhedor para que os pacientes se sintam à vontade para falar sobre seus sintomas. Atua no diagnóstico e tratamento de hemorroidas, fissuras, fístulas, constipação crônica e rastreamento do câncer colorretal.",
    formacao: [
      "Graduação em Medicina",
      "Residência Médica em Coloproctologia",
      "Formação em Endoscopia Digestiva Baixa",
      "Membro da SBCP — Sociedade Brasileira de Coloproctologia",
    ],
    atuacao: [
      "Diagnóstico e tratamento de hemorroidas",
      "Fissuras e fístulas anais",
      "Colonoscopia diagnóstica e terapêutica",
      "Polipectomia endoscópica",
      "Constipação crônica e incontinência fecal",
      "Rastreamento e prevenção do câncer colorretal",
      "Doenças inflamatórias intestinais",
    ],
    especialidadesLinks: [
      { nome: "Proctologia", slug: "proctologia" },
    ],
  },
  {
    slug: "dr-vandre-von-rondon",
    nome: "Dr. Vandré Von Rondon",
    titulo: "Médico Ortopedista e Traumatologista",
    crm: "CRM 12.487/PA — RQE 7980",
    iniciais: "VV",
    foto: "/lovable-uploads/profissionais/dr-vandre-von-rondon.jpeg",
    especialidade: "Ortopedia e Traumatologia",
    bio: "O Dr. Vandré Von Rondon é médico especialista em ortopedia e traumatologia, com Registro de Qualificação de Especialista (RQE 7980) e membro da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Com vasta experiência no tratamento de fraturas, lesões esportivas, doenças degenerativas articulares e patologias da coluna vertebral, conduz seus atendimentos com rigor técnico e abordagem individualizada. Seu objetivo é aliviar a dor, restaurar a mobilidade e devolver qualidade de vida aos pacientes — seja por meio de tratamento conservador bem estruturado ou indicação cirúrgica precisa e segura.",
    formacao: [
      "Graduação em Medicina",
      "Residência Médica em Ortopedia e Traumatologia",
      "Registro de Qualificação de Especialista — RQE 7980",
      "Membro da SBOT — Sociedade Brasileira de Ortopedia e Traumatologia",
    ],
    atuacao: [
      "Tratamento de fraturas e luxações",
      "Doenças da coluna vertebral (hérnia, lombalgia, escoliose)",
      "Lesões esportivas — joelho, ombro, tornozelo",
      "Artrose e doenças degenerativas articulares",
      "Lesões do ligamento cruzado anterior (LCA)",
      "Cirurgia ortopédica eletiva",
      "Deformidades dos pés e joelhos",
    ],
    especialidadesLinks: [
      { nome: "Ortopedia e Traumatologia", slug: "ortopedia" },
    ],
  },
  {
    slug: "dra-raquel-guimaraes",
    nome: "Dra. Raquel Guimarães",
    titulo: "Médica Endocrinologista",
    crm: "CRM 19.113/PA — CRM 101211-MG",
    iniciais: "RG",
    foto: "/lovable-uploads/profissionais/dra-raquel-guimaraes.jpeg",
    especialidade: "Endocrinologia",
    bio: "A Dra. Raquel Guimarães é médica endocrinologista com registro profissional em dois estados — Pará e Minas Gerais —, o que reflete sua trajetória de formação e atualização em centros de excelência. Especializada em doenças da tireoide, diabetes, obesidade e distúrbios hormonais, ela conduz seus atendimentos com uma abordagem personalizada, que vai além dos números dos exames e considera o contexto de vida de cada paciente. Com linguagem clara e objetiva, auxilia o paciente a compreender sua condição e a participar ativamente das decisões terapêuticas.",
    formacao: [
      "Graduação em Medicina",
      "Residência Médica em Endocrinologia e Metabologia",
      "Registro profissional em PA (CRM 19.113) e MG (CRM 101211)",
      "Atualização contínua em Diabetes e Doenças da Tireoide",
    ],
    atuacao: [
      "Hipotireoidismo, hipertireoidismo e tireoidite de Hashimoto",
      "Nódulos de tireoide e doença de Graves",
      "Diabetes mellitus tipo 1 e tipo 2",
      "Pré-diabetes e resistência insulínica",
      "Obesidade e síndrome metabólica",
      "Andropausa e menopausa",
      "Osteoporose e metabolismo ósseo",
    ],
    especialidadesLinks: [
      { nome: "Endocrinologia", slug: "endocrinologia" },
    ],
  },
  {
    slug: "dra-camila-resende",
    nome: "Dra. Camila Resende",
    titulo: "Médica Endocrinologista",
    crm: "CRM PA",
    iniciais: "CR",
    foto: "/lovable-uploads/profissionais/dra-camila-resende.jpeg",
    especialidade: "Endocrinologia",
    bio: "A Dra. Camila Resende é médica endocrinologista com atuação centrada no equilíbrio hormonal e metabólico dos seus pacientes. Com formação especializada em endocrinologia, oferece atendimento atualizado e humanizado para condições como distúrbios hormonais femininos, síndrome dos ovários policísticos, alterações da tireoide e doenças metabólicas. Acredita na medicina de precisão, em que cada plano terapêutico é construído de forma individualizada, levando em conta não apenas os exames laboratoriais, mas também a história, os sintomas e a qualidade de vida de cada paciente.",
    formacao: [
      "Graduação em Medicina",
      "Especialização em Endocrinologia e Metabologia",
      "Formação em Saúde Metabólica e Hormonal",
      "Atualização em SOP e Endocrinologia Feminina",
    ],
    atuacao: [
      "Endocrinologia geral e metabologia",
      "Síndrome dos ovários policísticos (SOP)",
      "Resistência insulínica e diabetes",
      "Doenças da tireoide e paratireoide",
      "Dislipidemia e controle metabólico",
      "Distúrbios hormonais femininos",
      "Acompanhamento de saúde hormonal preventiva",
    ],
    especialidadesLinks: [
      { nome: "Endocrinologia", slug: "endocrinologia" },
    ],
  },
  {
    slug: "dr-roberto-almeida",
    nome: "Dr. Roberto Silva Almeida Junior",
    titulo: "Médico Ginecologista e Obstetra",
    crm: "CRM 14.596/PA",
    iniciais: "RA",
    foto: "/lovable-uploads/profissionais/dr-roberto-almeida.jpg",
    especialidade: "Ginecologia e Obstetrícia",
    bio: "O Dr. Roberto Silva Almeida Junior é médico ginecologista e obstetra, dedicado à saúde da mulher em todas as fases da vida. Com residência médica completa em ginecologia e obstetrícia, atende desde adolescentes em sua primeira consulta ginecológica até gestantes em acompanhamento pré-natal e mulheres na menopausa. Valoriza a construção de uma relação de confiança com cada paciente, com escuta atenta, linguagem acessível e respeito à autonomia feminina em todas as decisões de saúde. Realiza consultas preventivas, investigação de distúrbios ginecológicos, colposcopia e acompanhamento gestacional.",
    formacao: [
      "Graduação em Medicina",
      "Residência Médica em Ginecologia e Obstetrícia",
      "Capacitação em Colposcopia e Patologia Cervical",
      "Membro da SOGIPA — Sociedade de Ginecologia e Obstetrícia do Pará",
    ],
    atuacao: [
      "Consultas ginecológicas preventivas (Papanicolau, colposcopia)",
      "Pré-natal de baixo e médio risco",
      "Planejamento familiar e contracepção",
      "Diagnóstico e tratamento de SOP e endometriose",
      "Miomas uterinos e cistos ovarianos",
      "Infecções ginecológicas e ISTs",
      "Acompanhamento da menopausa",
    ],
    especialidadesLinks: [
      { nome: "Ginecologia e Obstetrícia", slug: "ginecologia" },
    ],
  },
  {
    slug: "dra-isabella-dourado",
    nome: "Dra. Isabella Dourado Matni",
    titulo: "Psicoterapeuta e Psicanalista Clínica",
    crm: "—",
    iniciais: "ID",
    foto: "/lovable-uploads/profissionais/dra-isabella-dourado.jpeg",
    especialidade: "Terapia e Psicanálise Clínica",
    bio: "A Dra. Isabella Dourado Matni é psicoterapeuta e psicanalista clínica com formação especializada em psicanálise e psicoterapia de orientação psicanalítica. Atende adultos e adolescentes que buscam apoio para questões emocionais, relacionais e existenciais. Com escuta cuidadosa e comprometida, oferece um espaço de acolhimento genuíno onde o paciente pode falar livremente, explorar seu mundo interno e construir novos sentidos para sua história. Acredita que a psicanálise é uma ferramenta poderosa de transformação e que o processo terapêutico, quando conduzido com ética e dedicação, tem o potencial de mudar vidas.",
    formacao: [
      "Graduação em Psicologia",
      "Formação em Psicanálise Clínica",
      "Especialização em Psicoterapia de Orientação Psicanalítica",
      "Supervisão clínica continuada",
    ],
    atuacao: [
      "Psicanálise clínica individual",
      "Psicoterapia de adultos e adolescentes",
      "Tratamento de ansiedade e depressão",
      "Elaboração de traumas e lutos",
      "Crises existenciais e identitárias",
      "Dificuldades nos relacionamentos",
      "Autoconhecimento e desenvolvimento pessoal",
    ],
    especialidadesLinks: [
      { nome: "Terapia e Psicanálise", slug: "terapia-psicanalise" },
    ],
  },
  {
    slug: "cleiton-marques",
    nome: "Cleiton Marques",
    titulo: "Nutricionista",
    crm: "CRN-PA",
    iniciais: "CM",
    foto: "/lovable-uploads/profissionais/cleiton-marques.jpeg",
    especialidade: "Nutrição",
    bio: "Cleiton Marques é nutricionista com especialização em nutrição clínica e funcional, comprometido com a promoção da saúde por meio de uma alimentação equilibrada, prazerosa e sustentável. Sua abordagem vai além da simples prescrição de dietas: ele trabalha a relação do paciente com a comida, investiga as causas dos desequilíbrios alimentares e constrói planos alimentares personalizados que se encaixam na rotina e nos objetivos de cada pessoa. Atende pacientes que desejam emagrecer com saúde, atletas em busca de performance, portadores de doenças crônicas e gestantes.",
    formacao: [
      "Graduação em Nutrição",
      "Especialização em Nutrição Clínica e Funcional",
      "Capacitação em Nutrição Esportiva",
      "Formação em Comportamento Alimentar e Mindful Eating",
    ],
    atuacao: [
      "Emagrecimento saudável e reeducação alimentar",
      "Nutrição esportiva e melhora de performance",
      "Dietas terapêuticas — diabetes, hipertensão, doenças renais",
      "Nutrição materno-infantil e gestação",
      "Intolerâncias alimentares — lactose, glúten, FODMAP",
      "Saúde intestinal e microbioma",
      "Comportamento alimentar e relação com a comida",
    ],
    especialidadesLinks: [
      { nome: "Nutrição", slug: "nutricao" },
    ],
  },
  {
    slug: "luiz-fernando",
    nome: "Luiz Fernando",
    titulo: "Fisioterapeuta",
    crm: "CREFITO-PA",
    iniciais: "LF",
    especialidade: "Fisioterapia",
    bio: "Luiz Fernando é fisioterapeuta especializado em fisioterapia ortopédica, esportiva e reabilitação funcional. Com formação em pilates clínico e RPG (Reeducação Postural Global), oferece tratamentos personalizados que combinam técnicas manuais, exercícios terapêuticos e abordagem postural global. Seu trabalho é pautado pela avaliação detalhada de cada paciente antes de qualquer intervenção, garantindo que o plano terapêutico seja adequado às necessidades, limitações e objetivos individuais. Atende desde pacientes em reabilitação pós-cirúrgica até atletas em busca de prevenção e melhora de desempenho.",
    formacao: [
      "Graduação em Fisioterapia",
      "Especialização em Fisioterapia Ortopédica e Esportiva",
      "Formação em Pilates Clínico",
      "Capacitação em RPG — Reeducação Postural Global",
    ],
    atuacao: [
      "Fisioterapia ortopédica e traumatológica",
      "Reabilitação pós-cirúrgica (joelho, quadril, coluna, ombro)",
      "Pilates clínico para reabilitação e fortalecimento",
      "RPG — Reeducação Postural Global",
      "Fisioterapia respiratória",
      "Tratamento de lesões esportivas",
      "Prevenção de lesões e condicionamento físico terapêutico",
    ],
    especialidadesLinks: [
      { nome: "Fisioterapia", slug: "fisioterapia" },
    ],
  },
];

export const getProfissionalBySlug = (slug: string) =>
  equipeData.find(p => p.slug === slug);
