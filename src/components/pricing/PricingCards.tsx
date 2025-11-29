import { Button } from "@/components/ui/button";
import { Check, Minus } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Basic tools to explore AI features.",
    popular: false,
    features: [
      { label: "Core AI Tools", enabled: true },
      { label: "Limited Usage", enabled: true },
      { label: "Community Support", enabled: true },
      { label: "No SLA", enabled: false },
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$29",
    desc: "Advanced features for professionals.",
    popular: true,
    features: [
      { label: "Core + Advanced Tools", enabled: true },
      { label: "Full Usage", enabled: true },
      { label: "Priority Support", enabled: true },
      { label: "Standard SLA", enabled: true },
    ],
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "$99",
    desc: "Custom solutions and enterprise support.",
    popular: false,
    features: [
      { label: "All Features", enabled: true },
      { label: "Unlimited Usage", enabled: true },
      { label: "Dedicated Support", enabled: true },
      { label: "Custom SLA", enabled: true },
    ],
    cta: "Contact Sales",
  },
];

const PricingCards = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-card rounded-2xl border border-border p-6 flex flex-col ${plan.popular ? "ring-2 ring-primary" : ""}`}
            >
              {plan.popular && (
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-accent text-accent-foreground text-xs px-3 py-1">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-foreground mt-2">{plan.price}<span className="text-base font-medium text-muted-foreground">/mo</span></p>
              <p className="text-muted-foreground mt-2">{plan.desc}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm">
                    {f.enabled ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className={f.enabled ? "text-foreground" : "text-muted-foreground"}>{f.label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button className="w-full">{plan.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
