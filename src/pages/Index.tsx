import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppointmentStrip from "@/components/AppointmentStrip";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import EquipeSection from "@/components/EquipeSection";
import LabSection from "@/components/LabSection";
import Depoimentos from "@/components/Depoimentos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-white font-body">
    <TopBar />
    <Header />
    <Hero />
    <AppointmentStrip />
    <EspecialidadesSection />
    <EquipeSection />
    <LabSection />
    <Depoimentos />
    <Contact />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
