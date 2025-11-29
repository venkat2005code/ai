import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dataInsightsImg from "@/assets/data-insights.jpg";
import chatAssistantImg from "@/assets/chat-assistant.jpg";
import contentGeneratorImg from "@/assets/content-generator.jpg";

const products = [
  {
    title: "Data Insights",
    description: "Advanced analytics to uncover hidden patterns and trends in your data.",
    image: dataInsightsImg,
  },
  {
    title: "Chat Assistant",
    description: "Intelligent conversational AI that understands and responds to customer queries.",
    image: chatAssistantImg,
  },
  {
    title: "Content Generator",
    description: "Create high-quality content in seconds with our AI-powered writing assistant.",
    image: contentGeneratorImg,
  },
];

const FeaturedProducts = () => {
  return (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-primary hover:text-primary/80 group p-0">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
