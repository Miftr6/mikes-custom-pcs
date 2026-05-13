"use client";

import { useMemo, useState } from "react";

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
      case: "Lian Li Vector V100R ATX Mid Tower",
      platform: "AM4",
      tier: "Entry",
      turnaround: "24–48h Build"
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
      notes: "240mm AIO Liquid Cooling"
    },
    {
      name: "AM5 Air cooled",
      price: 1550,
      cpu: "AMD Ryzen 7 7700",
      gpu: "ASRock RX 7600",
      ram: "32GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R",
      platform: "AM5",
      tier: "Mid",
      turnaround: "24–48h Build"
    },
    {
      name: "AM5 AIO",
      price: 1750,
      cpu: "AMD Ryzen 7 7700",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R",
      platform: "AM5",
      tier: "Mid Plus",
      turnaround: "24–48h Build",
      notes: "240mm AIO Liquid Cooling"
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
      turnaround: "24–48h Build"
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
      turnaround: "24–48h Build"
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
      notes: "240mm AIO Liquid Cooling"
    }
  ];

const grouped = useMemo(() => {
  const acc: Record<string, typeof builds> = {};

  builds.forEach((b) => {
    if (!acc[b.platform]) acc[b.platform] = [];
    acc[b.platform].push(b);
  });

  return acc;
}, []);

const tierStyle = (tier: string): string => {
  const map = {
    Entry: "bg-green-500/10 text-green-300",
    "Entry Plus": "bg-green-400/10 text-green-200",
    Mid: "bg-yellow-500/10 text-yellow-300",
    "Mid Plus": "bg-yellow-400/10 text-yellow-200",
    "Value Gaming": "bg-blue-500/10 text-blue-300",
    Performance: "bg-purple-500/10 text-purple-300",
    "High End": "bg-red-500/10 text-red-300",
  };

  const key = tier as keyof typeof map;
  return map[key] || "bg-zinc-700 text-zinc-300";
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
          <h1 className="text-lg md:text-xl font-bold tracking-tight">
            Mike's Custom PCs
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
            <a href="#am4" className="hover:text-white">AM4</a>
            <a href="#am5" className="hover:text-white">AM5</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold"
          >
            Build My PC
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Custom Gaming PCs Built Fast
          </h2>
          <p className="text-zinc-400 mt-4 text-sm md:text-base">
            Pre-built performance systems or fully custom builds. Professionally assembled, tested, and optimized.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#am5" className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-center">
              Shop Builds
            </a>
            <a href="#contact" className="border border-zinc-600 px-4 py-2 rounded-lg text-center">
              Custom Quote
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 md:p-6">
          <h3 className="font-semibold mb-2">Why choose us?</h3>
          <ul className="text-sm text-zinc-400 space-y-2">
            <li>• 24–48 hour assembly</li>
            <li>• Stress-tested builds</li>
            <li>• Clean cable management</li>
            <li>• Upgrade-ready systems</li>
          </ul>
        </div>
      </section>

      {/* Builds */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">

        {/* AM4 */}
        <div id="am4" className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">AM4 Builds</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {grouped.AM4?.map((b, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-5 hover:border-blue-500 transition">
                <div className="flex justify-between gap-2">
                  <h4 className="font-semibold text-sm md:text-base">{b.name}</h4>
                  <span className={`text-[10px] md:text-xs px-2 py-1 rounded ${tierStyle(b.tier)}`}>{b.tier}</span>
                </div>

                <div className="text-blue-400 font-bold mt-2">${b.price}</div>

                <div className="text-[11px] md:text-xs text-zinc-400 mt-3 space-y-1">
                  <p>CPU: {b.cpu}</p>
                  <p>GPU: {b.gpu}</p>
                  <p>RAM: {b.ram}</p>
                  <p>Storage: {b.storage}</p>
                </div>

                <div className="text-[11px] md:text-xs mt-3 text-green-400">
                  {b.turnaround}
                </div>

                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg text-sm">
                  Request Build
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AM5 */}
        <div id="am5">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">AM5 Builds</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {grouped.AM5?.map((b, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-5 hover:border-blue-500 transition">
                <div className="flex justify-between gap-2">
                  <h4 className="font-semibold text-sm md:text-base">{b.name}</h4>
                  <span className={`text-[10px] md:text-xs px-2 py-1 rounded ${tierStyle(b.tier)}`}>{b.tier}</span>
                </div>

                <div className="text-blue-400 font-bold mt-2">${b.price}</div>

                <div className="text-[11px] md:text-xs text-zinc-400 mt-3 space-y-1">
                  <p>CPU: {b.cpu}</p>
                  <p>GPU: {b.gpu}</p>
                  <p>RAM: {b.ram}</p>
                  <p>Storage: {b.storage}</p>
                </div>

                <div className="text-[11px] md:text-xs mt-3 text-green-400">
                  {b.turnaround}
                </div>

                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg text-sm">
                  Request Build
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-4 md:px-6 pb-20 md:pb-24">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Request a Custom PC</h3>
        <p className="text-zinc-400 text-center mb-8 text-sm md:text-base">
          Email: <span className="text-white">{contactEmail}</span>
        </p>

        <form name="contact" method="POST" className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 space-y-4">
          <input type="hidden" name="form-name" value="contact" />

          <input className="w-full p-3 bg-zinc-800 rounded-lg" name="name" placeholder="Name" />
          <input className="w-full p-3 bg-zinc-800 rounded-lg" name="email" placeholder="Email" />
          <input className="w-full p-3 bg-zinc-800 rounded-lg" name="budget" placeholder="Budget" />
         <textarea className="w-full p-3 bg-zinc-800 rounded-lg" name="message" placeholder="What do you want built?" rows={5} />

          <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold">
            Send Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-[11px] md:text-xs text-zinc-500">
        <p>All builds include professional assembly & testing.</p>
        <p>Shipping varies by location.</p>
      </footer>

    </div>
  );
}
