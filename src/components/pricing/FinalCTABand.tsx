import { Button } from "@/components/ui/button";

const FinalCTABand = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-highlight to-primary/60 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to Get Started?</h3>
          <p className="text-white/90">Start your free trial today or schedule a demo to see how our AI tools can elevate your workflow.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Start Free Trial</Button>
            <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTABand;
