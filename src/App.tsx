import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => {
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.body.classList.remove("rtl", "ltr");
    document.body.classList.add(isRTL ? "rtl" : "ltr");
  }, [isRTL]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/ai">
          <Routes>
            <Route path="/" element={<Index isRTL={isRTL} setIsRTL={setIsRTL} />} />
            <Route path="/home-2" element={<Home2 isRTL={isRTL} setIsRTL={setIsRTL} />} />
            <Route path="/about" element={<About isRTL={isRTL} setIsRTL={setIsRTL} />} />
            <Route path="/pricing" element={<Pricing isRTL={isRTL} setIsRTL={setIsRTL} />} />
            <Route path="/blog" element={<Blog isRTL={isRTL} setIsRTL={setIsRTL} />} />
            <Route path="/portfolio" element={<Portfolio isRTL={isRTL} setIsRTL={setIsRTL} />} />
            <Route path="/faq" element={<FAQPage isRTL={isRTL} setIsRTL={setIsRTL} />} />
            <Route path="/contact" element={<Contact isRTL={isRTL} setIsRTL={setIsRTL} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard isRTL={isRTL} setIsRTL={setIsRTL} />} />
            <Route path="/dashboard" element={<Dashboard isRTL={isRTL} setIsRTL={setIsRTL} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
