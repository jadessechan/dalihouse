import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import TheSpace from "@/components/TheSpace";
import HowItWorks from "@/components/HowItWorks";
import MeetYourHost from "@/components/MeetYourHost";
import FAQ from "@/components/FAQ";
import SoftLanding from "@/components/SoftLanding";
import Footer from "@/components/Footer";
import FaqJsonLd from "@/components/FaqJsonLd";

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <Nav />
      <main>
        <Hero />
        <ValueProposition />
        <Features />
        <TheSpace />
        <HowItWorks />
        <MeetYourHost />
        <FAQ />
        <SoftLanding />
      </main>
      <Footer />
    </>
  );
}
