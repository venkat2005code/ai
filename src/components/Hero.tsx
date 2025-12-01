import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-highlight to-primary/60 opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-highlight/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in-up py-12 lg:py-0">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-1 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Trusted by 500+ Companies Worldwide
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your Workflow with AI
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Unlock intelligent automation, gain actionable insights, and accelerate growth with cutting-edge AI solutions tailored to your business needs.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-white/90 justify-center lg:justify-start text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Cancel anytime</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-6 shadow-lg transition-all hover:shadow-xl">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-6 backdrop-blur-sm transition-all">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg sm:text-xl">50K+</p>
                  <p className="text-white/70 text-xs sm:text-sm">Active Users</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg sm:text-xl">98%</p>
                  <p className="text-white/70 text-xs sm:text-sm">Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg sm:text-xl">10M+</p>
                  <p className="text-white/70 text-xs sm:text-sm">Tasks Automated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] hidden md:block">
            <img 
              src={heroVisual} 
              alt="AI Visualization" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl opacity-80"
            />
            
            {/* Floating Card 1 - Top Right */}
            <div className="absolute top-6 sm:top-10 right-6 sm:right-10 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl animate-float">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">AI Assistant</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Always Available</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Bottom Left */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">Data Insights</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Real-time Analytics</p>
                </div>
              </div>
            </div>

            {/* Floating Card 3 - Middle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl animate-float" style={{ animationDelay: "0.75s" }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-highlight/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">Automation</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Lightning Fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
