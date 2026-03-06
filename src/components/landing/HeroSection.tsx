import { motion } from "framer-motion";
import { Calendar, Clock, Gift, Users, Sparkles } from "lucide-react";
import speakerImg from "@/assets/speaker.jpeg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-black relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Cosmic particles */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "50px 50px"
      }} />
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-royal/10 blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-gold/10 blur-[80px]" />

      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> Live Masterclass
              </span>
              <span className="text-white/50 text-sm font-medium">Today Only Free</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
             From{" "}
             <span className="bg-gradient-to-r from-yellow-400 via-gold to-orange-400 bg-clip-text text-transparent">
             Frustrated Dreamer
            </span>{" "}
             → Manifestation Master
            </h1>

            <p className="text-lg text-white/90 mb-7 max-w-lg leading-relaxed">
  End the struggle • Discover the science • Start attracting immediately.
</p>

<div className="flex flex-wrap gap-5 mb-7 text-white/85 text-sm">
  <span className="flex items-center gap-2">
    <Calendar className="w-4 h-4 text-yellow-400" /> Live on Zoom
  </span>
  <span className="flex items-center gap-2">
    <Clock className="w-4 h-4 text-yellow-400" /> 90 Minutes
  </span>
  <span className="flex items-center gap-2">
    <Gift className="w-4 h-4 text-yellow-400" /> Free Bonuses Included
  </span>
</div>

<button
  onClick={scrollToForm}
  className="btn-cta text-lg px-10 py-4 mb-5"
>
  Register Now — It's Free
</button>

<div className="flex items-center gap-3 text-white/70 text-sm">
  <Users className="w-4 h-4 text-yellow-400" />
  <span>1,000+ attendees already registered • Limited seats</span>
</div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl glow-accent" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-royal/30 via-transparent to-gold/20" />
              <img
                src={speakerImg}
                alt="Ankit Neerav — Manifestation Coach"
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl border border-white/10"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
