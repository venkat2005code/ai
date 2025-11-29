import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import analyticsImg from "@/assets/analytics-dashboard.jpg";
import automationImg from "@/assets/automation-flow.jpg";

const caseStudies = [
  {
    category: "Healthcare",
    title: "Revolutionizing Patient Diagnostics with Deep Learning",
    description: "Implemented a state-of-the-art computer vision system that analyzes medical scans with unprecedented accuracy, reducing diagnosis time and improving patient outcomes.",
    image: analyticsImg,
    results: [
      "35% improvement in early disease detection accuracy",
      "Reduced diagnosis time from 48 hours to 2 hours",
      "$2.3M annual cost savings through optimized workflows",
    ],
  },
  {
    category: "Finance",
    title: "Real-Time Fraud Detection at Scale",
    description: "Developed an ML-powered fraud detection system processing millions of transactions daily, identifying fraudulent patterns with minimal false positives.",
    image: automationImg,
    results: [
      "89% fraud detection rate with 98% precision",
      "Prevented $5M+ in fraudulent transactions annually",
      "Reduced manual review time by 70%",
    ],
  },
];

const CaseStudies = () => {
  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">In-Depth Case Studies</h2>
          <p className="text-muted-foreground mt-2">Deep dives into transformative AI implementations.</p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="bg-card rounded-2xl border border-border overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-[400px,1fr] gap-6">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                <div className="p-6 md:p-8">
                  <Badge variant="secondary" className="mb-3">{study.category}</Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="#" className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Read Full Case Study <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
