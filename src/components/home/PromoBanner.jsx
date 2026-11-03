import Heading from "../common/Heading";
import Info from "../common/Info";

export default function PromoBanner() {
  return (
    <section className="px-4 sm:px-10 lg:px-20">
         <div
      aria-label="Festive sale"
      className=" grid w-full  max-w-320 mx-auto   grid-cols-1 overflow-hidden rounded-[28px] bg-[#2a2321] font-sans text-white md:min-h-[336px] mb-15 sm:mb-20 lg:mb-24 md:grid-cols-2"
    >
      {/* Text side */}
      <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 px-10 sm:px-16 py-4 md:py-5.5 ">
        <Info className="text-[11px] uppercase tracking-[0.2em] text-[#e39a73]">
          Festive sale
        </Info>

        <Heading className=" text-2xl! max-w-120 sm:text-4xl! lg:text-[44px]! leading-[137%] text-[#FAF6F0]!">
          Up to 30% off dinner sets
        </Heading>

        <p className="max-w-127.75 font-normal text-[17px] leading-[165%] text-[#CFC4B8]">
          Refresh your table for the season. Use the code at checkout, valid
          till 15 November.
        </p>

        <span className="rounded-[10px] leading-[110%] border-[1.5px] border-dashed border-[#C2603A] px-6 py-3.75 text-[15px] font-semibold tracking-[0.2em] text-[#F0A987]">
          CLAY30
        </span>

        <button 
          href="/collections/dinner-sets"
          className="rounded-full cursor-pointer   px-8.25  py-4.5 text-base leading-[126%] font-medium group relative max-w-44.25 overflow-hidden border-0 bg-[#C2603A]! text-white transition-all duration-300 ease-out   hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(194,96,58,0.35)] active:scale-95 before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:skew-x-[-20deg] before:transition-transform before:duration-700 hover:before:translate-x-full"
        >
          Grab the offer
        </button>
      </div>

      {/* Photo side (file lives in /public/dinner-table.jpg) */}
      <div className="relative order-first h-52 md:order-none md:h-auto">
        <img
          src="/images/webp/img-offer (1).webp"
          alt="A festive dinner table set with candles, plates and autumn foliage"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
    </section>
  );
}
