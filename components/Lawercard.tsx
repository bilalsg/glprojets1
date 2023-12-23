"use client"
import React from 'react';
import Button from './Button';

const Lawercard = () => {
  return (
   
      <div
      
        className="flex flex-col items-center rounded-md  bg-gray-200   shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      > 
        <img
          className="object-cover shadow-lg  w-full rounded-b-[0px] rounded-t-sm  h-[400px] sm:scale-[0.9] transition ease-in-out delay-200 duration-300 scale-100 hover:rounded-r-[0px]  hover:scale-100  sm:rounded-md"
          src="/law7.jpg"
          alt="Sample Image"
        ></img>
        <div className="flex flex-col items-center  justify-center p-4 leading-normal">
        <div className=''>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Categories:
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Droit administratif, Droit commercial, Droit de l'environnement,     
          </p>
          <div className='flex items-center gap-1 '>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tel/Fax:
            </h5>
            <p className=" font-normal  text-gray-700 dark:text-gray-400">
            213.033.85.45.19 / 06.63.22.58.26     
            </p>
          </div>
          <div className='flex items-center gap-1 '>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Adress:
            </h5>
            <p className=" font-normal  text-gray-700 dark:text-gray-400">
            213.033.85.45.19 / 06.63.22.58.26     
            </p>
          </div>
          <div className='items-center gap-1 '>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Description: 
            </h5>
            <p className=" font-normal  text-gray-700 dark:text-gray-400">
            Fondé en 2006, par Maitre Kouceila ZERGUINE, le cabinet est composé de plusieurs avocats inscrits…            
            </p>
          </div>
          <a href="/lawyerpersonalprofile" className="inline-flex mt-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>

        </div>
         </div>
      
      </div>
   
  );
};

export default Lawercard;
