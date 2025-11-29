import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectShowcase from "@/components/portfolio/ProjectShowcase";
import CaseStudies from "@/components/portfolio/CaseStudies";
import ClientSuccessStories from "@/components/portfolio/ClientSuccessStories";
import VisualPreviews from "@/components/portfolio/VisualPreviews";

const Portfolio = ({ isRTL, setIsRTL }) => {
  return (
    <div className="min-h-screen">
      <Navigation isRTL={isRTL} setIsRTL={setIsRTL} />
      
      {/* 1) Hero section */}
      <PortfolioHero />

      {/* 2) Project Showcase + Filters */}
      <ProjectShowcase />

      {/* 3) In-Depth Case Studies */}
      <CaseStudies />

      {/* 4) Client Success Stories */}
      <ClientSuccessStories />

      {/* 5) Visual Previews (Final CTA section) */}
      <VisualPreviews />

      <Footer />
    </div>
  );
};

export default Portfolio;
