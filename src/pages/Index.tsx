import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import SpecialOffer from "@/components/SpecialOffer";
import Testimonials from "@/components/Testimonials";
import QuickAccess from "@/components/QuickAccess";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";


const Index = ({ isRTL, setIsRTL }) => {
  return (
    <div className="min-h-screen">
      <Navigation isRTL={isRTL} setIsRTL={setIsRTL} />
      <Hero />
      <FeaturedProducts />
      <SpecialOffer />
      <Testimonials />
      <QuickAccess />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
