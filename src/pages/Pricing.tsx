import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import FinalCTABand from "@/components/pricing/FinalCTABand";

const Pricing = ({ isRTL, setIsRTL }) => {
  // Legacy inline plans removed in favor of pricing-specific components structure

  return (
    <div className="min-h-screen">
      <Navigation isRTL={isRTL} setIsRTL={setIsRTL} />
      {/* a) Pricing hero */}
      <PricingHero />

      {/* b) Three pricing cards in one row */}
      <PricingCards />

      {/* c) Detailed Feature Comparison table */}
      <FeatureComparison />

      {/* d) Pricing FAQ */}
      <PricingFAQ />

      {/* e) Final CTA band */}
      <FinalCTABand />
      <Footer />
    </div>
  );
};

export default Pricing;
