import Lawercard from '@/components/Lawercard'
import React from 'react'

const page = () => {
  return (
    <div className='h-full grid justify-items-center md:grid-cols-2  grid-cols-1 gap-4 pt-28 sm:px-20 px-[100px]  w-full bg-black '>
        <Lawercard />
        <Lawercard />
        <Lawercard />
        <Lawercard />
        <Lawercard />
        <Lawercard />
        <Lawercard />
    </div>
  )
}

export default page