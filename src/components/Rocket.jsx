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
            <article className="px-6 pt-16 pb-6 max-w-full rounded-3xl border border-orange-500 border-solid min-h-[269px] shadow-[8px_8px_0px_rgba(255,99,27,1)] w-[326px] max-md:px-5">
              <h3 className="text-xl font-semibold tracking-normal">
                Mindset Shift Toward Independence
              </h3>
              <p className="mt-3 text-base">
                No more relying on outdated systems—take full control of
                your financial future, where you decide how, when, and
                where to use your money.
              </p>
            </article>
          </div>

          {/* Second Box */}
          <article className="-left-[7%] lg:left-0 flex relative flex-col justify-center p-6 mt-6 rounded-3xl border border-orange-500 border-solid shadow-[8px_8px_0px_rgba(255,99,27,1)] w-[391px] max-md:px-5">
            <h3 className="text-xl font-semibold tracking-normal">
              Freedom to Move, Freedom to Choose
            </h3>
            <p className="mt-3 text-base">
              Whether you're traveling, working remotely, or living
              life on your own terms, your financial world adapts to
              you—not the other way around.
            </p>
          </article>
        </div>

        {/* Right Column */}
        <div className="relative flex flex-col items-start text-black max-md:mt-10 max-md:max-w-full">
          {/* Third Box */}
          <article className="px-6 pt-6 pb-24 max-w-full rounded-3xl border border-orange-500 border-solid min-h-[258px] shadow-[8px_8px_0px_rgba(255,99,27,1)] w-[388px] max-md:px-5">
            <h3 className="text-xl font-semibold tracking-normal leading-tight">
              A Community-Driven Economy
            </h3>
            <p className="mt-3 text-base leading-6">
              Move beyond transactions and into real connections,
              where value is exchanged peer-to-peer, and financial
              power is shared, not centralized.
            </p>
          </article>

          {/* Rocket Icon (Two layers) */}
          <div className="absolute top-[10rem] left-[-10rem] z-20">
            <img src={rocket} alt="Rocket Icon" className="w-[230px] h-auto" />
          </div>
          <div className="absolute top-[10rem] left-[-10rem] z-10">
            <img src={rocket_black} alt="Rocket Icon" className="w-[230px] h-auto" />
          </div>

          {/* Fourth Box */}
          <article className="flex flex-col justify-center items-end p-6 mt-20 rounded-3xl border border-orange-500 border-solid shadow-[8px_8px_0px_rgba(255,99,27,1)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="max-w-full w-[340px]">
              <h3 className="text-xl font-semibold tracking-normal leading-tight">
                Confidence in a Changing World
              </h3>
              <p className="mt-3 text-base leading-6">
                Stay ahead of the curve and navigate the evolving
                financial landscape with ease, embracing a future
                where digital assets are second nature.
              </p>
            </div>
          </article>
        </div>

        {/* Floating Dollar Coins */}
        <div className="absolute right-[-5rem] top-16 max-md:right-0">
          <img src={coins} alt="Coins" className="w-[250px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Rocket;
