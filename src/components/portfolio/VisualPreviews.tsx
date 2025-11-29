import { Button } from "@/components/ui/button";
import { BarChart3, MessageSquare, FileText } from "lucide-react";

const previews = [
  {
    title: "Dashboard Previews",
    description: "Explore interactive analytics dashboards with real-time data visualization and insights.",
    icon: BarChart3,
  },
  {
    title: "AI Assistant Demo",
    description: "Experience our intelligent assistant in action with natural language understanding.",
    icon: MessageSquare,
  },
  {
    title: "Content Generator",
    description: "See how our AI creates high-quality content tailored to your brand and audience.",
    icon: FileText,
  },
];

const VisualPreviews = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-highlight to-primary/60 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Visual Previews</h2>
          <p className="text-white/90 mt-2">Interactive demos and live examples of our AI solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {previews.map((preview, index) => (
            <div
              key={preview.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <preview.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{preview.title}</h3>
              <p className="text-white/80 text-sm mb-4">{preview.description}</p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                View Demo
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualPreviews;
