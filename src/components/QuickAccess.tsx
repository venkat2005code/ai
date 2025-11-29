import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, BarChart3, FileText, Megaphone } from "lucide-react";

const tools = [
  {
    icon: MessageSquare,
    title: "AI Assistant",
    description: "Conversational AI for customer support",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Deep insights from your data",
  },
  {
    icon: FileText,
    title: "Document AI",
    description: "Process and analyze documents",
  },
  {
    icon: Megaphone,
    title: "Marketing AI",
    description: "Optimize campaigns and content",
  },
];

const QuickAccess = () => {
  return (
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-highlight/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <tool.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
