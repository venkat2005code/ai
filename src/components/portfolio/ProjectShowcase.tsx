import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, DollarSign } from "lucide-react";
import analyticsImg from "@/assets/analytics-dashboard.jpg";
import chatAssistantImg from "@/assets/chat-assistant.jpg";
import contentGeneratorImg from "@/assets/content-generator.jpg";
import dataInsightsImg from "@/assets/data-insights.jpg";
import automationImg from "@/assets/automation-flow.jpg";
import virtualAssistantImg from "@/assets/virtual-assistant.jpg";

const filters = ["All Projects", "Healthcare", "Finance", "Retail", "Manufacturing"];

const projects = [
  {
    category: "Healthcare",
    title: "AI Diagnostics Platform",
    description: "Deep learning model for early disease detection with medical imaging analysis.",
    image: analyticsImg,
    metrics: [
      { label: "+35% Accuracy", icon: TrendingUp },
      { label: "$2.3M Saved", icon: DollarSign },
    ],
  },
  {
    category: "Finance",
    title: "Fraud Detection System",
    description: "Real-time ML-powered fraud detection for transaction monitoring and prevention.",
    image: chatAssistantImg,
    metrics: [
      { label: "+89% Detection", icon: TrendingUp },
      { label: "$5M Prevented", icon: DollarSign },
    ],
  },
  {
    category: "Retail",
    title: "Smart Inventory Manager",
    description: "Predictive analytics for optimized inventory management and demand forecasting.",
    image: contentGeneratorImg,
    metrics: [
      { label: "+42% Efficiency", icon: TrendingUp },
      { label: "$1.8M ROI", icon: DollarSign },
    ],
  },
  {
    category: "Manufacturing",
    title: "Predictive Maintenance AI",
    description: "IoT-powered predictive maintenance to reduce downtime and optimize operations.",
    image: dataInsightsImg,
    metrics: [
      { label: "+60% Uptime", icon: TrendingUp },
      { label: "$3.2M Saved", icon: DollarSign },
    ],
  },
  {
    category: "Healthcare",
    title: "Patient Care Assistant",
    description: "NLP-based virtual assistant for patient engagement and care coordination.",
    image: automationImg,
    metrics: [
      { label: "+78% Satisfaction", icon: TrendingUp },
      { label: "$950K Saved", icon: DollarSign },
    ],
  },
  {
    category: "Finance",
    title: "Investment Insights Engine",
    description: "AI-driven market analysis and portfolio optimization for investment firms.",
    image: virtualAssistantImg,
    metrics: [
      { label: "+52% Returns", icon: TrendingUp },
      { label: "$7.5M Generated", icon: DollarSign },
    ],
  },
];

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projects.filter((p) =>
    activeFilter === "All Projects" ? true : p.category === activeFilter
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Project Showcase</h2>
          <p className="text-muted-foreground mt-2">AI solutions delivered across diverse industries.</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "bg-primary text-primary-foreground" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="flex items-center gap-1 text-primary font-semibold">
                      <metric.icon className="h-4 w-4" />
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
