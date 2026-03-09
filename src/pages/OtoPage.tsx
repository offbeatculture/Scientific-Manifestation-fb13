import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  CalendarDays,
  Gift,
  Quote,
  Plus,
  Minus,
  ArrowRight,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const ACCENT_TEXT = "text-violet-700";
const ACCENT_SOFT_BG_2 = "bg-violet-100/60";
const ACCENT_ICON = "text-violet-700";

export default function ManifestationBootcampLanding() {

  useFacebookPixel("Purchase-1499", {
    value: 1499,
    currency: "INR",
  });

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [openFaq, setOpenFaq] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const optinRef = useRef<HTMLDivElement | null>(null);

  const YT_ID = "_G4WQgitmyk";

  // ✅ Read values from URL with fallback names
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const phone =
    searchParams.get("phone") ||
    searchParams.get("contact") ||
    "";
  const profession =
    searchParams.get("profession") ||
    searchParams.get("status") ||
    "";

  useEffect(() => {
    console.log("OTO PAGE PARAMS:", {
      name,
      email,
      phone,
      profession,
      fullUrl: window.location.href,
    });
  }, [name, email, phone, profession]);

  const razorpayUrl = `https://pages.razorpay.com/pl_SNsxZoCKGwBLRo/view?name=${encodeURIComponent(
    name
  )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
    phone
  )}&profession=${encodeURIComponent(profession)}`;

  const scrollToOptin = () => {
    optinRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleMute = () => {
    if (!iframeRef.current?.contentWindow) return;

    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: isMuted ? "unMute" : "mute",
        args: [],
      }),
      "*"
    );

    setIsMuted(!isMuted);
  };

  const handleFullscreen = async () => {
    if (!videoWrapperRef.current) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await videoWrapperRef.current.requestFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  const faqs = useMemo(
    () => [
      {
        q: "Is this for beginners?",
        a: "Yes. Each day is structured with simple steps, guided prompts, and practical exercises you can do in 15–30 minutes.",
      },
      {
        q: "How long do I need each day?",
        a: "Most students complete the daily transformation in 15–30 minutes. If you want to go deeper, you’ll have optional bonus practices too.",
      },
      {
        q: "Will I get lifetime access?",
        a: "You’ll get access to the core materials and updates during your access window (based on your offer). Save/download any included resources where available.",
      },
      {
        q: "What if I’ve tried manifesting and it didn’t work?",
        a: "This program focuses on alignment + action: clearing blocks, installing new beliefs, and building a repeatable system you can use for any goal.",
      },
      {
        q: "Is there a community?",
        a: "If your offer includes it, you’ll receive community access details after checkout/opt-in.",
      },
      {
        q: "Can I do this while busy?",
        a: "Yes—this is designed for real life. Even if you miss a day, you can catch up and still complete the full 5-day transformation.",
      },
    ],
    []
  );

  const days = useMemo(
    () => [
      {
        day: "Day 1",
        title: "The Universal Language",
        points: [
          "Master the 3 principles of the universal language",
          "Correct the mistakes blocking your manifestations",
          "The Triad Formula: shift into powerful vibration in 120 seconds — scientifically tested",
          "Stop manifesting randomly and start manifesting consciously",
        ],
      },
      {
        day: "Day 2",
        title: "Money Manifestation Mastery",
        points: [
          "The 3 laws of money manifestation anyone can implement",
          "3 powerful money-making mindsets for those already earning",
          "Understand abundance vs. scarcity once and for all",
          "Jim Carrey's money attraction task for manifesting large sums",
          "Live mind programming to replace old money beliefs",
        ],
      },
      {
        day: "Day 3",
        title: "The Continuum Method — Vision Board 2.0",
        points: [
          "Why traditional vision boards fail and what to do instead",
          "The Continuum Method makes your vision board 10x more powerful",
          "Drag-and-drop template to design your dream life",
          "Manifest things 10 times faster with this secret technique",
        ],
      },
      {
        day: "Day 4",
        title: "The DVAR Framework — Beyond Visualization",
        points: [
          "Why visualization alone fails and what comes next",
          "3 powerful actualization techniques (Snapshot Experience, Simulated Moments, Virtual Scaling)",
          "Apply to relationships, health, career, money — anything",
          "Real stories: 3-year stuck transfers manifested in 2 weeks",
        ],
      },
      {
        day: "Day 5",
        title: "Dissociative Hypnotic Visualization",
        points: [
          "Combines NLP, mild hypnosis, and a 100-year-old 4th dimension technique",
          "Previously shared only with 1-on-1 coaching clients (₹6 Lakh/year)",
          "The single most powerful visualization for manifesting abundance",
          "You'll receive the full audio for lifetime daily practice",
        ],
      },
    ],
    []
  );

  const bonuses = useMemo(
    () => [
      {
        icon: Gift,
        title: "Perfect Day Visualization Audio",
        desc: "A 7-minute guided practice where you live one full day of your dream life — every morning.",
        value: "Worth ₹2,000",
      },
      {
        icon: Sparkles,
        title: "Delete Procrastination Audio",
        desc: "Mind-programming affirmations to destroy laziness and ignite daily action toward your dreams.",
        value: "Worth ₹3,000",
      },
      {
        icon: CalendarDays,
        title: "Delete Money Blocks Audio",
        desc: "Remove deep-rooted scarcity beliefs and reprogram your mind for unlimited abundance.",
        value: "Worth ₹2,000",
      },
      {
        icon: ShieldCheck,
        title: "22-Min Hypnotic Visualization",
        desc: "Ankit's secret NLP-powered 4th-dimension manifestation practice — separately available as a bonus.",
        value: "Worth ₹3,000",
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Bootcamp Student",
        quote:
          "I manifested recovery of ₹3 lakh rupees in the last two days! Money that was stuck for months finally came through.",
      },
      {
        name: "Priyanka",
        quote:
          "My anxiety is gone. I can get out of any emotional situation within a very short time using the Day 1 technique.",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I manifested ₹10,000 yesterday and today I got ₹1,500 more through money manifestation techniques!",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I manifested ₹15,000 in the stock market today — which was unusual for me. Usually not able to make that much in a day!",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I manifested 3 job interviews this week! I was struggling to even get callbacks before this training.",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I improved my IELTS exam score by 2-3 bands in just three days. It really works for studies too!",
      },
      {
        name: "Nikkitasha's Story",
        quote:
          "She was trying to get transferred to Delhi for 3 years. After doing the Simulated Moments technique, within 2 weeks the mutual transfer was approved!",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I manifested ₹60,000 for my daughter's education. Additionally got ₹3.5 lakh in orders in the last 2 days!",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I manifested ₹25,000 today. I'm becoming more positive every single day thanks to this training.",
      },
    ],
    []
  );

  const firstRow = days.slice(0, 3);
  const secondRow = days.slice(3);

  const videoSrc = `https://www.youtube-nocookie.com/embed/${YT_ID}?enablejsapi=1&autoplay=1&mute=${
    isMuted ? 1 : 0
  }&controls=0&rel=0&modestbranding=1&playsinline=1&fs=0&iv_load_policy=3&disablekb=1`;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-violet-50/50 to-white text-slate-900">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="absolute -top-48 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-violet-500/12 blur-[150px]" />
        <div className="absolute top-48 right-[-260px] h-[680px] w-[680px] rounded-full bg-fuchsia-500/10 blur-[160px]" />
        <div className="absolute bottom-[-320px] left-[-260px] h-[760px] w-[760px] rounded-full bg-indigo-500/10 blur-[170px]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/85 to-transparent" />
      </div>

      <div className="relative z-10 border-b border-slate-200/70 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-xs font-extrabold text-slate-700" />
      </div>

      <header className="relative z-10">
        {/* <div className="mx-auto max-w-6xl px-4 pt-6 pb-12 sm:pb-16"> */}
          <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6">
 <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6">
  <div
    className="relative overflow-hidden rounded-2xl border border-violet-300/70
    bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-700
    px-6 py-3 text-center shadow-[0_20px_60px_-20px_rgba(124,58,237,0.55)]"
  >
    {/* soft glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />

    {/* urgency text */}
    <p className="relative text-sm sm:text-base font-black tracking-wide text-white">
      ⚠️ Wait — Don’t Leave This Page Yet
    </p>

    {/* subtext */}
    <p className="relative mt-0.5 text-xs sm:text-sm font-semibold text-white/95">
      This <span className="font-bold text-yellow-200">exclusive one-time offer</span> is available only right now.
      If you close this page, you may <span className="font-bold underline">never see it again.</span>
    </p>
  </div>
</div>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Master the Art of{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Powerful Manifestation
              </span>{" "}
              in Just 5 Days
            </h1>

            <p className="mt-4 text-base font-semibold text-slate-700 sm:text-lg">
              Learn scientifically proven techniques to communicate with the universe,
              attract abundance, and manifest your dream life — with action-based
              tasks that deliver real results.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <GlowCard className="p-4 sm:p-5">
              <div
                ref={videoWrapperRef}
                className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-sm"
              >
                <iframe
                  ref={iframeRef}
                  className="absolute inset-0 h-full w-full"
                  src={videoSrc}
                  title="Bootcamp overview video"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />

                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur transition hover:bg-black/85"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleFullscreen}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur transition hover:bg-black/85"
                    aria-label="Fullscreen video"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-slate-700 shadow-sm">
                  {isMuted ? "Video playing • Muted" : "Video playing • Sound ON"}
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={() => window.open(razorpayUrl, "_blank")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-600 px-6 py-4 text-sm font-black text-white shadow-[0_18px_55px_-35px_rgba(244,63,94,0.6)] transition hover:-translate-y-0.5 hover:bg-rose-700 sm:w-auto"
                >
                  Click here to join the bootcamp
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/thankyou")}
                  className="text-xs font-semibold text-slate-600 underline underline-offset-4 transition hover:text-slate-900"
                >
                  Already opted in? Check access instructions
                </button>
              </div>
            </GlowCard>
          </div>
        </div>
      </header>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            What you’ll master in{" "}
            <span className={`${ACCENT_TEXT} font-black`}>
              5 transformational days
            </span>
          </h2>

          <p className="mt-4 font-semibold text-slate-700">
            Every day is action-based. You get a task, you take action, and you
            start seeing results — many people report breakthroughs by Day 3.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
            {firstRow.map((d) => (
              <ManifestDayCard key={d.day} {...d} />
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
            {secondRow.map((d) => (
              <ManifestDayCard key={d.day} {...d} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            4 Powerful Audio Bonuses{" "}
            <span className={`${ACCENT_TEXT} font-black`}>₹10,000+</span> — yours
            free
          </h2>

          <p className="mt-4 font-semibold text-slate-700">
            These bonuses are only available for those who join today. Each one
            comes with lifetime access.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((b) => (
            <ManifestBonusCard key={b.title} {...b} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Hundreds of students are manifesting{" "}
            <span className={`${ACCENT_TEXT} font-black`}>
              incredible results
            </span>
          </h2>

          <p className="mt-4 font-semibold text-slate-700">
            These are real messages from our WhatsApp community — from students
            just like you who took action.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <ManifestTestimonialCard key={`${t.name}-${t.quote}`} {...t} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mt-4 font-semibold text-slate-700">
            Everything you need to feel confident before you start.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur">
          {faqs.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={f.q}
                className="border-b border-slate-200/70 last:border-b-0"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-white"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-black text-slate-900">
                    {f.q}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm">
                    {isOpen ? (
                      <Minus className={`h-4 w-4 ${ACCENT_ICON}`} />
                    ) : (
                      <Plus className="h-4 w-4 text-slate-600" />
                    )}
                  </span>
                </button>

                {isOpen ? (
                  <div className="px-5 pb-5 text-sm font-semibold text-slate-700">
                    {f.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Section>

      {/* <section
        ref={optinRef}
        className="relative z-10 overflow-hidden border-t border-slate-200/70"
      >
        <div className="relative mx-auto max-w-6xl px-4 py-16" />
      </section> */}
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative z-10 overflow-hidden border-t border-slate-200/70">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[160px]" />
        <div className="absolute bottom-[-240px] right-[-180px] h-[620px] w-[620px] rounded-full bg-indigo-500/10 blur-[170px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {children}
      </div>
    </section>
  );
}

function GlowCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-[0_18px_70px_-55px_rgba(2,6,23,0.28)] backdrop-blur",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[80px]" />
        <div className="absolute -bottom-28 right-[-40px] h-72 w-72 rounded-full bg-indigo-500/10 blur-[90px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 to-white/20" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function ManifestDayCard({
  day,
  title,
  points,
}: {
  day: string;
  title: string;
  points: string[];
}) {
  const dayNumber = String(day).replace("Day ", "");

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_26px_80px_-60px_rgba(124,58,237,0.24)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="relative flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-100/60 ring-1 ring-violet-700/15">
          <span className="text-sm font-black text-violet-700">
            {dayNumber}
          </span>
        </div>

        <div className="min-w-0">
          <p className="text-xs font-black tracking-widest text-slate-600">
            {String(day).toUpperCase()}
          </p>
          <h3 className="mt-1 text-lg font-black text-slate-900">{title}</h3>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-violet-700" />
            Daily transformation
          </div>
        </div>
      </div>

      <div className="relative mt-5 space-y-2">
        {points.map((p) => (
          <div
            key={p}
            className="flex items-start gap-3 text-sm font-semibold text-slate-800 leading-relaxed"
          >
            <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100/60 ring-1 ring-violet-700/15">
              <CheckCircle2 className="h-4 w-4 text-violet-700" />
            </span>
            <span className="flex-1">{p}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative mt-4 flex items-center justify-between text-xs font-black text-slate-700">
        <span className="text-violet-700">Clarity → Identity → Action</span>
        <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700" />
      </div>
    </div>
  );
}

function ManifestBonusCard({
  icon: Icon,
  title,
  desc,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  value: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_26px_80px_-60px_rgba(124,58,237,0.22)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="relative flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-100/60 ring-1 ring-violet-700/15">
          <Icon className="h-5 w-5 text-violet-700" />
        </div>

        <div>
          <h3 className="text-base font-black text-slate-900">{title}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-700">{desc}</p>

          <div className="mt-3 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-800 shadow-sm">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

function ManifestTestimonialCard({
  name,
  quote,
}: {
  name: string;
  quote: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_26px_80px_-60px_rgba(124,58,237,0.22)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="relative">
        <div className="text-sm font-black text-slate-900">{name}</div>

        <div className="mt-4">
          <Quote className="h-4 w-4 text-violet-700" />
          <p className="mt-2 text-sm font-semibold text-slate-800">{quote}</p>
        </div>
      </div>
    </div>
  );
}