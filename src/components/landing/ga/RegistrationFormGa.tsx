import { useState } from "react";
import { Shield, Sparkles } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const WEBHOOK_URL =
  "https://offbeatn8n.coachswastik.com/webhook/smm-leads-fb13-Ga5";

const RegistrationFormGa = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    status: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<null | { type: "ok" | "err"; text: string }>(
    null
  );

  const isPhoneInvalid = form.phone.length > 0 && form.phone.length !== 10;

  // 🔹 GET UTM PARAMETERS
  const getUTMs = () => {
    if (typeof window === "undefined") return {};

    const params = new URLSearchParams(window.location.search);

    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isPhoneInvalid) {
      setMessage({ type: "err", text: "Please enter a valid 10-digit number." });
      return;
    }

    if (!form.status) {
      setMessage({ type: "err", text: "Please select your current status." });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const utms = getUTMs();

      // 🔹 PAYLOAD WITH UTMs
      const payload = {
        ...form,
        ...utms,
        source: "registration_form",
        page: typeof window !== "undefined" ? window.location.href : "",
        timestamp: new Date().toISOString(),
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let serverText = "";
        try {
          serverText = await res.text();
        } catch {}
        throw new Error(serverText || `Request failed (${res.status})`);
      }

      // 🔹 PASS UTMs TO OTO PAGE
      const query = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        reason: form.reason,
        profession: form.status,
        ...utms,
      }).toString();

      window.location.href = `/fb13-oto?${query}`;

      setForm({
        name: "",
        email: "",
        phone: "",
        reason: "",
        status: "",
      });
    } catch (err: any) {
      setMessage({
        type: "err",
        text:
          err?.message ||
          "Something went wrong while submitting. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
      className="relative bg-white py-12 text-gray-900 lg:py-16"
    >
      <div className="container mx-auto max-w-xl px-4">
        <AnimatedSection>
          <div className="mb-4 flex justify-center">
            <span className="flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-600">
              <Sparkles className="h-3 w-3" />
              Free Registration
            </span>
          </div>

          <h2
            className="mb-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 bg-clip-text pb-2 text-center text-4xl font-bold tracking-wide text-transparent md:text-5xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Register Now
          </h2>

          <p className="mb-8 text-center text-gray-500">
            Reserve your free seat for this transformative 90-minute session.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-lg"
          >
            <input
              type="text"
              required
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3"
            />

            <input
              type="email"
              required
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3"
            />

            <input
              type="tel"
              placeholder="Phone (WhatsApp preferred)"
              value={form.phone}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, "");
                setForm({ ...form, phone: onlyNumbers });
              }}
              maxLength={10}
              className={`w-full rounded-lg border px-4 py-3 ${
                isPhoneInvalid ? "border-red-500" : "border-gray-300"
              }`}
            />

            <textarea
              rows={4}
              placeholder="Reason For Joining"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            />

            {/* STATUS RADIO */}
            <div>
              <p className="mb-3 font-semibold text-gray-700">
                Select your current status
              </p>

              <div className="space-y-2 text-sm text-gray-600">
                {[
                  "Business Owner / Entrepreneur",
                  "Working Professional",
                  "Freelancer / Self-Employed",
                  "Student / Recent Graduate",
                  "Other",
                ].map((option, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="status"
                      value={option}
                      checked={form.status === option}
                      onChange={(e) =>
                        setForm({ ...form, status: e.target.value })
                      }
                      className="accent-yellow-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 py-3 text-lg font-semibold"
            >
              {loading ? "Submitting..." : "Register Now"}
            </button>

            <p className="mt-2 flex items-center justify-center gap-1 text-xs text-gray-500">
              <Shield className="h-3 w-3" />
              Your information is 100% secure. We never spam.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RegistrationFormGa;