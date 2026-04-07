import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
        <AnimatedSection>
          <div className="bg-yellow-400/15 text-yellow-400 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Today Only Free
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            From Stuck Professional → <br className="hidden md:block" />Career Breakthrough
          </h2>

          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Join 1,000+ ambitious professionals in this Science-Based Breakthrough with Ankit Neerav. 90 minutes that can change your life - register now before seats fill up.
          </p>

          <button
            onClick={scrollToForm}
            className="btn-cta text-lg px-12 py-5 gap-2"
          >
            Register Now — It's Free <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-white/40 text-xs mt-5">
            100% Free · No replay available
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;