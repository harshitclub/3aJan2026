import AboutSection from "@/components/local/pages/homepage/about/About";
import ClientSection from "@/components/local/pages/homepage/clients/Clients";
// import CallToAction from "@/components/local/pages/homepage/cta/CallToAction";
import HeroSection from "@/components/local/pages/homepage/hero/Hero";
import ProgramSection from "@/components/local/pages/homepage/programs/Programs";
import RightTrainers from "@/components/local/pages/homepage/rightTrainers/RightTrainers";
import Score from "@/components/local/pages/homepage/score/Score";
import ThreePsSection from "@/components/local/pages/homepage/threePsSection/ThreePsSection";
import UpskillingChallenges from "@/components/local/pages/homepage/UpskillingChallenges/UpskillingChallenges";
import WhyChooseUs from "@/components/local/pages/homepage/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ClientSection />
      <UpskillingChallenges />
      <AboutSection />
      <ProgramSection />
      <RightTrainers />
      <Score />
      <ThreePsSection />
      {/* <CallToAction /> */}
    </main>
  );
}
