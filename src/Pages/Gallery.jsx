import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import hero from '../assets/images/hero.jpeg'
import News3 from '../assets/images/News3.jpg'
import News5 from '../assets/images/News5.jpeg'
import Abj from '../assets/images/Abj.jpeg'
import AJS from '../assets/images/AJS.jpeg'
import Sco from '../assets/images/Sco.jpeg'
import resilience from '../assets/images/resilience.jpg'
import DipCon from '../assets/images/DipCon.jpeg'
import Cipdm from '../assets/images/Cipdm.jpeg'
import gal2 from '../assets/images/gal2.jpeg'
import gal3 from '../assets/images/gal3.jpeg'
import gal4 from '../assets/images/gal4.jpeg'
import gal5 from '../assets/images/gal5.jpeg'
import gal6 from '../assets/images/gal6.jpeg'
import gal7 from '../assets/images/gal7.jpeg'
import gal9 from '../assets/images/gal9.jpeg'
import Gal101 from '../assets/images/Gal101.jpg'
import Gal102 from '../assets/images/Gal102.jpg'
import Gal103 from '../assets/images/Gal103.jpg'
import Gal104 from '../assets/images/Gal104.jpg'





const Gallery = () => {
  return (
    <>
    <div className="container px-10 md:px-28 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/*  Card 1 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">
                <img className="w-full h-50 object-cover" src={Gal101} alt="Card Image"/>
                <div className="p-4">
                    <div className='border-b pb-8 pt-3'>
                    <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 UK Conference </a>
                    </div>
                    
                </div>
            </div>
            {/* card 2 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={News5} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> National Conference 2023, Abuja </a>
                </div>
                    
                </div>
            </div>
            {/* card 3 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Abj} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> National Conference 2023, Abuja </a>
                </div>
                    
                </div>
            </div>
            {/* card 4 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Gal102} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </a>
                </div>
                   
                </div>
            </div>
            {/* card 5 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Sco} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </a>
                </div>
                    
                </div>
            </div>
            {/* card 6 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Cipdm} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> National Conference 2023, Abuja </a>
                </div>
                   
                </div>
            </div>
            {/* card 7 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={resilience} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-sm hover:text-slate-500 font-semibold leading-normal ' href=""> National President, Governing Council  presenting a certificate of fellowship to a new inductee </a>
                </div>
                    
                </div>
            </div>
            {/* card 8 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={DipCon} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </a>
                </div>
                    
                </div>
            </div>
            {/* card 9 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={gal2} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> The staff & coordinators of the institute </a>
                </div>
                    
                </div>
            </div>
            {/* card 10 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={gal3} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </a>
                </div>
                   
                </div>
            </div>
            {/* card 11 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Gal103} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </a>
                </div>
                    
                </div>
            </div>
            {/* card 10 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={gal5} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </a>
                </div>
                    
                </div>
            </div>
            {/* card 11 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={Gal104} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-xl hover:text-slate-500 font-semibold leading-normal ' href=""> 2024 Induction </a>
                </div>
                    
                </div>
            </div>
            {/* card 12 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={gal7} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-sm hover:text-slate-500 font-semibold leading-normal ' href=""> Governing Council member , Associate Prof. Mustapha ( KWASU) left felicitates with a new fellows inductee </a>
                </div>
                    
                </div>
            </div>
            {/* card 13 */}
            <div className="bg-white shadow-md rounded-sm hover:opacity-90 hover:cursor-pointer overflow-hidden">        
                <img className="w-full h-50 object-cover" src={gal9} alt="Card Image"/>
                <div className="p-4">
                <div className='border-b pb-8 pt-3'>
                <a className='font-mono text-black/80 text-l hover:text-slate-500 font-semibold leading-normal ' href=""> the Executive Director, Stephen Odukoya( left) presenting Fellowship certificate to a member </a>
                </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery