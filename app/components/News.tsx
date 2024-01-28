
import React from 'react';
import { Select } from '@/components/ui/select';
import Avatar from '@/components/Avatar';
import Contributores from '@/components/Contributores';

const News = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white '>
      <div className='max-w-[1240px] pb-20 mx-auto'>
        <Contributores />
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 group'>
        <div className='w-full shadow-2xl flex flex-col bg-gray-100 group-hover:blur-sm hover:!blur-none ho p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <Avatar path='/avatars/avatar2.jpg' />
          <h2 className='text-2xl font-bold text-center py-8 text-black'>Utilisateur unique</h2>
          <div className='font-medium '>
            <p className='py-2 border-b mx-8 mt-8'>Avocat professionnel</p>
            <p className='py-2 border-b mx-8'>Bien noté </p>
            <p className='py-2 border-b mx-8'>Toutes les informations ci-dessous</p>
            <div className='flex gap-2 px-6'>
              <button className='bg-gray-900 hover:bg-red-700 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Commencer l'essai</button>
              <button className='border-2 border-red-700 hover:bg-red-700 text-black hover:text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Commencer l'essai</button>
            </div>
          </div>
        </div>
        <div className='w-full shadow-2xl bg-gray-100 flex flex-col group-hover:blur-sm hover:!blur-none p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <Avatar path='/avatars/avatar1.jpg' />
          <h2 className='text-2xl font-bold text-center py-8 text-black'>Utilisateur unique</h2>
          <div className='font-medium '>
            <p className='py-2 border-b mx-8 mt-8'>Avocat professionnel</p>
            <p className='py-2 border-b mx-8'>Bien noté </p>
            <p className='py-2 border-b mx-8'>Toutes les informations ci-dessous</p>
            <div className='flex gap-2 px-6'>
              <button className='bg-gray-900 hover:bg-red-700 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Commencer l'essai</button>
              <button className='border-2 border-red-700 hover:bg-red-700 text-black hover:text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Commencer l'essai</button>
            </div>
          </div>
        </div>
        <div className='w-full shadow-2xl flex flex-col bg-gray-100 p-4 my-4 group-hover:blur-sm hover:!blur-none rounded-lg hover:scale-105 duration-300'>
          <Avatar path='/avatars/avatar3.jpg' />
          <h2 className='text-2xl font-bold text-center py-8 text-black'>Utilisateur unique</h2>
          <div className='font-medium '>
            <p className='py-2 border-b mx-8 mt-8'>Avocat professionnel</p>
            <p className='py-2 border-b mx-8'>Bien noté </p>
            <p className='py-2 border-b mx-8'>Toutes les informations ci-dessous</p>
            <div className='flex gap-2 px-6'>
              <button className='bg-gray-900 hover:bg-red-700 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Commencer l'essai</button>
              <button className='border-2 border-red-700 text-black hover:bg-red-700  hover:text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Commencer l'essai</button>
            </div>
          </div>
        </div>
        <Select />
      </div>
    </div>
  );
};

export default News;