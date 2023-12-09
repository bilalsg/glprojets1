"use client"
import React, { ReactNode, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
interface NavbarProps {
    className?: string; // Optional className prop of type string
  }
const Navbar = ({className}:NavbarProps) => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  return (
    <div className={`${className} flex  justify-between items-center h-24 w-full  fixed backdrop-blur-md  bg-black/30  shadow-xl border-b-[2px] border-white/10	  px-[100px] text-white`}>
        <div className=' flex gap-1'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DZ</h1>
            <h1 className='w-full text-3xl font-bold text-white'>mohami</h1>
            

        </div>
        <div className='flex justify-center items-center'>
            <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>

            </ul>
            <button className='bg-[#00df9a] sm:block hidden w-[200px] rounded-md font-medium my-6  py-3 text-white'>Get Started</button>

        </div>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 h-screen top-0 w-[60%] z-10 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 bg'>REACT.</h1>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
  </div>
  )
}

export default Navbar