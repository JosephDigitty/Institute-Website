import React from 'react'
import { Link } from 'react-router-dom';

const Route = () => {
  return (
    <>
    <div className=' sm:shadow-none shadow-md px-10 md:px-[200px] flex gap-7 md:gap-12 sm:flex-row flex-col lg:justify-between justify-start'>
        <div className='flex flex-col '>
            <h2 className='lg:text-[45px] text-[24px] pb-5 text-black/80 font-Merriweather font-semibold '>
            Membership Category
            </h2>
            <div className='flex flex-col gap-4'>
            <Link className='lg:text-[28px] text-[16px] text-slate-600 font-montserrat hover:text-cipdm-0/60 font-bold' href="">Graduate Membership</Link>  
            <Link className='lg:text-[28px] text-[16px] text-slate-600 font-montserrat hover:text-cipdm-0/60  font-bold' href="">Associate Membership</Link>
            <Link className='lg:text-[28px] text-[16px] text-slate-600 font-montserrat hover:text-cipdm-0/60  font-bold' href="">Full Mmebership</Link>
            <Link className='lg:text-[28px] text-[16px] text-slate-600 font-montserrat hover:text-cipdm-0/60  font-bold' href="">Senior Membership</Link>
            <Link className='lg:text-[28px] text-[16px] text-slate-600 font-montserrat hover:text-cipdm-0/60  font-bold' href="">Corporate Membership</Link>
            
            </div>
        </div>
        <div className='flex flex-col'>
            <h2 className='text-[25px] lg:text-[38px] pb-4 leading-8 text-black/80  font-Merriweather '>
            Training/ <br></br> Certifications
            </h2>
            <p className='text-[14px] md:leading-7 pb-3 sm:text-[18px] text-black/65 pt-1  font-ptserif' >
            CIPDM administers Comprehensive Trainings
            and certification <br /> For all Level of
            Management Professional <br /> Both in 
            Public <br /> and private sector of the economy.
            </p>
            <p className='leading-7 text-slate-600 '>
            The Certification offered by CIPDM includes: <br />
    	      Certified Diplomatic Managers, <br />
            Certified Conflict and Management Professional, <br />
            Certified Public Administrator,<br />
            Certified Profesiona Business Negotiator <br />
            Professional II.
            </p>
            <div className='pb-8'>
            <h3 className='text-2xl font-montserrat text-slate-700 pt-4 md:pt-20'>  
              Quick Links 
            </h3>
            <Link className='text-gray-800 underline hover:text-slate-900 hover:animate-shake' href="">Entry Requiremnts </Link> <br />

            <Link className='text-gray-800 underline hover:text-slate-900 hover:animate-shake' href="">Training Guildlines</Link>
            </div>
        </div>

    </div>
    </>
  )
}

export default Route