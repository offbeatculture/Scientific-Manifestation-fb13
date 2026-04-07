
import RegistrationForm from "@/components/landing/RegistrationForm";
import StickyCTA from "@/components/landing/StickyCTA";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import HeroSectionFb14 from "@/components/landing/fb14/HeroSection";
import PainPointsfb13 from "@/components/landing/fb14/PainPoints";
import BridgeSectionCareerScientificManifestation from "@/components/landing/fb14/BridgeSection";
import SessionFeatures from "@/components/landing/fb14/SessionFeatures";
import Transformation from "@/components/landing/fb14/Transformation";
import SpeakerSection from "@/components/landing/fb14/SpeakerSection";
import Testimonials from "@/components/landing/fb14/Testimonials";
import FAQ from "@/components/landing/fb14/FAQ";
import FinalCTA from "@/components/landing/fb14/FinalCTA";

const IndexFb14 = () => {

  useFacebookPixel();
  return (
    <main className="overflow-hidden">
      <HeroSectionFb14 />
      <RegistrationForm />
      <PainPointsfb13 />
      <BridgeSectionCareerScientificManifestation/>
      <SessionFeatures/>
      <Transformation />
      <SpeakerSection/>
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <StickyCTA />
    </main>
  );
};

export default IndexFb14;
