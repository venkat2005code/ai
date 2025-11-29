import { HelpCircle, Wrench, CreditCard } from "lucide-react";

const categories = [
  {
    icon: HelpCircle,
    title: "General Questions",
    description: "Learn about our AI platform, features, and how it can help your business grow.",
  },
  {
    icon: Wrench,
    title: "Using AI Tools",
    description: "Discover how to get the most out of our AI tools with practical tips and guides.",
  },
  {
    icon: CreditCard,
    title: "Pricing & Billing",
    description: "Understand our pricing structure, payment methods, and subscription options.",
  },
];

const FAQCategories = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-card transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <category.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQCategories;
