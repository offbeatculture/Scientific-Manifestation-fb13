// src/pages/OtoThankYou.tsx
import { useEffect } from "react";
import { useFacebookPixel } from "../hooks/useFacebookPixel";

const FREE_WA_GROUP = "http://join.ankitneerav.com/smm-wap-fb";
const PAID_WA_GROUP = "join.ankitneerav.com/5day-wap-oto";

const MASTERCLASS_DATE = "25 June, 7:00 PM IST"; // change if needed

export default function OtoThankYou() {
  useFacebookPixel();

  useEffect(() => {
    document.title =
      "Thank You – Your 5-Day Manifestation Bootcamp Purchase is Confirmed";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Thank you for purchasing the 5-Day Manifestation Bootcamp with Ankit Neerav. Join the WhatsApp groups to get access updates, reminders, and next steps."
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

      <div className="w-full max-w-lg rounded-3xl border border-aura-100 bg-white shadow-xl p-6 sm:p-8 text-center">

        <h1 className="text-2xl font-bold text-aura-800">
          🎉 Payment Successful!
        </h1>

        <p className="mt-3 text-sm text-ink-600">
          You are registered for <br />
          <strong> Scientific Manifestation Masterclass & the 5 day Advanced manifestation Bootcamp</strong>.
        </p>

        {/* STEP 1 */}
        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-left">
          <h2 className="text-sm font-bold text-blue-900">
           Join the Free Masterclass WhatsApp Group
          </h2>

          <p className="mt-2 text-sm text-blue-800">
            Join the free WhatsApp group to receive reminders and updates for
            the masterclass.
          </p>

          {/* <p className="mt-2 text-xs font-semibold text-blue-700">
            Masterclass Date: {MASTERCLASS_DATE}
          </p> */}

          <a
            href={FREE_WA_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block w-full rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            Join Free WhatsApp Group
          </a>
        </div>

        {/* STEP 2 */}
        <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 p-5 text-left">
          <h2 className="text-sm font-bold text-green-900">
             Join the 5 Day Advanced Manifestation Bootcamp Group
          </h2>

          <p className="mt-2 text-sm text-green-800">
             {/* Join the WhatsApp group to receive reminders and updates for
            the masterclass. */}
            Join the WhatsApp group for 5 Day Advanced Manifestation Bootcamp Group
          </p>

          {/* <p className="mt-2 text-xs font-semibold text-green-700">
            Bootcamp Starts: {MASTERCLASS_DATE}
          </p> */}

          <a
            href={PAID_WA_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block w-full rounded-xl bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white shadow hover:bg-green-700"
          >
            Join Bootcamp WhatsApp Group
          </a>
        </div>

        {/* <p className="mt-6 text-xs text-gray-500">
          Important: Please join both WhatsApp groups to receive all updates,
          reminders, and access instructions.
        </p> */}

      </div>
    </section>
  );
}