import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { HomeContent } from "@/content/home";

export const Testimonials = ({ data }: { data: HomeContent["testimonials"] }) => (
  <Section>
    <SectionHeader title={data.title} description={data.description} />
    <div className="grid gap-6 md:grid-cols-2">
      {data.items.map((item) => (
        <Card key={item.author}>
          <p className="text-base text-text">“{item.quote}”</p>
          <p className="mt-4 text-sm font-semibold text-text">{item.author}</p>
          <p className="text-xs text-muted">{item.role}</p>
        </Card>
      ))}
    </div>
  </Section>
);
