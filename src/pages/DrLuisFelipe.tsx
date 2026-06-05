
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin, GraduationCap, Award, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DrLuisFelipe = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-planvida-cream to-planvida-light py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/lovable-uploads/9fe10a4b-407d-43bd-9800-0f01185f7620.png"
                alt="Dr. Luis Felipe Ferreira"
                className="w-full aspect-video object-cover object-center rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-planvida-brown">
                  Dr. Luis Felipe Ferreira
                </h1>
                <h2 className="text-xl md:text-2xl text-planvida-amber font-medium">
                  Clínica Geral e Ultrassonografia
                </h2>
                <p className="text-sm text-gray-500 font-medium">CRM 16.378/PA</p>
                <p className="text-lg text-gray-600">
                  Médico dedicado ao atendimento clínico geral e diagnóstico por imagem,
                  oferecendo cuidado personalizado e humanizado para cada paciente.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-planvida-amber hover:bg-planvida-brown text-white transition-colors duration-200 cursor-pointer min-h-[44px]">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Consulta
                  </Button>
                </a>
                <a href="https://wa.me/5594992961300" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-planvida-amber text-planvida-brown hover:bg-planvida-cream transition-colors duration-200 cursor-pointer min-h-[44px]">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-planvida-brown mb-4">
              Formação e Especialidades
            </h2>
            <div className="w-24 h-1 bg-planvida-amber mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-planvida-cream p-6 rounded-xl shadow-sm">
              <GraduationCap className="h-12 w-12 text-planvida-amber mb-4" />
              <h3 className="text-xl font-heading font-semibold text-planvida-brown mb-2">Formação Médica</h3>
              <p className="text-gray-600">
                Graduação em Medicina com sólida formação clínica e prática assistencial.
              </p>
            </div>

            <div className="bg-planvida-cream p-6 rounded-xl shadow-sm">
              <Award className="h-12 w-12 text-planvida-amber mb-4" />
              <h3 className="text-xl font-heading font-semibold text-planvida-brown mb-2">Clínica Geral</h3>
              <p className="text-gray-600">
                Atendimento clínico completo, diagnóstico e acompanhamento de pacientes.
              </p>
            </div>

            <div className="bg-planvida-cream p-6 rounded-xl shadow-sm">
              <Activity className="h-12 w-12 text-planvida-amber mb-4" />
              <h3 className="text-xl font-heading font-semibold text-planvida-brown mb-2">Ultrassonografia</h3>
              <p className="text-gray-600">
                Exames de ultrassom com tecnologia avançada e laudos precisos em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-12 md:py-20 bg-planvida-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-planvida-brown mb-4">
              Atendimentos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-heading font-semibold text-planvida-brown mb-4">Clínica Geral</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Consultas clínicas gerais</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Diagnóstico e tratamento de doenças</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Solicitação e interpretação de exames</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Acompanhamento de saúde preventiva</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Encaminhamentos para especialistas</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-heading font-semibold text-planvida-brown mb-4">Ultrassonografia</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Ultrassom abdominal</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Ultrassom pélvico</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Ultrassom obstétrico</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Doppler vascular</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-planvida-amber rounded-full flex-shrink-0"></span>Laudos em tempo real</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-planvida-amber">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Agende sua Consulta
            </h2>
            <p className="text-xl text-planvida-cream mb-8">
              Entre em contato e cuide da sua saúde com quem entende
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center text-white">
                <Phone className="h-6 w-6 mr-3" />
                <span className="text-lg">(94) 99296-1300</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-6 w-6 mr-3" />
                <span className="text-lg">Redenção - PA</span>
              </div>
            </div>

            <a href="https://wa.me/5594992961300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20PlanVida." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-planvida-brown hover:bg-planvida-light transition-colors duration-200 cursor-pointer min-h-[44px]">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta Agora
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DrLuisFelipe;
