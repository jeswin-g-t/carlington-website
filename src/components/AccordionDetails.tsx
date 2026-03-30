"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  content: string;
};

const items: AccordionItem[] = [
  {
    title: "DURABILITY (Rugged Tech)",
    content: "Engineered with shock-resistant construction designed for extremely active lifestyles. The premium case protects the precision quartz movement from impact drops and intense vibrations.",
  },
  {
    title: "LIGHTWEIGHT DESIGN",
    content: "Weighing in at only 63 grams, the CT 9999 ensures maximum wrist comfort without compromising on structural integrity. You won't even realize you're wearing it until you need it.",
  },
  {
    title: "WATER RESISTANCE",
    content: "Clear depth rating of 10 Meters. The watch is fully splash-proof, accommodating to rain, sweat, and quick submersion so you can focus on the trail, not your gear.",
  },
  {
    title: "PERFECT GIFT IDEA",
    content: "Arrives in beautifully crafted matte black packaging. The ideal high-end gift for the modern gentleman on Father's Day, anniversaries, or special milestones.",
  },
];

export default function AccordionDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="border border-[#222] rounded-3xl bg-[#080808] overflow-hidden"
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-[#1a1a1a] last:border-b-0">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-8 md:p-10 text-left transition-colors hover:bg-[#111]"
            >
              <h3 className="font-bold tracking-widest text-lg md:text-xl text-[#eee] uppercase">{item.title}</h3>
              <div className="bg-[#111] p-2 rounded-full border border-[#222]">
                <ChevronDown 
                  className={`h-5 w-5 text-primary-green transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} 
                />
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="p-8 md:p-10 pt-0 text-[#888] text-base md:text-lg leading-relaxed font-light">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
