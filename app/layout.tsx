import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike's Custom PCs | Custom Gaming PCs Built Fast",
  description:
    "Custom gaming PCs built by Mike. AM4 and AM5 gaming computers, professionally assembled, stress tested, and ready to ship. Labor included in every build. Fast turnaround.",
  keywords: [
    "custom gaming pc",
    "gaming pc builder",
    "AM4 gaming pc",
    "AM5 gaming pc",
    "custom pc builder California",
    "RTX gaming pc",
    "Ryzen gaming pc",
    "Mike's Custom PCs",
  ],

  openGraph: {
    title: "Mike's Custom PCs",
    description:
      "Custom built gaming PCs with professional assembly included.",
    url: "https://mikescustompc.com",
    siteName: "Mike's Custom PCs",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mike's Custom PCs",
    description:
      "Custom gaming PCs built fast. AM4 + AM5 builds available.",
  },

  metadataBase: new URL("https://YOUR-SITE-URL.netlify.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}