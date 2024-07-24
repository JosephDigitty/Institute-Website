import React from 'react'
import Customer from '../assets/images/Customer.jpg'
import Teamworkk from '../assets/images/Teamworkk.jpg'
import Integrity from '../assets/images/Integrity.jpg'
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <>
    <div className='px-20 md:px-[300px]' >
      <h3 className='text-slate-600 font-bold md:text-3xl text-xl font-Merriweather'>
        Our Articles
      </h3>
    </div>
    <div className='grid grid-cols-1 md:px-56 gap-8 px-10  md:grid-cols-3 py-14  '>
      <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">
                <img className="w-full h-50 object-cover" src={Customer} alt="Card Image"/>
                <div className="p-4">
                    <div className='border-b pb-8 pt-3'>
                    <Link className='font-roboto text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' to="/Article-one"> Diplomatic Practices for 
        Organisational & National 
        Economic Sustainability </Link>
                    </div>
                    <p className="text-gray-600"> Posted July 23rd 2024</p>
                </div>
        </div>
        <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">
                <img className="w-full h-50 object-cover" src={Teamworkk} alt="Card Image"/>
                <div className="p-4">
                    <div className='border-b pb-8 pt-3'>
                    <Link className='font-roboto text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' to="/Article-two"> Exploring Diplomatic Option in Practicing Essential Skills in Management </Link>
                    </div>
                    <p className="text-gray-600"> Posted July 23rd 2024</p>
                </div>
        </div>
        <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">
                <img className="w-full h-50 object-cover" src={Integrity} alt="Card Image"/>
                <div className="p-4">
                    <div className='border-b pb-8 pt-3'>
                    <Link className='font-roboto text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' to="/Article-Three"> THE DYNAMICS OF LEADERSHIP THROUGH DIPLOMACY </Link>
                    </div>
                    <p className="text-gray-600"> Posted July 23rd 2024</p>
                </div>
        </div>
    </div>
    
      
  
    </>
  )
}

export default Article