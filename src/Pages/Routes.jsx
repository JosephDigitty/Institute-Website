import React from 'react'
import CIPDM_membership from '../assets/PDFs/CIPDM_membership.pdf'


const MemberRoutes = () => {
  return (
    <>
    <section className='md:px-[395px] px-10 min-h-sreen pb-6 bg-gray-200 py-3'>
      <h3 className='font-semibold text-cipdm-0/60 text-base pb-6 font-Merriweather  pt-3 md:pt-10'>
        Membership Categories
      </h3>
      <p className='font-ptserif md:text-2xl md:font-bold font-semibold text-xl  md:leading-9 text-gray-600'>
        CIPDM offers various membership options to help you stand out from the competition and contribute to the ongoing growth of the public diplomacy community.
      </p>
      </section>
      <div className='flex pt-9 md:px-[395px] flex-col px-4 bg-gray-50 pb-8 gap-4'>
        <h4 className='text-gray-600 text-center font-semibold font-Merriweather py-2 text-xl'>
          Graduate Membership 
        </h4>
        <p className='text-sm md:text-[17px] text-center text-slate-600 font-Merriweather'>
          First Degree holdres with one year work experience  
        </p>
        <h4 className='text-slate-700 text-center font-semibold font-Merriweather py-2 text-xl'>
          Associate Membership
        </h4>
        <p className='text-sm text-gray-600 md:text-[17px] text-center font-Merriweather'>
        First degree holder of 4 years and above, with a minimum of 3 years post qualification work experience
        </p>
        <h4 className='text-slate-700 text-center font-semibold font-Merriweather py-2 text-xl'>
         Full Membership
        </h4>
        <p className='text-sm text-gray-600 md:text-[17px] text-center font-Merriweather'>
        A First degree Holder of 8 years and above in Art or Sciences, with at least 6 years post qualification work experience  
        </p>
        <h4 className='text-slate-700 text-center font-semibold font-Merriweather py-2 text-xl'>
          Senior Membership
        </h4>
        <p className='text-sm text-gray-600 md:text-[17px] text-center font-Merriweather'>
        Senior First degree holder of 12 years and above, with a minimum of 9 years post qualification work experience, or a first degree with 15 years post qulaification work experience
        </p>
        <h4 className='text-slate-700 text-center font-semibold font-Merriweather py-2 text-xl'>
          Corporate Membership
        </h4>
        <p className='text-sm text-gray-600 md:text-[17px] text-center font-Merriweather'>
        These are organsations registered with the institute as a memeber having satisfied the 
        requirements for corporate membership. organizations seeking corporate membership must have 
        atleast two (2) members of the institue in top managerial position.
        </p>   
      </div>
      <div className='items-center md:px-[650px] py-8 px-24'>
        <a className='hover:text-black font-ptserif text-purple-600 ' href={CIPDM_membership} download='Cipdm Membership form'>Download Memeberhsip form</a>
        </div>
   
    </>
  )
}

export default MemberRoutes