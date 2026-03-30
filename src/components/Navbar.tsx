import { Search, Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#333] bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Minimalist Brand Logo */}
          <span className="text-xl font-bold tracking-widest text-[#f0f0f0] uppercase">
            CARLINGTON
          </span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-[#a0a0a0]">
          <button className="hover:text-primary-green transition-colors p-1">
            <Search className="h-5 w-5" />
          </button>
          <button className="hover:text-primary-green transition-colors p-1">
            <Heart className="h-5 w-5" />
          </button>
          <button className="hover:text-primary-green transition-colors p-1 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-green text-[10px] font-bold text-black font-sans">
              1
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
