import React from 'react'

import Info from "../common/Info";
import Heading from "../common/Heading";

const Collection = () => {
  return (
    <section className='px-4 sm:px-10 lg:px-20 my-15 sm:my-20 lg:my-24'>
      <Info>COLLECTIONS</Info>
      <div className='flex items-end justify-between mt-2 mb-12 '>
        <Heading className='text-2xl! sm:text-4xl! lg:text-[44px]! leading-[119%] '>Shop by category</Heading>
        <button className='text-[15px] leading-[120%] font-medium text-[#C2603A] cursor-pointer hover:text-[#2B2622] transition-all duration-300'>View all →</button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            className="h-auto w-full object-cover"
            src="/images/webp/img-cat-dinner-sets.webp"
            alt="Dinner Sets"
          />
          <h3 className="my-4 text-[22px] font-medium leading-[119%] text-[#2B2622]">
            Dinner Sets
          </h3>
          <p className="text-sm font-normal leading-[115%] text-[#7A6F65]">
            24 products
          </p>
        </div>

        <div>
          <img
            className="h-auto w-full object-cover"
            src="/images/webp/img-cat-mugs (1).webp"
            alt="Mugs & Cups"
          />
          <h3 className="my-4 text-[22px] font-medium leading-[119%] text-[#2B2622]">
            Mugs & Cups
          </h3>
          <p className="text-sm font-normal leading-[115%] text-[#7A6F65]">
            38 products
          </p>
        </div>

        <div>
          <img
            className="h-auto w-full object-cover"
            src="/images/webp/img-cat-bowls (1).webp"
            alt="Serving Bowls"
          />
          <h3 className="my-4 text-[22px] font-medium leading-[119%] text-[#2B2622]">
            Serving Bowls
          </h3>
          <p className="text-sm font-normal leading-[115%] text-[#7A6F65]">
            19 products
          </p>
        </div>

        <div>
          <img
            className="h-auto w-full object-cover"
            src="/images/webp/img-cat-tea-sets.webp"
            alt="Tea Sets"
          />
          <h3 className="my-4 text-[22px] font-medium leading-[119%] text-[#2B2622]">
            Tea Sets
          </h3>
          <p className="text-sm font-normal leading-[115%] text-[#7A6F65]">
            16 products
          </p>
        </div>
      </div>
    </section>
  )
}

export default Collection
