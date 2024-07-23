import React from 'react'

const Become = () => {
  return (
    <div className='flex flex-col md:px-[300px] w-fit items-center gap-1'>
        <h2 className='text-slate-600 md:text-5xl text-3xl lg:pb-8 text-center font-ptserif font-semibold pt-3 md:pt-10 pb-4'>
            Become a Member
        </h2>
        <p className='text-black/70 text-[16px] md:px-16 px-4 font-Merriweather font-bold pt-1 pb-3 '>
          Take advantage of being a <span className='md:text-4xl text-3xl font-semibold text-gradient '>Chartered Diplomacy Manager</span> of the Institute as we
          Offer Direct Admission For Professional Membership
        </p>
        <div className='flex items-center lg:py-9'>
          <p className='md:text-3xl text-xl font-HR md:rotate-45 md:font-bold pb-4 font-semibold text-yellow-500/75'>
            Into
          </p>
        </div>
        <div className='grid md:gap-0 pb-5 pt-2 md:px-4 gap-3 grid-cols-1 md:grid-cols-4'>
          <a className='hover:underline' href="">*Senior Membership</a><a className='hover:underline' href="">*Full Membership</a><a className='hover:underline' href="">*Associate Membership</a><a className='md:pl-3 hover:underline' href="">*Graduate Membership</a>
        </div>
        <a className='px-12 py-2 rounded-md bg-slate-700 text-xl hover:bg-slate-500 text-white hover:text-gradient font-semibold font-sans' href="/become-a-member">
          Join Us
        </a>
        {/* <button className='px-12 py-2 rounded-md bg-slate-700 text-xl hover:bg-slate-500 text-white hover:text-gradient font-semibold font-sans'>
            Join Us
        </button> */}
    </div>
  ) //*Senior Membership *Full Membership 
  // *Associate Membership *Graduate Membership
  
}

export default Become