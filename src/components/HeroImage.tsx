import { Droplets, Shield } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative w-full rounded-2xl bg-[#0a0a0a] border border-[#222] p-8 overflow-hidden group">
      {/* Background Tech Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,102,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.01)_50%,transparent_75%)] pointer-events-none bg-[length:200%_200%] animate-gradient pointer-events-none" />
      
      {/* Main Image */}
      <div className="relative flex items-center justify-center h-[500px]">
        {/* We'll use a placeholder div that looks like a watch for now until we have real assets, or an image tag */}
        <div className="w-64 h-64 rounded-full border-4 border-[#111] bg-[#050505] shadow-[0_0_50px_rgba(0,255,102,0.1)] flex items-center justify-center relative">
          <div className="absolute inset-2 rounded-full border border-[#222] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary-green" />
          </div>
          <span className="text-[#333] font-bold tracking-widest uppercase">CT 9999</span>
        </div>
      </div>

      {/* Feature Badges */}
      <div className="absolute top-6 right-6 flex flex-col gap-3">
        <div className="flex items-center gap-2 bg-[#111]/80 backdrop-blur-md border border-[#333] px-3 py-1.5 rounded-full text-xs font-semibold text-[#ccc] group-hover:border-primary-green/50 transition-colors">
          <Droplets className="h-3.5 w-3.5 text-primary-green" />
          Water Resistant
        </div>
        <div className="flex items-center gap-2 bg-[#111]/80 backdrop-blur-md border border-[#333] px-3 py-1.5 rounded-full text-xs font-semibold text-[#ccc] group-hover:border-primary-green/50 transition-colors">
          <Shield className="h-3.5 w-3.5 text-primary-green" />
          Shock Resistant
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 justify-center mt-8">
        {[1, 2, 3, 4].map((i) => (
          <button
            key={i}
            className={`w-16 h-16 rounded-md border-2 bg-[#111] ${
              i === 1 ? "border-primary-green" : "border-[#333] hover:border-[#666]"
            } transition-colors flex items-center justify-center`}
          >
            <span className="text-[10px] text-[#444]">View {i}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
