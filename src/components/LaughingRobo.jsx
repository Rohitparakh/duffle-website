import React from "react";
import cultureDesktop from "../assets/cultureDesktop.png";
import Vector from "../assets/Vector.png";
import robo2 from "../assets/robo2.png";
import eyes from "../assets/eyes.png";
import temp from "../assets/temp.png";
import fingers from "../assets/fingers.png";
import iphone_15 from "../assets/dash.png";
import star from "../assets/star.png";

const LaughingRobo = () => {
  return (
    <div
      className="relative w-full min-h-screen pb-40 mt-64 flex justify-center items-center bg-no-repeat bg-center bg-cover rounded-t-3xl z-10"
      style={{ backgroundColor: "#ffd972" }}
    >
      {/* Background Vector */}
      <img
        src={Vector}
        alt=""
        className="absolute top-0 md:block block w-[100vw] object-cover max-h-[100vh] max-md:w-[100vw] max-md:top-10 max-md:left-1/2 max-md:-translate-x-1/2"
      />

      {/* iPhone Image */}
      <div className="absolute md:w-[70rem] md:-top-1/4 top-0">
      <div className="relative">
      <img
        src={iphone_15}
        alt=""
        className=""
      />
     <div className="absolute bg-white rounded-2xl p-[2px] border border-black -bottom-4 md:left-1/2 left-10">
        <div className="relative">
          <button className="bg-black md:text-lg text-sm text-white px-6 py-2 rounded-2xl  shadow-lg border-2 border-[#ffd972]">
            Launch App
          </button>
        </div>
      </div>
      </div>
      </div>

      {/* Stars */}
      {/* <img
        src={star}
        alt=""
        className="absolute md:w-[10vw] md:bottom-[45vh] md:right-[43vw] w-[5vw]"
      />
      <img
        src={star}
        alt=""
        className="absolute md:w-[10vw] md:bottom-[95vh] md:right-[28vw] w-[5vw]"
      /> */}

      {/* Robo Image */}
      <img
        src={robo2}
        alt=""
        className="absolute w-[60vw] md:w-[25vw] bottom-[25vh] right-0 md:bottom-[1vh] md:right-[10vw]"
      />



      {/* Left Text Content */}
      <div className="absolute top-[10vh] left-[5vw] text-black max-w-md max-md:top-[5vh] max-md:left-[5vw] max-md:max-w-[80%]">
        {/* <p className="text-xs uppercase font-bold">// Don't Miss Out</p> */}
       
      </div>

      {/* Bottom Left Section */}
      <div className="absolute bottom-[10vh] left-[5vw] max-md:bottom-[5vh] max-md:left-[5vw] max-md:max-w-[80%]">
      <h2 className="text-xs font-medium md:mt-2 leading-snug max-md:text-md w-72">
        Crypto should move as fast as you do. You’re not just using digital assets—you’re integrating them seamlessly into your life.
        </h2>
        <h1 className="text-7xl font-bold leading-tight max-md:text-4xl">
          Powered by{" "}
          <img
            src={cultureDesktop}
            alt="culture"
            className="object-contain mt-3.5 max-w-full aspect-[4.27] w-[40vw] md:w-[20vw]"
          />
        </h1>
      </div>

      {/* Right Side Icons */}
      <div className="absolute md:top-[10vh] right-[5vw] flex flex-col gap-4  max-md:right-[5vw] max-md:gap-2">
        <span className="mb-6 text-xs text-gray-900 md:block hidden">/ 06</span>
        <div className="bg-yellow-400 rounded-lg shadow-lg w-[5vw] h-[5vw] flex justify-center items-center max-md:w-[8vw] max-md:h-[8vw]">
          <img src={eyes} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="bg-yellow-400 rounded-lg shadow-lg w-[5vw] h-[5vw] flex justify-center items-center max-md:w-[8vw] max-md:h-[8vw]">
          <img src={fingers} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="bg-yellow-400 rounded-lg shadow-lg w-[5vw] h-[5vw] flex justify-center items-center max-md:w-[8vw] max-md:h-[8vw]">
          <img src={temp} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default LaughingRobo;