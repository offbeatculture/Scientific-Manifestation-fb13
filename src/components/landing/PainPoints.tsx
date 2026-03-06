import { AlertCircle, TrendingDown, Brain, Clock, Frown, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pains = [
  { icon: TrendingDown, title: "You try every strategy, but nothing works consistently" },
  { icon: Frown, title: "You feel stuck, no matter how hard you try" },
  { icon: Brain, title: "Positive thinking alone isn't cutting it" },
  { icon: Clock, title: "Not getting results fast enough" },
  { icon: AlertCircle, title: "Your mindset resets to survival mode every day" },
  { icon: Target, title: "Attracted to Goals & Dreams but can't manifest them" },
];

const PainPoints = () => (
  <section className="py-12 lg:py-16 bg-gradient-to-br from-black via-[#0f172a] to-black text-white relative overflow-hidden">

    {/* Background Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.06),_transparent_70%)] pointer-events-none" />

    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 leading-tight">
          <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            The Painful Truth
          </span>
          <br />
          <span className="text-white/90">About Your Dreams</span>
        </h2>

        <p className="text-center text-white/60 mb-8 max-w-xl mx-auto text-base">
          If even one of these feels familiar… you are not alone.
        </p>
      </AnimatedSection>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pains.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            
            <div className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-5 transition-all duration-400 hover:-translate-y-1.5 hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] text-center md:text-left">

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center mb-3 mx-auto md:mx-0 group-hover:scale-105 transition-transform duration-300">
                <p.icon className="w-4 h-4 text-yellow-400" />
              </div>

              {/* Text */}
              <p className="text-white/80 leading-relaxed text-sm font-medium">
                {p.title}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>

          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <p className="text-center mt-10 text-sm italic bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
          If one resonates… it’s time to break the cycle — scientifically.
        </p>
      </AnimatedSection>

    </div>
  </section>
);

export default PainPoints;