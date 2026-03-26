import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const FinalCTAGa = () => {
  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-hidden gradient-navy py-14 lg:py-20">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-royal/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            {/* Tag */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-sm font-bold text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Today Only Free</span>
            </div>

            {/* Heading */}
            <h2 className="mb-5 text-3xl font-black leading-tight text-white md:text-5xl">
              From Frustrated Dreamer →
              <br className="hidden md:block" />
              Manifestation Master
            </h2>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Join 1,000+ ambitious individuals in this Science-Based
              Manifestation Breakthrough with Ankit Neerav. 90 minutes that can
              change your life — register now before seats fill up.
            </p>

            {/* CTA */}
            <button
              onClick={scrollToForm}
              className="btn-cta inline-flex items-center gap-2 px-8 py-4 text-base font-semibold md:px-12 md:py-5 md:text-lg"
            >
              Register Now — It&apos;s Free
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Note */}
            <p className="mt-5 text-xs text-white/40">
              100% Free • No replay available
            </p>
          </AnimatedSection>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0B1220] px-4 py-8">
        <div className="container mx-auto max-w-5xl text-center text-sm text-white/60">
          © {new Date().getFullYear()} Offbeat Culture Private Limited
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <a href="/privacy" className="underline transition hover:text-white">
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="/terms" className="underline transition hover:text-white">
              Terms
            </a>
            <span className="text-white/20">|</span>
            <a href="/refund" className="underline transition hover:text-white">
              Refund Policy
            </a>
            <span className="text-white/20">|</span>
            <a
              href="/shipping-policy"
              className="underline transition hover:text-white"
            >
              Shipping Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="/contact" className="underline transition hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FinalCTAGa;