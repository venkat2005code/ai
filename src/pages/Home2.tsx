import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Calendar, MessageSquare, BarChart3, FileText, Megaphone, Quote } from "lucide-react";
import dataInsightsImg from "@/assets/data-insights.jpg";
import chatAssistantImg from "@/assets/chat-assistant.jpg";
import contentGeneratorImg from "@/assets/content-generator.jpg";

const Home2 = ({ isRTL, setIsRTL }) => {
  return (
    <div className="min-h-screen">
      <Navigation isRTL={isRTL} setIsRTL={setIsRTL} />
      
      {/* Split Hero Section - Premium Two-Column Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-highlight/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Transform Your Workflow with AI
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Unlock intelligent automation, gain actionable insights, and accelerate growth with cutting-edge AI solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 shadow-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Demo
                </Button>
              </div>

              {/* Stat Chips */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-xs text-muted-foreground mt-1">Lead Growth</div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-accent">25%</div>
                  <div className="text-xs text-muted-foreground mt-1">Revenue Up</div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-highlight">20hrs</div>
                  <div className="text-xs text-muted-foreground mt-1">Saved/Week</div>
                </div>
              </div>
            </div>
            
            {/* Right - Realistic Image with Floating Elements */}
            <div className="relative h-[500px] lg:h-[600px] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
                  alt="Team collaborating on AI solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating Card - AI Assistant */}
              <div className="absolute top-10 right-6 bg-white rounded-2xl p-4 shadow-xl animate-float border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">AI Assistant</p>
                    <p className="text-xs text-muted-foreground">Always Available</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Data Insights */}
              <div className="absolute bottom-10 left-6 bg-white rounded-2xl p-4 shadow-xl animate-float border border-border" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Data Insights</p>
                    <p className="text-xs text-muted-foreground">Real-time Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured AI Products - Timeline/Vertical Style */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured AI Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our cutting-edge AI solutions designed to transform your workflow and boost productivity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                title: "Data Insights",
                description: "Advanced analytics to uncover hidden patterns and trends in your data.",
                image: dataInsightsImg,
                delay: "0s"
              },
              {
                title: "Chat Assistant",
                description: "Intelligent conversational AI that understands and responds to customer queries.",
                image: chatAssistantImg,
                delay: "0.1s"
              },
              {
                title: "Content Generator",
                description: "Create high-quality content in seconds with our AI-powered writing assistant.",
                image: contentGeneratorImg,
                delay: "0.2s"
              }
            ].map((product, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center animate-fade-in-up ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                style={{ animationDelay: product.delay }}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-foreground">{product.title}</h3>
                  <p className="text-lg text-muted-foreground">{product.description}</p>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 group p-0">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Tools - 2x2 Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Quick Access to Key Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started instantly with our most popular AI-powered solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: MessageSquare, title: "AI Assistant", description: "Conversational AI for customer support" },
              { icon: BarChart3, title: "Analytics", description: "Deep insights from your data" },
              { icon: FileText, title: "Document AI", description: "Process and analyze documents" },
              { icon: Megaphone, title: "Marketing AI", description: "Optimize campaigns and content" }
            ].map((tool, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-highlight/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <tool.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{tool.title}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Large + Two Small Layout */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Customer Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how businesses like yours are achieving remarkable results with our AI solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Large Featured Testimonial */}
            <Card className="relative border-border bg-card hover:shadow-xl transition-all duration-300 lg:row-span-2">
              <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="h-8 w-8 text-primary" />
              </div>
              
              <CardContent className="pt-24 pb-8 px-8">
                <p className="text-2xl text-foreground mb-8 italic leading-relaxed">
                  "Implementing these AI tools transformed our marketing strategy. We've seen a 40% increase in lead generation and saved over 20 hours per week on repetitive tasks."
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah Johnson"
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Sarah Johnson</p>
                    <p className="text-muted-foreground">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second Testimonial */}
            <Card className="relative border-border bg-card hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              
              <CardContent className="pt-20 pb-6 px-6">
                <p className="text-lg text-foreground mb-6 italic">
                  "The data insights tool helped us identify market opportunities we would have otherwise missed. Our revenue increased by 25% in just three months."
                </p>
                
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CEO, InnovateX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Two-Column with Checklist */}
      <section className="py-24 bg-gradient-to-br from-primary via-highlight to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90">
                Join thousands of companies already using our AI tools to drive innovation and growth.
              </p>
              
              <ul className="space-y-3">
                {["No credit card required", "14-day free trial", "Cancel anytime"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 shadow-xl">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 backdrop-blur-sm"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home2;
