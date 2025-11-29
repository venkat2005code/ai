import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { aboutContent } from "@/content/about";

export default function AboutPage() {
  const { hero, story, stats, missionVision, timeline, team, achievements } =
    aboutContent;

  return (
    <PageWrapper>
      <section className="section-spacing pb-0">
        <div className="container text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            About Monet
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-text md:text-5xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            {hero.description}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader title={story.title} description={story.description} align="left" />
          </div>
          <div className="card-surface space-y-4 p-8">
            {story.highlights.map((item) => (
              <p key={item} className="text-sm text-text">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <p className="text-3xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-3 text-sm font-semibold text-text">{stat.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {[missionVision.mission, missionVision.vision].map((block) => (
            <Card key={block.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                {block.title}
              </p>
              <p className="mt-3 text-sm text-text">{block.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Milestones"
          description="A quick snapshot of moments that shaped Monet’s operator-first philosophy."
          align="left"
        />
        <div className="relative mt-8 space-y-6 border-l border-border pl-8">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-4 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <p className="text-sm font-semibold text-primary">{item.year}</p>
              <p className="text-sm text-text">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Leadership crew"
          description="Seasoned operators, product minds, and builders partnering with customers every week."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((person) => (
            <Card key={person.name}>
              <p className="text-lg font-semibold text-text">{person.name}</p>
              <p className="text-sm text-primary">{person.role}</p>
              <p className="mt-3 text-sm text-muted">{person.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Recognition"
          description="Highlights from communities that push revenue craftsmanship forward."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((award) => (
            <Card key={award.title}>
              <p className="text-lg font-semibold text-text">{award.title}</p>
              <p className="mt-2 text-sm text-muted">{award.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
