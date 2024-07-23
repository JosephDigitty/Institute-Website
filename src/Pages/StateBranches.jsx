import React from 'react'

const StateBranches = () => {
  return (
    <section className='md:px-[395px] px-10 min-h-sreen pb-6 bg-gray-100 py-3 '>
    <div>
      <p className='font-ptserif md:text-xl pt-4 text-sm text-slate-900 '>
      About Us
      </p>
      <div className='flex flex-col gap-4'>
      <h3 className='font-semibold text-gray-700 font-Merriweather text-2xl pt-3 md:pt-10'>
        Our Office
      </h3>
      <p className='font-ptserif md:text-[18px] text-base md:leading-9 text-gray-600'>
        Reach out to us today in any of Our Offices bellow 
      </p>
      </div>
      <h4 className='text-slate-600 font-Merriweather py-5 text-xl'>
      Lagos:
      </h4>
      <p className='text-sm text-slate-600 font-Merriweather'>
      169, Ikorodu Road, (1st Floor) Awoyokun B/Stop, Between Palmgroove & Onipanu B/Stop, Lagos State. <br />
      Tel: 08185719565, 08030731170
      </p>
      <h4 className='text-slate-600 font-Merriweather py-5 text-xl'>
      Abuja:
      </h4>
      <p className='text-sm text-slate-600 font-Merriweather'>
      Suit 101, National Council of Women Society Building (NCWS) by FCDA Area 11, Garki, Abuja <br />
      Tel: 08023592726, 08185719565, 08064090622, 07035799500
      </p>
      <h4 className='text-slate-600 font-Merriweather py-5 text-xl'>
      PortHarcourt:
      </h4>
      <p className='text-sm text-slate-600 font-Merriweather'>
      1st Floor, No 30, Trans-Woji Road, Woji P.H Tel: 07030603899, 08030731170 </p>
    </div>
    </section>
  )
}

export default StateBranches