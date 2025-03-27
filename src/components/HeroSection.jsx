import React from 'react';

import hero from '../assets/hero.png';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import flag from '../assets/flagSecondary.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center py-16 pb-40 w-screen bg-neutral-100 relative max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="relative w-full mx-auto max-w-6xl">
        {/* Background Decorative Elements */}
        {/* <img
          src={layer1}
          alt=""
          className="absolute top-[-20px] left-0 w-80 max-md:w-24 z-0"
        />
        <img
          src={earth}
          alt=""
          className="absolute top-20 right-0 hidden md:block w-56 max-md:w-28 max-md:top-10 z-0"
        />
        <img
          src={culture}
          alt=""
          className="absolute bottom-10 left-10 w-64 max-md:w-20 max-md:bottom-5 max-md:left-5 z-0"
        /> */}
        <img
          src={hero1}
          alt=""
          className="absolute md:-bottom-36 -bottom-32 left-0 md:w-72 w-28 md:block "
        />
        <img
          src={hero2}
          alt=""
          className="absolute md:-bottom-52 -bottom-32 md:right-0 -right-4  md:w-72 w-32 md:block z-10"
        />

        {/* Main Content */}
        <div className="flex flex-col items-center text-center relative z-40">
          

          <div className="relative mt-32 max-md:mt-4">
            <img
              src={hero}
              alt="Phone UI"
              className="object-contain self-center  rounded-3xl z-40 relative max-md:w-[500px]"
            />
          </div>
          {/* <p className='text-base font-normal text-gray-800 leading-[64px] max-md:leading-[48px]'>Change the way you use crypto.</p> */}
          <div className='h-12'></div>
          <div className=" bg-white rounded-full p-[4px] border-[2px] border-black -bottom-4 left-1/2 ">
        <div className="relative">
          <button className="bg-black md:text-lg text-sm flex items-center gap-2 text-white px-10 py-2 rounded-full shadow-[0_2px_2px_rgba(249,115,22,1)]">
            Take Flight <img src={flag} alt="flag"  className='h-8'/>
          </button>
        </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;