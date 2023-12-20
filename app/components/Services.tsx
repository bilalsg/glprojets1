import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface NavbarProps {
  className1?: string;
  className2?: string;
  className3?: string;
}

const MovingCircles = ({ className1, className2, className3 }: NavbarProps) => {


  return (
    <div className='sm:flex hidden w-full absolute z-0 justify-center h-screen items-center'>
      <motion.div
        className={`${className3} h-60 w-60 mix-blend-multiply bg-[#34485c]/30 backdrop-blur-md shadow-xl rounded-full right-5 relative`}
        animate={{
          x: [0, 180, 0],
          y: [0, 180, 0], // y-axis animation values
  
          transition: {
            duration: 50, // duration of each animation cycle
            repeat: Infinity, // repeat the animation indefinitely
            ease: "easeInOut", // easing function for smoother animation
          },
        }}
      >
         <motion.div
      className={`${className1} mix-blend-multiply h-60 w-60 bg-[#6379b7] backdrop-blur-md shadow-xl rounded-full absolute`}
      animate={{
        y: [0, 100, 0], // y-axis animation values
        transition: {
          duration: 8, // duration of each animation cycle
          repeat: Infinity, // repeat the animation indefinitely
          ease: "easeInOut", // easing function for smoother animation
        },
      }}
    ></motion.div>
        <motion.div
          className={`${className2} mix-blend-multiply h-60 w-60 bg-white/30 backdrop-blur-md shadow-xl rounded-full absolute`}
          animate={{
        x: [0, 180, 0],
        y: [0, 80, 0], // y-axis animation values

        transition: {
          duration: 5, // duration of each animation cycle
          repeat: Infinity, // repeat the animation indefinitely
          ease: "easeInOut", // easing function for smoother animation
        },
      }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default MovingCircles;
