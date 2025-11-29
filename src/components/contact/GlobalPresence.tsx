import { Building2 } from "lucide-react";

const offices = [
  {
    city: "San Francisco",
    label: "Headquarters",
    address: ["123 AI Innovation Drive", "San Francisco, CA 94105", "United States"],
  },
  {
    city: "New York",
    label: "East Coast Office",
    address: ["456 Tech Avenue", "New York, NY 10013", "United States"],
  },
  {
    city: "London",
    label: "European Hub",
    address: ["789 Innovation Street", "London EC2A 4BX", "United Kingdom"],
  },
  {
    city: "Tokyo",
    label: "Asia Pacific Office",
    address: ["321 Tech Boulevard", "Shibuya, Tokyo 150-0002", "Japan"],
  },
];

const GlobalPresence = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Global Presence</h2>
          <p className="text-muted-foreground mt-2">
            Serving clients worldwide with offices across major tech hubs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, index) => (
            <div
              key={office.city}
              className="bg-card rounded-xl border border-border p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{office.city}</h3>
              <p className="text-sm text-primary font-medium mb-3">{office.label}</p>
              <div className="space-y-1">
                {office.address.map((line, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
