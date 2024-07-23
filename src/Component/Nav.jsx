import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import LOGO from '../assets/images/LOGO.png';


const Navbar = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [aboutusOpen, setAboutusOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicehandleMouseEnter = () => {
    if (!isMobileMenuOpen) setServiceOpen(true);
  };
  const aboutushandleMouseEnter = () => {
    if (!isMobileMenuOpen) setAboutusOpen(true);
  };
  const newshandleMouseEnter = () => {
    if (!isMobileMenuOpen) setNewsOpen(true);
  };
 const serviveshandleMouseEnter = () => {
  if (!isMobileMenuOpen) setServicesOpen(true);
 } 

  const servicehandleMouseLeave = () => {
    if (!isMobileMenuOpen) setServiceOpen(false);
  };
  const aboutushandleMouseLeave = () => {
    if (!isMobileMenuOpen) setAboutusOpen(false);
  };
  const newshandleMouseLeave = () => {
    if (!isMobileMenuOpen) setNewsOpen(false);
  };
  const handleservicesMouseLeave = () => {
    if (!isMobileMenuOpen) setServicesOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setServiceOpen(false); // Close submenu when closing mobile menu
    if (isMobileMenuOpen) setAboutusOpen(false); // Close submenu when closing mobile menu
    if (isMobileMenuOpen) setNewsOpen(false); // Close submenu when closing mobile menu
  };

  const servicetoggleSubmenu = () => {
    setServiceOpen(!serviceOpen);
  };
  const aboutustoggleSubmenu = () => {
    setAboutusOpen(!aboutusOpen);
  };
  const newstoggleSubmenu = () => {
    setNewsOpen(!newsOpen);
  };
  const servicestoggleSubmenu = () => {
    setServicesOpen(!servicesOpen);
  };
  //setAboutusOpen(!aboutusOpen);
  //setNewsOpen(!newsOpen);


  return ( 
    <>
    <div className='bg-slate-500 flex flex-row items-center justify-between'>
      <div className='flex flex-row gap-2 items-center'>
      <div className='flex flex-row px-3 py-4 gap-3'>
      <FaPhone className='text-white md:text-xl  font-semibold' />
      <p className='text-white font-ptserif'>
        08023592726
      </p>
      </div>
      <div className='flex flex-row gap-3'>
      <FaWhatsapp className='text-white text-2xl font-semibold' />
      <p className='text-white font-ptserif'>
      08030731170
      </p>
      </div>
      </div> 
      <div>
        <a className='hidden md:block text-white font-ptserif pr-10 text-xl' href="">Contact us</a>
      </div>
      </div>
    <nav className="bg-white md:pl-24 pr-7 md:pr-5 h-36  relative z-50 xl:px-5">
      
      <div className={`container mx-auto flex lg:justify-start md:justify-start md:gap-64  items-center justify-between`}>
        <a href="/"><img src={LOGO}alt="" className="w-60  h-32" /></a>
        
        <div className="md:hidden">
          <button 
            className="text-black/80 text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li 
            className="text-white  ml-9 relative"
            onMouseEnter={aboutushandleMouseEnter}
            onMouseLeave={aboutushandleMouseLeave}
          > 
            <div className='flex flex-row hover:cursor-pointer gap-1 items-center'>
              <button className="focus:outline-none text-[15px] text-slate-600 font-semibold font-Merriweather">
                About us          
              </button>
              <IoMdArrowDropdown className='-top-5 text-black/80' />   
            </div>
            {aboutusOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-slate-500 shadow-lg z-50"
                onMouseEnter={aboutushandleMouseEnter}
                onMouseLeave={aboutushandleMouseLeave}
              >
                <div className='absolute left-0 right-0 -top-6 hover:cursor-pointer h-6 bg-transparent'/>
                <ul>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/whoweare">Who we are</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/our-people">Our People</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/code-of-conduct">Code of Conduct</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/our-offices">State Branches</a></li>
                </ul>
              </div>
            )}
          </li>
          <li 
            className=" relative"
            onMouseEnter={servicehandleMouseEnter}
            onMouseLeave={servicehandleMouseLeave}
          > 
          <div className="relative group flex-row gap-1">
            <div className='flex items-center'>
              <button className="focus:outline-none text-[15px] text-slate-600 font-semibold font-Merriweather ">
                Membership   
              </button>
              <IoMdArrowDropdown className='-top-5 text-black/80' /> 
              <div className="absolute left-0 -bottom-4 w-0 h-1 bg-slate-600 transition-all duration-300 group-hover:w-full"></div>
            </div>  
          </div>
            {serviceOpen && (
              <div 
                className="absolute bg-slate-500  left-0 mt-2 w-48  shadow-lg z-50"
                onMouseEnter={servicehandleMouseEnter}
                onMouseLeave={servicehandleMouseLeave}
              >
                <div className='absolute left-0 right-0 -top-6 hover:cursor-pointer h-6 bg-transparent'/>
                <ul>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/become-a-member">Become a Member</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/Membership-routes">Membership Categories</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/member-upgrade">Membership Upgardes</a></li>
                  
                </ul>
              </div>
            )}
          </li>
          <li className=" focus:outline-none text-[15px] text-slate-600 font-semibold font-Merriweather">  <a href="/Training">Training & Certifications</a> </li> <br />

          <li 
            className="text-white relative"
            onMouseEnter={newshandleMouseEnter}
            onMouseLeave={newshandleMouseLeave}
          > 
            <div className='flex flex-row gap-1 items-center'>
              <button className="focus:outline-none text-[15px] text-slate-600 font-semibold font-Merriweather">
                  News & Articles         
              </button>
              <IoMdArrowDropdown className='-top-5 text-black/80' />   
            </div>
            {newsOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-slate-500 shadow-lg z-50"
                onMouseEnter={newshandleMouseEnter}
                onMouseLeave={newshandleMouseLeave}
              >
                <div className='absolute left-0 right-0 -top-6 hover:cursor-pointer h-6 bg-transparent'/>
                <ul>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/news">News & Updates</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/Events">Events & Conferences</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/Articles">Articles</a></li>
                  
                </ul>
              </div>
            )}
          </li>
          <li 
            className="text-white relative"
            onMouseEnter={serviveshandleMouseEnter}
            onMouseLeave={handleservicesMouseLeave}
          > 
            <div className='flex flex-row gap-1 items-center'>
              <button className="focus:outline-none text-[15px] text-slate-600 font-semibold font-Merriweather">
                  Our Sevices        
              </button>
              <IoMdArrowDropdown className='-top-5 text-slate-600' />   
            </div>
            {servicesOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-slate-500 shadow-lg z-50"
                onMouseEnter={serviveshandleMouseEnter}
                onMouseLeave={handleservicesMouseLeave}
              >
                <div className='absolute left-0 right-0 -top-6 hover:cursor-pointer h-6 bg-transparent'/>
                <ul>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/consultancy">Consultancy</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/research">Research</a></li>
                  
                </ul>
              </div>
            )}
          </li>
          <li className=" focus:outline-none text-[15px] text-slate-600 font-semibold font-Merriweather">  <a href="/Gallery">Gallery</a> </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 w-full h-full 
           bg-gray-800 text-white transform transition-transform
            duration-300 ease-in-out ${isMobileMenuOpen ? 
              'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button 
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 mt-10">
          <li className="text-white text-lg relative">
          <div className='flex flex-row gap-1 items-center cursor-pointer'
          onClick={servicetoggleSubmenu}>
              <button className="focus:outline-none">
                Membership          
              </button>
              <IoMdArrowDropdown className='-top-5' />   
            </div>
            
            {serviceOpen && (
              <ul className="mt-2 w-full bg-gray-700 shadow-lg">
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/become-a-member">Become a Member</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/Membership-routes">Membership Categories</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/member-upgrade">Membership Upgardes</a></li>
              </ul>
            )}
          </li>
          <li className="text-white text-lg relative">
          <div className='flex flex-row gap-1 items-center cursor-pointer'
          onClick={aboutustoggleSubmenu}>
              <button className="focus:outline-none">
                About Us          
              </button>
              <IoMdArrowDropdown className='-top-5' />   
            </div>
            
            {aboutusOpen && (
              <ul className="mt-2 w-full bg-gray-700 shadow-lg">
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/whoweare">Who we are</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/our-people">Our People</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/code-of-conduct">Code of Conduct</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/our-offices">State Branches</a></li>
              </ul>
            )}
          </li>
          <li className="text-white text-lg relative">
          <div className='flex flex-row gap-1 items-center cursor-pointer'
          onClick={newstoggleSubmenu}>
              <button className="focus:outline-none">
                News & Information          
              </button>
              <IoMdArrowDropdown className='-top-5' />   
            </div>
            
            {newsOpen && (
              <ul className="mt-2 w-full bg-gray-700 shadow-lg">
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/news">News & Updates</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/Events">Events & Conferences</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/updates">Event Updates</a></li>
              </ul>
            )}
          </li>
          <li className=" text-white text-lg">  <a href="/Training">Training & Certifications</a> </li> <br />
          <li className="text-white text-lg relative">
          <div className='flex flex-row gap-1 items-center cursor-pointer'
          onClick={servicestoggleSubmenu}>
              <button className="focus:outline-none">
                Our Services          
              </button>
              <IoMdArrowDropdown className='-top-5' />   
            </div>
            
            {servicesOpen && (
              <ul className="mt-2 w-full bg-gray-700 shadow-lg">
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/consultancy">Consultancy</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/research">Research</a></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <a href="/updates">Event Updates</a></li>
              </ul>
            )}
          </li>
          <li className="text-white text-lg">  <a href="/gallery">Gallery</a> </li>
          {/* <li className="text-white text-lg">  <a href="">Contact Us</a> </li> */}
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
