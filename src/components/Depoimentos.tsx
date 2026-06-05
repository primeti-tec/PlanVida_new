import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const depoimentos = [
  {
    texto: "Atendimento excelente e muito humanizado. A Dra. Giovanna é atenciosa e realmente se importa com o paciente. Me senti acolhida desde o primeiro contato.",
    nome: "Maria Clara S.",
    cargo: "Paciente",
    estrelas: 5,
  },
  {
    texto: "Fiz ultrassom com o Dr. Luis Felipe e o resultado saiu na hora. Clínica organizada, limpa e com uma equipe muito profissional. Super recomendo para quem está em Redenção.",
    nome: "João Paulo M.",
    cargo: "Paciente",
    estrelas: 5,
  },
  {
    texto: "O laboratório próprio facilita tudo. Fiz a consulta e já agendei os exames no mesmo lugar. Atendimento diferenciado, sofisticado sem perder o calor humano.",
    nome: "Ana Beatriz R.",
    cargo: "Paciente",
    estrelas: 5,
  },
  {
    texto: "Nunca tinha visto uma clínica com esse nível de organização aqui na região. Desde o agendamento até o resultado dos exames, tudo muito ágil e transparente.",
    nome: "Carlos Eduardo T.",
    cargo: "Paciente",
    estrelas: 5,
  },
  {
    texto: "Trouxe minha mãe para uma consulta cardiológica e ficamos impressionados com a atenção da equipe. Ela saiu tranquila e bem orientada. Gratidão enorme.",
    nome: "Fernanda Lima P.",
    cargo: "Paciente",
    estrelas: 5,
  },
  {
    texto: "A parceria com a LIFEMED faz toda a diferença. Exames rápidos, laudos precisos e tudo dentro da própria clínica. Praticidade que poucos lugares oferecem.",
    nome: "Ricardo Alves N.",
    cargo: "Paciente",
    estrelas: 5,
  },
];

const Star = () => (
  <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const total = depoimentos.length;

const Depoimentos = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDir(1);
    setActive((p) => (p + 1) % total);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setActive((p) => (p - 1 + total) % total);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 10000);
    return () => clearInterval(id);
  }, [paused, next]);

  const getSlot = (offset: number) => depoimentos[(active + offset + total) % total];

  const cards = [
    { data: getSlot(-1), slot: "left" },
    { data: getSlot(0),  slot: "center" },
    { data: getSlot(1),  slot: "right" },
  ];

  return (
    <section
      className="py-12 md:py-20 bg-planvida-light overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-8 md:mb-14">
          <p className="font-body text-planvida-olive font-semibold text-sm tracking-widest uppercase mb-3">Depoimentos</p>
          <h2 className="font-heading font-black text-planvida-brown text-3xl md:text-4xl mb-4">
            O que Nossos Pacientes Dizem
          </h2>
          <div className="w-16 h-1 bg-planvida-olive mx-auto" />
        </div>

        {/* Carrossel */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6">

          {/* Botão anterior */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-planvida-border bg-white hover:bg-planvida-olive hover:border-planvida-olive hover:text-white text-planvida-brown flex items-center justify-center transition-all duration-200 shadow-sm z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="flex items-center gap-4 md:gap-6 w-full max-w-5xl overflow-hidden">
            {cards.map(({ data, slot }, i) => {
              const isCenter = slot === "center";
              const animClass = isCenter
                ? (dir === 1 ? "animate-slide-in-right" : "animate-slide-in-left")
                : "";
              return (
                <div
                  key={isCenter ? `center-${active}` : `${slot}-${data.nome}`}
                  className={`
                    relative rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-500 flex-shrink-0 ${animClass}
                    ${isCenter
                      ? "bg-planvida-olive shadow-2xl scale-105 z-20 w-full md:w-[40%] border-2 border-planvida-gold"
                      : "bg-white shadow-md scale-95 opacity-60 z-10 hidden md:flex md:w-[28%] border border-planvida-border"
                    }
                  `}
                >
                  {/* Aspas decorativas */}
                  <div className={`font-heading font-black text-8xl leading-none absolute top-3 left-5 select-none ${isCenter ? "text-white/20" : "text-planvida-olive/15"}`}>
                    "
                  </div>

                  {/* Estrelas */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(data.estrelas)].map((_, j) => <Star key={j} />)}
                  </div>

                  <p className={`font-body text-sm leading-relaxed mb-6 relative z-10 italic flex-1 ${isCenter ? "text-white/90" : "text-planvida-brown/70"}`}>
                    "{data.texto}"
                  </p>

                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isCenter ? "bg-white/20" : "bg-planvida-olive"}`}>
                      <span className={`font-heading font-black text-sm ${isCenter ? "text-white" : "text-white"}`}>
                        {data.nome.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className={`font-body font-semibold text-sm ${isCenter ? "text-white" : "text-planvida-brown"}`}>{data.nome}</p>
                      <p className={`font-body text-xs ${isCenter ? "text-white/60" : "text-planvida-brown/40"}`}>{data.cargo}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botão próximo */}
          <button
            onClick={next}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-planvida-border bg-white hover:bg-planvida-olive hover:border-planvida-olive hover:text-white text-planvida-brown flex items-center justify-center transition-all duration-200 shadow-sm z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-planvida-olive" : "w-2 h-2 bg-planvida-border hover:bg-planvida-olive/50"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Depoimentos;
