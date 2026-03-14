import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-14 lg:py-20 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "50px 50px"
      }} />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-royal/8 blur-[120px]" />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
        <AnimatedSection>
          <div className="bg-gold/15 text-gold inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Today Only Free
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            From Frustrated Dreamer → <br className="hidden md:block" />Manifestation Master
          </h2>

          <p className="text-white/50 mb-8 max-w-xl mx-auto leading-relaxed text-sm">
            Join 1,000+ ambitious individuals in this Science-Based Manifestation
            Breakthrough with Ankit Neerav. 90 minutes that can change your life — register
            now before seats fill up.
          </p>

          <button onClick={scrollToForm} className="btn-cta text-lg px-12 py-5 gap-2">
            Register Now — It's Free <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-white/30 text-xs mt-5">
            100% Free  • No replay available
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;
