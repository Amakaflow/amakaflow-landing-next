import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DayTimeline from "@/components/DayTimeline";
import BeforeAfter from "@/components/BeforeAfter";
import MultiChannel from "@/components/MultiChannel";
import CoachChat from "@/components/CoachChat";
import DeviceGrid from "@/components/DeviceGrid";
import Pricing from "@/components/Pricing";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DayTimeline />
        <BeforeAfter />
        <MultiChannel />
        <CoachChat />
        <DeviceGrid />
        <Pricing />
        <section id="signup" className="py-24 sm:py-32">
          <div className="max-w-md mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">
              Ready to simplify your training?
            </h2>
            <EmailCapture />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
