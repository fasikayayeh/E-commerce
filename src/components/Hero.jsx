import React from 'react'
import hero_1 from "../assets/hero__1.webp";
import hero_2 from "../assets/hero__2.webp";
import hero_3 from "../assets/hero__3.webp";
import { BsArrowRight } from 'react-icons/bs';
const Hero = () => {
  return (

<div className="container pt-8">
  <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 gap-8">

    {/* LEFT BIG IMAGE */}
    <div className="relative xl:col-span-2 xl:row-span-2">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={hero_1}
        alt="hero"
      />
      <div className='absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4'>
             <p className='text-2xl hidden sm:block'>100% Orginal Dry Fruits</p>
            <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'> Dried Fruits Best Quality</h2>
             <p className='text-grey-500 text-x1 pt-4 sm:pt-8'>Starting At</p>
             <div className='font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4 '>
               $18.36</div>
             <div className='bg-accent-dark flex hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer'>
               Shop Now <BsArrowRight/>

             </div>
            </div>
       

    </div>

    {/* RIGHT TOP */}
    <div className="relative">
      <img
        src={hero_2}
        className="w-full h-full object-cover rounded-lg"
        alt="hero-2"
      />
      <div className='absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2'>
             <h2 className='text-2xl sm:text-3xl  font-bold'> Best Yummy Pizza</h2>
            <p className='text-grey-500 text-x1 pt-4 sm:pt-8'>Starting At</p>
            <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-8'>
               $25</div>
             <div 
            className='bg-accent flex hover:bg-accentDark text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 cursor-pointer'>
               Shop Now <BsArrowRight/>

             </div>
           </div>
    </div>

    {/* RIGHT BOTTOM */}
    <div className="relative">
      <img
        src={hero_3}
        className="w-full h-full object-cover rounded-lg"
        alt="hero-3"
      />
       <div className='absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2'>
             <h2 className='text-2xl sm:text-3xl  font-bold'> Best Yummy chips</h2>
            <p className='text-grey-500 text-x1 pt-4 sm:pt-8'>Starting At</p>
            <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-8'>
               $10
               </div>
             <div 
             className='bg-accent flex hover:bg-accentDark text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 cursor-pointer'>
               Shop Now <BsArrowRight/>

             </div>
            </div>
    </div>

  </div>
</div>

  )
}

export default Hero