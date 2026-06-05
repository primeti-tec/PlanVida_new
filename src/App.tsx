
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ChatWidget from "@/components/ChatWidget";
import { HelmetProvider } from "react-helmet-async";

const Index = lazy(() => import("./pages/Index"));
const DrLuisFelipe = lazy(() => import("./pages/DrLuisFelipe"));
const Especialidades = lazy(() => import("./pages/Especialidades"));
const Especialistas = lazy(() => import("./pages/Especialistas"));
const Exames = lazy(() => import("./pages/Exames"));
const Parcerias = lazy(() => import("./pages/Parcerias"));
const Contato = lazy(() => import("./pages/Contato"));
const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const EspecialidadeDetalhe = lazy(() => import("./pages/EspecialidadeDetalhe"));
const ProfissionalDetalhe = lazy(() => import("./pages/ProfissionalDetalhe"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminKnowledge = lazy(() => import("./pages/AdminKnowledge"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-planvida-light">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-planvida-amber border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
      <p className="text-planvida-brown text-sm">Carregando...</p>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ChatWidget />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dr-luis-felipe" element={<DrLuisFelipe />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/especialistas" element={<Especialistas />} />
            <Route path="/exames" element={<Exames />} />
            <Route path="/parcerias" element={<Parcerias />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/especialidades/:slug" element={<EspecialidadeDetalhe />} />
            <Route path="/equipe/:slug" element={<ProfissionalDetalhe />} />
            <Route path="/configurar" element={<AdminKnowledge />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
