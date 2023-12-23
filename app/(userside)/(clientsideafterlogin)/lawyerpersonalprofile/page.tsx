import Googlemap from '@/components/Googlemap'
import React from 'react'

const page = () => {
  const coordinates = {
    lat: 40.7128,
    lng: -74.0060,
  };
  return (
    <div>
     <div
      
        className="flex flex-col items-center px-[100px] rounded-md pt-28  shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      > 
        
        <img
          className="object-cover shadow-lg  w-full rounded-b-[0px] rounded-t-sm  h-[400px] sm:scale-[0.9] transition ease-in-out delay-200 duration-300 scale-100 hover:rounded-r-[0px]  hover:scale-100  sm:rounded-md"
          src="/law7.jpg"
          alt="Sample Image"
        ></img>
        <div className="flex flex-col items-center  justify-center p-4 leading-normal">
        <div className=''>
          <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">
          Lawyer Name
          </h5>
          <p className='text-white'>
          The sun cast its golden rays across the tranquil meadow, painting the sky in hues of orange and pink as it descended behind the distant mountains. Birds chirped melodiously, bidding farewell to the day, while a gentle breeze rustled the leaves of the ancient oak trees that stood proudly in the clearing. The air was filled with a sweet, earthy fragrance as wildflowers swayed gracefully in the fading light.
          </p>
      
          <a href="/lawyerpersonalprofile" className="inline-flex mt-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>

        </div>
        </div>
      
      </div>
      <Googlemap coordinates={coordinates} />
    </div>
  )
}

export default page