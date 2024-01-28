"use client"
import { signOut, useSession } from 'next-auth/react';
import Button from '@/components/Button';
import Button2 from '@/components/Button2';
import { SelectDemo } from '@/components/Select';
import React, { ReactNode, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAuth } from '@/providers/AuthContext';
import DropdownButton from '@/components/ui/dropdown';
interface NavbarProps {
    className?: string; // Optional className prop of type string
  }
const Navbar = ({className}:NavbarProps) => {
    const [nav, setNav] = useState(false);
    const { data: session,status } = useSession();
    const {setAuthUser,currentUser,lawyerCookie}=useAuth()

    const handleNav = () => {
      setNav(!nav);
    };
   
    console.log(session)
  return (
    <div className={`${className} flex z-50  justify-between items-center h-24 w-full  fixed backdrop-blur-md  bg-black/30  shadow-xl border-b-[2px] border-white/10	  sm:px-[100px] px-2 text-white`}>
        <div className=' flex gap-1'>
            <h1 className='w-full text-3xl font-bold text-red-700'>DZ-</h1>
            <h1 className='w-full text-3xl font-bold text-white'>MOUHAMI</h1>
            

        </div>
        <div className='flex gap-4 justify-center items-center'>
            <ul className='hidden md:flex'>

            <li className='p-4'><a href='/'>Accueil</a></li>
            <li className='p-4'><a href='/lawyers'>Avocats</a></li>
            <li className='p-4'>À propos de nous</li>
            <li className='p-4'>Contact</li>

            </ul>
            
            {(!currentUser) && <Button />}
            {session ? '' : <Button/>}
   
       <div className='pl-8   flex justify-center items-center'>
        <DropdownButton/>
        </div>
                    
        </div>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed  md:hidden block left-0 h-screen top-0 w-[60%] z-30 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <div className=' flex justify-start '>
                <h1 className=' text-3xl font-bold text-red-700'>DZ-</h1>
                <h1 className=' text-3xl font-bold text-white'>MOUHAMI</h1>
                

            </div>
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