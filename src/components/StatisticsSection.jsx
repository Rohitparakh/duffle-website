import React from 'react';
import avatars from '../assets/avatars.png';
import waves from '../assets/waves.png';
import fintech_mobile from '../assets/fintech_mobile.png';
import fintech_wallet from '../assets/fintech_wallet.png';
import robot from '../assets/robot.png';

const StatisticsSection = () => {
  return (
    <section id="statistics" className="flex relative overflow-hidden flex-col px-8 py-52 w-full bg-neutral-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      {/* Blue Box Container */}
      <div className="flex relative flex-col px-20 pt-11 mb-0 w-full bg-sky-500 rounded-[52px] max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
        {/* Robot Image */}
        <div className="absolute top-[-8rem] -right-[4rem] flex justify-center items-center max-md:top-[-6rem] max-md:-right-[2rem]">
          <img
            src={robot}
            alt="Decorative"
            className="object-contain max-w-full aspect-[2.74] w-[60rem] max-md:w-[30rem]"
          />
        </div>

        {/* Content inside blue box */}
        <div className="relative z-10 max-md:max-w-full">
          {/* Statistics Tag */}
          {/* Full-width container with flexbox */}
          <div className="flex justify-between items-center w-full py-1 text-xs font-semibold tracking-wider leading-8 text-center uppercase whitespace-nowrap text-neutral-100">

            {/* Left - Statistics */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-[5px] bg-neutral-100 rounded" />
              <span>Statistics</span>
            </div>

            <span className=" ml-auto">/ 02</span>
          </div>
          <div className="flex gap-5 max-md:flex-col">

            {/* Left Column */}
            <div className="w-[59%] max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">

                {/* Heading and Description */}
                <div className="flex flex-col items-start mt-5 text-white max-md:max-w-full">
                  <h2 className="text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">
                    Riding the
                  </h2>
                  <img
                    src={waves}
                    alt="Wave"
                    className="object-contain mt-3.5 max-w-full aspect-[4.27] w-[231px] max-md:w-[150px]"
                  />
                  <p className="self-stretch mt-6 text-base leading-6 max-w-[70%] max-md:max-w-full">
                    Crypto isn't just numbers on a screen—it's an evolving,
                    dynamic economy. Understanding how money flows across
                    chains, providers, and ecosystems helps us see the bigger
                    picture of decentralized finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative flex justify-center items-center gap-6 w-full top-32 mt-0 mx-auto max-md:flex-col max-md:top-16 max-md:gap-10 max-md:mt-20">
          {/* First Card */}
          <article className="bg-[#f5f5f5] shadow-lg p-12 rounded-3xl border border-blue-500 flex flex-col items-center text-center w-[18rem] h-[16rem] max-md:w-full max-md:h-auto max-md:p-8">
            <div className="flex justify-center -mt-4">
              <img
                src={avatars}
                alt="Avatars"
                className="object-contain max-w-[15rem] aspect-auto max-md:max-w-[10rem]"
              />
            </div>
            <div>
              <h3 className="text-7xl font-bold tracking-tighter text-blue-400 mt-2 max-md:text-5xl">53.7K</h3>
              <p className="text-neutral-500 text-lg mt-2">Followers</p>
            </div>
          </article>

          {/* Middle Card (Image Overlay) */}
          <article className="relative bg-[#f5f5f5] shadow-lg rounded-3xl border border-blue-500 text-center w-[18rem] h-[16rem] flex flex-col justify-between max-md:w-full max-md:h-auto max-md:p-8">
            <div className="absolute -top-10 left-8 max-md:top-[1rem] max-md:left-1/2 max-md:-translate-x-1/2">
              <img
                src={fintech_mobile}
                alt="Graph"
                className="w-[12rem] object-contain max-md:w-[8rem]"
              />
            </div>
            <div className="absolute bottom-12 left-10 max-md:static max-md:mt-20 max-md:text-center">
              <h3 className="text-7xl font-bold tracking-tighter text-blue-400 max-md:text-5xl">50%</h3>
              <p className="text-neutral-600 text-lg mt-2">USD Volume Cross-Chain</p>
            </div>
          </article>

          {/* Third Card */}
          <article className="bg-[#f5f5f5] relative shadow-lg rounded-3xl border border-blue-500 p-6 text-center w-[18rem] h-[16rem] flex flex-col justify-between max-md:w-full max-md:h-auto max-md:p-8">
            {/* Wallet Icon - Adjusted higher */}
            <div className="absolute -top-40 left-8 max-md:-top-16 max-md:left-1/2 max-md:-translate-x-1/2">
              <img
                src={fintech_wallet}
                alt="Wallet"
                className="w-[15rem] object-contain max-md:w-[10rem]"
              />
            </div>

            {/* Text Content - Position Adjusted */}
            <div className="absolute bottom-12 left-10 max-md:static max-md:mt-20 max-md:text-center">
              <h3 className="text-7xl font-bold tracking-tighter text-blue-400 mt-2 max-md:text-5xl">345K</h3>
              <p className="text-neutral-600 text-lg">Transactions per minute</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;