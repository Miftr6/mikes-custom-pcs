"use client";

import { useMemo } from "react";

export default function PCBuilderWebsite() {
  const contactEmail = "custompcbymike@gmail.com";

  const builds = [
    {
      name: "AM4 Air Cooled",
      price: 1500,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "ASRock Challenger RX 7600 8GB",
      ram: "32GB DDR4-3200 (2x16GB)",
      storage: "Kingston NV3 1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM4",
      tier: "Entry",
      notes: "Noctua NH-D15 Chromax Black cooler",
    },
    {
      name: "AM4 AIO",
      price: 1450,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "RX 7600 8GB",
      ram: "32GB DDR4-3200",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM4",
      tier: "Entry Plus",
      notes: "240mm AIO Liquid Cooling",
    },
    {
      name: "AM5 Air Cooled",
      price: 1700,
      cpu: "Ryzen 7 7700",
      gpu: "RX 7600 8GB",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM5",
      tier: "Mid",
      notes: "Thermalright Peerless Assassin",
    },
    {
      name: "AM5 AIO",
      price: 1750,
      cpu: "Ryzen 7 7700",
      gpu: "RX 7600 8GB",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM5",
      tier: "Mid Plus",
      notes: "240mm AIO Liquid Cooling",
    },
    {
      name: "AM4 Air Nvidia",
      price: 2050,
      cpu: "Ryzen 7 5700G",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR4-3200",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM4",
      tier: "Value Gaming",
      notes: "Noctua NH-D15",
    },
    {
      name: "AM4 AIO Nvidia",
      price: 2000,
      cpu: "Ryzen 7 5700G",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR4-3200",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM4",
      tier: "Performance",
      notes: "240mm AIO Liquid Cooling",
    },
    {
      name: "AM5 Air Nvidia",
      price: 2150,
      cpu: "Ryzen 7 7700",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM5",
      tier: "High End",
      notes: "Peerless Assassin cooler",
    },
    {
      name: "AM5 AIO Nvidia",
      price: 2250,
      cpu: "Ryzen 7 7700",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM5",
      tier: "High End",
      notes: "240mm AIO Liquid Cooling",
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
      "Entry Plus": "bg-green-400/10 text-green-200",
      Mid: "bg-yellow-500/10 text-yellow-300",
      "Mid Plus": "bg-yellow-400/10 text-yellow-200",
      "Value Gaming": "bg-blue-500/10 text-blue-300",
      Performance: "bg-purple-500/10 text-purple-300",
      "High End": "bg-red-500/10 text-red-300",
    };

    return map[tier] || "bg-zinc-700 text-zinc-300";
  };

  const requestBuildEmail = (build: any) => {
    const subject = encodeURIComponent(`Build Request: ${build.name}`);
    const body = encodeURIComponent(`
Hi Mike,

I'd like to request this build:

Build: ${build.name}
Price: $${build.price}
CPU: ${build.cpu}
GPU: ${build.gpu}
RAM: ${build.ram}
Storage: ${build.storage}
Case: ${build.case || "N/A"}

Notes: ${build.notes || "None"}

Thanks!
    `);

    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Top Banner */}
      <div className="bg-blue-600 text-center text-xs md:text-sm py-2 font-semibold">
        Custom Built Gaming PCs • Labor Included in All Prices • Shipping Calculated Separately
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Mike's Custom PCs</h1>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-4xl font-bold mb-4">
          Custom Gaming PCs Built Fast
        </h2>
        <p className="text-zinc-400">
          Prebuilt systems or fully custom requests — all professionally assembled and tested.
        </p>
      </section>

      {/* Builds */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        {Object.entries(grouped).map(([platform, list]) => (
          <div key={platform} className="mb-14">
            <h3 className="text-2xl font-bold mb-6">{platform} Builds</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((b, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{b.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${tierStyle(b.tier)}`}>
                      {b.tier}
                    </span>
                  </div>

                  <div className="text-blue-400 font-bold mt-2">
                    ${b.price}
                  </div>

                  <div className="text-sm text-zinc-400 mt-3 space-y-1">
                    <p>CPU: {b.cpu}</p>
                    <p>GPU: {b.gpu}</p>
                    <p>RAM: {b.ram}</p>
                    <p>Storage: {b.storage}</p>
                    {b.case && <p>Case: {b.case}</p>}
                  </div>

                  <p className="text-xs text-zinc-500 mt-2">
                    {b.notes}
                  </p>

                  <a
                    href={requestBuildEmail(b)}
                    className="block mt-4 bg-blue-600 hover:bg-blue-500 text-center py-2 rounded-lg text-sm font-semibold"
                  >
                    Request This Build
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-3xl mx-auto px-6 pb-24 text-center"
      >
        <h3 className="text-3xl font-bold mb-4">
          Request a Custom PC
        </h3>

        <p className="text-zinc-400 mb-6">
          Don’t see what you want? Send a full custom request and I’ll spec it for you.
        </p>

        <a
          href={`mailto:${contactEmail}?subject=${encodeURIComponent(
            "Custom PC Build Request"
          )}`}
          className="inline-block bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold"
        >
          Email Custom Build Request
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-xs text-zinc-500">
        <p>All prices include labor.</p>
        <p>Shipping varies by location.</p>
      </footer>

    </div>
  );
}