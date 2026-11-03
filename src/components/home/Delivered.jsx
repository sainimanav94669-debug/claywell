
import React from "react";
import Info from "../common/Info"; 
import Heading from "../common/Heading";


const DELIVERED_DATA = [
  {
    icon: "shield",
    heading: "Food-safe glazes",
    description:
      "Lead-free, dishwasher and microwave safe on every piece.",
  },
  {
    icon: "award",
    heading: "Handmade quality",
    description:
      "Each item is shaped and fired by skilled artisans.",
  },
  {
    icon: "package",
    heading: "Safe packaging",
    description:
      "Double-boxed with a breakage replacement guarantee.",
  },
  {
    icon: "return",
    heading: "Easy returns",
    description:
      "Simple 7-day returns if it is not what you expected.",
  },
];

const FeatureIcon = ({ type }) => {
  const commonProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "text-white",
  };

  return (
    <svg {...commonProps}>
      {type === "shield" && (
        <>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}

      {type === "award" && (
        <>
          <circle cx="12" cy="8" r="6" />
          <path d="m8.2 13.2-1.5 8 5.3-3 5.3 3-1.5-8" />
        </>
      )}

      {type === "package" && (
        <>
          <path d="m12 3 9 5-9 5-9-5 9-5z" />
          <path d="M3 8v8l9 5 9-5V8" />
          <path d="M12 13v8" />
        </>
      )}

      {type === "return" && (
        <>
          <path d="M3 12a9 9 0 1 0 2.6-6.4L3 8" />
          <path d="M3 3v5h5" />
        </>
      )}
    </svg>
  );
};

const Delivered = () => {
  return (
    <section className="w-full bg-[#F2E8DC] px-4 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl py-15 sm:py-20 lg:py-24">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10 lg:mb-14">
          <Info className="mb-2">
            Why ClayWell
          </Info>

          <Heading className="text-2xl! sm:text-4xl! lg:text-44! leading-119">
            Made well, delivered with care
          </Heading>
        </div>

        
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-6">
          {DELIVERED_DATA.map((item) => (
            <div
              key={item.heading}
              className="group flex min-w-0 flex-col items-start"
            >
              
              <div className="mb-3.5 flex size-10 items-center justify-center rounded-full bg-orange-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-lg sm:size-16">
                <FeatureIcon type={item.icon} />
              </div>

               
              <h3 className="mb-3.5 text-sm font-medium text-dark-warm-charcoal leading-119 sm:text-22">
                {item.heading}
              </h3>

               
              <p className="max-w-xs text-sm leading-5 text-dark-brown-900 sm:text-sm sm:leading-172">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivered;