export default function ProductInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-primary-green font-semibold tracking-widest text-sm uppercase">
          Carlington
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
          Legacy Series CT 9999
        </h1>
        <p className="text-[#888] text-lg mt-1">
          Analog Chronograph | Silicone Strap
        </p>
      </div>

      <div className="flex items-baseline gap-4 mt-2">
        <span className="text-4xl font-bold text-white">$149.00</span>
        <span className="text-[#666] line-through text-lg">$299.00</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-4">
          <label className="text-sm font-semibold text-[#aaa] uppercase tracking-wider">
            Quantity
          </label>
          <div className="flex items-center border border-[#333] rounded-md overflow-hidden bg-[#0a0a0a]">
            <button className="px-4 py-2 text-[#aaa] hover:text-white hover:bg-[#222] transition-colors">-</button>
            <div className="px-4 py-2 text-white font-medium border-x border-[#333] min-w-[3rem] text-center">1</div>
            <button className="px-4 py-2 text-[#aaa] hover:text-white hover:bg-[#222] transition-colors">+</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="flex-1 bg-primary-green text-black font-bold uppercase tracking-wider py-4 px-8 rounded-md hover:bg-primary-green-hover transition-colors shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:shadow-[0_0_30px_rgba(0,255,102,0.4)]">
            Add to Cart
          </button>
          <button className="flex-1 border-2 border-primary-green text-primary-green font-bold uppercase tracking-wider py-4 px-8 rounded-md hover:bg-primary-green/10 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
