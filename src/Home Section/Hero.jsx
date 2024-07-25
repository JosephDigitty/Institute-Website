import React from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='pt-3 pb-4 '>
       <div className="relative w-full md:h-screen h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-custom sm:bg-top object-cover lg:bg-cover bg-center"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black md:opacity-9S opacity-85 font-firma"></div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-[28px] md:text-6xl font-bold leading-[35px] text-gradient-N font-Opensans">The premier <br className='md:hidden' />Institution for <br /> public diplomacy <br className='md:hidden' />practitioners</h1>
          <p className='text-sm md:text-xl pt-5 px-9 font-Opensans '>
            Building a world of competent multi-faceted public diplomatic leaders & managers
          </p>
          <div className='pt-24'>
          <Link className="mt-8 px-6 py-4 font-firma bg-slate-600 text-white font-bold rounded" to="/whoweare"> Learn More...</Link>
          </div>
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero