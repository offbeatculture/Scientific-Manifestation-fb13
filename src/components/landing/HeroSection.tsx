import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Gift, Users, Sparkles } from "lucide-react";
import speakerImg from "@/assets/speaker.jpeg";

type EventInfo = {
  date: string;
  time: string;
};

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1Mo8GOAd5q0g5a4PCG7u8QKNKaDUPwAe11y6An2vWWR4/export?format=csv&gid=43987342";

const HeroSection = () => {

  const [eventInfo, setEventInfo] = useState<EventInfo>({
    date: "",
    time: "",
  });

  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const response = await fetch(SHEET_CSV_URL);
        const csvText = await response.text();

        const rows = csvText
          .split("\n")
          .map((row) => row.trim())
          .filter(Boolean);

        if (rows.length < 2) return;

        const headers = rows[0].split(",").map((item) => item.trim());
        const values = rows[1].split(",").map((item) => item.trim());

        const dateIndex = headers.findIndex(
          (header) => header.toLowerCase() === "date"
        );

        const timeIndex = headers.findIndex(
          (header) => header.toLowerCase() === "time"
        );

        setEventInfo({
          date: values[dateIndex],
          time: values[timeIndex],
        });
      } catch (error) {
        console.error("Error fetching sheet data:", error);
      }
    };

    fetchSheetData();
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-black relative overflow-hidden min-h-[85vh] flex items-center">
      
      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="flex items-center gap-3 mb-5">
              {/* <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> Live Masterclass
              </span> */}
              <span className="text-white/50 text-sm font-medium">
                Today Only Free
              </span>
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
              {/* <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-yellow-400" /> Live on Zoom
              </span> */}

              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-400" /> 90 Minutes
              </span>

              <span className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-yellow-400" /> Free Bonuses Included
              </span>
            </div>

            {/* DATE + TIME BOXES */}
            <div className="mb-6 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">

              {/* DATE */}
              <div className="rounded-2xl border border-yellow-400/25 bg-white/5 p-4 backdrop-blur-sm shadow-lg">
                <div className="mb-2 flex items-center gap-2 text-yellow-400">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Date
                  </span>
                </div>

                <p className="text-base font-bold text-white">
                  {eventInfo.date || "Loading..."}
                </p>
              </div>

              {/* TIME */}
              <div className="rounded-2xl border border-yellow-400/25 bg-white/5 p-4 backdrop-blur-sm shadow-lg">
                <div className="mb-2 flex items-center gap-2 text-yellow-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Time
                  </span>
                </div>

                <p className="text-base font-bold text-white">
                  {eventInfo.time || "Loading..."}
                </p>
              </div>

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

          {/* RIGHT IMAGE */}
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
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;