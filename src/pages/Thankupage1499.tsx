import { useEffect } from "react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const WHATSAPP_LINK = "https://chat.whatsapp.com/InN1bbsRK70Izoz1mfAGVY"; // 🔴 replace

export default function ThankYouPurchase() {
  useFacebookPixel();

  useEffect(() => {
    document.title = "Payment Successful 🎉";

    // 🔥 Track Purchase
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: 1499,
        currency: "INR",
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-xl p-6 text-center border border-violet-100">

        {/* Success Emoji */}
        <div className="text-4xl mb-3">🎉</div>

        {/* Heading */}
        <h1 className="text-2xl font-black text-violet-700">
          Payment Successful!
        </h1>

        <p className="mt-3 text-sm text-gray-600">
          You have successfully enrolled in the{" "}
          <strong>Advanced Manifestation Bootcamp</strong>.
        </p>

        {/* Highlight */}
        <div className="mt-5 bg-violet-50 border border-violet-200 rounded-xl p-3 text-sm font-semibold text-violet-700">
          Important: Join the WhatsApp group to get access & updates
        </div>

        {/* CTA Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block w-full rounded-xl bg-green-600 px-6 py-3 text-white font-bold shadow hover:bg-green-700 transition"
        >
          👉 Join WhatsApp Group
        </a>

        {/* Small note */}
        {/* <p className="mt-4 text-xs text-gray-500">
          We’ve also sent details to your email 📩
        </p> */}

      </div>
    </section>
  );
}