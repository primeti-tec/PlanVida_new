import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const especialidades = [
  "Saúde Mental", "Clínica Geral e Ultrassom", "Medicina da Dor",
  "Ginecologia e Obstetrícia", "Ortopedia e Traumatologia",
  "Endocrinologia", "Proctologia", "Fisioterapia", "Nutrição", "Terapia e Psicanálise",
];

const infos = [
  {
    icon: MapPin,
    titulo: "Endereço",
    conteudo: "Av. Evangelizadora Neusa Dourado, 226\nNúcleo Urbano — Redenção, PA\nCEP 68553-200",
  },
  {
    icon: Phone,
    titulo: "WhatsApp",
    conteudo: "(94) 99296-1300",
    href: "https://wa.me/5594992961300",
  },
  {
    icon: Clock,
    titulo: "Horários",
    conteudo: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h\nDomingo: Fechado",
  },
  {
    icon: Instagram,
    titulo: "Instagram",
    conteudo: "@clinicaplanvida",
    href: "https://instagram.com/clinicaplanvida",
  },
];

const inputCls = "w-full px-4 py-3 rounded-md border border-planvida-border bg-white focus:outline-none focus:ring-2 focus:ring-planvida-olive/30 focus:border-planvida-olive font-body text-planvida-brown text-sm placeholder-planvida-brown/40 transition-all duration-200 min-h-[44px]";

const Contact = () => (
  <section id="contato" className="py-20 bg-planvida-light">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="font-body text-planvida-olive font-semibold text-sm tracking-widest uppercase mb-3">Fale conosco</p>
        <h2 className="font-heading font-black text-planvida-brown text-3xl md:text-4xl mb-4">
          Entre em Contato
        </h2>
        <div className="w-16 h-1 bg-planvida-olive mx-auto mb-6" />
        <p className="font-body text-planvida-brown/60 max-w-xl mx-auto">
          Agende sua consulta ou tire suas dúvidas. Estamos prontos para atendê-lo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Infos */}
        <div className="flex flex-col justify-between space-y-6 bg-white rounded-2xl border border-planvida-border p-8 shadow-sm">
          {infos.map(({ icon: Icon, titulo, conteudo, href }) => (
            <div key={titulo} className="flex gap-4">
              <div className="bg-planvida-olive/10 p-3 rounded-lg flex-shrink-0 h-fit">
                <Icon className="h-5 w-5 text-planvida-olive" />
              </div>
              <div>
                <p className="font-body font-semibold text-planvida-brown text-sm mb-1">{titulo}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="font-body text-planvida-olive hover:underline text-sm cursor-pointer whitespace-pre-line">
                    {conteudo}
                  </a>
                ) : (
                  <p className="font-body text-planvida-brown/60 text-sm whitespace-pre-line">{conteudo}</p>
                )}
              </div>
            </div>
          ))}

          <div className="pt-4">
            <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-body font-semibold text-sm py-3.5 rounded-md transition-colors duration-200 cursor-pointer min-h-[44px] flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* Formulário */}
        {/* TODO: n8n webhook endpoint — conectar ao script02.json */}
        <div className="bg-white rounded-2xl border border-planvida-border p-8 shadow-sm">
          <h3 className="font-heading font-bold text-planvida-brown text-xl mb-6">Solicitar Agendamento</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body font-medium text-planvida-brown text-xs mb-1.5">Nome Completo *</label>
                <input type="text" placeholder="Seu nome" className={inputCls} />
              </div>
              <div>
                <label className="block font-body font-medium text-planvida-brown text-xs mb-1.5">WhatsApp *</label>
                <input type="tel" placeholder="(00) 00000-0000" autoComplete="tel" className={inputCls} />
              </div>
            </div>
            <div>
              <label className="block font-body font-medium text-planvida-brown text-xs mb-1.5">Especialidade *</label>
              <select className={`${inputCls} cursor-pointer`}>
                <option value="">Selecione a especialidade</option>
                {especialidades.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-body font-medium text-planvida-brown text-xs mb-1.5">Mensagem</label>
              <textarea
                rows={4}
                placeholder="Descreva brevemente seu caso ou dúvida..."
                className={`${inputCls} min-h-[100px] resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-planvida-olive hover:bg-planvida-brown text-white font-body font-semibold text-sm py-3.5 rounded-md transition-colors duration-200 cursor-pointer min-h-[44px]"
            >
              Enviar Solicitação
            </button>
            <p className="font-body text-planvida-brown/40 text-xs text-center">
              * Campos obrigatórios. Seus dados são protegidos pela LGPD.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
