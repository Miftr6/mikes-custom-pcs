"use client";

import { useMemo } from "react";

export default function PCBuilderWebsite() {
  const contactEmail = "custompcbymike@gmail.com";

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
      name: "AM4 AIO",
      price: 1450,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "Gigabyte RTX 5060 Ti 16GB",
      ram: "32GB DDR4-3200 (2x16GB)",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      platform: "AM4",
      tier: "Entry Plus",
      turnaround: "24–48h Build",
      notes: "240mm AIO Liquid Cooling",
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
    {
      name: "AM5 AIO",
      price: 1750,
      cpu: "AMD Ryzen 7 7700",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      platform: "AM5",
      tier: "Mid Plus",
      turnaround: "24–48h Build",
      notes: "240mm AIO Liquid Cooling",
    },
    {
      name: "AM4 Air Cooled Nvidia",
      price: 1500,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR4-3200",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      platform: "AM4",
      tier: "Value Gaming",
      turnaround: "24–48h Build",
    },
    {
      name: "AM5 Air Cooled Nvidia",
      price: 1700,
      cpu: "AMD Ryzen 7 7700",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      platform: "AM5",
      tier: "Performance",
      turnaround: "24–48h Build",
    },
    {
      name: "AM5 AIO Nvidia",
      price: 2250,
      cpu: "AMD Ryzen 7 7700",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      platform: "AM5",
      tier: "High End",
      turnaround: "24–48h Build",
      notes: "240mm AIO Liquid Cooling",
    },
  ];

  const grouped = useMemo(() => {
    return builds.reduce((acc: Record<string, typeof builds>, b) => {
      if (!acc[b.platform]) acc[b.platform] = [];
      acc[b.platform].push(b);
      return acc;
    }, {});
  }, []);

  const tierStyle = (tier: string) => {
    const map: Record<string, string> = {
      Entry: "bg-green-500/10 text-green-300",
      "Entry Plus": "bg-green-400/10 text-green-200",
      Mid: "bg-yellow-500/10 text-yellow-300",
      "Mid Plus": "bg-yellow-400/10 text-yellow-200",
      "Value Gaming": "bg-blue-500/10 text-blue-300",
      Performance: "bg-purple-500/10 text-purple-300",
      "High End": "bg-red-500/10 text-red-300",
    };

    return map[tier] || "bg-zinc-700 text-zinc-300";
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Top Bar */}
      <div className="bg-blue-600 text-center text-[11px] md:text-xs py-2 font-semibold px-2">
        Custom Built Gaming PCs • 24–48 Hour Build Time • Professional Assembly Included
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold">
            Mike's Custom PCs
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
            <a href="#am4">AM4</a>
            <a href="#am5">AM5</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Build My PC
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold">Custom Gaming PCs Built Fast</h2>
        <p className="text-zinc-400 mt-3">
          Professionally built, tested, and optimized systems.
        </p>
      </section>

      {/* BUILDS */}
      <section className="max-w-7xl mx-auto px-4 pb-20">

        {/* AM4 */}
        <h3 className="text-2xl font-bold mb-4" id="am4">AM4 Builds</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {grouped.AM4?.map((b, i) => (
            <div key={i} className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
              <h4 className="font-semibold">{b.name}</h4>
              <p className="text-blue-400 font-bold">${b.price}</p>
              <p className="text-sm text-zinc-400">{b.cpu}</p>
              <p className="text-sm text-zinc-400">{b.gpu}</p>
              <p className={`text-xs mt-2 ${tierStyle(b.tier)}`}>{b.tier}</p>
            </div>
          ))}
        </div>

        {/* AM5 */}
        <h3 className="text-2xl font-bold mb-4" id="am5">AM5 Builds</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {grouped.AM5?.map((b, i) => (
            <div key={i} className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
              <h4 className="font-semibold">{b.name}</h4>
              <p className="text-blue-400 font-bold">${b.price}</p>
              <p className="text-sm text-zinc-400">{b.cpu}</p>
              <p className="text-sm text-zinc-400">{b.gpu}</p>
              <p className={`text-xs mt-2 ${tierStyle(b.tier)}`}>{b.tier}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-xl mx-auto px-4 pb-20">
        <h3 className="text-2xl font-bold text-center mb-6">
          Request a Custom PC
        </h3>

        <form
          action="https://formspree.io/f/mykovwyp"
          method="POST"
          className="bg-zinc-900 p-6 rounded-xl space-y-4 border border-zinc-800"
        >
          <input
            name="name"
            placeholder="Name"
            className="w-full p-3 bg-zinc-800 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-zinc-800 rounded"
          />

          <input
            name="budget"
            placeholder="Budget"
            className="w-full p-3 bg-zinc-800 rounded"
          />

          <textarea
            name="message"
            placeholder="What do you want built?"
            rows={5}
            className="w-full p-3 bg-zinc-800 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded font-semibold"
          >
            Send Request
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-zinc-500 text-xs py-8 border-t border-zinc-800">
        All builds include testing & assembly
      </footer>

    </div>
  );
}