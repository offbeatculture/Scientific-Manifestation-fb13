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
const ACCENT_ICON = "text-violet-700";

export default function ManifestationBootcampLanding() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useFacebookPixel();

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "Purchase-1499", {
        value: 1499,
        currency: "INR",
      });
    }
  }, []);

  const [sessionDate, setSessionDate] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);

  const YT_ID = "_G4WQgitmyk";

  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || searchParams.get("contact") || "";
  const profession =
    searchParams.get("profession") || searchParams.get("status") || "";

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTwPzzgnuxnM99svb-wpxDwzfPA-3lZP9cVqLv4hMH0GtKLollq3-tOFZ0jgzug_-vl3zXvo_HBYNs/pub?output=csv&gid=43987342";

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const rows = text
          .split("\n")
          .map((row) => row.split(",").map((cell) => cell.replace(/"/g, "").trim()));

        const headers = rows[0] || [];
        const columnIndex = headers.findIndex((h) =>
          h.toLowerCase().includes("5 day")
        );

        if (columnIndex !== -1 && rows[1]) {
          const value = rows[1][columnIndex];

          if (value) {
            const parts = value.split(" ");
            const date = parts.slice(0, 3).join(" ");
            const time = parts.slice(3).join(" ");

            setSessionDate(date);
            setSessionTime(time);
          }
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

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
        a: "You’ll get access to the core materials and updates during your access window based on your offer.",
      },
      {
        q: "What if I’ve tried manifesting and it didn’t work?",
        a: "This program focuses on alignment plus action: clearing blocks, installing new beliefs, and building a repeatable system you can use for any goal.",
      },
      {
        q: "Is there a community?",
        a: "If your offer includes it, you’ll receive community access details after checkout.",
      },
      {
        q: "Can I do this while busy?",
        a: "Yes. This is designed for real life, and even if you miss a day, you can catch up.",
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
          "The Triad Formula: shift into powerful vibration in 120 seconds",
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
          "Replace old money beliefs with new empowering patterns",
        ],
      },
      {
        day: "Day 3",
        title: "The Continuum Method — Vision Board 2.0",
        points: [
          "Why traditional vision boards fail",
          "Make your vision board 10x more powerful",
          "Design your dream life with a simple template",
          "Manifest faster with this secret technique",
        ],
      },
      {
        day: "Day 4",
        title: "The DVAR Framework — Beyond Visualization",
        points: [
          "Why visualization alone fails",
          "3 powerful actualization techniques",
          "Apply it to relationships, health, career, and money",
          "See real-world results much faster",
        ],
      },
      {
        day: "Day 5",
        title: "Dissociative Hypnotic Visualization",
        points: [
          "Combines NLP, mild hypnosis, and 4th-dimension techniques",
          "Previously shared only with premium clients",
          "The most powerful visualization for abundance",
          "You’ll receive the full audio for lifetime practice",
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
        desc: "A 7-minute guided practice where you live one full day of your dream life.",
        value: "Worth ₹2,000",
      },
      {
        icon: Sparkles,
        title: "Delete Procrastination Audio",
        desc: "Affirmations to destroy laziness and ignite action.",
        value: "Worth ₹3,000",
      },
      {
        icon: CalendarDays,
        title: "Delete Money Blocks Audio",
        desc: "Remove deep-rooted scarcity beliefs and reprogram abundance.",
        value: "Worth ₹2,000",
      },
      {
        icon: ShieldCheck,
        title: "22-Min Hypnotic Visualization",
        desc: "A powerful NLP-based abundance practice.",
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
          "I manifested recovery of ₹3 lakh rupees in the last two days. Money that was stuck for months finally came through.",
      },
      {
        name: "Priyanka",
        quote:
          "My anxiety is gone. I can get out of any emotional situation within a very short time using the Day 1 technique.",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I manifested ₹10,000 yesterday and ₹1,500 more today through the money manifestation techniques.",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I manifested ₹15,000 in the stock market today, which was unusual for me.",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I manifested 3 job interviews this week. I was struggling to get callbacks before this training.",
      },
      {
        name: "Bootcamp Student",
        quote:
          "I improved my IELTS exam score by 2 to 3 bands in just three days.",
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
    <div className="min-h-screen bg-[#ebe4f5] text-slate-900">
 <header className="relative overflow-hidden">
  <div className="bg-[#1f1b4f] px-4 py-4 text-center">
    <div className="mx-auto max-w-3xl">
      <p className="text-lg font-bold text-white sm:text-2xl">
        🎉 You&apos;re registered!
      </p>
      <p className="mt-1 text-base font-medium text-white sm:text-xl">
        Your spot for the Scientific Manifestation Masterclass is confirmed.
      </p>
    </div>
  </div>

  <div className="px-4 pt-5 pb-5">
  <div className="px-4 pt-5 pb-5">
  <div className="px-4 pt-5 pb-5">
  <div className="mx-auto max-w-5xl text-center">
    <p className="text-lg font-bold uppercase text-black sm:text-xl">
      But before you go
    </p>

    <h1 className="mt-1 text-3xl font-bold sm:text-4xl">
      <span className="text-black">I Have Something</span>
      <br className="sm:hidden" />
      <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
        {" "}Special For YOU
      </span>
    </h1>
  </div>
</div>
</div>
    {/* VIDEO BOX ONLY */}
    <div className="mx-auto mt-5 max-w-3xl rounded-xl border border-black/10 bg-white p-3 shadow-md">
      <p className="text-center text-lg font-bold text-[#1f1b4f] sm:text-2xl">
        IMPORTANT! Watch This Short Video
      </p>

      <p className="mt-1 text-center text-xs font-semibold text-[#1f1b4f] sm:text-base">
        (Click on Unmute Button)
      </p>

      <div
        ref={videoWrapperRef}
        className="relative mt-3 h-[200px] overflow-hidden rounded-lg bg-black sm:h-[380px]"
      >
        <iframe
          ref={iframeRef}
          className="absolute inset-0 h-full w-full"
          src={videoSrc}
          title="Bootcamp overview video"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />

        {/* Video Controls */}
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMute}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white shadow hover:bg-black/90"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={handleFullscreen}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white shadow hover:bg-black/90"
            aria-label="Fullscreen video"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    {/* DATE + BUTTONS OUTSIDE BOX */}
    <div className="mx-auto mt-4 max-w-3xl text-center">
      <p className="text-base font-bold text-black sm:text-xl">
        Date &amp; Time :
        <span className="ml-2">
          {sessionDate || "Loading..."} {sessionTime || ""}
        </span>
      </p>

      <div className="mt-5 flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={() => window.open(razorpayUrl, "_blank")}
          className="w-full max-w-xl rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-5 py-2.5 shadow-md transition hover:scale-[1.01]"
        >
          <div className="text-base font-bold text-white sm:text-lg">
            YES — Upgrade My Registration To The Bootcamp
          </div>
          <div className="text-xs text-white/95 sm:text-sm">
            Lock in ₹1,499 before this offer disappears →
          </div>
        </button>

        <button
          type="button"
          onClick={() => navigate("/thankyou")}
          className="text-xs font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-900 sm:text-sm"
        >
          No Thanks, I&apos;ll attend the Free Masterclass
        </button>
      </div>
    </div>
  </div>
</header>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
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
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
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
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
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
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
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
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-t border-slate-200/70 bg-white/40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[160px]" />
        <div className="absolute bottom-[-240px] right-[-180px] h-[620px] w-[620px] rounded-full bg-indigo-500/10 blur-[170px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-12">
        {children}
      </div>
    </section>
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
            className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-slate-800"
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