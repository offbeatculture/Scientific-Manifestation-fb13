import {
  AlertCircle,
  TrendingDown,
  Brain,
  Clock,
  Frown,
  Target,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pains = [
  {
    icon: TrendingDown,
    title:
      "You work harder than most people around you - but you're still not the furthest ahead",
  },
  {
    icon: AlertCircle,
    title:
      "The promotion keeps going to someone else - despite your performance",
  },
  {
    icon: Target,
    title: "You've changed companies. The same ceiling followed you.",
  },
  {
    icon: Clock,
    title:
      "Your salary hasn't moved in years despite everything you've done",
  },
  {
    icon: Brain,
    title:
      "You hesitate on opportunities - and watch someone else take them",
  },
  {
    icon: Frown,
    title:
      "You feel stuck - and you don't know what's actually blocking you",
  },
  {
    icon: AlertCircle,
    title: "You've been told you're ready. Nothing has moved.",
  },
];

const PainPoints = () => (
  <section className="py-12 lg:py-16 bg-gradient-to-br from-black via-[#0f172a] to-black text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.06),_transparent_70%)] pointer-events-none" />

    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 leading-tight">
          <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            The Painful Truth
          </span>
          <br />
          <span className="text-white/90">About Your Career</span>
        </h2>

        <p className="text-center text-white/60 mb-8 max-w-xl mx-auto text-base">
          If even one of these feels familiar… you are not alone.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pains.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            <div className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-5 transition-all duration-400 hover:-translate-y-1.5 hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] text-center md:text-left h-full">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center mb-3 mx-auto md:mx-0 group-hover:scale-105 transition-transform duration-300">
                <p.icon className="w-4 h-4 text-yellow-400" />
              </div>

              <p className="text-white/80 leading-relaxed text-sm font-medium">
                {p.title}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <p className="text-center mt-10 text-sm italic bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
          If even one resonates… it's time to break the cycle - scientifically.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default PainPoints;
