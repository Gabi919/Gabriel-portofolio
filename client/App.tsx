import "./global.css";

import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";


const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter basename="/Gabriel-portofolio">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
