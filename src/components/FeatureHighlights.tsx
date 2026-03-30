"use client";

import { motion, Variants } from "framer-motion";
import { Watch, Palette, Layers, ShieldCheck } from "lucide-react";

export default function FeatureHighlights() {
  const features = [
    {
      icon: <Watch className="h-12 w-12 text-primary-green mb-6" />,
      label: "DIAMETER",
      value: "40mm",
      description: "Perfectly balanced proportion for both active and formal wear."
    },
    {
      icon: <Palette className="h-12 w-12 text-primary-green mb-6" />,
      label: "BAND COLOUR",
      value: "Green",
      description: "A striking electric green accent that demands attention."
    },
    {
      icon: <Layers className="h-12 w-12 text-primary-green mb-6" />,
      label: "MATERIAL",
      value: "Rubber",
      description: "Premium sweat-resistant silicone for all-day absolute comfort."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary-green mb-6" />,
      label: "WARRANTY",
      value: "1 Year",
      description: "Comprehensive manufacturer coverage for complete peace of mind."
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnim: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };


  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {features.map((feature, idx) => (
        <motion.div 
          variants={itemAnim}
          key={idx}
          className="bg-[#080808] border border-[#1a1a1a] rounded-3xl p-10 flex flex-col items-start transition-all hover:bg-[#111] hover:border-[#333]"
        >
          {feature.icon}
          <span className="text-3xl font-bold text-white mb-2">{feature.value}</span>
          <span className="text-xs font-bold tracking-widest text-[#555] uppercase mb-4">{feature.label}</span>
          <p className="text-[#888] leading-relaxed text-sm">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
