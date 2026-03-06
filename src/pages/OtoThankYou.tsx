// src/pages/OtoThankYou.tsx
import { useEffect } from "react";
import { useFacebookPixel } from "../hooks/useFacebookPixel";

const WA_GROUP_LINK = "http://join.ankitneerav.com/smm-wap-fb";

export default function OtoThankYou() {
  useFacebookPixel();

  useEffect(() => {
    document.title =
      "Thank You – Your 5-Day Manifestation Bootcamp Purchase is Confirmed";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Thank you for purchasing the 5-Day Manifestation Bootcamp with Ankit Neerav. Join the WhatsApp group now to get access updates, reminders, and next steps."
      );
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        currency: "INR",
        value: 1499,
      });

      window.fbq("trackCustom", "OTO-Purchase");
    }
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-aura-50 via-white to-white flex items-center justify-center px-4 py-10">
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=586972862820606&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <div className="w-full max-w-md rounded-3xl border border-aura-100 bg-white shadow-xl p-6 sm:p-8 text-center">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-md">
          <iframe
            src="https://www.youtube.com/embed/FqA9KP050eg"
            title="Purchase Thank You Video"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-aura-800">
          🎉 Payment Successful!
        </h1>

        <p className="mt-3 text-sm text-ink-600">
          Thank you for purchasing the <br />
          <strong>5-Day Manifestation Bootcamp</strong>.
        </p>

        <div className="mt-4 rounded-2xl bg-green-50 border border-green-100 p-4 text-left">
          <p className="text-sm font-semibold text-green-800">
            Your seat is confirmed.
          </p>
          <p className="mt-1 text-sm text-green-700">
            Join the WhatsApp group now to receive access details, reminders,
            bonus updates, and all next steps.
          </p>
        </div>

        <div className="mt-6">
          <a
            href={WA_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full rounded-2xl bg-green-600 px-6 py-3 font-medium text-white shadow transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Join WhatsApp Group
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Important: Please join the WhatsApp group to avoid missing your access
          instructions.
        </p>
      </div>
    </section>
  );
}