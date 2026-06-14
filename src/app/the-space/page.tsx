import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TheSpace from "@/components/TheSpace";
import SoftLanding from "@/components/SoftLanding";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "The Space — Rooms, Pricing & Amenities",
  description:
    "Private furnished rooms from $900/month near Carrollton/Plano, Dallas. Utilities, cleaning, and shared essentials included — a calm, move-in-ready home for women.",
  alternates: { canonical: "/the-space" },
  openGraph: {
    title: "The Space — Rooms, Pricing & Amenities | Dali House",
    description:
      "Private furnished rooms from $900/month near Carrollton/Plano, Dallas. Utilities, cleaning, and shared essentials included.",
    url: "https://dalihouse.co/the-space",
    siteName: "Dali House",
    type: "website",
    locale: "en_US",
    images: [{ url: "/room-bedroom1.jpeg", width: 1200, height: 630, alt: "A room at Dali House" }],
  },
};

export default function TheSpacePage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "The Space", path: "/the-space" }]} />
      <Nav />
      <main className="pt-20">
        <TheSpace />
      </main>
      <SoftLanding />
      <Footer />
    </>
  );
}
