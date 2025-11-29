import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { HomeContent } from "@/content/home";

export const Metrics = ({ data }: { data: HomeContent["metrics"] }) => (
  <Section>
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <SectionHeader
        title={data.title}
        description={data.description}
        align="left"
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {data.stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <p className="text-3xl font-semibold text-primary">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-text">{stat.label}</p>
            <p className="mt-1 text-xs text-muted">{stat.detail}</p>
          </Card>
        ))}
      </div>
    </div>
  </Section>
);
