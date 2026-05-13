"use client";

import { useMemo } from "react";

export default function PCBuilderWebsite() {
  const contactEmail = "custompcbymike@gmail.com";

  const builds = [
    {
      name: "AM4 Air Cooled",
      price: 1500,
      cpu: "AMD Ryzen 7 5700G 8-Core",
      gpu: "ASRock Challenger OC Radeon RX 7600 8GB",
      ram: "32GB Corsair Vengeance LPX DDR4-3200",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R ATX Mid Tower",
      cooling: "Noctua NH-D15 chromax.black",
      platform: "AM4",
      graphics: "AMD",
      coolingType: "Air Cooling",
      target: "1080p / 1440p Gaming",
    },
    {
      name: "AM4 AIO",
      price: 1450,
      cpu: "AMD Ryzen 7 5700G 8-Core",
      gpu: "ASRock Challenger OC Radeon RX 7600 8GB",
      ram: "32GB Corsair Vengeance LPX DDR4-3200",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R ATX Mid Tower",
      cooling: "Cooler Master MasterLiquid 240L ARGB",
      platform: "AM4",
      graphics: "AMD",
      coolingType: "240mm AIO",
      target: "1080p / 1440p Gaming",
    },
    {
      name: "AM5 Air Cooled",
      price: 1700,
      cpu: "AMD Ryzen 7 7700 8-Core",
      gpu: "ASRock Challenger OC Radeon RX 7600 8GB",
      ram: "32GB G.Skill Flare X5 DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R ATX Mid Tower",
      cooling: "Thermalright Peerless Assassin 120 SE",
      platform: "AM5",
      graphics: "AMD",
      coolingType: "Air Cooling",
      target: "1440p Gaming",
    },
    {
      name: "AM5 AIO",
      price: 1750,
      cpu: "AMD Ryzen 7 7700 8-Core",
      gpu: "ASRock Challenger OC Radeon RX 7600 8GB",
      ram: "32GB G.Skill Flare X5 DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R ATX Mid Tower",
      cooling: "Cooler Master MasterLiquid 240L ARGB",
      platform: "AM5",
      graphics: "AMD",
      coolingType: "240mm AIO",
      target: "1440p Gaming",
    },
    {
      name: "AM4 Air Cooled Nvidia GPU",
      price: 2050,
      cpu: "AMD Ryzen 7 5700G 8-Core",
      gpu: "Gigabyte Gaming OC RTX 5060 Ti 16GB",
      ram: "32GB Corsair Vengeance LPX DDR4-3200",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R ATX Mid Tower",
      cooling: "Noctua NH-D15 chromax.black",
      platform: "AM4",
      graphics: "NVIDIA",
      coolingType: "Air Cooling",
      target: "1440p High Refresh",
    },
    {
      name: "AM4 AIO Nvidia GPU",
      price: 2000,
      cpu: "AMD Ryzen 7 5700G 8-Core",
      gpu: "Gigabyte Gaming OC RTX 5060 Ti 16GB",
      ram: "32GB Corsair Vengeance LPX DDR4-3200",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R ATX Mid Tower",
      cooling: "Cooler Master MasterLiquid 240L ARGB",
      platform: "AM4",
      graphics: "NVIDIA",
      coolingType: "240mm AIO",
      target: "1440p High Refresh",
    },
    {
      name: "AM5 Air Cooled Nvidia GPU",
      price: 2150,
      cpu: "AMD Ryzen 7 7700 8-Core",
      gpu: "Gigabyte Gaming OC RTX 5060 Ti 16GB",
      ram: "32GB G.Skill Flare X5 DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R ATX Mid Tower",
      cooling: "Thermalright Peerless Assassin 120 SE",
      platform: "AM5",
      graphics: "NVIDIA",
      coolingType: "Air Cooling",
      target: "1440p Ultra Gaming",
    },
    {
      name: "AM5 AIO Nvidia GPU",
      price: 2250,
      cpu: "AMD Ryzen 7 7700 8-Core",
      gpu: "Gigabyte Gaming OC RTX 5060 Ti 16GB",
      ram: "32GB G.Skill Flare X5 DDR5-6000",
      storage: "Kingston NV3 1TB NVMe PCIe 4.0 SSD",
      case: "Lian Li Vector V100R ATX Mid Tower",
      cooling: "Cooler Master MasterLiquid 240L ARGB",
      platform: "AM5",
      graphics: "NVIDIA",
      coolingType: "240mm AIO",
      target: "1440p Ultra Gaming",
    },
  ];

  const grouped = useMemo(() => {
    return builds.reduce((acc: Record<string, typeof builds>, build) => {
      if (!acc[build.platform]) {
        acc[build.platform] = [];
      }

      acc[build.platform].push(build);
      return acc;
    }, {});
  }, []);

  const badgeColor = (graphics: string) => {
    if (graphics === "NVIDIA") {
      return "bg-green-500/10 text-green-300 border border-green-500/30";
    }

    return "bg-red-500/10 text-red-300 border border-red-500/30";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="bg-blue-600 text-center text-xs py-2 font-semibold px-2">
        Custom Gaming PCs • 24–48 Hour Build Time • Professionally Built & Tested
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">
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
            Request Build
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Custom Gaming PCs Built Fast
          </h2>

          <p className="text-zinc-400 mt-5 text-base">
            Professionally assembled gaming systems built with premium parts,
            clean cable management, and real-world gaming performance in mind.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <a
              href="#am5"
              className="bg-white text-black px-5 py-3 rounded-lg font-semibold text-center"
            >
              Browse Builds
            </a>

            <a
              href="#contact"
              className="border border-zinc-700 px-5 py-3 rounded-lg text-center"
            >
              Get Custom Quote
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-4">
            Why Choose Mike's Custom PCs?
          </h3>

          <ul className="space-y-3 text-zinc-400 text-sm">
            <li>• 24–48 hour build turnaround</li>
            <li>• Premium airflow-focused cases</li>
            <li>• Stress tested before delivery</li>
            <li>• Clean professional cable management</li>
            <li>• Upgrade friendly component choices</li>
          </ul>
        </div>
      </section>

      {/* Builds */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        {["AM4", "AM5"].map((platform) => (
          <div key={platform} id={platform.toLowerCase()} className="mb-16">
            <h3 className="text-3xl font-bold mb-8">
              {platform} Builds
            </h3>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {grouped[platform]?.map((build, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition"
                >
                  <div className="flex justify-between items-start gap-3">
                    <h4 className="text-lg font-bold leading-tight">
                      {build.name}
                    </h4>

                    <span
                      className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${badgeColor(
                        build.graphics
                      )}`}
                    >
                      {build.graphics}
                    </span>
                  </div>

                  <div className="text-3xl font-bold text-blue-400 mt-4">
                    ${build.price}
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-zinc-300">
                    <div>
                      <span className="text-zinc-500">CPU:</span>
                      <p>{build.cpu}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500">GPU:</span>
                      <p>{build.gpu}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500">RAM:</span>
                      <p>{build.ram}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500">Storage:</span>
                      <p>{build.storage}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500">Cooling:</span>
                      <p>{build.cooling}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500">Case:</span>
                      <p>{build.case}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500">Target:</span>
                      <p>{build.target}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2 flex-wrap">
                    <span className="bg-zinc-800 text-xs px-2 py-1 rounded">
                      {build.platform}
                    </span>

                    <span className="bg-zinc-800 text-xs px-2 py-1 rounded">
                      {build.coolingType}
                    </span>

                    <span className="bg-zinc-800 text-xs px-2 py-1 rounded">
                      32GB RAM
                    </span>

                    <span className="bg-zinc-800 text-xs px-2 py-1 rounded">
                      1TB NVMe
                    </span>
                  </div>

                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                      build.name
                    )}`}
                    className="mt-6 block w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg text-center font-semibold"
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
        className="max-w-3xl mx-auto px-4 md:px-6 pb-24 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">
          Need Something Custom?
        </h3>

        <p className="text-zinc-400 mb-8">
          Want different parts, RGB options, more storage, or a fully custom
          gaming setup? Reach out directly and we’ll build something around your
          budget and goals.
        </p>

        <a
          href={`mailto:${contactEmail}`}
          className="inline-block bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold text-lg"
        >
          Email Mike
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-xs text-zinc-500">
        <p>All systems include professional assembly and testing.</p>
        <p>Shipping and local delivery availability vary by location.</p>
      </footer>
    </div>
  );
}