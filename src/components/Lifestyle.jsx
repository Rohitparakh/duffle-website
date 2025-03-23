import React from "react";
import line from "../assets/lifestyleLine.png";

const Lifestyle = () => {
  return (
    <div id="lifestyle" className="max-md:mt-24 mt-48 px-16 w-full relative bg-neutral-100 max-md:px-5">
      {/* Lifestyle Tag */}
      <div className="flex flex-wrap justify-between mt-10 w-full text-xs font-semibold tracking-wider leading-8 uppercase max-md:max-w-full">
        <div className="flex gap-2.5 justify-center items-center py-1 text-center text-orange-500 whitespace-nowrap rounded-[99px] max-md:px-5">
          <div className="flex shrink-0 self-stretch my-auto w-4 bg-orange-500 rounded h-[5px]" />
          <span className="self-stretch my-auto">lifestyle</span>
        </div>
        <span className="text-[#7D7D7D]">/ 01</span>
      </div>

      {/* Main Content */}
      <div className="mt-5 max-w-[30rem] flex flex-col items-start max-md:max-w-full">
        <h2 className="text-6xl font-bold tracking-tighter text-black leading-[64px] max-md:text-4xl max-md:leading-[48px]">
          Change the way you use
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fdf58656f4d74f40b9bb2cf067df0bd0/4f18f4bc3b95ea8c975ff6ff736c368386f826d0?placeholderIfAbsent=true"
            alt="Crypto"
            className="object-contain inline-block ml-3 w-[242px] max-md:w-[180px] max-md:ml-2"
          />
        </h2>
        <p className="mt-5 text-base leading-6 text-black max-md:max-w-full">
          For years, crypto has been seen as an investment, something to hold and
          watch. But what if it could be more? What if it became part of your
          everyday life—seamless, intuitive, and empowering?
        </p>
      </div>

      {/* Absolute Positioning Text */}
      <div className="absolute bottom-0 right-36 flex flex-col text-xs font-semibold tracking-wider leading-8 uppercase text-zinc-500 max-md:static max-md:mt-10 max-md:text-center">
        <p>REAL-WORLD UTILITY</p>
        <p>DAILY EXPERIENCE</p>
        <p>SHIFT IN PERSPECTIVE</p>
        <img src={line} className="max-w-8 absolute -right-16 bottom-2 hidden lg:block"/>
      </div>
    </div>
  );
};

export default Lifestyle;