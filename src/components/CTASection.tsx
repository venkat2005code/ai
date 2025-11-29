import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-highlight to-primary/80 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90">
            Join thousands of companies already using our AI tools to drive innovation and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 shadow-xl">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 backdrop-blur-sm"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
          </div>

          <p className="text-white/80 text-sm">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
