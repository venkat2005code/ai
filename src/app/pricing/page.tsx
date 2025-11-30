import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/content/site";

export default function PricingPage() {
  return (
    <PageWrapper>
      <Section>
        <SectionHeader
          title="Transparent plans aligned with the way you operate"
          description="Pick the program that fits your team’s pace. Every plan includes onboarding, templates, and success office hours."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex h-full flex-col ${plan.featured ? "ring-2 ring-primary" : ""}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                {plan.name}
              </p>
              <p className="mt-4 text-3xl font-semibold text-text">{plan.price}</p>
              <p className="text-xs text-muted">{plan.cadence}</p>
              <p className="mt-4 text-sm text-muted">{plan.highlight}</p>
              <ul className="mt-6 space-y-2 text-sm text-text">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-8 w-full" variant={plan.featured ? "primary" : "secondary"}>
                Choose plan
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
