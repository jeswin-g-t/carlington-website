"use client";

import { motion } from "framer-motion";

export default function ProductDetails() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-8">
      {/* Subdescription */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-[#888] text-xl md:text-2xl font-light tracking-wide leading-relaxed"
      >
        Engineered for precision. Crafted for durability. The{" "}
        <span className="text-white font-medium">Legacy Series CT 9999</span> is an
        analog chronograph housed in reinforced polycarbonate and secured by a premium silicone rubber strap. 
        It is the ultimate expression of modern tactical luxury.
      </motion.p>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-2 mt-12"
      >
        <span className="text-[#666] uppercase text-sm tracking-widest font-bold">Price</span>
        <div className="flex items-baseline justify-center gap-6">
          <span className="text-5xl md:text-7xl font-bold text-white">$149.00</span>
          <span className="text-[#444] line-through text-2xl md:text-3xl">$299.00</span>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-6 mt-16 w-full max-w-2xl px-4"
      >
        <button className="group flex-1 bg-white text-black font-bold uppercase tracking-widest py-5 px-8 rounded-full hover:bg-[#ccc] transition-all transform hover:scale-105">
          <span className="group-hover:text-primary-green transition-colors">Add to Cart</span>
        </button>
        <button className="flex-1 border border-[#333] text-white font-bold uppercase tracking-widest py-5 px-8 rounded-full hover:bg-[#111] transition-all transform hover:scale-105">
          Buy Now
        </button>
      </motion.div>
    </div>
  );
}
