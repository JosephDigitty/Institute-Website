import React, { useState , useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import scrollLock from 'scroll-lock';

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
  // const handleScroll = () => {
  //   useEffect(() => {
  //     if (isMobileMenuOpen) {
  //       scrollLock.disablePageScroll();
  //     } else {
  //       scrollLock.enablePageScroll();
  //     }
  
  //     // Clean up the scroll lock when the component unmounts
  //     return () => {
  //       scrollLock.enablePageScroll();
  //     };
  //   }, [isMobileMenuOpen]);
  // }
 

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
      setServiceOpen(false)
      setAboutusOpen(false)
      setNewsOpen(false)
      setServicesOpen(false)
      scrollLock.enablePageScroll()
    } else {
      setIsMobileMenuOpen(true);
      setServiceOpen(false)
      setAboutusOpen(false)
      setNewsOpen(false)
      setServicesOpen(false)
      scrollLock.disablePageScroll()
    }
    // setIsMobileMenuOpen(!isMobileMenuOpen);
    // if (isMobileMenuOpen) setServiceOpen(false); // Close submenu when closing mobile menu
    // if (isMobileMenuOpen) setAboutusOpen(false); // Close submenu when closing mobile menu
    // if (isMobileMenuOpen) setNewsOpen(false); // Close submenu when closing mobile menu
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
        <Link className='hidden md:block text-white font-ptserif pr-10 text-xl' href="">Contact us</Link>
      </div>
      </div>
    <nav className="bg-white md:pl-24 pr-7 md:pr-5 h-36  relative z-50 xl:px-5">
      
      <div className={`container mx-auto flex lg:justify-start md:justify-start md:gap-64  items-center justify-between`}>
        <Link to="/"><img src={LOGO}alt="" className="w-60  h-32" /></Link>
        
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
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/whoweare">Who we are</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/our-people">Our People</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/code-of-conduct">Code of Conduct</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/our-offices">State Branches</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/state-cordinators">State Cordinators</Link></li>
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
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/become-a-member">Become a Member</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/Membership-routes">Membership Categories</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/member-upgrade">Membership Upgardes</Link></li>
                  
                </ul>
              </div>
            )}
          </li>
          <li className=" focus:outline-none text-[15px] text-slate-600 font-semibold font-Merriweather">  <Link to="/Training">Training & Certifications</Link> </li> <br />

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
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/news">News & Updates</Link></li>
                  {/* <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/Events">Events & Conferences</Link></li> */}
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/Articles">Articles</Link></li>
                  
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
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/consultancy">Consultancy</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link to="/research">Research</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li className=" focus:outline-none text-[15px] text-slate-600 font-semibold font-Merriweather">  <Link to="/Gallery">Gallery</Link> </li>
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
        <ul className="flex flex-col px-24 items-start space-y-4 mt-10">
        <li className="text-white text-lg relative">
          <div className='flex flex-row gap-1 items-center cursor-pointer'
          onClick={aboutustoggleSubmenu}>
              <button className="focus:outline-none">
                About Us          
              </button>
              <IoMdArrowDropdown className='-top-5' />   
            </div>
              <ul
              className={`mt-2 w-full   transition-all duration-1000 ease-in-out transform ${
                aboutusOpen ? ' max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
              >
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/whoweare">Who we are</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/our-people">Our People</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/code-of-conduct">Code of Conduct</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/our-offices">State Branches</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/state-cordinators">State Cordinator</Link></li>
              </ul>
          </li>
          <li className="text-white text-lg relative">
          <div className='flex flex-row gap-1 items-center cursor-pointer'
          onClick={servicetoggleSubmenu}>
              <button className="focus:outline-none">
                Membership          
              </button>
              <IoMdArrowDropdown className='-top-5' />   
            </div>
              <ul
              className={`mt-2 w-full   transition-all duration-1000 ease-in-out transform ${
                serviceOpen ? ' max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
              >
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/become-a-member">Become a Member</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/Membership-routes">Membership Categories</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/member-upgrade">Membership Upgardes</Link></li>
              </ul>
          </li>
          <li className=" text-white text-lg">  <Link  onClick={toggleMobileMenu} to="/Training">Training & Certifications</Link> </li>
          <li className="text-white text-lg relative">
          <div className='flex flex-row gap-1 items-center cursor-pointer'
          onClick={newstoggleSubmenu}>
              <button className="focus:outline-none">
                News & Article          
              </button>
              <IoMdArrowDropdown className='-top-5' />   
            </div>
            <ul
             className={`mt-2 w-full   transition-all duration-1000 ease-in-out transform ${
            newsOpen ? ' max-h-screen opacity-100' : 'max-h-0 opacity-0'
             } overflow-hidden`}
          >
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/news">News & Updates</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/Articles">Articles</Link></li>
              </ul> 
           
          </li>
          <li className="text-white text-lg relative">
          <div className='flex flex-row gap-1 items-center cursor-pointer'
          onClick={servicestoggleSubmenu}>
              <button className="focus:outline-none">
                Our Services          
              </button>
              <IoMdArrowDropdown className='-top-5' />   
            </div>
             <ul
              className={`mt-2 w-full   transition-all duration-1000 ease-in-out transform ${
                servicesOpen ? ' max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
             >
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/consultancy">Consultancy</Link></li>
                  <li className="px-4 py-2 font-ubuntu text-white hover:cursor-pointer hover:bg-slate-700"> <Link onClick={toggleMobileMenu} to="/research">Research</Link></li>
              </ul>
          </li>
          <li className="text-white text-lg">  <Link  onClick={toggleMobileMenu} to="/gallery">Gallery</Link> </li>
          {/* <li className="text-white text-lg">  <Link to="">Contact Us</Link> </li> */}
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
