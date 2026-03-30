"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function SpecsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const specs = [
    { label: "Display Type", value: "Analogue" },
    { label: "Movement Type", value: "Quartz, Battery Powered" },
    { label: "Strap Type", value: "Premium Rubber Silicone" },
    { label: "Clasp Type", value: "Buckle" },
    { label: "Case Material", value: "Reinforced Polycarbonate" },
    { label: "Dial Window", value: "Scratch-Resistant Mineral" },
    { label: "Weight", value: "63 Grams" },
    { label: "Battery Life", value: "Approx. 2 Years" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="border-t border-[#222] pt-8"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center md:justify-between text-2xl md:text-4xl font-bold tracking-tighter uppercase text-white hover:text-primary-green transition-colors w-full text-center md:text-left group gap-4"
      >
        <span>Tech Specs</span>
        <div className="p-4 rounded-full border border-[#333] group-hover:border-primary-green transition-colors">
          {isOpen ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12 pb-8">
              {specs.map((spec, idx) => (
                <div key={idx} className="flex flex-col border-b border-[#222] pb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#555] uppercase mb-2">{spec.label}</span>
                  <span className="text-xl md:text-2xl font-medium text-[#ddd]">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
