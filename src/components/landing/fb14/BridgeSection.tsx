import { Brain, Eye, Microscope, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const BridgeSectionCareerScientificManifestation = () => {
  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.08),_transparent_35%)] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-yellow-400 text-sm font-semibold tracking-[0.22em] uppercase mb-4">
                Why it keeps happening
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                <span className="text-white">The reason it keeps happening — </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  and why it's not what you think
                </span>
              </h2>

              <p className="text-white/65 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Every career conversation you've ever had has focused on the external — your skills, your strategy, your network, your timing. And those things matter. But they're not what's running your career.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.05}>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 items-center justify-center border border-yellow-400/20">
                    <Brain className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="space-y-4 text-white/85 leading-8 text-[15px] md:text-base">
                    <p>
                      Your brain has a <span className="text-white font-semibold">biological system</span> that decides what opportunities you notice, how people perceive you before you say a word, and what results your effort produces.
                    </p>
                    <p>
                      And that system doesn't respond to your <span className="text-white font-semibold">hard work</span>. It responds to your <span className="text-white font-semibold">emotional frequency</span> — what you genuinely feel underneath.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center border border-yellow-400/20">
                      <Eye className="w-5 h-5 text-yellow-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      Your brain filters reality first
                    </h3>
                  </div>

                  <p className="text-white/80 leading-8 text-[15px] md:text-base mb-4">
                    Think about the last time you got interested in a new car. Suddenly you saw it everywhere. That car was always there. Your brain just wasn't tuned to see it.
                  </p>

                  <p className="text-white/80 leading-8 text-[15px] md:text-base">
                    The same thing is happening with your career right now. The right conversations. The right opportunities. The right people. Already around you. But being filtered out before you notice them.
                  </p>
                </div>

                <div className="rounded-3xl border border-yellow-400/20 bg-[linear-gradient(180deg,rgba(250,204,21,0.12),rgba(255,255,255,0.04))] backdrop-blur-xl p-6 md:p-8 shadow-[0_10px_40px_rgba(250,204,21,0.08)]">
                  <p className="text-yellow-300 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                    Hard truth
                  </p>
                  <p className="text-white text-lg leading-8 font-medium">
                    Most professionals are running a frequency that's working directly against what they want.
                  </p>
                  <p className="text-white/70 leading-7 text-sm mt-4">
                    And they're doing it without knowing it.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center border border-yellow-400/20">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    I call this Scientific Manifestation
                  </h3>
                </div>

                <p className="text-white/80 leading-8 text-[15px] md:text-base mb-5">
                  Before you close this page — let me tell you what I don't mean.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-2xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-white/90 text-sm leading-7">I don't mean think positive and good things happen.</p>
                  </div>
                  <div className="rounded-2xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-white/90 text-sm leading-7">I don't mean visualise your dream life and wait.</p>
                  </div>
                  <div className="rounded-2xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-white/90 text-sm leading-7">I don't mean anything that can't be tested, measured, or explained.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10 p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <Microscope className="w-5 h-5 text-yellow-300 mt-1 shrink-0" />
                    <p className="text-white/90 leading-8 text-[15px] md:text-base">
                      What I mean is this: there is <span className="text-white font-semibold">peer-reviewed, laboratory-tested, reproducible scientific evidence</span> that your internal state shapes your external results — your career, your income, and your opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-7 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <p className="text-xl md:text-2xl font-semibold leading-relaxed text-white mb-3">
                  Manifestation isn't magic.
                </p>
                <p className="text-lg md:text-2xl font-semibold leading-relaxed bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent mb-4">
                  It's the most misunderstood science of our time.
                </p>
                <p className="text-white/70 max-w-2xl mx-auto leading-8 text-[15px] md:text-base">
                  And this masterclass is the explanation your career has been waiting for.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgeSectionCareerScientificManifestation;
