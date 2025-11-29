import { HomeTemplate } from "@/components/sections/HomeTemplate";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { homeOneContent } from "@/content/home";

export default function Home() {
  return (
    <PageWrapper>
      <HomeTemplate content={homeOneContent} />
    </PageWrapper>
  );
}
