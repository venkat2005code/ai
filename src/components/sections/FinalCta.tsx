import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HomeContent } from "@/content/home";

export const FinalCta = ({ data }: { data: HomeContent["cta"] }) => (
  <Section>
    <div className="card-surface flex flex-col gap-6 px-8 py-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
      <div className="max-w-xl">
        <p className="text-2xl font-semibold text-text">{data.title}</p>
        <p className="mt-3 text-sm text-muted">{data.description}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={data.primary.href}>{data.primary.label}</Button>
        <Button href={data.secondary.href} variant="secondary">
          {data.secondary.label}
        </Button>
      </div>
    </div>
  </Section>
);
