import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
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
  title: "Dali House — Coliving for Women in Dallas",
  description:
    "A co-living space in Dallas for young female professionals who value comfort and intentional living. Fully furnished, flexible lease, built-in community.",
  openGraph: {
    title: "Dali House — Coliving for Women in Dallas",
    description:
      "A co-living space in Dallas for young female professionals who value comfort and intentional living.",
    url: "https://dalihouse.co",
    siteName: "Dali House",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
