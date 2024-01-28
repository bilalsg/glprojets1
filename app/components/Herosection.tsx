// components/Herosection.js
"use client"
import React from 'react';
import Typed from 'react-typed';
import Services from './Services';
import { Select } from '@/components/ui/select';
import Button2 from '@/components/Button2';

const Herosection = () => {
  return (
    <>
      <div className='text-white w-full flex relative'>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] left-0 -top-20 blue__gradient" />

        <div className='py-12 sm:w-1/2 w-full h-screen mx-auto flex flex-col justify-center z-20 relative'>

          <h1 className='md:text-7xl sm:text-start text-center text-white sm:text-6xl text-4xl font-bold md:pt-6 pt-10 z-20'>
            OBTENEZ MON <span className='text-red-700'>AVOCAT.</span>
          </h1>
          <div className='flex sm:justify-start justify-center items-center z-10 '>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 '>
              Confiance, Loyauté
            </p>
            <div className=''>
              <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-2 pl-1 z-20'
                strings={['DROIT', 'JUSTICE', 'PROFESSIONNEL']}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>

          </div>
          <p className='md:text-2xl text-xl font-bold text-white z-20  '>Plateforme en ligne professionnelle qui vous permet de choisir votre propre avocat.</p>
          <Button2 />

        </div>
        <div className='brightness-60 hover:brightness-80 transition duration-200 ease-in-out hover:brightness-100 sm:w-1/2 relative w-0 py-9 z-10 ' style={{
          backgroundImage: 'url("/law6.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

        </div>



      </div>
      <Select />
    </>
  );
};

export default Herosection;
