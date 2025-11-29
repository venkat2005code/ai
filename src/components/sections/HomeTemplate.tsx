import { HomeContent } from "@/content/home";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Features } from "@/components/sections/Features";
import { Metrics } from "@/components/sections/Metrics";
import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export const HomeTemplate = ({ content }: { content: HomeContent }) => (
  <div className="space-y-0">
    <Hero data={content.hero} />
    <LogoStrip logos={content.logos} />
    <Features data={content.features} />
    <Metrics data={content.metrics} />
    <UseCases data={content.useCases} />
    <Testimonials data={content.testimonials} />
    <FinalCta data={content.cta} />
  </div>
);
