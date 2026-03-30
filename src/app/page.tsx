"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductDetails from "@/components/ProductDetails";
import FeatureHighlights from "@/components/FeatureHighlights";
import AccordionDetails from "@/components/AccordionDetails";
import SpecsDropdown from "@/components/SpecsDropdown";
import BundleContents from "@/components/BundleContents";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white pb-24">
      <Navbar />
      
      <main className="flex flex-col w-full">
        {/* Full 600vh Scroll Sequence Hero */}
        <HeroSection />

        {/* Product Details Section containing pricing and Add to Cart. */}
        <section className="flex flex-col justify-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
          <ProductDetails />
        </section>

        {/* Features Highlights Grid */}
        <section className="flex flex-col justify-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="flex flex-col items-center text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white">Core Highlights</h2>
            <p className="text-[#888] mt-4 max-w-xl text-sm md:text-base font-medium">Engineered with extreme precision for absolute performance.</p>
          </motion.div>
          <FeatureHighlights />
        </section>

        {/* Accordions */}
        <section className="flex flex-col justify-center max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="flex flex-col items-center text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white">Built to Endure</h2>
            <p className="text-[#888] mt-4 max-w-xl text-sm md:text-base font-medium">Discover why the Legacy Series is the ultimate companion.</p>
          </motion.div>
          <AccordionDetails />
        </section>

        {/* Specs and Bundle */}
        <section className="flex flex-col gap-16 justify-center max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 mt-8">
          <div className="flex flex-col gap-6">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-center"
            >
              Technical Specifications
            </motion.h2>
            <SpecsDropdown />
          </div>

          <div className="flex flex-col gap-10 mt-8">
            <BundleContents />
          </div>
        </section>
      </main>
    </div>
  );
}
