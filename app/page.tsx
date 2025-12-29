import AboutSection from "@/components/local/homepage/about/About";
import ClientSection from "@/components/local/homepage/clients/Clients";
import CallToAction from "@/components/local/homepage/cta/CallToAction";
import HeroSection from "@/components/local/homepage/hero/Hero";
import ProgramSection from "@/components/local/homepage/programs/Programs";
import RightTrainers from "@/components/local/homepage/rightTrainers/RightTrainers";
import Score from "@/components/local/homepage/score/Score";
import WhyChooseUs from "@/components/local/homepage/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ClientSection />
      <ProgramSection />
      <AboutSection />
      <Score />
      <RightTrainers />
      <CallToAction />
    </main>
  );
}
