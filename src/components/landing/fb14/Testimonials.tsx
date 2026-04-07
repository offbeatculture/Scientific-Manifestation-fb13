import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Rahul M.",
    role: "Product Manager",
    text: "Honestly I came in very skeptical. I'm a product manager - I deal with data and logic all day. I'd been passed over for promotion twice and I genuinely didn't understand why. Three months after this session I got the promotion. I can't fully explain it but something shifted in how I was showing up.",
    stars: 5,
  },
  {
    name: "Priya S.",
    role: "Senior Analyst",
    text: "I'll be honest - I registered because it was free and I had nothing to lose. I almost didn't show up. I'm so glad I did. I've been in the same role for 3 years and I kept blaming my manager. This session made me look somewhere I'd been avoiding. Things have started moving in the last few months in a way they hadn't in years.",
    stars: 5,
  },
  {
    name: "Sneha K.",
    role: "Marketing Professional",
    text: "Three years at the same salary. I'd tried everything — new skills, new company, negotiation tactics. Nothing moved. After this session I understood what was actually blocking me. Six months later I'm earning 40% more. I wish I'd found this earlier.",
    stars: 5,
  },
  {
    name: "Arjun D.",
    role: "Software Engineer",
    text: "I was the hardest worker in my team. Everyone knew it. But I never got the recognition for my work, no promotions, no deserving hike - and that used to drive me insane. This session gave me the first logical explanation I'd ever heard for why that happens. And more importantly — what to do about it.",
    stars: 5,
  },
];

const Testimonials = () => (
  <section className="py-14 lg:py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-400/5 blur-[100px]" />
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-orange-400/5 blur-[100px]" />

    <div className="container mx-auto px-4 max-w-5xl relative z-10">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-white">
          Real Breakthroughs
        </h2>
        <p className="text-center text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          What professionals are saying after attending Ankit's sessions.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm p-6 h-full hover:bg-white/[0.08] hover:border-yellow-400/20 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-5 h-5 text-yellow-400/40 group-hover:text-yellow-400/70 transition-colors" />
                <div className="flex gap-0.5">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-white/80 text-sm leading-7 mb-5 italic">
                “{t.text}”
              </p>

              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/50 text-xs mt-1">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
