// src/pages/OtoThankYou.tsx

import { useEffect, useState } from "react";
import { useFacebookPixel } from "../hooks/useFacebookPixel";

const FREE_WA_GROUP = "http://join.ankitneerav.com/smm-wap-fb";
const PAID_WA_GROUP = "https://join.ankitneerav.com/5day-wap-oto";

const DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTwPzzgnuxnM99svb-wpxDwzfPA-3lZP9cVqLv4hMH0GtKLollq3-tOFZ0jgzug_-vl3zXvo_HBYNs/pub?output=csv&gid=43987342";

export default function OtoThankYou() {
  useFacebookPixel();

  const [masterclassDate, setMasterclassDate] = useState("");
  const [masterclassTime, setMasterclassTime] = useState("");

  const [bootcampDate, setBootcampDate] = useState("");
  const [bootcampTime, setBootcampTime] = useState("");

  useEffect(() => {
    document.title =
      "Thank You – Your 5-Day Manifestation Bootcamp Purchase is Confirmed";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Thank you for purchasing the 5-Day Manifestation Bootcamp with Ankit Neerav. Join the WhatsApp groups to get access updates and reminders."
      );
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        currency: "INR",
        value: 1499,
      });

      window.fbq("trackCustom", "OTO-Purchase");
    }

    fetch(DATA_URL)
      .then((res) => res.text())
      .then((csv) => {
        const rows = csv.trim().split("\n");

        const dataRow = rows[1]
          .split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
          .map((cell) => cell.replace(/^"|"$/g, "").trim());

        console.log("CSV Row:", dataRow);

        setMasterclassDate(dataRow[0] || "");
        setMasterclassTime(dataRow[1] || "");

        setBootcampDate(dataRow[3] || "");
        setBootcampTime(dataRow[4] || "");
      })
      .catch((err) => console.error("CSV Fetch Error:", err));
  }, []);


  console.log("Time",bootcampTime);
  

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

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-aura-800">
          🎉 Payment Successful!
        </h1>

        <p className="mt-3 text-sm text-ink-600">
          You are registered for <br />
          <strong>
            Scientific Manifestation Masterclass & the 5-Day Advanced Manifestation Bootcamp
          </strong>
        </p>

        {/* MASTERCLASS BOX */}
        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-left">

          <p className="mt-2 text-sm text-blue-800">
            Get reminders, access links, and updates for the masterclass.
          </p>

          <p className="mt-3 text-sm font-semibold text-blue-900">
            Masterclass Date & Time
          </p>

          <p className="text-sm text-blue-800">
            {masterclassDate}
            {masterclassTime && ` • ${masterclassTime}`}
          </p>

          <a
            href={FREE_WA_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block w-full rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            Join Free WhatsApp Group
          </a>

        </div>

        {/* BOOTCAMP BOX */}
        <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 p-5 text-left">

          <p className="mt-2 text-sm text-green-800">
            This group will contain all updates, session links, and resources
            for the 5-Day Bootcamp.
          </p>

          <p className="mt-3 text-sm font-semibold text-green-900">
            Bootcamp Schedule
          </p>

          <p className="text-sm text-green-800">
            {bootcampDate}
            {bootcampTime && ` • ${bootcampTime}`}
          </p>

          <a
            href={PAID_WA_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block w-full rounded-xl bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white shadow hover:bg-green-700"
          >
            Join Bootcamp WhatsApp Group
          </a>

        </div>

      </div>
    </section>
  );
}