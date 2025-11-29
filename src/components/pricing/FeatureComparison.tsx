import { Check, Minus } from "lucide-react";

const features = [
  { name: "Core AI Tools", free: true, pro: true, enterprise: true },
  { name: "Usage Limits", free: "Limited", pro: "Full", enterprise: "Full + Custom" },
  { name: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated" },
  { name: "SLA", free: false, pro: "Standard", enterprise: "Custom" },
  { name: "Integration", free: false, pro: true, enterprise: true },
];

const FeatureComparison = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Detailed Feature Comparison</h2>
          <p className="text-muted-foreground mt-2">See what each plan includes and choose the best fit.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-border rounded-lg overflow-hidden bg-card">
            <thead className="bg-secondary/50">
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-foreground border-b border-border">Feature</th>
                <th className="text-left p-4 text-sm font-semibold text-foreground border-b border-border">Free</th>
                <th className="text-left p-4 text-sm font-semibold text-foreground border-b border-border">Pro</th>
                <th className="text-left p-4 text-sm font-semibold text-foreground border-b border-border">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.name} className="border-b border-border last:border-0">
                  <td className="p-4 text-sm text-foreground">{f.name}</td>
                  <td className="p-4 text-sm">
                    {typeof f.free === "boolean" ? (
                      f.free ? <Check className="h-4 w-4 text-primary" /> : <Minus className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <span className="text-muted-foreground">{f.free}</span>
                    )}
                  </td>
                  <td className="p-4 text-sm">
                    {typeof f.pro === "boolean" ? (
                      f.pro ? <Check className="h-4 w-4 text-primary" /> : <Minus className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <span className="text-muted-foreground">{f.pro}</span>
                    )}
                  </td>
                  <td className="p-4 text-sm">
                    {typeof f.enterprise === "boolean" ? (
                      f.enterprise ? <Check className="h-4 w-4 text-primary" /> : <Minus className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <span className="text-muted-foreground">{f.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
