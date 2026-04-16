import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import TheSpace from "@/components/TheSpace";
import GoodHands from "@/components/GoodHands";
import HowItWorks from "@/components/HowItWorks";
import Philosophy from "@/components/Philosophy";
import MeetYourHost from "@/components/MeetYourHost";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueProposition />
        <Features />
        <TheSpace />
        <GoodHands />
        <HowItWorks />
        <Philosophy />
        <MeetYourHost />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
