import HeroSection from "@/components/landing/HeroSection";
import RegistrationForm from "@/components/landing/RegistrationForm";
import PainPoints from "@/components/landing/PainPoints";
import SessionFeatures from "@/components/landing/SessionFeatures";
import Transformation from "@/components/landing/Transformation";
import SpeakerSection from "@/components/landing/SpeakerSection";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import StickyCTA from "@/components/landing/StickyCTA";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <RegistrationForm />
      <PainPoints />
      <SessionFeatures />
      <Transformation />
      <SpeakerSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <StickyCTA />
    </main>
  );
};

export default Index;
