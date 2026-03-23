import React, { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQTwPzzgnuxnM99svb-wpxDwzfPA-3lZP9cVqLv4hMH0GtKLollq3-tOFZ0jgzug_-vl3zXvo_HBYNs/pub?gid=43987342&single=true&output=csv")
      .then((res) => res.text())
      .then((data) => {
        const row = data.split("\n")[1]; // first data row
        const dateValue = row.split(",")[3]; // column index 3
        console.log(row);
        
        setDate(dateValue.replace(/"/g, "").trim());
      });
  }, []);

  console.log("date",date);
  
  const whatsappLink =
    "join.ankitneerav.com/5day-adv-mb";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f6f3] px-4">
      
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-10 text-center">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#1d1d1d] mb-4">
          🎉 Congrats!! Your Seat Is Almost Confirmed
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          You've successfully secured your spot for the   {" "} <br></br>
          <span className="font-bold ">
             Advancd Manifestation Bootcamp ( {date})
          </span>
        </p>

        {/* STEPS */}
        <div className="text-left bg-[#f7f6f3] rounded-2xl p-6 mb-8 space-y-4">
          <h2 className="text-xl font-semibold text-center mb-4">
            Final Steps to Confirm Your Seat:
          </h2>

          <p>📱 <b>WhatsApp:</b> Tap below and message us to confirm</p>
          <p>🔗 <b>Links:</b> Get community & webinar access</p>
          <p>💻 <b>Download Zoom:</b> Be ready with pen & paper</p>
          <p>👥 <b>Join Community:</b> Stay updated with all sessions</p>
        </div>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-8 py-4 rounded-2xl transition"
        >
          👉 Confirm on WhatsApp
        </a>

        {/* FOOT NOTE */}
        {/* <p className="text-sm text-gray-500 mt-6">
          ⚠️ Access will only be shared on WhatsApp after confirmation
        </p> */}

      </div>
    </div>
  );
}