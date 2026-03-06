import { AlertCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const before = [
  "Reacts emotionally to problems",
  "Copies what influencers say blindly",
  "Uses random affirmations without strategy",
  "Feels frustrated and stuck constantly",
  "No clear framework or system",
];

const after = [
  "Responds with scientific intention",
  "Uses evidence-based manifestation",
  "Has a structured daily system",
  "Feels confident and aligned",
  "Follows a proven blueprint",
];

const Transformation = () => (
  <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden">
    
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      
      <AnimatedSection>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-[1.2] pb-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
          From Struggler → Scientific Manifestor
        </h2>

      <p className="text-center mb-16 max-w-2xl mx-auto text-lg bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
  See the transformation you'll experience after this masterclass.
</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">

        {/* BEFORE CARD */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl bg-red-500/10 border border-red-500/30 p-8 h-full shadow-xl hover:-translate-y-2 transition-all duration-500">

            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertCircle className="w-6 h-6 text-red-400" strokeWidth={1.8} />
              <h3 className="text-2xl font-semibold text-red-400">
                Before — The Struggler
              </h3>
            </div>

            <ul className="space-y-4">
              {before.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-white/70 hover:text-white transition duration-300"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500/20">
                    <AlertCircle className="w-4 h-4 text-red-400" strokeWidth={1.8} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* AFTER CARD */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl bg-yellow-400/10 border border-yellow-400/30 p-8 h-full shadow-xl hover:-translate-y-2 transition-all duration-500">

            <div className="flex items-center justify-center gap-3 mb-8">
              <CheckCircle2 className="w-6 h-6 text-yellow-400" strokeWidth={1.8} />
              <h3 className="text-2xl font-bold text-yellow-400">
                After — Scientific Manifestor
              </h3>
            </div>

            <ul className="space-y-4">
              {after.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-white/70 hover:text-white transition duration-300"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400/20">
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