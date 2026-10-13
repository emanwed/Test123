import { Hero } from "@/components/home/Hero";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { ProductExplorer } from "@/components/home/ProductExplorer";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Segments } from "@/components/home/Segments";
import { Growth } from "@/components/home/Growth";
import { Timeline } from "@/components/home/Timeline";
import { Fundraising } from "@/components/home/Fundraising";
import { Leadership } from "@/components/home/Leadership";
import { NewsPreview } from "@/components/home/NewsPreview";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ProductExplorer />
      <Ecosystem />
      <Segments />
      <Growth />
      <Timeline />
      <Fundraising />
      <Leadership limit={4} />
      <NewsPreview />
      <FAQ />
      <CTA />
    </>
  );
}
