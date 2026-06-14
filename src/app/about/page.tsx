import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MeetYourHost from "@/components/MeetYourHost";
import SoftLanding from "@/components/SoftLanding";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About — Meet Your Host",
  description:
    "Dali House is a women's coliving home in Dallas, created by founder Jadesse to give women a soft landing — a calm, intentional place to settle and build community.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Meet Your Host | Dali House",
    description:
      "Dali House is a women's coliving home in Dallas, created by founder Jadesse to give women a soft landing.",
    url: "https://dalihouse.co/about",
    siteName: "Dali House",
    type: "website",
    locale: "en_US",
    images: [{ url: "/dali-house-host.jpeg", width: 1200, height: 630, alt: "Jadesse, host of Dali House" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "About", path: "/about" }]} />
      <Nav />
      <main className="pt-20">
        <MeetYourHost />
      </main>
      <SoftLanding />
      <Footer />
    </>
  );
}
