import { Trophy, BadgeCheck, Activity, Users } from "lucide-react";
import speakerImg from "@/assets/speaker.jpeg";
import AnimatedSection from "../AnimatedSection";

const achievements = [
  {
    icon: Trophy,
    text: "Impact Awardee — Robbins-Madanes Institute",
  },
  {
    icon: BadgeCheck,
    text: "Unicorn Coach ’23 • Unicorn X ’24",
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

const SpeakerSectionGa = () => (
  <section className="py-16 lg:py-20 bg-white text-gray-900">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <AnimatedSection>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={speakerImg}
              alt="Ankit Neerav"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        {/* RIGHT CONTENT */}
        <AnimatedSection delay={0.15}>
          <p className="text-lg text-gray-600 mb-2 tracking-wide">
            Meet Your Scientific Guide
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Ankit Neerav
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#0f2e2a] text-white px-4 py-2 rounded-full text-sm">
              India’s #1 Scientific Manifestation Expert
            </span>
            <span className="bg-[#0f2e2a] text-white px-4 py-2 rounded-full text-sm">
              From Engineering Skeptic → Manifestation Master
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-8 text-base">
            As an IT engineer, Ankit doubted manifestation—until evidence
            changed everything. Since then, he’s helped{" "}
            <span className="font-semibold text-gray-900">1,000,000+</span> people
            turn doubt into scientific certainty using real experiments,
            neuroscience, and practical frameworks you can apply immediately.
          </p>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl p-4 flex items-start gap-3 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-300" />
                <span className="text-sm font-medium leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className="italic text-gray-600">
            “I spent ₹96 lakhs learning from the world’s top coaches—so you don’t have to.”
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default SpeakerSectionGa;