import React from "react";
import cultureDesktop from "../assets/cultureDesktop.png";
import Vector from "../assets/Vector.png";
import robo2 from "../assets/robo2.png";
import eyes from "../assets/eyes.png";
import temp from "../assets/temp.png";
import fingers from "../assets/fingers.png";
import iphone_15 from "../assets/iphone-15.png";
import star from "../assets/star.png";

const LaughingRobo = () => {
  return (
    <div
      className="relative w-full min-h-screen mt-64 flex justify-center items-center bg-no-repeat bg-center bg-cover rounded-t-3xl"
      style={{ backgroundColor: "#ffd972" }}
    >
      {/* Background Vector */}
      <img
        src={Vector}
        alt=""
        className="absolute w-[40vw] max-md:w-[30vw] max-md:top-0 max-md:left-1/2 max-md:-translate-x-1/2"
      />

      {/* iPhone Image */}
      <img
        src={iphone_15}
        alt=""
        className="absolute  w-[80vw] md:w-[40vw] right-[10vw] bottom-[40vh] md:right-[20vw]"
      />

      {/* Stars */}
      <img
        src={star}
        alt=""
        className="absolute md:w-[10vw] md:bottom-[45vh] md:right-[43vw] w-[5vw]"
      />
      <img
        src={star}
        alt=""
        className="absolute md:w-[10vw] md:bottom-[95vh] md:right-[28vw] w-[5vw]"
      />

      {/* Robo Image */}
      <img
        src={robo2}
        alt=""
        className="absolute w-[60vw] md:w-[25vw] bottom-[20vh] right-0 md:bottom-[10vh] md:right-[10vw]"
      />

      {/* Launch App Button */}
      <div className="absolute bg-white rounded-2xl p-[2px] border border-black bottom-[35vh] right-[50vw] md:bottom-[45vh] md:right-[35vw] transform -translate-y-1/2">
        <div className="relative">
          <button className="bg-black text-white px-6 py-2 rounded-2xl text-lg shadow-lg border-2 border-[#ffd972]">
            Launch App
          </button>
        </div>
      </div>

      {/* Left Text Content */}
      <div className="absolute top-[10vh] left-[5vw] text-black max-w-md max-md:top-[5vh] max-md:left-[5vw] max-md:max-w-[80%]">
        <p className="text-xs uppercase font-bold">// Don't Miss Out</p>
        <h2 className="text-lg font-medium mt-2 leading-snug max-md:text-md">
          Crypto should move as fast as you do. You’re not just using digital
          assets—you’re integrating them seamlessly into your life.
        </h2>
      </div>

      {/* Bottom Left Section */}
      <div className="absolute bottom-[10vh] left-[5vw] max-md:bottom-[5vh] max-md:left-[5vw] max-md:max-w-[80%]">
        <p className="text-sm max-md:text-xs">Ready to experience the difference? 🚀</p>
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
      <div className="absolute top-[10vh] right-[5vw] flex flex-col gap-4 max-md:top-[5vh] max-md:right-[5vw] max-md:gap-2">
        <span className="mb-6 text-xs text-gray-900">/ 06</span>
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