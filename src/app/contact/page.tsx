import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { contactInfo } from "@/content/site";

export default function ContactPage() {
  return (
    <PageWrapper>
      <Section>
        <SectionHeader
          title={contactInfo.headline}
          description={contactInfo.description}
          align="left"
        />
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="card-surface p-8">
            <ContactForm />
          </div>
          <div className="space-y-4 rounded-3xl border border-border bg-background/60 p-6">
            {contactInfo.channels.map((channel) => (
              <div key={channel.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  {channel.label}
                </p>
                <p className="mt-2 text-sm text-text">{channel.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
