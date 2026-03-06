import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Priya S.",
    role: "Entrepreneur",
    text: "After attending this masterclass, I manifested my dream client within 2 weeks. The scientific approach finally made it click for me.",
    stars: 5,
  },
  {
    name: "Rahul M.",
    role: "Product Manager",
    text: "I was skeptical, but Ankit's framework is genuinely evidence-based. My focus and results have transformed completely.",
    stars: 5,
  },
  {
    name: "Sneha K.",
    role: "Freelancer",
    text: "This wasn't the typical 'think positive' stuff. It was structured, scientific, and immediately applicable. Worth every minute.",
    stars: 5,
  },
  {
    name: "Arjun D.",
    role: "Startup Founder",
    text: "The vortex technique alone changed how I approach my goals. I've recommended this to everyone on my team.",
    stars: 5,
  },
];

const Testimonials = () => (
  <section className="py-14 lg:py-20 gradient-navy relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-royal/5 blur-[100px]" />
    <div className="container mx-auto px-4 max-w-5xl relative z-10">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-white">
          Real Breakthroughs
        </h2>
        <p className="text-center text-white/50 mb-10 max-w-2xl mx-auto">
          What people are saying after attending Ankit's live sessions.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-sm p-5 h-full hover:bg-white/[0.07] transition-all duration-300">
              <Quote className="w-5 h-5 text-gold/40 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
