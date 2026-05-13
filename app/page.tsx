"use client";

import { useMemo } from "react";

export default function PCBuilderWebsite() {
  const builds = [
    {
      name: "AM4 Air Cooled",
      price: 1500,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes:
        "CPU cooler is a Noctua NH-D15 Chromax Black 82.52 CFM CPU Cooler",
      platform: "AM4",
    },
    {
      name: "AM4 AIO",
      price: 1450,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes:
        "CPU cooler is a Cooler Master MasterLiquid 240L Core ARGB Liquid CPU Cooler",
      platform: "AM4",
    },
    {
      name: "AM5 Air Cooled",
      price: 1700,
      cpu: "AMD Ryzen 7 7700 3.6 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes:
        "CPU cooler is a Thermalright Peerless Assassin 120 SE 66.17 CFM CPU Cooler",
      platform: "AM5",
    },
    {
      name: "AM5 AIO",
      price: 1750,
      cpu: "AMD Ryzen 7 7700 3.6 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes:
        "CPU cooler is a Cooler Master MasterLiquid 240L Core ARGB Liquid CPU Cooler",
      platform: "AM5",
    },
    {
      name: "AM4 Air Cooled Nvidia GPU",
      price: 2050,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "Gigabyte GAMING OC GeForce RTX 5060 Ti 16 GB",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes:
        "CPU cooler is a Noctua NH-D15 Chromax Black 82.52 CFM CPU Cooler",
      platform: "AM4",
    },
    {
      name: "AM4 AIO Nvidia GPU",
      price: 2000,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "Gigabyte GAMING OC GeForce RTX 5060 Ti 16 GB",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes:
        "CPU cooler is a Cooler Master MasterLiquid 240L Core ARGB Liquid CPU Cooler",
      platform: "AM4",
    },
    {
      name: "AM5 Air Cooled Nvidia GPU",
      price: 2150,
      cpu: "AMD Ryzen 7 7700 3.6 GHz 8-Core Processor",
      gpu: "Gigabyte GAMING OC GeForce RTX 5060 Ti 16 GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes:
        "CPU cooler is a Thermalright Peerless Assassin 120 SE 66.17 CFM CPU Cooler",
      platform: "AM5",
    },
    {
      name: "AM5 AIO Nvidia GPU",
      price: 2250,
      cpu: "AMD Ryzen 7 7700 3.6 GHz 8-Core Processor",
      gpu: "Gigabyte GAMING OC GeForce RTX 5060 Ti 16 GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes:
        "CPU cooler is a Cooler Master MasterLiquid 240L Core ARGB Liquid CPU Cooler",
      platform: "AM5",
    },
  ];

  const grouped = useMemo(() => {
    return builds.reduce(
      (acc: Record<string, typeof builds>, build) => {
        if (!acc[build.platform]) {
          acc[build.platform] = [];
        }

        acc[build.platform].push(build);

        return acc;
      },
      {}
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-blue-600 text-center text-xs md:text-sm py-3 px-4 font-semibold">
        All prices include labor and professional assembly • Shipping cost is
        separate and varies by location
      </div>

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Mike&apos;s Custom Computers
          </h1>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-semibold"
          >
            Custom Request
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-bold mb-4">
          Custom Built Gaming PCs
        </h2>

        <p className="text-zinc-400 max-w-2xl text-lg">
          Professionally assembled gaming computers with clean cable management,
          quality components, and fast turnaround times.
        </p>
      </section>

      {/* AM4 Builds */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h3 className="text-3xl font-bold mb-8">AM4 Builds</h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {grouped.AM4?.map((b, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <h4 className="text-2xl font-bold mb-2">{b.name}</h4>

              <p className="text-blue-400 text-3xl font-bold mb-4">
                ${b.price}
              </p>

              <div className="space-y-2 text-sm text-zinc-300">
                <p>
                  <span className="text-zinc-500">CPU:</span> {b.cpu}
                </p>

                <p>
                  <span className="text-zinc-500">GPU:</span> {b.gpu}
                </p>

                <p>
                  <span className="text-zinc-500">RAM:</span> {b.ram}
                </p>

                <p>
                  <span className="text-zinc-500">Storage:</span>{" "}
                  {b.storage}
                </p>

                <p>
                  <span className="text-zinc-500">Case:</span> {b.case}
                </p>

                <p className="text-zinc-400 pt-2">{b.notes}</p>
              </div>

              <form
                action="https://formspree.io/f/mykovwyp"
                method="POST"
                className="mt-6 space-y-3"
              >
                <input
                  type="hidden"
                  name="Build Requested"
                  value={b.name}
                />

                <input
                  type="email"
                  name="Customer Email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-zinc-800 rounded-lg text-sm"
                />

                <textarea
                  name="Customer Notes"
                  placeholder="Questions or requests"
                  rows={3}
                  className="w-full p-3 bg-zinc-800 rounded-lg text-sm"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold"
                >
                  Request This Build
                </button>
              </form>
            </div>
          ))}
        </div>
      </section>

      {/* AM5 Builds */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold mb-8">AM5 Builds</h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {grouped.AM5?.map((b, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <h4 className="text-2xl font-bold mb-2">{b.name}</h4>

              <p className="text-blue-400 text-3xl font-bold mb-4">
                ${b.price}
              </p>

              <div className="space-y-2 text-sm text-zinc-300">
                <p>
                  <span className="text-zinc-500">CPU:</span> {b.cpu}
                </p>

                <p>
                  <span className="text-zinc-500">GPU:</span> {b.gpu}
                </p>

                <p>
                  <span className="text-zinc-500">RAM:</span> {b.ram}
                </p>

                <p>
                  <span className="text-zinc-500">Storage:</span>{" "}
                  {b.storage}
                </p>

                <p>
                  <span className="text-zinc-500">Case:</span> {b.case}
                </p>

                <p className="text-zinc-400 pt-2">{b.notes}</p>
              </div>

              <form
                action="https://formspree.io/f/mykovwyp"
                method="POST"
                className="mt-6 space-y-3"
              >
                <input
                  type="hidden"
                  name="Build Requested"
                  value={b.name}
                />

                <input
                  type="email"
                  name="Customer Email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-zinc-800 rounded-lg text-sm"
                />

                <textarea
                  name="Customer Notes"
                  placeholder="Questions or requests"
                  rows={3}
                  className="w-full p-3 bg-zinc-800 rounded-lg text-sm"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold"
                >
                  Request This Build
                </button>
              </form>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Request */}
      <section
        id="contact"
        className="max-w-3xl mx-auto px-6 pb-24"
      >
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h3 className="text-3xl font-bold mb-4 text-center">
            Request a Custom Build
          </h3>

          <p className="text-zinc-400 text-center mb-8">
            Need something different? Send a custom request.
          </p>

          <form
            action="https://formspree.io/f/mykovwyp"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="Build Requested"
              value="Custom Build Request"
            />

            <input
              type="email"
              name="Customer Email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-zinc-800 rounded-lg"
            />

            <textarea
              name="Customer Notes"
              placeholder="Tell me what you want built"
              rows={5}
              required
              className="w-full p-3 bg-zinc-800 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold"
            >
              Send Custom Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        <p>Professional assembly and testing included.</p>
        <p>Shipping cost varies by location.</p>
      </footer>
    </div>
  );
}