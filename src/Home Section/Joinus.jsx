import React from 'react'
import Banner from '../assets/images/Banner.jpg'
import Bannerr from '../assets/images/Bannerr.jpg'
export const Joinus = () => {
  return (
    <>
    <div className='flex flex-col gap-5 '>
        <p className='text-center font-ptserif text-slate-500  text-2xl  font-bold text-wrap'>Join the distinguished ranks of Public Diplomacy certified professionals</p>
        <div className='flex flex-col justify-around lg:flex-row gap-6'>
        <img src={ Bannerr }alt="" width={800} height={900}  className='px-35 rounded-md rotate-x-90 md:h-screen ' />
        </div>
    </div>
    </>
  )
}
