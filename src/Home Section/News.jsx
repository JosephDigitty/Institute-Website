import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import hero from '../assets/images/hero.jpeg'
import News3 from '../assets/images/News3.jpg'
import News5 from '../assets/images/News5.jpeg'
import Abj from '../assets/images/Abj.jpeg'
import AJS from '../assets/images/AJS.jpeg'
import Sco from '../assets/images/Sco.jpeg'
import Cipdm from '../assets/images/Cipdm.jpeg'
import { Link } from 'react-router-dom';


const News = ({ishome}) => {
  return (
    <>
    <div className='md:pt-8 pt-4  '>
        <h3 className='font-Merriweather md:text-4xl text-2xl lg:pb-2 pb-2 text-slate-500 font-semibold'>
        Latest Updates, News & Events
        </h3>
        <p className='font-ptserif md:text-2xl text-sm text-black/80 md:pb-10 pb-6 '>
        Follow all the latest updates and news from the Chartered Institute of Public Diplomacy of Nigeria.
        </p>
    </div>
    <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/*  Card 1 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">
                <img className="w-full h-50 object-cover" src={hero} alt="Card Image"/>
                <div className="p-4">
                    <div className='border-b pb-8 pt-3'>
                    <Link className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 UK Conference </Link>
                    </div>
                    <p className="text-gray-600">July 21st 2024</p>
                </div>
            </div>
            {/* card 2 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={News5} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <Link className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </Link>
                </div>
                    <p className="text-gray-600">July 21st 2024</p>
                </div>
            </div>
            {/* card 3 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Abj} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <Link className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </Link>
                </div>
                    <p className="text-gray-600">July 21st 2024</p>
                </div>
            </div>
            {/* card 4 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Abj} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <Link className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </Link>
                </div>
                    <p className="text-gray-600">July 21st 2024</p>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Sco} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <Link className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </Link>
                </div>
                    <p className="text-gray-600">July 21st 2024</p>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Cipdm} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <Link className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </Link>
                </div>
                    <p className="text-gray-600">July 21st 2024</p>
                </div>
            </div>
        </div>
    </div>
    <div className= {`flex flex-row items-center gap-1 md:pt-16 pt-10 ${ishome?`hidden` : `block`}`}>
        <Link className="font-semibold text-black text-base hover:text-slate-600"href="">
        Click Here for more updates
        </Link>   
        <FaArrowRight className='font-semibold text-base hover:text-slate-600' />
    </div>
    </>
  )
}

export default News