import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import TheSpaceTeaser from "@/components/TheSpaceTeaser";
import HowItWorks from "@/components/HowItWorks";
import AboutTeaser from "@/components/AboutTeaser";
import AlumniTeaser from "@/components/AlumniTeaser";
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
        <TheSpaceTeaser />
        <HowItWorks />
        <AboutTeaser />
        <AlumniTeaser />
        <FAQ />
        <SoftLanding />
      </main>
      <Footer />
    </>
  );
}
