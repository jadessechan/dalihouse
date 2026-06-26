import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Alumni from "@/components/Alumni";
import SoftLanding from "@/components/SoftLanding";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Alumni — Women Who've Stayed at Dali House",
  description:
    "Meet some of the women who've called Dali House home while relocating, rebuilding, and starting new chapters in Dallas.",
  alternates: { canonical: "/alumni" },
  openGraph: {
    title: "Alumni — Women Who've Stayed at Dali House",
    description:
      "Meet some of the women who've called Dali House home while relocating and starting new chapters in Dallas.",
    url: "https://dalihouse.co/alumni",
    siteName: "Dali House",
    type: "website",
    locale: "en_US",
    images: [{ url: "/dali-house-hero.jpg", width: 1200, height: 630, alt: "Dali House" }],
  },
};

export default function AlumniPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Alumni", path: "/alumni" }]} />
      <Nav />
      <main className="pt-20">
        <Alumni />
      </main>
      <SoftLanding />
      <Footer />
    </>
  );
}
