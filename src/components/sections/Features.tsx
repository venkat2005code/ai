import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { HomeContent } from "@/content/home";

export const Features = ({ data }: { data: HomeContent["features"] }) => (
  <Section>
    <SectionHeader title={data.title} description={data.description} />
    <div className="grid gap-6 md:grid-cols-3">
      {data.items.map((item) => (
        <Card key={item.title}>
          <div className="space-y-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl">
              {item.icon}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);
