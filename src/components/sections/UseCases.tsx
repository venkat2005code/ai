import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { HomeContent } from "@/content/home";

export const UseCases = ({ data }: { data: HomeContent["useCases"] }) => (
  <Section>
    <SectionHeader
      title={data.title}
      description={data.description}
      align="left"
    />
    <div className="grid gap-6 md:grid-cols-3">
      {data.items.map((item) => (
        <Card key={item.title}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            {item.tag}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-text">{item.title}</h3>
          <p className="mt-2 text-sm text-muted">{item.description}</p>
        </Card>
      ))}
    </div>
  </Section>
);
