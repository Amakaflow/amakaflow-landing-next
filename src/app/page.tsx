import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SampleOutput from "@/components/SampleOutput";
import Platforms from "@/components/Platforms";
import Pricing from "@/components/Pricing";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <Features />
        <HowItWorks />
        <SampleOutput />
        <Platforms />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
