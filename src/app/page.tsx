import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TheSpace from "@/components/TheSpace";
import HowItWorks from "@/components/HowItWorks";
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
        <Features />
        <TheSpace />
        <HowItWorks />
        <MeetYourHost />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
