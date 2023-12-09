"use client"
import React from 'react'
import Typed from 'react-typed'
import ReactPlayer from  'react-player'
import Image from 'next/image'
import Services from './Services'
const Herosection = () => {
  return (
    <>
    <div className='text-white w-full flex bg-black relative  '>
      <div className='py-12  w-1/2 h-screen mx-auto flex flex-col justify-center z-20 relative'>
          <p className='text-[#00df9a] font-bold p-2 z-20'>
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 z-20'>
            Grow with data.
          </h1>
          <div className='flex  items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 z-20'>
              Fast, flexible 
            </p>
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-2 pl-1 z-20'
              strings={['LAW', 'JUSTICE', 'PROFESSIONAL']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className='md:text-2xl text-xl font-bold text-white z-20'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6  py-3 text-black'>Get Started</button>
          <Services className1='right-16 bottom-16 filter blur-xl' className2=' bottom-16 left-16 filter blur-xl' className3='filter blur-xl'/>

      </div>
      <div className="grid grid-rows-3 w-1/2 grid-flow-col gap-4 py-20">
      <div className="row-span-3 col-span-2 container  rounded-xl bg-blue-200 relative">
        <Image src="/law1.jpg" alt="law" className="cover-fit" layout="fill" objectFit="cover" />
      </div>

      <div className="col-span-2 rounded-xl bg-white" style={{ 
        backgroundImage: 'url("/law5.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
        {/* Your content goes here */}
        </div>


        <div className="row-span-2 rounded-xl col-span-2  " 
        style={{ 
            backgroundImage: 'url("/law4.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        >
        <div className="col-span-2 rounded-xl bg-white">
        
        </div>

        </div>
      </div>
     
    </div> 
    </>
  )
}

export default Herosection