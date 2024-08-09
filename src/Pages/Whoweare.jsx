import React from 'react'
import { Helmet } from 'react-helmet-async'
import Aboutus from '../assets/images/Aboutus.jpeg'
import Customer from '../assets/images/Customer.jpg'
import Honesty from '../assets/images/Honesty.jpg'
import Integrity from '../assets/images/Integrity.jpg'
import knowledge from '../assets/images/knowledge.jpg'
import Teamworkk from '../assets/images/Teamworkk.jpg'


const Whoweare = () => {
  return (
    <>
    <Helmet>
      <title>Who We Are - CIPDM</title>
      <meta name="description" content="Description of Who We Are page" />
    </Helmet>
    <div className='md:px-[395px] px-10 pb-6 bg-gray-200 py-3 '>
    <p className='font-ptserif md:text-xl pt-4 text-sm text-slate-900 '>
      About Us
    </p>
    <div className='flex flex-col gap-4'>
      <h2 className='font-semibold text-gray-700 font-Merriweather text-2xl pt-3 md:pt-10'>
        Who we are
      </h2>
      <p className='font-ptserif md:text-[18px] text-base md:leading-9 text-gray-600'>
      The Chartered Institute of Public Diplomacy and Management (CIPDM) is a Educational & professional institution designed to professionalize, train and develop global leaders and managers.
      </p>
      <img src={Aboutus} alt="" className='border-[5px] border-slate-500' />
      <div>
        <h3 className='text-slate-700 font-Merriweather py-3 text-2xl'>
          Our Vision
        </h3>
        <p className='font-ptserif md:text-[18px] text-base md:leading-9 text-gray-600'>
        To Create A Positive Work Environment, Work Relations And Practices 
        Through Robust Diplomacy And Practical Positive Policies And Actions.
        </p>
        <h3 className='text-slate-700 font-Merriweather py-3 text-2xl'>
          Our Mission
        </h3>
        <p className='font-ptserif md:text-[18px] text-base md:leading-9 text-gray-600'>
        To Professionalize Public Diplomacy And Management With A View To Train 
        Corporate Leaders And Managers Who Create Sustainable Prosperity Worldwide.
        </p>
      </div>
    </div>
    </div>
    <div className='bg-slate-300 min-h-screen pb-10 md:px-[390px] px-[80px]'>
      <h3 className='pt-5 text-center md:pb-14 pb-3 text-3xl font-semibold font-ubuntu text-slate-800'>
        Our Core Values 
      </h3>
      <div className=' grid lg:grid-cols-3 gap-8 md:grid-cols-2 pb-14 grid-cols-1 '>
        <div className='bg-white w-fit h-fit shadow-lg rounded-md'>
          <img src={Integrity} width={150} height={150} alt="" className='w-full  h-full object-contain border-[5px] rounded-lg'/>
          <h4 className='text-slate-800 font-mono text-center pt-3 font-semibold'>Integrity</h4>
          <p className='text-sm px-2 pt-3 font-Merriweather text-center border-t border-slate-950 leading-5'>
            We strive to maintain high standards of integrity and ethics in all our relationships, both within and outside the organization.
          </p>
        </div>
        <div className='bg-white w-fit h-fit shadow-lg rounded-md'>
          <img src={Honesty} width={150} height={150} alt="" className='w-full  h-full object-contain border-[5px] rounded-lg'/>
          <h4 className='text-slate-800 font-mono text-center pt-3 font-semibold'>Honesty</h4>
          <p className='text-sm px-2 pt-3 font-Merriweather text-center border-t border-slate-950 leading-5'>
          We uphold the highest standards of integrity, ensuring transparency and honesty in all our interactions
          </p>
        </div>
        <div className='bg-white w-fit h-fit shadow-lg rounded-md'>
          <img src={knowledge} width={150} height={150} alt="" className='w-full  h-full object-contain border-[5px] rounded-lg'/>
          <h4 className='text-slate-800 font-mono text-center pt-3 font-semibold'>Knowledge Improvement</h4>
          <p className='text-sm px-2 pt-3 font-Merriweather text-center border-t border-slate-950 leading-5'>
            We strive to provide comprehensive Management education and training to all Our Members.
          </p>
        </div>
        <div className='bg-white w-fit h-fit shadow-lg rounded-md'>
          <img src={Teamworkk} width={150} height={150} alt="" className='w-full  h-full object-contain border-[5px] rounded-lg'/>
          <h4 className='text-slate-800 font-mono text-center pt-3 font-semibold'>Teamwork</h4>
          <p className='text-sm px-2 pt-3 font-Merriweather text-center border-t border-slate-950 leading-5'>
            We strive to foster a strong and collaborative team culture, where employees feel valued and supported.
          </p>
        </div>
        <div className='bg-white w-fit h-fit shadow-lg rounded-md'>
          <img src={Customer} width={150} height={150} alt="" className='w-full  h-full object-contain border-[5px] rounded-lg'/>
          <h4 className='text-slate-800 font-mono text-center pt-3 font-semibold'>Client Relatation</h4>
          <p className='text-sm px-2 pt-3 font-Merriweather text-center border-t border-slate-950 leading-5'>
          We prioritize building strong, lasting relationships with our clients, understanding their needs, and delivering exceptional service
          </p>
        </div>
        <div className='bg-white w-fit h-fit shadow-lg rounded-md'>
          <img src={Integrity} width={150} height={150} alt="" className='w-full  h-full object-contain border-[5px] rounded-lg'/>
          <h4 className='text-slate-800 font-mono text-center pt-3 font-semibold'>Resilience</h4>
          <p className='text-sm px-2 pt-3 font-Merriweather text-center border-t border-slate-950 leading-5'>
          We embrace challenges with determination and adaptability, continuously striving to overcome obstacles and achieve excellence.
          </p>
        </div>
      </div>
    </div>
    <div className='md:px-[395px] px-10 bg-white  min-h-screen py-3 '>
      <h3 className='md:pt-[40px] pt-[20px] text-slate-700 md:text-3xl text-2xl font-semibold font-ptserif '>
      Our objectives are to:
      </h3>
      <ul className=' py-10'>
        <li className='font-Merriweather md:text-lg text-sm  leading-normal text-black py-3'>
        * Develop multi-faceted leaders and managers with a well-developed global mindset, strong entrepreneurial global business and 
        diplomacy skills, and a deep commitment to corporate governance and ethical conduct.
        </li>
        <li className='font-Merriweather md:text-lg text-sm leading-normal text-black py-3'>
        * Provide training, development programs and consultations consistent with quality management practices. 
        </li>
        <li className='font-Merriweather md:text-lg text-sm leading-normal text-black py-3'> 
        * Building estimable leaders, managers and executives with a global vision and strong managerial and leadership skills
        </li>
        <li className='font-Merriweather md:text-lg text-sm leading-normal text-black py-3'>
        * Develop and create leadership studies that identify key aspect of management of human resources in public and private services
        </li>
        <li className='font-Merriweather md:text-lg text-sm leading-normal text-black py-3'>
        * Promote public diplomacy and management in government and private sectors as a profession
        </li>
        <li className='font-Merriweather md:text-lg text-sm leading-normal text-black py-3'>
        * Encourage fellowship and cooperation in public and private service
        </li>
        <li className='font-Merriweather md:text-lg text-sm leading-normal text-black py-3'>
        * Provide opportunities for professional growth and development for practitioners and conducting research and investigation on 
        public management issues
        </li>
        <li className='font-Merriweather md:text-lg text-sm leading-normal text-black py-3'>
        * Facilitate positive changes that improve the delivery of private, public and international relationship management services
        </li>
      </ul>

    </div>
    </>
  )
}

export default Whoweare