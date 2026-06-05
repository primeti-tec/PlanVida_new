import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlaskConical, Award, Gift, Heart, Phone, CheckCircle } from "lucide-react";

const Parcerias = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-planvida-cream via-white to-planvida-light py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-planvida-amber mb-4">Clínica PlanVida</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-planvida-brown mb-4">
            Parcerias e Benefícios
          </h1>
          <div className="w-16 h-1 bg-planvida-amber mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-planvida-brown/70 max-w-2xl mx-auto leading-relaxed">
            A Clínica PlanVida oferece benefícios exclusivos para nossos pacientes
            através de parcerias estratégicas em Redenção - PA.
          </p>
        </div>
      </section>

      {/* LIFEMED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-planvida-cream p-3 rounded-full">
                    <FlaskConical className="h-8 w-8 text-planvida-amber" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-planvida-brown">Laboratório PlanVida</h2>
                    <p className="text-planvida-amber font-medium text-sm">Parceria com LIFEMED Serviços e Diagnósticos</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nossa clínica conta com <strong className="text-planvida-brown">laboratório próprio certificado</strong>,
                  em parceria com a LIFEMED Serviços e Diagnósticos — referência em qualidade e precisão na região.
                  Você faz exames de sangue, imagem e diagnósticos sem precisar ir a outro local.
                </p>
                <ul className="space-y-3">
                  {[
                    "Laboratório próprio certificado no local",
                    "Parceria com LIFEMED Serviços e Diagnósticos",
                    "Exames de sangue, imagem e funcionais",
                    "Resultados rápidos e laudos precisos",
                    "Integração com consultas na própria clínica",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-planvida-amber flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-planvida-cream rounded-2xl p-8 text-center">
                <FlaskConical className="h-16 w-16 text-planvida-amber mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-planvida-brown mb-2">LIFEMED</h3>
                <p className="text-gray-600 text-sm mb-6">Serviços e Diagnósticos</p>
                <div className="bg-white rounded-xl p-4 text-sm text-gray-600">
                  <p>Laboratório certificado com padrão de qualidade para exames laboratoriais e de imagem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASHBACK */}
      <section className="py-16 bg-planvida-olive">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-planvida-amber/30 p-4 rounded-full">
                <Gift className="h-12 w-12 text-planvida-cream" />
              </div>
            </div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">CASHBACK em Exames</h2>
            <p className="text-planvida-cream mb-10 max-w-2xl mx-auto">
              Na Clínica PlanVida, seus exames acumulam pontos que se convertem em
              descontos nas próximas consultas e exames. Quanto mais você cuida da saúde, mais benefícios você tem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { titulo: "Faça seus Exames", desc: "Realize exames no Laboratório PlanVida e acumule pontos automaticamente." },
                { titulo: "Acumule Pontos", desc: "Cada exame realizado soma pontos na sua conta de benefícios." },
                { titulo: "Resgate Descontos", desc: "Use seus pontos para obter descontos em consultas e exames futuros." },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 text-left">
                  <div className="text-planvida-gold text-2xl font-bold mb-2">{i + 1}</div>
                  <h3 className="text-white font-heading font-semibold mb-2">{item.titulo}</h3>
                  <p className="text-planvida-cream text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Descontos NSI */}
      <section className="py-16 bg-planvida-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="bg-planvida-cream p-3 rounded-full">
                <Award className="h-8 w-8 text-planvida-amber" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-planvida-brown">Descontos Exclusivos para Clientes PlanVida</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Clientes da Clínica PlanVida têm acesso a <strong className="text-planvida-brown">descontos exclusivos NSI</strong> em exames
                e serviços parceiros. Informe-se na recepção sobre como ativar seus benefícios.
              </p>
              <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20benefícios%20e%20descontos%20da%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer">
                <Button className="bg-planvida-amber hover:bg-planvida-brown text-white transition-colors duration-200 cursor-pointer min-h-[44px]">
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PlanVida Funerária */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-planvida-cream rounded-2xl p-8 text-center">
                <Heart className="h-16 w-16 text-planvida-amber mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-planvida-brown mb-2">PlanVida Funerária</h3>
                <p className="text-gray-600 text-sm">Cuidado e amparo nos momentos mais difíceis</p>
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-planvida-brown mb-4">Parceria PlanVida Funerária</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Clientes da Clínica PlanVida têm acesso a condições especiais e descontos
                  nos serviços da <strong className="text-planvida-brown">PlanVida Funerária</strong>, garantindo amparo
                  completo para você e sua família em todas as fases da vida.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Descontos exclusivos para clientes da clínica",
                    "Cobertura familiar",
                    "Atendimento humanizado e respeitoso",
                    "Parceria de confiança com a mesma marca",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-planvida-amber flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/5594992961300" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-planvida-amber text-planvida-brown hover:bg-planvida-cream transition-colors duration-200 cursor-pointer min-h-[44px]">
                    <Phone className="mr-2 h-4 w-4" />
                    Entrar em Contato
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Parcerias;
