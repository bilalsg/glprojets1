import React from 'react'
interface PathName {
    path?: string;
   
  }
  
const Avatar = ({path}:PathName) => {
  return (
    <div className='w-full  flex items-center justify-center '>
         <div className='  -top-[60px]  rounded-full h-[80px] w-[80px] relative '>
            <img src={path} className='p-1 ring-2 ring-gray-300 dark:ring-gray-500 h-[80px] w-[80px] rounded-full object-cover'/>

            <span className="absolute right-0 top-0  flex h-[20px] w-[20px] items-center justify-center ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00df9a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[16px] w-[16px] bg-[#00df9a]"></span>
            </span>
            
            
         </div>     
    
   
    </div>
  )
}

export default Avatar