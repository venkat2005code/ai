import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Minus, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    desc: "Perfect for individuals and small projects to explore AI features.",
    popular: false,
    icon: Sparkles,
    features: [
      { label: "5 AI Tools Access", enabled: true },
      { label: "1,000 API Calls/month", enabled: true },
      { label: "Community Support", enabled: true },
      { label: "Basic Analytics", enabled: true },
      { label: "Priority Support", enabled: false },
      { label: "Custom Integrations", enabled: false },
      { label: "SLA Guarantee", enabled: false },
      { label: "Advanced Security", enabled: false },
    ],
    cta: "Start Free",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    desc: "Advanced features for professionals and growing teams.",
    popular: true,
    icon: Zap,
    features: [
      { label: "All AI Tools Access", enabled: true },
      { label: "50,000 API Calls/month", enabled: true },
      { label: "Priority Email Support", enabled: true },
      { label: "Advanced Analytics", enabled: true },
      { label: "Custom Workflows", enabled: true },
      { label: "Team Collaboration", enabled: true },
      { label: "Standard SLA (99.5%)", enabled: true },
      { label: "Advanced Security", enabled: false },
    ],
    cta: "Start 14-Day Trial",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    desc: "Custom solutions with dedicated support for large organizations.",
    popular: false,
    icon: Crown,
    features: [
      { label: "Unlimited AI Tools", enabled: true },
      { label: "Unlimited API Calls", enabled: true },
      { label: "24/7 Dedicated Support", enabled: true },
      { label: "Custom Analytics", enabled: true },
      { label: "Unlimited Workflows", enabled: true },
      { label: "Advanced Team Features", enabled: true },
      { label: "Premium SLA (99.9%)", enabled: true },
      { label: "Enterprise Security", enabled: true },
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
  },
];

const PricingCards = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`bg-card rounded-2xl border-2 p-6 sm:p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  plan.popular 
                    ? "border-primary shadow-xl scale-105" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 -mt-2">
                    <Badge className="bg-primary text-primary-foreground text-xs sm:text-sm px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{plan.name}</h3>
                </div>

                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-base text-muted-foreground">{plan.period}</span>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed min-h-[3rem]">{plan.desc}</p>

                <ul className="space-y-3 sm:space-y-4 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 text-sm sm:text-base">
                      {f.enabled ? (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                          <Minus className="h-3 w-3 text-muted-foreground" />
                        </div>
                      )}
                      <span className={f.enabled ? "text-foreground" : "text-muted-foreground line-through"}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full py-6 text-base font-semibold"
                  variant={plan.ctaVariant}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
