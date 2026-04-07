import { AlertCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const before = [
  "Works harder every cycle. The recognition doesn't follow.",
  "Accepts salaries they know are too low. Every time.",
  "Carries career frustration home every single night",
  "Feels frustrated and overlooked constantly",
  "Feels capable of more but exhausted by the gap",
];

const after = [
  "Opportunities find you - you stop chasing them.",
  "You stop accepting less than you deserve.",
  "You leave work lighter than you arrived.",
  "You walk into rooms and people respond differently.",
  "You build momentum that doesn't stop.",
];

const Transformation = () => (
  <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.07),_transparent_45%)] pointer-events-none" />

    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <AnimatedSection>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-5 leading-[1.15] pb-2">
          <span className="text-white">From Stuck Professional → </span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Career Breakthrough
          </span>
        </h2>

        <p className="text-center mb-16 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
          See the transformation you'll experience after this masterclass.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <AnimatedSection delay={0.1}>
          <div className="rounded-3xl bg-red-500/10 border border-red-500/25 p-8 md:p-10 h-full shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertCircle className="w-6 h-6 text-red-400" strokeWidth={1.8} />
              <h3 className="text-2xl font-semibold text-red-300">
                Before — The Stuck Professional
              </h3>
            </div>

            <ul className="space-y-5">
              {before.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-white/75 hover:text-white transition duration-300 leading-relaxed"
                >
                  <span className="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-red-500/20 shrink-0">
                    <AlertCircle className="w-4 h-4 text-red-400" strokeWidth={1.8} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-3xl bg-yellow-400/10 border border-yellow-400/25 p-8 md:p-10 h-full shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-8">
              <CheckCircle2 className="w-6 h-6 text-yellow-400" strokeWidth={1.8} />
              <h3 className="text-2xl font-bold text-yellow-300">
                After — The Aligned Professional
              </h3>
            </div>

            <ul className="space-y-5">
              {after.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-white/80 hover:text-white transition duration-300 leading-relaxed"
                >
                  <span className="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400/20 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" strokeWidth={1.8} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Transformation;
