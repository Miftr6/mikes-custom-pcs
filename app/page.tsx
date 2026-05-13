"use client";

import { useMemo } from "react";

export default function PCBuilderWebsite() {
  const contactEmail = "custompcbymike@gmail.com";
  const FORM_ENDPOINT = "https://formspree.io/f/mykovwyp";

  const builds = [
    {
      name: "AM4 Air Cooled",
      price: 1500,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "RX 7600 8GB",
      ram: "32GB DDR4-3200",
      storage: "1TB NVMe",
      case: "Lian Li V100R",
      platform: "AM4",
      tier: "Entry",
      notes: "Noctua NH-D15 Cooler",
    },
    {
      name: "AM4 AIO",
      price: 1450,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "RX 7600 8GB",
      ram: "32GB DDR4-3200",
      storage: "1TB NVMe",
      case: "Lian Li V100R",
      platform: "AM4",
      tier: "Entry Plus",
      notes: "240mm AIO Cooler",
    },
    {
      name: "AM5 Air Cooled",
      price: 1700,
      cpu: "Ryzen 7 7700",
      gpu: "RX 7600 8GB",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe",
      case: "Lian Li V100R",
      platform: "AM5",
      tier: "Mid",
      notes: "Peerless Assassin Cooler",
    },
    {
      name: "AM5 AIO",
      price: 1750,
      cpu: "Ryzen 7 7700",
      gpu: "RX 7600 8GB",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe",
      case: "Lian Li V100R",
      platform: "AM5",
      tier: "Mid Plus",
      notes: "240mm AIO Cooler",
    },
    {
      name: "AM5 Air Cooled Nvidia",
      price: 1700,
      cpu: "Ryzen 7 7700",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe",
      case: "Lian Li V100R",
      platform: "AM5",
      tier: "Performance",
      notes: "Air cooled build",
    },
    {
      name: "AM5 AIO Nvidia",
      price: 2250,
      cpu: "Ryzen 7 7700",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe",
      case: "Lian Li V100R",
      platform: "AM5",
      tier: "High End",
      notes: "240mm AIO Cooler",
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
      Entry: "bg-green-500/20 text-green-300",
      "Entry Plus": "bg-green-400/20 text-green-200",
      Mid: "bg-yellow-500/20 text-yellow-300",
      "Mid Plus": "bg-yellow-400/20 text-yellow-200",
      Performance: "bg-purple-500/20 text-purple-300",
      "High End": "bg-red-500/20 text-red-300",
    };
    return map[tier] || "bg-zinc-700 text-zinc-300";
  };

  // ✅ THIS is what fixes EVERYTHING
  const sendEmail = (subject: string, message: string) => {
    const mailtoLink =
      `mailto:${contactEmail}?subject=` +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(message);

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* TOP BANNER (your request) */}
      <div className="bg-blue-600 text-center text-xs md:text-sm py-2 font-semibold px-2">
        All prices include labor • Shipping varies based on location
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Mike's Custom PCs</h1>

          <button
            onClick={() =>
              sendEmail(
                "Custom PC Request",
                "Hi Mike, I want a custom PC build. My budget and requirements are:"
              )
            }
            className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Build My PC
          </button>
        </div>
      </header>

      {/* BUILDS */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        {Object.entries(grouped).map(([platform, list]) => (
          <div key={platform} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{platform} Builds</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((b, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{b.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${tierStyle(b.tier)}`}>
                      {b.tier}
                    </span>
                  </div>

                  <p className="text-blue-400 font-bold mt-2">${b.price}</p>

                  <div className="text-sm text-zinc-400 mt-3 space-y-1">
                    <p>CPU: {b.cpu}</p>
                    <p>GPU: {b.gpu}</p>
                    <p>RAM: {b.ram}</p>
                    <p>Storage: {b.storage}</p>
                  </div>

                  <p className="text-xs text-zinc-500 mt-2">{b.notes}</p>

                  {/* ✅ THIS FIXES YOUR BUTTON */}
                  <button
                    onClick={() =>
                      sendEmail(
                        `Build Request: ${b.name}`,
                        `Hi Mike,\n\nI want this build:\n\n${b.name}\nPrice: $${b.price}\nCPU: ${b.cpu}\nGPU: ${b.gpu}\nRAM: ${b.ram}\nStorage: ${b.storage}\n\nPlease contact me.`
                      )
                    }
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg text-sm"
                  >
                    Request This Build
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

      </section>

      {/* CUSTOM FORM */}
      <section id="contact" className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Request Custom PC
        </h2>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4"
        >
          <input className="w-full p-3 bg-zinc-800 rounded" name="name" placeholder="Name" required />
          <input className="w-full p-3 bg-zinc-800 rounded" name="email" placeholder="Email" required />
          <input className="w-full p-3 bg-zinc-800 rounded" name="budget" placeholder="Budget" />
          <textarea className="w-full p-3 bg-zinc-800 rounded" name="message" placeholder="What do you want built?" rows={5} />

          <button className="w-full bg-blue-600 py-3 rounded font-semibold">
            Send Request
          </button>
        </form>
      </section>

    </div>
  );
}