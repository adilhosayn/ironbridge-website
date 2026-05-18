import { HeroSection } from "@/components/sections/home/HeroSection";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { AboutSnapshot } from "@/components/sections/home/AboutSnapshot";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { MarketPresence } from "@/components/sections/home/MarketPresence";
import { CTABanner } from "@/components/sections/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSnapshot />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <MarketPresence />
      <CTABanner />
    </>
  );
}
