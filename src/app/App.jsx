import LenisProvider from "./providers/LenisProvider";
import MotionConfigProvider from "./providers/MotionConfigProvider";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import StickyBuyNow from "../components/layout/StickyBuyNow";

import Hero from "../components/sections/Hero";
import Story from "../components/sections/Story";
import Features from "../components/sections/Features";
import TechSpecs from "../components/sections/TechSpecs";
import Pricing from "../components/sections/Pricing";
import Reviews from "../components/sections/Reviews";
import FAQ from "../components/sections/FAQ";

import CheckoutModal from "../components/checkout/CheckoutModal";

export default function App() {
  return (
    <MotionConfigProvider>
      <LenisProvider>
        <Header />

        <main className="relative z-10">
          {/* Showroom-style hero */}
          <Hero />

          {/* Hardware flow */}
          <Features />
          <TechSpecs />
          <Story />
          <Reviews />
          <Pricing />
          <FAQ />
        </main>

        <Footer />
        <StickyBuyNow />
        <CheckoutModal />
      </LenisProvider>
    </MotionConfigProvider>
  );
}
