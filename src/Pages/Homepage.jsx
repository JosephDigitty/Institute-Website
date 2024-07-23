import React from 'react'
import Hero from '../Home Section/Hero'
import { Joinus } from '../Home Section/Joinus'
import Explore from '../Home Section/Explore'
import Route from '../Home Section/Route'
import Learning from '../Home Section/Learning'
import News from '../Home Section/News'
import Become from '../Home Section/Become'
import Footer1 from '../Home Section/Footer1'
import Footer2 from '../Home Section/Footer2'
import Navbar from '../Component/Nav'

const Homepage = () => {
  return (
    <> 
    
    <Hero />
    <section className='px-11 sm:px-7 py-10 sm:py-6'>
    <Joinus/>
    </section>
    <section className='py-10 sm:py-6'>
    <Explore/>
    </section>
    {/* <section className='py-10 px-6 sm:px-10 sm:py-6 '>
    <Route/>
    </section> */}
    <section className='py-10 sm:py-6 '>
    < Learning/>
    </section>
    {/* <section className='md:py-16 px-5 md:px-24  py-6 bg-gray-100 '>
    < News/>
    </section>  */}
    <section className='md:py-16 px-5 md:px-24 container border-b py-6 bg-white'>
    < Become/>
    </section>
    
    </>
  )
}

export default Homepage