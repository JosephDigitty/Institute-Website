import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer2 = () => {
  return (
    <>
    <div className='lg:h-[300px] container'>
        <div className='grid grid-rows-1 md:grid-cols-4 gap-7'>
            <div className=''>
                <p className='font-sans md:text-2xl text-[20px] text-white font-bold'>
                With the Public Diplomacy Management Institute, gain respect and recognition in the field of public diplomacy
                </p>
            </div>
            <div className=''>
                <h3 className='text-white text-3xl text-sans fonn-semibold pb-3 '>
                    Our Ofice
                </h3>
                <p className='text-white/80 text-[16px] leading-normal text-sans'>
                169, Ikorodu Road, (1st floor) Awoyokun B/stop, Between Palmgroove and Onipanu B/stop
                </p>  
            </div>
            <div>
                <h3 className='text-white text-3xl text-sans fonn-semibold pb-3 '>
                    Contact Us
                </h3>
                <p className='text-white/80 text-[16px] leading-normal text-sans'S>
                Email:  info@cipdm.com.ng<br/>
                Phone: 08023592726<br/>
                Whatsapp: 08030731170
                </p>
            </div>
            <div>
                <p className='text-white/80 underline font-semibold font-sans text-[16px]'>
                    Quick Links
                </p>
                <ul >
                    <li>
                        <Link className='text-white' href="">Home</Link>
                    </li>
                    <li>
                        <Link className='text-white' href="">Who we are</Link>
                    </li>
                    <li>
                        <Link className='text-white'  href="">Our Services</Link>
                    </li>
                    <li>
                        <Link className='text-white' href="">Latest Updates</Link>
                    </li>
                    <li>
                        <Link className='text-white' href="">Join us today</Link>
                    </li>
                    <li>
                        <Link className='text-white' href="">Send up a message</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center pt-14' >
            <p className='text-white'>
                &copy; {new Date().getFullYear()} CIPDM. All rights reserved.
            </p>
        </div>
        <div className='flex justify-center'>
             <Link className='underline animate-bounce text-white/40 mt-7 text-thin tex-sm ' href="">Developed by Digitty</Link>
        </div>
    </div>
    </>
  )
}

export default Footer2
