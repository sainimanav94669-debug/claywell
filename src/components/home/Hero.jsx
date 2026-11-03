import React from 'react'
import Info from "../common/Info";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";

const Hero = () => {
    return (
        <section className='lg:px-20 sm:px-10 px-4 '>
            <div className='flex max-[992px]:flex-col items-center justify-between my-8 sm:my-10 gap-10 sm:gap-16'>
                <div className='max-w-150'>
                    <Info>HANDCRAFTED CERAMICS</Info>
                    <Heading className='my-6'>Set a table worth gathering around</Heading>
                    <Paragraph>Stoneware, porcelain and glazed ceramics made to be used every day and loved for years. Free shipping on orders above ₹1,999.</Paragraph>
                    <div className='flex   items-center gap-4 my-6'>
                        <Button className=" group relative max-w-44.25 overflow-hidden border-0 bg-orange-100! text-white transition-all duration-300 ease-out   hover:shadow-[0_8px_25px_rgba(194,96,58,0.35)] active:scale-95 before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:skew-x-[-20deg] before:transition-transform before:duration-700 hover:before:translate-x-full " >
                            <span className="relative z-10">Shop Collection</span>
                        </Button>
                        <Button className=" group relative isolate overflow-hidden border border-dark-warm-charcoal  bg-white text-dark-warm-charcoal transition-all duration-300 ease-out    hover:shadow-[0_8px_20px_rgba(43,38,34,0.18)]  hover:text-white active:scale-95 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:rounded-full before:bg-dark-warm-charcoal before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.22,1,0.36,1)] hover:before:scale-x-100">
                            <span className="relative z-10 transition-colors duration-300">  View Offers </span>
                        </Button>
                    </div>
                    <div className='flex items-center justify-between  max-w-92 gap-4'> 
                         <div>
                            <h2 className=' text-2xl sm:text-32 font-bold text-dark-warm-charcoal leading-119'>12k+</h2>
                        <p className='text-warm-gray-200 mt-0.5 text-sm font-normal leading-115'>Happy homes</p>
                         </div>
                         <div>
                            <h2 className='text-2xl sm:text-32 font-bold text-dark-warm-charcoal leading-119'>350+</h2>
                        <p className='text-warm-gray-200 mt-0.5 text-sm font-normal leading-115'>Unique designs</p>
                         </div>
                         <div>
                            <h2 className='text-2xl sm:text-32 font-bold text-dark-warm-charcoal leading-119'>4.9</h2>
                        <p className='text-warm-gray-200 mt-0.5 text-sm font-normal leading-115'>Average rating</p>
                         </div>
                        
                    </div>

                </div>
                <div>
                    <img width="616" height="560" src="/images/webp/img-hero.webp" alt="hero-img" className='xl:min-w-154 sm:min-w-auto max-h-75 sm:max-h-full   min-w-100 ' />
                </div>
            </div>
        </section>
    )


}

export default Hero
