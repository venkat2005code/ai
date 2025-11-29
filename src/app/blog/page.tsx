import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { blogPosts } from "@/content/site";
import { Button } from "@/components/ui/Button";

export default function BlogPage() {
  return (
    <PageWrapper>
      <Section>
        <SectionHeader
          title="Field notes from the Monet team"
          description="Perspectives on operating models, revenue science, and building momentum across functions."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex h-full flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                {post.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-text">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              <p className="mt-4 text-xs text-muted">{post.date}</p>
              <Button href="/contact" variant="ghost" className="mt-auto px-0 text-primary">
                Read more →
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
