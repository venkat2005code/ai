import { PageWrapper } from "@/components/layout/PageWrapper";
import { HomeTemplate } from "@/components/sections/HomeTemplate";
import { homeTwoContent } from "@/content/home";

export default function HomeTwoPage() {
  return (
    <PageWrapper>
      <HomeTemplate content={homeTwoContent} />
    </PageWrapper>
  );
}
