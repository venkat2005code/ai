import { HelpCircle, BookOpen, PlayCircle, MessageCircle } from "lucide-react";

const supportLinks = [
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Find answers to common questions",
    link: "/faq",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive user guides",
    link: "#",
  },
  {
    icon: PlayCircle,
    title: "Tutorials",
    description: "Step-by-step video guides",
    link: "#",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    link: "#",
  },
];

const QuickSupportLinks = () => {
  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Quick Support Links</h2>
          <p className="text-muted-foreground mt-2">
            Access helpful resources and get immediate assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.link}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-all animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <link.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickSupportLinks;
