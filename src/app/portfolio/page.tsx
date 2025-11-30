import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { portfolioProjects } from "@/content/site";

export default function PortfolioPage() {
  return (
    <PageWrapper>
      <Section>
        <SectionHeader
          title="Programs we helped bring to market"
          description="A sampling of strategic initiatives operators shaped with Monet."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <Card key={project.title}>
              <p className="text-lg font-semibold text-text">{project.title}</p>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
