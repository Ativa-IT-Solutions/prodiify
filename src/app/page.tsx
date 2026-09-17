import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { DiscoveryStrip } from "@/components/sections/DiscoveryStrip";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { ShowcaseRows } from "@/components/sections/ShowcaseRows";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DiscoveryStrip />
        <FeaturesBento />
        <ShowcaseRows />
        <HowItWorks />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
