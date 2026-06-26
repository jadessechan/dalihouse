import type { Metadata } from "next";
import { Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dalihouse.co"),
  title: {
    default: "Dali House — Coliving for Women in Dallas",
    template: "%s | Dali House",
  },
  description:
    "A co-living space in Dallas for young female professionals who value comfort and intentional living. Fully furnished, flexible lease, built-in community. $900/month.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dali House — Coliving for Women in Dallas",
    description:
      "A co-living space in Dallas for young female professionals who value comfort and intentional living.",
    url: "https://dalihouse.co",
    siteName: "Dali House",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/dali-house-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dali House — Coliving for Women in Dallas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dali House — Coliving for Women in Dallas",
    description:
      "A co-living space in Dallas for young female professionals who value comfort and intentional living.",
    images: ["/dali-house-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${jetbrainsMono.variable}`}>
      <body>
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
