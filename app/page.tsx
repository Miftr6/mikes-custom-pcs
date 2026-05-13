"use client";

import { useMemo } from "react";

export default function PCBuilderWebsite() {
  const builds = [
    {
      name: "AM4 Air Cooled",
      price: 1500,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB Video Card",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200 CL16",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes: "Noctua NH-D15 chromax.black CPU Cooler",
      platform: "AM4",
      tier: "Air Cooled",
      turnaround: "24–48h Build Time",
    },
    {
      name: "AM4 AIO",
      price: 1450,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB Video Card",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200 CL16",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes: "Cooler Master MasterLiquid 240L Core ARGB",
      platform: "AM4",
      tier: "AIO",
      turnaround: "24–48h Build Time",
    },
    {
      name: "AM5 Air Cooled",
      price: 1700,
      cpu: "AMD Ryzen 7 7700 3.6 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB Video Card",
      ram: "G.Skill Flare X5 32 GB DDR5-6000 CL36",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes: "Thermalright Peerless Assassin 120 SE",
      platform: "AM5",
      tier: "Air Cooled",
      turnaround: "24–48h Build Time",
    },
    {
      name: "AM5 AIO",
      price: 1750,
      cpu: "AMD Ryzen 7 7700 3.6 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB Video Card",
      ram: "G.Skill Flare X5 32 GB DDR5-6000 CL36",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes: "Cooler Master MasterLiquid 240L Core ARGB",
      platform: "AM5",
      tier: "AIO",
      turnaround: "24–48h Build Time",
    },
    {
      name: "AM4 Air Cooled Nvidia GPU",
      price: 2050,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "Gigabyte GAMING OC RTX 5060 Ti 16GB",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200 CL16",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes: "Noctua NH-D15 chromax.black CPU Cooler",
      platform: "AM4",
      tier: "NVIDIA",
      turnaround: "24–48h Build Time",
    },
    {
      name: "AM4 AIO Nvidia GPU",
      price: 2000,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "Gigabyte GAMING OC RTX 5060 Ti 16GB",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200 CL16",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes: "Cooler Master MasterLiquid 240L Core ARGB",
      platform: "AM4",
      tier: "NVIDIA AIO",
      turnaround: "24–48h Build Time",
    },
    {
      name: "AM5 Air Cooled Nvidia GPU",
      price: 2150,
      cpu: "AMD Ryzen 7 7700 3.6 GHz 8-Core Processor",
      gpu: "Gigabyte GAMING OC RTX 5060 Ti 16GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000 CL36",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes: "Thermalright Peerless Assassin 120 SE",
      platform: "AM5",
      tier: "NVIDIA",
      turnaround: "24–48h Build Time",
    },
    {
      name: "AM5 AIO Nvidia GPU",
      price: 2250,
      cpu: "AMD Ryzen 7 7700 3.6 GHz 8-Core Processor",
      gpu: "Gigabyte GAMING OC RTX 5060 Ti 16GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000 CL36",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0",
      case: "Lian Li Vector V100R ATX Mid Tower",
      notes: "Cooler Master MasterLiquid 240L Core ARGB",
      platform: "AM5",
      tier: "High End",
      turnaround: "24–48h Build Time",
    },
  ];

  const grouped = useMemo(() => {
    return builds.reduce((acc: Record<string, typeof builds>, b) => {
      if (!acc[b.platform]) acc[b.platform] = [];
      acc[b.platform].push(b);
      return acc;
    }, {});
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="bg-blue-600 text-center text-sm py-2 font-semibold px-2">
        Custom Built Gaming PCs • 24–48 Hour Build Time • All Prices Include Professional Assembly Labor • Shipping Calculated Separately Based on Location
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">
            Mike's Custom PCs
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
            <a href="#am4" className="hover:text-white">
              AM4
            </a>

            <a href="#am5" className="hover:text-white">
              AM5
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Build My PC
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Custom Gaming PCs Built Fast
          </h2>

          <p className="text-zinc-400 mt-4">
            Professionally assembled gaming PCs with premium components,
            clean cable management, and stress testing included.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#am5"
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
            >
              Shop Builds
            </a>

            <a
              href="#contact"
              className="border border-zinc-600 px-4 py-2 rounded-lg"
            >
              Custom Quote
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="font-semibold mb-2">Why choose us?</h3>

          <ul className="text-sm text-zinc-400 space-y-2">
            <li>• 24–48 hour assembly</li>
            <li>• Stress-tested systems</li>
            <li>• Clean cable management</li>
            <li>• Upgrade-ready builds</li>
            <li>• Premium cooling solutions</li>
          </ul>
        </div>
      </section>

      {/* Builds */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        {["AM4", "AM5"].map((platform) => (
          <div key={platform} id={platform.toLowerCase()} className="mb-16">
            <h3 className="text-3xl font-bold mb-6">{platform} Builds</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grouped[platform]?.map((b, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-blue-500 transition"
                >
                  <div className="flex justify-between items-start gap-3">
                    <h4 className="font-bold text-lg">{b.name}</h4>

                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      {b.tier}
                    </span>
                  </div>

                  <div className="text-blue-400 text-2xl font-bold mt-3">
                    ${b.price}
                  </div>

                  <div className="text-sm text-zinc-300 mt-4 space-y-2">
                    <p><strong>CPU:</strong> {b.cpu}</p>
                    <p><strong>GPU:</strong> {b.gpu}</p>
                    <p><strong>RAM:</strong> {b.ram}</p>
                    <p><strong>Storage:</strong> {b.storage}</p>
                    <p><strong>Case:</strong> {b.case}</p>
                    <p><strong>Cooling:</strong> {b.notes}</p>
                  </div>

                  <div className="text-sm mt-4 text-green-400">
                    {b.turnaround}
                  </div>

                  <a
                    href="#contact"
                    className="mt-5 block w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg text-center font-semibold"
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
        className="max-w-3xl mx-auto px-4 pb-24"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">
          Request a Custom PC
        </h3>

        <p className="text-zinc-400 mb-8 text-center">
          Send a build request directly through the website.
        </p>

        <form
          action="https://formspree.io/f/mykovwyp"
          method="POST"
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white"
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white"
          />

          <textarea
            name="message"
            placeholder="Tell me what kind of PC you want built..."
            required
            rows={6}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-bold"
          >
            Send Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-xs text-zinc-500">
        <p>All builds include professional assembly & testing.</p>
        <p>Shipping varies by location.</p>
      </footer>
    </div>
  );
}