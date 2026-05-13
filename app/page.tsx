"use client";

import { useMemo } from "react";

export default function PCBuilderWebsite() {
  const contactEmail = "custompcbymike@gmail.com";

  const builds = [
    {
      name: "AM4 Air Cooled",
      price: 1500,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB Video Card",
      ram: "Corsair Vengeance LPX 32 GB (2 x 16 GB) DDR4-3200 CL16 Memory",
      storage: "Kingston NV3 1 TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R ATX Mid Tower Case",
      notes: "CPU cooler is a Noctua NH-D15 Chromax Black",
      platform: "AM4",
    },
    {
      name: "AM4 AIO",
      price: 1450,
      cpu: "AMD Ryzen 7 5700G 3.8 GHz 8-Core Processor",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB Video Card",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200",
      storage: "Kingston NV3 1 TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R",
      notes: "Cooler Master MasterLiquid 240L Core ARGB",
      platform: "AM4",
    },
    {
      name: "AM5 Air Cooled",
      price: 1700,
      cpu: "AMD Ryzen 7 7700",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000",
      storage: "Kingston NV3 1 TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R",
      notes: "Thermalright Peerless Assassin 120 SE",
      platform: "AM5",
    },
    {
      name: "AM5 AIO",
      price: 1750,
      cpu: "AMD Ryzen 7 7700",
      gpu: "ASRock Challenger OC Radeon RX 7600 8 GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000",
      storage: "Kingston NV3 1 TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R",
      notes: "Cooler Master MasterLiquid 240L Core ARGB",
      platform: "AM5",
    },
    {
      name: "AM4 Air Cooled Nvidia GPU",
      price: 2050,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "Gigabyte GAMING OC RTX 5060 Ti 16 GB",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200",
      storage: "Kingston NV3 1 TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R",
      notes: "Noctua NH-D15 Chromax Black",
      platform: "AM4",
    },
    {
      name: "AM4 AIO Nvidia GPU",
      price: 2000,
      cpu: "AMD Ryzen 7 5700G",
      gpu: "Gigabyte GAMING OC RTX 5060 Ti 16 GB",
      ram: "Corsair Vengeance LPX 32 GB DDR4-3200",
      storage: "Kingston NV3 1 TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R",
      notes: "Cooler Master MasterLiquid 240L",
      platform: "AM4",
    },
    {
      name: "AM5 Air Cooled Nvidia GPU",
      price: 2150,
      cpu: "AMD Ryzen 7 7700",
      gpu: "Gigabyte GAMING OC RTX 5060 Ti 16 GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000",
      storage: "Kingston NV3 1 TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R",
      notes: "Thermalright Peerless Assassin 120 SE",
      platform: "AM5",
    },
    {
      name: "AM5 AIO Nvidia GPU",
      price: 2250,
      cpu: "AMD Ryzen 7 7700",
      gpu: "Gigabyte GAMING OC RTX 5060 Ti 16 GB",
      ram: "G.Skill Flare X5 32 GB DDR5-6000",
      storage: "Kingston NV3 1 TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R",
      notes: "Cooler Master MasterLiquid 240L Core ARGB",
      platform: "AM5",
    },
  ];

  const grouped = useMemo(() => {
    return builds.reduce((acc: Record<string, typeof builds>, build) => {
      if (!acc[build.platform]) acc[build.platform] = [];
      acc[build.platform].push(build);
      return acc;
    }, {});
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Top Banner */}
      <div className="bg-blue-600 text-center text-xs md:text-sm py-3 px-3 font-semibold">
        All prices include professional assembly labor • Shipping costs vary by location
      </div>

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Mike's Custom PCs
          </h1>

          <a
            href={`mailto:${contactEmail}`}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-4">
          Custom Built Gaming PCs
        </h2>

        <p className="text-zinc-400 max-w-2xl">
          Professionally assembled gaming computers built with high quality parts,
          clean cable management, stress testing, and fast turnaround times.
        </p>
      </section>

      {/* Build Sections */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-16">

        {Object.entries(grouped).map(([platform, platformBuilds]) => (
          <div key={platform}>
            <h3 className="text-3xl font-bold mb-6">
              {platform} Builds
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformBuilds.map((build, index) => {
                const subject = encodeURIComponent(
                  `PC Build Request - ${build.name}`
                );

                const body = encodeURIComponent(
`Hello Mike,

I am interested in this build:

${build.name}

Price: $${build.price}

Please contact me with more information.

Thank you.`
                );

                return (
                  <div
                    key={index}
                    className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-blue-500 transition"
                  >
                    <h4 className="text-xl font-semibold mb-2">
                      {build.name}
                    </h4>

                    <p className="text-blue-400 font-bold text-lg mb-4">
                      ${build.price}
                    </p>

                    <div className="text-sm text-zinc-300 space-y-2">
                      <p>
                        <span className="text-zinc-500">CPU:</span> {build.cpu}
                      </p>

                      <p>
                        <span className="text-zinc-500">GPU:</span> {build.gpu}
                      </p>

                      <p>
                        <span className="text-zinc-500">RAM:</span> {build.ram}
                      </p>

                      <p>
                        <span className="text-zinc-500">Storage:</span> {build.storage}
                      </p>

                      <p>
                        <span className="text-zinc-500">Case:</span> {build.case}
                      </p>

                      <p className="text-zinc-400 pt-2">
                        {build.notes}
                      </p>
                    </div>

                    <a
                      href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}
                      className="mt-6 block w-full bg-blue-600 hover:bg-blue-500 text-center py-3 rounded-xl font-semibold transition"
                    >
                      Request This Build
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>Professional assembly included with every system.</p>
        <p>Shipping cost determined by destination and carrier rates.</p>
      </footer>
    </div>
  );
}