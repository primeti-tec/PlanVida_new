
import { Stethoscope, Activity, Calendar, MessageCircle, TestTube, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Medicina da Dor",
      description: "Tratamentos modernos e eficazes para controle e alívio da dor crônica e aguda.",
      features: [
        "Avaliação completa da dor",
        "Bloqueios anestésicos",
        "Tratamentos minimamente invasivos",
        "Acompanhamento personalizado",
      ],
    },
    {
      icon: Activity,
      title: "Ultrassonografia",
      description: "Exames de imagem com equipamentos de última geração e laudos precisos.",
      features: [
        "Ultrassom abdominal e pélvico",
        "Ultrassom obstétrico",
        "Doppler vascular",
        "Laudos em tempo real",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-planvida-light relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-planvida-brown mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-planvida-amber mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Especialistas dedicados com tecnologia de ponta e atendimento humanizado
            para o seu bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-planvida-cream p-3 rounded-full mr-4">
                  <service.icon className="h-8 w-8 text-planvida-amber" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-planvida-brown">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-planvida-amber rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contato">
                <Button className="w-full bg-planvida-amber hover:bg-planvida-brown text-white transition-colors duration-200 cursor-pointer min-h-[44px]">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar {service.title}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Laboratório PlanVida */}
        <div className="bg-gradient-to-r from-planvida-brown to-planvida-amber rounded-2xl p-8 md:p-12 text-center relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full opacity-5 transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full opacity-5 transform -translate-x-16 translate-y-16"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <FlaskConical className="h-12 w-12 text-white" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Laboratório PlanVida
            </h3>
            <p className="text-planvida-cream mb-8 max-w-2xl mx-auto">
              Laboratório próprio certificado, em parceria com <strong className="text-white">LIFEMED Serviços e Diagnósticos</strong>.
              Exames com qualidade e resultados confiáveis sem sair da clínica.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/15 rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
                <TestTube className="h-8 w-8 text-planvida-cream mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Exames Laboratoriais</h4>
                <p className="text-planvida-cream text-sm">Hemograma, glicose, hormônios e muito mais</p>
              </div>

              <div className="bg-white/15 rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
                <Activity className="h-8 w-8 text-planvida-cream mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Exames de Imagem</h4>
                <p className="text-planvida-cream text-sm">Ultrassom, Doppler, Ecocardiograma</p>
              </div>

              <div className="bg-white/15 rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
                <MessageCircle className="h-8 w-8 text-planvida-cream mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">CASHBACK em Exames</h4>
                <p className="text-planvida-cream text-sm">Seus exames acumulam pontos e geram descontos</p>
              </div>
            </div>

            <Link to="/exames">
              <Button size="lg" className="bg-white text-planvida-brown hover:bg-planvida-light transition-colors duration-200 cursor-pointer min-h-[44px]">
                Ver Todos os Exames
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
