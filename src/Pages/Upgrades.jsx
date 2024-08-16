import React from 'react'
import { Helmet } from 'react-helmet-async'

const Upgrades = () => {
  return (
    <> 
    <Helmet>
    <title>Membership Upgrades - CIPDM</title>
    <meta name="description" content="Description of the Membership Upgrades" />
    </Helmet>
    <section className='md:px-[395px] px-10 pb-6 bg-gray-200 py-3 '>
      <h2 className='text-sm font-ptserif text-slate-600 font-semibold py-4 '>
        Membership
      </h2>
      <h3 className='text-2xl font-ptserif text-slate-600 font-semibold py-4 '>
        Membership Upgrades
      </h3>
      <h4 className='text-lg font-ptserif text-slate-600 font-semibold pb-2 '>
      Upgrade criteria 
      </h4>
      <p className='leading-loose font-Merriweather text-black/85'>
      1- members must have been inducted <br /> 
      2- At least such inducted member must have been in the institute for a period of not less than 2 years <br />
      3- He/she must have attended at least 3 training ( MPTP) to be eligible for upgrade <br />
      4- Annual Subscription must have been paid till date. <br />
      5- Contributions to his/her local unit of the institute is acceptable <br />
      6- Other relevant pre- requisite will be required for higher membership status <br />
      </p>
      <h4 className='text-lg font-ptserif text-slate-600 font-semibold pt-3 pb-2' >
      Upgrade Procedures
      </h4>
      <p className='leading-loose font-Merriweather pb-8 text-black/85'>
      1- Members are to obtain the institute upgrade form soft copy/ hardcopy <br/>
      2- Furnish the information required thoroughly <br/>
      3- Send filled upgrade form to the  membership service department at the head office via internet or local coordinator <br/>
      4- A letter of Upgrade Approval will be issued if such member is qualified
      </p>
    </section>
    </> 
  )
}

export default Upgrades