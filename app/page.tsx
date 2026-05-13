"use client";

import { useMemo } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function PCBuilderWebsite() {
  const contactFormId = "mykovwyp";
  const [state, handleSubmit] = useForm(contactFormId);

  const builds = [
    {
      name: "AM4 Air cooled",
      price: 1350,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "ASRock Challenger OC Radeon RX 7600",
      ram: "32GB DDR4-3200 (2x16GB)",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      platform: "AM4",
      tier: "Entry",
      turnaround: "24–48h Build",
    },
    {
      name: "AM5 Air cooled",
      price: 1550,
      cpu: "AMD Ryzen 7 7700",
      gpu: "ASRock RX 7600",
      ram: "32GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      platform: "AM5",
      tier: "Mid",
      turnaround: "24–48h Build",
    },
  ];

  const grouped = useMemo(() => {
    const acc: Record<string, typeof builds> = {};
    builds.forEach((b) => {
      if (!acc[b.platform]) acc[b.platform] = [];
      acc[b.platform].push(b);
    });
    return acc;
  }, []);

  const tierStyle = (tier: string) => {
    const map: Record<string, string> = {
      Entry: "bg-green-500/10 text-green-300",
      Mid: "bg-yellow-500/10 text-yellow-300",
    };

    return map[tier] || "bg-zinc-700 text-zinc-300";
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Top Bar */}
      <div className="bg-blue-600 text-center text-xs py-2 font-semibold">
        Custom Built Gaming PCs • 24–48 Hour Build Time
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <h1 className="font-bold">Mike's Custom PCs</h1>
        </div>
      </header>

      {/* Builds */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        {Object.entries(grouped).map(([platform, list]) => (
          <div key={platform} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{platform}</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {list.map((b, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-4"
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{b.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${tierStyle(b.tier)}`}>
                      {b.tier}
                    </span>
                  </div>

                  <p className="text-blue-400 font-bold mt-2">${b.price}</p>

                  <div className="text-sm text-zinc-400 mt-2 space-y-1">
                    <p>CPU: {b.cpu}</p>
                    <p>GPU: {b.gpu}</p>
                    <p>RAM: {b.ram}</p>
                    <p>Storage: {b.storage}</p>
                  </div>

                  <p className="text-green-400 text-sm mt-2">
                    {b.turnaround}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-16">

        <h2 className="text-2xl font-bold text-center mb-6">
          Request a Custom PC
        </h2>

        {state.succeeded ? (
          <p className="text-green-400 text-center font-semibold">
            Thanks! I’ll get back to you soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4"
          >

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 bg-zinc-800 rounded-lg"
              required
            />
            <ValidationError field="email" errors={state.errors} />

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 bg-zinc-800 rounded-lg"
            />

            <input
              type="text"
              name="budget"
              placeholder="Budget"
              className="w-full p-3 bg-zinc-800 rounded-lg"
            />

            <textarea
              name="message"
              placeholder="What do you want built?"
              rows={5}
              className="w-full p-3 bg-zinc-800 rounded-lg"
              required
            />
            <ValidationError field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : "Send Request"}
            </button>

          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-xs text-zinc-500">
        <p>All builds include professional assembly & testing.</p>
      </footer>

    </div>
  );
}