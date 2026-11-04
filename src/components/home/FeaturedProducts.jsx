import React from "react";
import Info from "../common/Info";
import Heading from "../common/Heading";
import { useCart } from "../../context/CartContext";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});


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
  const { addItem } = useCart();

  return (
    <section className="w-full pb-15 sm:pb-20 lg:pb-24 px-4 sm:px-10 lg:px-20 max-w-360 mx-auto">
      <div className="mx-auto">

        <div className="mb-12 flex items-end   justify-between gap-4">
          <div>
            <Info className="mb-2 text-10 font-semibold uppercase tracking-[2px] text-orange-100">
              Bestsellers
            </Info>

            <Heading className="text-2xl! sm:text-4xl! lg:text-44! leading-119">
              Featured products
            </Heading>
          </div>

          <a
            href="#products"
            className="text-15 leading-120 font-medium text-orange-100 cursor-pointer hover:text-dark-warm-charcoal transition-all duration-300"
          >
            Shop all →
          </a>
        </div>

        <div
          id="products"
          className="grid max-[680px]:grid-cols-1 gap-5 sm:gap-6 max-[1026px]:grid-cols-2 grid-cols-4"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-[20px]
              ] border border-light-cream bg-white pt-4 pl-4 pr-3.5 pb-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative  rounded-[20px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-auto max-h-75 sm:max-h-auto w-full xl:max-w-67.5 object-cover rounded-[14px] transition-transform duration-500   sm:h-67.5"
                />

                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-orange-100 px-3 py-1.75 text-[12px] leading-3.5 font-medium text-white">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="pt-3.5">
                <h3 className="text-xl font-medium leading-115 text-dark-warm-charcoal">
                  {product.name}
                </h3>

                <p className="mt-1 text-13 font-normal leading-116 text-warm-gray-200">
                  {product.description}
                </p>

                <div className="mt-3.5 flex items-center justify-between gap-2 mr-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xl leading-115 font-bold text-dark-warm-charcoal">
                      {inr.format(product.price)}
                    </span>

                    {product.oldPrice > 0 && (
                      <span className="text-sm leading-115 text-mid-gray-300 line-through">
                        {inr.format(product.oldPrice)}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => addItem(product)}
                    aria-label={`Add ${product.name} to cart`}
                    className="rounded-full bg-dark-warm-charcoal px-5 leading-4 py-3.5 text-sm font-medium text-white transition-all duration-300 cursor-pointer hover:bg-orange-100 active:scale-95 group relative max-w-44.25 overflow-hidden border-0 ease-out     hover:shadow-[0_8px_25px_rgba(194,96,58,0.35)]   before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:skew-x-[-20deg] before:transition-transform before:duration-700 hover:before:translate-x-full "
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
