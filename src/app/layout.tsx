import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Dali House — Coliving for Women in Dallas",
    description:
      "A co-living space in Dallas for young female professionals who value comfort and intentional living.",
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
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
