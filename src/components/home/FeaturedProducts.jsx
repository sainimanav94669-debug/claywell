import React from "react";
import Info from "../common/Info";
import Heading from "../common/Heading";
import { useCart } from "../../context/CartContext";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

// price / oldPrice are numbers so the cart can add them up.
// category "dinner-sets" makes a product eligible for the CLAY30 code.
const products = [
  {
    id: 1,
    name: "Stoneware Dinner Set",
    description: "16 pieces · Matte sand",
    price: 4999,
    oldPrice: 6499,
    badge: "Bestseller",
    category: "dinner-sets",
    image: "/images/webp/stone-dinner-set.webp",
  },
  {
    id: 2,
    name: "Ceramic Mug Set",
    description: "Set of 4 · 320 ml",
    price: 1299,
    oldPrice: 1599,
    badge: "New",
    category: "mugs",
    image: "/images/webp/mug.webp",
  },
  {
    id: 3,
    name: "Glazed Serving Bowl",
    description: "Large · Ocean blue",
    price: 1799,
    oldPrice: 0,
    badge: "",
    category: "bowls",
    image: "/images/webp/bowl.webp",
  },
  {
    id: 4,
    name: "Porcelain Tea Set",
    description: "7 pieces · White gold rim",
    price: 3499,
    oldPrice: 4399,
    badge: "-20%",
    category: "tea-sets",
    image: "/images/webp/tea.webp",
  },
];

const FeaturedProducts = () => {
  const { addItem } = useCart(); // adds to cart and opens the cart popup

  return (
    <section className="w-full pb-15 sm:pb-20 lg:pb-24 sm:px-10 lg:px-20">
      <div className="mx-auto">
        {/* Heading */}
        <div className="mb-12 flex items-end px-4 justify-between gap-4">
          <div>
            <Info className="mb-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#c65b32]">
              Bestsellers
            </Info>

            <Heading className="text-2xl! sm:text-4xl! lg:text-[44px]! leading-[119%]">
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
          className="grid max-[680px]:grid-cols-1 gap-5 max-[1026px]:grid-cols-2 grid-cols-4"
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
                      {inr.format(product.price)}
                    </span>

                    {product.oldPrice > 0 && (
                      <span className="text-sm leading-4 text-[#a69b91] line-through">
                        {inr.format(product.oldPrice)}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => addItem(product)}
                    aria-label={`Add ${product.name} to cart`}
                    className="rounded-full bg-[#2B2622] px-5 leading-4 py-3.5 text-sm font-medium text-white transition-all duration-300 cursor-pointer hover:bg-[#c65e38] active:scale-95 group relative max-w-44.25 overflow-hidden border-0 ease-out   hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(194,96,58,0.35)]   before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:skew-x-[-20deg] before:transition-transform before:duration-700 hover:before:translate-x-full "
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
