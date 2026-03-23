import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ManifestationBootcampLanding from "./pages/OtoPage";
import ThankYouFb from "./pages/Thankupage";
import OtoThankYou from "./pages/OtoThankYou";
import IndexGa from "./pages/IndexGa";
import ManifestationBootcampLandingGa from "./pages/OtopageGa";
import OtoThankYouGa from "./pages/OtoThankYouGa";
import ThankYouFbGa from "./pages/ThankupageGa";
import Thankupage1499 from "./pages/Thankupage1499";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fb13" element={<Index />} />
          <Route path="/fb13-oto" element={<ManifestationBootcampLanding />} />
          <Route path="/fb13-ty" element={<ThankYouFb />} />
          <Route path="/fb13-ty-oto" element={<OtoThankYou />} />
           <Route path="/ga13" element={<IndexGa />} />
           <Route path="/ga13-oto" element={< ManifestationBootcampLandingGa/>} />
           <Route path="/ga13-ty-oto" element={<OtoThankYouGa />} />
           <Route path="/ga13-ty" element={<ThankYouFbGa/>} />
           <Route path="/1499-ty" element={<Thankupage1499/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
