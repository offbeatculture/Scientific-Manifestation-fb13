import {
  Atom,
  Users,
  Brain,
  Sparkles,
  Globe,
  MessageCircle,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Brain,
    title: "The Biology of Stagnation",
    desc: "Discover why your brain has been filtering out the exact opportunities your career needs - and how to retune it deliberately.",
  },
  {
    icon: MessageCircle,
    title: "The Signal Running Your Life",
    desc: "Learn what you're broadcasting in every meeting, every conversation, every room you walk into - and how to change it.",
  },
  {
    icon: Users,
    title: "Why the Pattern Keeps Repeating",
    desc: "Understand why changing companies, managers, and strategies hasn't fixed what's actually blocking you.",
  },
  {
    icon: Globe,
    title: "The Science Behind Breakthroughs",
    desc: "Experience real peer-reviewed evidence for why some professionals attract opportunities effortlessly - while others keep missing them.",
  },
  {
    icon: Atom,
    title: "Speak the Language Your Growth Responds To",
    desc: "Discover the single internal frequency that determines what your career attracts - and start using it tonight.",
  },
  {
    icon: Sparkles,
    title: "Receive the Breakthrough Blueprint",
    desc: "Walk away with an actionable step-by-step framework you can apply immediately after the session.",
  },
];

const SessionFeatures = () => (
  <section className="py-14 lg:py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-yellow-400/5 blur-[100px]" />
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-orange-400/5 blur-[100px]" />

    <div className="container mx-auto px-4 max-w-5xl relative z-10">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-white leading-tight">
          What Happens in This 90-Minute Session
        </h2>
        <p className="text-center text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          A structured, science-backed session designed for real career transformation — not motivation fluff.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm p-5 hover:bg-white/[0.08] hover:border-yellow-400/25 transition-all duration-300 h-full group shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300 border border-yellow-400/10">
                <f.icon className="w-5 h-5 text-yellow-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">{f.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SessionFeatures;
