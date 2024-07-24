import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Nav'
import Footer1 from '../../Home Section/Footer1'
import Footer2 from '../../Home Section/Footer2'

// The Mainlayout component will wrap all other pages and provide common navigation and footer components.


const Mainlayout = () => {
 
  return (
    <>
    <Navbar/>
    <Outlet/>
    <section className='md:py-16 px-5 md:px-24  py-6 bg-gray-100 '>
    < Footer1/>
    </section>
    <section className='md:py-16 px-5 pt-5 md:px-24 bg-slate-600 py-6 '>
    < Footer2/>
    </section>
    </>
  )
}

export default Mainlayout