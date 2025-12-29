import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import InsuranceCompany from "./pages/case-studies/InsuranceCompany";
import SaasUxSolutions from "./pages/case-studies/SaasUxSolutions";
import HealthcareReports from "./pages/case-studies/HealthcareReports";
import EmployeeSelfService from "./pages/case-studies/EmployeeSelfService";
import KidActs from "./pages/case-studies/KidActs";

import ScrollToTop from "./ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/*  MUST be inside BrowserRouter */}
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-study" element={<CaseStudy />} />

            <Route path="/case-study/insurance-company" element={<InsuranceCompany />} />
            <Route path="/case-study/saas-ux-solutions" element={<SaasUxSolutions />} />
            <Route path="/case-study/healthcare-reports" element={<HealthcareReports />} />
            <Route path="/case-study/employee-self-service" element={<EmployeeSelfService />} />
            <Route path="/case-study/kid-acts" element={<KidActs />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
