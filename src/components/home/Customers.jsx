
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
    <section className="w-full bg-[#FAF6F1] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-12 sm:py-16 lg:py-20">

        {/* Section Heading */}
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[2px] text-[#C65D35]">
            Loved by customers
          </p>

          <h2 className="text-balance text-2xl font-semibold leading-tight text-[#302C29] sm:text-3xl lg:text-4xl">
            What our customers say
          </h2>
        </div>

        {/* Customer Reviews */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {CUSTOMER_DATA.map((customer) => (
            <article
              key={customer.name}
              className="group flex h-full flex-col rounded-xl border border-[#EEE5DC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C65D35]/40 hover:shadow-lg sm:p-6"
            >
              {/* Star Rating */}
              <div
                className="mb-3 flex gap-0.5 text-[#D68A25]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="mb-4 flex-grow text-xs leading-5 text-[#554B44] sm:text-sm sm:leading-6">
                {customer.message}
              </p>

              {/* Customer Info */}
              <div className="mt-auto flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#C65D35] text-sm font-medium text-white transition-transform duration-300 group-hover:scale-110">
                  {customer.tag}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xs font-medium text-[#302C29] sm:text-sm">
                    {customer.name}
                  </h3>

                  <p className="text-[10px] text-[#8A7D72] sm:text-xs">
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
