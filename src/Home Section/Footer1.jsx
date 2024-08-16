import React from 'react'
import Constancy from '../assets/images/Constancy.jpg'
import Training from '../assets/images/Training.jpg'
import Certification from '../assets/images/Certification.jpg'
import { Link } from 'react-router-dom';

const Footer1 = () => {
  return (
    <div className='flex flex-col'>
     <h3 className='text-center font-sans text-2xl pb-5 smd:text-4xl font-bold pt-3 md:pb-10 text-slate-800'>
      Top CIPDM Links
     </h3>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
     <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Certification} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <Link className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal 'to="/become-a-member">Become a Membership </Link>
                </div>
                    
                </div>
            </div>
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Training} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <Link className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' to="/Training"> Training and Certificates </Link>
                </div>
                    <p className="text-gray-600"></p>
                </div>
            </div>
     <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">
                <img className="w-full h-50 object-cover" src={Constancy} alt="Card Image"/>
                <div className="p-4">
                    <div className='border-b pb-8 pt-3'>
                    <Link className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' to="/research"> Research and Consultancy </Link>
                    </div>
                   
                </div>
            </div>
            
            {/* card 2 */}
           
            {/* card 3 */}
           
     </div>
    </div>
  )
}

export default Footer1