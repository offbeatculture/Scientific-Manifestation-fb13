import { Trophy, BadgeCheck, Activity, Users } from "lucide-react";
import speakerImg from "@/assets/speaker.jpeg";
import AnimatedSection from "./AnimatedSection";

const achievements = [
  {
    icon: Trophy,
    text: "Impact Awardee — Robbins-Madanes Institute",
  },
  {
    icon: BadgeCheck,
    text: "Unicorn Coach '23 · Unicorn X '24",
  },
  {
    icon: Activity,
    text: "Generated ₹50+ Crore in Business Revenue",
  },
  {
    icon: Users,
    text: "1,000,000+ Students Enrolled in Trainings",
  },
];

const SpeakerSection = () => (
  <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.06),_transparent_60%)] pointer-events-none" />

    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* RIGHT CONTENT (TEXT FIRST ON MOBILE) */}
        <AnimatedSection delay={0.15}>
          <p className="text-yellow-400 text-sm uppercase tracking-[0.2em] mb-3">
            Meet Your Guide
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Ankit Neerav
          </h2>

          <p className="text-white/70 mb-6 text-lg">
            Life coach and India’s #1 Scientific Manifestation Expert
          </p>

          {/* IMAGE (MOBILE ONLY - AFTER HEADER) */}
          <div className="block md:hidden mb-6">
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10">
              <img
                src={speakerImg}
                alt="Ankit Neerav"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10 border border-yellow-400/20">
            <p className="text-white font-medium leading-relaxed">
              From Zero Revenue In 2020 → ₹50 Crore In Revenue And 1,000,000 Lives Changed
            </p>
          </div>

          <div className="space-y-4 text-white/80 leading-relaxed mb-8">
            <p>
              As an engineer himself, Ankit dismissed manifestation — until he found the science and evidence he couldn’t ignore.
            </p>

            <p>
              When Ankit's business went to zero overnight in 2020 — 40 people on payroll, zero income coming in — he didn’t look for a shortcut. He went looking for the science.
            </p>

            <p>
              What he found changed everything. And since then, he’s helped 1,000,000+ people use that same science to transform their careers, their income, and their lives.
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 text-white rounded-xl p-4 flex items-start gap-3 hover:shadow-[0_10px_30px_rgba(250,204,21,0.15)] transition-all duration-300"
              >
                <item.icon className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-400" />
                <span className="text-sm font-medium leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className="italic text-white/70">
            “I spent ₹96 lakhs learning from the world's top coaches — so you don't have to.”
          </p>
        </AnimatedSection>

        {/* LEFT IMAGE (DESKTOP ONLY) */}
        <AnimatedSection>
          <div className="hidden md:block rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10">
            <img
              src={speakerImg}
              alt="Ankit Neerav"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default SpeakerSection;
