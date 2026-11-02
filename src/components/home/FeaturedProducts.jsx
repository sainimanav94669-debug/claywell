

import React from "react";
import Info from "../common/Info";
import Heading from "../common/Heading";

const products = [
  {
    id: 1,
    name: "Stoneware Dinner Set",
    description: "16 pieces · Matte sand",
    price: "₹4,999",
    oldPrice: "₹6,499",
    badge: "Bestseller",
    image: "public/images/webp/stone-dinner-set.webp",
  },
  {
    id: 2,
    name: "Ceramic Mug Set",
    description: "Set of 4 · 320 ml",
    price: "₹1,299",
    oldPrice: "₹1,599",
    badge: "New",
    image: "public/images/webp/mug.webp",
  },
  {
    id: 3,
    name: "Glazed Serving Bowl",
    description: "Large · Ocean blue",
    price: "₹1,799",
    oldPrice: "",
    badge: "",
    image: "public/images/webp/bowl.webp",
  },
  {
    id: 4,
    name: "Porcelain Tea Set",
    description: "7 pieces · White gold rim",
    price: "₹3,499",
    oldPrice: "₹4,399",
    badge: "-20%",
    image: "public/images/webp/tea.webp",
  },
];

const FeaturedProducts = ({ onAdd }) => {
  return (
    <section className="w-full   px-4 py-10 sm:px-10 lg:px-20">

      <div className="mx-auto  ">

        {/* Heading */}
        <div className="mb-12 flex items-end justify-between gap-4">

          <div>
            <Info className="mb-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#c65b32]">
              Bestsellers
            </Info>

            <Heading className="text-2xl! sm:text-4xl! lg:text-[44px]! leading-[119%] ">
              Featured products
            </Heading>
          </div>

          <a
            href="#products"
            className="text-[15px] leading-[120%] font-medium text-[#C2603A] cursor-pointer hover:text-[#2B2622] transition-all duration-300"
          >
            Shop all →
          </a>

        </div>

        {/* Product Cards */}
        <div
          id="products"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >

          {products.map((product) => (

            <div
              key={product.id}
              className="group rounded-2xl border border-[#eee5dc] bg-white pt-4 pl-4 pr-3.5 pb-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-[20px]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-auto w-full object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-105 sm:h-67.5"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#C2603A] px-3 py-1.75 text-[12px] leading-3.5 font-medium text-white">
                    {product.badge}
                  </span>
                )}

              </div>

              {/* Product Information */}
              <div className="pt-3">

                <h3 className="text-xl font-medium leading-5.75 text-[#2B2622]">
                  {product.name}
                </h3>

                <p className="mt-1 text-[13px] font-normal leading-3.75 text-[#7A6F65]">
                  {product.description}
                </p>

                {/* Price and Add Button */}
                <div className="mt-3 flex items-center justify-between gap-2 mr-0.5">

                  <div className="flex flex-wrap items-center gap-2">

                    <span className="text-xl leading-5.75 font-bold text-[#2B2622]">
                      {product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="text-sm  leading-4 text-[#a69b91] line-through">
                        {product.oldPrice}
                      </span>
                    )}

                  </div>

                  <button
                    onClick={() => onAdd?.(product)}
                    className="rounded-full bg-[#2B2622] px-5 leading-4 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#c65e38] active:scale-95"
                  >
                    + Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;