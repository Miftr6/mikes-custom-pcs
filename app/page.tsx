"use client";

import { useMemo, useState } from "react";

export default function PCBuilderWebsite() {
  const contactEmail = "custompcbymike@gmail.com";

  const FORM_ENDPOINT = "https://formspree.io/f/mykovwyp";

  const [selectedBuild, setSelectedBuild] = useState<string | null>(null);

  const builds = [
    {
      name: "AM4 Air Cooled",
      price: 1500,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "RX 7600 8GB",
      ram: "32GB DDR4-3200",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM4",
      tier: "Entry",
      notes: "Noctua NH-D15 Chromax Black"
    },
    {
      name: "AM4 AIO",
      price: 1450,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "RX 7600 8GB",
      ram: "32GB DDR4-3200",
      storage: "1TB NVMe",
      case: "",
      platform: "AM4",
      tier: "Entry Plus",
      notes: "240mm AIO Cooler"
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
      notes: "Peerless Assassin Cooler"
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
      notes: "240mm AIO Cooler"
    },
    {
      name: "AM4 Air Cooled Nvidia",
      price: 2050,
      cpu: "Ryzen 7 5700G",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR4-3200",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM4",
      tier: "Value Gaming",
      notes: "Noctua NH-D15"
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
      tier: "Value Gaming",
      notes: "240mm AIO Cooler"
    },
    {
      name: "AM5 Air Cooled Nvidia",
      price: 2150,
      cpu: "Ryzen 7 7700",
      gpu: "RTX 5060 Ti 16GB",
      ram: "32GB DDR5-6000",
      storage: "1TB NVMe",
      case: "Lian Li Vector V100R",
      platform: "AM5",
      tier: "Performance",
      notes: "Peerless Assassin Cooler"
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
      notes: "240mm AIO Cooler"
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

  const sendBuildEmail = async (buildName: string) => {
    await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: `Build Request: ${buildName}`,
        message: `Customer requested build: ${buildName}`,
        build: buildName,
      }),
    });

    alert("Request sent! I will email you back shortly.");
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Top Banner */}
      <div className="bg-blue-600 text-center text-xs md:text-sm py-2 font-semibold px-2">
        All prices include labor • Shipping varies by location and is calculated after order
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <h1 className="font-bold">Mike's Custom PCs</h1>
        </div>
      </header>

      {/* Builds */}
      <section className="max-w-7xl mx-auto px-4 py-10 space-y-10">

        {["AM4", "AM5"].map((platform) => (
          <div key={platform}>
            <h2 className="text-xl font-bold mb-4">{platform} Builds</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grouped[platform]?.map((b, i) => (
                <div key={i} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">

                  <div className="flex justify-between">
                    <h3 className="font-semibold">{b.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${tierStyle(b.tier)}`}>
                      {b.tier}
                    </span>
                  </div>

                  <p className="text-blue-400 font-bold mt-2">${b.price}</p>

                  <div className="text-xs text-zinc-400 mt-3 space-y-1">
                    <p>CPU: {b.cpu}</p>
                    <p>GPU: {b.gpu}</p>
                    <p>RAM: {b.ram}</p>
                    <p>Storage: {b.storage}</p>
                    {b.case && <p>Case: {b.case}</p>}
                    {b.notes && <p className="text-zinc-500">{b.notes}</p>}
                  </div>

                  <button
                    onClick={() => sendBuildEmail(b.name)}
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

      {/* Custom Request */}
      <section className="max-w-xl mx-auto px-4 py-16">
        <h3 className="text-xl font-bold mb-4 text-center">Custom Build Request</h3>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="space-y-3 bg-zinc-900 p-6 rounded-xl border border-zinc-800"
        >
          <input name="name" placeholder="Name" className="w-full p-3 bg-zinc-800 rounded" />
          <input name="email" placeholder="Email" className="w-full p-3 bg-zinc-800 rounded" />
          <input name="budget" placeholder="Budget" className="w-full p-3 bg-zinc-800 rounded" />
          <textarea
            name="message"
            placeholder="What do you want built?"
            className="w-full p-3 bg-zinc-800 rounded"
            rows={5}
          />

          <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded font-semibold">
            Send Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-zinc-500 py-10">
        Built by Mike • Custom PC Builds
      </footer>

    </div>
  );
}