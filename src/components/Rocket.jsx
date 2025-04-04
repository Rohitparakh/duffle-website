import React from 'react';
import plane from '../assets/plane.png';
import rocket from '../assets/rocket.png';
import rocket_black from '../assets/rocket_black.png';
import coins from '../assets/coins.png';

const Rocket = () => {
  return (
    <div className="flex flex-col items-center mt-16 p-10 w-screen max-md:mt-10 relative">
      <div className="grid grid-cols-2 gap-0 max-md:grid-cols-1 relative w-full max-w-5xl">

        {/* Left Column */}
        <div className="flex flex-col text-black max-md:mt-6 max-md:max-w-full">

          {/* Plane & First Box */}
          <div className="relative flex justify-center">
            {/* Plane Icon */}
            <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 z-20">
              <img src={plane} alt="Plane Icon" className="w-[120px] h-auto" />
            </div>

            {/* First Box */}
            <article className="relative bg-[#f5f5f5] px-6 pt-16 pb-6 max-w-full rounded-3xl border-2 border-orange-500 min-h-[269px] w-[326px] max-md:px-5 after:content-[''] after:absolute after:right-[-10px] after:bottom-[-10px] after:w-full after:h-full after:border-r-2 after:border-b-2 after:border-orange-500 after:rounded-3xl after:-z-20">
            <h3 className="text-xl font-semibold tracking-normal">
            Move Money Like You Mean It
              </h3>
              <p className="mt-3 text-base">
              No more bridging, gas or worrying about chains. One platform, every transaction
              </p>
            </article>
          </div>

          {/* Second Box */}
          <article className=" shadow-[8px_7px_0_rgba(249,115,22,1)] relative max-w-[90vw] -left-[7%] bg-[#f5f5f5] lg:left-0 flex flex-col justify-center p-6 mt-6 rounded-3xl border-2 border-orange-500 w-[391px] max-md:px-5 after:content-[''] after:absolute after:right-[-10px] after:bottom-[-10px] after:w-full after:h-full after:border-r-2 after:border-b-2 after:border-orange-500 after:rounded-3xl after:-z-20">
          <h3 className="text-xl font-semibold tracking-normal">
          Go Anywhere, Trade Everywhere 
            </h3>
            <p className="mt-3 text-base">
            Whether you're traveling, commuting, or relaxing at home, you'll never miss an opportunity to trade. Access all the trading tools you'll need on both mobile & desktop.
            </p>
          </article>
        </div>

        {/* Right Column */}
        <div className="relative flex flex-col items-start text-black max-md:mt-10 max-md:max-w-full">
          {/* Third Box */}
          <article className="relative bg-[#f5f5f5] z-10 px-6 pt-6 pb-24 max-w-full rounded-3xl border-2 border-orange-500 min-h-[258px] w-[388px] max-md:px-5 after:content-[''] after:absolute after:right-[-10px] after:bottom-[-10px] after:w-full after:h-full after:border-r-2 after:border-b-2 after:border-orange-500 after:rounded-3xl after:z-0">
          <h3 className="text-xl font-semibold tracking-normal leading-tight">
          One Platform. Every Route.
            </h3>
            <p className="mt-3 text-base leading-6">
            With 40+ protocols integrated from bridges to dexs inc. Relay, DeBridge, LiFi & more. We are the best price. This is how DeFi should feel, fast, efficient & frictionless
            </p>
          </article>

          {/* Rocket Icon (Two layers) */}
          <div className="absolute top-[15rem] md:top-[10rem] left-[-10rem] z-20">
            <img src={rocket} alt="Rocket Icon" className="w-[230px] h-auto" />
          </div>
          <div className="absolute top-[15rem] md:top-[10rem] left-[-10rem] z-20">
            <img src={rocket_black} alt="Rocket Icon" className="w-[230px] h-auto" />
          </div>

          {/* Fourth Box */}
          <article className="relative bg-[#f5f5f5] z-10 flex flex-col justify-center items-end p-6 mt-20 rounded-3xl border-2 border-orange-500 max-md:px-5 max-md:mt-10 max-md:max-w-full after:content-[''] after:absolute after:right-[-10px] after:bottom-[-10px] after:w-full after:h-full after:border-r-2 after:border-b-2 after:border-orange-500 after:rounded-3xl after:z-0">
          <div className="max-w-full w-[340px]">
              <h3 className="text-xl font-semibold tracking-normal leading-tight">
              Bigger Than Crypto 
              </h3>
              <p className="mt-3 text-base leading-6">
              Welcome to finance without boarders. We unlock global finance through tokenised stocks - Accessible to everyone
              </p>
            </div>
          </article>
        </div>

        {/* Floating Dollar Coins */}
        <div className="absolute hidden md:block right-[-5rem] top-16 max-md:right-0">
          <img src={coins} alt="Coins" className="w-[250px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Rocket;
