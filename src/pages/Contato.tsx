import { MapPin, Phone, Clock, Instagram, MessageCircle, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ClinicaMap from "@/components/ClinicaMap";

const especialidades = [
  "Saúde Mental", "Clínica Geral e Ultrassom", "Medicina da Dor",
  "Ginecologia e Obstetrícia", "Ortopedia e Traumatologia",
  "Endocrinologia", "Proctologia", "Fisioterapia", "Nutrição", "Terapia e Psicanálise",
];

const horarios = [
  { dia: "Segunda-feira", hora: "8h às 18h" },
  { dia: "Terça-feira",   hora: "8h às 18h" },
  { dia: "Quarta-feira",  hora: "8h às 18h" },
  { dia: "Quinta-feira",  hora: "8h às 18h" },
  { dia: "Sexta-feira",   hora: "8h às 18h" },
  { dia: "Sábado",        hora: "8h às 12h" },
  { dia: "Domingo",       hora: "Fechado"   },
];

const inputCls = "w-full px-4 py-3 rounded-lg border border-planvida-border bg-white focus:outline-none focus:ring-2 focus:ring-planvida-olive/40 focus:border-planvida-olive font-body text-planvida-brown text-sm placeholder-planvida-brown/40 transition-all duration-200 min-h-[44px]";

const today = new Date().getDay();

const Contato = () => (
  <div className="min-h-screen bg-white">
    <TopBar />
    <Header />

    {/* Hero */}
    <section className="bg-gradient-to-br from-planvida-cream via-white to-planvida-light py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-planvida-amber mb-4">
          Estamos aqui para você
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-planvida-brown mb-4">
          Entre em Contato
        </h1>
        <div className="w-16 h-1 bg-planvida-amber mx-auto mb-6 rounded-full" />
        <p className="text-lg text-planvida-brown/70 max-w-2xl mx-auto leading-relaxed">
          Agende sua consulta, tire dúvidas ou venha nos visitar em Redenção - PA.
        </p>
      </div>
    </section>

    {/* Cards rápidos */}
    <section className="py-8 bg-white border-b border-planvida-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl px-4 py-4 transition-all duration-200 group"
          >
            <div className="bg-green-600 p-2.5 rounded-full flex-shrink-0">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-body font-semibold text-green-800 text-sm">WhatsApp</p>
              <p className="font-body text-green-700 text-xs truncate">(94) 99296-1300</p>
            </div>
            <ChevronRight className="h-4 w-4 text-green-500 ml-auto flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>

          <a
            href="https://instagram.com/clinicaplanvida"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-planvida-cream hover:bg-planvida-light border border-planvida-border/50 rounded-xl px-4 py-4 transition-all duration-200 group"
          >
            <div className="bg-planvida-amber p-2.5 rounded-full flex-shrink-0">
              <Instagram className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-body font-semibold text-planvida-brown text-sm">Instagram</p>
              <p className="font-body text-planvida-brown/60 text-xs truncate">@clinicaplanvida</p>
            </div>
            <ChevronRight className="h-4 w-4 text-planvida-amber ml-auto flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>

          <div className="flex items-center gap-3 bg-planvida-cream border border-planvida-border/50 rounded-xl px-4 py-4">
            <div className="bg-planvida-brown p-2.5 rounded-full flex-shrink-0">
              <Clock className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-body font-semibold text-planvida-brown text-sm">Hoje</p>
              <p className="font-body text-planvida-brown/60 text-xs">
                {today === 0 ? "Fechado" : today === 6 ? "8h às 12h" : "8h às 18h"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mapa + Informações */}
    <section className="py-16 bg-planvida-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Mapa */}
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-planvida-brown text-lg mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-planvida-amber flex-shrink-0" />
              Como Chegar
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-planvida-border/30 flex-1 min-h-[320px]">
              <ClinicaMap />
            </div>
            <a
              href="https://maps.google.com/?q=Av+Evangelizadora+Neusa+Dourado,226,Redenção,PA"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-planvida-amber hover:text-planvida-brown font-body font-medium text-sm transition-colors duration-200"
            >
              <MapPin className="h-4 w-4" />
              Abrir no Google Maps
              <ChevronRight className="h-3 w-3" />
            </a>
          </div>

          {/* Informações */}
          <div className="flex flex-col gap-4">

            {/* Endereço */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-planvida-border/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-planvida-cream p-2.5 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 text-planvida-amber" />
                </div>
                <h3 className="font-heading font-bold text-planvida-brown text-base">Endereço</h3>
              </div>
              <p className="font-body text-planvida-brown/70 text-sm leading-relaxed">
                Av. Evangelizadora Neusa Dourado, 226<br />
                Núcleo Urbano — Redenção, PA<br />
                CEP 68553-200
              </p>
            </div>

            {/* Telefone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-planvida-border/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-planvida-cream p-2.5 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 text-planvida-amber" />
                </div>
                <h3 className="font-heading font-bold text-planvida-brown text-base">Telefone / WhatsApp</h3>
              </div>
              <a
                href="https://wa.me/5594992961300"
                target="_blank" rel="noopener noreferrer"
                className="font-body text-planvida-amber hover:text-planvida-brown font-semibold text-base transition-colors duration-200"
              >
                (94) 99296-1300
              </a>
            </div>

            {/* Horários */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-planvida-border/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-planvida-cream p-2.5 rounded-lg flex-shrink-0">
                  <Clock className="h-5 w-5 text-planvida-amber" />
                </div>
                <h3 className="font-heading font-bold text-planvida-brown text-base">Horário de Atendimento</h3>
              </div>
              <ul className="space-y-1.5">
                {horarios.map(({ dia, hora }, i) => {
                  const isToday = (i === 6 && today === 0) || (i < 6 && i + 1 === today);
                  return (
                    <li key={dia} className={`flex justify-between items-center text-sm font-body py-1 border-b border-planvida-border/20 last:border-0 ${isToday ? "font-semibold text-planvida-amber" : "text-planvida-brown/70"}`}>
                      <span className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 bg-planvida-amber rounded-full flex-shrink-0" />}
                        {!isToday && <span className="w-1.5 h-1.5 flex-shrink-0" />}
                        {dia}
                      </span>
                      <span className={hora === "Fechado" ? "text-red-400 font-medium" : ""}>{hora}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Formulário */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">

          <div className="text-center mb-10">
            <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-planvida-amber mb-3">Agendamento</span>
            <h2 className="font-heading font-bold text-planvida-brown text-3xl mb-3">Solicitar Consulta</h2>
            <div className="w-12 h-1 bg-planvida-amber mx-auto mb-4 rounded-full" />
            <p className="font-body text-planvida-brown/60 text-sm">
              Preencha e entraremos em contato para confirmar seu horário.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nome" className="block font-body font-medium text-planvida-brown text-xs mb-1.5">
                  Nome Completo <span className="text-red-400">*</span>
                </label>
                <input id="nome" type="text" placeholder="Seu nome" autoComplete="name" className={inputCls} required />
              </div>
              <div>
                <label htmlFor="telefone" className="block font-body font-medium text-planvida-brown text-xs mb-1.5">
                  WhatsApp <span className="text-red-400">*</span>
                </label>
                <input id="telefone" type="tel" placeholder="(00) 00000-0000" autoComplete="tel" className={inputCls} required />
              </div>
            </div>

            <div>
              <label htmlFor="especialidade" className="block font-body font-medium text-planvida-brown text-xs mb-1.5">
                Especialidade <span className="text-red-400">*</span>
              </label>
              <select id="especialidade" className={`${inputCls} cursor-pointer`} required>
                <option value="">Selecione a especialidade</option>
                {especialidades.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="block font-body font-medium text-planvida-brown text-xs mb-1.5">
                Mensagem <span className="text-planvida-brown/40">(opcional)</span>
              </label>
              <textarea
                id="mensagem"
                rows={4}
                placeholder="Descreva brevemente seu caso ou dúvida..."
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-planvida-olive hover:bg-planvida-brown active:scale-95 text-white font-body font-semibold text-sm py-3.5 rounded-lg transition-all duration-200 cursor-pointer min-h-[48px] shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-planvida-olive focus-visible:ring-offset-2"
            >
              Enviar Solicitação
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px bg-planvida-border/40 flex-1" />
              <span className="font-body text-planvida-brown/40 text-xs whitespace-nowrap">ou agende direto</span>
              <div className="h-px bg-planvida-border/40 flex-1" />
            </div>

            <a
              href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank" rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-body font-semibold text-sm py-3.5 rounded-lg transition-all duration-200 cursor-pointer min-h-[48px] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>

            <p className="font-body text-planvida-brown/40 text-xs text-center">
              * Campos obrigatórios. Seus dados são protegidos pela LGPD.
            </p>
          </form>
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Contato;
