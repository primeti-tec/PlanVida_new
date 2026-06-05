import { Calendar } from "lucide-react";
import { useState } from "react";

const especialidades = [
  "Saúde Mental", "Clínica Geral e Ultrassom", "Medicina da Dor",
  "Ginecologia e Obstetrícia", "Ortopedia e Traumatologia",
  "Endocrinologia", "Proctologia", "Fisioterapia", "Nutrição", "Terapia e Psicanálise",
];

const WHATSAPP = "5594992961300";

const AppointmentStrip = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [especialidade, setEspecialidade] = useState("");

  const handleSolicitar = () => {
    const nomeVal = nome.trim();
    const telVal = telefone.trim();
    const espVal = especialidade;

    const linhas = [
      "Olá! Gostaria de solicitar uma consulta na Clínica PlanVida.",
      "",
      nomeVal       ? `Nome: ${nomeVal}`             : null,
      telVal        ? `WhatsApp: ${telVal}`           : null,
      espVal        ? `Especialidade: ${espVal}`      : null,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(linhas)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-planvida-brown py-[10px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="flex items-center gap-3 text-white shrink-0">
            <Calendar className="h-6 w-6 text-planvida-gold" />
            <span className="font-heading font-bold text-lg whitespace-nowrap">Agendar Consulta</span>
          </div>

          <div className="hidden lg:block w-px h-10 bg-white/20 mx-2" />

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 flex-1 w-full">
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
              className="w-full sm:flex-1 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 font-body text-sm focus:outline-none focus:border-planvida-gold transition-colors duration-200 min-h-[44px]"
            />
            <input
              type="tel"
              placeholder="WhatsApp"
              autoComplete="tel"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
              className="w-full sm:flex-1 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 font-body text-sm focus:outline-none focus:border-planvida-gold transition-colors duration-200 min-h-[44px]"
            />
            <select
              value={especialidade}
              onChange={e => setEspecialidade(e.target.value)}
              className="w-full sm:flex-1 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white font-body text-sm focus:outline-none focus:border-planvida-gold transition-colors duration-200 min-h-[44px] cursor-pointer"
            >
              <option value="" className="bg-planvida-brown">Especialidade</option>
              {especialidades.map(e => (
                <option key={e} value={e} className="bg-planvida-brown">{e}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleSolicitar}
              className="bg-planvida-olive hover:bg-planvida-brown active:scale-95 text-white font-body font-semibold text-sm px-8 py-2.5 rounded-md transition-all duration-200 cursor-pointer min-h-[44px] whitespace-nowrap shadow-sm hover:shadow-md border border-planvida-gold/30"
            >
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentStrip;
