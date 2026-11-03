
import Heading from "../common/Heading";
import Info from "../common/Info";
import React from "react";

const CUSTOMER_DATA = [
  {
    message:
      "The dinner set feels premium and arrived perfectly packed. Guests keep asking where it is from.",
    name: "Ananya Sharma",
    location: "Delhi",
    tag: "A",
  },
  {
    message:
      "Gorgeous glaze and sturdy build. The mug set is now my favourite part of every morning.",
    name: "Rohit Verma",
    location: "Chandigarh",
    tag: "R",
  },
  {
    message:
      "Ordered the tea set as a gift. Beautiful finish and the cart and checkout were effortless.",
    name: "Meera Nair",
    location: "Bengaluru",
    tag: "M",
  },
];

const Customers = () => {
  return (
    <section className="w-full bg-[#FAF6F1] px-4 sm:px-10 lg:px-20.25 py-15 sm:py-20 lg:py-24">
      <div className="mx-auto  ">

        {/* Section Heading */}
        <div className="sm:mb-10 text-center mb-8 lg:mb-14">
          <Info className="mb-2 text-[10px] font-medium uppercase tracking-[2px] text-[#C65D35]">
            Loved by customers
          </Info>

          <Heading className="text-2xl! sm:text-4xl! lg:text-[44px]! leading-[119%]">
            What our customers say
          </Heading>
        </div>

        {/* Customer Reviews */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {CUSTOMER_DATA.map((customer) => (
            <article
              key={customer.name}
              className="group flex h-full flex-col rounded-[20px] border border-[#EFE6DA] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C65D35]/40 hover:shadow-lg sm:py-8 sm:pr-7.5 sm:pl-8"
            >
              {/* Star Rating */}
              <div
                className="mb-5 "
               >
                <svg width="106" height="18" viewBox="0 0 106 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_5_52)">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#E0A030" />
                    <path d="M31 0L33.0206 6.21885H39.5595L34.2694 10.0623L36.2901 16.2812L31 12.4377L25.7099 16.2812L27.7306 10.0623L22.4405 6.21885H28.9794L31 0Z" fill="#E0A030" />
                    <path d="M53 0L55.0206 6.21885H61.5595L56.2694 10.0623L58.2901 16.2812L53 12.4377L47.7099 16.2812L49.7306 10.0623L44.4405 6.21885H50.9794L53 0Z" fill="#E0A030" />
                    <path d="M75 0L77.0206 6.21885H83.5595L78.2694 10.0623L80.2901 16.2812L75 12.4377L69.7099 16.2812L71.7306 10.0623L66.4405 6.21885H72.9794L75 0Z" fill="#E0A030" />
                    <path d="M97 0L99.0206 6.21885H105.56L100.269 10.0623L102.29 16.2812L97 12.4377L91.7099 16.2812L93.7306 10.0623L88.4405 6.21885H94.9794L97 0Z" fill="#E0A030" />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_52">
                      <rect width="106" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </div>

             
              <p className="mb-5 grow text-sm leading-5 text-[#554B44] sm:text-base sm:leading-[163%] font-normal">
                {customer.message}
              </p>

               
              <div className="mt-auto flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#C2603A] text-sm font-medium text-white transition-transform duration-300 group-hover:scale-110">
                  {customer.tag}
                </div>

                <div className="min-w-0">
                  <h3 className="text-[15px] font-medium leading-[120%] text-[#302C29] ">
                    {customer.name}
                  </h3>

                  <p className=" text-[#7A6F65] mt-0.5 font-normal leading-[116%] sm:text-[13px]">
                    {customer.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Customers;
