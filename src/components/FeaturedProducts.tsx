import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, MessageSquare, FileText, Zap, Users, TrendingUp } from "lucide-react";
import dataInsightsImg from "@/assets/data-insights.jpg";
import chatAssistantImg from "@/assets/chat-assistant.jpg";
import contentGeneratorImg from "@/assets/content-generator.jpg";

const products = [
  {
    title: "Data Insights Pro",
    description: "Advanced analytics to uncover hidden patterns and trends in your data with real-time visualization and predictive modeling.",
    image: dataInsightsImg,
    icon: BarChart3,
    features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards"],
    badge: "Most Popular",
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent conversational AI that understands context, provides personalized responses, and learns from interactions.",
    image: chatAssistantImg,
    icon: MessageSquare,
    features: ["24/7 Availability", "Multi-language", "Context Aware"],
    badge: "New",
  },
  {
    title: "Content Generator",
    description: "Create high-quality, SEO-optimized content in seconds with our AI-powered writing assistant trained on billions of documents.",
    image: contentGeneratorImg,
    icon: FileText,
    features: ["SEO Optimized", "Multiple Formats", "Plagiarism Free"],
    badge: "Trending",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Featured AI Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge AI solutions designed to transform your workflow, boost productivity, and drive business growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl sm:text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 group/btn p-0 h-auto">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">99.9%</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Uptime</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">50K+</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Active Users</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">10M+</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Tasks Completed</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">40%</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Time Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
