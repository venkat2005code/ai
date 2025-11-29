import { MessageCircle, Mail, FileText, ArrowRight } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team during business hours.",
    link: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message and we'll respond within 24 hours.",
    link: "Send Email",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Explore comprehensive guides, tutorials, and API references.",
    link: "View Docs",
  },
];

const SupportCards = () => {
  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Still Need Help?</h2>
          <p className="text-muted-foreground mt-2">Our support team is ready to assist you with any questions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {supportOptions.map((option, index) => (
            <div
              key={option.title}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-card transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <option.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{option.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
              <a href="#" className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                {option.link} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCards;
