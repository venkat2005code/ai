import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/content/site";

export default function FaqPage() {
  return (
    <PageWrapper>
      <Section>
        <SectionHeader
          title="Questions operators ask before partnering with Monet"
          description="If you need details not covered here, our team is a message away."
        />
        <Accordion items={faqItems} />
      </Section>
    </PageWrapper>
  );
}
