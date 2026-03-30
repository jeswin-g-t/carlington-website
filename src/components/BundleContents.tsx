"use client";

import { motion } from "framer-motion";
import { Package, Watch, Wrench, Shield, FileText } from "lucide-react";

export default function BundleContents() {
  const items = [
    { name: "Carlington CT 9999 Watch", icon: <Watch className="h-6 w-6" /> },
    { name: "Silicone Strap", icon: <Package className="h-6 w-6" /> },
    { name: "Strap Tool", icon: <Wrench className="h-6 w-6" /> },
    { name: "Warranty Card", icon: <Shield className="h-6 w-6" /> },
    { name: "Manual", icon: <FileText className="h-6 w-6" /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="p-10 md:p-16 border border-[#222] bg-[#0a0a0a] rounded-3xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,255,102,0.03)_0%,transparent_70%)] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-12">
        In the Box
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
        {items.map((item, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx} 
            className="flex flex-col items-center gap-4 text-center group"
          >
            <div className="bg-[#111] p-6 rounded-full text-primary-green border border-[#222] group-hover:border-primary-green group-hover:scale-110 transition-all duration-300 shadow-[0_0_0_rgba(0,255,102,0)] group-hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]">
              {item.icon}
            </div>
            <span className="font-semibold text-sm text-[#888] group-hover:text-[#ccc] transition-colors">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
