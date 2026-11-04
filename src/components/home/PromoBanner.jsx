import Heading from "../common/Heading";
import Info from "../common/Info";
import Button from "../common/Button";


export default function PromoBanner() {
  return (
    <section className="px-4 sm:px-10 lg:px-20">
      <div
        aria-label="Festive sale"
        className=" grid w-full  max-w-7xl mx-auto   grid-cols-1 overflow-hidden rounded-4xl bg-dark-warm-charcoal font-sans text-white md:min-h-84 mb-15 sm:mb-20 lg:mb-24 md:grid-cols-2"
      >
        <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 px-10 sm:px-16 py-4 md:py-5.5 ">
          <Info className="text-11 uppercase tracking-[0.2em] text-orange-300">
            Festive sale
          </Info>

          <Heading className=" text-2xl! max-w-120 sm:text-4xl! lg:text-52! leading-115 text-soft-cream!">
            Up to 30% off dinner sets
          </Heading>

          <p className="max-w-127.75 font-normal text-sm sm:text-17 leading-[165%] text-warm-gray-100">
            Refresh your table for the season. Use the code at checkout, valid
            till 15 November.
          </p>

          <span className="rounded-[10px] max-w-28 leading-110 border-[1.5px] border-dashed border-orange-100 px-4 sm:px-5 py-3 sm:py-3.75 text-13 sm:text-15 font-bold tracking-[0.2em] text-orange-300">
            CLAY30
          </span>

          <Button
            href="/collections/dinner-sets"
            className="rounded-full cursor-pointer  px-7.25 sm:px-8.25 py-3.5 sm:py-4.5 text-sm sm:text-base leading-126 font-medium group relative max-w-44.25 overflow-hidden border-0 bg-orange-100! text-white transition-all duration-300 ease-out     hover:shadow-[0_8px_25px_rgba(194,96,58,0.35)] active:scale-95 before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:skew-x-[-20deg] before:transition-transform before:duration-700 hover:before:translate-x-full"
          >
            Grab the offer
          </Button>
        </div>

        <div className="relative order-first h-52 md:order-0 md:h-auto">
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
