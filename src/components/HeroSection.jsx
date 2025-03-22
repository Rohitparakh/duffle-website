import React from 'react';
import mobile from '../assets/phoneUI.png';
import culture from '../assets/culture.png';
import earth from '../assets/earth.png';
import dollar from '../assets/Orange_stickers.png';
import star from '../assets/Blue_stickers.png';
import layer1 from '../assets/Layer_1.png';
import victory from '../assets/victory.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center py-16 pb-40 w-screen bg-neutral-100 relative max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="relative w-full mx-auto">
        {/* Background Decorative Elements */}
        <img
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
        />
        {/* <img
          src={dollar}
          alt=""
          className="absolute bottom-80 left-80 w-48 max-md:w-20 max-md:bottom-40 max-md:left-20 z-10 opacity-80"
        />
        <img
          src={star}
          alt=""
          className="absolute top-[20rem] right-[20rem] w-32 max-md:w-18 max-md:top-[10rem] max-md:right-[5rem] z-10 opacity-80"
        /> */}

        {/* Main Content */}
        <div className="flex flex-col items-center text-center relative z-40">
          <div className="relative">
            <h1 className="text-8xl max-w-[40rem] font-bold text-gray-900 leading-tight relative z-40 max-md:text-5xl max-md:max-w-[20rem]">
              Crypto’s{' '}
              <span className="text-black relative">
                Money App
                <img
                  src={victory}
                  alt=""
                  className="absolute w-20 max-md:w-12 top-0 md:top-[2rem] left-[15rem]  max-md:left-[8rem]"
                />
              </span>
            </h1>
          </div>

          <div className="relative mt-6 max-md:mt-4">
            <img
              src={mobile}
              alt="Phone UI"
              className="object-contain self-center max-w-full aspect-[0.55] w-[457px] rounded-3xl z-40 relative max-md:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;