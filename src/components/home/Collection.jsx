import React from 'react'

import Info from "../common/Info";
import Heading from "../common/Heading";

const Collection = () => {
  return (
    <section className='px-4 sm:px-10 lg:px-20 my-15 sm:my-20 lg:my-24 max-w-360 mx-auto'>
      <Info>COLLECTIONS</Info>
      <div className='flex items-end justify-between mt-2 mb-12 '>
        <Heading className='text-2xl! sm:text-4xl! lg:text-44! leading-119 '>Shop by category</Heading>
        <button className='text-15 leading-120 font-medium text-orange-100 cursor-pointer hover:text-dark-warm-charcoal transition-all duration-300'>View all →</button>
      </div>

      <div className="grid max-[680px]:grid-cols-1 gap-5 sm:gap-6 max-[1026px]:grid-cols-2 grid-cols-4">
        <div>
          <img
            className="h-auto w-full max-h-75 sm:max-h-full rounded-[20px]  object-cover"
            src="/images/webp/img-cat-dinner-sets.webp"
            alt="Dinner Sets"
          />
          <h3 className="my-4 text-22 font-medium leading-119 text-dark-warm-charcoal">
            Dinner Sets
          </h3>
          <p className="text-sm font-normal leading-115 text-warm-gray-200">
            24 products
          </p>
        </div>

        <div>
          <img
            className="h-auto max-h-75  sm:max-h-full rounded-[20px] w-full object-cover"
            src="/images/webp/img-cat-mugs (1).webp"
            alt="Mugs & Cups"
          />
          <h3 className="my-4 text-22 font-medium leading-119 text-dark-warm-charcoal">
            Mugs & Cups
          </h3>
          <p className="text-sm font-normal leading-115 text-warm-gray-200">
            38 products
          </p>
        </div>

        <div>
          <img
            className="h-auto w-full sm:max-h-full max-h-75 sm:max-h-auto rounded-[20px]  object-cover"
            src="/images/webp/img-cat-bowls (1).webp"
            alt="Serving Bowls"
          />
          <h3 className="my-4 text-22 font-medium leading-119 text-dark-warm-charcoal">
            Serving Bowls
          </h3>
          <p className="text-sm font-normal leading-115 text-warm-gray-200">
            19 products
          </p>
        </div>

        <div>
          <img
            className="h-auto w-full sm:max-h-full max-h-75 sm:max-h-auto rounded-[20px] object-cover"
            src="/images/webp/img-cat-tea-sets.webp"
            alt="Tea Sets"
          />
          <h3 className="my-4 text-22 font-medium leading-119 text-dark-warm-charcoal">
            Tea Sets
          </h3>
          <p className="text-sm font-normal leading-115 text-warm-gray-200">
            16 products
          </p>
        </div>
      </div>
    </section>
  )
}

export default Collection
