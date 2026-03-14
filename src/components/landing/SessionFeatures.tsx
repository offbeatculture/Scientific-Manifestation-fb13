import { Atom, Users, Brain, Sparkles, Globe, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: Atom, title: "Test the Vortex in Real-time", desc: "You'll experience manifestation techniques, not just theory — feel the difference in real-time." },
  { icon: Users, title: "Activate Your Social Will", desc: "Learn why friends and family are silently programming your reality and how to change it." },
  { icon: Brain, title: "Your Brain is a Prayer Machine", desc: "Learn how your mind already manifests 24/7 — and how to reprogram it for what you actually want." },
  { icon: Globe, title: "Experience Global Consciousness", desc: "Tap into the collective energy field and amplify your manifestation power exponentially." },
  { icon: MessageCircle, title: "Speak the Universe's Only Language", desc: "Discover the single frequency that the universe responds to — and start using it tonight." },
  { icon: Sparkles, title: "Receive the Manifestation Blueprint", desc: "Walk away with an actionable step-by-step blueprint you can use immediately after the session." },
];

const SessionFeatures = () => (
  <section className="py-14 lg:py-20 gradient-navy relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-[100px]" />
    <div className="container mx-auto px-4 max-w-5xl relative z-10">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-white">
          What Happens in This 90-Minute Session
        </h2>
        <p className="text-center text-white/50 mb-10 max-w-2xl mx-auto">
          A structured, science-backed session designed for real transformation — not motivation fluff.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            <div className="rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-sm p-5 hover:bg-white/[0.08] hover:border-gold/20 transition-all duration-300 h-full group">
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-3 group-hover:bg-gold/25 transition-colors">
                <f.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SessionFeatures;
