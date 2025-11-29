import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQHero from "@/components/faq/FAQHero";
import FAQCategories from "@/components/faq/FAQCategories";
import FAQAccordion from "@/components/faq/FAQAccordion";
import SupportCards from "@/components/faq/SupportCards";

const FAQPage = ({ isRTL, setIsRTL }) => {
  return (
    <div className="min-h-screen">
      <Navigation isRTL={isRTL} setIsRTL={setIsRTL} />
      
      {/* 1) Page hero */}
      <FAQHero />

      {/* 2) FAQ category cards (3 cards) */}
      <FAQCategories />

      {/* 3) FAQ accordion list */}
      <FAQAccordion />

      {/* 4) "Still Need Help?" support cards */}
      <SupportCards />

      <Footer />
    </div>
  );
};

export default FAQPage;
