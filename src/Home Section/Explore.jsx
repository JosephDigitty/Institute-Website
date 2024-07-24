import React from 'react'
import { Link } from 'react-router-dom';


const Explore = () => {
  return (
    <>
    <div className='h-fit w-full bg-cover  bg-gray-100'>
        <h1 className='pt-5 lg:pt-7 lg:pb-7 pb-2 text-center font-ptserif font-bold text-3xl text-slate-700'>
            Explore CIPDM
        </h1>
        <div>
            <div className='flex flex-col lg:gap-22'>
            <div className="grid grid-cols-2 pt-3 lg:pt-10 lg:px-[90px] md:grid-cols-2 px-10 lg:grid-cols-4 gap-4">
            <div className='flex flex-col lg:flex-row items-center  bg-white gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg/lg'>
            <div className='flex flex-col'>
                <Link className='font-ptserif text-center font-bold py-3 text-gradient-M text-base lg:text-center lg:text-2xl' href="/become-a-member">Membership</Link>
                <p className='font-ptserif text-center text-sm lg:text-[15px]  lg:leading-[30px]' >
                    Membership in CIPDM distinguises professional and organisation as leaders in the field of public diplomacy and management
                </p>
            </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center bg-white gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg/lg'>
            <div className='flex flex-col'>
            <Link className='font-ptserif text-center font-bold py-3 text-gradient-M text-base lg:text-center lg:text-2xl' href="/Training">Training</Link>
                <p className='font-ptserif text-center text-sm lg:text-[15px]  lg:leading-[30px]' >
                    The institue of compreshesive training and certifications for all levels of management professionals
                </p>
            </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center bg-white justify-between gap-6 p-4 border rounded-lg shadow-md hover:shadow-lg/lg">
            <div className='flex flex-col'>
            <Link className='font-ptserif text-center font-bold py-3 text-base text-gradient-M lg:text-center lg:text-2xl' href="/research">Research</Link>
                <p className='font-ptserif text-center text-sm lg:text-[15px]  lg:leading-[30px]' >
                    The Institue has been providing thorough practical research for strategic-minded corporate organisations.
                </p>
            </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center bg-white justify-between gap-6 p-4 border rounded-lg shadow-md hover:shadow-lg/lg"> 
            <div className='flex flex-col'>
            <Link className='font-ptserif text-center font-bold py-3 text-base text-gradient-M lg:text-center lg:text-2xl' href="/consultancy">Consultancy</Link>
                <p className='font-ptserif text-center text-sm lg:text-[15px]  lg:leading-[30px]' >
                    Our special Consultancy Service provides pratical solutions to help organisations maximize the potential employees
                </p>
            </div>
            </div>
            </div>
            <div className="grid grid-cols-2 pt-3 lg:px-[80px] pb-9 lg:pt-10 md:grid-cols-2 px-10 lg:grid-cols-2 gap-4">
            <div className="flex flex-col lg:flex-row items-center bg-white justify-between gap-6 p-4 border rounded-lg shadow-md hover:shadow-lg/lg">
            <div className='flex flex-col'>
            <Link className='font-ptserif text-center font-bold py-3 text-gradient-M text-base lg:text-center lg:text-2xl' href="/news">Conferences</Link>

                <p className='font-ptserif text-center text-sm lg:text-[15px]  lg:leading-[30px]' >
                    The Institute Varrious Activites are tailoored towards adequately positioning our members to rise above the daunting challenges of an ever-changing global economy.
                </p>
            </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center bg-white justify-between gap-6 p-4 border rounded-lg shadow-md hover:shadow-lg/lg">
            <div className='flex flex-col'>
            <Link className='font-ptserif text-center font-bold py-3 text-gradient-M text-base lg:text-center lg:text-2xl' href="/Articles">Knowledge</Link>
                <p className='font-ptserif text-center text-sm lg:text-[15px]  lg:leading-[30px]'>
                At  CIPDM, we are dedicated to empowering business leaders and 
                managers with insightful and practical knowledge. Our carefully curated
                articles cover a wide range of topics, from effective leadership strategies 
                to the latest industry trends. </p>
            </div>
            
            </div>
            </div>
            </div>

        </div>


    </div>
    </>
  )
}

export default Explore