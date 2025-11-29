import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import promoBanner from "@/assets/promo-banner.jpg";

const SpecialOffer = () => {
  const benefits = [
    "Access to all premium features",
    "24/7 expert support",
    "No credit card required",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src={promoBanner}
              alt="Special Offer"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>Special Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Special Offer for New Users
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers who have transformed their business with our AI tools. 
              <span className="block mt-2 text-accent font-bold text-2xl">Get 30% off your first month!</span>
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              Claim Your Discount
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
