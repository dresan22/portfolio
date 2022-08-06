import React from 'react';
import AndresImage from '../assets/imgs/portrait2.png';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export function Homecard() {
  return (
    <div className="relative flex justify-between  self-stretch text-white h-full sm:flex-col  sm:items-center sm:p-3 ">
      <div className=" grid place-items-center w-4/5 text-left   ">
        <div className="p-10 sm:p-2 font-extrabold text-transparent  bg-clip-text bg-gradient-to-br from-white to-green-400 drop-shadow-lg ">
          <span className="text-7xl sm:text-6xl  whitespace-nowrap typing">Hello there.</span>
          <h1 className="text-7xl sm:text-4xl whitespace-nowrap ">I am Andres</h1>
          <p className="text-4xl sm:text-2xl sm:whitespace-nowrap">Frontend Developer</p>
        </div>
      </div>
      <div className="sm:w-full  w-2/5 h-full  flex justify-center items-center">
        <img
          src={AndresImage}
          className=" object-cover min-w-max h-96"
          alt="Andres"
          style={{ clipPath: 'polygon(0 0, 100% 0, 90% 80%, 50% 100%, 10% 80%)' }}
        />
      </div>


      <div className='absolute bottom-0 md:opacity-0'>Swipe
        <KeyboardDoubleArrowRightIcon />
      </div>
    </div>
  );
}