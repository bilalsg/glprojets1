import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 relative'>
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
              <div className="absolute z-[0] w-[50%] h-[50%] left-0 bottom-20 blue__gradient" />

      <div>
        <div className=' flex gap-1'>
            <h1 className='text-3xl font-bold text-red-700'>DZ</h1>
            <h1 className='text-3xl font-bold text-white'>mohami</h1>
            

        </div>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
